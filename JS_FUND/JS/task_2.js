var myArray = [4, 5, 6]; 
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 4 + 5 + 6 = 15
console.log(myArray.reduce(reducer)); 