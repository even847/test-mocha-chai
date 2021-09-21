var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    it ('El valor true es verdadero', () => {
        expect( true ).to.equal(true);
        expect( true ).to.be.true;
        expect( 1 + 1 > 0 ).to.be.true;
    });
    it('El valor false es falso', () => {
        expect( false ).to.equal(false);
        expect( false ).to.be.false;
        expect( 1 + 1 < 0 ).to.be.false;
    })
    it('1 es de tipo número', () => {
        expect( numero ).to.be.a('number');
        expect( typeof numero ).to.be.equal('number');
    });
    it('1 NO es de tipo string', () => {
        expect( typeof numero === 'string' ).to.be.false;
        expect( typeof numero === 'string' ).to.be.equal(false);
    });
    it('1 NO es de tipo booleano', () => {
        expect( typeof numero === 'boolean' ).to.be.false;
        expect( typeof numero === 'boolean' ).to.be.equal(false);
    });

});

