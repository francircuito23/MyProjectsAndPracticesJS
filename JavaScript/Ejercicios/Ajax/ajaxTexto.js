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

        //consultar datos desde un archivo de texto
        illojuan.open('GET',"contenido.txt");

        //Paso 3: crear la función para mejorar los datos que me llegan (se asocia al evento LOAD)
        illojuan.addEventListener('load', function(datos){
            console.log("SEXO");
            document.getElementById("parra").innerHTML = datos.target.response;
            
        });

        //Paso 4: Enviar la petición
        illojuan.send();

        console.log("SOY EL ÚLTIMO");
    }
}