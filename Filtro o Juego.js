let Usuario = [
  {
    nombres: "Luis Andres",
    apellido: "Olmedo",
    consultas: "¿Reparaciones?",
    id: 8000,
  },
  {
    nombres: "Juan",
    apellido: "Andres",
    consultas: "¿Reparaciones?",
    id: 36,
  },
  {
    nombres: "Jose",
    apellido: "Montenegro",
    consultas: "¿Reparaciones?",
    id: 15,
  },
  {
    nombres: "Leo",
    apellido: "Villalva",
    consultas: "¿Reparaciones?",
    id: "10",
  },
  {
    nombres: "Diego",
    apellido: "Malqui",
    consultas: "¿Reparaciones?",
    id: "9",
  },
];

function azares() {
  var numeroUsuario = Usuario.length;
  var azar = Math.random() * 10000000000000;
  var redondeo = Math.floor(azar)
  let numeros = numeroUsuario * redondeo;
  return numeros
}

//---------------------------------------------------------------------------------Buscador

let valor = document.getElementById("Busqueda");

var Valores = Usuario.length -1;

function Buscar() {
  
  var Personas = Usuario.find(Encontrado => Encontrado.id == valor.value);
  
  function reInprimir() {
    Datos =
      Personas.nombres +
      "<br/>" +
      Personas.apellido +
      "<br/>" +
      Personas.consultas +
      "<br/>" +
      Personas.id;
     document.getElementById("Cliente").innerHTML = "<H1>Estos son tus datos</H1>" + Datos;
  };

  if (valor.value == Personas.id) {
    return Personas + reInprimir();
  } else {
    console.log("Usuario no encontrado");
  }
}

//---------------------------------------------------------------------------------Buscador

function DatosUsuarios() {
  var Inputinit = document.getElementById("Nombres");
  soloNombre = Inputinit.value;
  var Apellido = document.getElementById("Apellido");
  soloApellido = Apellido.value;
  var Consutas = document.getElementById("Consultas");
  soloConsultas = Consutas.value;
  var Id = //document.getElementById("Id");
    //soloid = Id.value;

    (soloNombre = Usuario.push({
      nombres: soloNombre,
      apellido: soloApellido,
      consultas: soloConsultas,
      id: azares(),
    }));
  ImprimirDatos();
}

function ImprimirDatos() {
  Datos =
    Usuario[5].nombres +
    "<br/>" +
    Usuario[5].apellido +
    "<br/>" +
    Usuario[5].consultas +
    "<br/>" +
    Usuario[5].id;
  document.getElementById("Cliente").innerHTML = "<H1>Tus Datos.</H1>" + Datos;
}

function Renombrar() {
  Usuario[5].nombres = document.getElementById("Nombres").value;
  Usuario[5].apellido = document.getElementById("Apellido").value;
  Usuario[5].consultas = document.getElementById("Consultas").value;
  ImprimirDatos();
}

var EtiquetaP = {};
var Etiquetas = "Nombres";
document.getElementById("Cliente").innerHTML = "<H1>Datos:</H1>" + Etiquetas;

//document.getElementById("Cliente").innerHTML = Usuario[5].nombres;

// Imprime el nombre de un arrays

// Codigo para arrays

function Actualizar() {
  var Inputinit = document.getElementById("OnclickVacio");
  Prueba = Inputinit.value;
  document.getElementById("Actualizar").innerHTML = Prueba;
}

var Prueba = "¿Hace tu pregunta?";

document.getElementById("Actualizar").innerHTML = Prueba; // imprime actualizacion

//La idea hacer un chat bots pero tambien la consulta.


// Buscador -----