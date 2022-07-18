/*
Ejemplo de uso:
	console.log('Descansando...');
  	sleep(2000);
  	console.log('Dos segundos despues');
*/
function sleep(milliseconds) {
 var start = new Date().getTime();
 for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds) {
   break;
  }
 }
}
//----------------------------------------------------------------------------------------

function empezar(){
    //Pedimos por teclado al usuario el número de plantas
    while(!Number(plantas) || plantas < 1 || plantas > 8 ){ //Bucle para que siga pidiendo si no introduce números el usuario

        var plantas = prompt("Cuántas plantas tiene el edificio? (sólo de 1 a 8)");

    }

    //Botones
    var cuerpo = document.querySelector("body");

    var divBotones = document.createElement("div");

    divBotones.id = "botones";

    cuerpo.appendChild(divBotones);

    var botonLlamar = document.createElement("input");

    botonLlamar.type = "button";

    botonLlamar.value = "Llamar Ascensor";

    botonLlamar.onclick = Llamar;

    var botonApagar = document.createElement("input");

    botonApagar.type = "button";

    botonApagar.value = "Apagar";

    botonApagar.onclick = Apagar;

    botonApagar.disabled = true;

    divBotones.appendChild(botonLlamar);

    divBotones.appendChild(botonApagar);

    //Plantas
    var ascensor = document.getElementById("ascensor");

    for (let i = plantas; i >= 1; i--) {

        var numPlantas = document.createElement("div");
        numPlantas.innerHTML = i;

        ascensor.appendChild(numPlantas);
        numPlantas.className = "planta";
    }

    if(numPlantas.textContent == 1){

        numPlantas.style.backgroundColor = "yellow";
        numPlantas.style.border = "3px solid";
    }

    //Indicador
    var indi = document.getElementsByTagName("span")[0];

    indi.textContent = 1;

    var indi2 = document.getElementsByTagName("span")[1];

    indi2.innerHTML = "Parado";
}

function Llamar(){

    var botonApagar = document.getElementsByTagName("input")[1];

    botonApagar.disabled = false;


    var numPlantas = document.getElementsByClassName("planta");

    //id del div padre (ascensor)
    //Lo uso para saber el texto del primer div (última planta)
    var ascensor = document.getElementById("ascensor");


    var donde = parseInt(prompt("A qué planta vamos sosio?????"));

    var indi = document.getElementsByTagName("span")[0];

    if(donde < 1){
        donde = 1;
    }
    //contenido del primer hijo del div padre ascensor
    else if(donde > ascensor.firstElementChild.textContent){
        donde = ascensor.firstElementChild.textContent;
    }
    else if(donde == indi.textContent){
        alert("Ya estás en esa planta sosio");
    }


    for (let i = 0; i < numPlantas.length; i++) {
        
        if(numPlantas[i].textContent == donde){

            numPlantas[i].style.backgroundColor = "yellow";
            numPlantas[i].style.border = "3px solid";
        }
        else{
            numPlantas[i].style.backgroundColor = "white";
            numPlantas[i].style.border = "none";
        }
        
    }


    var indi = document.getElementsByTagName("span")[0];

    /*if(donde > indi.textContent){
        console.log(`Subiendo desde la planta ${indi.textContent} a la planta ${donde}`);
    }
    else if(donde < indi.textContent){
        console.log(`Bajando desde la planta ${indi.textContent} a la planta ${donde}`);
    }
    else{
        console.log(`Ya estás en esa planta loco`);
    }*/

    if(donde > indi.textContent){
        console.log(`Subiendo...`);
        sleep(1000);

        for (let i = indi.textContent; i <= donde; i++) {
            
            console.log(`Planta: ${indi.textContent++}`);
            sleep(1000);
        }
        
    } 
    else if(donde < indi.textContent){
        console.log(`Bajando...`);
        sleep(1000);

        for (let i = indi.textContent; i >= donde; i--) {
            
            console.log(`Planta: ${i}`);
            sleep(1000);
        }
    }
    else{
        console.log(`Ya estás en esa planta loco`);
    }


    //console.log(numPlantas.length);

    var indi = document.getElementsByTagName("span")[0];

    indi.innerHTML = donde;

}

function Apagar(){

    var botonLlamar = document.querySelectorAll("input")[0];
    var botonApagar = document.querySelectorAll("input")[1];

    botonLlamar.disabled = true;
    botonApagar.disabled = true;

    var indi = document.getElementsByTagName("span")[0];

    indi.innerHTML = "X";

    var indi2 = document.getElementsByTagName("span")[1];

    indi2.innerHTML = "Apagado";
    
    var borraPlantas = document.getElementById("ascensor");

    //mientras el padre tenga hijos, los borro
    if (borraPlantas.hasChildNodes()){
        while (borraPlantas.childNodes.length >= 1){
            borraPlantas.removeChild(borraPlantas.firstChild);
        }
    }
}
