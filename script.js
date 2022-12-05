const time  = document.getElementById('stopwatch')


var hr = 0;
var min = 0;
var sec = 0;

var stopTime = true;

function startTimer(){
    if(stopTime == true){
        stopTime = false;
        timeUpdator();
    }

    time.style.border = "5px solid cyan";
}

function stopTimer(){
    if(stopTime == false){
        stopTime = true;
    }

    time.style.border = "";
}

function timeUpdator(){
    if(stopTime == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec  = sec +1;

        if(sec ==60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr +1;
            min =0;
            sec = 0;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(hr < 10){
            hr = "0" + hr;
        }

        time.innerHTML = hr + ":" + min + ":" + sec;

        setTimeout("timeUpdator()" , 1000);
    }
}

function resetTimer(){
    time.innerHTML = "00:00:00";
    stopTime = true;
    hr =0;
    min =0;
    sec = 0;
    time.style.border = "";
}