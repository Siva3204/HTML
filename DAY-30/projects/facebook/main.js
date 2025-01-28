let urls=["https://cdn.pixabay.com/photo/2017/06/30/11/17/tree-2458047_960_720.png","https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg","https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"];

let image=document.getElementById('image')
let prev=document.getElementById('prev')
let next=document.getElementById('next')


let index = 0;

image.src=urls[index]

setInterval(()=>{
    index++;
    if(index > urls.length-1) index=0
    image.src=urls[index]
},5000)

prev.addEventListener('click',()=>{
    index--;
    if(index < 0) index=urls.length - 1
    image.src=urls[index]

 });
next.addEventListener('click',()=>{
    index++;
    if(index > urls.length-1) index=0
    image.src=urls[index]

});

let val=document.getElementById("file");
let imagevalue=document.getElementById("images");


        val.addEventListener('change', () => {
            const file = val.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagevalue.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
