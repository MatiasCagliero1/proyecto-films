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


window.addEventListener('load', function () {

    // Captar busqueda de la url
    var queryString = location.search; //te trae todo despues de el signo ?
    var queryStringObj = new URLSearchParams(queryString); //Lo tranforma en un objeto
    var busqueda = queryStringObj.get('search');

    //LLAMAR HTML
    var busquedasection = document.querySelector(".search");
    var nonsearch = document.querySelector(`.nosearch`);

    //SINO BUSCASTE o No
    if (busqueda == "") {

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
        fetch(`https://api.themoviedb.org/3/search/company?api_key=637047833ce3a40c01c36c4fd05c9c57&query=${busqueda}&page=1`)
            .then(function (response) {
                return response.json();
            })

            .then(function (information) {
                console.log(information);

                information.results.forEach(element => {
                    busquedasection.innerHTML += `
                    
                    <div class="each-info" id="${element.id}">
                    <h3>${element.name}</h3>
                </div>
            <a class="imgclass" href="detalles.html?IdMovie=${element.id}">
            <button>Ver Detalle</button>
        </a> `
                });

                //SI NO HAY RESULTADOS
                if (information.length <= 0) {
                    nonsearch.style.display = "none";
                    nonsearch.innerHTML = `
            <h2>¡No se ha encontrado resultados!</h2>
            <p>Podés probar denuevo con otro termino de busqueda.</p>`
                } else {
                    nonsearch.style.display = "block";
                }



            });
    };


})