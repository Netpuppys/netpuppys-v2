import { NextResponse } from "next/server";

/**
 * Receives every lead form on the site (Contact, Free Audit, landing page).
 *
 * Delivery is configured with environment variables — set at least one:
 *   RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL)  → email via Resend
 *   FORM_WEBHOOK_URL                                                   → POST the lead as JSON
 *                                                                        (Zapier, Make, Google Apps Script, CRM…)
 * With neither set, the lead is only logged (fine for local development).
 */
export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  // Honeypot filled → bot. Pretend success.
  if (body.company_url) return NextResponse.json({ ok: true });

  const email = (body.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 422 });
  }

  const lead = Object.fromEntries(
    Object.entries(body)
      .filter(([k]) => k !== "company_url")
      .map(([k, v]) => [k, String(v).slice(0, 5000)]),
  );

  const tasks: Promise<unknown>[] = [];

  if (process.env.FORM_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.FORM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      }),
    );
  }

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    const rows = Object.entries(lead)
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
      .join("");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Netpuppys Website <onboarding@resend.dev>",
          to: process.env.CONTACT_TO_EMAIL.split(","),
          reply_to: email,
          subject: `New lead (${lead.source ?? "website"}): ${lead.name || email}`,
          html: `<table>${rows}</table>`,
        }),
      }),
    );
  }

  if (tasks.length === 0) console.info("[contact] lead received (no delivery configured):", lead);

  const results = await Promise.allSettled(tasks);
  const failed = results.some((r) => r.status === "rejected" || (r.status === "fulfilled" && r.value instanceof Response && !r.value.ok));
  if (failed) return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}
