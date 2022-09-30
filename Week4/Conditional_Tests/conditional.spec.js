const Conditionals = require('./conditonal')
const {expect} = require('chai')
expect

describe('Conditionals', ()=>{
    it('expect test', ()=>{
        expect(Conditionals()).to.equal(0)
    })
    it('expect 1', ()=>{
        expect(Conditionals(1)).to.equal(1)
    })
    it('expect 2', ()=>{
        expect(Conditionals(2)).to.equal(2)
    })
    it('expect 3 = Good Morning', ()=>{
        expect(Conditionals(3)).to.equal('Good Morning')
    })
    it('expect 7 = Good Afternoon', ()=>{
        expect(Conditionals(7)).to.equal('Good Afternoon')
    })
    it('expect 21 = Good Evenin', ()=>{
        expect(Conditionals(21)).to.equal('Good Evenin')
    })
    it('expect 5 = 5', ()=>{
        expect(Conditionals(5)).to.equal('5')
    })
})