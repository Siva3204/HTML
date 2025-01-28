var c=document.getElementById("siva");
var ctx=c.getContext("2d");
// arc using 3 ways:
// 1.beginpath()
// 2.arc(x,y,radius,starting angle,ending angle)
// 3.stroke()    using stroke for forming a line

ctx.beginPath();
ctx.arc(250,250,200,0,2*Math.PI);
ctx.stroke();



