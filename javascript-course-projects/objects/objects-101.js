let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);
// whole object: { title: '1984', author: 'George Orwell', pageCount: 326 }

console.log(myBook.title);
// 1984

console.log(`${myBook.title} by ${myBook.author}`);
// 1984 by George Orwell

myBook.title = 'Animal farm';
console.log(`${myBook.title} by ${myBook.author}`);
// Animal farm by George Orwell

// Challenge. 
// Sander is 27 and lives in Jølster
// Increase age by 1 and print message again


let Me = {
    name: 'Sander',
    age: 28,
    location: 'Jølster'
}

console.log(`${Me.name} is ${Me.age} and lives in ${Me.location}`)
// Sander is 28 and lives in Jølster

Me.age = Me.age + 1;
console.log(`${Me.name} is ${Me.age} and lives in ${Me.location}`)
// Sander is 29 and lives in Jølster