var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(150,150,150,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "grey";
ctx.fill();