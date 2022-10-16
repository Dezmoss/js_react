const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        return `Семья состоит из: ${arr.join(' ')}`;
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let city of arr) {
        console.log(`${city.toLowerCase()}`);
    }
}

console.log(showFamily(family));
console.log(standardizeStrings(favoriteCities));