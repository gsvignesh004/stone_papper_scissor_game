const play = document.getElementById("play"); // It get the element button play
const startGame = document.getElementById("start-game"); // It get the button inside the popup
const overlay = document.getElementById("overlay"); //It is used to set Overlay
const popup = document.getElementById("game-start-popup"); //It is used to set the Popup game start indication
const alertPlaceholder = document.getElementById('alertWhenGameStart');
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");
const stone = document.querySelectorAll(".stone");
const papper = document.querySelectorAll(".papper");
const scissor = document.querySelectorAll(".scissor");
const userSelect = document.createElement("h1");
const computerSelect = document.createElement("h1");
let computerSelectChoice;

let userScoreEle = document.getElementById("user-score");
let computerScoreEle = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

userSelect.className = "bg-primary text-center";
computerSelect.className = "bg-primary text-center"


let start = 0;


//Functin for Popup game indication
play.addEventListener("click", (event) => {
  if (start == 0) {
    overlay.classList.add("overlay");
    popup.style.setProperty("display", "block", "important");
    console.log(popup);
    start++;
  } else if (start == 1) {
    appendAlert('The Game is alread Start', 'danger');
    start++;
  } else {

  }
});

//Function for game start and close popup

startGame.addEventListener("click", (event) => {
  overlay.classList.remove("overlay");
  popup.style.setProperty("display", "none", "important");
})


const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

function computerSelection(choice) {
  // choice = 2;
  // console.log(choice);
  if (choice == 1) {
    computerSelect.innerText = "Stone";
    computerChoice.appendChild(computerSelect);
    winCheck(computerSelect.innerText, userSelect.innerText);
  } else if (choice == 2) {
    computerSelect.innerText = "Papper";
    computerChoice.appendChild(computerSelect);
    winCheck(computerSelect.innerText, userSelect.innerText);
  } else {
    computerSelect.innerText = "Scissor";
    computerChoice.appendChild(computerSelect);
    winCheck(computerSelect.innerText, userSelect.innerText);
  }

}

stone[0].addEventListener("click", (event) => {

  if (start) {
    userSelect.innerText = "Stone";
    userChoice.appendChild(userSelect);
    computerSelectChoice = Math.floor(Math.random() * 3) + 1;
    computerSelection(computerSelectChoice);
  } else {
    alert("Pres the play button to Start the game");
  }

});

papper[0].addEventListener("click", (event) => {

  // console.log("clicked");
  if (start) {

    userSelect.innerText = "Papper";
    userChoice.appendChild(userSelect);
    computerSelectChoice = Math.floor(Math.random() * 3) + 1;
    computerSelection(computerSelectChoice);
  } else {
    alert("Pres the play button to Start the game");
  }

});

scissor[0].addEventListener("click", (event) => {

  if (start) {

    userSelect.innerText = "Scissor";
    userChoice.appendChild(userSelect);
    computerSelectChoice = Math.floor(Math.random() * 3) + 1;
    computerSelection(computerSelectChoice);
  } else {
    alert("Pres the play button to Start the game");
  }

});

function winCheck(computerChoice, userChoice) {

  if ((userChoice === "Stone" && computerChoice === "Scissor") ||
    (userChoice === "Papper" && computerChoice === "Stone") ||
    (userChoice === "Scissor" && computerChoice === "Papper")
) {
    userScore++;
    scoreDisplay();
    setTimeout(() => {
      alert("Computer Win");
    }, 1000);
  } else if ((computerChoice === "Stone" && userChoice === "Scissor") ||
    (computerChoice === "Papper" && userChoice === "Stone") ||
    (computerChoice === "Scissor" && userChoice === "Papper")) {
    setTimeout(() => {
      alert("Computer Win");
    }, 900);
    computerScore++;
    scoreDisplay();
  }
  else {
    alert("Draw");
  }

}

function scoreDisplay() {
  userScoreEle.innerText = userScore;
  computerScoreEle.innerText = computerScore;
}

// Condition for wincheck and change the design