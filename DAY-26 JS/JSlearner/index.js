// //  keywords
// //1.var keyword
// var a=15;
// console.log(a);

// // 2.let keyword
// let b="siva";
// console.log(b);

// // 3.const keyword
// const c="naveen";
// console.log(c);

// // 4.automatically
// x=5;
// y=6;
// z=x+y;
// console.log(z);

// ----------------------------------------------------------------

// data types
// String
// 1.Number             5.Null
// 2.Bigint             6.Symbol
// 3.Boolean            7.Object
// 4.Undefined

// 1.Number
//  let a=150;               // 'don't add string to number and add only for "letters (or) names"'
// console.log(a);           //only print "a"values
// console.log(typeof a);

// // 2.Bigint
// let  a=1572348090778090n;
// console.log(typeof a);

// 3.Boolean
// let  a=true;
// console.log(typeof a);

// // 4.Undefined
// let  a;
// console.log(typeof a);

// // 5.Null
// let a=null;
// console.log(typeof a);

// 7.Object       //denotes curlybrackets"{}"
//  const a={firstname:"siva" ,lastname:"kumar"}
//  console.log(typeof a);

// //  array object        //denotes squarebrackets
//  const names=["siva","kumar"]
//  console.log(typeof names);

// // date object
// const date=new Date("22-11-2024");
// console.log(typeof date);

// var a=15;
// a=5;
// console.log(a);
// let a=15;
// a=55;
// console.log(a);

// const ab=15;
// console.log(ab);

// let result=15;
// console.log(result);
// result="54"
// // console.log(result);
// console.log(typeof result);

// create a one object
// let information={
//         firstname: "John",
//         lastname: "Smith",
//         age:23,
//         course:"java"
// }
// console.log(information);
// console.log(typeof information);
// console.log(information["age"]);  // one by one print the keys in object is 2 ways  (or)
// console.log(information.course)    //individual written has 2 ways

// // create a one array is two ways
// let arr=["siva",4,"kumar",34];
// console.log(arr)
// console.log(typeof arr);        // or console.log(typeof (arr)); //

//         //    (or)

//   let array=[]
//   array[0]="naveen"
//   array[1]=5
//   array[2]="kumar"
//   array[3]=36

// console.log(array)
// console.log(typeof array)

// // arithmetic operator
// let a=4
// let b=5
// let c=a+b
// console.log(c)

// // substraction
// let a=9
// let b=5
// console.log(a-b)

// // multiplication
// let a=5
// let b=9
// console.log(a*b)

// // exponentiation
// let a=2
// let b=4
// console.log(a**b)

// // division
// let a=8
// let b=2
// console.log(a/b)

// // modulus
// let a=4
// let b=3
// console.log(a%b)

// // increment
// let a=4
// a++;
// console.log(a)

// // decrement
// let b=5
// b--;
// console.log(b)

// // comparision operator
// let a=10
// let b=20
// console.log(a+=b)

// //operator question
// let a=5
// let b=6
// console.log(a-b)

// // type checking question
// let a=10
// console.log(a)
// console.log(typeof a)

// // create a object and print each one separate
// let information={
//     firstname: 'John',
//     age: 21,
//     city: 'San Francisco'
// }
// console.log(information)
// console.log(information.firstname)
// console.log(information.age)
// console.log(information.city)

// // create a array and print each one separate is 2 WAYS
// let arr=["mango","banana","apple","orange","guava"]
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4])

// // create a array
// let arr=[]
// arr[0]="mango",
// arr[1]="banana",
// arr[2]="apple",
// arr[3]="orange",
// arr[4]="guava"
// console.log(arr)

// 3 tpes of loops
// // 1.while loop
// let num=1;
// while(num<=50){
//     console.log(num);
//     num++;
// }

// // do-while loop
// let number=1;
// do{
//     console.log(number);
//     number++;
// }
// while(number>8)

// //forloop
// for(let i=1; i<=10; i++){
//     console.log (" my name is " + a);
// }

// // another for loop
// let a="siva"
// for(let i=1; i<=10; i++){

//     if(i==3){
//         console.log("not found");
//         continue;
// }
// console.log (" my name is " + a);
// }

// // break
// for(let i=0; i<=5; i++){
//     if(i==3){
//         console.log("not found");
//        break;
// }
// console.log("page no is:"+i);
// }

// // continue
// for(let i=0; i<=5; i++){
//     if(i==3){
//         console.log("not found");
//        continue;
// }
// console.log("page no is:"+i);
// }

// // date assign value
// let date=new Date();
// console.log(date);

// // use iteration for var and let loops

// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);

// // using let in loops

// for(let i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);

// // using functions
// // 1.adding two numbers is 2 ways
// function create(num1, num2){
//       let result=num1 + num2;
//       return result;
// }

// create(4,5);
// console.log(create(4,5));

// // 2.another way

// function add(num1, num2){
//     let add=num1 + num2;
//     console.log(add);
// }
// add(10,20)

// // subtraction of two numbers

// function create(num1, num2){
//     let result=num1 - num2;
//     return result;
// }
// console.log(create(25,5));

// // multiplication of two numbers

// function create(num1, num2){
//     let result=num1 * num2;
//     return result;
// }
// console.log(create(25,5));

// // division of two numbers

// function create(num1, num2){
//     let result=num1 / num2;
//     return result;
// }
// console.log(create(25,5));

// // modulus of two numbers

// function create(num1, num2){
//     let result=num1 % num2;
//     return result;
// }
// console.log(create(2,5));

// let person={
//   name: 'John',
//   age: 21,
//   height:5.11,
//   quaalification:'B-tech',
//   iscompleted:'true',
//   dance:function(){
//     console.log("jarvis is a computer")
//   }
// }
// console.log(person);          //printing the object
// console.log(person['age']);   //printing the object key of age
// console.log(person.dance())   //printing the object of nesting function o/p:undefined
// person.dance();               //printing the object of nesting function

// // printing the keys only
// let keys=Object.keys(person)
// console.log(keys)
//  // printing the keys only
// let values=Object.values(person)
// console.log(values)

// create a objects

// let person={
//   name: 'John',
//   age: 21,
//   height:5.11,
//   qualification:'B-tech',
//   iscompleted:'true',
//   dance:function(){
//     console.log("jarvis is a computer")
//   }
// }
// // console.log(person);
// // person.age=90
// console.log(person)
// person.age=90
// person.gender='male'
// console.log(person)
// let nam=person.name
// console.log(nam)

// person.firstName="kumar"
// person.gender='male'
// delete person.age
// person.age=32
// person.age=3
// person.firstName="John"
// delete person.dance
// person.width=5.11

// create object

// let person={}
// person.name='siva',
// person.age=21,
// person.gender='male'
// // console.log(person)

// let user=Object.create(person)
// console.log(person)
// console.log(user)
// user.name='siva',
// user.age=21
// console.log(user)

// // string concatenation
// let firstName='siva';
// let lastname='kumar';
// // let result=firstName+lastname;
// // console.log(result)
//     //    (or)
// console.log(firstName+ "" + lastname)

// // string methods
// let str="hello world"
// console.log(str)
// console.log(str.charAt(1))

// let str="hello world"
// console.log(str.slice(2))

// let str="hello world"
// console.log(str.slice(-5))

// let arr=["siva", "kumar", 10,"s", "hello","world"];
// console.log(arr.slice(1,5))

// array destructuring

// let arr=[10,20,30,40]
// let [a,b,c,d]=arr
// console.log(arr)

// // object destructuring

// let obj={
//     fname:'siva',
//     lname:'kumar'
// }
// let{fname,lname}=obj;
// console.log(fname+" "+lname)

// Rest operator
// let arr=[10,20,30,40,60,70]
// let [a,b,...c]=arr
// console.log(a,b)
// console.log(c)

// let arr=[10,20,30,40,60,70];
// let[a,b,...c]=arr
// console.log(a,b)
// console.log(...c)

// let arr=[10,20,30,40,60]
// let[a,b,...c]=arr
// console.log(c)
// video=> 18.33

// let student={
//     name:'siva',
//     age:22
// }
// for(let data in student){
//     console.log(student[data])
// }

// function add(a,b){
//  let res=a+b;
//  console.log(res)
// }
// add(4,3)

// function addition(a,b){
// let res=a+b;
// return res;
// }
// let sum=addition(4,3)
// console.log(sum)

// function addition(a,b){
// let res=a+b;
// return res;
// }
// console.log(addition(4,3))

// let array=["siva","adi","kumar"]
// console.log(array.sort())

// ascending order
// let array=[10,5,9,3,5,3,0,1]
// let s=array.sort((a,b) =>{
//     return a-b
// })
// console.log(s)

// descending order
// let array=[10,5,9,3,5,3,0,1]
// let s=array.sort((a,b) =>{
//     return b-a
// })
// console.log(s)

// try{
// let a="siva";
// let c="adi";
// let b="raju"
// }
// catch(error){
// console.log(error.name)
// }
// finally{
//     console.log("run the next line")
//     console.log("done")
// }

// try {
//     console.log("Trying...");
//     console.log("naveen")
//     console.log(siva)
//     // throw new Error("An error occurred");
//   }
//   catch (error) {
//     console.error(error.message);
//   }
//   finally {
//     console.log("Cleaning up...");
//   }

// // teritary operator
// let a = 30;
// let b = 10;
// a > b ? console.log("a is large") : console.log("b is small");

var c = document.createElement("p");
console.log("c");
