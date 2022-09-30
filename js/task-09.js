

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const value = document.querySelector('.color');

const getRandomHexColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

button.addEventListener('click', changeHex);


function changeHex() {
  let hex = '#';

  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * getRandomHexColor.length)
    hex += getRandomHexColor[index];
  }

  value.textContent = hex;
  body.style.backgroundColor = hex;
}

