// create a student marks result using switch cases
// switch cases contain multiple condition for students and that's why iam using switch cases
let subjects={
    "tel":100,
    "hin":90,
    "maths":80,
    "soc":60,
    "sci":50,
    "cc":10

}
// console.log[subjects]
let marks={
    100:"A+",
     90:"A",
     70: "B+",
     60:"B",
     50:"C",
     10:"Fail"
}
console.log(marks[subjects['tel']])


switch(true) {
    case 1:tel>=100;
    grade ='A';
    break;
    case 2:eng>=80;
    grade ='B';
    break;
    default:subjects;
    grade="fail";
    break;
}
// console.log('subjects+" "+grade${marks}');
 
// create a string value  using switch cases

let str="javascript"
switch(str){
    case "HTML":
        console.log("this is my HTML")
       break;
    case "css":
        console.log("this is my CSS")
        break;
    case "javascript":
        console.log("this is my javascript")
        break;
        default:
        console.log("this is not my language")
}



