/*
Exercise 3:
Create a function named findOddOrEven that has the following requirements:
Takes zero parameters
Write a for loop that will iterate from 0 to 10. 
For each iteration, it will check if the current number is even or odd, and then output
number is even or number is odd
*/

function findOddEven() {
    for (var i = 0; i <= 10; i++) {
        oddEven = i %2 == 0? "even" : "odd"; 
        console.log('/n' + i + ' is ' + oddEven);
    }
  }
  
  