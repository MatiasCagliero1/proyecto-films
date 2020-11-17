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


window.addEventListener('load', function () {

    //Cargar favoritos del Storaje
    var favoritosvar = localStorage.getItem('favoritosstring');
    var favoritosId = JSON.parse(window.localStorage.getItem('favoritosstring'));


    //Agregar Los favoritos provenientes de la Index segun el Array
    var general_fav = document.querySelector(".favoritos-general");

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
                    <img id="movie.img" src="https://image.tmdb.org/t/p/w500${information.backdrop_path}"
                        alt="${information.title} Portada">
                
                    <div class="each-info" id="${information.id}">
                        <h3>${information.title}</h3>
                        <p>${information.overview}</p>
                    </div>
                </a>
                <button id="borrar">Eliminar de Favoritos</button>
            </div> `

                    // Botón de Borrar favoritos
                    var deletefavoritos = document.querySelector(`#borrar`);
                    console.log(deletefavoritos);
                });
        });
    };
    
    cargararray();


    // Borrar favoritos tocando el botón
    general_fav.addEventListener("click", function () {
        favoritosId.pop(``); //REMPLAZAR PARA SACAR EN FINNCÓN DE ESE ID

      general_fav.innerHTML =  '' ; // BORRA TODAS LAS PELICULAS

        if (favoritosId.length >= 1) {  //CARGA TODO EL ARRAY OTRA VEZ
             cargararray();
        }
        nonefav(); // HAY FAVORITOS?, SINO MOSTRAR MENSAJE
    })


    // Favoritoscon Array vacio
    var favnone = document.querySelector(`.nonefav`);

    function nonefav() {
        if (favoritosId.length <= 0) {
            general_fav.style.display = "none";
            favnone.innerHTML = `
            <h2>¡Todavía no tenés favoritos!</h2>
            <p>Podés agregarlo desde Inicio con el botón de favoritos a la derecha de la foto.</p>`
        } else {
            general_fav.style.display = "block";
        }
    }

    nonefav();

    // Guardar Array final en Storaje
    localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');
    console.log(favoritosvar);
})