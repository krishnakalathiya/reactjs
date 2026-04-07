// useReducer Hook

import React from "react";
import { useReducer } from "react";

const UseReducer2 = () => {
  // const [state , dispatch] = useReducer(reducer , initialState)

  let initialState = {
    choco: 0,
    icecream: 10,
  };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {choco: state.choco + 1 , icecream:state.icecream + 1 };
        
      case "DECREMENT": {

        if(state.choco <= 0 || state.icecream <= 0){
          return {choco : 0 , icecream:10}
        }else{
          return {choco: state.choco - 1 , icecream:state.icecream - 1 }
        }

      }
      case "RESET":
        return {choco : 0 , icecream:10};
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
      <button onClick={() => disptch({ type: "INCREMENT" })}>Increment_choco</button>
      <button onClick={() => disptch({ type: "DECREMENT" })}>Decrement_choco</button>
      <button onClick={() => disptch({ type: "RESET" })}>Reset_choco</button><br></br>
    </>
  );
};

export default UseReducer2;