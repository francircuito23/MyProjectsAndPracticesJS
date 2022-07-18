window.onload=() =>{
    document.querySelector("input[type='submit']").setAttribute("onclick","enviar()");

    var formu = document.getElementsByTagName("form")[0];

    var validar = formu.boton;

    /*validar.onclick=function(e){
        e.preventDefault();
        console.log("Enviando formulario...");
        enviar();
    }*/

}

function enviar(){

    var formu = document.getElementsByTagName("form")[0];

    var nombre = document.getElementById("nombre");

    var password = document.getElementById("password");

    var error = document.getElementById("error");

    error.style.color = "red";

    formu.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("Enviando formulario...");

        var mensajeError = [];

        if(nombre.value == null || nombre.value == ""){
            mensajeError.push("Ingresa tu nombre");
        }

        if(password.value == null || password.value == ""){
            mensajeError.push("Ingresa tu password");
        }

        error.innerHTML = mensajeError.join(", ");
    })
}


