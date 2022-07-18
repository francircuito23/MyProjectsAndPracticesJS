//Guardar valores
var valor = localStorage.name = "Aron";
var valor = localStorage["apellido"] = "Popper";
localStorage.setItem("Popper", "Piper");


//Recuperar valores
localStorage.getItem(valor, content)
var valor = localStorage.getItem["popper"];
localStorage.name;

// //Borrar valores
// localStorage.removeItem("popper");
// localStorage.clear();

var alumno = {
    nombre:"Maricon",
    edad: 23,
    curso: 2
}

//Pasarlo a texto y luego convertirlo a JSON
// JSON.stringify(alumno);
// JSON.parse("Aquí va el texto");

var temp = JSON.stringify(alumno);

var alumnoDatos = JSON.parse(temp);

console.log(temp);
console.log(alumnoDatos);
