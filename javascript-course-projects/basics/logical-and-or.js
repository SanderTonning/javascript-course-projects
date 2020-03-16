let temp = 65;

// Logical And Operator - True if both side are true. False otherwise. 
// Logical Or Operator - True if at least one side is true. False otherwise. 

// if (temp >= 60 && temp <= 90) {
//     console.log("It's pretty nice outside")
// } else if (temp <= 0 || temp >= 120) {
//     console.log("Don't go outside.")
// } else {
//     console.log('Eh. Do what you want')
// }

// Challenge: 

let isGuestOneVegan = true,
    isGuestTwoVegan = false;
    


    // Are both vegan? Only offer up vegan dishes.
    // At least one vegan? Make sure to offer up some vegan options.
    // Else, Offer up anything on the menu.

    if (isGuestOneVegan && isGuestTwoVegan) {
        console.log('Only offer up vegan dishes.')
    } else if (isGuestOneVegan || isGuestTwoVegan) {
        console.log('Make sure to offer up some vegan options.')
    } else {
        console.log('Offer up anything on the menu.')
    }