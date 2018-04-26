// Write a function that takes in a year and returns whether it's a leap year. 
// Determining a leap year is as follows 
// If a year is divisible by 4 it is a leap year unless it's divisible by 100. However, if it's divisible by 400 it is a leap year 


function isLeapYear(year){
    if((year%4 === 0 && year%100 !== 0) || year%400 === 0){
        console.log(year + ' is a leap year');
    }
    else{
        console.log(year + ' is not a leap year');
    }
}