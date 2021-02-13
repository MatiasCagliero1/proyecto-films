/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        /* CAMBIAR METAS-SEO */
        var meta_title = document.querySelector("#meta_title");
        document.querySelector('meta[name="description"]').setAttribute(meta_description, _desc);



        meta_title.innerHTML = ` ${information.index.meta_title} `;
    })


    
   //Pre Cargar Página
   var loadpage = document.querySelector(".loadpage");
   loadpage.innerHTML += `<span class="spin" uk-spinner="ratio: 10"></span><h2 class"loadh2">Cargando Pagina</h2>`
   var allbody = document.querySelector(".totalbody");
   allbody.style.display="none";

   

//Cargar favoritos del Storaje
var favoritosvar = localStorage.getItem('favoritosstring');
var favoritosId = JSON.parse(window.localStorage.getItem('favoritosstring'));


if (favoritosId === null) {
    favoritosId = []
} else {
    favoritosId = favoritosId.filter(x => x !== null)
}

function agregarfavoritos(a) {

    favoritosId.push(a);
    savefavoritos();
    colorfavoritos();
}


//Cambio de Color Botón Favoritos
function colorfavoritos() {
    var favsvg = document.querySelector(`.favcall`);

    if (favoritosId.length >= 1) {
        favsvg.style.backgroundColor = "red";
    } else {
        favsvg.style.backgroundColor = "black";
    }
}

colorfavoritos();

// Guardar Array final en Storaje
function savefavoritos() {
    localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');
}





setTimeout(function(){ 

    loadpage.style.display="none";
    allbody.style.display="block";

    /* Imágenes DEL Carrusel */
    let carruselimg = [{
        "id": 1,
        "ruta": "Assets/Peliculas/Franjas/alex_rider.jpg",
    }, {
        "id": 2,
        "ruta": "Assets/Peliculas/Franjas/Pacto de Fuga.jpg",
    }, {
        "id": 3,
        "ruta": "Assets/Peliculas/Franjas/The boys.jpg",
    }, {
        "id": 4,
        "ruta": "Assets/Peliculas/Franjas/this_is_us.jpg",
    }]
    /* Agregar Peliculas al Carrusel */
    var carrusel = document.querySelector(".fotoscarrusel")
    carruselimg.forEach(element => {
        carrusel.innerHTML += `
       <li><img class="img-carru" src="${element.ruta}" alt=""></li>
    `
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


    /* AGREGAR PELICULAS 2*/
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=637047833ce3a40c01c36c4fd05c9c57')
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


    /* AGREGAR PELICULAS 3*/
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=637047833ce3a40c01c36c4fd05c9c57')
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


    /* AGREGAR PELICULAS 4*/
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=637047833ce3a40c01c36c4fd05c9c57')
        .then(function (response) {
            return response.json();
        })
        .then(function (information) {
            var peliculasthree = document.querySelector('#peliculasthree')

            for (let i = 0; i < 20; i++) {
                const element = information.results[i];

                peliculasthree.innerHTML += `
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


}, 0500);