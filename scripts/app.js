const width = 4
const squares = []

// ALL ABOUT GRID
function init() {

  const gameGrid = document.querySelector('.game-grid')
  const hintGrid = document.querySelector('.hint-grid')
  const questionmarkGrid = document.querySelector('.questionmark-grid')
  const button = document.querySelector('.button')
  const peg = document.querySelector('.pegs-grid')
  const colorsBtn = document.querySelector('#colors')
  // const pegsBlue = document.querySelector('.pegs-grid pegsBlue')
  // const pegsPink = document.querySelector('.pegs-grid pegsPink')

  for (let i = 0; i < 10; i++) {
    const square = document.createElement('div')
    square.classList.add('hint-container')
    hintGrid.append(square)
    for (let j = 0; j < 4; j++) {
      const innerSquare = document.createElement('div')
      innerSquare.classList.add('inner-hint')
      innerSquare.textContent = j
      square.append(innerSquare)
    }
  }

  for (let i = 0; i < width * 10; i++) {
    const square = document.createElement('div')
    square.classList.add('ball-grid')
    square.innerHTML = i
    square.classList.add(i)
    squares.push(square)
    gameGrid.append(square)

  }
  // computer is getting random code
  for (let i = 0; i < 4; i++) {
    const square = document.createElement('div')
    square.classList.add('questionmark-grid')
    squares.push(square)
    questionmarkGrid.append(square)

    const codeMaker = ['rgb(39, 149, 246)', 'rgb(232, 39, 246)', 'rgb(39, 246, 177)', 'rgb(246, 191, 39)', 'rgb(149, 39, 246)', 'rgb(173, 194, 195)']

    const computerChoice = codeMaker[Math.floor(Math.random() * codeMaker.length)]
    console.log(computerChoice)

    button.addEventListener('click', () => {
      square.style.backgroundColor = computerChoice

    })
  }
  // get the pegs


  for (let i = 0; i < 6; i++) {
    const square = document.createElement('div')
    square.classList.add('pegs-grid')
    square.innerHTML = i
    squares.push(square)
    peg.append(square)
    peg.appendChild(square)
    if (i === 0)square.classList.add('pegsBlue')
    if (i === 1)square.classList.add('pegsPink')
    if (i === 2)square.classList.add('pegsGreen')
    if (i === 3)square.classList.add('pegsYellow')
    if (i === 4)square.classList.add('pegsViolet')
    if (i === 5)square.classList.add('pegsGrey')
  }

  // colorsBtn.addEventListener('click', colors)
  // function colors (pegTest) {
  //   console.log('colors button')
  //
  // }

  // startBtn
  // addEventListener on startBtn calling 'colors'
  // function colors() { adds classList pegsxxxx}


}

window.addEventListener('DOMContentLoaded', init)

//
// if (i === 0)square.classList.add('pegsBlue')
// if (i === 1)square.classList.add('pegsPink')
// if (i === 2)square.classList.add('pegsGreen')
// if (i === 3)square.classList.add('pegsYellow')
// if (i === 4)square.classList.add('pegsViolet')
// if (i === 5)square.classList.add('pegsGrey')
// console.log(peg)
