var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");
button.textContent = "Pentru tine, Miruna ❤️";

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("În fiecare zi nu-mi vine să cred cât de norocos sunt", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("În fiecare zi nu-mi vine să cred cât de norocos sunt", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 500){ opacity = 0; }

    if(frameNumber > 500 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Printre trilioane de stele și miliarde de ani", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    if(frameNumber >= 1000 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Să pot trăi această viață alături de tine", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    if(frameNumber >= 1500 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Este ceva aproape imposibil de imaginat", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    if(frameNumber >= 2000 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Și totuși sunt aici, având șansa să te cunosc", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    if(frameNumber >= 2500){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.font = (fontSize + 14) + "px Comic Sans MS";
        context.fillText("TE IUBESC ENORM, MIRUNA ❤️", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    drawStars();
    updateStars();
    drawText();

    frameNumber++;
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
