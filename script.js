const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false

    
};
const theLastFilmWatched = prompt("Один из последних просмотренных фильмов?","");
const estimationOfTheFilm = prompt("На сколько оцените его?", "");
personalMovieDB.movies[theLastFilmWatched] = estimationOfTheFilm;

console.log(personalMovieDB);