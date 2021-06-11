/*
    21.	According to Wikipedia a happy number is defined by the following process: 
    "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
    and repeat the process until the number equals 1 (where it will stay), 
    or it loops endlessly in a cycle which does not include 1. 
    Those numbers for which this process ends in 1 are happy numbers, 
    while those that do not end in 1 are unhappy numbers (or sad numbers)". 
    Write a JavaScript program to find and print the first 5 happy numbers.
*/
function happyNumber(number){
    var currentDigit;
    var sumOfSquares;
    var myArray = [];


    while(number != 1 && myArray[number] !== true){
        myArray[number] = true;
        sumOfSquares = 0;
        while(number > 0){
            currentDigit = number % 10;
            sumOfSquares += currentDigit * currentDigit;
            number = (number - currentDigit) / 10;
        }
        number = sumOfSquares;
    }
    return (number == 1);
}

var countOfHappyNumbers = 5;
var number = 1;
var arrayOfHappyNumbers = [];

while (countOfHappyNumbers-- > 0){
    
    while(!happyNumber(number))
        number++;
    arrayOfHappyNumbers.push(number);
    number++;
}
console.log('The first 5 happy numbers are: ' + arrayOfHappyNumbers.join(','));