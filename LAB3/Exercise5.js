/*
Challenge 1:
Using array.proto.reduce create calculate the sum and product of a given array.
*/

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((prev, curr) => prev + curr);
const calculateProduct = array.reduce((prev, curr) => prev * curr);

console.log(calculateSum);
console.log(calculateProduct);