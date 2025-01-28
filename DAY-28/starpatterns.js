// for(let i=0;i<=5;i++) {
//     let row="";
//     for(let j=0;j<=i;j++) {
//         row = row +"* ";
//     }
//     console.log(row);
// }



// n=5;
// for(let i=0;i<=n;i++) {
//     let row="";
//     for(let j=i;j<=n-1;j++) {
//         row=row +"* ";
// }
// console.log(row);
// }


// for(let i=0;i<=n;i++) {
//     row="";
//     for(let j=i;j<=n-2;j++) {
//         row=row +"* ";
// }
// console.log(row);
// }

//    for(let i=0;i<=n;i++) {
//         row="";
//         for(let j=0;j<=n;j--) {
//             row=row +"* ";
//     }
//     for(let k=i;k<=2*i+1;k++) {
//         row=row +"* ";
//     }
//     console.log(row);
//     }

// first half of diamond
//     let n = 5;
// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=n;j>i+1;j--){
//         row += ' ';
//     }
//     // console.log(row)
//     for(let k=0;k<2*(i+1)-1;k++){
//         row += "*"
//     }
//     console.log(row);
// }

// // second half of diamond

// for(let i=0;i<n-1;i++){
//     let row = ""
//     for(let j=0;j<i+1;j++){
//         row +=  ' ';
//     }
//     for(let k=0;k<2*(n-1-i)-1;k++){
//         row += "*"
//     }
    // for(let k=0;k<2*(n-i)-1;k--){
    //         row += '* ';
    // }
   
//     console.log(row);
// }


// factorial of a number

// function factorial(ar) {

//     let result =1;
//     for (let i=1; i <=ar; i++) {
//         result *= ar;
//     }
//     return result;
// }
// function arr_fact(arr){
// let a=[];
// for(let i=0; i<arr.length; i++) {
//     console.log(factorial(arr[i])); 
// }
// }
// let arr=[1,2,3,4,5]
// console.log(arr_fact(arr))


// // function which will return 100 random values in an Array. and later pass that array to a sum function which will calculate sum of that array... 

// function number(n){
//     let a=[];


// for(let i=0; i<=n;i++){
// //    let a=i+1;
// a.push(Math.floor(Math.random() * 51));
   
// }
// return a;
// }
// function cal_sum(a){
//     let sum=0;
//     for(let i=0; i<a.length;i++){
//         sum+=a[i];
//     }
//     return sum;
// }
// const randomNumbers = number(100);
// const sumOfNumbers = cal_sum(randomNumbers);
// console.log("Random Numbers:", randomNumbers);
// console.log("sum of Random Numbers:", sumOfNumbers);



// function Prime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// function Numbers() {
//     for (let i = 2; i <= 50; i++) {
//         if (Prime(i)) {
//             console.log(i);
//         }
//     }
// }

// Numbers();



// //  factorial of a number
// fact=1;
// for(i=1; i<10; i++) {
//     fact =fact * i;
// }
// console.log(fact);

// // primenumbers from 1 to 50

// function Prime(n){
// for(i=1; i<=50; i++) {
    
// }
// }
// Prime(50)





// let n = 5;
// let string = "";
// // Upside pyramid
// // upside diamond
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       string += "*";
//     }
//     else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// // downside diamond
// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
// console.log(string);


// diamond outline 

let n=5;

for(let i=1; i<=n; i++) {
    let row="";
    for(let j=1; j<=n-i; j++){
        row+="-"
        // console.log("");
    }
    for(let k=1; k<=2*i-1; k++) {
        if (k === 0 || k === 2 * i - 2) {
             row +="* "
          }
          else {
             row +=""
          }
          row += "* ";
}
// console.log(row);
}
// reverse diamond
for(let i=n-1; i>=1; i--){
    // row=""
}
    for(let j=1; j<=n-1; j++){
        row+=""
        console.log("");
}
for(let k=1; k<=2*i-1; k++) {
   
    if (k === 1 || k === (n - i) * 2 - 1) {
        row +="* "
      }
      else {
        row += " ";
      }
      row += "* ";
}
console.log(row);




