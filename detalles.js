var queryString = location.search; //te trae todo despues de el signo ?
var queryStringObj = new URLSearchParams(queryString); //Lo tranforma en un objeto
var idmovie = queryStringObj.get('IdMovie');

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

//Pre Cargar Página
var loadpage = document.querySelector(".loadpage");
loadpage.innerHTML += `<span class="spin" uk-spinner="ratio: 10"></span><h2 class"loadh2">Cargando Pagina</h2>`
var allbody = document.querySelector("#mainbody");
allbody.style.display = "none";


//LLAMAR HTML
var nombremoviee = document.querySelector(".nombremovie");
var fechacreacion = document.querySelector(".fechacreacion");
var duracion = document.querySelector(".duracion");
var descripcion = document.querySelector(".descripcion");
var img = document.querySelector(".imagen");
var iconcorazon = document.querySelector(".iconcorazon");



 
setTimeout(function () {

    loadpage.style.display = "none";
    allbody.style.display = "block";


    fetch(`https://api.themoviedb.org/3/movie/${idmovie}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
        .then(function (response) {
            return response.json();
        })

        .then(function (information) {
            var meta_title = document.querySelector("#meta_title");
            meta_title.innerHTML = ` ${information.original_title} `;
        });


    fetch(`https://api.themoviedb.org/3/movie/${idmovie}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
        .then(function (response) {
            return response.json();
        })

        .then(function (information) {
            nombremoviee.innerHTML = ` ${information.original_title} `;
            fechacreacion.innerHTML = `Release Date: ${information.release_date} `;
            duracion.innerHTML = `Run Time: ${information.runtime} minutes`;
            descripcion.innerHTML = `Overview: ${information.overview}`;
            img.innerHTML = `  <img class="foto" src="https://image.tmdb.org/t/p/w500${information.backdrop_path}" alt="">`
        });


    //AGREGAR PELICULAS
    /* AGREGAR PELICULAS 1*/
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=637047833ce3a40c01c36c4fd05c9c57')
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

}, 1000);



function favoritos (){
    
var botonfav = document.querySelector(".BOTONFAVORITO");
    var idpelicula = parseInt(idmovie)

    favoritosId.push(idpelicula);
    savefavoritos();

}