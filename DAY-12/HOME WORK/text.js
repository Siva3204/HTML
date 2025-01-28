
// draw a line

var c=document.getElementById("Siva");
var ctx=c.getContext("2d");
ctx.moveTo(400,400);
ctx.lineTo(0,0);
ctx.stroke();

// text 

var c=document.getElementById("siva");
var ctx=c.getContext("2d");
ctx.font="50px algerian";
ctx.fillStyle="green";
ctx.fillText("sivakumar",50,200);
ctx.strokeStyle="yellow";
ctx.strokeText("sivakumar",50,200);

// arc(round)

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(200,200,150,0,360);
ctx.stroke();

// stroke text

var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
ctx.font="50px arial";
ctx.strokeText("SIVA",150,200);


// Draw a text

var c=document.getElementById("my_canvas");
var ctx=c.getContext("2d");
ctx.font="50px arial";
ctx.fillText("SIVA",150,200);



// download radial gradient image
function downloadFun(){
    var link=c.toDataURL("image/png")
    this.href=link
}
var sivaLink=document.getElementById('siva')

sivaLink.addEventListener('click',downloadFun)

