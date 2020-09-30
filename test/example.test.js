// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('pass too numbers, return 1 because theGuess > theNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const theNumber = 5;
    const theGuess = 6;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(theNumber, theGuess);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('pass too numbers, return 0 because theGuess === theNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const theNumber = 5;
    const theGuess = 5;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(theNumber, theGuess);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('pass too numbers, return -1 because theGuess < theNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const theNumber = 5;
    const theGuess = 4;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(theNumber, theGuess);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


