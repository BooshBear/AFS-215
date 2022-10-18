const {expect} = require('chai')
expect;
const ToDoClass = require('./toDo_Capstone')

describe("Testing for ToDo", ()=>{
    it("Test 1, Showing array", ()=>{
        const instance1 = new ToDoClass;
        expect(instance1.showArray()).to.eql(["pie", "coin", "pencil"])
    })
    it("Test 2, adding an item", ()=>{
        const instance2 = new ToDoClass;
        expect(instance2.addToAry("magic")).to.equal("magic")
    })
    it("Test 3, adding multiple items", ()=>{
        const instance3 = new ToDoClass;
        expect(instance3.addMulToAry(["magic", "cookies"])).to.eql(["magic", "cookies"])
    })
    it("Test 4, remove first item", ()=>{
        const instance4 = new ToDoClass;
        expect(instance4.removeFirstItem()).to.equal("pie");
    })
    it("Test 5, remove last item", ()=>{
        const instance5 = new ToDoClass;
        expect(instance5.removeLastItem()).to.equal("pencil");
    })
    it("Test 6, remove specific item", ()=>{
        const instance6 = new ToDoClass;
        expect(instance6.removeSpcItem("coin")).to.eql(["coin"]);
    })
})