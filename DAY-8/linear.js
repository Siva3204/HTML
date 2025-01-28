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



// var c=document.getElementById("my_canvas");
// var ctx=c.getContext("2d");
// ctx.fillStyle="black"
// ctx.fillRect(10,0,10,400);
