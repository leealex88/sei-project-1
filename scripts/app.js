const width = 4
const squares = []
const answerSquares = []
const noColorsSquares = []
const hintSquares = []
const answerSquares2 =[]
let divIndex = 36
let hintIndex = 36
let playerChoice = []
let computerChoice = []
const blackHint = 'black'
const redHint = 'red'

function init() {
  // ALL ABOUT GRID

  const gameGrid = document.querySelector('.game-grid')
  const hintGrid = document.querySelector('.hint-grid')
  const button = document.querySelector('.button')
  const peg = document.querySelector('.pegs-grid')
  const resetButton = document.querySelector('.reset')
  const startButton = document.querySelector('.start-button')



  for (let i = 0; i < width * 10; i++) {
    const square = document.createElement('div')
    square.classList.add('hint')
    // square.textContent = i
    hintSquares.push(square)
    hintGrid.append(square)
  }


  for (let i = 0; i < width * 10; i++) {
    const square = document.createElement('div')
    square.classList.add('ball-grid')
    // square.innerHTML = i
    square.classList.add(i)
    square.id = 'div' + i
    squares.push(square)
    gameGrid.append(square)

  }
  const codeMaker = ['pegsBlue', 'pegsPink', 'pegsGreen', 'pegsYellow', 'pegsViolet', 'pegsGrey']

  computerChoice = []

  function generateComputerChoice() {
    for (let i = 0; i < 4; i++) {
      let color = codeMaker[Math.floor(Math.random() * codeMaker.length)]
      while (computerChoice.includes(color)) {
        color = codeMaker[Math.floor(Math.random() * codeMaker.length)]
      }
      computerChoice.push(color)
    }
  }

  generateComputerChoice()
  console.log('computerChoice is', computerChoice)
  // computer is getting random code
  const questionmarkGrid = document.querySelector('.questionmark-grid')
  for (let i = 0; i < 4; i++) {
    const square = document.createElement('div')
    square.classList.add('questionmark-grid')
    square.id = i
    answerSquares.push(square)
    questionmarkGrid.append(square)
  }
  // questionmark no Colors

  const questionmarkEmpty = document.querySelector('.questionmark-empty')
  for (let i = 0; i < 4; i++) {
    const square = document.createElement('div')
    square.classList.add('questionmark-nocolors')
    // square.innerHTML = i
    square.id = i
    answerSquares2.push(square)
    questionmarkEmpty.append(square)

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

  const switchGrid = document.querySelector('#switch-grid')
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
    console.log(computerChoice)
    console.log(playerChoice)
    checkIndex()
  })

let result = []
  function checkLine() {
    for (let i = 0; i < 4; i++) {
      // console.log('loop start')
      const pChoice = playerChoice[i]
      // Correct colour, correct position
      if (pChoice === computerChoice[i]) {
        hintSquares[hintIndex].classList.add('blackHint')
        result.push('blackHint')
        changeHintIndex()
      } else {
        for (let j = 0; j < 4; j++){
          if(j === i){
            continue
          }
          console.log({i, j})
          if (pChoice === computerChoice[j]){
            hintSquares[hintIndex].classList.add('redHint')
            result.push('redHint')
            changeHintIndex()
          }
        }
      }
      // else if Colour exists in computerChoice array
      // console.log('loop end')
    }
    console.log('result is', result)
  }
  function resultMessage() {
    if (result.length < 4 || result.includes('redHint')) {
      setTimeout(() => {
        window.alert('Try again!')
      }, 500)
    } else if (result.every(hint => hint === 'blackHint')) {
      setTimeout(() => {
        window.alert('You won!')
      }, 500)
    }

  }
  function checkIndex() {
    if (divIndex % 4 === 3) {
      divIndex -= 7
      checkLine()
      resultMessage()
      hintIndex = divIndex
      playerChoice = []
      result = []
    } else {
      divIndex++
    }
  }

  function changeHintIndex() {
    if (hintIndex % 4 === 3) {
      hintIndex -= 7
    } else {
      hintIndex++
    }
  }
  // function checkWin() {
  //   if (hintIndex.every(peg => peg === 'black')) {
  //     gridItemSolution.forEach(solution => solution.classList.remove('box-blank'))
  //     console.log('win condition met')
  //   })

  resetButton.addEventListener('click', () => {
    location.reload()
  })
  console.log('reset')


}
window.addEventListener('DOMContentLoaded', init)
