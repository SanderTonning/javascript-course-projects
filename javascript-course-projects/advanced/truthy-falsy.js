const products = [{ name: 'Computer mouse'}]
const product = products[0]

// Truthy - Values that resolves to true in a boolean context
// Falsy - Values that resolves to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

