var title = document.getElementsByTagName("h1")[0];
var dice1 = document.querySelectorAll(".dice img")[0];
var dice2 = document.querySelectorAll(".dice img")[1];

window.onload = fun();

function fun() {
  document.getElementById("pic1").style.display = "none";
  document.getElementById("pic2").style.display = "none";

  var score1 = calculateScore();
  var score2 = calculateScore();

  setImage(dice1, score1);
  setImage(dice2, score2);

  getResult(score1, score2);
}

function calculateScore() {
  var score = Math.random();
  score = score * 6;
  score = Math.floor(score);
  score++;
  return score;
}

function setImage(dice, score) {
  var imageString = "dice" + score + ".png";
  var targetImage = "images/" + imageString;
  dice.setAttribute("src", targetImage);
}

function getResult(score1, score2) {
  if (score1 === score2) {
    title.textContent = "Draw!";
  } else if (score1 > score2) {
    title.textContent = "Player 1 Wins!";
    document.getElementById("pic1").style.display = "block";
  } else {
    title.textContent = "Player 2 Wins!";
    document.getElementById("pic2").style.display = "block";
  }
}
