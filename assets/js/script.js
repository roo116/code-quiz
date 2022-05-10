//global variables
//questions = []
var timerEl = document.querySelector(".timer-section");
var sec = 0;
var hidden = document.getElementsByClassName("hidden");
console.log(hidden);
i = 1




function btnHandler(click) {
    //get target from event
   var targetEl = event.target;

    if(targetEl.matches("#btn")) {
        timer();
    }
};

//timer
function timer() {
    sec = 30;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);

    // askQuestions()
}


function askQuestions() {
    i=1
    document.getElementById("q[i]")


    
    
}

timerEl.addEventListener("click", btnHandler);
//high score

//questions