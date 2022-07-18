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

        //consultar datos desde una api
        illojuan.open('GET',"https://jsonplaceholder.typicode.com/users");

        //Paso 3: crear la función para mejorar los datos que me llegan (se asocia al evento LOAD)
        illojuan.addEventListener('load', function(datos){
            let respuesta = JSON.parse(datos.target.response);

            document.getElementById("parra").innerHTML = " ";

            // console.log(respuesta[0].name); 
            // console.log(respuesta[0].address.street);

            var div = document.getElementById("parra");

            var ul = document.createElement("ul");

            div.appendChild(ul);


            for (const key in respuesta) {

                for (const clave in respuesta[key]) {

                    if(clave == "address"){

                        document.getElementById("parra").innerHTML += "Su dirección es: <br>";

                        document.getElementById("parra").innerHTML += clave + ": " + "<br>";

                        for (const direccion in respuesta[key][clave]) {
                            
                            document.getElementById("parra").innerHTML += direccion + ": " + respuesta[key][clave][direccion] + "<br>";

                            if(direccion == "geo"){

                                document.getElementById("parra").innerHTML += "Su posiciñon geográfica es: <br>";
    
                                document.getElementById("parra").innerHTML += direccion + ": " + "<br>";

                                for (const geo in respuesta[key][clave][direccion]) {
                                    
                                    document.getElementById("parra").innerHTML += geo + ": " + respuesta[key][clave][direccion][geo] + "<br>";
                                }

                            }
        
                        }
                    }
                    else{

                        document.getElementById("parra").innerHTML += clave + ": " + respuesta[key][clave] + "<br>";
                    }
                }
            }
            
        });

        //Paso 4: Enviar la petición
        illojuan.send();

        console.log("SOY EL ÚLTIMO");
    }
}

// for (const key in respuesta) {

//     for (const clave in respuesta[key]) {

//         if(clave == "address"){

//             document.getElementById("parra").innerHTML += clave + ": " + "<br>";

//             for (const direccion in respuesta[key][clave]) {
                
//                 document.getElementById("parra").innerHTML += direccion + ": " + respuesta[key][clave][direccion] + "<br>";
//             }
//         }

//         else{

//             document.getElementById("parra").innerHTML += clave + ": " + respuesta[key][clave] + "<br>";
//         }
//     }
// }