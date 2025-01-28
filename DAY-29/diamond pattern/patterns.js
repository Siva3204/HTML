// let n=5;
// for(let i=5;i>0;i--) {
//     let row="";
//     for(let j=0;j<i;j++){
//         row +="-";
//     }
//     row+="*";
// console.log(row);
// if(i != 0){
// for(let j=0;j<=2*i -1;j++){
//         row+="-";
//     }
    
//     row+="*";
// }
//     console.log(row);

    // downside

// for(let i=0;i<=n-1;i++) {
//     row=" ";
//     for(let j=0;j<i;j++){
//         row +=" ";
// }
// row+="* ";
// }

// console.log(row);
// }
// // console.log(row);

// for(let i=0;i<=n;i++) {
//     row=" ";
//     for(let j=0;j<=n-i-1;j++){
//         row +=" ";
// }
// row+="* ";
// for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//     row+=" "; 
// }
// row+="* ";
// console.log(row);
// }


// diamond pattern
// upwards of a diamond
let n=5;
for(let i=0;i<n;i++) {
    let row="";
    for(let j=0;j<=n-i-1;j++) {
      row +=" "; 
}
row+="*";
if(i !=0){
for(let j=0;j<2*i-1;j++) {
    row +=" "
}
row += "*"
}

console.log(row);
}


// downward of a diamond

for(let i=n;i>=0;i--) {
    let row="";
    for(let j=0;j<=n-i-1;j++) {
      row +=" "; 
}
row+="*";
if(i !=0){
for(let j=0;j<2*i-1;j++) {
    row +=" "
}
row += "*"
}

console.log(row);
}


