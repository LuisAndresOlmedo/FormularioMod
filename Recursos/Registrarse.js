document.querySelector(".postCreate").style.display = "none";
document.querySelector(".Renombrarstyle").style.display = "none";
document.querySelector("#email").style.display = "none";
document.querySelector("#ImagenPerfil").style.display = "none";
document.querySelector("#cerrar_secion").style.display = "none";
const cerrar = document.getElementById("cerrarRegistros");
const cerrar2 = document.getElementById("cerrarRegistros2");


cerrar.addEventListener("click", () => {
    document.querySelector(".error").style.display = "none";
});

cerrar2.addEventListener("click", () => {
  document.querySelector("#email").style.display = "none";
});

function Registrarse() {
  switch (document.querySelector("#email").style.display) {
    case "block":
      document.querySelector("#email").style.display = "none";
      break;
    case "none":
      document.querySelector("#email").style.display = "block";
      document.querySelector(".Separando").style.display = "block";
      document.querySelector("#error").style.display = "none";
      break;
    default:
      console.log("Revisarme");
      break;
  }
}

function noMostrarInicio() {
  var flexElement = document.querySelector(".flex");
  flexElement.style.display = "none";

}

function mostrarInicio() {
  var flexElement = document.querySelector(".flex");

  if (flexElement.style.display === "none") {
    flexElement.style.display = "block";
    flexElement.style.position = "fixed";
    flexElement.style.top = "84px";
    flexElement.style.right = "3%";
    document.querySelector(".separador").style.display = "none";
  } else {
    noMostrarInicio();
  }
}

function iniciarSeccion() {
  switch (document.querySelector(".error").style.display) {
    case "block":
      document.querySelector(".error").style.display = "none";
      break;
    case "none":
      document.querySelector(".error").style.display = "block";
      document.querySelector("#email").style.display = "none";
      break;
    default:
      console.log("Revisar inicio");
      break;
  }
}

function cerrarSeción() {
  document.querySelector("#ImagenPerfil").style.display = "none";
  document.querySelector("#cerrar_secion").style.display = "none";
  cambios_de_valores.value = "Registrarse";
  document.querySelector("#MunudeUsuario").style.display = "none";
  document.querySelector(".inciar_seccion").style.display = "block";
  document.querySelector(".Renombrarstyle").style.display = "none";
  document.querySelector("#Guardando").style.display = "block";
  document.querySelector(".postCreate").style.display = "none";
  Instagram.value = "Instagram";
  Apellido.value = "Apellido";
  Inputinit.value = "Nombres";
  Contraseña.value = "Contraseña";
  dia.value = "Dia de nacimiento";
  mes.value = 0;
  Correito.value = "Email";
  valor.value = "Codigo de seguridad";
  vCorreo.value = "Email";
  vPass.value = "Contraseña";
}
