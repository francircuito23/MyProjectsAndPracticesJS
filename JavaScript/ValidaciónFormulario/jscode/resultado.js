window.onload=() => {

    var texto="";

    //si no hay datos no muestro nada y si los hay mediante la función y el local los muestro por consola
    if(!localStorage.datos) console.log("No hay datos almacenados...");
    else texto = obtenerDatos(JSON.parse(localStorage.datos))

    document.getElementById("section").innerHTML = texto;
}

function obtenerDatos(obj){
    //funcion para obtener los datos
    for (let ind in obj) {
        console.log(ind+": "+obj[ind]);
    }

}