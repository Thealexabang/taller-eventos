document.addEventListener("DOMContentLoaded", function () {
   
    const boton= document.getElementById('boton');

    boton.addEventListener("dblclick", function(){
        Event.stopPropagation();
        alert("Hola! Soy el div");
    });

});
