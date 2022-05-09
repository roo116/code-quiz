//global variables
//questions = []



//timer
function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

document.getElementById("btn").addEventListener("click", timer());
//high score

//questions