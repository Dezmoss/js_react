/* 
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'),
        userInput = document.querySelector('.adding__input');



    adv.forEach(item => { item.remove(); });

    document.querySelector('.promo__genre').textContent = 'ДРАМА';

    document.querySelector('.promo__bg').style.cssText =
        'background-image: url("img/bg.jpg")';

    movieDB.movies.sort();

    movieList.innerHTML = '';

    movieDB.movies.forEach((movie, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${movie} 
            <div class="delete"></div>
        </li>
        `;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userInputValue = userInput.value;

        if (userInputValue != '') {
            if (userInputValue.length > 21) {
                userInputValue = userInputValue.slice(0, 21) + '...';
            }
            movieDB.movies.push(userInputValue);
            movieDB.movies.sort();
            movieList.innerHTML = '';
            movieDB.movies.forEach((movie, i) => {
                movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${movie} 
                    <div class="delete"></div>
                </li>
                `;
            });
        }
    });

    const del = document.querySelectorAll('.delete'),
        items = movieList.querySelectorAll('.promo__interactive-item .delete');

    for (let deleteButton of del) {
        deleteButton.addEventListener('click', (event) => {
            console.log(event.target);
            console.log(event.target.previousSibling);
            console.log('asdf');
        });
    }

});

