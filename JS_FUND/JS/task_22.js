/*
    22.	You’re given 2 out of 3 angles in a triangle (in degrees). Write a function 
    that classifies the missing angle as either “acute”, “right” or “obtuse” based on its degrees:
●	An acute angle is one smaller than 90 degrees.
●	A right angle is one that is exactly 90 degrees.
●	An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
*/
function typeOfMissingAngle(firstAngle,secondAngle){
    var missingAngle = 180 - (firstAngle + secondAngle);

    if(missingAngle < 90) return "acute";
    else if(missingAngle == 90) return "right";
    else if(missingAngle > 90) return "obtuse";
}
console.log(typeOfMissingAngle(130,90)); // 40 - acute
console.log(typeOfMissingAngle(45,45)); // 90 - right
console.log(typeOfMissingAngle(60,15)); // 105 - obtuse