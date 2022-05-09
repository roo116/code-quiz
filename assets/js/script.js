//global variables
//questions = []
var timerEl = document.querySelector(".timer-section");



//timer
function timer() {
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function btnHandler(click) {
    //get target from event
   var targetEl = event.target;

    if(targetEl.matches("#btn")) {
        timer();
    }
};

timerEl.addEventListener("click", btnHandler);
//high score

//questions