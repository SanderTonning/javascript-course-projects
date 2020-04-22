// Counter

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

// Adder

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))


// Tipper
const createTipper = (tip) => {
    return (amount) => {
        return `Your tip = ${tip * amount},-`
    }
}

const tip15 = createTipper(0.15)
const tip25 = createTipper(0.25)

console.log(tip15(1000))
console.log(tip25(1500))
console.log(tip25(700))