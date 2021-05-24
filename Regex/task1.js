let re = /[a-z]{2}(_[A-Z]{2})?$/;
function testInfo(testString) {
  let OK = re.exec(testString);
  if (!OK) {
    console.error(testString + ' is not a valid string');
  } else {
    console.log('The following string is correct: ' + OK[0]);
  }
} 
testInfo('fr');
testInfo('bg_BG');
testInfo('en_EN');