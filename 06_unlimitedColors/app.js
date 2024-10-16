const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

function generateColor() {
  // const randomColor = Math.floor(Math.random() * 16);
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}

let intervalId;
const startchangeColor = () => {
  if (!intervalId) {
    intervalId = setInterval(backgroundColor, 1000);
  }

  function backgroundColor() {
    body.style.backgroundColor = generateColor();
  }
};

const stopChangeColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

stop.addEventListener('click', stopChangeColor);

start.addEventListener('click', startchangeColor);
