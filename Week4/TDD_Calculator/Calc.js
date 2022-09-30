

const Calculator = (num1, num2, arg) => {
    const Add = (num1 + num2)
    const Sub = (num1 - num2)
    const Mul = (num1 * num2)
    const Div = (num1 / num2)

    const objLit = {
        "add": Add,
        "sub": Sub,
        "mul": Mul,
        "div": Div
    }
    return (objLit[arg])
}

module.exports = Calculator;