/*
function reversedNum(num) {
    return (
      parseFloat( 
        num
          .toString() //Makes num into a string
          .split('') // Splits num to chars
          .reverse() // Reverses the order of the chars
          .join('') // Joins the chars into a string
      ) * Math.sign(num) // Adds the sign of the number
    )                 
  }
  console.log(reversedNum(-45600)); 
  */
  function reverseNumber(n){
    let digit, result = 0

    while( n ){
        digit = n % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n/10|0 //  Remove right-most digit. Ex. 123 → 12.3 → 12
        
    }  
  
    return result
}

console.log(reverseNumber(1234));