import { Container } from "@/components/containers/common/Container";
import type { Post } from "@/lib/wordpress";

/**
 * Cleaned WordPress HTML (see lib/wordpress/html.ts), styled by the
 * `.wp-content` rules in globals.css, followed by the Tags pill + list.
 */
export const PostBody: React.FC<{ post: Post }> = ({ post }) => (
  <Container>
    <div className="mx-auto mt-10 max-w-[830px]">
      {/* Content comes from the site's own WordPress and is sanitised in cleanWpHtml. */}
      <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.html }} />

      {post.tags.length > 0 && (
        <div className="mt-11 text-center">
          <p className="inline-block rounded-[18px] bg-peach py-[5px] pl-[15px] pr-[17px] text-sm font-light leading-[19.6px] text-ink">Tags</p>
          <p className="mt-2 text-left text-sm font-light leading-[19.6px] text-ink">{post.tags.map((t) => t.name).join(", ")}</p>
        </div>
      )}
    </div>
  </Container>
);
