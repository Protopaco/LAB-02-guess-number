// import { boringGameSetup, gameSetup } from './gameSetup.js';
// import { toggleIndicator, toggleInput } from './toggles.js';

// // import functions and grab DOM elements
// const userDisplay = document.getElementById('display');
// const userInput = document.getElementById('user-input');
// const userButton = document.getElementById('button');
// const introButton = document.getElementById('introButton');
// const highIndicator = document.getElementById('tooHigh');
// const lowIndicatior = document.getElementById('tooLow');
// const guessIndicator = document.getElementById('guessIndicator');



// // initialize state
// let guessCount = 4;
// let theGuess = '';
// let gameState = 'setUp';
// let setupCounter = '0';
// let response = '';
// const theNumber = returnRandomNumber();
// console.log(theNumber);
// // set event listeners to update state and DOM

// userDisplay.addEventListener('click', () => {
//     gameState = gameSetup(userDisplay, introButton, highIndicator, lowIndicatior);
// })

// userButton.addEventListener('click', () => {
//     if (gameState === 'setUp'){
//         gameState = boringGameSetup(userDisplay);
//         userDisplay.textContent = 'please guess';
//         userButton.textContent = 'guess';
//         toggleInput(userInput);
//     } else if (gameState === 'inGame' && guessCount > -1) {

//         resetIndicators(response, highIndicator, lowIndicatior);
//         theGuess = inputUserGuess();
//         guessCount--;
//         response = compareNumbers(theNumber, theGuess);
//         gameState = displayResponse(response, highIndicator, lowIndicatior);
//     } else if (gameState === 'inGame' && guessCount === -1) {
//         console.log('lost');
//         toggleInput(userInput);
//     } else if (gameState === 'gameWon') {
//         toggleInput(userInput);
//         console.log('won');
//     }
// })

// function returnRandomNumber(){
//     return Math.floor(Math.random() * 20);
// }

// function inputUserGuess(){
//     if (userInput.value) {
//         let guess = userInput.value;
//         userInput.value = '';
//         return guess;
//     } else {
//         console.log('no input');
//     }
// }

// function compareNumbers(theNumber, theGuess) {
//     if (theNumber > theGuess){
//         return -1;
//     } else if (theNumber === theGuess) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// function displayResponse (response) {
//     console.log('displayResponse');
//     if (response === -1) {
//         toggleIndicator(lowIndicatior);
//         userDisplay.textContent = 'oooo, just a bit low!'
//         userButton.textContent = 'try higher';
//         return 'inGame';
//     } else if (response === 1) {
//         toggleIndicator(highIndicator);
//         userDisplay.textContent = 'too high!';
//         userButton.textContent = 'try lower';
//         return 'inGame';
//     } else {
//         return 'gameWon';
//     }
// }

// function resetIndicators(response, highIndicator, lowIndicatior){
//     if (response === 1){
//         toggleIndicator(highIndicator);
//     } else if (response === -1) {
//         toggleIndicator(lowIndicatior);
//     }
// }


const userDisplay = document.getElementById('display');
const guessDisplay = document.getElementById('guessDisplay');

const userInput = document.getElementById('user-input');
const userButton = document.getElementById('button');

let guessCount = 4;
let theNumber = returnRandomNumber();
let theGuess = '';
let gameState = 'unWon';
console.log(theNumber);


userButton.addEventListener('click', () => {
    guessDisplay.textContent = `you have ${guessCount} fucking guesses left`;

    theGuess = Number(userInput.value);
    let response = compareNumbers(theNumber, theGuess);
    userInput.value = '';
    guessCount--;
    console.log(guessCount);
    gameState = userResponse(userDisplay, response);
    if(gameState === 'won') {
        userInput.style.visibility = 'hidden';
        userButton.style.visibility = 'hidden';
        guessDisplay.style.visibility = 'hidden';
        userDisplay.textContent = 'you fucking won';
    } else if (guessCount === 0) {
        userInput.style.visibility = 'hidden';
        userButton.style.visibility = 'hidden';
        guessDisplay.style.visibility = 'hidden';

        userDisplay.textContent = 'you fucking lost';
    }
})

function returnRandomNumber(){
    return Math.floor(Math.random() * 20);
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