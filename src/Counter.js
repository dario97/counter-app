import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 5);
  const decrementCounter = () => (counter >= 5 ? setCounter(counter - 5) : "");

  return (
    <div>
      <b className="ui center aligned container">{props.text}</b>
      <div className="ui center aligned container">{counter}</div>
      <div className="ui center aligned container">
        <button className="ui labeled icon button" onClick={decrementCounter}>
          <i class="arrow alternate cirlce down icon"></i>
          -5
        </button>
        <button
          className="ui labeled icon orange button"
          onClick={incrementCounter}
        >
          <i class="arrow alternate cirlce up icon"></i>
          +5
        </button>
      </div>
    </div>
  );
};

export default Counter;

