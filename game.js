const prompt = require('prompt-sync')()
const {
    storePosition,
    displayPositions,
    computerMove,
    checkWinner,
} = require('./positions')
let winner
let player

console.log('Welcome to Tic Tac Toe!')

displayPositions()

do {
    const first = prompt('Would you like to go first?: ')
    if (first.toLowerCase() === 'n') {
        item = 'x'
        player = 'o'
        computerMove(item)
    } else if (first.toLowerCase() === 'y') {
        player = 'x'
        item = 'o'
    } else {
        console.log('Please enter a valid input')
    }
} while (!player)

let count = 0
while (!winner) {
    displayPositions()
    let playerMove = prompt('Enter your move: ')
    storePosition(playerMove, player)
    count++
    if (count < 9) {
        computerMove(item)
        count++
    }
    displayPositions()
    winner = checkWinner()
}

displayPositions()

if (winner) {
    console.log(`Winner is ${winner}!`)
} else if (!winner) {
    console.log('Draw!')
}
