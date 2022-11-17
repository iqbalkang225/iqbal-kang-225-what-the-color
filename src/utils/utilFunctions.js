// function to generate hex color
const hexColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

// function to generate 3 random colors
const generateRandomColors = () => {
  const randomColors = []
  for(let i = 0; i < 3; i++) randomColors.push(hexColor())
  return randomColors
}

// function to generate a random number which will be set as correct color
const correctAnswer = () => Math.floor(Math.random() * 3)

// function to set correctColor as the background color (tailwind workaround)
// output: backgroundColor: hexColor Opacity (eg. #ffffff80)
const backgroundColor = (colors, correctColor, opacity) => ( 
  {backgroundColor: `${colors[correctColor]}${opacity ? opacity : ''}`} )

export { backgroundColor, generateRandomColors, correctAnswer }