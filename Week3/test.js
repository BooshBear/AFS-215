const User = require("./script")

const instance = new User(2, 4)
console.log(instance.greeting())
console.log(instance.math())
console.log(instance.other())

const instance2 = new User(6, 8)
console.log(instance2.greeting())
console.log(instance2.math())
console.log(instance2.other())