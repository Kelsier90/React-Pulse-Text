# React Pulse Text

The `usePulseText` hook is designed to create an animated text effect, where the content of a string progressively appears or disappears (erases) in a given pattern. This hook provides features such as specifying animation duration, delay, iteration count, and behavior like reversing the animation or erasing the text.

It is well-suited for dynamic user interfaces to visually enhance text presentation by implementing pulsating or typing-like effects.

- [Features](#features)
  - [Installation](#installation)
    - [Using npm](#using-npm)
    - [Using Yarn](#using-yarn)
    - [Using pnpm](#using-pnpm)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Text Animation**: The hook animates text by constructing it letter by letter over time, either forward or in reverse order.
- **Erase Support**: It can display text character by character and erase it in a similar stepwise manner.
- **Customizability**: Allows configuration for animation duration, delay, number of iterations, and iteration delay.
- **Callbacks**: Provides notifications (`onStart`, `onChange`, `onEnd`) at various stages of the animation lifecycle.
- **Control Props**: The animation can be toggled on/off with the `active` prop.
- **Lightweight**: Minimal package size, keeping your project lean and efficient.
- **No dependencies**: No additional libraries required, only specifying `react` as a peer dependency.
- **TypeScript Support**: Fully typed for rich development experience.
- **Ease of use**: Straightforward API for effortless integration.

## Installation

Install the package using your preferred package manager:

### Using npm

```bash
npm install @kelsier90/react-pulse-text
```

### Using Yarn

```bash
yarn add @kelsier90/react-pulse-text
```

### Using pnpm

```bash
pnpm add @kelsier90/react-pulse-text
```

## Usage

After installation, import and use the hook to animate texts in your React components.

```jsx
import React from "react";
import { usePulseText } from "@kelsier90/react-pulse-text";

const PulseTextExample = () => {
  const { text } = usePulseText({
    text: "Hello world!",
    duration: 4000,
  });

  return <h1>{text}</h1>;
};

export default PulseTextExample;
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Kelsier90/React-Pulse-Text).

## License

This package is licensed under the [MIT License](./LICENSE).
