//global variables
//questions = []

// var timerEl = document.querySelector(".timer-section");
// var sec = 0;
// var hidden = document.getElementsByClassName("hidden");
// console.log(hidden);
// i = 1


//timer

// function btnHandler(click) {
//     //get target from event
//    var targetEl = event.target;

//     if(targetEl.matches("#btn")) {
//         timer();
//     }
// };

//timer
// function timer() {
//     sec = 30;
//     var timer = setInterval(function(){
//         document.getElementById('timer').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);

//     // askQuestions()
// }


// function askQuestions() {
//     i=1
//     document.getElementById("q[i]")




// }

// timerEl.addEventListener("click", btnHandler);
//high score

//questions

// put questions in an object. 1 object for a question.
// properties a. answer, b. answer, c. answer, d. answer,
// correct answer,
//function to display right or wrong answer
//

//create questions objects as global and store in local storage
var question1 = {
    text: "What is your name?",
    answerA: "Indiana Jones",
    answerB: "Arthur, King of the Britons",
    answerC: "A larch",
    correctAnswer: "b"
}

var question2 = {
    text: "What is your quest?",
    answerA: "to find the Lost Ark of Israel",
    answerB: "to learn fullstack development in 24 weeks",
    answerC: "To seek the Holy Grail",
    correctAnser: "c"
}

var questionList = [question1, question2]

for (i = 0; i < questionList.length; i++) {
    // console.log("q" + Number(i+1));
    qdata = "q" + Number(i + 1);
    localStorage.setItem(qdata, JSON.stringify(questionList[i]));
};

//create first para element
var createParaEl = document.createElement("p"); 
document.querySelector(".qlist").appendChild(createParaEl);
createParaEl.className = "q-text"
// createLiEl.innerHTML = localStorage.getItem(JSON.parse(question1.text))  
createParaEl.innerHTML = question1.text;

// create first answer
document.querySelector(".qlist").appendChild(createParaEl);
createParaEl.innerHTML = question1.answerA;










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

