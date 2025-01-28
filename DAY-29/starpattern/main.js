let n=5
for(let i=1;i<=n;i++){
  let row="";
  for(let j=i;j<=n-1;j++){
    row +=" ";
  }
    for(let k=1;k<=2*i-1;k++){
        row += "*"
   
}
row += " ";
console.log(row)
}





// n=5;
// for(let i=0;i<=n;i++) {
//     let row="";
//     for(let j=i;j<=n-1;j++) {
//         row=row +"* ";
// }
// console.log(row);
// }