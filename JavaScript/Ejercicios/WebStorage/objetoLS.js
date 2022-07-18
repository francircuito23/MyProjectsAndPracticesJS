window.onload=() => {
    var botones = document.querySelectorAll("input[type='button']");

    botones[0].onclick = guardar;
    botones[1].onclick = limpiar;

    var texto="";

    if(!localStorage.datos) texto = "No hay datos almacenados...";
    else texto = obtenerDatos(JSON.parse(localStorage.datos))

    document.getElementById("salida").innerHTML = texto;
}


function obtenerDatos(obj){

    var cadena = "<b>DATOS ALMACENADOS</b><br>";

    for (let ind in obj) {
        cadena += ind+": "+obj[ind]+"<br>";
    }

    return cadena;
}


function guardar(){

    var campos = document.querySelectorAll("input[type='text']");

    var objetoDatos = {
        nombre: campos[0].value,
        clave: campos[1].value
    }

    localStorage.datos = JSON.stringify(objetoDatos);
    document.getElementById("salida").textContent = "Datos guardados.";
}

function limpiar(){
    localStorage.removeItem("datos");
    document.getElementById("salida").textContent = "Datos borrados.";
}