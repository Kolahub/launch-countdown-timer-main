// const timerContent = document.getElementById('timer')
let numDay = document.querySelector('.num-day')
let numHrs = document.querySelector('.num-hrs')
let numMin = document.querySelector('.num-mins')
let numSec = document.querySelector('.num-sec')
const timeDayBox = document.querySelector('.timer-day')
const timeHrsBox = document.querySelector('.timer-hrs')
const timeMinsBox = document.querySelector('.timer-mins')
const timeSecBox = document.querySelector('.timer-sec')
numDay.textContent = '';
numHrs.textContent = '';
numMin.textContent = '';
numSec.textContent = '';
let timeDay = 8
let timeHour = 23
let timeMin = 55;
let timeSec = 41;
const startTimer = setInterval(function () {
    timeSec--
    timeSecBox.classList.add('anime')
    const day = String(timeDay).padStart(2, 0)
    const hrs = String(timeHour).padStart(2, 0)
    const min = String(timeMin).padStart(2, 0)
    const sec = String(timeSec).padStart(2, 0)

    if (timeSec === 0) {
        timeSec = 60;
        timeMin--
        timeMinsBox.classList.add('animeOnce')
        setTimeout(function() {
        timeMinsBox.classList.remove('animeOnce')
        }, 1000)
    } 
    if (timeMin === 0) {
        timeSec = 60;
        timeMin = 59;
        timeHour--
        timeHrsBox.classList.add('animeOnce')
        setTimeout(function() {
            timeHrsBox.classList.remove('animeOnce')
            }, 1000)
    }
    if (timeHour === 0) {
        timeSec = 60;
        timeMin = 59;
        timeHour = 24
        timeDay--
        timeDayBox.classList.add('animeOnce')
        setTimeout(function() {
            timeDayBox.classList.remove('animeOnce')
            }, 1000)
    } 
    if (timeDay === 0) {
        timeSec = 60;
        timeMin = 59;
        timeHour = 24
    }
    if(timeDay === 0 && timeHour === 0 && timeMin === 0 && timeSec === 0) (clearInterval(startTimer))

    numDay.textContent = day;
    numHrs.textContent = hrs;
    numMin.textContent = min;
    numSec.textContent = sec;
}, 1000)