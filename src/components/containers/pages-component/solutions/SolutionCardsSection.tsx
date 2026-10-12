import { IconCardGrid } from "@/containers/shared/IconCardGrid";
import { Container } from "@/components/containers/common/Container";
import { solutionCards } from "@/lib/data/pages/solutions";

/** All nine service cards (4 · 4 · 1 centred) on the white → peach → white band. */
export const SolutionCardsSection: React.FC = () => (
  <section className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffebdb_18%,#ffebdb_82%,#ffffff_100%)] pb-10 pt-[60px]">
    <Container className="flex flex-col gap-5">
      <IconCardGrid cards={solutionCards.slice(0, 4)} showLink cardClassName="lg:min-h-[467px]" />
      <IconCardGrid cards={solutionCards.slice(4, 8)} showLink cardClassName="lg:min-h-[467px]" />
      <div className="flex justify-center">
        <IconCardGrid cards={solutionCards.slice(8)} showLink className="w-full sm:w-auto sm:!grid-cols-1 lg:!grid-cols-1 lg:w-[305px]" cardClassName="lg:min-h-[443px]" />
      </div>
    </Container>
  </section>
);
