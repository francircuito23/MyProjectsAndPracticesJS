window.onload=() =>{

    //validar

    document.querySelector("input[type='submit']").setAttribute("onclick","validar()"); 

    var boton = document.querySelector("input[type='submit']");
    boton.onclick = function(e){
        e.preventDefault();
        console.log("Enviando formulario...");
        validar();
    }
}

function validar(){                             
    var formu = document.getElementById("formu");

    if (formu.nick.value == 0){      
        alert ("El campo nombre no puede estar vacío");  
        formu.nick.value = "";
        formu.nick.focus();
        return;
    }

    if  (formu.clave.value.length<=8) {
        alert ("La contraseña debe tener 8 caracteres mínimos");
        pass.focus();
        return;
    }

    var password = document.querySelectorAll("input[type='password']")[1];
    var password2 = document.querySelectorAll("input[type='password']")[0];

    if (formu.clave.value != password.value){
        alert ("Las contraseñas no coinciden");
        formu.clave.focus();
        document.querySelectorAll("input[type='password']")[0].value="";
        document.querySelectorAll("input[type='password']")[1].value="";
        return;
    }

    if(formu.nick.value == password2.value){
        alert ("Nombre y clave no pueden coincidir.");
        document.querySelectorAll("input[type='password']")[0].value="";
        document.querySelectorAll("input[type='password']")[1].value="";
        formu.nick.focus();
        return;
    }

    var sel = formu.pregunta.options[formu.pregunta.selectedIndex].value;

    if(sel==0){
        alert ("No se puede seleccionar la primera opción.");
        return;
    }

    
    if (formu.respuesta.value == 0){      
        alert ("El campo respuesta no puede estar vacío");  
        formu.respuesta.value = "";
        formu.respuesta.focus();
        return; 
    }
    else if(formu.respuesta.value.length<=6){
        alert ("La respuesta debe tener 6 caracteres mínimos");
        formu.respuesta.value = "";
        formu.respuesta.focus();
        return; 
    }


    if(!formu.sexo[0].checked && !formu.sexo[1].checked){             
        alert ("Ninguno de los campos están marcados");
        return;
    }


    if (formu.edad.value == 0){      
        alert ("El campo edad no puede estar vacío"); 
        formu.edad.value = "";
        formu.edad.focus();
        return; 
    }
    else if (!Number(formu.edad.value)){                  
        alert ("La edad debe ser un número");
        formu.edad.focus();
        return;
    }
    else if(formu.edad.value < 3 || formu.edad.value > 99){
        alert ("La edad debe ser mayor que 3 años o menor a 99");
        formu.edad.focus();
        return;
    }


    if (formu.email.value == 0){      
        alert ("El campo email no puede estar vacío"); 
        formu.email.value = "";
        formu.email.focus();
        return; 
    }

    if (formu.frase.value == 0){      
        alert ("El campo frase no puede estar vacío"); 
        formu.frase.value = "";
        formu.frase.focus();
        return; 
    }

    if (formu.captcha.value == 0){      
        alert ("El campo captcha no puede estar vacío"); 
        formu.captcha.value = "";
        formu.captcha.focus();
        return;
    }
    else if(formu.captcha.value != "NJFDD"){
        alert ("El código es incorrecto.");
        formu.captcha.value = "";
        formu.captcha.focus();
        return;
    }

    var aceptar = document.querySelectorAll("input[type='checkbox']")[0];

    if (!aceptar.checked){                                         
        alert ("Se deben aceptar las condiciones de uso.")
        return;
    }

    var usuario = {

        Nick: formu.nick.value,
        Clave: formu.clave.value,
        Respuesta: formu.respuesta.value,
        Edad: formu.edad.value,
        Email: formu.email.value,
        Frase: formu.frase.value,
    }
    //guardamos con el local el usuario
    localStorage.datos = JSON.stringify(usuario);
    console.log("Datos guardados.");

    formu.submit(); //submit para validar

}

function limpiar(){
    localStorage.removeItem("datos");
    console.log("Datos borrados.");
}