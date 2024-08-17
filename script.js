const pencil = document.getElementById('pencil');
const gameArea = document.getElementById('game-area');


let transitionDuration = 4;
const minDuration = 0.1;

function setRandomPoint() {
    
    const maxX = gameArea.clientWidth - pencil.clientWidth;
    const maxY = gameArea.clientHeight - pencil.clientHeight;

    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    pencil.style.transition = `left ${transitionDuration}s ease, top ${transitionDuration}s ease`;
    pencil.style.left = `${randomX}px`;
    pencil.style.top = `${randomY}px`;

    
    transitionDuration = Math.max(minDuration, transitionDuration * 0.75);
}

window.onload = setRandomPoint;


pencil.addEventListener('mouseenter', setRandomPoint);