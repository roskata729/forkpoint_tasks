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