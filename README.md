# React Pulse Text

![React Pulse Text](https://repository-images.githubusercontent.com/244492121/9bfa522a-a95a-4966-9a95-34a09487b420)

> A lightweight, zero-dependency React hook that creates dynamic typing and erasing text animations for modern UI experiences.

[![npm version](https://img.shields.io/npm/v/@kelsier90/react-pulse-text.svg)](https://www.npmjs.com/package/@kelsier90/react-pulse-text)
[![npm downloads](https://img.shields.io/npm/dm/@kelsier90/react-pulse-text.svg)](https://www.npmjs.com/package/@kelsier90/react-pulse-text)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40kelsier90%2Freact-pulse-text)](https://bundlephobia.com/package/@kelsier90/react-pulse-text)
[![license](https://img.shields.io/npm/l/@kelsier90/react-pulse-text.svg)](https://github.com/Kelsier90/React-Pulse-Text/blob/main/LICENSE)

## ✨ Demo & Documentation

**[Live Demo & Interactive Playground →](https://kelsier90.github.io/React-Pulse-Text/)**

## 🚀 Quick Start

```jsx
import React from "react";
import { usePulseText } from "@kelsier90/react-pulse-text";

function TypewriterHeading() {
  const { text } = usePulseText({
    text: "Hello, I'm a React developer!",
    duration: 2000,
    erase: true,
    iterationDelay: 1000,
  });

  return <h1>{text}</h1>;
}
```

## 📦 Installation

```bash
# npm
npm install @kelsier90/react-pulse-text

# yarn
yarn add @kelsier90/react-pulse-text

# pnpm
pnpm add @kelsier90/react-pulse-text
```

## 🔥 Features

- **Progressive Text Animation**: Build text character by character in forward or reverse order
- **Erase Effect Support**: Create typewriter-style animations with text that types and erases
- **Highly Customizable**: Configure animation duration, delay, iterations, and more
- **Lifecycle Callbacks**: Hook into animation events with `onStart`, `onChange`, and `onEnd`
- **Animation Controls**: Toggle animations on/off with the `active` prop
- **TypeScript-Ready**: Full type definitions for enhanced developer experience
- **Zero External Dependencies**: Only requires React as a peer dependency
- **Tiny Footprint**: Minimal impact on your bundle size
- **Simple API**: Intuitive interface for quick implementation

## 🛠️ API Reference

### Basic Configuration

```jsx
const { text } = usePulseText({
  text: "Your animated text", // The text to animate
  active: true, // Controls if animation runs (default: true)
  duration: 2000, // Animation duration in ms (default: 1000)
  delay: 0, // Initial delay before animation starts (default: 0)
  iterationCount: Infinity, // Number of times to repeat (default: 1)
  iterationDelay: 0, // Delay between iterations in ms (default: 0)
  erase: false, // Whether to erase text after showing (default: false)
  reverse: false, // Whether to animate from end to start (default: false)
});
```

### Animation Lifecycle Callbacks

```jsx
usePulseText({
  text: "Hello world!",
  onStart: () => console.log("Animation started"),
  onChange: ({ text, iteration }) => console.log("Current text:", text, "Current iteration:", iteration),
  onEnd: () => console.log("Animation completed"),
});
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Kelsier90/React-Pulse-Text).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
