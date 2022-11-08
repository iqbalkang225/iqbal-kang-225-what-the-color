import {backgroundColor, generateRandomColors, correctAnswer} from './utils/utilFunctions'
import Button from './components/Button';
import { useEffect, useRef, useState } from 'react';
import ScoreBoard from './components/ScoreBoard';

function App() {

  const [colors, setColors] = useState(generateRandomColors())
  const [correctColor, setCorrectColor] = useState(correctAnswer())
  const [score, setScore] = useState(0)
  const [streakAnswers, setStreakAnswers] = useState(0)
  const [result, setResult] = useState('')
  const [backVisible, setBackVisible] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    generateRandomColors()
    setCorrectColor(correctAnswer())
  },[])

  useEffect(() => {

    if(isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setBackVisible(prevState => !prevState)

    const interval = setTimeout(() => setBackVisible(prevState => !prevState), 2000)
    return () => clearInterval(interval)
  }, [colors])


  const clickHandler = (index) => {
    if(index === correctColor) {
      setScore(prevState => prevState + 1)
      setStreakAnswers(prevState => prevState + 1)
      setResult('Awesome!')
    }
    else {
      setStreakAnswers(0)
      setResult('Oops!')
    }
    setCorrectColor(correctAnswer())
    setColors(generateRandomColors())
  }

  return (
   <div 
    className = 'w-screen h-screen flex justify-center items-center relative'
    style = {backgroundColor(colors, correctColor, 90)}
    >
    <ScoreBoard> {score} </ScoreBoard>
    {/* Card container */}
    <div className={`relative w-96 h-96 overflow-hidden rounded-lg card ${backVisible ? 'flip' : ''}`}>
      {/* Card Front */}
      <div 
        className='h-full flex items-end justify-evenly pb-4 shadow-xl front' 
        style = {backgroundColor(colors, correctColor)}>
        { colors.map((color,index) => <Button key = {index} onclick = {clickHandler.bind(null, index)}> {color} </Button>) }
      </div>
      {/* Card Back */}
      <div className='absolute top-0 h-full bg-white w-full flex flex-col justify-center items-center back'>
        <h2 className='text-4xl mb-4'> {result} </h2>
        {result === 'Oops!' && <h2 className='text-sm'>Better luck next time</h2>}
        {streakAnswers > 1 && <h2 className='text-xl'>Current streak: 🔥 {streakAnswers}</h2>}
        {streakAnswers > 1 && <h2 className='text-sm'>Keep Going...!!!</h2>}
      </div>
    </div>
   </div>
  );
}

export default App;
