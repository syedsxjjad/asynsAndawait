///////_____1______////////

// var d=new Date();
// document.write(d);



///////_____2______////////

// const month = ["January","February","March","April","May","June"
// ,"July","August","September","October","November","December"];

// const d = new Date();
// let nam = month[d.getMonth()];
// document.write("Current Month:" , nam)



///////_____3______////////

// const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
// "Saturday"];
// const d = new Date();
//  let nam = day[d.getDay()];
//  var s=nam.slice(0,3);
//  document.write("Current Days:" , s)




///////_____4______////////



// const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
// "Saturday"];
// const d = new Date();
// let nam = day[d.getDay()];    

// if (nam === "Saturday" || nam === "Sunday") {
//     document.write("Current Days: Its Fun Day")
// }
// else{
  
//     document.write("Current Days:" , nam)
// }
 


///////_____5______////////

// const d = new Date();
// let nam = d.getDay();
// if ( nam <= 15) {
//     console.log("First Fiften of the month")
//     document.write("First Fiften of the month") 
// }
//  else{
//     document.write("Last Days of the month") 
//  }



///////_____6______////////

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)



///////_____7______////// in complete

// const d = new Date();
// let time = d.getTime();

// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;
// let years = Math.round(d.getTime() / year);

// document.write(year)


// const d = new Date();
// let years = Math.round(d.getTime() / year);
// document.write(year)




///////_____8______//////

 // Here a date has been assigned
//    // while creating Date object
//    var d = 
//    new Date('October 13, 1996 05:35:32');
  
//    // new date 15 of the month is being set
//    // in above Date Object with the help of 
//    // setDate() method
//    d.setDate(15);
  
//    // new date of the month from above Date
//    // Object is being extracted using getDate()
//    var B = d.getDate();
  
//    // Printing new date of the month
//    document.write(B);




///////_____13______//////

// var age=prompt("Whats Your Age");



// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
      
    
//     }



///////_____14______//////

// var cus="Syed";
// var cmnt="Jan";
// var nunts=410;
// var CPUnits=15;
// var latechrge=250;

 
// var napwWd= nunts*CPUnits;

// var GrsamntaD=napwWd + latechrge

// document.write(`Customer Name: ${cus}<br>Month: ${cmnt}<br>Number of units: ${nunts}<br> charge per unit: ${CPUnits}<br> Net Amount Payable(within Due Date): ${napwWd}<br>Late payment surcharge: ${350}<br> Gross Amount Payable(After Due Date): ${GrsamntaD} `)


