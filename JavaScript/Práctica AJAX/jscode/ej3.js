window.onload = function(){

    //GET

    document.querySelector("input[type='button']").onclick = function(){

        this.disable = true;

        let illojuan; //variable que va a almacenar el objeto

        //Creamos el objeto XMLHttpRequest

        if(window.XMLHttpRequest){
            illojuan = new XMLHttpRequest();
        }
        else{
            illojuan = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //consultar datos desde una BBDD
        illojuan.open('GET',"http://jaimeweb.es/medac/getProfesores.php");

        //Creamos la función para los datos que devuelve
        illojuan.addEventListener('load', function(datos){

            let respuesta = JSON.parse(datos.target.response);

            var div = document.getElementById("salida");

            //Eliminamos el contenido para que no se repita
            div.textContent = " ";

            //for que recorra todos los profesores (sus nombres y dnis)
            for (let i = 0; i < respuesta.length; i++) {

                const nombre = respuesta[i].nombre;

                const dni = respuesta[i].dni;

                var articulo = document.createElement("article");

                articulo.className = "ficha";

                articulo.innerHTML += nombre +"<br>"+ dni;

                div.appendChild(articulo);
                
            }
            
        });

        //Paso 4: Enviar la petición
        illojuan.send();

    }

    //POST

    //Le aplicamos el submit al boton
    document.querySelectorAll("form")[1].onsubmit = function(e){
        e.preventDefault();
        
        var fock = document.querySelectorAll("form")[1];

        //Creamos el FormData para el formulario
        var fd = new FormData(fock);


        //Paso 1: crear el objeto XMLHttpRequest
        let xhr; //variable que va a almacenar el objeto
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }
        else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Enviamos datos con POST
        xhr.open('POST','http://www.jaimeweb.es/medac/setProfesores.php');

        //Creamos la funciona para manejar los datos que llegan y asociarla al evento LOAD
        xhr.addEventListener('load',function(datos){
            let respuesta = datos.target.response;

            var div = document.getElementById("salida");

            div.textContent = respuesta;

        });

        //Enviar peticion
        xhr.send(fd);

    }
}