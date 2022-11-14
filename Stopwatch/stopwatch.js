let second = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSecond = document.getElementById("second");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let interval;

// this function will run when click on start

function startTimer(){
    tens++;

    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        second++
        appendSecond.innerHTML = "0" + second;
        tens = 0;
        appendTens.innerHTML = '0' + 0;

    }

    if(second > 9){
        appendSecond.innerHTML = second;
    }
};

buttonStart.onclick = function(){
    interval = setInterval(startTimer);
};

buttonStop.onclick = function (){
  clearInterval(interval);
};

buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    second = "00";
    appendSecond.innerHTML = second;
    appendTens.innerHTML = tens;
};