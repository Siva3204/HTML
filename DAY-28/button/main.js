const body = document.getElementsByTagName("body")[0];
const btn = document.createElement("button");
// console.log(btn);

btn.setAttribute("class", "btn");
body.appendChild(btn);
console.log(body);
btn.innerHTML = "send me";
