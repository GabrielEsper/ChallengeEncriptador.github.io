
var textarea = document.getElementById("ingreseTexto");
var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar=document.getElementById("desencriptar");
var botoncopiar = document.getElementById("botonCopiar");

var muneco= document.getElementById("muneco");
var txtpequeno= document.getElementById("txtpequeno");
var txtgrande= document.getElementById("txtgrande");

//funcion encriptar
botonEncriptar.addEventListener("click", function() {
    //aparicion del muneco y de texto si el textarea esta vacio al presionar Encriptar
    if (textarea.value.length === 0) {
    muneco.classList.remove("oculto");
    txtpequeno.classList.remove("oculto");
    txtgrande.classList.add("grande");
    txtgrande.classList.remove("oculto");
    txtgrande.innerHTML="ningun mensaje fue encontrado";
    botoncopiar.classList.add("oculto");;
        return;
    }
    //reglas de encriptacion 
    var texto = textarea.value;
    var cifrado = "";
    for (var i = 0; i < texto.length; i++) {
    var caracter = texto[i];
    if (caracter === "a") {
        caracter = "ai";
    }else if (caracter === "e") {
        caracter = "enter";
    }else if (caracter === "i") {
        caracter = "imes";
    }else if (caracter === "o") {
        caracter = "ober";
    }else if (caracter === "u") {
        caracter = "ufat";
    }
    cifrado += caracter;
    }
    // Vaciar el contenido del div "lateral"
    muneco.classList.add("oculto");
    txtpequeno.classList.add("oculto");
    //aparicion del boton copiar cuando exista texto encriptado
    botoncopiar.classList.remove("oculto");
    //aparicion del texto cifrado 
    txtgrande.classList.remove("grande");
    txtgrande.innerHTML = cifrado;
});


//funcion copiar texto encriptado
const textContainer = document.getElementById("txtgrande");
botoncopiar.addEventListener('click', async () => {
    try {
    await navigator.clipboard.writeText(textContainer.textContent);
    alert('El mensaje fue copiado al portapapeles');
    } catch (err) {
    console.error('no se puedo copiar el mensaje, debido al error: ', err);
    }
});


//funcion desencriptar
botonDesencriptar.addEventListener("click", function() {
    //aparicion del muneco y del texto si el textarea esta vacio al presionar Desencriptar
    if (textarea.value.length === 0) {
        muneco.classList.remove("oculto");
    txtpequeno.classList.remove("oculto");
    txtgrande.classList.add("grande")
    txtgrande.classList.remove("oculto");
    txtgrande.innerHTML="ningun mensaje fue encontrado";
    botoncopiar.classList.add("oculto");;
        return;
    }
    /*reglas de desencriptacion: en este caso se debe tener en cuenta que el sistema debe analizar
    grupos de letras. Para ello se utiliza la funcion texto.substr(i,n de caracteres) en la cual se tiene
    en cuenta que la desencriptacion se realiza a un grupo de letras segun la letra que se desea alcanzar*/
    var texto = textarea.value;
    var descifrado = "";
    var i = 0;
    while (i < texto.length) {
        var caracter = texto[i];
        if (texto.substr(i, 2) === "ai") {
            caracter = "a";
            i += 2;
        } else if (texto.substr(i, 5) === "enter") {
            caracter = "e";
            i += 5;
        } else if (texto.substr(i, 4) === "imes") {
            caracter = "i";
            i += 4;
        } else if (texto.substr(i, 4) === "ober") {
            caracter = "o";
            i += 4;
        } else if (texto.substr(i, 4) === "ufat") {
            caracter = "u";
            i += 4;
        } else {
            i++;
        }
        descifrado += caracter;
    }
    // Vaciar el contenido del div lateral
    muneco.classList.add("oculto");
    txtpequeno.classList.add("oculto");
    //aparicion del boton copiar cuando exista texto desencriptado
    botoncopiar.classList.remove("oculto");
    //aparicion del texto descifrado
    txtgrande.classList.remove("grande");
    txtgrande.innerHTML = descifrado;
});
