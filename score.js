// Iteration 8: Making scoreboard functional

console.log(window.location.search)


let params = new URLSearchParams(document.location.search);
let score = params.get("score")
  

let scoreboard = document.getElementById("score-board");
scoreboard.textContent = score;

var playagain = document.getElementById("play-again-button")
playagain.onclick = () =>{
  window.location.href =("./game.html")
}
