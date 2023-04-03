function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        bird.velocity -= 100;
    }
})

class Bird {
    image;
    constructor(context, x, y, width, height, velocity, acceleration) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.image = new Image();
        this.image.src = './assets/bird.png';
    }

    draw() {
        // context.fillStyle = 'gray';
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(dt) {
        this.velocity += this.acceleration * dt / 1000;
        this.y += this.velocity * dt / 1000;

        if (this.y < 0) {
            this.y = 0;
            gameOver = true;
        } else if(this.y >= canvas.height - bird.height) {
            this.y = canvas.height - bird.height;
            gameOver = true;
        }
    }
}

class Column {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        context.fillStyle = 'green';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(dt) {
        this.x -= 100 * dt / 1000;
    }
}

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

const bird = new Bird(context,  50, 150, 50, 50, 10, 150);
let columns = [];

const columnGap = 200;
const columnDistance = 200;

let gameOver = false;

function addColumns() {
    const topColumnHeight = random(75, 175);
    columns.push(...[
       new Column(context, canvas.width, 0, 40, topColumnHeight),
       new Column(context, canvas.width, topColumnHeight + columnGap, 40,
           canvas.height - topColumnHeight - columnGap)
    ]);
}

addColumns();

let previousTime = performance.now();
function cycle(now = performance.now()) {
    const dt = now - previousTime;
    previousTime = now;

    update(dt);
    draw();

    if (!gameOver) {
        requestAnimationFrame(cycle);
    }
}

function draw() {
    // console.log('draw');

    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // context.beginPath();
    // context.moveTo(200, 200);
    // context.lineTo(225, 175);
    // context.lineTo(250, 200);
    // context.lineTo(200, 200);
    // context.closePath();
    // context.stroke();
    //
    // context.clearRect(100, 100, 50, 50);

    bird.draw();

    columns.forEach((column) => {
        column.draw();
    });

    if (gameOver) {
        context.font = '40px Arial';
        context.fillStyle = 'orange';
        context.fillText('Game Over!', 200, 200);
    }
}

function update(dt) {
    bird.update(dt);

    columns.forEach((column) => {
        column.update(dt);
    });

    if (columns.some((column) => rectanglesCollide(bird, column))) {
        gameOver = true;
    }

    columns = columns.filter((column) =>
        column.x + column.width > 0
    )

    if (columns[columns.length - 1].x <= canvas.width - columnDistance) {
        addColumns();
    }
}

cycle();

function rectanglesCollide(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
}



