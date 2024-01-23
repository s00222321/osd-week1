import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('should contain USD', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('USD');
    });
    it('should contain GBP', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('GBP');
    });
    it('should contain EUR', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('EUR');
    });
    it('should not contain CAD', () => {
        const currencies = getCurrencies();
        expect(currencies).not.toContain('CAD');
    });
});
