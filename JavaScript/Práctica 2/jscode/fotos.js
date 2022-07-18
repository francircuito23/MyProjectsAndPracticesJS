function ponfoto(){

    var botonLimpiar = document.getElementsByTagName("input")[1];

    botonLimpiar.disabled = false; //deshabilitamos el boton limpiar

    var ruta = "img/"; //añadimos la ruta a la imagen para que no la tenga que poner el usuario


    var imagen = prompt("Dime una imagen:"); //pedimos la imagen

    if (imagen == "") { //si la cadena de la imagen está vacía le añadimos por defecto la terra.jpg
        
        imagen = ruta+"terra.jpg";
    }
    else{
        imagen = ruta+imagen; //sino le añadimos la que introduzca el usuario
    }


    var imagenCreada = document.createElement("img"); //creamos la imagen con su clase y las añadimos al div contenedor

    imagenCreada.src = imagen;

    imagenCreada.className = "foto";

    var contenedor = document.getElementById("contenedor");

    contenedor.appendChild(imagenCreada);

}

function limpiar(){

    var contenedor = document.getElementById("contenedor");

    var botonLimpiar = document.getElementsByTagName("input")[1];

    botonLimpiar.disabled = true;

    if (contenedor.hasChildNodes()){ //si el div contenedor tiene hijos, vamos borrando cada 1 con un while
        while (contenedor.childNodes.length >= 1){
            contenedor.removeChild(contenedor.firstChild);
        }
    }
}