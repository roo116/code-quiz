//global variables

var timerEl = document.querySelector("#timer-btn");
var sec = 0;
var score = 0;
var timeLeft = 0;
var questionDivEl = document.querySelector(".question-div");
var answerOlEl = document.querySelector("#answer-list");
var resultDisplay = "";
var currQuestion = 0;
var highScores = document.getElementById("high-score");
var allScores = [];

//create questions objects as global and store in local storage
var questions = [
  {
    num: "1. ",
    text: "Commonly used data types DO NOT include:",
    answers: [" strings", " booleans", " alerts", " numbers"],
    correctAnswer: 2,
  },

  {
    num: "2. ",
    text: "The condition in an if/else statement is enclosed within ___.",
    answers: [" quotes", " curly brackets", " parentheses", " square brackets"],
    correctAnswer: 2,
  },

  {
    num: "3. ",
    text: "Arrays in JavaScript can be used to store _____.",
    answers: [
      " numbers and strings",
      " other arrays",
      " booleans",
      " all of the above",
    ],

    correctAnswer: 3,
  },

  {
    num: "4. ",
    text: "Sting values must be enclosed within _____ when being assigned to variables.",
    answers: [" commas", " curly brackets", " quotes", " parentheses"],

    correctAnswer: 2,
  },

  {
    num: "5. ",
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [" JavaScript", " terminal/bash", " for loops", " console.log"],

    correctAnswer: 3,
  },
];

var scores = function () {
  window.location.href = "scores.html";
};

//set scores event
var goScores = document.getElementById("high-score");
goScores.addEventListener("click", scores);

// timer
function timer() {
  sec = 75;
  timeLeft = setInterval(function () {
    document.getElementById("timer").innerHTML = "00:" + sec;
    sec--;
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (sec < 0 || sec < "0" + 0) {
      clearInterval(timeLeft);
    }
  }, 1000);

  //get rid of the welcome card

  var welcomeEl = document.getElementById("welcome-element");
  while (welcomeEl.hasChildNodes()) {
    welcomeEl.removeChild(welcomeEl.firstChild);
  }
  welcomeEl.remove();

  //ask some questions
  askQuestion();
}

// START - ask the question code

function askQuestion() {
  // set currQuestion to latest value
  if (sec < 0 || sec < "0" + 0) {
    clearInterval(timeLeft);
    var checkAnswer = document.getElementById("question");
    if (!checkAnswer) {
      endQuiz();
    } else {
      nextQuestion();
    }
  }
  currQuestion = currQuestion;
  console.log(
    "Ok, now I am inside the askQuestion function. CurrQuestions = " +
    currQuestion
  );

  // create html for the question
  var createQuestionEl = document.createElement("p");
  // createQuestionEl.setAttribute("data-question-value", )
  createQuestionEl.className = "question-item fs-3";
  createQuestionEl.textContent =
    questions[currQuestion].num + questions[currQuestion].text;
  createQuestionEl.id = "question";
  createQuestionEl.className =
    "fs-4 shadow p-3 mb-5 bg-body rounded no-gutters";
  questionDivEl.appendChild(createQuestionEl);

  // create html for the answers
  for (i = 0; i < questions[currQuestion].answers.length; i++) {
    var createAnswer = document.createElement("li");
    var classId = "answer-list-item-" + i;
    createAnswer.id = classId;
    createAnswer.className = "answer-list-item fs-5";
    createAnswer.textContent = questions[currQuestion].answers[i];
    answerOlEl.appendChild(createAnswer);

    // create listener on the answers
    createAnswer.setAttribute("data-answer-value", i);
    createAnswer.addEventListener("click", function (event) {
      var answerVal = event.target.dataset.answerValue;
      console.log("the answerVal is " + answerVal);

      // evaluate the answer and penalize for wrong answer
      if (parseInt(answerVal) === questions[currQuestion].correctAnswer) {
        console.log("answer was correct");
      } else {
        console.log("answer was incorrect");
        sec = sec - 10;
        if (sec < 0 || sec < "0" + 0) {
          sec = 0;
          var removeQuestionEl = document.getElementById("question");
          removeQuestionEl.remove();

          var removeAnswerList = document.getElementById("answer-list");
          while (removeAnswerList.hasChildNodes()) {
            removeAnswerList.removeChild(removeAnswerList.firstChild);
          }
          endQuiz();
        }
      }

      nextQuestion();
    });
  }
}

function nextQuestion() {
  //clear out results display

  var removeQuestionEl = document.getElementById("question");
  removeQuestionEl.remove();

  var removeAnswerList = document.getElementById("answer-list");
  while (removeAnswerList.hasChildNodes()) {
    removeAnswerList.removeChild(removeAnswerList.firstChild);
  }

  // var removeDisplayEl = document.getElementById("answer-result")
  // removeDisplayEl.remove();

  isEnd();
}

function isEnd() {
  currQuestion++;
  console.log(currQuestion + " is equal to " + questions.length);
  if (currQuestion != questions.length) {
    askQuestion();
  } else {
    console.log("No more questions!!!");
    endQuiz();
  }
}

function endQuiz() {
  //say some nice words
  console.log("I am in the endQuiz function");
  score = sec;
  console.log("final score is " + score);

  var scoreDiv = document.getElementById("score");
  var scoreEl = document.createElement("h2");
  scoreEl.className = "fs-5 m-auto"
  if (score <= 0) {
    scoreEl.textContent =
      "You scored 0.  Oh well.  Go study and try again.  Have a great day!!";
    scoreDiv.appendChild(scoreEl);
    return;
  }

  scoreEl.textContent = "You finished! Great Job!";
  scoreEl.className = "fs-2 text-center pe-0";
  scoreDiv.append(scoreEl);

  //show score
  showScore = document.createElement("p");
  showScore.textContent = "You're score is " + score;
  showScore.className = "fs-3 text-center";
  scoreDiv.appendChild(showScore);

  //add score form
  var createForm = document.createElement("form");
  createForm.id = "score-form-input";
  createForm.className = "bg-white my-4 p-4 rounded";
  scoreDiv.appendChild(createForm);

  var createFormDiv = document.createElement("div");
  createFormDiv.className = "form-group";
  createForm.appendChild(createFormDiv);

  var createLabel = document.querySelector(".form-group");
  var createLabel1 = document.createElement("label");
  createLabel1.for = "Enter your name or initials";
  createLabel1.textContent = "initials";
  createLabel.appendChild(createLabel1);

  var input1 = document.createElement("input");
  input1.type = "text";
  input1.id = "initials";
  input1.className = "form-control";
  input1.placeholder = "Name or Initials";
  input1.required = true;
  createLabel.appendChild(input1);

  var submitScore = document.createElement("button");
  submitScore.type = "button";
  submitScore.id = "score-button";
  submitScore.className = "btn btn-primary justify-content-center m-auto";
  submitScore.style = "width: 50%";
  // submitScore.style = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem";
  submitScore.innerHTML = "Submit";
  scoreDiv.appendChild(submitScore);

  submitScore.addEventListener("click", scoreResults);
}

function scoreResults() {
  console.log("I am in scoreResults");

  quizName = document.querySelector("#initials");
  if (!quizName.value) {
    quizName.placeholder = "You have to enter something.";
    return;
  }
  results = quizName.value + " - " + score
  console.log(results);
  keys = Object.keys(localStorage);
  var keyIdx = keys.length;
  newKey = keys.length + 1;
  localStorage.setItem(newKey, JSON.stringify(results));

  window.location.href = "scores.html";
}

timerEl.addEventListener("click", timer);
