// use reduce for numbers in array
let arr=[10,20,30,40,50,60]
let element=((prev,next)=>{
   return prev+next
})
let call=arr.reduce(element,10)
console.log(call)


// // use reduce for string in array
// let array=["siva","kumar","kuster","buster"]
// let arr=array.reduce((before,after)=>{
//    return `${before}${after}`
// })
// console.log(arr)








// class car{
//     constructor(name,color,engine,type){
//         this.name=name;
//         this.color=color;
//         this.engine=engine;
//         this.type=type;
//         // for(let models in car){
//         //     console.log(models)
//         // }
//     }
// }
// let vehicles=new car("audi","red",4,"light")
// let heavy=new car("suzuki","red",2,"heavy")

// console.log(vehicles)
// console.log(heavy)