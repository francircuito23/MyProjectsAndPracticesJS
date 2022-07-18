function generar() {

    var boton = document.getElementsByTagName("input");
    var barra = document.getElementsByTagName("meter"); 
    var indicador = document.getElementsByTagName("span");
    var ultArticulo = document.getElementsByTagName("article");
    var suma = 0;
    //interval que vaya aumentando cada segundo
    var id = setInterval(aumentar, 1000);
    
    function aumentar() {
        var pasar = parseInt(indicador[1].textContent); //pasar el contenido del indicador a número

        suma = 25;

        if (barra[0].value >= 100) {
            boton[0].disabled = false;
            pasar += 1; //si llega al tope se le suma 1 al indicador
            alert("Carga completada!");

            //if para que vuelva a 0 el valor de meter y se limpie la barra
            if(barra[0].value >= 100){
                barra[0].value = 0;
                clearInterval(id); //limpiamos la barra si llega a 100 el value
            }
            

        } else {
            boton[0].disabled = true; //habilitamos el boton cuando llegue a 100
            barra[0].value += suma; //vamos sumando 25 al valor de la barra
        }

        indicador[1].textContent = pasar;

        if(indicador[1].textContent == 3){

            var imagen = document.createElement("img"); //si llega a 3 el contenido del indicador creamos la imagen
    
            imagen.src = "img/countess.jpg";

            imagen.className = "foto";
    
            ultArticulo[ultArticulo.length-1].appendChild(imagen); //y la añadimos al último articulo
        }
    }
}