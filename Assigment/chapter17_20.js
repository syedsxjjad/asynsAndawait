//////------Arrays And Loops------//////


///////--------------1-----------////

// var arr=[
//          ["Syed","Nov","4"],
//          ["Ss","Nov","11"]
// ]

// for (let i = 0; i < 3; i++) {
//     for (let x = 0; x < 3; x++) {

//         document.write(arr[i][x]+"  ");
//     }
//     document.write("<br/>");
// }



///////--------------2-----------////

// var arr=[
//     [1,3,5],
//     [3,5,1],
//     [5,1,3]
// ]

// for (let i = 0; i < arr.length ; i++) {

// for (let x = 0; x < arr.length ; x++) {

//         document.write(arr[i][x]+"   ");  

// }
// document.write("<br/>");
// }


///////--------------3-----------////


// for (let x =1; x <11; x++) {
//     document.write(`Your Number is: ${x} <br/>  `) ;    
// }


///////-----------4-----------////

/////________Table_________//////


// var table = prompt("Enter A table Number");
// var length = 11;
// var i = 1;

////////_____1St Method_____//////
// document.write("Multiplication table: "+ table);
// for (let i = 1; i < length; i++) {
//     document.write("<br>"+table+" * "+i+" = " +(i * table));
// }




/////////_________5_____________///////

//  var fruits=["apple","mango","banana","orange"];

//  for (let i = 0; i < fruits.length; i++) {
//      document.write(`${fruits[i]} <br/> `);

//  }
//      for (let x = 0; x < fruits.length; x++) {
//         document.write(`Element at ${fruits[x],x} is ${fruits[x]} <br/> `);         
//      }




/////////_________6(a)_____________////////

//   var arr=[1,2,3,4,5,6,7,8,9];
// for (let i = 1; i < arr.length; i++) {
//     document.write(`${arr[i]}<br>`);
// }



/////////_________6(b)_____________////////

//var arr=[1,2,3,4,5,6,7,8,10];

//////___1st Method____/////
//   arr.reverse()
//   document.write(arr);


//////___2nd Method____/////
// for (let i = arr.length-1; i > -1 ; i--) {
//     // arr.reverse(arr);
//     document.write(`${arr[i]}<br>`);
// }



/////////_________6(c)_____________////////

// for (let i = 0; i < 18; i+=2) {

//     document.write("even number",i,"<br>");
// }


/////////_________6(d)_____________////////

// for (let i = 1; i < 18; i+=2) {

//     document.write("odd number",i,"<br>");
// }



/////////_________6(e)_____________////////

//   var arr=["1K","2K","3K","4K","5K","6K","7K","8K","9K","10K","11K","12K",];

// for (let i = 1; i < arr.length; i+=2) {

//     document.write(`${arr[i]}  , `);
// }



/////////_________7_____________////////


//var arr=["cake","apple pie","cookie","chips","patties"];

// for (let i = 0; i < 1; i++) {
//     var ee=prompt("Wellcome to ");


// }

// var inp = prompt("Enter input..");

// const find =arr.filter((val,ind)=>{

//     console.log(object)
//    return val===inp
// })

// console.log(find)



// if(ee===arr)
// {
//   document.write("cookie is avaliable",ee);
// }
// else{"Not Avaliable"}
//     document.write(ee);




/////////_________8_____________////////


/////////__1st Method___////////

// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
// const min = Math.min(...arr)
// document.write(min);


/////////__2nd Method___////////

// var arr=[23,45,7,21,56];
// for (let x = 0; x < arr.length; x++) {
//     document.write(`Array items:${arr[x] }<br>`);
// }
// let max = 0 ;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// document.write(`The Largest Number:${max}<br>`)



/////////_________9_____________////////




// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
// const max = Math.max(...arr)
// document.write(max);




/////////_________10____________////////


// var table = 5;
// var length = 11;

// for (let i = 1; i < length; i++) {
//         document.write(`${i * table}<br>`);
// }




/////////_________11____________////////


// var score = [12, 13, 45, 34, 55];
// var user = prompt("Enter pick value");

// for (let i = 0; i < score.length; i++) {
//     if (score[i] <= Number(user)) {

//         document.write(`${score[i]}<br>`)
//     }
// }



/////////_________12____________////////



// for (let i = 0; i < 18; i++) {
    
//      if( i % 2===0 ){
//         document.write(`even:${i}<br>`);
//    }
//    else if(i % 2!==0){
//     document.write(`odd:${i}<br>`);
//     }
// }


/////////_________etc________////////


//  var color=["Green","Red","Blue"]
//  var user=prompt("Give me index number");
//  //var user1=prompt("Add Color Name");

//  var w=color.splice(0,user,color);
//  //var w=color.slice(0,user);
//  document.write(w);
     


// var com=["ss","dd","ff","gg"]
// for (let i = 0; i < com.length; i++) {
//     document.write()
// }
    

//////_______13_____//////


// let a = 1;

// for(let i = 0 ; i < 8 ; i++){
//     if(i % 2 !== 0){
//         a = i * a
//     }
// }

// console.log(a);

    
//////______14_____//////


// var user=7;
// let str="";
// for (let i = 0; i < user; i++) {
// for (let x = 0; x < user - i; x++){
//     str +="*";
// }
//   str += "<br>";
// }
// document.write(str);


//////______15_____//////

//a)
// var user=prompt("Enter Number");
// let str="";
// for (let i = 0; i < user; i++) {
// for (let x = 0; x < user; x++){
//     str +="*";
// }
//   str += "<br>";
// }
// document.write(str);



//b)
// var user=prompt("Enter Number");
// let str="";
// for (let i = 1; i <= user; i++) {
// for (let x = 0; x < i; x++){
//     str +="*";
// }
//   str += "<br>";
// }
// document.write(str);



//c)
// var user=prompt("Enter Number");
// let str="";
// for (let i = 0; i <= user; i++) {
// for (let x = 0; x < user - i; x++){
//     str +="*";
// }
//   str += "<br>";
// }
// document.write(str);



//d)
// let user=prompt("Enter Number");
// let str="";
// for (let i = 1; i < user; i++) {
//     for (let x = 0; x < i; x++) {
//       str +="*"
//     }
//     str += "<br>";
// }

// for (let i = 1; i <= user-1; i++) {
//     for (let x = 0; x < user-i; x++) {
//         str +="*";
//     }
//   str +="<br>"
// }
// document.write(str);
