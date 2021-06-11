const phoneString = /^(?:0|\+359)\d{6,9}$/;
function testInfo(testString) {
    let OK = phoneString.exec(testString);
    if (!OK) {
      console.error(testString + ' is not a valid string');
    } else {
      console.log('The following string is correct: ' + testString);
    }
} 
testInfo('0876783446');      //true
testInfo('+359878785765');   //true
testInfo('06546');           //false
testInfo('+35958246975423'); //false