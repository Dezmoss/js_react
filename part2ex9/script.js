function fib(a) {
    if (isNaN(a) || a < 1 || !Number.isInteger(a)) { return ''; }

    if (a === 1) { return '0'; }
    else if (a === 2) { return '0 1'; }
    else {
        let arr = [0, 1],
            result = '0 1';
        for (let i = 2; i < a; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
            result += ` ${arr[i]}`;
        }

        return result;
    }
}
