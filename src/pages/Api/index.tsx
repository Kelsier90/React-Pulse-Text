import PageContent from "../../components/PageContent";
import OptionsSection from "./OptionsSection";
import ReturnSection from "./ReturnSection";

export default function Api() {
  return (
    <PageContent heading="API" sections={["Options", "Return"]}>
      <OptionsSection />
      <ReturnSection />
    </PageContent>
  );
}
