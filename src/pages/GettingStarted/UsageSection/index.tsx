import Section from "../../../components/Section";
import CodeSnippet from "../../../components/CodeSnippet";
import { getCode } from "../../../utils/code.ts";

export default function UsageSection() {
  const code = getCode({ text: "React Pulse Text", duration: 2000 });

  return (
    <Section heading="Usage">
      <p>After installation, import and use the hook to animate texts in your React components.</p>
      <CodeSnippet>{code}</CodeSnippet>
    </Section>
  );
}
