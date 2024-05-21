let playerscore = 0;
let computerscore = 0;

function game(computerchoice, playerchoice) {
    if (playerchoice === computerchoice) {
        return "Tie round";
    } else if ((playerchoice === "rock" && computerchoice === "scissors") || 
               (playerchoice === "paper" && computerchoice === "rock") || 
               (playerchoice === "scissors" && computerchoice === "paper")) {
        playerscore++;
        return "Player won the round";
    } else {
        computerscore++;
        return "Computer won the round";
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function showButtons() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.style.display = 'inline-block');
}

function hideButtons() {
    const buttons = document.querySelectorAll('.buttons button:not(#resetbtn)');
    buttons.forEach(button => button.style.display = 'none');
    document.querySelector("#resetbtn").style.display = 'inline-block';
}

function scoreUpdater(result) {
    const playerScoreElem = document.querySelector('.playerscore h2');
    playerScoreElem.textContent = `Player score: ${playerscore}`;
    const computerScoreElem = document.querySelector('.computerscore h2');
    computerScoreElem.textContent = `Computer score: ${computerscore}`;
    const roundScoreElem = document.querySelector('.round h3');
    roundScoreElem.textContent = `Round winner: ${result}`;

    if (playerscore === 5) {
        roundScoreElem.textContent = "The player won the game!";
        hideButtons();
    } else if (computerscore === 5) {
        roundScoreElem.textContent = "The computer won the game!";
        hideButtons();
    }
}

function resetGame() {
    playerscore = 0;
    computerscore = 0;
    scoreUpdater("Game reset, start a new game");
    showButtons();
    document.querySelector("#resetbtn").style.display = 'none';
}

const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => {
    const playerchoice = "rock";
    const computerchoice = getComputerChoice();
    const result = game(computerchoice, playerchoice);
    scoreUpdater(result);
});

const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener("click", () => {
    const playerchoice = "paper";
    const computerchoice = getComputerChoice();
    const result = game(computerchoice, playerchoice);
    scoreUpdater(result);
});

const scissorsbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click", () => {
    const playerchoice = "scissors";
    const computerchoice = getComputerChoice();
    const result = game(computerchoice, playerchoice);
    scoreUpdater(result);
});

const resetbtn = document.querySelector("#resetbtn");
resetbtn.addEventListener("click", resetGame);
