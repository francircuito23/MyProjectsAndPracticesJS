window.onload = function(){
    document.querySelector("input[type='button']").onclick = function(){
        this.disable = true;
        //Creamos el objeto XMLHttpRequest
        let illojuan; //variable que va a almacenar el objeto

        if(window.XMLHttpRequest){
            illojuan = new XMLHttpRequest();
        }
        else{
            illojuan = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Creamos la petición de datos

        //consultamos los datos desde la api
        illojuan.open('GET',"https://randomuser.me/api");

        //Paso 3: crear la función para mejorar los datos que me llegan (se asocia al evento LOAD)
        illojuan.addEventListener('load', function(datos){

            //APARTADO A
            let respuesta = JSON.parse(datos.target.response);

            console.log(respuesta);

            //APARTADO B

            console.log(respuesta.results[0].picture.medium);

            //Asiganamos a las varialbes los campos del objeto

            var nombre = respuesta.results[0].name.first;

            var apellido = respuesta.results[0].name.last;

            var edad = respuesta.results[0].dob.age;

            var foto = respuesta.results[0].picture.medium;

            //Creamos la foto y le asignamos una ruta ya que sino no podremos agregarla al articulo con appendChild

            var pasarFoto = document.createElement("img");

            pasarFoto.src = foto;

            var div = document.querySelector("div");

            var articulo = document.createElement("article");

            articulo.className = "usuario";

            //Contenido de las variables al texto del artículo

            articulo.textContent = nombre+" "+apellido+": "+edad+" "+"años";

            articulo.appendChild(pasarFoto);

            //Agregamos el articulo al div

            div.appendChild(articulo);

            
        });

        //Enviamos la petición
        illojuan.send();
    }
}