/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        var meta_title = document.querySelector("#meta_title");
        var meta_description = document.querySelector("#meta_description");

        meta_title.innerHTML = ` ${information.favoritos.meta_title} `;
        meta_description.innerHTML = ` ${information.favoritos.meta_description} `;
    })

   //Pre Cargar Página
   var loadpage = document.querySelector(".loadpage");
   loadpage.innerHTML += `<span class="spin" uk-spinner="ratio: 10"></span><h2 class"loadh2">Cargando Pagina</h2>`
   var allbody = document.querySelector(".totalbody");
   allbody.style.display="none";

//Cargar favoritos del Storaje
var favoritosvar = localStorage.getItem('favoritosstring');
var favoritosId = JSON.parse(window.localStorage.getItem('favoritosstring'));
//return favoritosId.filter(["", null, NaN, undefined]);

if (favoritosId === null) { 
    favoritosId = []
}
else{
    favoritosId = favoritosId.filter(x => x !== null)
}

// Favoritoscon Array vacio
var general_fav = document.querySelector(".favoritos-general");
var favnone = document.querySelector(`.nonefav`);

function nonefav() {
    if (favoritosId.length <= 0 || favoritosId == "") {
        general_fav.style.display = "none";
        favnone.innerHTML = `
            <h2>¡Todavía no tenés favoritos!</h2>
            <p>Podés agregarlo desde Inicio con el botón de favoritos a la derecha de la foto.</p>`
    } else {
        general_fav.style.display = "block";
    }
}

nonefav();


function sacarfavoritos(a) {
    var position = favoritosId.indexOf(a)
    
    delete favoritosId[position];

    general_fav.innerHTML = '';

    if (favoritosId.length >= 1) { //CARGA TODO EL ARRAY OTRA VEZ
        cargararray();
        savefavoritos();
    }

    nonefav(); // HAY FAVORITOS?, SINO MOSTRAR MENSAJE 
}


//Agregar Los favoritos provenientes de la Index segun el Array

function cargararray() {
    favoritosId.forEach(element => {
        fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
            .then(function (response) {
                return response.json();
            })

            .then(function (information) {
                general_fav.innerHTML += `
                <div class="each-pelicula">
               <a class="imgclass" href="detalles.html?IdMovie=${information.id}">
                    <img id="movie_img" src="https://image.tmdb.org/t/p/w500${information.backdrop_path}"
                        alt="${information.title} Portada">
                
                    <div class="each-info" id="${information.id}">
                        <h3>${information.title}</h3>
                        <p>${information.overview}</p>
                    </div>
                </a>
                <button id="${information.id}" class="borrar" onclick="sacarfavoritos(${information.id})">Eliminar de Favoritos</button>
            </div> `
            })
    });

};

cargararray();

// Guardar Array final en Storaje
function savefavoritos() {
    localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');
}

window.addEventListener('load', function () {

    loadpage.style.display="none";
    allbody.style.display="block";
})