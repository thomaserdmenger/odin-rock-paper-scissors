// computer returns either rock, paper or scissors
const getComputerChoice = () => {
  const arr = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum]
}

// getting players choices (buttons)
const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')

// listen for click events on buttons and call playround
btnRock.addEventListener('click', playRound)
btnPaper.addEventListener('click', playRound)
btnScissors.addEventListener('click', playRound)

// create div to render result
const resultContainer = document.querySelector('.result-container')

// getting the winner of a single round
function playRound(e) {
  const playersChoice = e.target.id
  const computersChoice = getComputerChoice()
  const arr = ['rock', 'paper', 'scissors']
  let message = ''

  // player wins
  if (playersChoice === arr[0] && computersChoice === arr[2]) {
    message = `You win: ${playersChoice} beats ${computersChoice}`
  } else if (playersChoice === arr[1] && computersChoice === arr[0]) {
    message = `You win: ${playersChoice} beats ${computersChoice}`
  } else if (playersChoice === arr[2] && computersChoice === arr[1]) {
    message = `You win: ${playersChoice} beats ${computersChoice}`
  }

  // player loses
  if (playersChoice === arr[2] && computersChoice === arr[0]) {
    message = `You loose: ${computersChoice} beats ${playersChoice}`
  } else if (playersChoice === arr[0] && computersChoice === arr[1]) {
    message = `You loose: ${computersChoice} beats ${playersChoice}`
  } else if (playersChoice === arr[1] && computersChoice === arr[2]) {
    message = `You loose: ${computersChoice} beats ${playersChoice}`
  }

  // tie between player and computerd
  if (playersChoice === arr[0] && computersChoice === arr[0]) {
    message = `It's a tie: you both choose ${computersChoice} and ${playersChoice}`
  } else if (playersChoice === arr[1] && computersChoice === arr[1]) {
    message = `It's a tie: you both choose ${computersChoice} and ${playersChoice}`
  } else if (playersChoice === arr[2] && computersChoice === arr[2]) {
    message = `It's a tie: you both choose ${computersChoice} and ${playersChoice}`
  }

  // render winner to screen
  resultContainer.textContent = message
}

// function handleClick(e) {
//   console.log(e.target.id)
// }

// getting the winner of the game within 5 rounds
// const game = () => {
//   let playersScore = 0
//   let computersScore = 0
//   let tie = 0
//   let rounds = 0

//   // getting the winner with 5 points
//   while (playersScore < 5 && computersScore < 5) {
//     let result = playRound(prompt('Choose between rock, paper or scissors'), getComputerChoice())

//     if (result.includes('win')) {
//       playersScore += 1
//       rounds += 1
//     } else if (result.includes('loose')) {
//       computersScore += 1
//       rounds += 1
//     } else {
//       tie += 1
//       rounds += 1
//     }
//   }

//   // find the winner
//   if (playersScore > computersScore) {
//     return `🥳 You win: ${playersScore} vs. ${computersScore} points. (${tie} ties in ${rounds} rounds).`
//   } else if (playersScore < computersScore) {
//     return `😢 The computer wins: ${computersScore} vs. ${playersScore} points. (${tie} ties in ${rounds} rounds).`
//   } else {
//     return `🔁 It's a tie: ${playersScore} vs. ${computersScore}. (${tie} ties in ${rounds} rounds). Try one more game. `
//   }
// }

// Create a message in the browser
// const container = document.querySelector('.message-container')
// const message = document.createElement('span')
// message.textContent = game()
// message.classList.add('style')

// container.insertAdjacentElement('afterbegin', message)
