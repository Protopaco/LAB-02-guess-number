//import { gameSetup } from './gameSetup.js';
import { toggleIndicator, toggleInput } from './toggles.js';

// import functions and grab DOM elements
const userDisplay = document.getElementById('display');
const userInput = document.getElementById('user-input');
const userButton = document.getElementById('button');
const highIndicator = document.getElementById('tooHigh');
const lowIndicatior = document.getElementById('tooLow');
const guessIndicator = document.getElementById('guessIndicator');



// initialize state
let guessCount = 4;
let theGuess = '';
let gameState = 'inGame';
let setupCounter = '0';
let response = '';
const theNumber = returnRandomNumber();
console.log(theNumber);
// set event listeners to update state and DOM

userButton.addEventListener('click', () => {
    if (gameState === 'setUp'){

    } else if (gameState === 'inGame' && guessCount > -1) {
        toggleInput(userInput);
        guessIndicator.textContent ='guesses: ' +guessCount;
        resetIndicators(response, highIndicator, lowIndicatior);
        theGuess = inputUserGuess();
        guessCount--;
        response = compareNumbers(theNumber, theGuess);
        gameState = displayResponse(response, highIndicator, lowIndicatior);
    } else if (gameState === 'inGame' && guessCount === -1) {
        console.log('lost');
        toggleInput(userInput);
    } else if (gameState === 'gameWon') {
        toggleInput(userInput);
        console.log('won');
    }
})

function returnRandomNumber(){
    return Math.floor(Math.random() * 20);
}

function inputUserGuess(){
    if (userInput.value) {
        let guess = userInput.value;
        userInput.value = '';
        return guess;
    } else {
        console.log('no input');
    }
}

function compareNumbers(theNumber, theGuess) {
    if (theNumber > theGuess){
        return -1;
    } else if (theNumber === theGuess) {
        return 0;
    } else {
        return 1;
    }
}

function displayResponse (response) {
    console.log('displayResponse');
    if (response === -1) {
        toggleIndicator(lowIndicatior);
        userDisplay.textContent = 'oooo, just a bit low!'
        userButton.textContent = 'try higher';
        return 'inGame';
    } else if (response === 1) {
        toggleIndicator(highIndicator);
        userDisplay.textContent = 'too high!';
        userButton.textContent = 'try lower';
        return 'inGame';
    } else {
        return 'gameWon';
    }
}

function resetIndicators(response, highIndicator, lowIndicatior){
    if (response === 1){
        toggleIndicator(highIndicator);
    } else if (response === -1) {
        toggleIndicator(lowIndicatior);
    }
}

