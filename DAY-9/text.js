var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.font="50px algerian";
ctx.fillStyle="red";
ctx.fillText("Sivakumar",70,250);
ctx.strokestyle="black";
ctx.strokeText("Sivakumar",70,250);


// create another word inside the border
// give fill style
// and strokeText
// here not visible the style because use same attributes like{strokeStyle,strokeText},(so,this wrong method)
ctx.fillStyle="green";
ctx.strokeText("Sivakumar",80,300);

// create another word inside the border
// give stroke style 
// and strokeText
// here working(this is correct method)

// syntax ctx.strokeText("word",x,y);

ctx.strokeStyle="pink";
ctx.strokeText("Sivakumar",80,300);

//  create another word inside the border
// give fill style
// and fillText

// syntax ctx.fillText("word",x,y);

ctx.fillStyle="blue";
ctx.fillText("Sivakumar",90,350);

// text create three types they are:
// 1.font
// 2.fill Style
// 3.fill Text
// Next using stroke Style and stroke Text.

// stroke means lines (or) word style(starting to ending point).

// syntax ("word",x,y)