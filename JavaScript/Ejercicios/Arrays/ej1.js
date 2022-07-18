var lista = [2,3,24,55,66,23,0];

function loco(lista, a) {
    
    for (let i = 0; i < lista.length; i++) {
        
        if(a == lista[i]){

            return true;
        }

    }

    return false;
}

console.log(loco(lista, 23));

/*for (let clave in alumno){

    if(clave == 'mentor'){

        for (let otra in alumno[clave]){
            console.log(otra+"tiene"+ alumno[clave][otra]);
        }
    }
    else{
        console.log(clave+"tiene"+ alumno[clave]);
    }
}*/

//Formas de recorrer un array:

//Todos los for:

//for
//foreach
//for-in
//for-of