/*
    19.	Write a JavaScript program which iterates the integers from 1 to 100. 
    But for divisible numbers of three print "Fizz" instead of the number 
    and for the divisible numbers of five print "Buzz". 
    For divisible numbers of both three and five print "FizzBuzz".
*/
function fizzBuzz(){
    for(var i = 1;i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i + " FizzBuzz")
        }
        else if(i % 3 == 0){
            console.log(i + " Fizz")
        }
        else if(i % 5 == 0){
            console.log(i + " Buzz")
        }
    }
}
fizzBuzz();