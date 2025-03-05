import PageContent from "../../components/PageContent";
import usePulseText from "../../../lib/hooks/usePulseText.ts";
import { useState } from "react";
import Link from "../../components/Link";

export default function Error404() {
  const [showGoToTheHomePage, setShowGoToTheHomePage] = useState(false);

  const { text: introText } = usePulseText({
    text: "Oops! It looks like you've ventured into uncharted digital territory. The page you're looking for seems to have gone on vacation without leaving a forwarding address.",
    duration: 500,
  });
  const { text: block1Heading } = usePulseText({ text: "What happened?", duration: 500, delay: 500 });
  const { text: block1Paragraph } = usePulseText({
    text: "The page might have been moved, deleted, or perhaps never existed in the first place. It's one of the internet's little mysteries.",
    duration: 500,
    delay: 1000,
  });
  const { text: block2Heading } = usePulseText({ text: "What can you do now?", duration: 500, delay: 1500 });
  const { text: block2Paragraph1 } = usePulseText({
    text: "- Double-check the URL for typos",
    duration: 500,
    delay: 2000,
  });
  const { text: block2Paragraph2 } = usePulseText({ text: "- Go back to the homepage", duration: 500, delay: 2500 });
  const { text: block2Paragraph3 } = usePulseText({
    text: "- Contact our support team if you believe this is an error",
    duration: 500,
    delay: 3000,
  });
  const { text: block2Paragraph4 } = usePulseText({
    text: "Remember, not all who wander are lost, but in this case, your browser definitely is. Let's get you back on track!",
    duration: 500,
    delay: 3500,
    onEnd: () => setShowGoToTheHomePage(true),
  });

  return (
    <PageContent heading="404: Page Not Found">
      <p>{introText}</p>
      <h3>{block1Heading}</h3>
      <p>{block1Paragraph}</p>
      <h3>{block2Heading}</h3>
      <ul>
        <li>{block2Paragraph1}</li>
        <li>{block2Paragraph2}</li>
        <li>{block2Paragraph3}</li>
      </ul>
      <p>{block2Paragraph4}</p>
      {showGoToTheHomePage ? <Link href="/">Go to the homepage</Link> : null}
    </PageContent>
  );
}
