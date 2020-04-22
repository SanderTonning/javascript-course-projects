// Callback
const getDataCallback = (number, callback) => {
    setTimeout(() => {
        if(typeof number === 'number') {
            callback(undefined, number * 2)
        } else {
            callback(undefined, 'This time is up')
        }
    }, 2000)
}


//Spaghetticode with four level nested...
getDataCallback(2, (error, data) => {
    if (error) {
        console.log(err)
    } else {
        getDataCallback(data, (error, data) => {
            if(error) {
                console.log('Error')
            } else {
                console.log(data)
            }
        })
    }
})

// Promises
const getDataPromise = (number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof number === 'number' ? resolve(number * 2) : reject('Number must be provided')
    }, 2000)
})


// Nesting Promises (bad practise)
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})


// Promises chaining! (BIS!)
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})