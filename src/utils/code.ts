import PulseTextProps from "../../lib/types/PulseTextProps.ts";

export function getCode({
  text,
  duration,
  delay,
  iterationCount,
  iterationDelay,
  active,
  reverse,
  erase,
}: PulseTextProps): string {
  let propsCode = `text: "${text}",\n`;

  if (duration !== undefined) propsCode += `    duration: ${duration},\n`;
  if (delay !== undefined) propsCode += `    delay: ${delay},\n`;
  if (iterationCount !== undefined) propsCode += `    iterationCount: ${iterationCount},\n`;
  if (iterationDelay !== undefined) propsCode += `    iterationDelay: ${iterationDelay},\n`;
  if (active !== undefined) propsCode += `    active: ${active.toString()},\n`;
  if (reverse !== undefined) propsCode += `    reverse: ${reverse.toString()},\n`;
  if (erase !== undefined) propsCode += `    erase: ${erase.toString()},\n`;

  propsCode = propsCode.trimEnd();

  return `import { usePulseText } from "@kelsier90/react-pulse-text";

const PulseTextExample = () => {
  const { text } = usePulseText({
    ${propsCode}
  });

  return <h1>{text}</h1>;
};

export default PulseTextExample;
`;
}
