const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris',
    'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    const teams = [[], [], [], 'Оставшиеся студенты: '];
    let count = 0;

    const newArr = arr.slice().sort();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            teams[i].push(newArr[count]);
            count++;
        }
    }
    if (students.length == 9) {
        teams[3] += '-';
    } else {
        for (let i = count; i < students.length; i++) {
            teams[3] += `${newArr[i]}, `;
        }
        teams[3] = teams[3].slice(0, teams[3].length - 2);
    }
    return teams;
}

console.log(sortStudentsByGroups(students));