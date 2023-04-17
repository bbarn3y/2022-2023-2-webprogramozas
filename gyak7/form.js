// Form

const formEl = document.querySelector('#form');
const availableInputEl = document.querySelector('#availableInCinemas');
const nextInputEl = document.querySelector('#next');
const protagonistInputEl = document.querySelector('#protagonist');
const titleInputEl = document.querySelector('#title');

let state;
const stateStorageKey = 'state';

[availableInputEl, nextInputEl].forEach((inputEl) => {
    inputEl.addEventListener('input', (event) => {
        validate();
    })
})

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if ([...formEl.elements].every((element) => element.validity.valid)) {
        save();
    }
});

function init() {
    const stateString = localStorage.getItem(stateStorageKey);
    if (stateString) {
        const state = JSON.parse(stateString);
        availableInputEl.value = state.available;
        nextInputEl.value = state.next;
        protagonistInputEl.value = state.protagonist;
        titleInputEl.value = state.title;
    }

    validate();
}

function save() {
    const state = {
        available: availableInputEl.value,
        next: nextInputEl.value,
        protagonist: protagonistInputEl.value,
        title: titleInputEl.value
    }
    localStorage.setItem(stateStorageKey, JSON.stringify(state));
}

function validate() {
    if (availableInputEl.value === 'yes' && !nextInputEl.value) {
        nextInputEl.setCustomValidity('Ha játszák moziban, akkor töltsd ki a dátumot!');
    } else {
        nextInputEl.setCustomValidity('');
    }
}

init();
validate();

