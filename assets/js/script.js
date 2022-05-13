//global variables
//questions = []

//variables for timer code
var timerEl = document.querySelector(".timer-section");
var buttonEl = document.querySelector("#next-btn");
var sec = 0;

//variables for question/answer code
var questionDivEl = document.querySelector(".question-div");
var answerOlEl = document.querySelector("#answer-list");
var currQuestion = 0;
console.log("At the start of the JS file currQuestion = " + currQuestion);

//variables for high-score code

// console.log(hidden);
// i = 1

//timer

function btnHandler(event) {
  //get target from event
  var targetEl = event.target;

  if (targetEl.matches("#timer-btn")) {
    timer();
  }
}

// timer;
function timer() {
  sec = 60;
  var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
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
var questions = [
  {
    num: "1. ",
    text: "What is your name?",
    answers: ["Indiana Jones", "Arthur, King of the Britons", "A larch"],
    correctAnswer: 1,
  },

  {
    num: "2.",
    text: "What is your quest?",
    answers: [
      "to find the Lost Ark of the Covenent",
      "to learn fullstack web-development in 24 weeks",
      "To seek the Holy Grail",
    ],
    correctAnswer: 2,
  },

  {
    num: "3. ",
    text: "What is the average speed velocity of an unladen swallow?",
    answers: ["What do you mean? an African or European Swallow?", "43 times", "Blue..no Yellooooo...."],

    corretAnswer: 0
  }
];



//START - add question object to local storage

// var questionList = [question1, question2];

// for (i = 0; i < questionList.length; i++) {
//     // console.log("q" + Number(i+1));
//     qdata = "q" + Number(i + 1);
//     localStorage.setItem(qdata, JSON.stringify(questionList[i]));
// };

//END - add question object to local storage

//START - add question text to html

// var curIdx = 0;
// curIdx++

function askQuestion() {

  // set currQuestion to latest value
  currQuestion = currQuestion;
  console.log("Ok, now I am inside the askQuestion function. CurrQuestions = " + currQuestion);

  var createQuestionEl = document.createElement("p");
  // createQuestionEl.setAttribute("data-question-value", )
  createQuestionEl.className = "question-item fs-3";
  createQuestionEl.textContent =
    questions[currQuestion].num + questions[currQuestion].text;
  questionDivEl.appendChild(createQuestionEl);




//END - add question text to html

// START - add answer text to html

for (i = 0; i < questions[currQuestion].answers.length; i++) {
  var createAnswer = document.createElement("li");
  var classId = "answer-list-item-" + i;
  createAnswer.id = classId;
  createAnswer.className = "answer-list-item fs-5";
  createAnswer.textContent = questions[currQuestion].answers[i];
  answerOlEl.appendChild(createAnswer);

  createAnswer.setAttribute("data-answer-value", i);
  createAnswer.addEventListener("click", function (event) {
    var answerVal = event.target.dataset.answerValue;
    console.log(answerVal);
    if (parseInt(answerVal) === questions[currQuestion].correctAnswer) {
      var responseEl = document.querySelector(".right-wrong")
      var resultDisplay = document.createElement("p");
      resultDisplay.className = "answer-result";
      resultDisplay.textContent = "Yes!!!!  You're right!!  Awesome!!!"
      responseEl.appendChild(resultDisplay);
    } else {
      var responseEl = document.querySelector(".right-wrong")
      var resultDisplay = document.createElement("p");
      resultDisplay.className = "answer-result";
      resultDisplay.textContent = "WRONG!!! WRONG WRONG WRONG!!!";
      responseEl.appendChild(resultDisplay);
    };
  });

};

};




function nextQuestion(event) {

  removeEl = document.getElementsByClassName("answer-list-item")
  for (i = 0; i < removeEl.length; i++) {
    removeEl[i].remove()
  }  
}

// function nextButton(event) {
//   //get target from event
//   var nextButtionClick = event.target;
//   console.log(nextButtionClick);

//   // if (nextButtionClick.matches("#next-btn")) {
//   //   nextQuestion()


buttonEl.addEventListener("click", nextQuestion);


//   currQuestion++
//   if (currQuestion < questions.length) {
//     console.log("current question is " + currQuestion + " and current lenght is " + questions.length);
//     askQuestion()
//   }


//create next question event handler
// var nextButton = document.querySelector(".btn-next")
// nextButton.addEventListener("click", nextQuestion)


// console.log("This is after a pass through askQuestion function " + currQuestion);
// if(currQuestion < questions.length) {
//   askQuestion()
// }

// currQuestion++
//   console.log("Incremented currQuestion by 1");
//   return askQuestion()


// var evalAnswer = function () {
//     answerListItems = answerOlEl.getElementsByTagName("li");
//     for(var i=0; i< answerListItems.length; i++);
//     doStuff();

// };

// function doStuff() {
//     console.log(answerList.id);
// }
// evalAnswer();

// }

//STACKOVERFLOW EVENT LISTENER ON LI CODE SNIPPET
// document.getElementById("parent-list").addEventListener("click",function(e) {
//     // e.target is our targetted element.
//                 // try doing console.log(e.target.nodeName), it will result LI
//     if(e.target && e.target.nodeName == "LI") {
//         console.log(e.target.id + " was clicked");
//     }
// });

// createAnswer.addEventListener("click", evalAnswer)
// var evalAnswer = function(){
//     console.log ("I clicked this " + createAnswer)
// };
// var createAnswerElA = document.createElement("li").id;
// var createAnswerElB = document.createElement("li");
// var createAnswerElC = document.createElement("li");

// Steph note: createAnswerElA.addEventListener('click', evalAnswer)

// for(i=0; i <= question1.length; i++) {
// var createAnswerEl = document.createElement("li");

//add answer a
// createAnswerElA.className = "fs-5";
// createAnswerElA.textContent = question1.answerA;
// answerOlEl.appendChild(createAnswerElA);
// // console.log(createAnswerEl);

// //add answer b
// createAnswerElB.className = "fs-5";
// createAnswerElB.textContent = question1.answerB;
// answerOlEl.appendChild(createAnswerElB);

// //add answer c
// createAnswerElC.className = "fs-5";
// createAnswerElC.textContent = question1.answerC;
// answerOlEl.appendChild(createAnswerElC);

// }

//START answer question

timerEl.addEventListener("click", askQuestion);

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
//localSTorage

// var allScores = JSON.parse(localStorage.getItem('key')) || []
