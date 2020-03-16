// Global   (name)
    // Local    (name)
        // Local
    // Local

let name = 'Sander'

if (true) {
    let name = 'Sandra'

    if (true) {
        console.log(name)
        //Expected: Sandra
    }
}

if (true) {
    console.log(name)
    //Expected: Sander
}