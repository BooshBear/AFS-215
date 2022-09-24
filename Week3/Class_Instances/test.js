const Case = require("./script")

const inst1 = new Case(1)
console.log(inst1.callCase())

const inst2 = new Case(3)
console.log(inst2.callCase())

const inst3 = new Case(7)
console.log(inst3.callCase())

const inst4 = new Case(21)
console.log(inst4.callCase())

const inst5 = new Case('pie')
console.log(inst5.callCase())
