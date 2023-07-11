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
btnRock.addEventListener('click', game)
btnPaper.addEventListener('click', game)
btnScissors.addEventListener('click', game)

// create div to render result
const resultContainer = document.querySelector('.result-container')
const resultMessage = document.querySelector('.result-message')
const resultStats = document.querySelector('.result-stats')

// getting the winner of a single round
function playRound(e) {
  const playersChoice = e.target.id
  const computersChoice = getComputerChoice()
  const arr = ['rock', 'paper', 'scissors']
  let message = ''

  if (
    (playersChoice === arr[0] && computersChoice === arr[2]) ||
    (playersChoice === arr[1] && computersChoice === arr[0]) ||
    (playersChoice === arr[2] && computersChoice === arr[1])
  ) {
    message = `👍 You win: ${playersChoice} beats ${computersChoice}`
  } else if (
    (playersChoice === arr[2] && computersChoice === arr[0]) ||
    (playersChoice === arr[0] && computersChoice === arr[1]) ||
    (playersChoice === arr[1] && computersChoice === arr[2])
  ) {
    message = `👎 You loose: ${computersChoice} beats ${playersChoice}`
  } else {
    message = `✌️ It's a tie: you both choose ${playersChoice}`
  }

  resultContainer.append(resultMessage)
  resultMessage.textContent = message
  resultContainer.appendChild(resultStats)
}

// get the winner with 5 points

let playersScore = 0
let computersScore = 0
let tie = 0
let rounds = 0

function game() {
  const message = document.querySelector('div').textContent

  if (playersScore < 5 && computersScore < 5) {
    if (message.includes('win')) {
      playersScore += 1
      rounds += 1
    } else if (message.includes('loose')) {
      computersScore += 1
      rounds += 1
    } else {
      tie += 1
      rounds += 1
    }

    resultStats.textContent = `Your points: ${playersScore} | 🤖 points: ${computersScore} | tie: ${tie} | rounds: ${rounds}`
  }

  const btnReload = document.querySelector('.reload')

  if (playersScore === 5 || computersScore === 5) {
    resultStats.textContent = `player: ${playersScore}, computer: ${computersScore}, tie: ${tie}, rounds: ${rounds}`
    if (playersScore === 5) {
      resultMessage.textContent = '🥳 You have won the game.'
      btnReload.style.display = 'block'
    } else {
      resultMessage.textContent = '🤖 The Computer has won the game.'
      btnReload.style.display = 'block'
    }
  }

  // Implement button to reload the game
  btnReload.addEventListener('click', function () {
    location.reload()
  })
}
