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

// put questions in an object. 1 object for a question.
// properties a. answer, b. answer, c. answer, d. answer,
// correct answer,
//function to display right or wrong answer
//

// function to reduce timer on wrong answer
// if answer = wrong reduce timer left by x;

// function score
// save score in local storage.  
// maintain high score
// show high score if necessary
// log initials

// create question cards from objects in HTML
// create response that question is right or wrong
// create code to hightlight selected response

