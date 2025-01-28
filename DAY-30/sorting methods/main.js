// sorting for strings
let arr=["siva","naveen","adi","kattappa"]
console.log(arr.sort())         //directly apply sort method and no need pass the parameters () in strings
        
// sort numbers
let ar=[50,5,30,10,8,24,89]         
let val=ar.sort((a,b)=>{        //here pass the parameters() to numbers beacause it defines start and end values(a,b) in numbers
return b-a
})
console.log(val)





