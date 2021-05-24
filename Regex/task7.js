const ipAddressSeparator = /\./;

function validateIpAddress(myIP) {
    
    for ( const element of myIP.split(ipAddressSeparator) ){
            if(element < 0 || element > 255){
                return false;
            }
        };
    return true;
}
console.log(validateIpAddress('0.0.0.0'));          //true
console.log(validateIpAddress('8.8.8.8'));          //true
console.log(validateIpAddress('192.168.0.1'))       //true
console.log(validateIpAddress('255.255.255.255'));  //true
console.log(validateIpAddress('256.5.1.512'));      //false