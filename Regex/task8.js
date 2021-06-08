function testDate(testString) {
    const dateSeparator = /^([1-2][0,9][1-2][0-9])([0-1][1-9])([0-3][0-9])/;
    const dateRegex = dateSeparator.exec(testString);
    if (!dateRegex) {
        return false;
    } else {
        const year = dateRegex[1];
        const month = dateRegex[2];
        const day = dateRegex[3];

        console.log(dateRegex[0]);

        console.log(year,month,day);

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