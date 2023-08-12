const pomidorro = document.querySelector('.pomidorro');
const pomHour = pomidorro.querySelector('.pomidorro__input--hour');
const pomMin = pomidorro.querySelector('.pomidorro__input--min');
const pomSec = pomidorro.querySelector('.pomidorro__input--sec');
const btnStart = pomidorro.querySelector('.pomidorto__start');
const btnRestart = pomidorro.querySelector('.pomidorto__restart');

// if(pomHour.value == 0 || pomHour.value == NaN ){
//     pomHour.value = '0'+ 0;
// }
// if(pomMin.value == 0 || pomMin.value == NaN ){
//     pomMin.value = '0'+ 0;
// }
// if(pomSec.value == 0 || pomSec.value == NaN ){
//     pomSec.value = '0'+ 0;
// }
pomHour.value = '0' + 1;
pomMin.value = '0' + 5;
pomSec.value = '0' + 0;
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
    pomHour.value = '0' + 1;
    pomMin.value = '0' + 5;
    pomSec.value = '0' + 0;
    startTimer();
    btnRestart.classList.toggle('test');
});

pomHour.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^\d]/g, "");
    if (this.value < 0) {
        this.value = '0' + 0;
    }
    else if (this.value >= 99) {
        this.value = 99;
    }
    else if (this.value.length > 2) {
        this.value = this.value.slice(1);
        console.log(typeof this.value);
    }
});
pomMin.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^\d]/g, "");
    if (this.value < 0) {
        this.value = '0' + 0;
    }
    else if (this.value >= 59) {
        this.value = 59;
    }
    else if (this.value.length > 2) {
        this.value = this.value.slice(1);
        console.log(typeof this.value);
    }
});
pomSec.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^\d]/g, "");
    if (this.value < 0) {
        this.value = '0' + 0;
    }
    else if (this.value >= 59) {
        this.value = 59;
    }
    else if (this.value.length > 2) {
        this.value = this.value.slice(1);
        console.log(typeof this.value);
    }
});
function stopTarget(e){

}
pomidorro.addEventListener('click', (e) =>{
    e.target.addEventListener('focus', () => {
        stop();
    });
    e.target.addEventListener('blur', function () {
        if (this.value == '') {
            this.value = '0' + 0;
        }
    });
    
});


function startTimer() {
    let hour = parseInt(pomHour.value);
    let horN = hour * 3600;
    let min = parseInt(pomMin.value);
    let minN = min * 60;
    let sec = parseInt(pomSec.value);
    let total = horN + minN + sec;
    total--;
    if (total < 0) {
        total = 0;
    }
    let h = parseInt(total / 3600);
    let hs = parseInt(total % 3600);
    let m = parseInt(hs / 60);
    let s = parseInt(hs % 60);
    console.log(total)
    //часы
    if (h < 10) {
        pomHour.value = '0' + h;
    }
    else {

        pomHour.value = h;
    }
    // минуты
    if (m < 10) {
        pomMin.value = '0' + m;
    }
    else {
        pomMin.value = m;
    }
    // секунды
    if (s < 10) {
        pomSec.value = '0' + s;
    }

    else {
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