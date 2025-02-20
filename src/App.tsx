import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import usePulseText from "../lib/main";

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("Initial text");
  const [iterationCount, setIterationCount] = useState(1);
  const [duration, setDuration] = useState(1000);
  const [delay, setDelay] = useState(0);

  const pulseText = usePulseText({
    text,
    duration,
    delay,
    iterationCount,
    iterationDelay: 2000,
    active,
    onStart: () => console.log("Start"),
    onChange: ({ text, iteration }) => console.log("Change", text, iteration),
    onEnd: () => console.log("End"),
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <input type="number" value={iterationCount} onChange={(e) => setIterationCount(parseInt(e.target.value))} />
        <input type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} />
        <input type="number" value={delay} onChange={(e) => setDelay(parseInt(e.target.value))} />
        <button onClick={() => setActive((v) => !v)}>{active ? "Pause" : "Play"}</button>
        <button onClick={() => pulseText.reset()}>Reset</button>
        <p>{pulseText.text}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
