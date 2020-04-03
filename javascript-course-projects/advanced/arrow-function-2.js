const add = (a, b) => {
    return arguments[0] + arguments[1]
}
// const add = function (a, b) {
//     return arguments[0] + arguments[1]
// }

console.log(add(11, 22, 33, 44))
// arguments loses scope with arrow function. 


// const car = {
//     color: 'red',
//     getSummary: () => {
//         return `The car is ${this.color}`
//     }
// }

// this car i undefined

const car = {
    color: 'red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

// this car is red
console.log(car.getSummary())

// .this loses scope with arrow function, but the getSummary function can be written shorthanded like this.