const isLeapYear = require('./leap-years');

describe('isLeapYear', () => {
    it('returns false if number is not divisible by 4', () => {
        expect(isLeapYear(2009)).toEqual(false)
    });
});
