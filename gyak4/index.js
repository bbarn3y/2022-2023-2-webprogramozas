// ========= Utility functions =========
function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ========= Selected elements =========
const inputGuess = document.querySelector("#inputGuess");
const form = document.querySelector("form");
const tableGuesses = document.querySelector("#guesses");
const divTheWord = document.querySelector("details > div");
const spanError = document.querySelector("#error");
const btnGuess = document.querySelector("form > button");
const divEndOfGame = document.querySelector("#end-of-game");
const btnRestart = document.querySelector("#restart");

// ========= Solution =========

const randomIndex = random(0, wordList.length - 1);
const word = wordList[randomIndex];

divTheWord.innerHTML = word;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  spanError.innerHTML = '';

  if (inputGuess.value.length !== 5) {
    spanError.innerHTML = 'The length of the word is not 5!';
    return;
  }

  if (!wordList.includes(inputGuess.value)) {
    spanError.innerHTML = 'The word is not considered acceptable!'
  }

  inputGuess.value.split('').reduce((partialResult, nextLetter, currentIndex) => {

  })
})

inputGuess.select();
