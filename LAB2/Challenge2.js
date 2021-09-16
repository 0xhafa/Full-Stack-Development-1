/*
Challenge 2:
Create a function named reverseIt that has the following requirements:
- Takes a parameter myArr which will always be an array
- Will return an array in reverse order
*/

function reverseIt(myArr) {

    let revArr = [];
  
    for(let i=0; i < myArr.length; i++) {
      revArr[i] = myArr[myArr.length - 1 -i];
    }
  
    return revArr;
}
