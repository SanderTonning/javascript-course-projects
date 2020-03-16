let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num)) //round up
// console.log(Math.floor(num)) //round down
// console.log(Math.ceil(num)) // round up to a whole number
// console.log(Math.random()) // Rabdon number between 0 - 1

// Random number between min and max.
let min = 1
let max = 5
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min


const makeGuess = (guess) => {
    console.log('randomNum:' + randomNum)
    return guess === randomNum
    
}
console.log(makeGuess(2))

