function e1(){
    //Pedimos por teclado al usuario el número de filas y celdas
    //controlamos que no sea menor a 1 o mayor a 9 tanto filas como celdas
    while(!Number(filas) || !Number(celdas) || filas < 1 || celdas > 9 || filas > 9 || celdas < 1){ //Bucle para que siga pidiendo si no introduce números correctos el usuario

        var filas = parseInt(prompt("Número de filas?"));

        var celdas = parseInt(prompt("Número de celdas?"));

    }

    //creamos la tabla y le añadimos la clase
    let table = document.createElement('table');
    table.className = "tabla";

    //for para ir poniendo las filas según el número de filas que introduzca el usuario
    for(i=1; i<=filas;i++){

        var filasTabla = document.createElement("tr");
        //for para ir poniendo las celdas
        for (let j = 1; j <= celdas; j++) {
            
            var celdasTabla = document.createElement("td");
            //añadimos los números a las celdas
            celdasTabla.innerHTML = i; //le añadimos la i para que pinte según las vueltas del primer for
            celdasTabla.className = "tabla td";

            filasTabla.appendChild(celdasTabla);
            
        }
        //añadimos las filas a la tabla
        table.appendChild(filasTabla);

    }
    //finalmente añadimos la tabla al div
    var divTabla = document.getElementsByClassName("solucion");

    divTabla[0].appendChild(table);

}