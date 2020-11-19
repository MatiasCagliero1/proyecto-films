window.addEventListener("load", function () {

    console.log("conectadoi");


    localStorage.setItem("Nombre", "Matias");
    localStorage.setItem('Apellido', 'Cagliero');

    var nombre = localStorage.getItem("Nombre");
    var Apellido = localStorage.getItem('Apellido');

    localStorage.removeItem('Apellido');


    var favoritos = ['123', '456', '131415', '101112']
    console.log('Array',favoritos);

    //Borrar item
    //localStorage.removeItem()


    //Guardar Stirng
    localStorage.setItem("favoritosstring", JSON.stringify(favoritos));

    var favoritosvar = localStorage.getItem('favoritosstring');

    console.log('String', favoritosvar);

//Volver a Array

  var favoritosaray =  JSON.parse(window.localStorage.getItem('favoritosstring'));
  
   console.log('Array',favoritosaray);

   //Borrar todo
  // localStorage.clear();
   

  //Agregar al Array
  favoritos.push('Heloo');
  console.log('Array push',favoritos);

  //Eliminar el ulrimo elemento en Array
  favoritos.pop();
  console.log('Array POP',favoritos);

  //Salteo Split

  //Filter es filtrar por una función}

 //Splice
 
 
    //Guardar en tipo Stirng los Id
 /*    localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');
 */
    //console.log(favoritosvar);

   // Agregar favoritosId
 /*   var favoritosId =  JSON.parse(window.localStorage.getItem('favoritosstring'));

   favoritosId.push(`45757`);

   localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');
 */
   //Sacar favoritosId
/*    var favoritosId =  JSON.parse(window.localStorage.getItem('favoritosstring'));

   favoritosId.pop();

   localStorage.setItem("favoritosstring", JSON.stringify(favoritosId));
    var favoritosvar = localStorage.getItem('favoritosstring');

         console.log(favoritosId);
 */

         

    //Agregar Favorito
    /*  var agregarfavoritos = document.querySelector(`#add${element.id}`);

     agregarfavoritos.addEventListener("click", function () {
      
         console.log(favoritosId);
     }) */

    //Prevent a link
    //var agregarfavoritos = document.querySelector(`${element.id}`);


    //Agregar el ulrimo elemento en Array
    /*   var eachborrar = document.getElementById("#Movie");
      console.log('favoritosId');
      eachborrar.addEventListener("click", function () {
        console.log('favoritosId');
          favoritosId.pop();
      })
     */



    // 

    //Borrar favorito

    //  var agregarfavoritos = document.querySelector(`#borrar${element.id}`);
    //Agregar al Array
    /*   favoritos.push('Heloo');
      console.log('Array push',favoritos);

par

        eachborrar.addEventListener("click", console.log('favoritosId'));

      console.log('Array POP',favoritos); */

    //Salteo Split

    //Filter es filtrar por una función}

    //Splice


})
})