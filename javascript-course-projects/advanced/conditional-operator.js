// const myAge = 28
// let message
//
// if (myAge >= 18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote.'
// }

// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
//shorthand

// console.log(message)

// const myAge = 28
// const showPage = () => {
//     return 'Showing the page'
// }
// const showErrorPage = () => {
//     return 'Showing the error page'
// }

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Pwanii', 'Mushii', 'Muni', 'Wrajajar']
const teamSize = team.length
const teamSizeOk = () => 'Team size:' + ' ' + teamSize
const teamSizeFull = () => 'Too many people on the team'

const message = teamSize <= 3 ? teamSizeOk() : teamSizeFull()

console.log(message)