function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements 
    //that passed the truth test
    // Return an empty array if no elements pass the truth test

    let output=[], flag=false;
    for(let index =0; index< elements.length; index++)
    {
        flag=cb(elements[index]);
        if(flag===true) output.push(elements[index]);
    }
    return output;
};
module.exports.filterProblem=filter;