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

        //consultar datos desde un json
        illojuan.open('GET',"http://www.jaimeweb.es/medac/datos.json");

        //Paso 3: crear la función para mejorar los datos que me llegan (se asocia al evento LOAD)
        illojuan.addEventListener('load', function(datos){
            let respuesta = JSON.parse(datos.target.response);

            //document.getElementById("parra").innerHTML = datos.target.response;

            document.querySelector("input[type='button']").disable = false;

            console.log(respuesta[1].nombre);

            if (!respuesta[0].estado) console.log(respuesta[0].email);
            
        });

        //Paso 4: Enviar la petición
        illojuan.send();

        console.log("SOY EL ÚLTIMO");
    }
}

