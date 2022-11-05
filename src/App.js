import {backgroundColor, generateRandomColors, correctAnswer} from './utils/utilFunctions'
import Button from './components/Button';
import { useEffect, useState } from 'react';

function App() {

  const [colors, setColors] = useState(generateRandomColors())
  const [correctColor, setCorrectColor] = useState(correctAnswer())

  useEffect(() => {
    generateRandomColors()
    setCorrectColor(correctAnswer())
  },[])

  const clickHandler = (index) => {
    if(index === correctColor) console.log('correct')
    setCorrectColor(correctAnswer())
    setColors(generateRandomColors())
  }

  console.log(colors, correctColor)
  
  return (
   <div 
    className = 'w-screen h-screen flex justify-center items-center'
    style = {backgroundColor(colors, correctColor, 90)}
    >
    <div 
      className='w-1/2 h-1/2 flex items-end justify-evenly pb-2 shadow-xl rounded-lg' 
      style = {backgroundColor(colors, correctColor)}>
      { colors.map((color,index) => <Button key = {index} onclick = {clickHandler.bind(null, index)}> {color} </Button>) }
    </div>
   </div>
  );
}

export default App;
