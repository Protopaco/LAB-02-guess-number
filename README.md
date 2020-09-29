# LAB-02-guess-number

September 29, 2020

Objective:

1) Create a game where program will randomly generate a number
1) the user will have four trys to guess that number
1) after each guess the program will tell the user where their guess was 'too high' or 'too low'
1) if they guess correctly or use up all of their guesses
    1) disable further input
    1) display a win or lose message


HTML & CSS:

1) Layout
1) Explain rules to user
1) input of type number for guesses
1) a button to click to submit the guess
1) display the number of tries remaining
1) display of guess too high or too low
1) display of lose and win result

JavaScript:

1) returnRandomNumber()
    * returns a randomNumber between 0-20
1) compareNumbers(theGuess, theNumber)
    * returns 0 if identical
    * returns 1 if guess number is too high
    * returns -1 if guess number is too low
    * create test of this function

1) resetGame()
    * allows user to play again