// 1

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// 2

for (let i = 20; i >= 10; i--) {
    if (i == 13) {
        break;
    }
    else {
        console.log(i);
    }
}

// 3

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 4

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}

// 5

let arrayOfNumbers = [];
let index = 0;
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[index] = i;
    index++;
}
console.log(arrayOfNumbers);
