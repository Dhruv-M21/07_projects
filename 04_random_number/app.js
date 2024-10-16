let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById('guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = userInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      clearGuess(guess);
      displayMessage(`Game over.Random number was ${randomNumber}`);
      endGame();
    } else {
      clearGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`Congrats,You Guessed it right,Random number is${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is high.`);
  }
}

function clearGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  if (remaining.textContent != 0) {
    remaining.innerHTML = `${11 - numGuess} `;
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = "<button id='newGame'>New Game</button>";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
