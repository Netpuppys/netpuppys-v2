import { Layout } from "@/components/containers/common/Layout";

/** Every regular page gets the shared header, footer and floating contact buttons. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return <Layout>{children}</Layout>;
}
