//function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function 
    //once for each element in an array, in order, 
    //and function constructs a new array from the res .
    // Produces a new array of values by mapping each value in list 
    //through a transformation function (iteratee).
    // Return the new array.

const exportedfn=require('./map.js');

const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function cb(ele, i) // i have provided this cb just as an example to demonstrate that the code is running
 {
     return ele*2;
 }


console.log(exportedfn.problemMap(items,cb));