// import {toggleIndicator} from './toggles.js';


// export function gameSetup(userDisplay, userButton, highIndicator, lowIndicatior) {
//     let counter = 0;
//     console.log(counter);
//     userDisplay.textContent = 'welcome';
//     userButton.textContent = 'thank you';
//     userButton.addEventListener('click', () => {
//         counter++;
//         if (counter === 1) {
//             userDisplay.textContent = 'i will think of a number \r\n';
//             userDisplay.textContent += 'between 0 and 20';
//             userButton.textContent = 'wow';

//         } else if (counter === 2) {
//             userDisplay.textContent = `you will have four tries \nto guess it`;
//             userButton.textContent = 'ok';

//         } else if (counter === 3) {
//             toggleIndicator(highIndicator);
//             userDisplay.textContent = 'I will let you know if the guess is too high';
//             userButton.textContent = 'sounds good';

//         } else if (counter === 4) {
//             toggleIndicator(highIndicator);
//             toggleIndicator(lowIndicatior);
//             userDisplay.textContent = "or too low";
//             userButton.textContent = 'cool effect';

//         } else if (counter === 5) {
//             toggleIndicator(lowIndicatior);
//             userDisplay.textContent = "thanks";
//             userButton.textContent = "of course";

//         } else if (counter === 6) {
//             userDisplay.textContent = 'ready to play?';
//             userButton.textContent = 'yes!';

//         } else if (counter === 7) {
//             userDisplay.textContent = "enter your guess below";
//             userButton.textContent = 'guess';


//         } else if ( counter === 8){
//             console.log('what?');

//             return 'inGame';
//         }


//     })

// }

// export function boringGameSetup (userDisplay) {
//     userDisplay.textContent = 'guess a number between 0-20 \r\n';
//     userDisplay.textContent += 'you have four tries to guess it \r\n';
//     userDisplay.textContent += 'I will let you know if you are over or under';
//     return 'inGame';

// }
 