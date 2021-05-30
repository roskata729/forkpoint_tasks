/*
    1.	Write two functions using Promises which could be chained. 
    The first function, capitalize(), which will take array of words and capitalize them,
    and then the second function, sortWords(), will sort the words in alphabetical order. 
    If the array contains anything but strings, it should throw an error.
*/

let myWords = ['zxc','firstWord', 'secondWord', 'thirdWord'];

const makeCaps = (words) => new Promise((resolve, reject) => {
    if(words.every(word => typeof word === 'string')){
        resolve(words.map(word => word.toUpperCase()))
    }
    else
    {
        reject(Error('Not all elements are of type string'))
    }
})
const sortAllWords = (words) =>new Promise((resolve,reject) => {
    if(words.every(word => typeof word === 'string')){
        resolve(words.sort())
    }
    else
    {
        reject(Error('Not all elements are of type string'))
    }
})
makeCaps(myWords)
    .then(words => sortAllWords(words))
    .then(words => console.log(words))
    .catch(error => console.log(error))