window.onload = function () {
    console.log('JS Conectado Correctamente');

    /* Datos Carrusel */

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


    /* Datos Peliculas */

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




    /*  Agregar Peliculas al Carrusel */

    var carrusel = document.querySelector(".fotoscarrusel")

    carruselimg.forEach(element => {

        carrusel.innerHTML += `

    <li> <img src="${element.ruta}" alt=""></li>


        `
    });




    /*  Agregar Peliculas al Section */

    var movies = document.querySelector(".movies-sliders")


    CategoriesData.forEach(element => {

        movies.innerHTML += `
    
                  
        <!--Movies Line ${element.id}-->
                    <div class="moviesegment uk-card">

                    <h2 class="cat-title">${element.Categoria}</h2>

                    <div class="moviesline" uk-slider>

                        <div class="uk-slider-container">

                            <ul class="uk-slider-items">

                            <li class="ext">
                            <div class="eachmovie">
                                <a href="movieDetail.html"><span uk-spinner="ratio: 4.5"></span></a>
                            </div>
                            </li>

                            <li class="ext">
                            <div class="eachmovie">
                                <a href="movieDetail.html"><span uk-spinner="ratio: 4.5"></span></a>
                            </div>
                            </li>

                            <li class="ext">
                            <div class="eachmovie">
                                <a href="movieDetail.html"><span uk-spinner="ratio: 4.5"></span></a>
                            </div>
                            </li>

                            <li class="ext">
                            <div class="eachmovie">
                                <a href="movieDetail.html"><span uk-spinner="ratio: 4.5"></span></a>
                            </div>
                            </li>

                            <li class="ext">
                            <div class="eachmovie">
                                <a href="movieDetail.html"><span uk-spinner="ratio: 4.5"></span></a>
                            </div>
                            </li>

                            <li class="ext">
                            <div class="eachmovie">
                                <a href="movieDetail.html"><span uk-spinner="ratio: 4.5"></span></a>
                            </div>
                            </li>
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

}