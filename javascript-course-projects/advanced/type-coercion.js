// Type coercion - a string, a number, a boolean

console.log('5' + 5)
// 55
console.log('5' - 5)
// 0
console.log('5' * 5)
// 25

console.log(5 === 5)
// true
console.log('5' == 5)
// true

// use strict equality: === 

const type = typeof 123
const type1 = typeof {}

//typeof returns a string explaining the type.
console.log(type)
// number
console.log(type1)
// object

const value = true + 12
const type3 = typeof value
console.log(type3)
// number
console.log(value)
// 13

// const value = false + 12
// const type3 = typeof value
// console.log(type3)
// // number
// console.log(value)
// // 12