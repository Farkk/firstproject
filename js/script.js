'use struct';

const movieDB = {
    movies: [],
};

const addForm = document.querySelector('.form'),
      addInput = addForm.querySelector('.form__input'),
      movieList = document.querySelector('.film__list');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 25)}...`;
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    
        createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
});

const createMovieList = (films, parent) => {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `<li class="film__list-item">${i + 1}.${film}
            <div class="delete"></div>
        </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });
    });
};

const sortArr = (films) => {
    films.sort();
};

createMovieList(movieDB.movies, movieList);