const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Sander',
    age: 28
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Andrew',
    age: 22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

// console.log(under30)

// Find the person with age equal to 22
// Print that persons name.

const person = people.find((person) => person.age === 22)
console.log(person.name)

