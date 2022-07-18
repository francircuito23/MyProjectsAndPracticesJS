window.onload = function(){
    document.querySelector("input[type='button']").onclick = function(){
        this.disable = true;
        //Paso 1: crear el objeto XMLHttpRequest
        let illojuan; //variable que va a almacenar el objeto

        if(window.XMLHttpRequest){
            illojuan = new XMLHttpRequest();
        }
        else{
            illojuan = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: Crear la petición de datos
        //Parámetros: el verbo, dirección del recurso

        //consultar datos desde una BBDD
        illojuan.open('GET',"http://localhost:81/ProyectoGIT/Medac/JavaScript/2Trimestre/ejercicios/Ajax/AJAXconBBDD/consulta/consulta.php");

        //Paso 3: crear la función para mejorar los datos que me llegan (se asocia al evento LOAD)
        illojuan.addEventListener('load', function(datos){
            let respuesta = JSON.parse(datos.target.response);

            document.getElementById("parra").innerHTML = respuesta;

            console.log(respuesta);
            
        });

        //Paso 4: Enviar la petición
        illojuan.send();

        console.log("SOY EL ÚLTIMO");
    }
}