const textArea = document.querySelector("#entrada");
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const llaves = ["ai","enter","imes","ober","ufat"];
const imgMuneco = document.querySelector(".muneco");
const contenedorTexto = document.querySelector(".texto");
const contenedorResultado = document.querySelector(".resultado");
const btnCopiar = document.querySelector("#btnCopiar");

function encriptar(){
 let texto = textArea.value;
 let resultado = ""; 
 for(let i = 0; i < texto.length; i ++) {
    switch(texto[i]) {
        case llaves[0][0]:
         resultado = resultado +llaves [0]
         break;
        case llaves[1][0]:
         resultado = resultado +llaves [1]
         break;   
        case llaves[2][0]:
         resultado = resultado +llaves [2]
         break; 
        case llaves[3][0]:
         resultado = resultado +llaves [3]
         break;  
        case llaves[4][0]:
         resultado = resultado +llaves [4]
         break;  
     default:
        resultado = resultado + texto[i];   
    }
  }
  contenedorResultado.innerText = resultado;
  cambio();
  
}


function desencriptar(){
    let texto = textArea.value;

    let resultado = texto.replaceAll("ai","a")
    resultado = resultado.replaceAll("enter","e")
    resultado = resultado.replaceAll("imes","i")
    resultado = resultado.replaceAll("ober","o")
    resultado = resultado.replaceAll("ufat","u")

    contenedorResultado.innerText = resultado;
    cambio();
}

function copiar(){
    let texto = contenedorResultado.innerText;
    navigator.clipboard.writeText(texto);
    alert("Mensaje copiado");

}
function cambio(){
    imgMuneco.classList.add("oculto");
    contenedorTexto.classList.add("oculto");
    contenedorResultado.classList.remove("oculto");
    btnCopiar.classList.remove("oculto"); 
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

