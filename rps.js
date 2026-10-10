var win = 0;
var loss = 0;
var tie = 0;
const resultText = document.getElementById("result");
resultText.textContent = "State Your Choice!";
const choices = document.getElementById("choices");
const stats = document.getElementById("stats");
stats.textContent = `Wins: ${win} | Losses: ${loss} | Ties: ${tie}`;
var btnText = document.getElementById("theme-btn");
btnText.textContent = "Dark Mode";

//Rock = 0, Paper = 1, Scissors = 2
function choice(playerChoice) {
  var comChoice = Math.floor(Math.random() * 3);
  //check whether the player's choice would correspond with win, loss or tie
  //based on their choice
  switch (playerChoice) {
    case 0: //Rock
      if (comChoice == 1) {
        loss++;
        resultText.textContent = "You Lost";
        choices.textContent = "You 👊 🖐️ Computer";
      } else if (comChoice == 2) {
        win++;
        choices.textContent = "You 👊 ✌️ Computer";
        resultText.textContent = "You Won";
      } else {
        tie++;
        choices.textContent = "You 👊 👊 Computer";
        resultText.textContent = "You Tied";
      }
      stats.textContent = `Wins: ${win} | Losses: ${loss} | Ties: ${tie}`;
      break;
    case 1: // Paper
      if (comChoice == 0) {
        win++;
        choices.textContent = "You 🖐️ 👊 Computer";
        resultText.textContent = "You Won";
      } else if (comChoice == 2) {
        loss++;
        choices.textContent = "You 🖐️ ✌️ Computer";
        resultText.textContent = "You Lost";
      } else {
        tie++;
        choices.textContent = "You 🖐️ 🖐️ Computer";
        resultText.textContent = "You Tied";
      }
      stats.textContent = `Wins: ${win} | Losses: ${loss} | Ties: ${tie}`;
      break;
    case 2: //Scissors
      if (comChoice == 0) {
        loss++;
        choices.textContent = "You ✌️ 👊 Computer";
        resultText.textContent = "You Lost";
      } else if (comChoice == 1) {
        win++;
        choices.textContent = "You ✌️ 🖐️ Computer";
        resultText.textContent = "You Won";
      } else {
        tie++;
        choices.textContent = "You ✌️ ✌️ Computer";
        resultText.textContent = "You Tied";
      }
      stats.textContent = `Wins: ${win} | Losses: ${loss} | Ties: ${tie}`;
      break;
    default:
  }
}
//resets the score
function Reset() {
  //simple check so the score result text wouldn't change if the score is all zeros
  if (win > 0 || loss > 0 || tie > 0) {
    resultText.textContent = "Score Reset! State Your Choice!";
    win = 0;
    loss = 0;
    tie = 0;
    stats.textContent = `Wins: ${win} | Losses: ${loss} | Ties: ${tie}`;
    choices.textContent = "";
  }
}
//toggles dark theme
function ThemeToggle() {
  //checks what the current theme is and displays the text on the button accordingly
  //while also toggling the theme during the check
  if (document.body.classList.toggle("dark-theme"))
    btnText.textContent = "Light Mode";
  else btnText.textContent = "Dark Mode";
}
