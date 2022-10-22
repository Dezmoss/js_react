'use strict';

function isPangram(string) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
        'x', 'y', 'z'];

    for (let letter of string) {
        if (alphabet.indexOf(letter.toLowerCase()) != -1) {
            alphabet.splice(alphabet.indexOf(letter.toLowerCase()), 1);
        }
    }

    if (alphabet.length === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isPangram('he quick brown fox jumps over he lazy dog'));