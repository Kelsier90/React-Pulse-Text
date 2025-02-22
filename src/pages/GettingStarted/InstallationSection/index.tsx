import Section from "../../../components/Section";
import CodeSnippet from "../../../components/CodeSnippet";

export default function InstallationSection() {
  return (
    <Section heading="Installation">
      <p>Install the package using your preferred package manager:</p>

      <h4>Using npm</h4>
      <CodeSnippet>npm install @kelsier90/react-pulse-text</CodeSnippet>

      <h4>Using Yarn</h4>
      <CodeSnippet>yarn add @kelsier90/react-pulse-text</CodeSnippet>

      <h4>Using pnpm</h4>
      <CodeSnippet>pnpm add @kelsier90/react-pulse-text</CodeSnippet>
    </Section>
  );
}
