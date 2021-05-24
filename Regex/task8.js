function testDate(testString) {
    const dateSeparator = /^[0-9]{4}[0-9]{2}[0-9]{2}/;
    const isValidDate = dateSeparator.exec(testString);
    if (!isValidDate) {
        return false;
    } else {
        const year = testString.slice(0,4);
        const month = testString[4] + testString[5];
        const day = testString[6] + testString[7];

        let maxDays = 31;

        
            if(month == '02'){
                //leap year
                if(year % 4 == 0){
                    maxDays = 29;
                }
                else{
                    maxDays = 28;
                }
            }
            else if(month == '04' || month == '06' || month == '09' || month == '11')
                maxDays = 30;
               
        
        if(day > maxDays) return false;
        if(month > 12) return false;
        return true;
    }
} 
console.log(testDate('20200230')); // false
console.log(testDate('20201330')); // false
console.log(testDate('20200229')); // true