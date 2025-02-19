type PulseTextProps = {
  text: string;
  duration?: number;
  delay?: number;
  iterationCount?: number;
  iterationDelay?: number;
  reverse?: boolean;
  active?: boolean;
  onStart?: () => void;
  onChange?: (state: { text: string; iteration: number }) => void;
  onEnd?: () => void;
};

export default PulseTextProps;
