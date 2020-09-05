const daysElem = document.getElementById('timer_days');
const hoursElem = document.getElementById('timer_hours');
const minsElem = document.getElementById('timer_mins');
const secsElem = document.getElementById('timer_secs');
const newYears = '1 Jan 2021'

function countdown() {
    const nydate = new Date(newYears);
    console.log(nydate)
    const currentdate = new Date();
    console.log(currentdate)
    const totalsec = (nydate - currentdate) / 1000;
    console.log(totalsec)
    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const mins = Math.floor(totalsec / 60) % 60;
    const secs = Math.floor(totalsec) % 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minsElem.innerHTML = mins;
    secsElem.innerHTML = secs;
}

function format_time() {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);