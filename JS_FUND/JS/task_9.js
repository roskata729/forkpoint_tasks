/*
9.	Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
Note: According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, 
when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. 
For example, the GCD of 8 and 12 is 4.
*/
function gcdOfTwoNumbers(x, y) {
    //Absolute values of the variables
    // Scenario if x = 8 and y = 12
    x = Math.abs(x); // 8
    y = Math.abs(y); // 12
    while(y) {
      var t = y; // 12 , 12 , 4
      y = x % y; // 8 , 4 , 0
      x = t;     // 12 , 12 , 4
    }
    return x; // 4
  }
  
  console.log(gcdOfTwoNumbers(7, 13)); // 1
  console.log(gcdOfTwoNumbers(9, 3)); // 3
  console.log(gcdOfTwoNumbers(8, 12)); // 4