const width = 4
const squares = []

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
  // computer is getting random code
  for (let i = 0; i < 4; i++) {
    const square = document.createElement('div')
    square.classList.add('questionmark-grid')
    square.id = i
    squares.push(square)
    questionmarkGrid.append(square)

    const codeMaker = ['rgb(39, 149, 246)', 'rgb(232, 39, 246)', 'rgb(39, 246, 177)', 'rgb(246, 191, 39)', 'rgb(149, 39, 246)', 'rgb(173, 194, 195)']

    const computerChoice = codeMaker[Math.floor(Math.random() * codeMaker.length)]
    console.log(computerChoice)

    button.addEventListener('click', () => {
      square.style.backgroundColor = computerChoice

    })
  }
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
  const pegBlue = document.querySelector('#blue')
  // const pegPink = document.querySelector('#pink')
  // const pegGreen = document.querySelector('#pink')
  // const pegYellow = document.querySelector('#pink')
  // const pegViolet = document.querySelector('#pink')
  // const pegGrey = document.querySelector('#pink')
  // const pegPink = document.querySelector('#pink')
  const divs = document.querySelector('#div36')

  pegBlue.addEventListener('click', () => {
    divs.classList.add('pegsBlue')//name of the class from css
  })






  const switchGrid = document.querySelector('#switch-grid')
  const pegPink = document.querySelector('#pink')
  console.log(switchGrid)
  switchGrid.addEventListener('click',(e) => {
    switch(e.target.id) {
      case pink:
      pegBlue.addEventListener('click', () => {
        divs.classList.add('pegsBlue')//name of the class from css
      })
      break
      default:
      console.log(e.target)
    }
  })

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
