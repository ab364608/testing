const {kata, getSum, getMiddle, findEvenIndex} = require('../functions');

function sum(a, b) {
    if(a === undefined || b === undefined) {
        return undefined
    } else {
        return a + b;
    }
}
describe(`"SUM" should return the correct and necessary values`, () => {
    test(`"SUM" function should return the sum of its parameters`, () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(2, 3)).toBe(5);
    });
    test(`"SUM" function should return undefined if not passed 2 numbers`, () => {
        expect(sum()).toBe(undefined);
    });
});

describe(`"KATA" should return the correct and necessary values`, () => {
    test(`"KATA" function should return the square of each digit. 99 should return 8181`, () => {
        expect(kata(99)).toBe(8181);
    });
    test(`"KATA" should handle strings of numbers. '99' should return 'Please enter a number'`, () => {
        expect(kata('99')).toBe('Please enter a number');
    });
});