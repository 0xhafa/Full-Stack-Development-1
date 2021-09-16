/*
Challenge 3:
Create a script file challenge3.js with the following requirements
- Create a function named getKeyValuePairs that will take a object as an parameter
- Returns the keys and values as separate arrays
- The keys and values may be in the same original order

*/

function getKeyValuePairs(obj) {

    return [Object.keys(obj), Object.values(obj)]; 
   
}