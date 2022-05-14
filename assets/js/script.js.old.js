//global variables

//create questions objects as global and store in local storage
var questions = [
  {
    num: "1. ",
    text: "What is your name?",
    answers: ["Indiana Jones", "Arthur, King of the Britons", "A larch"],
    correctAnswer: 1,
  },

  {
    num: "2. ",
    text: "What is your quest?",
    answers: [
      "To find the Lost Ark of the Covenent",
      "To learn fullstack web-development in 24 weeks",
      "To seek the Holy Grail",
    ],
    correctAnswer: 2,
  },

  {
    num: "3. ",
    text: "What is the average speed velocity of an unladen swallow?",
    answers: ["What do you mean?  An African or European Swallow?", "43 times", "Blue..no Yellooooo...."],

    correctAnswer: 0
  }
];


//variables for timer/score
var timerEl = document.querySelector("#timer-btn");
var buttonEl = document.querySelector("#next-btn");
var sec = 0;
var scor = 0

//variables for question/answer code
var questionDivEl = document.querySelector(".question-div");
var answerOlEl = document.querySelector("#answer-list");
var resultDisplay = ""
var currQuestion = 0;
// var currAnswer = ""
console.log("At the start of the JS file currQuestion = " + currQuestion);

//variables for high-score code


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

  askQuestion()
}


// START - add question to index.html
function askQuestion() {

  // set currQuestion to latest value
  currAnswer = false
  currQuestion = currQuestion;
  console.log("Ok, now I am inside the askQuestion function. CurrQuestions = " + currQuestion);

  var createQuestionEl = document.createElement("p");
  // createQuestionEl.setAttribute("data-question-value", )
  createQuestionEl.className = "question-item fs-3";
  createQuestionEl.id = "question";
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

    //END - add answer text to html

    //START - evaluate answer

    createAnswer.setAttribute("data-answer-value", i);
    createAnswer.addEventListener("click", function (event) {

      var answerVal = event.target.dataset.answerValue;

      if (parseInt(answerVal) === questions[currQuestion].correctAnswer) {
        var responseEl = document.querySelector(".right-wrong")
        var resultDisplay = document.createElement("p");
        resultDisplay.id = "answer-result";
        resultDisplay.textContent = "Yes!!!!  You're right!!  Awesome!!!"
        responseEl.appendChild(resultDisplay);

      } else {
        var responseEl = document.querySelector(".right-wrong")
        var resultDisplay = document.createElement("p");
        resultDisplay.id = "answer-result";
        resultDisplay.textContent = "WRONG!!! WRONG WRONG WRONG!!!";
        sec = sec - 5
        responseEl.appendChild(resultDisplay);
      };

    });

    if (parseInt(answerVal) === questions[currQuestion].correctAnswer) {
      var responseEl = document.querySelector(".right-wrong")
      var resultDisplay = document.createElement("p");
      resultDisplay.id = "answer-result";
      resultDisplay.textContent = "Yes!!!!  You're right!!  Awesome!!!"
      responseEl.appendChild(resultDisplay);

    } else {
      var responseEl = document.querySelector(".right-wrong")
      var resultDisplay = document.createElement("p");
      resultDisplay.id = "answer-result";
      resultDisplay.textContent = "WRONG!!! WRONG WRONG WRONG!!!";
      sec = sec - 5
      responseEl.appendChild(resultDisplay);
    };


  };
};

function isEnd() {
  currQuestion++
  console.log(currQuestion + " is equal to " + questions.length);
  if (currQuestion != questions.length) {
    askQuestion();
  } else {
    console.log("No more questions!!!")
    score = sec
    console.log
    // create HTML div/form for end game
    // create html section for 
  }
};



function nextQuestion() {
  //clear out results display

  var removeQuestionEl = document.getElementById("question");
  removeQuestionEl.remove();

  var removeAnswerList = document.getElementById("answer-list");
  while (removeAnswerList.hasChildNodes()) {
    removeAnswerList.removeChild(removeAnswerList.firstChild);
  }

  var removeDisplayEl = document.getElementById("answer-result")
  removeDisplayEl.remove();

  isEnd()

};



function endQuiz() {
  console.log("I am in the endQuiz function");
  score = sec;
  console.log(score);
  // if (score > sec) {
  //   "Your score is "
  // }
  // sec = 0

}

// function nextButton(event) {
//   //get target from event
//   var nextButtionClick = event.target;
//   console.log(nextButtionClick);

//   // if (nextButtionClick.matches("#next-btn")) {
//   //   nextQuestion()

timerEl.addEventListener("click", timer);



// buttonEl.addEventListener("click", nextQuestion);







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
// Steph note: createAnswerElA.addEventListener('click', evalAnswer)

// var allScores = JSON.parse(localStorage.getItem('key')) || []
