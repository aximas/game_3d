var PressBack = 0;
var PressForward = 0;
var PressLeft = 0;
var PressRight = 0;
var PressUp = 0;
var onGround = 0;

document.addEventListener('keydown', (event) => {
    if (event.key == "a") {
        PressLeft = 1;
    }
    if (event.key == "w") {
        PressForward = 1;
    }
    if (event.key == "d") {
        PressRight = 1;
    }
    if (event.key == "s") {
        PressBack = 1;
    }
    if (event.keyCode == 32 && onGround) {
        PressUp = 1;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == "a") {
        PressLeft = 0;
    }
    if (event.key == "w") {
        PressForward = 0;
    }
    if (event.key == "d") {
        PressRight = 0;
    }
    if (event.key == "s") {
        PressBack = 0;
    }
    if (event.keyCode == 32 && onGround) {
        PressUp = 0;
    }
})

function player(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

var pawn = new player(0, 0, 0, 0 ,0,);

var world = document.getElementById('world');

function update() {
    let dx = (PressRight - PressLeft);
    let dz = - (PressForward - PressBack);
    let dy = PressUp;

    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;

    world.style.transform =
        `
            rotateX(${-pawn.rx}deg)
            rotateY(${-pawn.ry}deg)
            translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)
        `
}
