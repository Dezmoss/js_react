// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (isNaN(a) || a < 0 || !Number.isInteger(a)) {
        return 'При вычислении произошла ошибка';
    } else {
        const cubeVolume = Math.pow(a, 3),
            cubeSquare = Math.pow(a, 2) * 6;

        return `Объем куба: ${cubeVolume}, ` +
            `площадь всей поверхности: ${cubeSquare}`;
    }
}

// Место для второй задачи
function getCoupeNumber(a) {
    if (isNaN(a) || a < 0 || !Number.isInteger(a)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (a === 0 || a > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(a / 4);
    }
}