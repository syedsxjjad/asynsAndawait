///////_______1_______////////

// function dat(){
//     var d=new Date();
//     document.write(d);
// }
// dat();



///////_______2_______////////
  

// function nam(fname, lname){
// let a=fname+lname;
// return a;
// }
// let s=nam("Syed","Sajjad");
// document.write(s);



///////_______3_______////////


// function addition(number_1, number_2)
// {
//   let sum = number_1 + number_2;
//   return sum;
//   //document.write(sum)
// }

// var number_1 = parseFloat(prompt("First Number"));
// var number_2 = parseFloat(prompt("Second Number"));
// document.write(addition(number_1,number_2));



///////_______4_______////////


// var num1=+prompt("Enter 1st number ");
// var oprt =prompt("Enter Only that's Operator(+,*,-,/)..");
// var num2=+prompt("Enter 2nd number ");

// function calculator(num1,oprt,num2){
// console.log(num1,num2,oprt)
//       let result;
//       if (oprt=='+'){
//           result=num1+num2;
//       }
//       else if (oprt=='-') {
//           result=num1-num2;
//       }
//       else if(oprt=='*'){
//             result=num1* num2;
//       }
//       else if(oprt=='/'){
//             result=num1/num2;
//       }
//       else{
//           alert("Sorry you not use that operator..");
//       }
//       return result;

//     }
//     var rslt = calculator(num1,oprt,num2);
//     alert("Here result is : "+ rslt);




 ///////_______5_______////////


//  function sqr(num1){
  
//     let a=num1*num1;
//     return a;

//  }
//  console.log(sqr(2));




 ///////_______6_______////////


//  function fac(number) {
//     let fact = 1;
//     if (number < 0) {
//         console.log('Error! Factorial for negative number does not exist.');
//     }
    
//     else if (number === 0) {
//         console.log(`The factorial of ${number} is 1.`);
//     }
    
//     else {
       
//         for (i = 1; i <= number; i++) {
//             fact *= i;
//         }
//         console.log(`The factorial of ${number} is ${fact}.`);
//     }
    
//     return fact
//  }
//  fac(4);




 ///////_______7_______////////

//   function user() {
    
//  let f=+ prompt("Enter First Number");
//  let l=+ prompt("Enter second Number");

//  for (let i = f; i <= l; i++) {
//     document.write(i,"<br>");
//     console.log(i);
// }
//  }
//   user()



///////_______8_______////////

// let b=prompt("Enter Base");
// let p=prompt("Enter Perpendicular");

// function hypo(b,p) {
    
//    let h=(b*b)+(p*p);
//    return h;
// }
// let e= hypo(b,p);
// document.write(`Hypotenuse = Base = ${b} + perpendicular= ${p}<br>Hypotenuse is=${e} `);



///////_______9_______////////

// i)
// let w=2;
// let h=8;
// function tri() {
 
// let a=w*h;
// return a;
// }
// let e=tri()
// document.write(e);



// ii)
// function tri(w,h) {
 
// let a=w*h;
// return a;
// }
// let e=tri(4,7)
// document.write(e);



///////_______10_______////////


// function a(inp){
//     let rinp = [];
//     for (let i = 0; i < inp.length; i++) {
//         rinp.unshift(inp[i])
//     }
//     b = rinp.toString()
//     c = b.replace(/,/g,'')
//     console.log(c)
//     if(c === inp){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
    
// }

// a('madam')



///////_______11_______////////


// let s="the accept two arguments";
// function upr(s) {
//     let arr=s.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     const str2 = arr.join(" ");
//      return str2;
// }
// let w=upr(s);
// console.log(w);



///////_______12_______////////




// function longest(str){
    
//     str = str.match(/[a-zA-Z0-9]+/gi);
    
//     let largest = "";
  
//     for(let i = 0; i < str.length; i++){

//         if(str[i].length > largest.length){
//         largest = str[i]
//       }
//     }
//     return largest;
//   }
    
//   console.log(longest("Hello guys this is geeksforgeeks where"+
//                       " students learn programming"))




///////_______13_______////////



// function countString(str, letter) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {

//         if (str.charAt(i) == letter) {
//             count +=1;
//         }
//     }
//     return count;
// }

// let s=countString("ssd f r d eewq rrr ","r");
// document.write(s);




///////_______14_______////////



//   function fac(number) {
//         let fact = 1;
//         if (number < 0) {
//             console.log('Error! Factorial for negative number does not exist.');
//         }
        
//         else if (number === 0) {
//             console.log(`The factorial of ${number} is 1.`);
//         }
        
//         else {
           
//             for (i = 1; i <= number; i++) {
//                 fact *= i;
//             }
//             console.log(`The factorial of ${number} is ${fact}.`);
//         }
        
//         return fact
//      }
//      fac(4);





///////_______15_______////////


// const pi=3.14;

// function cir(rad) {

//     cr=2*(pi*rad);
//     console.log("The circumference is:",cr)
// }
// cir(4);

// function ar(rad) {
//      arc=pi*(rad*rad);
//      console.log("The Area is:",arc)
//     }
// ar(3);


