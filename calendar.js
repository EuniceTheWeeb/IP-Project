const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const date = new Date();
console.log(date);

// getDate()	Returns the day of the month (from 1-31)
// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getMonth()	Returns the month (from 0-11)
let thisDate = date.getDate();
let thisDay = date.getDay()
let thisMth = date.getMonth();
let thisYr = date.getFullYear();
console.log(thisDate, thisMth, thisYr, thisDay)
// let today = getDate();
// function mthCalendar (thisMth, thisYr) {

// }