const body = document.querySelector('body');
const startButton = document.getElementById('start-button');
const timer = document.getElementById('timer');
const gameBoard = document.getElementById('game-board');
const notification = document.getElementById('notification');

const NUM_BUTTONS = Math.floor(Math.random() * 10) + 1;
const GAME_TIME = 5000; 

const clickedState = [];

function checkArray(arr) {
    return arr.every(function(item) {
        return item
    });
}

function endGame() {
    notification.style.height = '200px';
    notification.style.paddingTop = '74px';
    if (checkArray(clickedState)) {
        notification.innerText = "You Win!!!!";
        notification.style.background = 'green';
    } else {
        notification.innerText = "You Lose...";
        notification.style.background = 'red';
    }

    for (let i = 0; i < NUM_BUTTONS; i++) {
        document.getElementById(`btn-${i}`).removeEventListener('click', toggleColor);
    }
}

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');

    const id = buttonId.split('-')[1];

    clickedState[id] = !clickedState[id];
}

function startGame()  {
    startButton.remove();

    timer.innerText = GAME_TIME / 1000;
    let seconds = GAME_TIME - 1000;
    const countdown = setInterval(function() {
        if (seconds < 1) {
            clearInterval(countdown);
            endGame();
        }
        timer.innerText = seconds / 1000;
        seconds -= 1000;
    }, 1000);

    for (let i = 0; i < NUM_BUTTONS; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.id = `btn-${i}`;
        button.style.top = `${Math.random() * 575}px`;
        button.style.left = `${Math.random() * 775}px`;
        
        gameBoard.appendChild(button);

        clickedState.push(false);
    
        button.addEventListener('click', toggleColor);
    }

    const buttonStatus = setInterval(function() {
        if (checkArray(clickedState)) {
            timer.innerText = 0;
            endGame();
            clearInterval(buttonStatus);
        }
    }, 400);
}

