function ejercicio1(){

    //Pedimos por teclado al usuario el número
    while(!Number(euros)){ //Bucle para que siga pidiendo si no introduce números el usuario
    
        var euros = prompt("Dime la cantidad en euros:");
    }

    var res = euros*1.16;

    alert(`${euros} euros equivale a ${res} dólares americanos`);

}

function ejercicio2(){

    var suspensos = 0;
    var aprobados = 0;
    var notables = 0;
    var sobresalientes = 0;

    var nota;

    for(let i=1; i<=10; i++){

        nota = parseInt(prompt(`Dime la nota ${i}`));

        if(nota>=0 && nota<5){

            suspensos++;
        }
        else if(nota>=5 && nota<=6){
            
            aprobados++;
        }
        else if(nota>=7 && nota<=8){

            notables++;
        }
        else{

            sobresalientes++;
        }
    }

    alert(`Suspensos: ${suspensos}\nAprobados: ${aprobados}\nNotables: ${notables}\nSobresalientes: ${sobresalientes}`)


}



function ejercicio3(){

    var numeros = new Array();

    do{
        
        numerosArray = parseInt(prompt(`Introduce números positivo`));

        for(i=0; i<numeros.length; i++){

            numeros[i] = numerosArray;
        }

    }while(numerosArray>0);


    document.querySelectorAll("p")[0].innerHTML = numerosArray;


}



function ejercicio4(){

    for(let i=1; i<=10; i++){

        nota = parseInt(prompt(`Dime la nota ${i}`));
    }

    var pares = new Array();

    var impares = new Array();
    
}

function generar(){

    var div1 = Math.round((Math.random()*(50-1))+1);

    var caja1 = document.getElementById("ladoIzq");

    caja1.innerHTML = div1;

    var div2 = Math.round((Math.random()*(50-1))+1);

    var caja2 = document.getElementById("ladoDer");

    caja2.innerHTML = div2;

    let boton = document.querySelectorAll("input")[0];

    boton.disabled = true;

    let boton2 = document.querySelectorAll("input")[1];

    boton2.disabled = false;

    var caja3 = document.getElementById("salida");

    if(div1>div2){

        caja3.innerHTML = div1;

    }else{

        caja3.innerHTML = div2
    }
    
}