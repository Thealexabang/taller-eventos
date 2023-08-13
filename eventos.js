document.addEventListener("DOMContentLoaded", function () {
   
    const boton= document.getElementById('boton');

    boton.addEventListener("click", function(){
        Event.stopPropagation();
        alert("Hola! Soy el div");
    });

});
