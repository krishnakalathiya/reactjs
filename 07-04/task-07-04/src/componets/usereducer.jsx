// useReducer Hook

import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  // const [state , dispatch] = useReducer(reducer , initialState)

  let count = 0;

  const counterReducer = (state = count, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return count;
      default:
        return state;
    }
  };

  const [state, disptch] = useReducer(counterReducer, count);

  console.log("state", state);

  return (
    <>
      <div>UseReducer</div>
      <div>count : {state}</div>
      <button onClick={() => disptch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => disptch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => disptch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default UseReducer;