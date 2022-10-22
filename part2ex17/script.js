'use strict';

function amountOfPages(summary) {
    let str = '';
    let i = 1;
    while (str.length < summary) {
        str += i;
        i++;
    }

    return --i;
}

console.log(amountOfPages(1095));