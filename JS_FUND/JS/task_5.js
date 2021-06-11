function reversedAdjacentDigits(number) {
    var numbers = Array.from(String(number), Number);

    for(var i = 0;i<numbers.length;i+=2){
    //Swaps the values
    var temp = numbers[i];
    numbers[i] = numbers[i+1];
    numbers[i+1] = temp;
    }
    
    return numbers;
}
console.log(reversedAdjacentDigits(4567)); 
