// import React, { useReducer } from 'react';

// const UseReducer3 = () => {
//   const initialState1 = [{ choco: 0 }, { icecream: 10 }];

//   const counterReducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return [
//           { choco: state[0].choco + 1 },
//           { icecream: state[1].icecream + 1 }
//         ];

//       case "DECREMENT":
//         if (state[0].choco <= 0 || state[1].icecream <= 0) {
//           return initialState1;
//         } else {
//           return [
//             { choco: state[0].choco - 1 },
//             { icecream: state[1].icecream - 1 }
//           ];
//         }

//       case "RESET":
//         return initialState1;
        
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(counterReducer, initialState1);

//   return (
//     <>
//       <h2>useReducer</h2>
//       <div>Choco: {state[0].choco}</div>
//       <div>Ice Cream: {state[1].icecream}</div>
      
//       <hr />
      
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment Both</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement Both</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </>
//   );
// };

// export default UseReducer3;

// 2. let initialState2 = [{choco: 0 , icecream:10}];
// import React, { useReducer } from 'react';

// const UseReducer3 = () => {
//   const initialState2 = [{ choco: 0, icecream: 10 }];

//   const counterReducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return [
//           { 
//             ...state[0], 
//             choco: state[0].choco + 1, 
//             icecream: state[0].icecream + 1 
//           }
//         ];

//       case "DECREMENT":
//         if (state[0].choco <= 0 || state[1]?.icecream <= 0) {
//           return initialState2;
//         } else {
//           return [
//             { 
//               ...state[0], 
//               choco: state[0].choco - 1, 
//               icecream: state[0].icecream - 1 
//             }
//           ];
//         }

//       case "RESET":
//         return initialState2;

//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(counterReducer, initialState2);

//   return (
//     <div>
//       <h3>useReducer</h3>
    
//       <div>Choco:{state[0].choco}</div>
//       <div>Ice Cream:{state[0].icecream}</div>

//       <div style={{ marginTop: '10px' }}>
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment Both</button>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement Both</button>
//         <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default UseReducer3;

// 3.let initialState3 = [[{choco: 0} , {icecream:10}]];
// import React, { useReducer } from 'react';

// const UseReducer3 = () => {

//   const initialState3 = [[{ choco: 0 }, { icecream: 10 }]];

//   const counterReducer = (state, action) => {
//     const currentItems = state[0];

//     switch (action.type) {
//       case "INCREMENT":
//         return [[
//           { choco: currentItems[0].choco + 1 },
//           { icecream: currentItems[1].icecream + 1 }
//         ]];

//       case "DECREMENT":
//         if (currentItems[0].choco <= 0 || currentItems[1].icecream <= 0) {
//           return initialState3;
//         }
//         return [[
//           { choco: currentItems[0].choco - 1 },
//           { icecream: currentItems[1].icecream - 1 }
//         ]];

//       case "RESET":
//         return initialState3;

//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(counterReducer, initialState3);

//   return (
//     <div>
//       <h2>useReducer</h2>
      
//       <p>Choco:{state[0][0].choco}</p>
//       <p>Ice Cream: {state[0][1].icecream}</p>

//       <div style={{ display: 'flex', gap: '10px' }}>
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//         <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default UseReducer3;

//4.let initialState4 = [[{choco: 0 , icecream:10}]];
import React, { useReducer } from 'react';

const UseReducer3 = () => {
  const initialState4 = [[{ choco: 0, icecream: 10 }]];

  const counterReducer = (state, action) => {
    const currentData = state[0][0];

    switch (action.type) {
      case "INCREMENT":
        return [[
          { 
            ...currentData, 
            choco: currentData.choco + 1, 
            icecream: currentData.icecream + 1 
          }
        ]];

      case "DECREMENT":
        if (currentData.choco <= 0 || currentData.icecream <= 0) {
          return initialState4;
        }
        return [[
          { 
            ...currentData, 
            choco: currentData.choco - 1, 
            icecream: currentData.icecream - 1 
          }
        ]];

      case "RESET":
        return initialState4;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState4);

  return (
    <div>
      <h2>UseReducer</h2>
    
      <div>Chocol: {state[0][0].choco}</div>
      <div>Ice Cream: {state[0][0].icecream}</div>

      <div style={{ marginTop: '15px' }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment Both</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement Both</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducer3;