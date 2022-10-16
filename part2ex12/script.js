const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) != 'string') {
        return 'Ошибка!';
    } else {
        return str.split('').reverse().join('');
    }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const fullCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    } else {
        let result = 'Доступные валюты:\n';
        for (let currency of arr) {
            if (currency === missingCurr) {
                continue;
            } else {
                result += `${currency}\n`;
            }
        }
        return result;
    }
}

console.log(availableCurr(fullCurrencies, 'CNY'));