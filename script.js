// funcion que permite solo escribir letras minusculas dentro el input o textarea
function quitarAcentos(cadena) {
  const acentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };
  return cadena
    .split("")
    .map((letra) => acentos[letra] || letra)
    .join("")
    .toString();
}

function encriptar() {
  var texto = document.getElementById("InputTexto").value.toLowerCase();

  //i es para que afecte tanto mayusculas como minusculas
  //g es para toda la linea u oracion
  //m es para qye afecte a multiples lineas o párrafo

  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("InputTexto").value.toLowerCase();

  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
  alert("!Se copió!");
}
