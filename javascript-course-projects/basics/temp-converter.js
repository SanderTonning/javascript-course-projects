let fahrenheit = 32; //Expected: 0 Celsius, - 273.15 Kelvin

//Fahrenheit to Celsius = (T - 32) x 5/9 
//Fahrenheit to Kelvin = (T + 459.67) x 5/9

// Task:
// Calculate Celsius and store in Celsius variable
// Print that value

// Calculate Kelvin value and store Kelvin in variable
// Print that value

let celsius = (fahrenheit - 32) * 5 / 9, 
    kelvin = (fahrenheit + 459.67) * 5 / 9;

    console.log(celsius)
    console.log(kelvin)

// i wrote them first as functions... :)

const convertFtoC = (temp) => {
    
    return ((temp - 32) * 5 / 9);
}

console.log(convertFtoC(32));


const convertFtoK = (temp) => {

    return ((temp + 459.67) * 5 / 9);
}

console.log(convertFtoK(32))
