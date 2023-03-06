// Array functions
let customers = [
    {
        name: 'Ábrahám Erik',
        time: 1677934024666,
        cost: 3900,
        products: [
            { name: 'Greek salad', type: 'Food' }
        ]
    },
    {
        name: 'Bodri Balázs',
        time: 1677764861000,
        cost: 13500,
        products: [
            { name: 'Bottled water', type: 'Drink' },
            { name: 'Garlic cream-soup', type: 'Food' },
            { name: 'Wine', type: 'Drink' },
            { name: 'Beef stew', type: 'Food' }
        ]
    },
    {
        name: 'Bozsoky Milán Ferenc',
        time: 1675316861000,
        cost: 2100,
        products: [
            { name: 'Beer', type: 'Drink' },
            { name: 'Beer', type: 'Drink' },
            { name: 'Beer', type: 'Drink' }
        ]
    },
    {
        name: 'Farkas Csobán István',
        time: 1677764861000,
        cost: 5200,
        products: [
            { name: 'Székelygoulash', type: 'Food' }
        ]
    },
    {
        name: 'Frigyes Kristóf',
        time: 1676008061000,
        cost: 16000,
        products: [
            { name: 'Bottled water', type: 'Drink' },
            { name: 'Paella Valenciana', type: 'Food' },
            { name: 'Sangria', type: 'Drink' }
        ]
    },
    {
        name: 'Gortva István',
        time: 1676267261000,
        cost: 15500,
        products: [
            { name: 'Gazpacho', type: 'Food' },
            { name: 'Pike-pearch fried in breadcrumbs', type: 'Food' },
            { name: 'Sangria', type: 'Drink' }
        ]
    }
]

function spentAtLeast(array, threshold) {
    return array.filter((a) => a.cost >= threshold);
}

function customerNames(customers) {
    return customers.map((b) => b.name);
}

function splitCustomerNames(tomb) {
    return tomb.flatMap((person) => person.name.split(' '))
}

function uniqueSplitCustomerNames(c) {
    return new Set(splitCustomerNames(c));
}

function everyoneSpentAtLeast(persons, threshold) {
    return persons.every((person) => person.cost >= threshold);
}

function someoneSpentAtLeast(persons, threshold) {
    return persons.some((person) => person.cost >= threshold);
}

function namesThatSpentAtLeast(persons, threshold) {
    return persons
        .filter((p) => p.cost >= threshold)
        .map((p) => p.name)
}

function cummulativeCost(persons) {
    return persons
        .reduce(
            (partialResult, person) =>  partialResult + person.cost,
            0
        );
}

function cummulativeCostForeach(persons) {
    let result = 0;
    persons.forEach((person) => {
        result += person.cost;
    })
    return result;
}

console.log(
    spentAtLeast(customers, 10000),
    spentAtLeast(customers, 100000),
    customerNames(customers),
    splitCustomerNames(customers),
    uniqueSplitCustomerNames(customers),
    everyoneSpentAtLeast(customers, 1000),
    everyoneSpentAtLeast(customers, 5000),
    someoneSpentAtLeast(customers, 5000),
    someoneSpentAtLeast(customers, 50000),
    namesThatSpentAtLeast(customers, 5000),
    cummulativeCost(customers),
    cummulativeCostForeach(customers)
)





// DOM

const button = document.querySelector('#numberSubmitButton');
const input = document.querySelector('#numberInput');
const resultDiv = document.querySelector('#numberResult');
console.log(button, input)

button.addEventListener('click', (event) => {
    console.log('clicky', event, input.value);

    resultDiv.innerHTML = `
        <div>
            <p>
                ${Math.sqrt(+input.value)}
            </p>
        </div>
    `;
})
















