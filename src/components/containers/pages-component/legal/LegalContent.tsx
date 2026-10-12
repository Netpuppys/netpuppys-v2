import { Eyebrow } from "@/components/common/Eyebrow";
import { Container } from "@/components/containers/common/Container";
import type { LegalPage } from "@/lib/data/pages/legal";

/** Title block and long-form legal copy (body grey, bulleted lists indented). */
export const LegalContent: React.FC<{ page: LegalPage }> = ({ page }) => (
  <section className="pb-10 pt-10 lg:pt-[98px]">
    <Container>
      <Eyebrow as="p">{page.eyebrow}</Eyebrow>
      {page.title && (
        <>
          <h1 className="mt-5 font-display text-[44px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-[66px] lg:tracking-[-2px]">{page.title}</h1>
          <p className="mt-5 text-xl font-normal leading-[26px] text-ink">{page.subtitle}</p>
        </>
      )}
      <div
        className={[
          "text-base font-light leading-6 text-body",
          "[&_a]:text-orange [&_a]:underline [&_b]:font-bold [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_li]:mt-0 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-[27px] [&_p]:mt-4 [&_strong]:font-bold [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-[27px]",
          page.title ? "mt-[70px]" : "mt-5",
        ].join(" ")}
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </Container>
  </section>
);
