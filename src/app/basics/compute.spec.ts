import {compute} from './compute';

describe ('compute', () => {
    it('Ellen Woodward - S00222321', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should return 0 if the input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should not return 0 if the input is negative', () => {
        const result = compute(1);
        expect(result).not.toBe(0);
    });
    it('should return input+1 if the input is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
    it('should return greater than input if input is positive', () => {
        const result = compute(1);
        expect(result).toBeGreaterThan(1);
    });
    it('should return less than input+2 if input is positive', () => {
        const result = compute(1);
        expect(result).toBeLessThan(3);
    });
})