let str="hello world";
function test(n){
    let charCount=[];
    for(let char of n){
        charCount[char] =(charCount[char] || 0)+1;
    }
    return charCount;
}

let result=test(str);
console.log(result);


