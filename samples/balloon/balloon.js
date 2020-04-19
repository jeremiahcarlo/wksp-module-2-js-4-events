
const balloon = document.getElementById('balloon');

let balloonSize = 12;
balloon.style.fontSize = balloon + 'px'; // `${baloonSize}px`

const MIN_SIZE = 6;  
const MAX_SIZE = 100;
const INCREMENT = 2;
const MAX_EXPLOSION_SIZE = 1000;

function handleKeyDown(event) {
// if "arrow up'
if (event.key === 'ArrowUp') {
//balloon bigger
    balloonSize += INCREMENT;
    balloon.style.fontSize = balloon + 'px';
// if balloon is bigger than x 
if (balloonSize > MAX_SIZE) {
// remove event listener
document.removeEventListener('keydown', handleKeyDown); 
// remove balloon / add in explosion
balloon.innerText = '💥';
// explosion grows incrementally
const explosion = setInterval(function() {
    balloonSize += 55;
    balloonSize.style.fontSize = balloon + 'px'; 
// if explosion size is y 
if (balloonSize > MAX_EXPLOSION_SIZE) {
//clear the interval - stop growing
clearInterval(explosion);
// fadeout 
    balloon.style.opacity = 0;
    }
    }, 20);
}    
} else if (event.key === 'ArrowDown') {
// if 'arrow down'
// if balloon is z bigger than Z
    if(balloonSize > MIN_SIZE) {
    // make balloon smaller 
    balloonSize -= INCREMENT;
    balloon.style.fontSize = balloon + 'px'; // `${baloonSize}px`
    }
    }
}
// event listener that listen for 'keydown'
balloon.addEventListener('keydown', handleKeyDown); 

// *add evenListeners at the end of the code*
