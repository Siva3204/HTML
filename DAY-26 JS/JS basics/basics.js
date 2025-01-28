// function siva(a=2, b=4, c=5, d=6){
//     let sum=a+b;
//     console.log(sum);
//     return sum;
//     let div=c/d;
//     console.log(div);
//     return div;
//     console.log(sum * div);

//     function siva(a,e,b=10,c=100,d=1000){
//         let sum1=b+c+d;
//         let sum2=a+e;
//         console.log(sum1 ,sum2);
//         let sub1=sum-a;
//         let sub2=sum-e
//         console.log(sub1,sub2);

//     }
//     console.log(siva(5,6));

//     var remainder=function (a,b){
//         console.log(a,b);
//         return a % b
//     }
//     let rem=remainder(4,6);
//     if(rem > 0){
//         console.log("positive");
//     }
//         if(n/2==0){
//          console.log("even number");
//         }
//     if (rem=0){
//         console.log("zero");
//     }
//     else{
//         console.log("integers");
//     }
// }

// function siva1(a,b,c,d){
//     let sum=a+b;
//     console.log(sum);
//     return sum;

//     if(sum==5){
//         console.log("positive number");
//     }
//     else{
//         console.log("negative number");
//     }

//     let mul=a*b;

//    if (mul >= 7){
//         console.log("positive number");
//     }

// }
// console.log(siva1(3,4,6,8));

// for(let i=0;i<=1000;i++){
//       if(i==500){
//         console.log("i");
//         break;
//       }
// }
// for(let i=0;i<=1000;i++){
//     if(i==900){
//         console.log("i");
//       continue;
//     }
// }

// looping statememnts
//   1)for loop
//   2)while loop

// function loop(){
// for(let i=0;i<10;i++){
//     console.log(loop);
// }
// }

// patterns
// let a = "* * * * * "
// for(let i=0;i<5;i++){
//     console.log(a);
// }

// or

// for(let i=0;i<5;i++){
//     let row= ""
//     for(let j=0;j<i+1;j++){
//         row=row+"* ";
//     }
//         console.log(row);

// }

//     for(let i=5;i>0;i--){
//         let row="";
//         for(let j=0;j<i;j++){
//             row=row+"* ";
//      }
//     console.log(row);
// }

// how to solve from 0 to 10 and 9 to 0 using loops in javascript

// for (let i = 0; i <= 10; i++) {
//     console.log(i);

//   for (let i = 9; i >= 0; i--) {
//     console.log(i);
//   }

// }
// // patterns

// for(let i=0;i<5;i++){
//         let row= ""
//         for(let j=0;j<i+1;j++){
//             row=row+"* ";
//         }
//             console.log(row);

//     }

let students = [
  {
    name: "Siva",
    age: 23,
    dob: "07/08/2003",
    isMature: true,
    marks: [12, 34, 3],
    friends: {
      friend1: "Adarsha",
      friend2: "Teja",
    },
  },
  {
    name: "Adarsha",
    age: 23,
    dob: "06/08/2002",
    isMature: true,
    marks: [33, 11, 15],
    friends: {
      friend1: "Siva",
      friend2: "Teja",
    },
  },
];

if ("age" in students) {
  console.log("object");
}

if ("email" in students) {
  console.log("object");
} else {
  console.log("not object");
}
