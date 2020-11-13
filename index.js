/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        /* CAMBIAR METAS-SEO */
        var meta_title = document.querySelector("#meta_title");
        var meta_description = document.querySelector("#meta_description");


        meta_title.innerHTML = ` ${information.index.meta_title} `;
        meta_description.innerHTML = ` ${information.index.meta_description} `;
    })


window.addEventListener('load', function () {


    /* Imágenes DEL Carrusel 

    let carruselimg = [{
        "id": 1,
        "ruta": "Assets/Peliculas/Franjas/The boys.jpg",
    }, {
        "id": 2,
        "ruta": "Assets/Peliculas/Franjas/Pacto de Fuga.jpg",
    }, {
        "id": 3,
        "ruta": "Assets/Peliculas/Franjas/The boys.jpg",
    }]

    /*  Agregar Peliculas al Carrusel

    var carrusel = document.querySelector(".fotoscarrusel")

    carruselimg.forEach(element => {

        carrusel.innerHTML += `
   
       <li> <img src="${element.ruta}" alt=""></li>
   
           `
    });
 */



    /* NOBRES DE CATEGORIAS */

    let CategoriesData = [{
        "id": 1,
        "Categoria": "Series para Maratonear",
        "API": "https://api.themoviedb.org/3/movie?api_key=",
    }, {
        "id": 2,
        "Categoria": "Top 4 en Argentina",
        "API": "https://api.themoviedb.org/3/movie?api_key=",
    }, {
        "id": 3,
        "Categoria": "Tendencia de esta semana",
        "API": "https://api.themoviedb.org/3/movie?api_key=",
    }, {
        "id": 4,
        "Categoria": "Ultimos Estrenos",
        "API": "https://api.themoviedb.org/3/movie?api_key=",
    }]



    /*  Agregar Categorias al Section */

    var filas_categorias = document.querySelector(".movies-sliders")

    CategoriesData.forEach(element => {

        filas_categorias.innerHTML += `

              <!--Fila Numero${element.id}--!>
                <div class="moviesegment uk-card">
                <h2 class="cat-title">${element.Categoria}</h2>
                <div class="moviesline" uk-slider>
                    <div class="uk-slider-container">

                        <ul class="uk-slider-items" id="peliculas"></ul>
                        
                    </div>
                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
                </div>
            </div>`
    });

    /* AGREGAR PELICULAS */

    var api_key = '637047833ce3a40c01c36c4fd05c9c57';

    CategoriesData.forEach(element => {
    

    fetch(`'${element.API}${api_key}'`)

        .then(function (response) {
            return response.json();
        })

        .then(function (information) {

            console.log(information);


            /* for (let index = 0; index < 5; index++) {
                const element = information.results[index];

                var peliculas = document.querySelectorAll("#peliculas")

                peliculas.innerHTML += `

       <li class="ext">
         <div class="eachmovie">
             <a href="movieDetail.html">${element.id}</a>
             <img src="${element.backdrop_path}" alt="">
          </div>
        </li>
`
            }
 */
        })

    });

   


    fetch('https://api.themoviedb.org/3/tv/71712-the-good-doctor/images?api_key=637047833ce3a40c01c36c4fd05c9c57')

    .then(function (response) {
        return response.json();
    })

    .then(function (information) {

        console.log(information);

    })

})