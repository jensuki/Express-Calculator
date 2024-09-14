// tests
const { mean, median, mode } = require('./helpers');

// test 'mean' function
describe('mean function', () => {
    it('calculates the mean of an array of numbers', () => {
        expect(mean([1, 2, 3, 4, 5])).toBe(3);
        expect(mean([10, 20, 30])).toBe(20);
    })

    it('returns 0 for empty array', () => {
        expect(mean([])).toBe(0);
    })
})

// test 'median' function
describe('median function', () => {
    it('calculates the median of an odd-lengthed array of numbers', () => {
        expect(median([1, 3, 5])).toBe(3);
        expect(median([3, 1, 5])).toBe(3);
    })

    it('calculates the median of an even-lengthed array of numbers', () => {
        expect(median([1, 2, 3, 4])).toBe(2.5);
    })
})

// test 'mode' function
describe('mode function', () => {
    it('calculates the mode of an array of numbers', () => {
        expect(mode([1, 2, 2, 3])).toBe(2);
    })
    it('returns multiple modes if more than one value has the same highest frequency', () => {
        expect(mode([1, 2, 2, 4, 4])).toBe(2, 4);
    })
    it('returns "No mode" if all numbers appear only once', () => {
        expect(mode([1, 2, 3, 4, 5])).toBe('No mode');
    })
})

