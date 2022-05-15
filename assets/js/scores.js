// go back to the quiz starting page
var quizReturn = function () {
  window.location.href = "index.html";
};

//set go back event
var goBack = document.getElementById("go-back");
goBack.addEventListener("click", quizReturn);

var scoreVal = [];
var showHighScore = function () {
  var allkeys = Object.keys(localStorage),
    i = allkeys.length;

  while (i--) {
    scoreVal.push(localStorage.getItem(JSON.parse(allkeys[i])));
  }

  var cardEl = document.querySelector("#score-list");
  var olist = document.createElement("ol");
  olist.id = "score-rank";
  cardEl.appendChild(olist);

  var list = document.createElement("li");
  list.id = "score-items";
  list.textContent = scoreVal.join()
  olist.appendChild(list);
};

showHighScore();
