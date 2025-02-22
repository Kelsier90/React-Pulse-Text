import PageContent from "../../components/PageContent";
import FeaturesSection from "./FeaturesSection";
import InstallationSection from "./InstallationSection";
import UsageSection from "./UsageSection";
import IntroductionSection from "./IntroductionSection";

export default function GettingStarted() {
  return (
    <PageContent heading="Getting Started" sections={["Introduction", "Features", "Installation", "Usage"]}>
      <IntroductionSection />
      <FeaturesSection />
      <InstallationSection />
      <UsageSection />
    </PageContent>
  );
}
