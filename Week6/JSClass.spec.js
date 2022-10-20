const Jsclass = require("./JSClass")
const {expect} = require('chai')
expect

describe("JSClass Testing", ()=>{
    it("Test 1 adding to array", ()=>{
        // const instance = new Jsclass;
        expect(instance.appendToAry("pie")).to.equal("pie");
    })
    it("Test 2, adding and showing item", ()=>{
        // const instance = new Jsclass;
        expect(instance.appendToAry("pie")).to.equal("pie");
        expect(instance.showAry()).to.eql(['pie']);
    })
    it("Test 3, finding specific item", ()=>{
        // const instance = new Jsclass;
        instance.appendToAry("1")
        instance.appendToAry("2")
        instance.appendToAry("3")
    
        expect(instance.searchItem("2")).to.equal("2");
    })

    beforeEach(()=>{
        instance = new Jsclass;
    })
    before(()=>{
        console.log("Test Start")
    })
    afterEach(()=>{
        console.log("Test Complete")
    })
    after(()=>{
        console.log("Test End")
    })
})
    
