//function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
//}

const exportedfn=require('./each.js');

const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function cb(ele, i) // i have provided this cb just as an example to demonstrate that the code is running
 {
     return ele*2;
 }


console.log(exportedfn.problemEach(items,cb));