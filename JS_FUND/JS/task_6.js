// 6.	Write a JavaScript conditional statement to find the largest of five numbers. 
//Display an alert box to show the result.
const myNumbers = [1,6,3,8,5];
function largestNumber(numbersArray){
    return Math.max.apply(null,numbersArray);
}
console.log(largestNumber(myNumbers));