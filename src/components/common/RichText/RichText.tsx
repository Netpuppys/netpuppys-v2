interface RichTextProps {
  html: string;
  className?: string;
  as?: "div" | "p";
}

/**
 * Renders short HTML copy migrated from WordPress (paragraphs with <b>/<strong>).
 * Only ever fed our own static content from lib/data — never user input.
 */
export const RichText: React.FC<RichTextProps> = ({ html, className = "", as: Tag = "div" }) => (
  <Tag
    className={["[&_b]:font-bold [&_p+p]:mt-4 [&_strong]:font-bold", className].join(" ")}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
