import {compareNumbers} from './compareNumbers.js';

const userDisplay = document.getElementById('display');
const guessDisplay = document.getElementById('guessDisplay');
const userInput = document.getElementById('user-input');
const userButton = document.getElementById('button');
const resetButton = document.getElementById('resetButton');
const guessForMeButton = document.getElementById('guessForMe');

let guessCount = 4;
let theNumber = returnRandomNumber();
let theGuess = '';
let gameState = 'unWon';
let response = null;
console.log(theNumber);


userButton.addEventListener('click', () => {
    theGuess = Number(userInput.value);
    gameProcess(theGuess);
})

guessForMeButton.addEventListener('click', () => {
    theGuess = returnRandomNumber();
    userInput.value = theGuess.toString();
    gameProcess(theGuess);
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
    guessCount = 4;
    theNumber = returnRandomNumber();
    userInput.value = '';
    userInput.style.visibility = 'visible';
    userButton.style.visibility = 'visible';
    resetButton.style.visibility = 'hidden';
    guessDisplay.style.visibility = 'visible';
    guessForMeButton.style.visibility = 'visible';
    userDisplay.textContent = '';
    guessDisplay.textContent = `you have ${guessCount} guesses left`;

}

function returnRandomNumber(){
    return Math.floor(Math.random() * 20);
}


function userResponse(userDisplay, response) {
    if (response === -1) {
        userDisplay.textContent = 'too low, guess higher';
        return 'unWon';
    } else if (response === 1) {
        userDisplay.textContent = 'too high, guess lower';
        return 'unWon';
    } else {
        return 'won';
    }
}

function gameProcess () {
    response = compareNumbers(theNumber, theGuess);
    guessCount--;
    guessDisplay.textContent = `you have ${guessCount} guesses left`;

    gameState = userResponse(userDisplay, response);
    
    if(gameState === 'won') {
        userInput.style.visibility = 'hidden';
        userButton.style.visibility = 'hidden';
        guessDisplay.style.visibility = 'hidden';
        userDisplay.textContent = 'you won';
        resetButton.style.visibility = 'visible';
        guessForMeButton.style.visibility = 'hidden';


    } else if (guessCount === 0) {
        userInput.style.visibility = 'hidden';
        userButton.style.visibility = 'hidden';
        guessDisplay.style.visibility = 'hidden';
        userDisplay.textContent = 'you lost';
        resetButton.style.visibility = 'visible';
        guessForMeButton.style.visibility = 'hidden';


    }
}