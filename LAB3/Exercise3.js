/*
Exercise 3:
Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
the first character of each Color in the following array..
*/

const colors = ['red','green','blue'];

const capitalizedColors = colors.map(x => x[0].toUpperCase() + x.slice(1));

console.log(capitalizedColors);