/* LLAMAR JSON METAS-SEO */
fetch('SEO-Y-DATOS/metas-seo.json')

    .then(function (response) {

        return response.json();

    })

    .then(function (information) {

        /* CAMBIAR METAS-SEO */

        console.log(information);

        var meta_title = document.querySelector("#meta_title");
        var meta_description = document.querySelector("#meta_description");

        meta_title.innerHTML = ` ${information.index.meta_title} `;

        meta_description.innerHTML = ` ${information.index.meta_description} `;


    })

window.onload = function () {
    console.log('JS Conectado Correctamente');

    /* Imágenes Carrusel */

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


    /* Datos CATEGORIAS */

    let CategoriesData = [{
        "id": 1,
        "Categoria": "Recomedadas para Vos",
    }, {
        "id": 2,
        "Categoria": "Top 4 en Argentina",
    }, {
        "id": 3,
        "Categoria": "Tendencia de esta semana",
    }, {
        "id": 4,
        "Categoria": "Ultimos Estrenos",
    }]


  /* Datos Peliculas */

  let moviesData = [{
    "id": 1,
}, {
    "id": 2,
}, {
    "id": 3,
}, {
    "id": 4,
}, {
    "id": 5,
}, {
    "id": 6,
}, {
    "id": 7,
}, {
    "id": 8,
}, {
    "id": 9,
}]


    /*  Agregar Peliculas al Carrusel */

    var carrusel = document.querySelector(".fotoscarrusel")

    carruselimg.forEach(element => {

        carrusel.innerHTML += `

    <li> <img src="${element.ruta}" alt=""></li>


        `
    });




    /*  Agregar Categorias al Section */

    var movies = document.querySelector(".movies-sliders")


    CategoriesData.forEach(element => {

        movies.innerHTML += `
    
                  
        <!--Movies Line ${element.id}-->
                    <div class="moviesegment uk-card">

                    <h2 class="cat-title">${element.Categoria}</h2>

                    <div class="moviesline" uk-slider>

                        <div class="uk-slider-container">

                            <ul class="uk-slider-items peliculas">

                        
                            </ul>
                        </div>

                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
                            uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                            uk-slider-item="next"></a>

                    </div>
                </div>

    
`
    });


    
    /*  Agregar Peliculas al <ul> */

    var peliculas = document.querySelector(".peliculas")


    moviesData.forEach(element => {

        peliculas.innerHTML += `
    
            <li class="ext">
              <div class="eachmovie">
                  <a href="movieDetail.html">${element.id}</a>
               </div>
             </li>

    
`
    });


}