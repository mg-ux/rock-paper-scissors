let gameCount = 0;
let computerScore = 0;
let playerScore = 0;
let drawCount = 0;

function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// randomly returns the strings Rock, Paper or Scissors
function computerPlay() {
switch (Math.floor(Math.random() * 3)) {
case 0: return "Rock"; break;
case 1: return "Paper"; break;
case 2: return "Scissors"; break;
}
}

function playRound(playerSelection, computerSelection) {
playerSelection = capitalizeFirstLetter(playerSelection);

if (playerSelection === computerSelection)                               {drawCount++;	 return alert("It's a draw!");}
if (playerSelection === "Rock"     && computerSelection === "Paper")     {computerScore++; return alert("You lose! Paper beats Rock.");}
if (playerSelection === "Rock"     && computerSelection === "Scissors")  {playerScore++;   return alert("You win! Rock beats Scissors.");}
if (playerSelection === "Paper"    && computerSelection === "Rock")      {playerScore++;   return alert("You win! Paper beats Rock.");}
if (playerSelection === "Paper"    && computerSelection === "Scissors")  {computerScore++; return alert("You lose! Scissors beats Paper.");}
if (playerSelection === "Scissors" && computerSelection === "Rock")      {computerScore++; return alert("You lose! Rock beats Scissors.");}
if (playerSelection === "Scissors" && computerSelection === "Paper")     {playerScore++;   return alert("You win! Scissors beats Paper.");}
}

function game() {
for (let i=0; i<5; i++) {
playRound(prompt(), computerPlay()); gameCount++;
}
console.log("You: " + playerScore + ", Computer: " + computerScore + ", Draws: "+drawCount);
if (computerScore < playerScore) {console.log("You won the game!")};
if (computerScore > playerScore) {console.log("You lost the game!")};
if (computerScore === playerScore) {console.log("It's a draw!")};
}

game();