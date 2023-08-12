const pomidorro = document.querySelector('.pomidorro');
const pomHour = pomidorro.querySelector('.pomidorro__input--hour');
const pomMin = pomidorro.querySelector('.pomidorro__input--min');
const pomSec = pomidorro.querySelector('.pomidorro__input--sec');
const btnStart = pomidorro.querySelector('.pomidorto__start');
const btnRestart = pomidorro.querySelector('.pomidorto__restart');

pomHour.value = '0'+ 1;
pomMin.value = '0'+ 5;
pomSec.value = '0'+ 0;
let flag = false;
let timers;
const audio = new Audio('/magic.mp3');
btnRestart.setAttribute('disabled', '');

btnStart.addEventListener('click', function () {
    if (!flag) {
        flag = true;
        btnStart.classList.remove('pomidorto__start--stop');
        btnRestart.removeAttribute('disabled');
        timers = setInterval(() => {
            startTimer();
        }, 1000);
    }
    else {
        stop();
    }
})

btnRestart.addEventListener('click', () => {
    // flag = false;
    pomHour.value = '0'+ 1;
    pomMin.value = '0'+ 5;
    pomSec.value = '0'+ 0;
    startTimer();    
    btnRestart.classList.toggle('test');
});

pomHour.addEventListener('keyup', function() {    
    if(this.value < 0){
        this.value = '0'+ 0;
    }
    else if(this.value >= 99){
        this.value = 99;
    }
});
pomMin.addEventListener('keyup', function() {
    if(this.value < 0){
        this.value = '0'+ 0;
    }
    else if(this.value >= 60){
        this.value = 60;
    }
});
pomSec.addEventListener('keyup', function() {
    if(this.value < 0){
        this.value = '0'+ 0;
    }
    else if(this.value >= 60){
        this.value = 60;
    }
});
pomHour.addEventListener('focus', () => {    
    stop();
});
pomMin.addEventListener('focus', () => {
    stop();
});
pomSec.addEventListener('focus', () => {
    stop();
})
pomSec.addEventListener('blur', () => {
    if (pomSec.value == '') {
        pomSec.value = 0;
    }
});

function startTimer() {
    let hour = parseInt(pomHour.value);
    let horN = hour * 3600;
    let min = parseInt(pomMin.value);
    let minN = min * 60;
    let sec = parseInt(pomSec.value);
    let total = horN+ minN + sec;
    total--;
    let h = parseInt(total / 3600);
    let hs = parseInt(total % 3600);
    let m = parseInt(hs / 60);
    let s = parseInt(hs % 60);
    if(h < 10){
        pomHour.value = '0'+ h;
    }
    else{
        pomHour.value = h;
    }
    if(m < 10){
        pomMin.value = '0'+ m;
    }
    else{
        pomMin.value = m;
    }    if(s < 10){
        pomSec.value = '0'+ s;
    }
    else{
        pomSec.value = s;
    }
    
    if (total == 0) {
        audio.play();
        stop();
    }
}
function stop() {
    btnStart.classList.add('pomidorto__start--stop');
    flag = false;
    clearInterval(timers);
}