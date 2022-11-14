//function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

const exportedfn=require('./filter.js');

const items = [1, 2, 3, 4, 5, 5];       // sample array

function cb(ele){               //sample callback fn to find if element is greter than 3 or not
    return (ele>3);
}
console.log(exportedfn.filterProblem(items,cb));