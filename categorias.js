/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        /* CAMBIAR METAS-SEO */
        var meta_title = document.querySelector("#meta_title");
        var meta_description = document.querySelector("#meta_description");


        meta_title.innerHTML = ` ${information.categories.meta_title} `;
        meta_description.innerHTML = ` ${information.categories.meta_description} `;
    })
//TERMINE METAS


var queryString = location.search; //te trae todo despues de el signo ?
var queryStringObj = new URLSearchParams(queryString); //Lo tranforma en un objeto
var idmovie = queryStringObj.get('IdMovie');



//Pre Cargar Página
var loadpage = document.querySelector(".loadpage");
loadpage.innerHTML += `<span class="spin" uk-spinner="ratio: 10"></span><h2 class"loadh2">Cargando Pagina</h2>`
var allbody = document.querySelector("#mainbody");
allbody.style.display = "none";



//Cargar favoritos del Storaje
var favoritosvar = localStorage.getItem('favoritosstring');
var favoritosId = JSON.parse(window.localStorage.getItem('favoritosstring'));

if (favoritosId === null) {
    favoritosId = []
} else {
    favoritosId = favoritosId.filter(x => x !== null)
}
// Guardar Array final en Storaje
function savefavoritos() {
    localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');
}
function agregarfavoritos(a) {
    favoritosId.push(a);
    savefavoritos();
    colorfavoritos();
}


//llamar html
var movies = document.querySelector(".movies");
var cattouch = document.querySelector(".cattouch");


window.addEventListener('load', function () {

    loadpage.style.display = "none";
    allbody.style.display = "block";

    

    function renovarfavoritos(IdMovie) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=637047833ce3a40c01c36c4fd05c9c57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${IdMovie}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (information) {
            var peliculaszero = document.querySelector('#peliculaszero')

            for (let i = 0; i < 20; i++) {
                const element = information.results[i];
                peliculaszero.innerHTML += `
                <li class="ext">
                <a class="movie_a" href="detalles.html?tipo=peliculas&IdMovie=${element.id}">
                    <div class="eachmovie">
                        <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="">
                    </div>
                    <div class="movie_info">
                    <h2>${element.title}</h2>
                    <p>${element.overview}</p>
                    </div>
                </a>
        <button class="favcalladd" id="${element.id}" onclick="agregarfavoritos(${element.id})"><img src="Assets/Icons/corazon.svg" alt="Add-Favoritos">
            </li>
                            `
            }
        })

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=637047833ce3a40c01c36c4fd05c9c57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=${IdMovie}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (information) {
            var peliculasone = document.querySelector('#peliculasone')

            for (let i = 0; i < 20; i++) {
                const element = information.results[i];
                peliculasone.innerHTML += `
                <li class="ext">
                <a class="movie_a" href="detalles.html?tipo=peliculas&IdMovie=${element.id}">
                    <div class="eachmovie">
                        <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="">
                    </div>
                    <div class="movie_info">
                    <h2>${element.title}</h2>
                    <p>${element.overview}</p>
                    </div>
                </a>
        <button class="favcalladd" id="${element.id}" onclick="agregarfavoritos(${element.id})"><img src="Assets/Icons/corazon.svg" alt="Add-Favoritos">
            </li>
                            `
            }
        })
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=637047833ce3a40c01c36c4fd05c9c57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_genres=${IdMovie}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (information) {
            var peliculastwo = document.querySelector('#peliculastwo')

            for (let i = 0; i < 20; i++) {
                const element = information.results[i];
                peliculastwo.innerHTML += `
                <li class="ext">
                <a class="movie_a" href="detalles.html?tipo=peliculas&IdMovie=${element.id}">
                    <div class="eachmovie">
                        <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="">
                    </div>
                    <div class="movie_info">
                    <h2>${element.title}</h2>
                    <p>${element.overview}</p>
                    </div>
                </a>
        <button class="favcalladd" id="${element.id}" onclick="agregarfavoritos(${element.id})"><img src="Assets/Icons/corazon.svg" alt="Add-Favoritos">
            </li>
                            `
            }
        })
    }
    renovarfavoritos(idmovie); 
    
    
})