// square

var siva=document.getElementById("myCanvas");
var ctx=siva.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(500, 400);
ctx.moveTo(0, 50);

ctx.lineTo(600, 400);
ctx.moveTo(0, 100);

ctx.lineTo(500, 300);
ctx.stroke();    

// rectangle

var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle="balck"
ctx.fillRect(10,0,10,400);

ctx.fillStyle="orange"
ctx.fillRect(10,10,150,75);

ctx.fillStyle="white"
ctx.fillRect(10,75,150,75);

ctx.fillStyle="green"
ctx.fillRect(10,150,150,75);

ctx.fillStyle="violet"
ctx.fillRect(250,78,180,100);


// .fillStyle="red"ctx
// ctx.fillRect(0,225,150,75);
// ctx.fillStyle="violet"
// ctx.fillRect(0,300,150,75);

ctx.beginPath();
ctx.arc(75,112,38,20,0,2*Math.PI)
ctx.strokeStyle= "blue";
ctx.stroke();


ctx.strokeStyle="red";
ctx.lineWidth=9;
ctx.fillStyle="red";
ctx.strokeRect(0,0,450,400);

// triangle
var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(100,100);
ctx.lineTo(0,100);
ctx.lineTo(50,0);
ctx.lineTo(100,100);
ctx.stroke();











