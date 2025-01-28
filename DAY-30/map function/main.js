// use map() function and adding in the array

let arr=[10,20,30,40,50]
let array=arr.map((elements)=>{
return elements +10
})
console.log( "actual=",arr)
console.log("result=",array)

//  use map() function and subtracting in the array
let a=[10,20,30,40,50]
let ar=arr.map((elements)=>{
return elements -10
})
console.log( "actual=",a)
console.log("result=",ar)


//  use map() function and multiplication in the array
let b=[10,20,30,40,50]
let ar1=arr.map((elements)=>{
return elements *10
})
console.log( "actual=",b)
console.log("result=",ar1)



//  use map() function and division in the array
let c=[10,20,30,40,50]
let ar2=arr.map((elements)=>{
return elements /10
})
console.log( "actual=",c)
console.log("result=",ar2)


//  use map() function and modulus in the array
let d=[10,20,30,40,50]
let ar3=arr.map((elements)=>{
return elements %3
})
console.log( "actual=",d)
console.log("result=",ar3)