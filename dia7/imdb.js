
let counter = document.getElementById("movieInfo");

class Movie {

    constructor(title, releaseYear, actor, nacionality, director,
        writer, language, platform, isMCU, mainChar, producer, distrib, genre, moviePicture, actorPicture,) {


        this.Título = title;
        this.Año = releaseYear;
        this.Actor = actor;
        this.Nacionalidad = nacionality;
        this.Director = director;
        this.Guionista = writer;
        this.Idioma = language;
        this.Plataforma = platform;
        this.Marvel = isMCU;
        this.Protagonista = mainChar;
        this.Productora = producer;
        this.Distribuidora = distrib;
        this.Género = genre;
        this.Portada = `<img src=" ${moviePicture}">`;
        this.Retrato = `<img src=" ${actorPicture}">`;
    }

    consolePrintMovie() {
        let resultado = "";
        for (let value in this) {
            resultado += "<b>" + value + "</b>" + ": " + this[value] + "<br>";

        } return resultado
    }
}
class Imdb {

    constructor(peliculas) {
        this.peliculas = peliculas;

    }
    movieInfo() {

        for (let i = 0; i < this.peliculas.length; i++) {
            counter.innerHTML += `<p> ${this.peliculas[i].consolePrintMovie()} </p>`
        }
    }
}


let movie1 = new Movie("Dune", 2021, "Timothée Chalamet ", "Estado Unidense", "Denis Villeneuve", "Eric Roth", "Inglés", "Cine", false, "Paul Leto Atreides", "Denis Villeneuve", "HBO max", "Ciencia Ficción / Space Opera", "https://www.ecartelera.com/carteles/15100/15118/003_m.jpg", "https://i.pinimg.com/originals/6e/94/f2/6e94f271ce78a82c33ddfd1f37905ad0.jpg");
let movie2 = new Movie("León el Profesional", 1994, "Jean Reno", "Francesa", "Luc Besson", "Luc Besson", "Francés", "Cine", false, "Leon", "Gaumont Film Company", "Columbia Pictures", "Policiaco", "https://pics.filmaffinity.com/El_profesional_L_on-557321821-large.jpg", "https://www.alohacriticon.com/wp-content/uploads/2016/02/jean-reno-foto-biografia.jpg");
let movie3 = new Movie("La Naranja Mecánica", 1971, "Malcolm McDowell ", "Británico", "Stanley Kubrick", "Stanley Kubrick", "Inglés", "Cine", false, "Alexander «Alex» DeLarge", "Hawk Films", "Warner Bros.", "Ciencia Ficción", "https://pics.filmaffinity.com/La_naranja_mec_nica-964766200-large.jpg", "https://cdn.semana.es/wp-content/uploads/2021/06/malcolm-mcdowell-min.jpg");



let imdbA = new Imdb([movie1, movie2, movie3]);
let movieInput = new Movie();
let imdbB = new Imdb([movieInput]);



// atentosiempre al tipo de dato Jorgitoooo 
function addMovie() {

    movieInput.Título = document.getElementById("input01").value;
    movieInput.Año = document.getElementById("input03").value;
    movieInput.Actor = document.getElementById("input04").value;
    movieInput.Nacionalidad = document.getElementById("input05").value;
    movieInput.Director = document.getElementById("input06").value;
    movieInput.Guionista = document.getElementById("input07").value;
    movieInput.Idioma = document.getElementById("input08").value;
    movieInput.Plataforma = document.getElementById("input09").value;
    movieInput.Marvel = document.getElementById("input10").value;
    movieInput.Protagonista = document.getElementById("input11").value;
    movieInput.Productora = document.getElementById("input12").value;
    movieInput.Distribuidora = document.getElementById("input13").value;
    movieInput.Género = document.getElementById("input02").value;
    movieInput.Portada = `<img src=" ${document.getElementById("input14").value}">`;
    movieInput.Retrato = `<img src=" ${document.getElementById("input15").value}">` ;

    imdbB.peliculas.concat(imdbA.peliculas)
    imdbB.movieInfo();
}
imdbA.movieInfo();









