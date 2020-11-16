/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        /* CAMBIAR METAS-SEO */
        var meta_title = document.querySelector("#meta_title");
        var meta_description = document.querySelector("#meta_description");


        meta_title.innerHTML = ` ${information.favoritos.meta_title} `;
        meta_description.innerHTML = ` ${information.favoritos.meta_description} `;
    })

window.addEventListener('load', function () {
    
    var general_fav = document.querySelector(".favoritos-general");

    var favoritosId = ['671039', '400160', '400160']


    favoritosId.forEach(element => {
        fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
            .then(function (response) {
                return response.json();
            })

            .then(function (information) {

                general_fav.innerHTML += `
                <div class="each-pelicula">
               <a class="imgclass" href="detalle.html?IdMovie=${information.id}">
                    <img id="movie.img" src="https://image.tmdb.org/t/p/w500${information.backdrop_path}"
                        alt="${information.title} Portada">
                
                    <div class="each-info" id="${information.id}">
                        <h3>${information.title}</h3>
                        <p>${information.overview}</p>
                    </div>
                </a>
                <button id="borrar">Eliminar de Favoritos</button>
            </div> `

            });
    });


    var deletefavoritos = document.querySelectorAll(`#borrar`);

    //Borrar favoritos
    deletefavoritos.addEventListener('click', function () {

        favoritosId.pop(``);

        localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));

        var favoritosvar = localStorage.getItem('favoritosstring');

        console.log(favoritosvar);

        fetch(`https://api.themoviedb.org/3/movie/${favoritosId}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
            .then(function (response) {
                return response.json();
            })

            .then(function (information) {

                general_fav.innerHTML += `
                <div class="each-pelicula">
               <a class="imgclass" href="detalle.html?IdMovie=${information.id}">
                    <img id="movie.img" src="https://image.tmdb.org/t/p/w500${information.backdrop_path}"
                        alt="${information.title} Portada">
                
                    <div class="each-info" id="${information.id}">
                        <h3>${information.title}</h3>
                        <p>${information.overview}</p>
                    </div>
                </a>
                <button id="borrar">Eliminar de Favoritos</button>
            </div> `

            });


    })
})