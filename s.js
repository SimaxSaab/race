const score = document.querySelector(".score"),
  start = document.querySelector(".gameStart"),
  gameArea = document.querySelector(".gameArea"),
  car = document.createElement('div');

car.classList.add('car');

console.log(start);

start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

const settings = {
  start: false,
  score: 0,
  speed: 3
}

score.innerHTML = settings.score; // чтоб услинт не ругался

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
}

function startRun(e) {
  e.preventDefault();
  keys[e.key] = true;
}
function stopRun(e) {
  e.preventDefault();
  keys[e.key] = false;
}

function startGame() {
  start.classList.add("hide");
  settings.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  console.log('here');
  if (settings.start) {
    requestAnimationFrame(playGame);
  }
  
}