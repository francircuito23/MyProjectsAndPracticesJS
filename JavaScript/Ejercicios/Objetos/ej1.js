//Array de objetos
var asignaturas = [
    {
        nombre: "Inglés",
        curso: 2,
        horas: 100
    },

    {
        nombre: "Cliente",
        curso: 2,
        horas: 117
    },

    {
        nombre: "Servidores",
        curso: 2,
        horas: 101
    },

    {
        nombre: "Diseño",
        curso: 2,
        horas: 123
    }

]

var tutores = [
    {
        nombre: "Llaverín",
        titulo: "Grado en ingeniería aeronáutica",
        edad: 30,
        dni: '23456789K'
    },

    {
        nombre: "Franco",
        titulo: "Grado en ingeniería espacial",
        edad: 50,
        dni: '77659901B'
    }
]

//console.log(tutores[1]);

var alumno = {

    Nombre: "Fran",
    Edad: "23",
    Ciclo: "DAW",
    Curso: 2,
    Tutores: tutores[0],
    Asignaturas: asignaturas,
    Notas: [8,9,9,10]

}

window.onload = function(){

    var bloque = document.getElementsByClassName("contenedor");

    // for(prop in alumno){

    //     if(prop == "Asignaturas"){

    //         for(mprop of alumno[prop]){

    //             console.log(mprop.nombre);
    //         }
    //     }
        
    // }

    for (prop in alumno){

        if(prop == "Tutores"){

            var br = document.createElement("br");
            var br2 = document.createElement("br");
            datos.appendChild(br);
            datos.appendChild(br2);

            var tutor = document.createTextNode("Su tutor es: ");
            datos.appendChild(tutor);

            var br = document.createElement("br");
            var br2 = document.createElement("br");
            datos.appendChild(br);
            datos.appendChild(br2);

            for(mprop in alumno[prop]){
                var br3 = document.createElement("br");
                var profe = document.createTextNode(mprop+": "+ alumno[prop][mprop]);
                datos.appendChild(profe);
                datos.appendChild(br3);
            }

        }

        else if(prop == "Asignaturas"){

            var br = document.createElement("br");
            var br2 = document.createElement("br");
            datos.appendChild(br);
            datos.appendChild(br2);

            var asig = document.createTextNode("Sus Asignaturas son: ");
            datos.appendChild(asig);

            var br = document.createElement("br");
            var br2 = document.createElement("br");
            datos.appendChild(br);
            datos.appendChild(br2);

            for(mprop in alumno[prop]){

                for(porro in alumno[prop][mprop]){

                    var br3 = document.createElement("br");
                    var asignatura = document.createTextNode(porro+": "+ alumno[prop][mprop][porro]);
                    datos.appendChild(asignatura);
                    datos.appendChild(br3);

                    if(porro == "horas"){
                        var br4 = document.createElement("br");
                        datos.appendChild(br4);
                    }
                }
                
            }

        }

        else if(prop == "Notas"){
            let suma = 0;

            for(valor of alumno[prop]){
                suma += valor;
            }
            media = suma / alumno[prop].length;

            var br = document.createElement("br");
            var br2 = document.createElement("br");
            datos.appendChild(br);
            datos.appendChild(br2);

            var notas = document.createTextNode("Notas: "+alumno[prop]);
            datos.appendChild(notas);

            var br = document.createElement("br");
            var br2 = document.createElement("br");
            datos.appendChild(br);
            datos.appendChild(br2);

            var NotaMedia = document.createTextNode("Su media es: "+media);
            datos.appendChild(NotaMedia);
        }

        else{
            var datos = document.createElement("p");
            var textoDatos = document.createTextNode(prop+": "+alumno[prop]);
            
            bloque[0].appendChild(datos);
            datos.appendChild(textoDatos);
        }

        var hr = document.createElement("hr");
        datos.appendChild(hr);
    }
};

function mostrar(){

    var cuerpo = document.querySelectorAll("body")[0];

    var boton = document.querySelectorAll("button")[0];

    var div = document.createElement("div");
    div.className = "datosTutor";

    cuerpo.insertBefore(div, boton[0]);

    for (prop in tutores){

        for(mprop in tutores[prop]){

            var tutorDatos = document.createTextNode(mprop+": "+tutores[prop][mprop]);

            div.appendChild(tutorDatos);

            var br4 = document.createElement("br");
            div.appendChild(br4);

            if(mprop == "nombre"){

                //let cont = 0;
                //cont++;

                var profes = document.createElement("p");
                div.appendChild(profes);

                var textoProfes = document.createTextNode("Profesor: ");
                //div.appendChild(textoProfes);
                profes.appendChild(textoProfes);

                var br4 = document.createElement("br");
                div.appendChild(br4);
            }

        }
    }
}

//Objetos separados por variables
/*
var asignatura = {
    nombre: "Inglés",
    curso: 2,
    horas: 100
}

var asignatura2 = {
    nombre: "Cliente",
    curso: 2,
    horas: 117
}

var asignatura3 = {
    nombre: "Servidores",
    curso: 2,
    horas: 101
}

var asignatura4 = {
    nombre: "Diseño",
    curso: 2,
    horas: 123
}
*/