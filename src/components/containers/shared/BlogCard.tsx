import Image from "next/image";
import Link from "next/link";

export interface BlogCardData {
  href: string;
  title: string;
  date: string;
  image: { src: string; width: number; height: number; alt: string } | null;
}

/**
 * The theme's post card: 50px-rounded white card with a hairline border,
 * cover image on top, date + bold Poppins title below. Used on the homepage,
 * /blogs and "What to read next".
 */
export const BlogCard: React.FC<{ post: BlogCardData; variant?: "home" | "grid" }> = ({ post, variant = "home" }) => (
  <article className={["overflow-hidden rounded-[50px] border border-line bg-white", variant === "home" ? "h-full min-h-[445px] md:min-h-0 lg:min-h-[458px]" : "pb-[30px] lg:min-h-[486px]"].join(" ")}>
    <Link href={post.href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-t-[50px] bg-blush">
      {post.image && (
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
          sizes="(min-width: 1320px) 410px, (min-width: 768px) 33vw, 100vw"
          className={[
            "w-full object-cover transition-transform duration-500 hover:scale-[1.03]",
            variant === "home" ? "aspect-[388/275] md:aspect-[398/275]" : "aspect-[405/283]",
          ].join(" ")}
        />
      )}
      {!post.image && <div className={variant === "home" ? "aspect-[398/275]" : "aspect-[405/283]"} />}
    </Link>
    <div className={variant === "home" ? "px-[35px] pb-10 pt-[30px]" : "px-[35px] pt-[35px]"}>
      <time className="text-base font-light leading-6 text-body">{post.date}</time>
      <h3 className={variant === "home" ? "mt-2.5 leading-[19.8px] md:mt-2 md:leading-6" : "mt-[18px]"}>
        <Link href={post.href} className="font-display text-lg font-bold leading-[19.8px] tracking-[-0.6px] text-ink hover:text-orange md:text-xl md:leading-6">
          {post.title}
        </Link>
      </h3>
    </div>
  </article>
);
