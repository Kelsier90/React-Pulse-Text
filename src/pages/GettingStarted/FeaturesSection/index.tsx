import Section from "../../../components/Section";
import FeatureItem from "./FeatureItem.tsx";

export default function FeaturesSection() {
  return (
    <Section heading="Features">
      <ul>
        <FeatureItem title="Text Animation">
          The hook animates text by constructing it letter by letter over time, either forward or in reverse order.
        </FeatureItem>
        <FeatureItem title="Erase Support">
          It can display text character by character and erase it in a similar stepwise manner.
        </FeatureItem>
        <FeatureItem title="Customizability">
          Allows configuration for animation duration, delay, number of iterations, and iteration delay.
        </FeatureItem>
        <FeatureItem title="Callbacks">
          Provides notifications (onStart, onChange, onEnd) at various stages of the animation lifecycle.
        </FeatureItem>
        <FeatureItem title="Control Props">The animation can be toggled on/off with the active prop.</FeatureItem>
        <FeatureItem title="Lightweight">Minimal package size, keeping your project lean and efficient.</FeatureItem>
        <FeatureItem title="No dependencies">
          No additional libraries required, only specifying react as a peer dependency.
        </FeatureItem>
        <FeatureItem title="TypeScript Support">Fully typed for rich development experience.</FeatureItem>
        <FeatureItem title="Ease of use">Straightforward API for effortless integration.</FeatureItem>
      </ul>
    </Section>
  );
}
