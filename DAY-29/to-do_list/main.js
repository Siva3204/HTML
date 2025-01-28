
let input=document.getElementById("input");
let button=document.getElementById("ul");
let app=document.getElementById("btn");
function add(){
  console.log(input.value);
 
  let li=document.createElement("li");
  let box=document.createElement("checkbox");
  li.innerHTML=input.value;
  // if(input.value != "")
 ul.appendChild(li);
  input.value=""
}
  app.addEventListener('click',add);
  console.log(input);
  console.log(button)


// var form=document.querySelector("#form");
// var  table=document.querySelector("#table");
// form.addEventListener("submit", function(click))
//   click.preventDefault();
//   var name=document.getElementById("name").value;
//   var age=document.getElementById("age").value;

//   var data=createList(Name,age);
// table.appendChild(data);


// function remainder(){
//   var name=document.getElementById("name").value;
//   var age=document.getElementById("age").value;
// }
// function remainder(name,age){
//   var table=document.getElementById("table");
//   var namecell=row.insertcell(0)
//   var agecell=row.insertcell(1);

//   // name.
// }