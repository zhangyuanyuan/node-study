import { expect } from 'chai';

describe('Arithmetic', () => {
    it('should calculate 1 + 1 correctly', () => {
        const expectedResult = 2;

        expect(1 + 1).to.equal(expectedResult);
    });
});

describe('Timeout', () => {
    it('should call the callback', (done) => {
        setTimeout(() => done(), 500);
    });

    it('should succeed when promise is resolved', () => {
        const result = Promise.resolve('success');

        return result.then(function(value) {
            expect(value).to.equal('success');
        });
    });
});