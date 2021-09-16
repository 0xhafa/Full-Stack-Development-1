/*
Exercise 2:
Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
and for..of
*/

gretter = (myArray) => {
    let greetText = 'Hello ';
    for(let i of myArray) {
      console.log(greetText + i);
    }
}
  
  