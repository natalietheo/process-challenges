const isLeapYear = (year) => { 
    // if year is not divisible by 4, it is not a leap year
    if (year % 4 !== 0)
    return false;

    // if year is divisible by 400, it is a leap year
    if (year % 400 === 0)
    return true;

    // if year is divisible by 100 but not by 400, it is not a leap year
    if (year % 100 === 0 && year % 400 !== 0)
    return false;

    // if year is divisible by 4 but not by 100, it is a leap year
    if(year % 4 === 0 && year % 100 !== 0)
    return true;

   else return false;
}

module.exports = isLeapYear;