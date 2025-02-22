import Section from "../../../components/Section";
import CodeSnippet from "../../../components/CodeSnippet";

export default function UsageSection() {
  const code = `import { usePulseText } from "@kelsier90/react-pulse-text";

const PulseTextExample = () => {
  const { text } = usePulseText({
    text: "Hello world!",
    duration: 4000,
  });

  return <h1>{text}</h1>;
};

export default PulseTextExample;
`;

  return (
    <Section heading="Usage">
      <p>After installation, import and use the hook to animate texts in your React components.</p>
      <CodeSnippet>{code}</CodeSnippet>
    </Section>
  );
}
