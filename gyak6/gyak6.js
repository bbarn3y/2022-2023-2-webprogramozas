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
    }
}

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

const bird = new Bird(context,  50, 150, 50, 50, 10, 150);

let gameOver = false;

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
}

function update(dt) {
    bird.update(dt);
}

cycle();



