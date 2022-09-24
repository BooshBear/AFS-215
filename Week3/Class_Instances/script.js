

module.exports = class Case {
    constructor(num1) {
        this.num1 = num1
    }

    callCase() {
        const mul3 = (this.num1 % 3);
        const mul7 = (this.num1 % 7);

        if (mul3 == 0 && mul7 == 0) {
            return `Good Evenin`
        }
        else if (mul3 == 0) {
            return `Good Morning`
        }
        else if (mul7 == 0) {
            return `Good Afternoon`
        }
        else if (!mul3 == 0 || !mul7 == 0) {
            return `${this.num1}`
        }
        else {
            return 'Error it must be a number.'
        }
    }
}