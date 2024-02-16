var columna = document.getElementById("miTabla");
var columnaId = 0;
var columnaR = 0;
let corona = (document.querySelector("#miTabla").style.visibility = "visible");
var numeroDeTabla = document.getElementById("miTabla");
document.querySelector("#eliminarUsuarios").style.display = "none";

function numerosMas() {
  for (let i = 1; i <= Usuario.length - 1; i++) {
    columnaR++;
    tablas();
    tablas2();
    tablas3();
    document.querySelector("#mostrarUsuarios").style.display = "none";
    document.querySelector("#eliminarUsuarios").style.display = "block";
  }
  return columnaR;
}


function tablas() {
  var row = columna.rows[columnaR];
  var creartr = document.createElement("tr");
  columna.appendChild(creartr);
  var tablita = document.createElement("td");
  tablita.appendChild(document.createTextNode(Usuario[columnaR]?.email));
  row.appendChild(tablita);
}

function tablas2() {
  var row = columna.rows[columnaR];
  var nuevaFila = document.createElement("tr");
  columna.appendChild(nuevaFila);
  var tablita = document.createElement("td");
  tablita.appendChild(
    document.createTextNode(
      Usuario[columnaR]?.Pass ?? Usuario[columnaR]?.password ?? "No definida"
    )
  );
  row.appendChild(tablita);
}

 function tablas3() {
   var row = columna.rows[columnaR];
   var creartr = document.createElement("tr");
   columna.appendChild(creartr);
   var tablita = document.createElement("td");
   tablita.appendChild(
     document.createTextNode(Usuario[columnaR]?.id ?? Usuario[columnaR]?.zipcode)
   );
   row.appendChild(tablita);
 }

//Estoy con un proceso complicado para eliminar las tablar de los usuarios.

function eliminar() {
  for (let i = 0; i <= 3; i++) {
    resetTable();
    document.querySelector("#eliminarUsuarios").style.display = "none";
    document.querySelector("#miTabla").style.display = "none";
  }
}

function resetTable() {
    var filas = columna.getElementsByTagName("tr");
    for (var i = 0; i < filas.length; i++) {
      var fila = filas[i];
      var celdas = fila.getElementsByTagName("td");
      for (var j = 0; j < celdas.length; j++) {
        fila.removeChild(celdas[j]);
      }
    }
  }