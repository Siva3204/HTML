//  radial gradient canvas
 
 var c=document.getElementById("mycanvas");
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



// download radial gradient

function downloadFun(){
    var link=c.toDataURL("image/png")
    this.href=link
}
var gfLink=document.getElementById('gf')

gfLink.addEventListener('click',downloadFun)

