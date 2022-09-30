const Calculator = require('./Calc')
const {expect} = require('chai')
expect

describe('My Calculator', () => {
    it('expect test', () => {
        expect(Calculator()).to.equal(0)
    })
    it('1+1=2', () => {
        expect(Calculator(1, 1, 'add')).to.equal(2)
    })
    it('5-3=2', () => {
        expect(Calculator(5, 3, 'sub')).to.equal(2)
    })
    it('2*3=6', () => {
        expect(Calculator(2, 3, 'mul')).to.equal(6)
    })
    it('4/2=2', () => {
        expect(Calculator(4, 2, 'div')).to.equal(2)
    })
})