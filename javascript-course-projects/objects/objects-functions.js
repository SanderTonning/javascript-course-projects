let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)

let otherBookSummary = getSummary(otherBook)

//console.log(bookSummary.pageCountSummary)
//console.log(otherBookSummary.pageCountSummary)


// Challenge 
// Create function - take fahrenheit in - return object with all three. Celsius, Kalvin, Fahrenheit.



const getFahrenheit = (fahrenheit) => {
    return {
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        fahrenheit: fahrenheit
    }
}

console.log(getFahrenheit(100))

