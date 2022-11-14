//const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

//function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

const exportedfn=require('./flatten.js');

const nestedArray = [1, [2], [[3], 6], [[[4]]]];  // sample array
console.log(exportedfn.flattenProblem(nestedArray));