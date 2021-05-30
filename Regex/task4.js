const emailString = /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/;

function testInfo(testString) {
    let OK = emailString.exec(testString);
    if (!OK) {
      console.error(testString + ' is not a valid email');
    } else {
      console.log('The following email is correct: ' + testString);
    }
} 
testInfo('roskata728@gmail.com'); //true
testInfo('roskata728@gmailcom');  //false
testInfo('roskata728@gmail+.com');  //false
testInfo('roskata728@gmail-.com');  //false
testInfo('roskata728@gmail*.com');  //false
