var queryString = location.search; //te trae todo despues de el signo ?
var queryStringObj = new URLSearchParams(queryString); //Lo tranforma en un objeto
var idmovie = queryStringObj.get('IdMovie');


fetch(`https://api.themoviedb.org/3/movie/${idmovie}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
        
        var meta_title = document.querySelector("#meta_title");

        meta_title.innerHTML = ` ${information.original_title} `;

        console.log(` ${information.original_title} `);
    });


window.addEventListener('load', function () {
  
    var nombremoviee = document.querySelector(".nombremovie");
    var fechacreacion = document.querySelector(".fechacreacion");
    var duracion = document.querySelector(".duracion");
    var descripcion = document.querySelector(".descripcion");

    fetch(`https://api.themoviedb.org/3/movie/${idmovie}?api_key=637047833ce3a40c01c36c4fd05c9c57`)
    .then(function (response) {
        return response.json();
    })

    .then(function (information) {
console.log(information);
        nombremoviee.innerHTML = ` ${information.original_title} `;
        fechacreacion.innerHTML += ` ${information.release_date} `;
        duracion.innerHTML += ` ${information.runtime} `;
        descripcion.innerHTML += `${information.overview}`;
    });


})