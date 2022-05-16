// go back to the quiz starting page
var quizReturn = function () {
  window.location.href = "index.html";
};

//set go back event
var goBack = document.getElementById("go-back");
goBack.addEventListener("click", quizReturn);

var results = "";
var oList = document.getElementById("score-rank");
var list = ""
var txtContent = ""

var allScores = Object.keys(localStorage);
console.log(allScores);
for (var i = 0; i < allScores.length; i++) {
  txtContent = localStorage.getItem((allScores[i]));
  txtContent = JSON.parse(txtContent);
  list = document.createElement("li");
  list.textContent = txtContent;
  oList.appendChild(list);
}



