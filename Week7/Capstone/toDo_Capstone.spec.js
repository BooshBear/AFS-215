const {expect} = require('chai')
expect;
const ToDoClass = require('./toDo_Capstone')

describe("Testing for ToDo", ()=>{
    it("Test 1, Showing array", ()=>{
        // const instance = new ToDoClass;
        expect(instance.showArray()).to.eql(["pie", "coin", "pencil"])
    })
    it("Test 2, adding an item", ()=>{
        // const instance = new ToDoClass;
        expect(instance.addToAry("magic")).to.equal("magic")
    })
    it("Test 3, adding multiple items", ()=>{
        // const instance = new ToDoClass;
        expect(instance.addMulToAry(["magic", "cookies"])).to.eql(["magic", "cookies"])
    })
    it("Test 4, remove first item", ()=>{
        // const instance = new ToDoClass;
        expect(instance.removeFirstItem()).to.equal("pie");
    })
    it("Test 5, remove last item", ()=>{
        // const instance = new ToDoClass;
        expect(instance.removeLastItem()).to.equal("pencil");
    })
    it("Test 6, remove specific item", ()=>{
        // const instance = new ToDoClass;
        expect(instance.removeSpcItem("coin")).to.eql(["coin"]);
    })

    beforeEach(()=>{
        instance = new ToDoClass();
    })
})