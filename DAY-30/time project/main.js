// let hours=document.getElementById("hrs");
// let minutes=document.getElementById("min");
// let seconds=document.getElementById("sec");
let st=document.getElementById("start");
let pa=document.getElementById("pause");
let sp=document.getElementById("stop");
let seconds=document.getElementById("sec");
// let s = 0

let [hrs,min,sec]=["00","00","00"]
let r = setInterval(()=>{
// minutes.innerHTML =  currenttime.getMinutes()
seconds.innerHTML =  s++;
    },1000)


clearInterval(r)

// min=0
function start() {
    let r = setInterval(()=>{
        // minutes.innerHTML =  currenttime.getMinutes()
        seconds.innerHTML =  sec++;
            },1000)
    console.log("ss")
    if(sec==60){
        min++;
        sec=0;
    }
}
console.log(start())
// st.addEventListener("click",start())


