// 1. Fix an event handler
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }


// 2. Wire up the events

// import { useState } from "react";

// export default function App(){
//   const [clicks, setClicks] = useState(0);

//   function handleClickOutside(){
//       setClicks(c => c + 1);
//   }


//   function handleChangeColor(){
//     let bodystyle = document.body.style;
//     bodystyle.backgroundColor = getRandomLightColor();

//   }
// export function ColorSwitch({
//   onChangeColor
// }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onChangeColor();
//     }}>
//       Change color
//     </button>
//   );
// }
// }


import { useState } from "react";

export default function App(){
  const [clicks, setClicks] = useState(0);

  function handleClickOutside(){
      setClicks((clicks) => clicks + 1);
  }

  function generateRandomLightColor  (){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor; 
  }

  function handleChangeColor(){
  let bodystyle = document.body.style; 
  bodystyle.backgroundColor = generateRandomLightColor(); 
  }

  return(<>
    <button onClick={handleChangeColor}>Click Me</button>
    <p>{clicks}</p>
  </>);
}
