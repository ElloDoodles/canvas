var canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");
color = "black";
width = 1;
var mouse_event = "empty";
var lpox;
var lpoy;
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event = "mouseUP";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    var cpox = e.clientX - canvas.offsetLeft;
    var cpoy = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last Position Of X and Y Coordinates Are ");
        console.log("X = " + lpox + "Y = " + lpoy);
        ctx.moveTo(lpox, lpoy);

        console.log("Current Position Of X and Y Coordinates Are ");
        console.log("X = " + cpox + "Y = " + cpoy);
        ctx.lineTo(cpox, cpoy);

        ctx.stroke();
    }

    lpox = cpox;
    lpoy = cpoy;
}