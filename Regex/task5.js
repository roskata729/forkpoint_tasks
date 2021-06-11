const namesSeparator= /\s/;

function writeSurnameThenName(testString) {
  const arrayOfNames = testString.split(namesSeparator);
  return  `${arrayOfNames[2]} ${arrayOfNames[0]}`;
  
}
console.log(writeSurnameThenName('Ceko Cekov Conkev'));
console.log(writeSurnameThenName('Rostislav Julianov Kolev'));
console.log(writeSurnameThenName('Ана-Мария Димитрова Петкова '));

