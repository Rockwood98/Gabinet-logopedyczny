const btn = document.querySelector(".fieldone");
const score = document.querySelector(".scoretimer");
const clicker = document.querySelector(".clickertimer");
const btnTwo = document.querySelector(".fieldtwo");
const btnThree = document.querySelector(".fieldthree");
const again = document.querySelector(".again");
let click = 0;
let scoreX = 0;

btn.addEventListener("click", function () {
  click++;
  scoreX += 5;
  clicker.textContent = click;
  score.textContent = scoreX;
});
btnTwo.addEventListener("click", function () {
  click++;
  scoreX += 1;
  clicker.textContent = click;
  score.textContent = scoreX;
});
btnThree.addEventListener("click", function () {
  click++;
  scoreX += 10;
  clicker.textContent = click;
  score.textContent = scoreX;
});
again.addEventListener("click", function () {
  click = 0;
  scoreX = 0;
  clicker.textContent = click;
  score.textContent = scoreX;
});
