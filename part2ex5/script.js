const lines = 5;
let result = '';
let stars = 1;
let numberOfSpaces = lines;

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < numberOfSpaces; j++) {
        result += ' ';
    }
    for (let j = 0; j < stars; j++) {
        result += '*';
    }
    console.log(result);
    result = '';
    stars += 2;
    numberOfSpaces--;
}