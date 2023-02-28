const name = '\'Barna\''
console.log('Hello ' + name);

console.log(`Hello ${name}`)

console.log('öt', '5', 5, true, false, [0, 4, 9], { name: 'Barna', age: 31})

console.log(3 + 5, 5 - 2, 3 * 2, 3 ** 2, 6 / 2, 3 % 2);

switch(name) {
    case 'Barna':
    case 'Ákos':
        console.log('aB');
        break;
    default:
        console.log('else');
}

const bigTomb = [-2, 5, 10, -11, 2, 1, 30]
console.log('bigTomb', bigTomb);
function filterPositiveNumbers(tomb) {
    const results = [];
    for(let i = 0; i < tomb.length; i++) {
        if (tomb[i] > 0) {
            results.push(tomb[i]);
        }
    }
    return results;
}

console.log(filterPositiveNumbers(bigTomb));

function filterPositiveNumbersForEach(tomb) {
    const results = [];
    for(const element of tomb) {
        if (element > 0) {
            results.push(element);
        }
    }
    return results;
}

console.log(filterPositiveNumbersForEach(bigTomb));

function filterFn(tomb, fn) {
    const results = [];
    for(const element of tomb) {
        if (fn(element)) {
            results.push(element);
        }
    }
    return results;
}

// Find negative
/*
Multi
line
comment
 */
console.log(filterFn(
    bigTomb,
    function (el) {
        return el < 0;
    }
));

console.log(filterFn(
    bigTomb,
    (el) => {
        el *= 2;
        return el < 0;
    }
));

console.log(filterFn(
    bigTomb,
    (el) => el < 0
));

console.log(
    bigTomb.filter((el) => el < 0)
)

console.log(
    bigTomb.map((number) => number * -1)
)

console.log(
    bigTomb.flatMap((num) => [num, num ** 2])
)
