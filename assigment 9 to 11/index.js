// // // USER INPUT & CONDITIONAL
// // // STATEMENT



// // // 1. Write a program to take “city” name as input from user. If
// // // user enters “Karachi”, welcome the user like this:

// // var cityName = prompt("what is your city name?")
// // alert("“Welcome to city of lights”")








// // // 2. Write a program to take “gender” as input from user. If the
// // // user is male, give the message: Good Morning Sir. If the
// // // user is female, give the message: Good Morning Ma’am.
// // // var  gander=prompt(" are u mail or femail?")
// // // if{mai}

// // var gender = prompt("are you mail or femail?");
// // if (gender = "mail") {
// //     alert("Good morning sir")

// // }
// // if (gender == "femail") {
// //     alert("Good morning Ma'am.")
// // }
// // else {
// //     alert("code me galti h");
// // }



// // // 3. Write a program to take input color of road traffic signal
// // // from the user & show the message according to this table:
// // // Signal color Message
// // // Red Must Stop
// // // Yellow Ready to move
// // // Green Move now
// // // var roadcColor=prompt("")

// // var roadcColor = prompt("which color you see in traffic signal")
// // if (roadcColor = "red") {
// //     console.log("Red must stop")
// // }

// // if (roadcColor = "yellow") {
// //     console.log("Yellow ready to mave")
// // }
// // if (roadcColor = "Green") {
// //     console.log("Green Move now")
// // }
// // else {
// //     console.log(" bus yehi three colours allowed he")
// // }


// // // 4. Write a program to take input remaining fuel in car (in
// // //     litres) from user. If the current fuel is less than 0.25litres,
// // //     show the message “Please refill the fuel in your car”

// // var fuel = prompt("how many fuel remaining in the car")
// // if (fuel = "<0.25liters") {
// //     alert("“Please refill the fuel in your car”")
// // }
// // // 5. Run this script, & check whether alert message would be
// // // displayed or not. Record the outputs.

// // var a = 4;
// // if (++a === 5) {
// //     alert("given condition for variable a is true");
// // }


// // var b = 82;
// // if (b++ === 83) {
// //     alert("given condition for variable b is true");
// // }


// // var c = 12;
// // if (c++ === 13) {
// //     alert("condition 1 is true");
// // }
// // if (c === 13) {
// //     alert("condition 2 is true");
// // }
// // if (++c < 14) {
// //     alert("condition 3 is true");
// // }


// // if (c === 14) {
// //     alert("condition 4 is true");
// // }

// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost) {
// //     alert("The cost equals");
// // }

// // if(true) {
// //     alert("True")
// // }
// // if (false) {
// //     alert("False");
// // }
// // if("car" < "cat") {
// //     alert("car is smaller than cat");
// // }


// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:


//  var sub=+prompt("which marks you get in english");
// alert("Aone")
//  var sub1=+prompt("which marks you get in urdu");
//  alert("B")

//  var sub2=+prompt("which marks you get in math");
// alert("A")

//  var obtainedMarks=(sub+sub1+sub2);
//  var totalMarks=(300);
//  var percentage=(obtainedMarks/totalMarks)*100;

//  if ("percentage<=80"){
//    document.write("exellent") ;

//  }
// else if("percentage<=70"){
//      document.write("good")
//  }
//  else if("percentage< =60"){
//      document.write("you need improvement")
//  }


// else if("percentage>60"){
//     document.write("sorry you fail")

//  }
// else{
//      ("repeat class")

//  }
document.write (`$<h1>MARKS SHEET</h1>`)




// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct
// // answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.

// var getNum =prompt("Can you guess which no is secret ");

// var guessNum =7;
// if(guessNum=7){
//     alert(" “Bingo! Correct answer”.")
// }
//  else if(guessNum==8){
//     alert("“Close enough to the correct answer”")
// }

// else{
// ("sorry you are  fail")
// } 








// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


// var checkNum = prompt("whether the given number is divisible by 3");
// var num = 24;


// if (num / 3) {
//     alert("the number is devided by 3")
// }
// else {
//     (" number wrong he")
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var num = +prompt("number is even or odd?")
// if (num == 4) {
//     alert("number is even")
// }

// else {
//     (" number is odd")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var  takeTemperature=prompt("bahir ki kya sorate hal h")
// var T=50;

// if(T>40){
// alert("“It is too hot outside.”")
// }

// else if(T>30){
//     alert("“The Weather today is Normal.”")
// }

// else if(T>20){
//     alert("“Today’s Weather is cool.”")

// }


// else if("T>10"){
//     alert("“OMG! Today’s weather is so Cool.”")

// }
// else {
//     ("barish ho rahi h")
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

 var calculator=prompt("what is result");
num1=10;
num2=2;

var result=num1+num2;
document.write( result+"<br>");

num1=15;
num2=5;

var result=num1-num2;
document.write( result+"<br>");

num1=8;
num2=9;

var result=num1*num2;
document.write( result+"<br>");

num1=50;
num2=5;

var result=num1/num2;
document.write( result+"<br>");

num1=50;
num2=25;

var result=num1;
var percentage=(obtainedmarks/totalMarks)*100

document.write( result+"<br>");