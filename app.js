const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const drawsDisplay = document.getElementById("draws");

let userChoice;
let computerChoice;

const score = {
    wins: 0,
    losses: 0,
    draws: 0,
};

function makeChoice(choice) {
    userChoice = choice;
    displayUserChoice();
    generateComputerChoice();
    getResult();
}

function displayUserChoice() {
    userChoiceDisplay.innerHTML = getEmoji(userChoice);
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    computerChoiceDisplay.innerHTML = getEmoji(computerChoice);
}

function getResult() {
    let result;

    if (computerChoice === userChoice) {
        result = "It's a draw!";
        score.draws++;
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")
    ) {
        result = "You lost the game.";
        score.losses++;
    } else {
        result = "You won the game!";
        score.wins++;
    }

    updateScoreDisplay();
    resultDisplay.innerHTML = result;
}

function updateScoreDisplay() {
    winsDisplay.innerHTML = score.wins;
    lossesDisplay.innerHTML = score.losses;
    drawsDisplay.innerHTML = score.draws;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
    updateScoreDisplay();
    computerChoiceDisplay.innerHTML = "";
    userChoiceDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
}

function getEmoji(choice) {
    switch (choice) {
        case "rock":
            return "✊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
        default:
            return choice;
    }
}

updateScoreDisplay();
