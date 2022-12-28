let valor = document.getElementById("Busqueda");
const button = document.getElementById("Guardando");
const codigoSeg = document.getElementById("Seguridad:");
const etiquetaPos = document.getElementById("Cliente");
const Tocador = document.getElementById("OnclickVacio");
var imagenes = document.getElementById('ImagenPerfil');
var Consutas = document.getElementById("Consultas");
var Apellido = document.getElementById("Apellido");
var Inputinit = document.getElementById("Nombres");
var Contraseña = document.getElementById("contraseña");
var dia = document.getElementById("numeroDeFecha");
var mes = document.getElementById("fechaNacimiento");
var Correito = document.getElementById("Correo");
let EtiquetaP = {};
var Etiquetas = "Se cargaran los datos";

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
    nombres: "Fernando",
    apellido: "Flores",
    consultas: "¿Reparaciones?",
    id: "9",
    Identificador: 4
  },
];

let cantidadUsuario = Usuario.length;

etiquetaPos.innerHTML = "<H1>Informacón personal:</H1>" + Etiquetas; //Inicializacion de Elemento.

function azares() {
  var numeroUsuario = cantidadUsuario;
  var azar = Math.random() * 10000000000000;
  var redondeo = Math.floor(azar)
  let numeros = numeroUsuario * redondeo;
  return numeros
}

button.addEventListener('click', () => {
  const exportarid = "<p>"+"Codigo se Seguridad:"+Usuario[Usuario.length - 1].id+"</p>";
  codigoSeg.innerHTML = exportarid;
});

//---------------------------------------------------------------------------------Buscador


function Buscar() {
  var Personas = Usuario.find(Encontrado => Encontrado.id == valor.value);
    if (Personas) {
      pushDatos()
    }
    else {
      console.log("Usuario no encontrado");
    }

  function pushDatos() {
    Inputinit.value = Personas.nombres;
    Apellido.value = Personas.apellido;
    Consutas.value = Personas.consultas;
    imagenes.value = Personas.Imagen;
  };
};


function reEditarDatos() {
  var valores = Usuario.push({
    nombres: Usuario[Constante].nombres = Usuario[Constante].nombres,
    apellido: Buscar().apellido  = Usuario[Constante].apellido,
    consultas: Buscar().consultas  = Usuario[Constante].consultas,
    id: Buscar().id  = Usuario[Constante].id,
    Imagen: Buscar().Imagen = Usuario[Constante].Imagen
  })
};

//---------------------------------------------------------------------------------Buscador

function DatosUsuarios() {
  soloNombre = Inputinit.value;
  soloApellido = Apellido.value;
  soloImagen = imagenes.value;
  soloDia = dia.value;
  soloConsultas = Consutas.value;
  soloContra = Contraseña.value;
  soloMes = mes.value;
  soloEmail = Correito.value;

    (soloNombre = Usuario.push({
      nombres: soloNombre,
      apellido: soloApellido,
      Imagen: soloImagen,
      email: soloEmail,
      Pass: soloContra,
      dia: soloDia,
      Mes: soloMes,
      consultas: soloConsultas,
      Identificador: cantidadUsuario,
      id: azares(),
    }));

  ImprimirDatos();
}

//---------------------------------------------------------------------------------Pusheo de Datos

function ImprimirDatos() {
  const valorUsuario = Usuario.find(Encontrado => Encontrado.id == valor.value);
  if (valorUsuario) {
    var Constante = valorUsuario.Identificador;
    Datos =
    "<spam>Nombre:</spam>" + Usuario[Constante].nombres +
    "<br/>" +
    "<spam>Apellido:</spam>" + Usuario[Constante].apellido +
    "<br/>" +
    "<spam>Consultas:</spam>" + Usuario[Constante].consultas +
    "<br/>" +
    "<spam>Codigo Secreto:</spam>" + Usuario[Constante].id
    etiquetaPos.innerHTML = "<H1>Cargados:</H1>" + Datos;
  } else {
    etiquetaPos.innerHTML = "<spam>Se ha guardado tu usuario ✔</spam>";
  }
  
}

function Renombrar() {
  const valorUsuario = Usuario.find(Encontrado => Encontrado.id == valor.value);
  var Constante = valorUsuario.Identificador;
  Usuario[Constante].nombres = Inputinit.value;
  Usuario[Constante].apellido = Apellido.value;
  Usuario[Constante].consultas = Consutas.value;
  Usuario[Constante].Pass = Contraseña.value;
  Usuario[Constante].email = Correito.value;
  Usuario[Constante].Mes = mes.value;
  Usuario[Constante].dia = dia.value;
  ImprimirDatos();
}

// Imprime el nombre de un arrays

// Codigo para arrays

var Prueba = ["¿Hace tu pregunta?",];

function Actualizar() {
  const info = Tocador.value;
  let numerossumados = Prueba.length; 
  valoresfinaes = Prueba.push({
    mensaje: info,
    N: Prueba.length
  })
    const ImprimirD = "<tr>" + Prueba[numerossumados].mensaje + "</tr>" + "<br/>";
  document.getElementById("table").innerHTML = ImprimirD;
};

document.getElementById("Actualizar").innerHTML = Prueba; 

// imprime actualizacion
//La idea hacer un chat bots pero tambien la consulta
