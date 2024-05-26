// MATH EXPRESSIONS

document.write(`<h1>Assigment 6 to 9</h1>`)


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// // browser:

document.write(`<h5>Result</h5>`)

document.write(`<h5>the value of a is: 10</h5>`)


// document.write(`<h5>..........................</h5>`)
var a = 10;

var result = ++a

document.write(result);
document.write(`<h5>the value of ++a is: 11</h5>`)
document.write(`<h5> now the value of a is: 11</h5>`)

var a = 11

var result = a++
document.write(result);
document.write(`<h5>the value of ++a is: 11</h5>`)
document.write(`<h5>now the value of ++a is: 12</h5>`);

var a = 12;
var result = --a;
document.write(result);

document.write(`<h5>the value of --a is: 11</h5>`)
document.write(`<h5>now the value of a is: 11</h5>`);


var a = 11;
var result = a--;
document.write(result);

document.write(`<h5>the value of --a is: 11</h5>`)
document.write(`<h5>now the value of a is: 10</h5>` + "<br>" + "<br>");


// Q2
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write(result  +"is ans" +"<br>")

// --a; 2
// --a - --b; 2-1
// --a - --b + ++b; 2- 1+ 1
// --a - --b + ++b + b--;  2- 1+ 1+1 ;

document.write("a is:2" +"<br>")
document.write("b is:1"+"<br>" )
document.write("ans is:3"+ "<br>")





// 3. Write a program that takes input a name from user &
// greet the user.


var greet =prompt(" whats is your name?")
alert ("welcome to my house")

// 4.



// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

  var num=prompt(" enter any number",5  +"<br>");
  
  document.write(`
  ${num}x1=${num*1} `+ "<br>")

  document.write(`
  ${num}x2=${num*2} `+ "<br>")

  document.write(`
  ${num}x3=${num*3} `+ "<br>")

  document.write(`
  ${num}x4=${num*4} `+ "<br>")

  document.write(`
  ${num}x5=${num*5} `+ "<br>")

  document.write(`
  ${num}x6=${num*6} `+ "<br>")

  document.write(`
  ${num}x7=${num*7} `+ "<br>")

  document.write(`
  ${num}x8=${num*8} `+ "<br>")

  document.write(`
  ${num}x9=${num*9} `+ "<br>")

  document.write(`
  ${num}x10=${num*10} `+ "<br>")
  
  
 






// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.

// b) Total marks for each subject is 100, store it in another
// variable.

// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

//  var  subject1=prompt ("enter the name of the first subject");
//  var subject2= prompt("enter the name of the second subject");
//  var subject3= prompt("enter the name of the third  subject");

//  var totalMarks=100;

//  var obtainedMarks1= (54);
//  var obtainedMarks2= (54);

//  var obtainedMarks3=(48);

//  var totalMarksObtained=subject1+subject2+subject3;
//  var



