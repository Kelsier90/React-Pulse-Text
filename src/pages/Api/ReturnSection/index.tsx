import Section from "../../../components/Section";
import PropList from "../../../components/PropList";
import PropListItem from "../../../components/PropList/PropListItem.tsx";

export default function ReturnSection() {
  return (
    <Section heading="Return">
      <p>
        The <code>usePulseText</code> hook returns an object with the following structure:
      </p>

      <PropList>
        <PropListItem
          name="text"
          type="string"
          description="The current animated text that changes during the pulsing animation process."
        />
        <PropListItem
          name="reset"
          type="() => void"
          description="A function to reset the animation and return the text to its initial state."
        />
      </PropList>
    </Section>
  );
}
