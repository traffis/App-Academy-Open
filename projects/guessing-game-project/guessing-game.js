const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkGuess(num) {
    if (num > secretNumber) {
        console.log(`Too high. [${numAttempts} attempts remaining]`);
        return false;
    } else if (num < secretNumber) {
        console.log(`Too low. [${numAttempts} attempts remaining]`);
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", guess => {
        numAttempts--;

        if (checkGuess(Number(guess)) === true) {
            console.log('You win!');
            rl.close();
        } else if (numAttempts === 0){
            console.log('You lose.');
            rl.close();
        } else {
            askGuess();
        }
    });
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function askLimit() {
    rl.question("Enter a limit of attempts: ", attempts => {
        numAttempts = attempts;
        console.log(`You have ${numAttempts} attempts.`);
        askRange();
    });
}

function askRange() {
    rl.question("Enter a min number: ", min => {
        rl.question("Enter a max number: ", max => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`)
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();
        });
    });
}

let secretNumber = Infinity;
let numAttempts = askLimit();
