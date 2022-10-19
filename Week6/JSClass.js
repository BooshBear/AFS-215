

module.exports = class Jsclass {
    constructor(ary = []){
        this.ary = ary;
    }

    appendToAry(item) {
        this.ary.push(item);
        return item
    }

    showAry() {
        return this.ary;
    }
    
    removeItem(item) {
        if (this.ary.includes(item) == true) {
            this.ary.remove(item)
        }
    }

    searchItem(item) {
        if (this.ary.includes(item) == true) {
            return item;
        } else {
            return console.error("Sorry doesn't exist");
        }
    }
}