let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
canvas.width = 3840;
canvas.height = 2160;
let devider = 10;
let widthSeg = canvas.width / devider;
let heightSeg = canvas.height / devider;
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 5;
for (let i = 0; i <= devider; i++) {
    ctx.strokeStyle = "red";
    ctx.moveTo(widthSeg * i, 0);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}
for (let i = 0; i <= devider; i++) {
    ctx.strokeStyle = "red";
    ctx.moveTo(0, heightSeg * i);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}
for (let i = 0; i <= devider; i++) {
    ctx.strokeStyle = "red";
    ctx.moveTo(widthSeg * i, canvas.height);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}
for (let i = 0; i <= devider; i++) {
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width, heightSeg * i);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}