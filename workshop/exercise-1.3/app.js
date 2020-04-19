// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector('body');
const result = document.getElementById('result');
const timer = document.getElementById('timer');

let hasWon = false;

const time = Math.floor((Math.random() * 5) + 1);

timer.innerText = time;

let totalTime = time - 1;
const counter = setInterval(function() {
    if (totalTime === 0) {
        clearInterval(counter);
    }
    timer.innerText = totalTime;
    totalTime = totalTime - 1;
}, 1000);

function clickEvent() {
    hasWon = true;
    result.innerText = "You Win!";
    body.removeEventListener('click', clickEvent);
}

setTimeout(function() {
    if (!hasWon) {
        result.innerText = 'You Lose!';
        body.removeEventListener('click', clickEvent);
    }
}, time * 1000);

window.addEventListener('click', clickEvent);
