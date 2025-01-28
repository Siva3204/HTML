//convert decimal to binary

// function decimalToBinary(decimal) {
//     let binary = "";
  
//     while (decimal > 0) {
//       let remainder = decimal % 2;
//       binary = remainder + binary
//       decimal = Math.floor(decimal / 2);
//     }
  
//     console.log(binary);
//   }
// decimalToBinary(37);

// // create binary to decimal
// function BinaryTodecimal(binary) {
//   let decimal ="";
  
//     while (binary > 0) {
//       let remainder = binary % 2;
//       decimal = remainder + decimal
//       binary = Math.floor(binary / 2);
//     }
  
//     console.log(decimal);
//   }
//   BinaryTodecimal(11)



// converted from binary to decimal

function BinaryTodecimal(binary){
let decimal ="";
while(binary>0){
let  remainder=binary % 2;
decimal = remainder+decimal
binary = Math.floor(binary/ 2);
}
console.log(decimal);
}
BinaryTodecimal(7)