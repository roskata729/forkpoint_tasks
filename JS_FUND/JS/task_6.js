// 6.	Write a JavaScript conditional statement to find the largest of five numbers. 
//Display an alert box to show the result.
function largestNumberOfFive(a,b,c,d,f){
    if (a>b && a>c && a>d && a>f)
    {
        return a;
    }
    else if (b>a && b>c && b>d && b>f)
    {
        return b;
    }
    else if (c>a && c>b && c>d && c>f)
    {
        return c;
    }
    else if (d>a && d>c && d>b && d>f)
    {
        return d;
    }
    else
    {
        return f;
    }
}
console.log(largestNumberOfFive(1,4,7,8,5));