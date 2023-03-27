// Delegation
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

let adversaryInterval;
let gameOver = false;
const solution = randomNumber(1, 100);
console.log('solution', solution);

const containerEl = document.getElementById('container');
let adversarysInterval;

function adversaryGuess() {
    const availableNumberElements = [...document.querySelectorAll('.cell')]
        .filter((cellEl) => cellAvailable(cellEl))
        // .map((cellEl) => +cellEl.innerText)

    console.log('availableNumbers', availableNumberElements);

    const adversarysGuessEl = availableNumberElements[randomNumber(0, availableNumberElements.length - 1)]

    if (+adversarysGuessEl.innerText === solution) {
        adversarysGuessEl.classList.add('adversary-won');
        if (adversarysInterval) {
            window.clearInterval(adversarysInterval);
        }
        gameOver = true;
        return;
    }

    adversarysGuessEl.classList.add('adversary-wrong-guess');
}

function cellAvailable(cell) {
    return !cell.classList.contains('player-wrong-guess') &&
        !cell.classList.contains('player-wins') &&
        !cell.classList.contains('adversary-won') &&
        !cell.classList.contains('adversary-wrong-guess');
}

function createGrid() {


    const html = [...new Array(10).keys()].map((rowNumber) => {
        return [...new Array(10).keys()].map((colNumber) => {
            return `<div class="cell">${rowNumber * 10 + colNumber + 1}</div>`
        }).join('');
    }).join('<br>')

    containerEl.innerHTML = html;
}

createGrid();

delegate(containerEl, 'click', 'div.cell', function (event) {
    if (!cellAvailable(this) || gameOver) {
        return;
    }

    const number = +this.innerText;

    console.log('number', number);

    if (number === solution) {
        this.classList.add('player-wins');
        if (adversarysInterval) {
            window.clearInterval(adversarysInterval);
        }
        gameOver = true;
        return;
    }

    this.classList.add('player-wrong-guess');
});

adversarysInterval = window.setInterval(() => {
    adversaryGuess();
}, 5000);



/**
 * Form, regexp, localStorage
 */
const formEl = document.querySelector('#form');
const availableEl = formEl.elements['availableInCinemas'];
const nextEl = formEl.elements['next'];
const protagonistEl = formEl.elements['protagonist'];
const titleEl = formEl.elements['title'];

function initForm () {

}

function validateNext() {

}

function submitForm(event) {

}

initForm();
