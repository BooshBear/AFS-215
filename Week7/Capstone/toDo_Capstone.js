// You have learned how to perform TDD using Python & JavaScript. 
// The choice is yours as to which language you would like to use for this project. 
// You only have to use one language. 
// Create a Todo list that can accomplish the following:

//     Call the list
//     Add an item to the list
//     Add multiple items to the list
//     Remove the first item from the list
//     Remove the last item from the list
//     Remove a specific item from the list

module.exports = class ToDoClass {
    constructor(arrayOfStuff = ["pie", "coin", "pencil"]) {
        this.arrayOfStuff = arrayOfStuff
    }
    
    showArray(){
        return this.arrayOfStuff;
    }
    addToAry(item){
        this.arrayOfStuff.push(item);
        return item;
    }
    addMulToAry(items){
        for (let i = 0; i < items.length; i++) {
            this.arrayOfStuff.push(items[i]);
        }
        return items;
    }
    removeFirstItem(){
        return this.arrayOfStuff.shift()
    }
    removeLastItem(){
        return this.arrayOfStuff.pop()
    }
    removeSpcItem(item){
        const findindx = this.arrayOfStuff.indexOf(item)
        return this.arrayOfStuff.splice(findindx, 1)
    }
}