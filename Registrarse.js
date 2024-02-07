document.querySelector(".Contenedores_aparecidos").style.display = "none";
document.querySelector(".postCreate").style.display = "none";
document.querySelector(".Renombrarstyle").style.display = "none";
document.querySelector("#email").style.display = "none";
document.querySelector("#ImagenPerfil").style.display = "none";
document.querySelector("#cerrar_secion").style.display = "none";

function Registrarse() {
  switch (document.querySelector("#email").style.display) {
    case "block":
      document.querySelector("#email").style.display = "none";
      document.querySelector(".Contenedores_aparecidos").style.display = "none";
      break;
    case "none":
      document.querySelector("#email").style.display = "block";
      document.querySelector(".Separando").style.display = "block";
      document.querySelector(".Contenedores_aparecidos").style.display =
        "block";
      document.querySelector("#error").style.display = "none";
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
      document.querySelector("#cerrar_secion").style.display = "none";
      break;
    case "none":
      document.querySelector("#Cambio").style.display = "block";
      document.querySelector("#cerrar_secion").style.display = "block";
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
      document.querySelector("#email").style.display = "none";
      document.querySelector(".Contenedores_aparecidos").style.display = "none";
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
