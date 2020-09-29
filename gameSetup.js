import {toggleIndicator} from './toggles.js';

const highIndicator = document.getElementById('tooHigh');
const lowIndicatior = document.getElementById('tooLow');


export function gameSetup(userDisplay, userButton) {
    let counter = 0;

    userDisplay.textContent = 'welcome to my game';
    userButton.textContent = 'thank you';
    counter++;

    userButton.addEventListener('click', () => {
        if (counter === 1) {
            userDisplay.textContent = 'i will think of a number \r\n';
            userDisplay.textContent += 'between 0 and 20';
            userButton.textContent = 'wow';
            counter ++
        } else if (counter === 2) {
            userDisplay.textContent = `you will have four tries \nto guess it`;
            userButton.textContent = 'ok';
            counter++;
        } else if (counter === 3) {
            toggleIndicator(highIndicator);
            userDisplay.textContent = 'I will let you know if the guess is too high';
            userButton.textContent = 'sounds good';
            counter++;
        } else if (counter === 4) {
            toggleIndicator(highIndicator);
            toggleIndicator(lowIndicatior);
            userDisplay.textContent = "or too low";
            userButton.textContent = 'cool effect';
            counter++;
        } else if (counter === 5) {
            toggleIndicator(lowIndicatior);
            userDisplay.textContent = "thanks";
            userButton.textContent = "of course";
            counter++;
        } else if (counter === 6) {
            userDisplay.textContent = 'ready to play?';
            userButton.textContent = 'yes!';
            counter++;
        } else if (counter === 7) {
            userDisplay.textContent = "enter your guess below";
            userButton.textConent = 'guess';
        }


    })
}
 