const textToColorEl = document.querySelector('#textToColor');
const changeButtonEl = document.getElementById('changeButton');

const colors = ['red', 'green', 'blue', 'black'];
changeButtonEl.addEventListener('click', (event) => {
    const currentColorIndex = colors
        .findIndex((color) => color === textToColorEl.style.color)
    const nextColor = (currentColorIndex === -1 || currentColorIndex + 1 >= colors.length)
        ? colors[0]
        : colors[currentColorIndex + 1]
    textToColorEl.style.color = nextColor;
})

// Propagation
const outerRectangleEl = document.getElementById('outerRectangle');
const innerRectangleEl = document.getElementById('innerRectangle');

outerRectangleEl.addEventListener('click', (event) => {
    console.log('red');
    event.stopPropagation();
});
innerRectangleEl.addEventListener('click', (event) => {
    console.log('green', event);
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    console.log('Document clicked');
})


// Defaults
const checkerEl = document.querySelector('#checker');
const allowCheckingEl = document.querySelector('#allowChecking');

checkerEl.addEventListener('click', (event) => {
    console.log(event);
    if (allowCheckingEl.value === 'no') {
        event.preventDefault();
    }
});


// Table
const tableSizeEl = document.querySelector('#tableSize');
const resultingTableEl = document.querySelector('.resultingTable > TABLE')

tableSizeEl.addEventListener('input', (event) => {
    let tableSize = +tableSizeEl.value;
    if (tableSize > 100) {
        tableSize = 100;
        tableSizeEl.value = 100;
    }
    console.log('tableSize', tableSize);

    resultingTableEl.innerHTML = '';

    for(let rowIndex = 1; rowIndex <= tableSize; rowIndex++) {
        const rowEl = document.createElement('tr');
        for (let columnIndex = 1; columnIndex <= tableSize; columnIndex++) {
            const columnEl = document.createElement('td');
            columnEl.innerText = `${rowIndex * columnIndex}`;
            rowEl.appendChild(columnEl);
        }
        // rowEl.addEventListener('click', (event) => {
        //     console.log('event', event);
        // });
        resultingTableEl.appendChild(rowEl);
    }
});

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

delegate(resultingTableEl, 'click', 'tr', function(event) {
   // console.log(this, event);
   const rowIndex = [...this.parentElement.children]
       .findIndex((child) => child === this);
   console.log(rowIndex);
});




