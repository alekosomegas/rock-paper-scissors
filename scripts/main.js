
let playerSelection
let computerSelection

// Get the button, and when the user clicks on it, execute a Function
document.getElementById("rock").onclick = function() {
    playerSelection = 'rock'
    changePlayerChoiceImg(playerSelection)
    changePlayerChoiceLbl(playerSelection)
    waitForPlay()
}
document.getElementById("paper").onclick = function() {
    playerSelection = 'paper'
    changePlayerChoiceImg(playerSelection)
    changePlayerChoiceLbl(playerSelection)
    waitForPlay()
}
document.getElementById("scissors").onclick = function() {
    playerSelection = 'scissors'
    changePlayerChoiceImg(playerSelection)
    changePlayerChoiceLbl(playerSelection)
    waitForPlay()
}

// PLAY
document.getElementById("play").onclick = function() {
    computerSelection = computerPlay()
    let result = playRound(playerSelection, computerSelection)
    changeComputerChoiceImg(computerSelection)
    changeComputerChoiceLbl(computerSelection)
    changeResult(result)
    }

// change the image and label
function changePlayerChoiceImg(choice) {
    if (choice === 'rock') {
          document.getElementById("player-choice").src="images/rock.png"
    }
    else if (choice === 'paper') {
        document.getElementById("player-choice").src="images/paper.png"
    }
    else if (choice === 'scissors') {
        document.getElementById("player-choice").src="images/scissors.png"
    }
    else {console.log('ERROR-4')}
}
function changePlayerChoiceLbl(choice) {
    if (choice === 'rock') {
          document.getElementById("player-selection").innerHTML = "ROCK!"
    }
    else if (choice === 'paper') {
        document.getElementById("player-selection").innerHTML = "PAPER!"
    }
    else if (choice === 'scissors') {
        document.getElementById("player-selection").innerHTML = "SCISSORS!"
    }
    else {console.log('ERROR-4')}
}

function changeComputerChoiceImg(choice) {
    if (choice === 'rock') {
          document.getElementById("computer-choice").src="images/rock.png"
    }
    else if (choice === 'paper') {
        document.getElementById("computer-choice").src="images/paper.png"
    }
    else if (choice === 'scissors') {
        document.getElementById("computer-choice").src="images/scissors.png"
    }
    else {console.log('ERROR-4')}
}
function changeComputerChoiceLbl(choice) {
    if (choice === 'rock') {
          document.getElementById("computer-selection").innerHTML = "ROCK!"
    }
    else if (choice === 'paper') {
        document.getElementById("computer-selection").innerHTML = "PAPER!"
    }
    else if (choice === 'scissors') {
        document.getElementById("computer-selection").innerHTML = "SCISSORS!"
    }
    else {console.log('ERROR-4')}
}

// Returns AI play (rock paper scissors)
function computerPlay() {
    play = getRndInt(0, 3)
    if (play === 0) {
        return 'rock'
    }
    else if (play === 1) {
        return "paper"
    }
    else if (play === 2) {
        return "scissors"
    }
    else {return "ERROR-1"}
}

// Returns a random integer
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Takes strings, Returns winner or tie or error
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'Computer'
        }
        else if (computerSelection === 'scissors') {
            return 'Player'
        }
        else {return 'ERROR-2'}
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'Player'
        }
        else if (computerSelection === 'scissors') {
            return 'Computer'
        }
        else {return 'ERROR-3'}
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Computer'
        }
        else if (computerSelection === 'paper') {
            return 'Player'
        }
        else {return 'ERROR-4'}
    }
}

function changeResult(result) {
    document.getElementById("result").innerHTML = result
}

function waitForPlay() {
    changeComputerChoiceImg('rock')
}