import Section from "../../../components/Section";
import PropList from "../../../components/PropList";
import PropListItem from "../../../components/PropList/PropListItem.tsx";
import CodeSnippet from "../../../components/CodeSnippet";

export default function OptionsSection() {
  return (
    <Section heading="Options">
      <p>
        These are the options that can be used in the <code>usePulseText</code> hook. These options define how the
        pulsing text behaves and can be customized to suit specific use cases.
      </p>

      <CodeSnippet>{`usePulseText(options)`}</CodeSnippet>

      <PropList>
        <PropListItem name="text" type="string" description='The base text that will be animated or "pulsed."' />
        <PropListItem
          name="duration"
          type="number"
          defaultValue="1000"
          description="Controls the overall duration of one animation iteration (in milliseconds)."
        />
        <PropListItem
          name="delay"
          type="number"
          defaultValue="0"
          description="Initial delay before the animation begins (in milliseconds)."
        />
        <PropListItem
          name="iterationCount"
          type="number"
          defaultValue="1"
          description="The total number of times the animation should repeat."
        />
        <PropListItem
          name="iterationDelay"
          type="number"
          defaultValue="0"
          description="Delay between consecutive iterations (in milliseconds)."
        />
        <PropListItem
          name="reverse"
          type="boolean"
          defaultValue="false"
          description="Whether the text animation should progress in reverse order (e.g., from end to start)."
        />
        <PropListItem
          name="erase"
          type="boolean"
          defaultValue="false"
          description="Whether the text should erase itself instead of being appended in each step of the animation."
        />
        <PropListItem
          name="active"
          type="boolean"
          defaultValue="true"
          description="Whether the animation is active. If false, the animation will not run."
        />
        <PropListItem
          name="onStart"
          type="() => void"
          defaultValue="undefined"
          description="Optional callback that is invoked when the animation starts."
        />
        <PropListItem
          name="onChange"
          type="(params: { text: string; iteration: number; }) => void"
          defaultValue="undefined"
          description="Optional callback triggered whenever the text updates, providing the current state."
        />
        <PropListItem
          name="onEnd"
          type="() => void"
          defaultValue="undefined"
          description="Optional callback invoked when the animation completes all iterations."
        />
      </PropList>
    </Section>
  );
}
