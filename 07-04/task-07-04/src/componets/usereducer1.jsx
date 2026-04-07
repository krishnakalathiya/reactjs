// useReducer Hook

import React from "react";
import { useReducer } from "react";

const UseReducer1 = () => {
  // const [state , dispatch] = useReducer(reducer , initialState)

  let initialState = {
    choco: 0,
    icecream: 10,
  };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_CHOCO":
        return {...state ,  choco: state.choco + 1 };
      case "DECREMENT_CHOCO":
        return {...state ,  choco: state.choco - 1 };
      case "RESET_CHOCO":
        return {...state , choco : 0};
      case "INCREMENT_ICE":
        return {...state ,  icecream: state.icecream + 1 };
      case "DECREMENT_ICE":
        return {...state ,  icecream: state.icecream - 1 };
      case "RESET_ICE":
        return {...state , icecream : 10};
      default:
        return state;
    }
  };

  const [state, disptch] = useReducer(counterReducer, initialState);

  console.log("state", state);

  return (
    <>
      <div>UseReducer</div>
      <div>choco : {state.choco}</div>
      <div>icecream : {state.icecream}</div>
      <button onClick={() => disptch({ type: "INCREMENT_CHOCO" })}>Increment_choco</button>
      <button onClick={() => disptch({ type: "DECREMENT_CHOCO" })}>Decrement_choco</button>
      <button onClick={() => disptch({ type: "RESET_CHOCO" })}>Reset_choco</button><br></br>
      <button onClick={() => disptch({ type: "INCREMENT_ICE" })}>Increment_ice</button>
      <button onClick={() => disptch({ type: "DECREMENT_ICE" })}>Decrement_ice</button>
      <button onClick={() => disptch({ type: "RESET_ICE" })}>Reset_ice</button>
    </>
  );
};

export default UseReducer1;