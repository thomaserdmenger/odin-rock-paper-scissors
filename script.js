// computer returns either rock, paper or scissors
const getComputerChoice = () => {
  const arr = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum]
}

// getting the winner of a single round
const playRound = (playerSelection, computerSelection) => {
  const playersChoice = playerSelection.toLowerCase()
  const computersChoice = computerSelection.toLowerCase()
  const arr = ['rock', 'paper', 'scissors']

  // player wins
  if (playersChoice === arr[0] && computersChoice === arr[2]) {
    return `You win: ${playersChoice} beats ${computersChoice}`
  } else if (playersChoice === arr[1] && computersChoice === arr[0]) {
    return `You win: ${playersChoice} beats ${computersChoice}`
  } else if (playersChoice === arr[2] && computersChoice === arr[1]) {
    return `You win: ${playersChoice} beats ${computersChoice}`
  }

  // player loses
  if (playersChoice === arr[2] && computersChoice === arr[0]) {
    return `You loose: ${computersChoice} beats ${playersChoice}`
  } else if (playersChoice === arr[0] && computersChoice === arr[1]) {
    return `You loose: ${computersChoice} beats ${playersChoice}`
  } else if (playersChoice === arr[1] && computersChoice === arr[2]) {
    return `You loose: ${computersChoice} beats ${playersChoice}`
  }

  // tie between player and computerd
  else {
    return `It's a tie: You both choose ${computersChoice} and ${playersChoice}`
  }
}

// Testing playRound()
const playerSelection = 'ScissoRs'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
