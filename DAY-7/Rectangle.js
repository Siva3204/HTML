// rectangle


var siva=document.getElementById("siva");
var ctx=siva.getContext("2d");
// fill text only
ctx.fillStyle="green";
ctx.fillRect(100,150,300,200);
ctx.strokeStyle="red";
ctx.strokeRect(100,150,300,200);

// clear Rectangle

ctx.clearRect(40,80,10,10);