//1. Counter App Features:Increment / Decrement / Reset
// import React, { useState } from "react";

// function CounterApp() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > 0) { 
//       setCount(count - 1);
//     }
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default CounterApp;


// 2. Show/Hide Text Button toggles visibility
// import React, { useState } from 'react';

// function ShowHideText() {
//   const [isVisible, setIsVisible] = useState(false); 
  
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible); 
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide Text' : 'Show Text'}
//       </button>

//       {isVisible && (
//         <p>
//           This is the text that is being shown/hidden.
//         </p>
//       )}
//     </div>
//   );
// }

// export default ShowHideText;

//3.Input Field Tracker

// import React, { useState } from 'react';

// function SingleInputFieldTracker() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}      
//         onChange={handleInputChange} 
//         placeholder="Start typing..."
//       />
//       <p>Current input value: {inputValue}</p>
//     </div>
//   );
// }

// export default SingleInputFieldTracker;

//4.Background Color Changer
// import React, { useState } from 'react';

// const BackgroundColorChanger = () => {
//   const [color, setColor] = useState('white');

//   const changeBackgroundColor = () => {
//     setColor(color === 'white' ? 'lightblue' : 'white');
//   };

//   return (
//     <div style={{ backgroundColor: color, padding: '20px', minHeight: '100vh' }}>
//       <h1>Background Color Changer</h1>
//       <button onClick={changeBackgroundColor}>
//         Toggle Background Color
//       </button>
//     </div>
//   );
// };

// export default BackgroundColorChanger;

//5.simple like button toggle like/unlike
import React, { useState } from 'react';

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>

      <p>Status: {isLiked ? 'You liked this' : 'You have not liked this'}</p>
    </div>
  );
}

export default LikeButton;