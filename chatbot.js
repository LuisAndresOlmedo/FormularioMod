const Tocador = document.getElementById("OnclickVacio");

function Actualizar() {
  const info = Tocador.value;
  let numerossumados = Prueba.length;
  valoresfinaes = Prueba.push({
    mensaje: info,
    N: Prueba.length,
  });
  const contenido = {
    contenido: info,
    nuevo: 0,
  };
  console.log(contenido);
  let ImprimirD =
    "<p>" + Prueba[numerossumados].mensaje + "</p>" + contenido.nuevo + "<br/>";
  document.getElementById("textoBot").innerHTML = ImprimirD;
}

var Prueba = ["¿Hace tu pregunta?"];
document.getElementById("Actualizar").innerHTML = Prueba;
