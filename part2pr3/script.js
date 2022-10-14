/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let userInput;

function start() {
    userInput = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (userInput == '' || userInput == null || isNaN(userInput)) {
        userInput = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: userInput,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');
    if (a === '' || a.length > 50 || a === null || b === '' || b === null) {
        i--;
        continue;
    } else {
        personalMovieDB.movies[a] = b;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log('Произошла ошибка');
}