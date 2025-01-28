// reverse of array

let arr=[2,1,4,2,5,3,5,4,35,63,6,6]
let n=arr.length
function reverseArray(arr) {
    let reverse=[];
  for (let i =n-1; i >=0; i--) {
    reverse.push(arr[i]);
  }
  console.log(reverse)
}
reverseArray(arr);



// return the no.of vowels in a string

let str="A1b2@C3d#E4f5*G"
function returncount(n) {
    let charCount=[];
    for(let char of n) {
        charCount[char]=(charCount[char] || 0)+1;
    }
   return charCount;
   
}
let result=returncount(str);
console.log(result);
console.log(typeof(result));


