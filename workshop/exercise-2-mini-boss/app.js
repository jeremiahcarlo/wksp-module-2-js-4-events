
setInterval (() => {
  let date = new Date();
  let hour = date.toLocaleTimeString();
  let time = document.querySelector("#current-time");
  time.innerHTML = hour;
}, 1000);

let counterStart = false;
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const startTimer = () => {
  counterStart = true; 
  startButton.removeEventListener("click", startTimer);
};

const stopTimer = () => {
  counterStart = false;
  stopButton.removeEventListener("click", startTimer); 
};
//timer
let timer = 0;
let count = setInterval(() => {
  if (counterStart == true) {
    let countDown = document.querySelector("#countdown");
    countDown.innerHTML = timer;
    timer++;
  }
}, 1000);

let startButton2 = document.querySelector("#startTimer"); 

const startTimer2 = () => {
  let number = document.querySelector("#inputValue").value; 
  let count2 = setInterval(() => {
    let countDown2 = document.querySelector("#countdown2");
    countDown2.innerHTML = number;
    number--;

    if (number < 0) {
      console.log(number);
      document.querySelector("#inputvalue").value = null; 
      clearInterval(count2);
    }
  }, 1000);
};

startButton2.addEventListener("click", startTimer2);
startButton.addEventListener("click", startTimer); 
stopButton.addEventListener("click", stopTimer); 


