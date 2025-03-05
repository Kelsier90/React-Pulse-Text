import Section from "../../../components/Section";
import CodeSnippet from "../../../components/CodeSnippet";
import { getCode } from "../../../utils/code.ts";
import Link from "../../../components/Link";

export default function UsageSection() {
  const code = getCode({ text: "React Pulse Text", duration: 2000 });

  return (
    <Section heading="Usage">
      <p>After installation, import and use the hook to animate texts in your React components.</p>
      <CodeSnippet>{code}</CodeSnippet>
      <p>
        For a comprehensive overview of all available options and return values of the hook, visit the{" "}
        <Link href="/api-reference">API reference page</Link>.
      </p>
      <p>
        Want to see the hook in action before implementing it in your project? Go to the{" "}
        <Link href="/playground">Playground</Link> to experiment with different configurations directly in your browser.
      </p>
    </Section>
  );
}
