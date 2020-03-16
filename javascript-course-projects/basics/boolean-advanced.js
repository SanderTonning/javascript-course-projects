let isAccountLocked = false;
let userRole = 'admin'

// With two arguments:

// if (isAccountLocked) {
//     console.log('Account is locked')
// } else {
//     console.log('Welcome!')
// }

// With three arguments:

// if (isAccountLocked) {
//     console.log('Account is locked')
// } else if (userRole === 'admin') {
//     console.log('Welcome Admin')
// }else {
//     console.log('Welcome')
// }

// Challenge: 

let temp = 45,
    freezing = 32,
    hot = 110;

//  It is freezing outside!
//  It is hot outside!
//  Go for it. It is pretty nice.


if (temp <= freezing) {
    console.log('It is freezing outside!')
}else if (temp >= hot) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice outside.')
}