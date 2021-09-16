/*
Exercise 6:
Create a function named emptyArray that has the following requirements:
- Takes a parameter myArray which will always be an array
- Write a loop that will continue to iterate until the array is empty
- For each iteration, remove an element from the array
- Before the function exits it will return the value of myArray
*/

function emptyArray(myArray) {
    myArrayLength = myArray.length
    for(i=0; i < myArrayLength; i++) {
      myArray.pop();
    }
    return myArray;
  }
  