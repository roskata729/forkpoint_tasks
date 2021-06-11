//(\?|\&)([^=]+)\=([^&]+)
const domainParameterSeparator = /\W/;

function getAllDomainParameters(testString) {
    const arrayOfParameters = testString.split(domainParameterSeparator);

    const filtered = arrayOfParameters.filter(function(e) {
        return e!='';
    })
    return  filtered;
}
console.log(getAllDomainParameters('ftp://johnsmith@my.domain.com:8080/path/to/resource/file.txt'));
console.log(getAllDomainParameters('https://www.google.com/search?q=notpron'));