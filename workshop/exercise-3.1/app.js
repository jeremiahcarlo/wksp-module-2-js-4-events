const mainDiv = document.getElementById('main');

function turnGreen(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.add('green');
}

for (let i = 1; i <= 20; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);

    button.addEventListener('click', turnGreen);
}