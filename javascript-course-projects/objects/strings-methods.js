// let name = '  Sander Tonning  '

// // Length property
// console.log((name.length))

// // Convert to upper case
// console.log(name.toUpperCase())

// // Convert to lower case
// console.log(name.toLowerCase())

// // Includes method
// let password = 'abc123password098'
// console.log(password.includes('password'))

// // Trim
// console.log(name.trim())

// Challenge
// isValidPassword
// length is more than 8 - and it doesn't contain the word password


let isValidPassword = (password) => {
    return password.length >= 8 && !password.includes('password')
}

console.log(isValidPassword('asdfd'))
console.log(isValidPassword('asdfd1234&"#%!'))
console.log(isValidPassword('asdpasswordfd1'))

