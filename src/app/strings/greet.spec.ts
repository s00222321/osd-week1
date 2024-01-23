import {greet} from './greet';

describe('greet', () => {
    it('it should include the name in the message', () => {
        expect(greet('Frank')).toContain('Frank');
    });
    it('should not include the name in the message', () => {
        expect(greet('Mary')).not.toContain('Frank');
    });
})