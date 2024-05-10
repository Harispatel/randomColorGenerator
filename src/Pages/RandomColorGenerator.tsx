import React, { useState } from 'react';
import '../App.css';
import { style } from '../utils';
const RandomColorGenerator: React.FC = () => {
  const [color, setColor] = useState<string>('#fff');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{...style.pageContainer,flexDirection: "column"}}>

      <div
        style={{...style.boxContainer, backgroundColor: color,}}
      >
      <h1 style={{ textAlign:'center', color:color,padding: "30px" }} className='text-color'>Random <br/> Color</h1>
      </div>
      <button style={style.centerButton} onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
};
    
export default RandomColorGenerator;