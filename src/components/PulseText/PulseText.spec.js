import React from 'react';
import {
  mount, shallow, render,
} from 'enzyme';
import PulseText from './PulseText';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

describe('Pulse Text', () => {
  it('will have one child on init', () => {
    const text = 'Test';
    const wrapper = shallow(<PulseText text={text}><span /></PulseText>);
    expect(wrapper.find('*').length).toEqual(1);
  });

  it('will have the child with empty text on init', () => {
    const text = 'Test';
    const wrapper = shallow(<PulseText text={text}><span>Something else</span></PulseText>);
    expect(wrapper.find('*').text()).toEqual('');
  });

  it('will have the child with empty text in the prop indicated by textProp prop on init ', () => {
    const text = 'Test';
    let wrapper = shallow(<PulseText text={text} textProp="children"><span /></PulseText>);
    expect(wrapper.find('*').text()).toEqual('');

    wrapper = shallow(<PulseText text={text} textProp="value"><input type="text" value="Something else" /></PulseText>);
    expect(wrapper.find('input').props().value).toEqual('');
  });

  it('will update the text at the correct time', () => {
    const text = 'Test';
    const wrapper = mount(<PulseText text={text} duration={4000}><span>Test</span></PulseText>);
    const childWrapper = wrapper.find('span');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Tes');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Test');
  });

  it('will update the text at the correct time with delay', () => {
    const text = 'Test';
    const wrapper = mount(
      <PulseText text={text} delay={1400} duration={4000}>
        <span>Test</span>
      </PulseText>,
    );
    const childWrapper = wrapper.find('span');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(400);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Tes');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');
  });

  it('will update the text at the correct time several times', () => {
    const wrapper = mount(
      <PulseText text="Test" duration={4000} active iterationCount={3}>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');
    // 1st iteration

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Test');

    // 2nd iteration
    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Test');

    // 3rd iteration
    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Test');

    // I'ts over
    jest.advanceTimersByTime(3000);
    expect(childWrapper.text()).toEqual('Test');

    jest.advanceTimersByTime(3000);
    expect(childWrapper.text()).toEqual('Test');
  });

  it('will start when active prop is true', () => {
    const wrapper = mount(
      <PulseText text="Test" duration={2000} active>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');
  });

  it('won\'t start when active prop is false', () => {
    const wrapper = mount(
      <PulseText text="Test" duration={2000} active={false}>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(5000);
    expect(childWrapper.text()).toEqual('');
  });

  it('won\'t continue when active prop is changed from true to false', () => {
    const wrapper = mount(
      <PulseText text="Test" duration={4000} active>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    wrapper.setProps({ active: false });
    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(5000);
    expect(childWrapper.text()).toEqual('T');
  });

  it('will stop and continue when the active prop changes', () => {
    const wrapper = mount(
      <PulseText text="Test" duration={4000} active>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    jest.advanceTimersByTime(1000);

    expect(childWrapper.text()).toEqual('T');

    wrapper.setProps({ active: false });
    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    wrapper.setProps({ active: true });
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Test');
  });

  it('will stop and continue when the active prop changes and has delay', () => {
    const wrapper = mount(
      <PulseText text="Test" duration={4000} active delay={1000}>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    jest.advanceTimersByTime(500);
    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(1500);
    expect(childWrapper.text()).toEqual('T');

    wrapper.setProps({ active: false });
    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('T');

    wrapper.setProps({ active: true });
    expect(childWrapper.text()).toEqual('T');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Te');

    jest.advanceTimersByTime(2000);
    expect(childWrapper.text()).toEqual('Test');
  });

  it('will trigger onStart when it starts', () => {
    let onStartWasCalled = false;

    const onStartCallback = () => {
      onStartWasCalled = true;
    };

    mount(
      <PulseText text="Test" duration={4000} active onStart={onStartCallback}>
        <div />
      </PulseText>,
    );


    jest.advanceTimersByTime(0);

    expect(onStartWasCalled).toBeTruthy();
  });


  it('will trigger onStart when it starts with delay', () => {
    let onStartWasCalled = false;

    const onStartCallback = () => {
      onStartWasCalled = true;
    };

    mount(
      <PulseText text="Test" duration={4000} active onStart={onStartCallback} delay={1000}>
        <div />
      </PulseText>,
    );

    jest.advanceTimersByTime(0);
    expect(onStartWasCalled).toBeFalsy();

    jest.advanceTimersByTime(600);
    expect(onStartWasCalled).toBeFalsy();

    jest.advanceTimersByTime(400);
    expect(onStartWasCalled).toBeTruthy();
  });

  it('will trigger onChange when the text changes', () => {
    let timesOnChangeWasCalled = 0;
    let lastText = null;
    let lastLetter = null;
    let lastLap = null;

    const onChangeCallback = (text, letter, lap) => {
      timesOnChangeWasCalled += 1;
      lastText = text;
      lastLetter = letter;
      lastLap = lap;
    };

    mount(
      <PulseText text="Test" duration={4000} active iterationCount={2} onChange={onChangeCallback}>
        <div />
      </PulseText>,
    );

    jest.advanceTimersByTime(0);
    expect(timesOnChangeWasCalled).toEqual(0);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(0);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(1);
    expect(lastText).toEqual('T');
    expect(lastLetter).toEqual('T');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(1);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(2);
    expect(lastText).toEqual('Te');
    expect(lastLetter).toEqual('e');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(timesOnChangeWasCalled).toEqual(3);
    expect(lastText).toEqual('Tes');
    expect(lastLetter).toEqual('s');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(timesOnChangeWasCalled).toEqual(4);
    expect(lastText).toEqual('Test');
    expect(lastLetter).toEqual('t');
    expect(lastLap).toEqual(1);

    // 2nd iteration
    jest.advanceTimersByTime(1000);
    expect(timesOnChangeWasCalled).toEqual(5);
    expect(lastText).toEqual('');
    expect(lastLetter).toEqual('');
    expect(lastLap).toEqual(2);

    jest.advanceTimersByTime(4000);
    expect(timesOnChangeWasCalled).toEqual(9);
    expect(lastText).toEqual('Test');
    expect(lastLetter).toEqual('t');
    expect(lastLap).toEqual(2);

    jest.advanceTimersByTime(1000);
    expect(timesOnChangeWasCalled).toEqual(9);
  });

  it('will trigger onChange when the text changes with delay', () => {
    let timesOnChangeWasCalled = 0;
    let lastText = null;
    let lastLetter = null;
    let lastLap = null;

    const onChangeCallback = (text, letter, lap) => {
      timesOnChangeWasCalled += 1;
      lastText = text;
      lastLetter = letter;
      lastLap = lap;
    };

    mount(
      <PulseText text="Test" duration={4000} delay={1000} active iterationCount={1} onChange={onChangeCallback}>
        <div />
      </PulseText>,
    );

    jest.advanceTimersByTime(0);
    expect(timesOnChangeWasCalled).toEqual(0);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(0);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(timesOnChangeWasCalled).toEqual(1);
    expect(lastText).toEqual('T');
    expect(lastLetter).toEqual('T');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(1);

    jest.advanceTimersByTime(500);
    expect(timesOnChangeWasCalled).toEqual(2);
    expect(lastText).toEqual('Te');
    expect(lastLetter).toEqual('e');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(2000);
    expect(timesOnChangeWasCalled).toEqual(4);
    expect(lastText).toEqual('Test');
    expect(lastLetter).toEqual('t');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(timesOnChangeWasCalled).toEqual(4);
  });

  it('won\'t trigger onChange when paused', () => {
    let timesOnChangeWasCalled = 0;

    const onChangeCallback = () => {
      timesOnChangeWasCalled += 1;
    };

    const wrapper = mount(
      <PulseText text="Test" duration={4000} active={false} iterationCount={1} onChange={onChangeCallback}>
        <div />
      </PulseText>,
    );

    jest.advanceTimersByTime(8000);
    expect(timesOnChangeWasCalled).toEqual(0);

    wrapper.setProps({ active: true });
    jest.advanceTimersByTime(2000);
    expect(timesOnChangeWasCalled).toEqual(2);

    wrapper.setProps({ active: false });
    jest.advanceTimersByTime(2000);
    expect(timesOnChangeWasCalled).toEqual(2);
  });

  it('will trigger onEnd at the end', () => {
    let timesOnEndWasCalled = 0;

    const onEndCallback = () => {
      timesOnEndWasCalled += 1;
    };

    mount(
      <PulseText text="Test" duration={4000} active terationCount={1} onEnd={onEndCallback}>
        <div />
      </PulseText>,
    );

    jest.advanceTimersByTime(1000);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(3000);
    expect(timesOnEndWasCalled).toEqual(1);

    jest.advanceTimersByTime(8000);
    expect(timesOnEndWasCalled).toEqual(1);
  });

  it('won\'t trigger onEnd when paused', () => {
    let timesOnEndWasCalled = 0;

    const onEndCallback = () => {
      timesOnEndWasCalled += 1;
    };

    const wrapper = mount(
      <PulseText text="Test" duration={4000} active terationCount={1} onEnd={onEndCallback}>
        <div />
      </PulseText>,
    );

    jest.advanceTimersByTime(1000);
    expect(timesOnEndWasCalled).toEqual(0);

    wrapper.setProps({ active: false });
    jest.advanceTimersByTime(10000);
    expect(timesOnEndWasCalled).toEqual(0);

    wrapper.setProps({ active: true });
    jest.advanceTimersByTime(3000);
    expect(timesOnEndWasCalled).toEqual(1);

    jest.advanceTimersByTime(20000);
    expect(timesOnEndWasCalled).toEqual(1);
  });

  it('will start from the last letter to the first one when the reverse prop is true', () => {
    let timesOnStartWasCalled = 0;
    let timesOnChangeWasCalled = 0;
    let timesOnEndWasCalled = 0;
    let lastText = null;
    let lastLetter = null;
    let lastLap = null;

    const onStartCallback = () => {
      timesOnStartWasCalled += 1;
    };

    const onChangeCallback = (text, letter, lap) => {
      timesOnChangeWasCalled += 1;
      lastText = text;
      lastLetter = letter;
      lastLap = lap;
    };

    const onEndCallback = () => {
      timesOnEndWasCalled += 1;
    };

    const wrapper = mount(
      <PulseText
        text="Test"
        duration={4000}
        active
        iterationCount={2}
        reverse
        onStart={onStartCallback}
        onChange={onChangeCallback}
        onEnd={onEndCallback}
      >
        <div />
      </PulseText>,
    );

    const childWrapper = wrapper.find('div');

    expect(childWrapper.text()).toEqual('');

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('t');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(1);
    expect(lastText).toEqual('t');
    expect(lastLetter).toEqual('t');
    expect(lastLap).toEqual(1);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('st');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(2);
    expect(lastText).toEqual('st');
    expect(lastLetter).toEqual('s');
    expect(lastLap).toEqual(1);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('est');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(3);
    expect(lastText).toEqual('est');
    expect(lastLetter).toEqual('e');
    expect(lastLap).toEqual(1);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(4);
    expect(lastText).toEqual('Test');
    expect(lastLetter).toEqual('T');
    expect(lastLap).toEqual(1);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(5);
    expect(lastText).toEqual('');
    expect(lastLetter).toEqual('');
    expect(lastLap).toEqual(2);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('t');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(6);
    expect(lastText).toEqual('t');
    expect(lastLetter).toEqual('t');
    expect(lastLap).toEqual(2);
    expect(timesOnEndWasCalled).toEqual(0);

    jest.advanceTimersByTime(3000);
    expect(childWrapper.text()).toEqual('Test');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(9);
    expect(lastText).toEqual('Test');
    expect(lastLetter).toEqual('T');
    expect(lastLap).toEqual(2);
    expect(timesOnEndWasCalled).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.text()).toEqual('Test');
    expect(timesOnStartWasCalled).toEqual(1);
    expect(timesOnChangeWasCalled).toEqual(9);
    expect(timesOnEndWasCalled).toEqual(1);
  });

  it('will render a custom text', () => {
    let timesRenderTextWasCalled = 0;
    let lastRenderedText = null;
    let lastLetter = null;
    let lastRawText = null;
    let lastLap = null;

    const renderTextCallback = (renderedText, letter, rawText, lap) => {
      timesRenderTextWasCalled += 1;
      lastRenderedText = renderedText;
      lastLetter = letter;
      lastRawText = rawText;
      lastLap = lap;
      const newLetter = rawText.length % 2 === 0
        ? <b>{letter}</b>
        : <i>{letter}</i>;
      return (
        <>
          {renderedText}
          {newLetter}
        </>
      );
    };

    const wrapper = mount(
      <PulseText text="Test" duration={4000} renderText={renderTextCallback}>
        <div />
      </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    expect(childWrapper.text()).toEqual('');
    expect(timesRenderTextWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b></div>');
    expect(timesRenderTextWasCalled).toEqual(1);
    expect(lastRenderedText).toEqual('');
    expect(lastLetter).toEqual('T');
    expect(lastRawText).toEqual('');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i></div>');
    expect(timesRenderTextWasCalled).toEqual(2);
    expect(render(<div>{lastRenderedText}</div>).html()).toEqual('<b>T</b>');
    expect(lastLetter).toEqual('e');
    expect(lastRawText).toEqual('T');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i><b>s</b></div>');
    expect(timesRenderTextWasCalled).toEqual(3);
    expect(render(<div>{lastRenderedText}</div>).html()).toEqual('<b>T</b><i>e</i>');
    expect(lastLetter).toEqual('s');
    expect(lastRawText).toEqual('Te');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i><b>s</b><i>t</i></div>');
    expect(timesRenderTextWasCalled).toEqual(4);
    expect(render(<div>{lastRenderedText}</div>).html())
      .toEqual('<b>T</b><i>e</i><b>s</b>');
    expect(lastLetter).toEqual('t');
    expect(lastRawText).toEqual('Tes');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(3000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i><b>s</b><i>t</i></div>');
    expect(timesRenderTextWasCalled).toEqual(4);
    expect(lastLap).toEqual(1);
  });

  it('will render a custom text with iterations', () => {
    let timesRenderTextWasCalled = 0;
    let lastRenderedText = null;
    let lastLetter = null;
    let lastRawText = null;
    let lastLap = null;

    const renderTextCallback = (renderedText, letter, rawText, lap) => {
      timesRenderTextWasCalled += 1;
      lastRenderedText = renderedText;
      lastLetter = letter;
      lastRawText = rawText;
      lastLap = lap;

      if(!letter) return '';

      const newLetter = rawText.length % 2 === 0
          ? <b>{letter}</b>
          : <i>{letter}</i>;
      return (
          <>
            {renderedText}
            {newLetter}
          </>
      );
    };

    const wrapper = mount(
        <PulseText text="Test" duration={4000} renderText={renderTextCallback} iterationCount={2}>
          <div />
        </PulseText>,
    );
    const childWrapper = wrapper.find('div');

    expect(childWrapper.text()).toEqual('');
    expect(timesRenderTextWasCalled).toEqual(0);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b></div>');
    expect(timesRenderTextWasCalled).toEqual(1);
    expect(lastRenderedText).toEqual('');
    expect(lastLetter).toEqual('T');
    expect(lastRawText).toEqual('');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(3000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i><b>s</b><i>t</i></div>');
    expect(timesRenderTextWasCalled).toEqual(4);
    expect(render(<div>{lastRenderedText}</div>).html())
        .toEqual('<b>T</b><i>e</i><b>s</b>');
    expect(lastLetter).toEqual('t');
    expect(lastRawText).toEqual('Tes');
    expect(lastLap).toEqual(1);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div></div>');
    expect(timesRenderTextWasCalled).toEqual(5);
    expect(render(<div>{lastRenderedText}</div>).html())
        .toEqual('');
    expect(lastLetter).toEqual('');
    expect(lastRawText).toEqual('');
    expect(lastLap).toEqual(2);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b></div>');
    expect(timesRenderTextWasCalled).toEqual(6);
    expect(render(<div>{lastRenderedText}</div>).html())
        .toEqual('');
    expect(lastLetter).toEqual('T');
    expect(lastRawText).toEqual('');
    expect(lastLap).toEqual(2);

    jest.advanceTimersByTime(1000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i></div>');
    expect(timesRenderTextWasCalled).toEqual(7);
    expect(render(<div>{lastRenderedText}</div>).html())
        .toEqual('<b>T</b>');
    expect(lastLetter).toEqual('e');
    expect(lastRawText).toEqual('T');
    expect(lastLap).toEqual(2);

    jest.advanceTimersByTime(2000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i><b>s</b><i>t</i></div>');
    expect(timesRenderTextWasCalled).toEqual(9);
    expect(render(<div>{lastRenderedText}</div>).html())
        .toEqual('<b>T</b><i>e</i><b>s</b>');
    expect(lastLetter).toEqual('t');
    expect(lastRawText).toEqual('Tes');
    expect(lastLap).toEqual(2);

    jest.advanceTimersByTime(10000);
    expect(childWrapper.html()).toEqual('<div><b>T</b><i>e</i><b>s</b><i>t</i></div>');
    expect(timesRenderTextWasCalled).toEqual(9);
  });
});
