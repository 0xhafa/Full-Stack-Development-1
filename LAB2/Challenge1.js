/*
Challenge 1:
Create a function named greaterThanSize that has the following requirements:
- Takes no parameters
- Calculates a random local variable named size
Does a while loop that does the following 
- increments a counter by one
- output the current size and counter 
- continues until the counter is greater than the size
The output will be different every time, because the size number will be different
*/

function greaterThanSize() {

    let size = Math.floor(Math.random()*100) + 1;
    let counter = 1;
  
    while(size >= counter) {
      console.log("The current size is "+size +" and count is " + counter);
      counter++;
    }
  }
  