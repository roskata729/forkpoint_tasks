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

        switch(month){
            case '02' : {
                //leap year
                if(year % 4 == 0){
                    maxDays = 29;
                }
                else{
                    maxDays = 28;
                }
                break;
            }
            case '04' : {
                maxDays = 30;
                break;
            }
            case '06' : {
                maxDays = 30;
                break;
            }
            case '09' : {
                maxDays = 30;
                break;
            }
            case '11' : {
                maxDays = 30;
                break;
            }
        }
        if(day > maxDays) return false;
        if(month > 12) return false;
        return true;
    }
} 
console.log(testDate('20200230')); // false
console.log(testDate('20201330')); // false
console.log(testDate('20200229')); // true