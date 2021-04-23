// 8.	Write a JavaScript function to check whether an `input` is an array or not.
var input = [1,2,3,4];
function isTheInputAnArray(input){
    return Array.isArray(input) ? console.log('The input is an array') : console.log('The input is NOT an array');
}
isTheInputAnArray(input);