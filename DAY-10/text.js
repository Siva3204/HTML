var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
// word and word style
ctx.font="50px algerian";
ctx.fillStyle="red";
ctx.fillText ("Sivakumar",150,200);
// word line style
ctx.strokeStyle="black";
ctx.strokeText("Sivakumar",150,200);

// draw a line

var c=document.getElementById("siva");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,400);
ctx.stroke()

// arc
var siva=document.getElementById("mysiva");
var ctx=siva.getContext("2d");
ctx.beginPath();
ctx.arc(250,200,150,0,2*Math.PI);
ctx.stroke(); 



// rectangle
var siva=document.getElementById("Siva");
var ctx=siva.getContext("2d");
// fill text only
ctx.fillStyle="green";
ctx.fillRect(200,250,300,300);
ctx.strokeStyle="red";
ctx.strokeRect(200,250,300,300);

// linear gradient

var c=document.getElementById("my_canvas");

var ctx=c.getContext("2d");

// create the gradient

const grad=ctx.createLinearGradient(0,0,200,0);
grad.addColorStop(0,"red");
grad.addColorStop(.5,"blue");
grad.addColorStop(1,"green");


// fill the gradient

ctx.fillStyle= grad ;
ctx.fillRect(100,170,200,400);



//  radial gradient canvas
 
var c=document.getElementById("my_Canvas");
var ctx=c.getContext("2d");

const radial=ctx.createLinearGradient(150,75,15,150,75,150);
radial.addColorStop(0,"white");
radial.addColorStop(0.1,"black");
radial.addColorStop(.2,"lightblue");
radial.addColorStop(.5,"darkblue");
radial.addColorStop(1,"orange");     

// full rectangle with gradient
ctx.fillStyle=radial;
ctx.fillRect(10,10,280,130);


// download radial gradient image
function downloadFun(){
    var link=c.toDataURL("image/png")
    this.href=link
}
var gfLink=document.getElementById('gf')

gfLink.addEventListener('click',downloadFun)

