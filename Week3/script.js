module.exports = class User {
    constructor(num1, num2, name = 'dylan', age = '18') {
        this.num1 = num1
        this.num2 = num2
        this.name = name
        this.age = age
    } 
    greeting() {
        return `Hello ${this.name} (age ${this.age}) this is my code.`
    }
    math(){
        return this.num1 + this.num2
    }
    other(){
        return `${this.num1}` + `${this.num2}`
    }
}
