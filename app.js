import { gameSetup } from './gameSetup.js';

// import functions and grab DOM elements
const userDisplay = document.getElementById('display');
const userInput = document.getElementById('user-input');
const userButton = document.getElementById('button');


// initialize state

let gameState = 'setUp';
const theNumber = returnRandomNumber();
console.log(theNumber);
// set event listeners to update state and DOM

userButton.addEventListener('click', () => {
    if (gameState === 'setUp'){
        gameState = gameSetup(userDisplay, userButton);
    }
    //const theGuess = returnUserGuess();
})

function returnRandomNumber(){
    return Math.floor(Math.random() * 20);
}


