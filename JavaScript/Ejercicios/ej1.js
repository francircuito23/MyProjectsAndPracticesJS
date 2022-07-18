var lista = [2,3,24,55,66,23,0];

function loco(lista, a) {
    
    for (let i = 0; i < lista.length; i++) {
        
        if(a == lista[i]){

            return true;
        }

    }

    return false;
}

console.log(loco(lista, 24));