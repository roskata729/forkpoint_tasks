const passwordRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{8,64})/;
function testPassword(testString) {
    let OK = passwordRegex.exec(testString);
    if (!OK) {
      console.error(testString + ' is not a valid password');
    } else {
      console.log('The following password is correct: ' + testString);
    }
}
testPassword('aaaaaaaaAAAAAAAAAAA000000000'); //true
testPassword('aaaaaaaaaaaaaAAAAAAAAAAAAAA');  // false
testPassword('ZZZZZZZZZZZZZZZZZZ999999999');  // false
testPassword('aaaaaaaaaaaaa90423409234aaa');  // false