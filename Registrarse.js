document.querySelector(".Separando").style.display = "none";
document.querySelector("#ImagenPerfil").style.display = "none";

function Registrarse() {
  switch (document.querySelector(".Separando").style.display) {
    case "block":
      document.querySelector(".Separando").style.display = "none";
      break;
    case "none":
      document.querySelector(".Separando").style.display = "block";
      document.querySelector(".error").style.display = "none";
      break;
    default:
      console.log("Revisarme");
      break;
  }
}

function mostrarOpciones() {
  switch (document.querySelector("#Cambio").style.display) {
    case "block":
      document.querySelector("#Cambio").style.display = "none";
      break;
    case "none":
      document.querySelector("#Cambio").style.display = "block";
      break;
    default:
      print("No tengo idea");
      break;
  }
}

function iniciarSeccion() {
  switch (document.querySelector(".error").style.display) {
    case "block":
      document.querySelector(".error").style.display = "none";
      break;
    case "none":
      document.querySelector(".error").style.display = "block";
      document.querySelector(".Separando").style.display = "none";
      break;
    default:
      console.log("Revisar inicio");
      break;
  }
}
