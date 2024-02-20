let houre = document.getElementById('houre');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let AMPM = document.getElementById('ampm');

let Hhh = document.getElementById('Hhh');
let Mmm = document.getElementById('Mmm');
let Sss = document.getElementById('Sss');

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

function DisplayTime(){

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let am = hh >= 12 ? "PM" : "AM";

    if(hh > 12){
        hh -= 12; 
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    houre.innerHTML = hh + '<br><span>Houre<span/><br/>';
    minutes.innerHTML = mm + '<br><span>Minutes<span/><br/>';
    seconds.innerHTML = ss + '<br><span>Seconds<span/><br/>';
    AMPM.innerHTML = am;

    Hhh.style.strokeDashoffset = 440 - (440 * hh) / 12;
    Mmm.style.strokeDashoffset = 440 - (440 * mm) / 60;
    Sss.style.strokeDashoffset = 440 - (440 * ss) / 60;

    hr_dot.style.transform = `rotate(${hh * 30}deg)`;
    min_dot.style.transform = `rotate(${mm * 6}deg)`;
    sec_dot.style.transform = `rotate(${ss * 6}deg)`;

}

setInterval(DisplayTime, 1000);