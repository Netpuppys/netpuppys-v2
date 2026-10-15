import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { WP_CACHE_TAG } from "@/lib/wordpress/config";

/**
 * On-demand refresh after publishing in WordPress, so new/edited posts show
 * up immediately instead of within the hourly revalidation window.
 *
 *   POST /api/revalidate?secret=<WORDPRESS_REVALIDATE_SECRET>
 *
 * Call it from WordPress on "post published/updated" (e.g. WP Webhooks plugin,
 * or a few lines in functions.php with wp_remote_post on `save_post`).
 */
async function handle(req: NextRequest) {
  const secret = process.env.WORDPRESS_REVALIDATE_SECRET;
  if (!secret || req.nextUrl.searchParams.get("secret") !== secret) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }
  revalidateTag(WP_CACHE_TAG, { expire: 0 });
  revalidatePath("/blogs");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/");
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}

export const POST = handle;
export const GET = handle;
