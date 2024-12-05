const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
// console.log(date);

let thisDate = date.getDate(); // getDate()	Returns the day of the month (from 1-31)
let thisDay = date.getDay(); // getDay()	Returns the day of the week (from 0-6)
let month = date.getMonth(); // getMonth()	Returns the month (from 0-11)
let year = date.getFullYear(); // getFullYear()	Returns the year
let monthName = months[month];
document.querySelector("#monthYear").innerHTML = `${monthName} ${year}`;

function renderCalendar() {

    let firstDate = new date(year, month, 1);
    let lastDate = new date(year, month + 1, 0);
    let totalDays = lastDate.getDate();
    let startDay = firstDate.getDay();
    console.log(firstDate)

    const calendar = document.querySelector("#calendarBody");
    calendar.innerHTML = "";
    let tr = document.createElement('tr');

    const calendarEl = document.querySelector("#monthYear");
    let dayCounter = 1;
    for (let i = 1; i <= 31; i++) {
        console.log(i);
    }

}



document.querySelector("#prev").addEventListener("click", function () {
    date.setMonth(date.getMonth() - 1);
    renderCalendar(date);
});

document.querySelector("#next").addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    renderCalendar(date);
});

renderCalendar(date);