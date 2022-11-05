const randomColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

const generateRandomColors = () => {
  const randomColors = []
  for(let i = 0; i < 3; i++) randomColors.push(randomColor())
  return randomColors
}

const correctAnswer = () => Math.floor(Math.random() * 3)

const backgroundColor = (colors, correctColor, opacity) => ( 
  {backgroundColor: `${colors[correctColor]}${opacity ? opacity : ''}`} )

export {randomColor, backgroundColor, generateRandomColors, correctAnswer }