/* Default array */
let chars = ['yellow', 'blue', 'red', 'green', 'blue', 'brown', 'red'];

/* Set is a collection of unique values. To remove duplicates from an array: */
let uniqueChars = new Set(chars);

/* Array.from() method that creates a new array from an array-like or iterable object. */
let toArray = Array.from(uniqueChars);

console.log("Default array - " + chars);
console.log("Remove duplicate array - " + toArray);



