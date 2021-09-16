/*
Exercise 4:
Create a function named helloWorlds using looping and conditionals that has the following requirements:
1) Takes a number as parameter 
2) Will check whether the param is a number or not a number
3) If the param is a number, output “Hello World” x num
Otherwise, if not a number output “Goodbye World”
*/

function helloWorlds(num) {
    if (isNaN(num)) {
      console.log("Goodbye World");
    } else {
      for (i=0; i < num; i++) {
        console.log("Hello World");
      }   
    }
  }