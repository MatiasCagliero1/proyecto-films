/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        var meta_title = document.querySelector("#meta_title");
        var meta_description = document.querySelector("#meta_description");

        meta_title.innerHTML = ` ${information.search.meta_title} `;
        meta_description.innerHTML = ` ${information.search.meta_description} `;
    })

    //Pre Cargar Página
    var loadpage = document.querySelector(".loadpage");
    loadpage.innerHTML += `<span class="spin" uk-spinner="ratio: 10"></span><h2 class"loadh2">Cargando Pagina</h2>`
    var allbody = document.querySelector(".totalbody");
    allbody.style.display="none";



    setTimeout(function(){ 


    loadpage.style.display="none";
    allbody.style.display="block";

    // Captar busqueda de la url
    var queryString = location.search; //te trae todo despues de el signo ?
    var queryStringObj = new URLSearchParams(queryString); //Lo tranforma en un objeto
    var busqueda = queryStringObj.get('search');

    //LLAMAR HTML
    var busquedasection = document.querySelector(".favoritos-general");
    var nonsearch = document.querySelector(`.nosearch`);

    //SINO BUSCASTE o No
    if (busqueda === null | busqueda === "") {

        console.log("No escribiste nada");
        busquedasection.style.display = "none";
        nonsearch.innerHTML = `
<h2>¡Buscá tu pelicula o serie!</h2>
<p>Podés probar con "Acción" o "Mad Max".</p>`
    } else {
        busquedasection.style.display = "block";
        cargararray();
    }

    //Agregar Los favoritos provenientes de la Index segun el form
    function cargararray() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=637047833ce3a40c01c36c4fd05c9c57&language=en-US&query=${busqueda}&page=1&include_adult=false`)
            .then(function (response) {
                return response.json();
            })

            .then(function (information) {
                // Si el Array Está vacio
                if (information.results.length <= 0) {
                    busquedasection.style.display = "none";
                    nonsearch.innerHTML = `
            <h2>¡No se ha encontrado resultados!</h2>
            <p>Podés probar denuevo con otro termino de busqueda.</p>`
                } else {
                    
                    nonsearch.style.display = "block";

                    information.results.forEach(element => {
                        busquedasection.innerHTML += `
                        <div class="each-pelicula">
                        <a class="imgclass" href="detalles.html?IdMovie=${element.id}">
                             <img id="movie_img" src="https://image.tmdb.org/t/p/w500${element.backdrop_path}"
                                 alt="${element.title} Portada">
                         
                             <div class="each-info" id="${information.id}">
                                 <h3>${element.original_title}</h3>
                                 <p>${element.overview}</p>
                             </div>
                         </a>
                         <button id="${element.id}" onclick="window.location.href='detalles.html?IdMovie=${element.id}'" class="borrar">Ver Detalles</button>
                     </div>`
                    });
                }
            });
    };

}, 3000);