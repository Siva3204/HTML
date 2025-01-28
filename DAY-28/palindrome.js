// let a="tenet"
// if(a.split=("").reverse().join("") === s){
// console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }


function Pallendrome(str){
        for(let i=0,j=str.length-1;i<j;i++,j--){
            if(str[i] !== str[j]) return false;
    
        }
        return true;
    console.log(Pallendrome (saas));

    }
    if(Pallendrome("saas")) {
        console.log("pallendrome")
    } 
    else{
        console.log("not a pallendrome")
    } 
    