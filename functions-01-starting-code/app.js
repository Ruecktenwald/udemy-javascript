const startGameBtn = document.getElementById('start-game-btn');



const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;


const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

    if (
        selection !== 'ROCK' &&
        selection !== 'PAPER' &&
        selection !== 'SCISSORS'
    ) {
        alert('Invalid choice! We chose Rock for you!  ');
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return 'It is a draw!';
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return 'You Won!';
    }
    return 'You Lost!';
};



startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    let message = `${getWinner(computerSelection, playerSelection)}. You picked ${playerSelection}, computer picked ${computerSelection}`;
    alert(message);
    gameIsRunning = false;

});