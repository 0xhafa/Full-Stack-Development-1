/*
Exercise 4:
Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.
*/

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(x => x < 20);

console.log(filterLessThan20);