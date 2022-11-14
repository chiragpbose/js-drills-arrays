function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
let output;
    for(let index =0; index< elements.length; index++)
    {
        output=cb(elements[index]);
        if(output===true) return output;
    }
    return undefined;

};
module.exports.findProblem=find;