
let arr=["https://th.bing.com/th/id/OIP.HgzmUsKr4x3Z1y_Nj_C_ugHaEo?w=728&h=455&rs=1&pid=ImgDetMain","https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg","https://media.istockphoto.com/photos/statue-of-meditating-hindu-god-shiva-on-the-ganges-river-at-rishikesh-picture-id1317752940?b=1&k=20&m=1317752940&s=170667a&w=0&h=TvOos3qTb4PbTFyMZl7BOCZa9MLYHbD9jV4GwuMrHe4="]
var a=document.getElementById("a1")
var button=document.getElementById("prev")
var button=document.getElementById("next")
currentindex=0;
function  increase(){
    currentindex++;
    a1.setAttribute('src',urls[currentIndex])
}
next.addEventListener('click',increase)