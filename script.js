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
    return `It's a tie: you both choose ${computersChoice} and ${playersChoice}`
  }
}

// getting the winner of the game within 5 rounds
const game = () => {
  let playersScore = 0
  let computersScore = 0
  let tie = 0
  let rounds = 0

  // getting the winner with 5 points

  while (playersScore < 5 && computersScore < 5) {
    let result = playRound(prompt('Choose between rock, paper or scissors'), getComputerChoice())

    if (result.includes('win')) {
      playersScore += 1
      rounds += 1
    } else if (result.includes('loose')) {
      computersScore += 1
      rounds += 1
    } else {
      tie += 1
      rounds += 1
    }
  }

  // find the winner
  if (playersScore > computersScore) {
    return `🥳 You win: ${playersScore} vs. ${computersScore} points. (${tie} ties in ${rounds} rounds).`
  } else if (playersScore < computersScore) {
    return `😢 The computer wins: ${computersScore} vs. ${playersScore} points. (${tie} ties in ${rounds} rounds).`
  } else {
    return `🔁 It's a tie: ${playersScore} vs. ${computersScore}. (${tie} ties in ${rounds} rounds). Try one more game. `
  }
}

// Create a message in the browser
const container = document.querySelector('.message-container')
const message = document.createElement('span')
message.textContent = game()
message.classList.add('style')

container.insertAdjacentElement('afterbegin', message)
