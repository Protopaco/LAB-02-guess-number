
export function compareNumbers(correctNumber, theGuess) {
    if (correctNumber > theGuess){
        return -1;
    } else if (correctNumber === theGuess) {
        return 0;
    } else {
        return 1;
    }
}