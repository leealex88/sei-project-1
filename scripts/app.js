const width = 4
const squares = []
const answerSquares = []
let divIndex = 36
let playerChoice = []

function init() {
  // ALL ABOUT GRID

  const gameGrid = document.querySelector('.game-grid')
  const hintGrid = document.querySelector('.hint-grid')
  const questionmarkGrid = document.querySelector('.questionmark-grid')
  const button = document.querySelector('.button')
  const peg = document.querySelector('.pegs-grid')


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
    square.id = 'div' + i
    squares.push(square)
    gameGrid.append(square)

  }
  const codeMaker = ['pegsBlue', 'pegsPink', 'pegsGreen', 'pegsYellow', 'pegsViolet', 'pegsGrey']

  const computerChoice = [
    codeMaker[Math.floor(Math.random() * codeMaker.length)],
    codeMaker[Math.floor(Math.random() * codeMaker.length)],
    codeMaker[Math.floor(Math.random() * codeMaker.length)],
    codeMaker[Math.floor(Math.random() * codeMaker.length)]
  ]



  // console.log(computerChoice)
  // computer is getting random code

  for (let i = 0; i < 4; i++) {
    const square = document.createElement('div')
    square.classList.add('questionmark-grid')
    square.id = i
    answerSquares.push(square)
    questionmarkGrid.append(square)
  }

  button.addEventListener('click', () => {
    for (let i = 0; i < computerChoice.length; i++) {
      answerSquares[i].classList.add(computerChoice[i])
    }
  })


  for (let i = 0; i < 6; i++) {
    const square = document.createElement('div')
    square.classList.add('pegs')
    // square.innerHTML = i
    squares.push(square)
    peg.append(square)
    peg.appendChild(square)
    if (i === 0) {
      square.classList.add('pegsBlue')
      square.id = 'blue'
    }
    if (i === 1){
      square.classList.add('pegsPink')
      square.id = 'pink'
    }
    if (i === 2) {
      square.classList.add('pegsGreen')
      square.id = 'green'
    }
    if (i === 3) {
      square.classList.add('pegsYellow')
      square.id = 'yellow'
    }
    if (i === 4) {
      square.classList.add('pegsViolet')
      square.id = 'violet'
    }
    if (i === 5) {
      square.classList.add('pegsGrey')
      square.id = 'grey'
    }
  }


  console.log(playerChoice)

  const switchGrid = document.querySelector('#switch-grid')
  console.log(switchGrid)
  switchGrid.addEventListener('click',(e) => {
    console.log(divIndex)
    switch(e.target.id) {
      case 'blue':
        squares[divIndex].classList.add('pegsBlue')
        playerChoice.push('pegsBlue')

        break
      case 'pink':
        squares[divIndex].classList.add('pegsPink')
        playerChoice.push('pegsPink')
        break
      case 'green':
        squares[divIndex].classList.add('pegsGreen')
        playerChoice.push('pegsGreen')
        break
      case 'yellow':
        squares[divIndex].classList.add('pegsYellow')
        playerChoice.push('pegsYellow')
        break
      case 'violet':
        squares[divIndex].classList.add('pegsViolet')
        playerChoice.push('pegsViolet')
        break
      case 'grey':
        squares[divIndex].classList.add('pegsGrey')
        playerChoice.push('pegsGrey')
        break
      default:
        console.log('default', e.target)
    }
    checkIndex()
  })

  function checkline () {
    if (computerChoice === playerChoice){
      console.log('Good job')
    }
  //
  // }
  // function checkline() {
  //   if (computerChoice)
  //   console.log('Find the match')
  //   // console.log(computerChoice)
  //   // console.log('a line has finished, so check it it matches')
  // }
}
function checkIndex() {
  if (divIndex % 4 === 3) {
    // playerChoice === computerChoice)
    divIndex -= 7
  } else {
    divIndex++
  }
}


window.addEventListener('DOMContentLoaded', init)

//
// console.log('Im blue')
// break
// case pink:
// console.log('Im pink')
// break
// case green:
// console.log('Im green')
// break
// case yellow:
// console.log('Im yellow')
// break
// case violet:
// console.log('Im violet')
// break
// case grey:
// console.log('Im grey')
// break
// default:
// console.log(e.target)
