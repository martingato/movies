/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La-la land",
        "Obsession",
        "Scott Pilgrim Vs. The World"
    ]
};

const adv = document.querySelector('.promo__adv-title');
adv.style.color='red';

// const advHidden = document.querySelector('.promo__adv');
// advHidden.style.visibility='hidden';

const advHidden = document.querySelectorAll('.promo__adv img');
advHidden.forEach(item => {
    item.remove();
});

// const genre = functioin {
//     let film = document.querySelector('.promo__genre');
//     return(film);

//     genre = 'drama';
// };

