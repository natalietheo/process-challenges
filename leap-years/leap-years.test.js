const isLeapYear = require('./leap-years');

describe('isLeapYear', () => {
    it('returns false if number is not divisible by 4', () => {
        expect(isLeapYear(2009)).toEqual(false)
    });

    it('returns true if divisible by 400', () => {
    expect(isLeapYear(2000)).toEqual(true)
});

    it('returns false if divisible by 100 and not divisble by 400', () => {
    expect(isLeapYear(1700)).toEqual(false)
    expect(isLeapYear(1800)).toEqual(false)
    expect(isLeapYear(1900)).toEqual(false)
    }
    )

    it('returns true if years divisible by 4 but not by 100', () => {
        expect(isLeapYear(2004)).toEqual(true)
        expect(isLeapYear(2008)).toEqual(true)
        expect(isLeapYear(2012)).toEqual(true)
    })
});

