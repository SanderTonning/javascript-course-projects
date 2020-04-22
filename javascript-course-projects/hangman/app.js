const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')


const game1 = new Hangman('Car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)

    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}) 

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getCountry('NO').then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })