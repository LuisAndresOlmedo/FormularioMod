function Actualizar() { //genera un chat o algo parecido
    const info = Tocador.value;
    let numerossumados = Prueba.length;
    valoresfinaes = Prueba.push({
      mensaje: info,
      N: Prueba.length,
    });
    let ImprimirD = "<p>" + Prueba[numerossumados].mensaje + "</p>" + "<br/>";
    document.getElementById("textoBot").innerHTML = ImprimirD;
  }
  
  var Prueba = ["¿Hace tu pregunta?"];
  document.getElementById("Actualizar").innerHTML = Prueba; //Como cargar un texto a un componente.