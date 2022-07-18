window.onload=()=>{

    var nuevo= document.createElement("div");

    document.querySelector("body").appendChild(nuevo);

    for(let campo in usuario){
        let nuevoSpan = document.createElement("li");
        let lista = document.createElement("ul");
        let fieldset = document.createElement("fieldset");
        let legend;
        let texto="";

        switch(campo){
            
            case "genre":
                texto = usuario[campo];

                texto = document.createTextNode(texto);
                nuevoSpan = document.createElement("li");
                nuevoSpan.appendChild(texto);
                lista.appendChild(nuevoSpan);

            break;

            case "datos":

                for (let dato in usuario[campo]){

                    texto = dato+": "+usuario[campo][dato];

                    texto = document.createTextNode(texto);
                    nuevoSpan = document.createElement("li");
                    nuevoSpan.appendChild(texto);
                    lista.appendChild(nuevoSpan);
                }

            break;

            
        }
    }
}