
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
    var link=c.toDataURL("image/${format")
    this.href=link
}
var SivaLink=document.getElementById('Siva')

SivaLink.addEventListener('click',downloadFun)

// select the image format code

// function downloadFun(){
//     console.log(this.value)
//     var format = this.value;
//     var link = canvas2.toDataURL(`image/${format}`)
//     var download_link = document.getElementById('gf');
//     download_link.href = link
//     download_link.download = `image.${format}`
//     console.log(this)
// }
// var lin = document.getElementById('do_sel')
// console.log(lin)
// lin.addEventListener('change',downloadFun)
//  <select id="do_sel" > 
{/* <option value="" selected disabled> Select format:</option>
            <option  value="png" >PNG</option>
            <option value="jpg" > jpg</option>

        </select>
        <a id='gf' download="" > DownLoad</a>
        <!-- <a id="dl" download="canvas.png">Png</a> 
        &nbsp  */}


      // select the image format code

        function downloadFun(){
            console.log(this.value)
            var format = this.value;
            var link = canvas2.toDataURL(`image/${format}`)
            var download_link = document.getElementById('gf');
            download_link.href = link
            download_link.download = `image.${format}`
            console.log(this)
        }
        var lin = document.getElementById('do_sel')
        console.log(lin)
        lin.addEventListener('change',downloadFun)