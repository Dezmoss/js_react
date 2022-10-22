function deepCount(a) {
    let result = 0;

    a.forEach(element => {
        result++;
        if (Array.isArray(element)) {
            result += deepCount(element);
        }
    });

    return result;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));