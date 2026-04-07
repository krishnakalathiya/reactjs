import React, { useState } from 'react';

 const BackgroundColorChanger = () => {
   const [color, setColor] = useState('white');

   const changeBackgroundColor = () => {
     setColor(color === 'white' ? 'lightblue' : 'white');
   };
   return (
   <div style={{ backgroundColor: color, padding: '20px', minHeight: '100vh',color:'black'}}>
      <h1>Background Color Changer</h1>
       <button onClick={changeBackgroundColor}>
         Toggle Background Color
       </button>
     </div>
   );
 };

export default BackgroundColorChanger;