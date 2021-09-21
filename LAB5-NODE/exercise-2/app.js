const compare = require('./comparer');
const calculate = require('./calculator');

let compareAndCalculate = (x, y) => {

    calculate.x = x;
    calculate.y = y;

    compare.x = x;
    compare.y = y;

    if(compare.AreNumberEqual(x,y)) {
        console.log('numbers are equal');
        console.log(calculate.Add(x,y));
    } 
    else {
        console.log('numbers are not equal');
        console.log(calculate.Subtract(x,y));
    }  

}

compareAndCalculate(5,10);
compareAndCalculate(5,5);






