// Javascript uses Lexical Scope (Static Scope)

// Global Scope - Defined outside of all code blocks        
// Local Scope - Defined inside a code block                

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

let varONe = 'varOne'

if (true) {
    
    console.log(varONe)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)
// ReferanceError: varTwo not defined

