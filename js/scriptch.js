
var textoentrada = document.querySelector("#inicial");
var textosalida = document.querySelector(".textoresultado");
var Bencriptar = document.querySelector(".botonEncriptar");
var Bdesencriptar = document.querySelector(".botonDesencriptar");
var cuadroresultado = document.querySelector(".notexto")
var cuadrocopiar = document.querySelector(".ocultar")
var Bcopiar = document.querySelector(".botonCopiar")
function encriptar(){
    var texto = textoentrada.value;
    texto = texto.toLowerCase()
    var resultado = texto.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    textosalida.value = resultado
}
function desencriptar(){
    var texto = textoentrada.value;
    texto = texto.toLowerCase()
    var resultado = texto.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    textosalida.value = resultado
}

Bencriptar.addEventListener ( "click",function (){
    if(textoentrada.value != ""){
        cuadroresultado.classList.remove("notexto");
        cuadroresultado.classList.add("ocultar");
        cuadrocopiar.classList.remove("ocultar");
        cuadrocopiar.classList.add("sitexto");
    }
    else{
        cuadroresultado.classList.remove("ocultar");
        cuadroresultado.classList.add("notexto");
        cuadrocopiar.classList.remove("sitexto");
        cuadrocopiar.classList.add("ocultar");
    }

});
Bdesencriptar.addEventListener ( "click",function (){
    if(textoentrada.value != ""){
        cuadroresultado.classList.remove("notexto");
        cuadroresultado.classList.add("ocultar");
        cuadrocopiar.classList.remove("ocultar");
        cuadrocopiar.classList.add("sitexto");
    }
    else{
        cuadroresultado.classList.remove("ocultar")
        cuadroresultado.classList.add("notexto");
        cuadrocopiar.classList.remove("sitexto");
        cuadrocopiar.classList.add("ocultar");
    }

});
Bcopiar.addEventListener("click", function(){
    textosalida.focus();
    navigator.clipboard.writeText(textosalida.value)
})

Bdesencriptar.onclick = desencriptar;
Bencriptar.onclick = encriptar;




