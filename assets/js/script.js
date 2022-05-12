//global variables
//questions = []

var timerEl = document.querySelector(".timer-section");
var sec = 0;
var hidden = document.getElementsByClassName("hidden");
// console.log(hidden);
// i = 1

//timer

function btnHandler(click) {
    //get target from event
   var targetEl = event.target;

    if(targetEl.matches("#btn")) {
        timer();
    }
};

timer
function timer() {
    sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);

    askQuestion()
}

// function askQuestions() {
//     i=1
//     document.getElementById("q[i]")

// }


//high score

//questions

// put questions in an object. 1 object for a question.
// properties a. answer, b. answer, c. answer, d. answer,
// correct answer,
//function to display right or wrong answer
//

//create questions objects as global and store in local storage
var question1 = {
  num: "1. ",
  text: "What is your name?",
  answerA: "Indiana Jones",
  answerB: "Arthur, King of the Britons",
  answerC: "A larch",
  correctAnswer: "2",
};

var question2 = {
  num: "2.",
  text: "What is your quest?",
  answerA: "to find the Lost Ark of the Covenent",
  answerB: "to learn fullstack web-development in 24 weeks",
  answerC: "To seek the Holy Grail",
  correctAnswer: "c",
};

//START - add question object to local storage

// var questionList = [question1, question2];

// for (i = 0; i < questionList.length; i++) {
//     // console.log("q" + Number(i+1));
//     qdata = "q" + Number(i + 1);
//     localStorage.setItem(qdata, JSON.stringify(questionList[i]));
// };

//END - add question object to local storage

//START - add question text to html

function askQuestion() {
var questionDivEl = document.querySelector(".question-div");
var createQuestionEl = document.createElement("p");
createQuestionEl.className = "question-item fs-3";
createQuestionEl.textContent = question1.num + question1.text;
questionDivEl.appendChild(createQuestionEl);
// }

//END - add question text to html

// START - add answer text to html

// function createAnswer() {
var answerOlEl = document.querySelector("ol");
var createAnswerElA = document.createElement("li");
var createAnswerElB = document.createElement("li");
var createAnswerElC = document.createElement("li");

// for(i=0; i <= question1.length; i++) {
// var createAnswerEl = document.createElement("li");

//add answer a
createAnswerElA.className = "fs-5";
createAnswerElA.textContent = question1.answerA;
answerOlEl.appendChild(createAnswerElA);
// console.log(createAnswerEl);

//add answer b
createAnswerElB.className = "fs-5";
createAnswerElB.textContent = question1.answerB;
answerOlEl.appendChild(createAnswerElB);

//add answer c
createAnswerElC.className = "fs-5";
createAnswerElC.textContent = question1.answerC;
answerOlEl.appendChild(createAnswerElC);

}

//START answer question


timerEl.addEventListener("click", btnHandler);

// }

//END add answer text to html

// createLiEl.innerHTML = localStorage.getItem(JSON.parse(question1.text))

//START pseudocode

// // create first answer
// document.querySelector(".qlist").appendChild(createParaEl);
// createParaEl.innerHTML = question1.answerA;

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

//END pseudocode
