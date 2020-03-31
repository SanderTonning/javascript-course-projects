// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date('April 1 2020 12:00:00')
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if(dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}

// using moment library. www.momentjs.com
// const now = moment()
// console.log(now.format('MMMM Do YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// const birthday = moment()
// birthday.year(1991).month(6).date(13)
// console.log(birthday.format('MMM D, YYYY'))