module.exports = function Conditionals(arg) {
    const mul3 = (arg % 3);
    const mul7 = (arg % 7);

    if (mul3 == 0 && mul7 == 0) {
        return `Good Evenin`
    }
    else if (mul3 == 0) {
        return `Good Morning`
    }
    else if (mul7 == 0) {
        return `Good Afternoon`
    }
    else if (arg == 1) {
        return 1
    }
    else if (arg == 2) {
        return 2
    }
    else if (!mul3 == 0 || !mul7 == 0) {
        return `${arg}`
    }
    else {
        return 'Error it must be a number.'
    }
}