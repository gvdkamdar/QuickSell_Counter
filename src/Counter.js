import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  const [state, setState] = useState({
    counter: 1,
    minValue: 1,
    maxValue: 1000,
    
  });
  const { counter, minValue, maxValue } = state;
  function handleIncrementOrDecrement(type) {
    if (type === "increment") {
      const updatedCounter = counter >= maxValue ? maxValue : counter + 1;
      setState({ ...state, counter: Number(updatedCounter) });
    } else {
      const updatedCounter = counter <= minValue ? minValue : counter - 1;
      setState({ ...state, counter: Number(updatedCounter) });
    }
  };

  

  function handleChange(e) {
    let userEnteredValue = e.target.value;
    if (!e.target.value) {
      userEnteredValue = "";
    } else if (e.target.value < minValue) {
      userEnteredValue = minValue;
    } else if (e.target.value > maxValue) {
      userEnteredValue = maxValue;
    }
    setState({
      ...state,
      counter: Number(userEnteredValue) || "",
    });
  }
  return (
    <div className='main-container'>
      <div
        className='decrease-btn'
        onClick={() => {
          handleIncrementOrDecrement("decrement");
        }}
      >
        -
      </div>
      <div>
        <input
          value={counter}
          className='input-field'
          onChange={handleChange}
        />
      </div>
      <div
        className='add-btn'
        onClick={() => {
          handleIncrementOrDecrement("increment");
        }}
      >
        +
      </div>

      
    </div>
    
  );
};
export default Counter;
