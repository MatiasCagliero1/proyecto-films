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


    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=637047833ce3a40c01c36c4fd05c9c57')

        
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {

            for (let i = 0; i < 6; i++) {
                const element = information.results[i];

                var general_fav = document.querySelector(".favoritos-general");

                general_fav.innerHTML += `
                <div class="each-pelicula" id="${element.id}">
                <div class="imgclass">
                    <img id="movie.img" src="https://image.tmdb.org/t/p/w500${element.backdrop_path}"
                        alt="${element.title} Portada">
                
                    <div class="each-info" id="${element.id}">
                        <h3>${element.title}</h3>
                        <p>${element.overview}</p>
                    </div>
                </div>
                <button>Eliminar de Favoritos</button>
            </div>

            `

            }
        });

})