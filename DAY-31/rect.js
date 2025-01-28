let slide=document.getElementsByTagName('main')
let prev=document.getElementById('prev')
let next=document.getElementById('next')
prev.addEventListener('click',()=>{
    slide.style.scrollbehavior="smooth"
    slide.scrollleft -=900;
});
next.addEventListener('click',()=>{
    slide.style.scrollbehavior="smooth"
    slide.scrollRight +=900;
});