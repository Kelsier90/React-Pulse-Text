## Examples

### Basic
```js
<PulseText text="Pulse text" duration={6000}>
    <h1>Pulse text</h1>
</PulseText>
```

---

### With delay
```js
<PulseText text="Pulse text" duration={6000} delay={4000}>
    <h1>Pulse text</h1>
</PulseText>
```

---

### With several iterations
```js
<PulseText text="Pulse text" duration={6000} iterationCount={99999}>
    <h1>Pulse text</h1>
</PulseText>
```

---

### Animate other prop
```js
<PulseText text="Pulse text" textProp="value" duration={6000} iterationCount={99999}>
    <textarea />
</PulseText>
```

```js
<PulseText text="Pulse text" textProp="placeholder" duration={6000} iterationCount={99999}>
    <input />
</PulseText>
```

---

### With reverse
```js
<PulseText text="Pulse text" duration={6000} iterationCount={99999} reverse>
    <h1>Pulse text</h1>
</PulseText>
```

---

### Pause and resume
```js
const [active, setActive] = React.useState(true);
<>
    <button type="button" onClick={() => setActive(!active)}>
        {active ? 'Pause' : 'Resume'}
    </button>
    
    <PulseText text="Pulse text" duration={6000} iterationCount={99999} active={active}>
        <h1>Pulse text</h1>
    </PulseText>
</>
```

---

### With custom text
```js
const renderText = (currentText, nextLetter, currentRawText) => (
    nextLetter 
    ? <>
        {currentText}
        <span style={{color: currentRawText.length % 2 === 0 ? 'red' : 'green'}}>
            {nextLetter}
        </span>
    </>
    : ''
);
<PulseText text="Pulse text" duration={6000} iterationCount={99999} renderText={renderText}>
    <h1>Pulse text</h1>
</PulseText>
```

---

### Text with blinking caret
```js noeditor
<PulseText text="Pulse text" duration={6000} iterationCount={99999}>
    <h1 className="text-with-cursor">Pulse text</h1>
</PulseText>
```

*css*
```css
@keyframes blink-animation {
    50% {
        opacity: 0;
    }
}

.text-with-cursor::after {
    content: '|';
    color: gray;
    display: inline-block;
    animation-name: blink-animation;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
}
```

---

### Input with caret
```js
const renderText = (currentText, nextLetter, currentRawText) => (
    nextLetter 
    ? currentRawText + nextLetter + (currentText.length % 2 === 0 ? '_' : '')
    : ''
);

<PulseText text="Pulse text" textProp="value" duration={3000} iterationCount={99999} renderText={renderText}>
    <input />
</PulseText>
```

---

### With animated letters
```js
const renderText = (currentText, nextLetter, currentRawText) => (
    nextLetter 
        ? <>
            {currentRawText}
            <span key={currentRawText.length} className="letter">
                {nextLetter === ' ' ? '_' : nextLetter}
            </span>
        </>
        : ''
);

<PulseText text="Pulse text" duration={10000}  iterationCount={99999} renderText={renderText}>
    <h1>Pulse text</h1>
</PulseText>
```

*css*
```css
@keyframes letter-animation {
    from {
        transform: scale(20) translateX(-400px);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

.letter {
    color: red;
    display: inline-block;
    animation-name: letter-animation;
    animation-duration: 1000ms;
}
```
