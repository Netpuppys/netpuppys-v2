"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Sparkle } from "@/components/common/Sparkle";
import { HCaptcha } from "./HCaptcha";

export type ContactField = "name" | "email" | "company" | "website" | "phone" | "service" | "budget" | "message";

interface ContactFormProps {
  /** Which form this is — sent with the submission so the inbox can tell them apart. */
  source: string;
  fields?: ContactField[];
  submitLabel: string;
  title?: string;
  /** Decoration on the card: sparkle (Contact), rocket + sparkle (Free Audit). */
  decoration?: "sparkle" | "rocket";
  services?: string[];
  budgets?: string[];
  className?: string;
}

const placeholders: Record<Exclude<ContactField, "service" | "budget">, string> = {
  name: "Name",
  email: "Email",
  company: "Company name",
  website: "Website URL",
  phone: "Phone number",
  message: "What can we help you with?",
};

const fieldClass =
  "w-full rounded-[18px] border border-line bg-white px-[22px] py-[13px] text-base font-light text-body outline-none transition-colors placeholder:text-body/60 focus:border-orange";

/**
 * Lead form used on Contact, Free Audit and the landing page. White card with
 * the theme's offset black shadow. Submits straight from the browser to
 * Web3Forms (leads arrive by email) when NEXT_PUBLIC_WEB3FORMS_KEY is set,
 * otherwise to /api/contact; then sends the visitor to /thankyou, like the
 * Elementor form did.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/** Readable labels for the lead email. */
const emailLabels: Record<ContactField, string> = {
  name: "Name",
  email: "Email",
  company: "Company",
  website: "Website",
  phone: "Phone",
  service: "Service",
  budget: "Budget",
  message: "Message",
};

async function submitLead(data: Record<string, string>, source: string) {
  // Honeypot: bots fill the hidden field — pretend success, send nothing.
  if (data.company_url) return;
  delete data.company_url;

  if (!WEB3FORMS_KEY) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return;
  }

  const fields = Object.fromEntries(
    Object.entries(data)
      .filter(([, v]) => v.trim() !== "")
      .map(([k, v]) => [emailLabels[k as ContactField] ?? k, v]),
  );
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `New lead from ${source} — netpuppys.com`,
      from_name: "Netpuppys website",
      replyto: data.email,
      Source: source,
      Page: window.location.href,
      ...fields,
    }),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: boolean };
  if (!res.ok || !json.success) throw new Error("Web3Forms submission failed");
}

export const ContactForm: React.FC<ContactFormProps> = ({
  source,
  fields = ["name", "email", "company", "phone", "message"],
  submitLabel,
  title,
  decoration = "sparkle",
  services = [],
  budgets = [],
  className = "",
}) => {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "captcha">("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaReset, setCaptchaReset] = useState(0);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (WEB3FORMS_KEY && !captchaToken) {
      setStatus("captcha");
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries([...new FormData(e.currentTarget).entries()].map(([k, v]) => [k, String(v)]));
    try {
      await submitLead(data, source);
      router.push("/thankyou");
    } catch {
      setStatus("error");
      // hCaptcha tokens are single-use — ask for a fresh tick before retrying.
      setCaptchaToken("");
      setCaptchaReset((n) => n + 1);
    }
  };

  return (
    <div className={["relative", className].join(" ")}>
      {decoration === "rocket" && (
        <Image
          src="/images/wp/2023/05/GettyImages-1367732506-159x300.png"
          alt=""
          width={159}
          height={300}
          className="absolute -top-[60px] right-[20px] z-10 hidden h-[150px] w-auto md:block lg:right-[40px] lg:h-[187px]"
        />
      )}
      <Sparkle
        className={[
          "absolute z-10 hidden h-[70px] w-[70px] fill-ink md:block",
          decoration === "rocket" ? "-top-[37px] right-[143px]" : "-top-[38px] right-[47px]",
        ].join(" ")}
      />
      <form
        onSubmit={onSubmit}
        className="relative rounded-[40px] bg-white px-5 pb-5 pt-[25px] shadow-[10px_15px_0_0_rgba(0,0,0,0.69)] max-sm:mr-[10px] sm:px-[55px] sm:pb-10 sm:pt-12"
      >
        {title && <h4 className="mb-[35px] font-display text-[28px] font-bold leading-[1.2] tracking-[-0.6px] text-ink">{title}</h4>}
        <div className="flex flex-col gap-5">
          {fields.map((f) => {
            if (f === "message")
              return (
                <textarea
                  key={f}
                  name={f}
                  placeholder={placeholders.message}
                  aria-label={placeholders.message}
                  rows={4}
                  className={[fieldClass, title ? "h-[100px]" : "h-[124px]", "resize-none"].join(" ")}
                />
              );
            if (f === "service" || f === "budget") {
              const opts = f === "service" ? services : budgets;
              const label = f === "service" ? "Choose Service" : "Estimated Budget";
              return (
                <label key={f} className="block">
                  <span className="mb-1.5 block text-base font-normal text-ink">{label}</span>
                  <select name={f} defaultValue="" className={[fieldClass, "h-[52px] appearance-none"].join(" ")}>
                    <option value="" disabled>
                      {f === "service" ? "Select a Service" : "Select Your Budget"}
                    </option>
                    {opts.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              );
            }
            return (
              <input
                key={f}
                name={f}
                type={f === "email" ? "email" : f === "phone" ? "tel" : f === "website" ? "url" : "text"}
                required={f === "email"}
                placeholder={placeholders[f]}
                aria-label={placeholders[f]}
                className={[fieldClass, "h-[52px]"].join(" ")}
              />
            );
          })}
          {/* Honeypot — real visitors never see or fill this. */}
          <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          {WEB3FORMS_KEY && (
            <HCaptcha
              resetSignal={captchaReset}
              onVerify={(t) => {
                setCaptchaToken(t);
                if (t) setStatus((s) => (s === "captcha" ? "idle" : s));
              }}
            />
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex h-[50px] w-full items-center justify-center gap-2 rounded-[18px] bg-ink font-syne text-xs font-bold uppercase tracking-[-0.2px] text-white disabled:opacity-60"
          >
            <span className="hover-fill [--fill:rgba(176,167,239,0.35)]">{status === "sending" ? "Sending…" : submitLabel}</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </button>
          {status === "captcha" && (
            <p role="alert" className="text-sm text-[#c0392b]">
              Please tick &ldquo;I am human&rdquo; before sending.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-[#c0392b]">
              Something went wrong — please call us on +91 9266707333 or try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
