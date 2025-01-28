
// const prevyear = document.getElementById('prev');
// const nextyear = document.getElementById('next');
// const monthYear = document.getElementById('monthYear');
// // const calendarDays = document.getElementById('calendarDays');
// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];
// // monthYear.textContent = `${months[month]} ${year}`;
// function updateCalendar(){
// let currentDate = new Date()
// let currentmonth = currentDate.getMonth()
// let currentyear = currentDate.getFullYear();
// const daysInMonth = new Date(year, month + 1, 0).getDate();
// }
// updateCalendar()
// nextyear.addEventListener('click',() => {
//     months++;
// })


const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const monthYear = document.getElementById('monthYear');
const calendarDays = document.getElementById('calendarDays');

let currentDate = new Date();

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed

    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get the day of the week for the first day of the month (0-Sunday, 1-Monday, ...)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Clear existing days
    calendarDays.innerHTML = '';

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('li');
        calendarDays.appendChild(emptyCell);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('li');
        dayCell.textContent = day;
        calendarDays.appendChild(dayCell);
    }

    // Update month and year display
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthYear.textContent = `${months[month]} ${year}`;
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Initial calendar display
updateCalendar();