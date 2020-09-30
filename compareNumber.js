
export function compareNumbers(theNumber, theGuess) {
    if (theNumber > theGuess){
        return -1;
    } else if (theNumber === theGuess) {
        return 0;
    } else {
        return 1;
    }
}