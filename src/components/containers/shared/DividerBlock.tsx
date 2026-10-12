import { WaveDivider } from "@/components/common/WaveDivider";
import { Container } from "@/components/containers/common/Container";

/** Centred wave hairline in the content width, with the vertical rhythm used between inner-page sections. */
export const DividerBlock: React.FC<{ className?: string }> = ({ className = "my-[80px] lg:my-[120px]" }) => (
  <Container className={className}>
    <WaveDivider />
  </Container>
);
