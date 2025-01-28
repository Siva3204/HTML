const images= document.querySelectorAll('.active')
let img=document.getElementsByTagName('img')[0];
let button=document.getElementsByTagName('button')[0];
images.addeventlistener('click',active)
images.addeventlistener('click',remove)
function active(){
    button.classList.add("activate")
console.log("active")
}
function remove(){
    images.foreach((element) =>{
        images.classlist.remove('remove');
    })
}


