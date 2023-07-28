const positionArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function storePosition(number, player) {
    for (let i = 0; i < positionArray.length; i++) {
        for (let j = 0; j < positionArray[i].length; j++) {
            if (positionArray[i][j] == number) {
                positionArray[i][j] = player
            }
        }
    }
}

function displayPositions() {
    process.stdout.write('\n-------------\n')
    for (let i = 0; i < positionArray.length; i++) {
        let row
        process.stdout.write('|')
        for (let j = 0; j < positionArray[i].length; j++) {
            process.stdout.write(` ${positionArray[i][j]} |`)
        }
        process.stdout.write('\n-------------\n')
    }
}

function computerMove(item) {
    do {
        i = Math.floor(Math.random() * 3)
        j = Math.floor(Math.random() * 3)
        console.log('Picking move...')
    } while (positionArray[i][j] === 'x' || positionArray[i][j] === 'o')

    positionArray[i][j] = item
}

function checkWinner() {
    let winner
    for (let i = 0; i < 3; i++) {
        if (
            positionArray[i][0] === positionArray[i][1] &&
            positionArray[i][0] === positionArray[i][2]
        ) {
            winner = positionArray[i][0]
        }
    }

    for (let i = 0; i < 3; i++) {
        if (
            positionArray[0][i] === positionArray[0][i + 1] &&
            positionArray[0][i] === positionArray[0][i + 2]
        ) {
            winner = positionArray[0][i]
        }
    }

    if (
        positionArray[0][0] === positionArray[1][1] &&
        positionArray[0][0] === positionArray[2][2]
    ) {
        winner = positionArray[0][0]
    } else if (
        positionArray[0][2] === positionArray[1][1] &&
        positionArray[0][2] === positionArray[2][0]
    ) {
        winner = positionArray[0][2]
    }
    return winner
}

module.exports = { storePosition, displayPositions, computerMove, checkWinner }
