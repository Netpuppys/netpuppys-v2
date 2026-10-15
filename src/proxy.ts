import { NextResponse, type NextRequest } from "next/server";

/**
 * The hacked WordPress sitemap pushed ~6,200 spam URLs of the form
 * /?id=SOMETHING (gambling keywords). Answer them with 410 Gone so search
 * engines drop them, instead of serving the homepage under thousands of URLs.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.searchParams.has("id")) {
    return new NextResponse("Gone", { status: 410, headers: { "X-Robots-Tag": "noindex" } });
  }
  return NextResponse.next();
}

export const config = { matcher: "/" };
