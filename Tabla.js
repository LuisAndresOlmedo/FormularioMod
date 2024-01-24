var columna = document.getElementById("miTabla");
var columnaId = 0;
var columnaR = 0;
let corona = document.querySelector("#miTabla").style.visibility = "visible";

function numerosMas() {
    for (let i = 1; i <= Usuario.length - 1; i++) {
      columnaR++;
      tablas();
      tablas2();
      tablas3();
      tablas4();
      tablas5();
      tablas6();
      tablas7();
    }
    return columnaR;
  }
  
  function tablas() {
    var row = columna.rows[columnaR];
    var creartr = document.createElement("tr");
    columna.appendChild(creartr);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].nombres ?? Usuario[columnaR].name.firstname ?? 'No encontrado'));
    row.appendChild(tablita);
  }
  
  function tablas2() {
    var row = columna.rows[columnaR];
    var creartr = document.createElement("tr");
    columna.appendChild(creartr);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].apellido ?? Usuario[columnaR].name.lastname));
    row.appendChild(tablita);
  }
  
  function tablas3() {
    var row = columna.rows[columnaR];
    var creartr = document.createElement("tr");
    columna.appendChild(creartr);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].consultas ?? "Cargando"));
    row.appendChild(tablita);
  }
  
  function tablas4() {
    var row = columna.rows[columnaR];
    var creartr = document.createElement("tr");
    columna.appendChild(creartr);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].email));
    row.appendChild(tablita);
  }
  
  function tablas5() {
    var row = columna.rows[columnaR];
    var nuevaFila = document.createElement("tr");
    columna.appendChild(nuevaFila);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].Pass ?? Usuario[columnaR].password ?? "No definida"));
    row.appendChild(tablita);
  }
  
  function tablas6() {
    var row = columna.rows[columnaR];
    var creartr = document.createElement("tr");
    columna.appendChild(creartr);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].id ?? Usuario[columnaR].zipcode));
    row.appendChild(tablita);
  }
  
  function tablas7() {
    var row = columna.rows[columnaR];
    var creartr = document.createElement("tr");
    columna.appendChild(creartr);
    var tablita = document.createElement("td");
    tablita.appendChild(document.createTextNode(Usuario[columnaR].Mes ?? "Viajero del tiempo"));
    row.appendChild(tablita);
  }