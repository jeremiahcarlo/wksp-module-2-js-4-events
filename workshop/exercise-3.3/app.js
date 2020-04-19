const mainDiv = document.getElementById('main');

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `btn-${i}`;
    button.style.top = `${Math.random() * 80}vh`;
    button.style.left = `${Math.random() * 80}vw`;
    mainDiv.appendChild(button);

    button.addEventListener('click', toggleColor);
}