const numDay = document.querySelector('.num-day')
const numHrs = document.querySelector('.num-hrs')
const numMin = document.querySelector('.num-mins')
const numSec = document.querySelector('.num-sec')
const timeDayBox = document.querySelector('.timer-day')
const timeHrsBox = document.querySelector('.timer-hrs')
const timeMinsBox = document.querySelector('.timer-mins')
const timeSecBox = document.querySelector('.timer-sec')
let timeDay = 8;
let timeHour = 23
let timeMin = 1;
let timeSec = 3;
const startTimer = setInterval(function () {
    timeSec--
    timeSecBox.classList.add('anime')
    const day = String(timeDay).padStart(2, 0)
    const hrs = String(timeHour).padStart(2, 0)
    const min = String(timeMin).padStart(2, 0)
    const sec = String(timeSec).padStart(2, 0)

    if (timeSec === 0) {
        timeMin--
        timeSec = 60;
        timeMinsBox.classList.add('anime')
        setTimeout(function() {
        timeMinsBox.classList.remove('anime')
        }, 1000)
    } 
    if (timeMin < 0) {
        timeSec = 60;
        timeMin = 59;
        timeHour--
        timeHrsBox.classList.add('anime')
        setTimeout(function() {
            timeHrsBox.classList.remove('anime')
            }, 1000)
    }
    if (timeHour === 0) {
        timeSec = 60;
        timeMin = 59;
        timeHour = 24
        timeDay--
        timeDayBox.classList.add('anime')
        setTimeout(function() {
            timeDayBox.classList.remove('anime')
            }, 1000)
    } 
    if (timeDay === 0) {
        timeSec = 60;
        timeMin = 59;
        timeHour = 24
    }
    if(timeDay === 0 && timeHour === 24 && timeMin === 59 && timeSec === 60) (clearInterval(startTimer))

    numDay.textContent = day;
    numHrs.textContent = hrs;
    numMin.textContent = min;
    numSec.textContent = sec;
}, 1000)