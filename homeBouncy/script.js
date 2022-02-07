let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let friction = 1;
let elasticity = 100;

class Object {
    constructor(_m, _v, _a, _volume, _density, _x, _y, _dir, _f, _w, _h, _color) {
        this.m = _m;
        this.v = _v;
        this.a = _a;
        this.volume = _volume;
        this.density = _density;
        this.x = canvas.width / _x;
        this.y = canvas.height / _y;
        this.w = _v;
        this.h = _h;
        this.dir = _dir;
        this.color = _color;
    }
    updateDisplay(a) {
        ctx.fillStyle = this.color;
        if (a == 1) {
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
        if (a == 0) {
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}

let collisionDetect = (rect1, rect2) => {
    let collision = 0;
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y && (rect1.v * rect1.dir) * (rect2.v * rect2.dir) > 0) {
        collision = 1;
    } else if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y && (rect1.v * rect1.dir) * (rect2.v * rect2.dir) < 0) {
        collision = 2;
    } else {
        collision = 0;
    }
    return collision;
}

let objects = [new Object(1),
    new Object(2)
]
let widthScale = (window.innerWidth / window.innerHeight);
var col1 = ctx.createLinearGradient(0, 45, 200, canvas.width);
col1.addColorStop(0, "red");
col1.addColorStop(1, "white");
var col2 = ctx.createLinearGradient(canvas.width, 45, 200, 0);
col2.addColorStop(0, "white");
col2.addColorStop(1, "purple");
objects[0].v = 300;
objects[1].v = 500;
objects[0].h = 100;
objects[0].w = 100;
objects[1].h = 100;
objects[1].w = 100;
objects[0].y = canvas.height / 2;
objects[0].x = 0;
objects[0].dir = 1;
objects[1].y = canvas.height / 2;
objects[1].x = canvas.width - objects[1].w;
objects[1].dir = -1;
objects[0].color = col1;
objects[1].color = col2;
let timeLoop = () => {
    if (objects[0].x < 0) {
        objects[0].x = 0;
        objects[0].dir = 1;
    }
    if (objects[1].x > canvas.width - objects[1].w) {
        objects[1].x = canvas.width - objects[1].w;
        objects[1].dir = -1;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, (canvas.height / 2) + objects[1].h, canvas.width, 10)

    if (collisionDetect(objects[0], objects[1]) == 1) {
        if ((objects[0].v * objects[0].dir) < 0 && (objects[1].v * objects[1].dir) < 0) {
            objects[1].dir = -1;
            objects[0].dir = -1;
            objects[0].v = (Math.abs(objects[0].v - objects[1].v) / 100) * (elasticity);
            objects[1].v = (Math.abs(objects[0].v - objects[1].v) / 100) * (elasticity);
            objects[0].v -= (elasticity)
            objects[1].v -= (elasticity)
        }
        if ((objects[0].v * objects[0].dir) > 0 && (objects[1].v * objects[1].dir) > 0) {
            objects[1].dir = 1;
            objects[0].dir = 1;
            objects[0].v = (Math.abs(objects[0].v - objects[1].v) / 100) * (elasticity);
            objects[1].v = (Math.abs(objects[0].v - objects[1].v) / 100) * (elasticity);
            objects[1].v -= (elasticity)
            objects[0].v -= (elasticity)
        }
    } else if (collisionDetect(objects[0], objects[1]) == 0) {

    } else {
        objects[0].v = (Math.abs(objects[0].v - objects[1].v) / 100) * (elasticity);
        objects[1].v = (Math.abs(objects[0].v - objects[1].v) / 100) * (elasticity);
        objects[0].dir = -1;
        objects[1].dir = 1;
    }
    if (objects[0].v < 0) {
        objects[0].v = 0;
    }
    if (objects[1].v < 0) {
        objects[1].v = 0;
    }
    objects[0].x += (objects[0].dir * (objects[0].v)) / 100;
    objects[1].x += (objects[1].dir * (objects[1].v)) / 100;
    // objects[0].v -= 300 * (friction / 100);
    // objects[1].v -= 300 * (friction / 100);
    objects[0].updateDisplay(1);
    objects[1].updateDisplay(0);
    requestAnimationFrame(timeLoop)
}
timeLoop()