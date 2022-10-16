// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (isNaN(minutes) || minutes < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    } else {
        const hours = Math.floor(minutes / 60),
            minutesLast = minutes % 60;
        let hoursString;

        if (hours == 1) {
            hoursString = 'час';
        } else if (hours == 2 || hours == 3 || hours == 4) {
            hoursString = 'часа';
        } else {
            hoursString = 'часов';
        }
        return (`Это ${hours} ${hoursString} и ${minutesLast} минут`);
    }
}

// Место для второй задачи
function findMaxNumber(...args) {
    if (args.length < 4) { return 0; }
    for (let i of args) {
        if (typeof (i) === 'string') { return 0; }
    }

    return Math.max.apply(null, args);

}

console.log(findMaxNumber(1, 3, 4));
