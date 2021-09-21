/*
Exercise 5:
Create a function named buildArray that has the following requirements:
- Takes a parameter num
- Create a local variable named myArray
- Write a loop that will continue to iterate until the counter is greater than num. 
- For each iteration, it add to your counter value to your variable myArray
- Before the function exists it will return the value of myArray
*/

function buildArray(num) {
    var myArray = [];
    for(i=0; i< num; i++) {
      myArray.push(i);
    }
    return myArray;
}
  