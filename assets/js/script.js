//global variables
//questions = []



//timer
function timer(){cd
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

