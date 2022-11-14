//const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    let flattenedArray=[];
    flatRecursive(elements,0);


    function flatRecursive(arr,index)
{
    if(Array.isArray(arr[index]))   // checks if the element is an array or not
    {
        flatRecursive(arr[index],0);    // sends it to recursion with the 0th element of the sub array
    }

    else if(index>=arr.length)  // checks if the working index is out of bounds of the current array boundary
    {
        return;
    }   
    else    // if none of the above, then the element has to be a standalone number
    {
        flattenedArray.push(arr[index]); // push it into the output array
    }
    flatRecursive(arr,index+1);   // increasing the index pointer by 1 for the next level of recursion
}
    return flattenedArray;
}


module.exports.flattenProblem=flatten;