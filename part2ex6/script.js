// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [--num, ++num, ++num];
}

// Место для третьей задачи
function getMathResult(a, b) {
    if (typeof (b) != 'number' || b <= 0) {
        return a;
    } else {
        let result = '';
        result += a;
        let temp = a;
        for (let i = 0; i < b - 1; i++) {
            result += `---${temp += a}`;
        }
        return (result);
    }
}
