let Usuario = [
  {
    nombres: "Luis Andres",
    apellido: "Olmedo",
    consultas: "¿Reparaciones?",
    id: 8000,
    Identificador: 0
  },
  {
    nombres: "Juan",
    apellido: "Andres",
    consultas: "¿Reparaciones?",
    id: 36,
    Identificador: 1
  },
  {
    nombres: "Jose",
    apellido: "Montenegro",
    consultas: "¿Reparaciones?",
    id: 15,
    Identificador: 2
  },
  {
    nombres: "Leo",
    apellido: "Villalva",
    consultas: "¿Reparaciones?",
    id: "10",
    Identificador: 3
  },
  {
    nombres: "Diego",
    apellido: "Malqui",
    consultas: "¿Reparaciones?",
    id: "9",
    Identificador: 4
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

function Buscar() {

  var Personas = Usuario.find(Encontrado => Encontrado.id == valor.value);
  
  if (Personas) {
  //  reInprimir();
    pushDatos()
  }
  else {
    console.log("Usuario no encontrado");
  }

  function pushDatos() {
    document.getElementById("Nombres").value = Personas.nombres;
    document.getElementById("Apellido").value = Personas.apellido;
    document.getElementById("Consultas").value = Personas.consultas;
  };

//  function reInprimir() {
//    Datos =
//      Personas.nombres +
//      "<br/>" +
//      Personas.apellido +
//      "<br/>" +
//      Personas.consultas +
//      "<br/>" +
//      Personas.id;
//     document.getElementById("Cliente").innerHTML = "<H1>Estos son tus datos</H1>" + Datos;
//  };
//  return Personas.Identificador
};


function reEditarDatos() {
  var valores = Usuario.push({
    nombres: Usuario[Constante].nombres = Usuario[Constante].nombres,
    apellido: Buscar().apellido  = Usuario[Constante].apellido,
    consultas: Buscar().consultas  = Usuario[Constante].consultas,
    id: Buscar().id  = Usuario[Constante].id
  })
  return
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
      Identificador: Usuario.length
    }));
  ImprimirDatos();
}

//---------------------------------------------------------------------------------Pusheo de Datos

function ImprimirDatos() {
  const valorUsuario = Usuario.find(Encontrado => Encontrado.id == valor.value);
  if (valorUsuario) {
    var Constante = valorUsuario.Identificador;
    Datos =
    Usuario[Constante].nombres +
    "<br/>" +
    Usuario[Constante].apellido +
    "<br/>" +
    Usuario[Constante].consultas +
    "<br/>" +
    Usuario[Constante].id;
    document.getElementById("Cliente").innerHTML = "<H1>Tus Datos.</H1>" + Datos;
  } else {
    document.getElementById("Cliente").innerHTML = "<H1>Se ha guardado tu usuario ✔</H1>";
  }
  
}

function Renombrar() {
  const valorUsuario = Usuario.find(Encontrado => Encontrado.id == valor.value);
  var Constante = valorUsuario.Identificador;
  Usuario[Constante].nombres = document.getElementById("Nombres").value;
  Usuario[Constante].apellido = document.getElementById("Apellido").value;
  Usuario[Constante].consultas = document.getElementById("Consultas").value;
//  ImprimirDatos();
}

var EtiquetaP = {};
var Etiquetas = "Nombres";
document.getElementById("Cliente").innerHTML = "<H1>Datos:</H1>" + Etiquetas;

// Imprime el nombre de un arrays

// Codigo para arrays

var Prueba = ["¿Hace tu pregunta?",];

function Actualizar() {
  var Inputinit = document.getElementById("OnclickVacio");
  const info = Inputinit.value;
  let numerossumados = Prueba.length; 
  valoresfinaes = Prueba.push({
    mensaje: info,
    N: Prueba.length
  })
    const ImprimirD = "<tr>" + Prueba[numerossumados].mensaje + "</tr>" + "<br/>";
  document.getElementById("table").innerHTML = ImprimirD;
};

document.getElementById("Actualizar").innerHTML = Prueba; 


const button = document.getElementById("Guardando");
button.addEventListener('click', () => {
  var users = Usuario.length;
  const exportarid = "<p>" + "Codigo se Seguridad:" + Usuario[users - 1].id + "</p>" ;
  document.getElementById("Seguridad:").innerHTML = exportarid;
});

// imprime actualizacion
//La idea hacer un chat bots pero tambien la consulta
