function Registrarse() {
    document.getElementById("registros").style.display = "block";
    document.getElementById("rembrar").style.backgroundColor = "blue";
  }
  
  function buscandoANemo() {
    switch(document.querySelector(".error").style.display) {
      case "block":
        document.querySelector(".error").style.display = "none";
        break;
      case "none":
        document.querySelector(".error").style.display = "block";
        break;
      default:
        console.log("Revisar inicio");
        break;
    }
  };