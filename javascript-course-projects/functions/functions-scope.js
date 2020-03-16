// Global scope (convertFtoC, convertFtoK, tempOne, tempTwo)
    // Local scope (temp, celsius)
        // Local scope (isFreezing)


const convertFtoC = (temp) => {
    let celsius = ((temp -32) * 5 / 9)

    if(celsius <= 0) {
        let isFreezing = true
    }
    return celsius;
}

const convertFtoK = (temp) => {

    return ((temp + 459.67) * 5 / 9);
}

let tempOne = convertFtoC(32);
let tempTwo = convertFtoC(68);

console.log(tempOne)
console.log(tempTwo)
