let valor = document.getElementById("Busqueda");
let vCorreo = document.getElementById("bCorreo");
let vPass = document.getElementById("bPass");
let iniciar = document.getElementById("formulario");
let selector = document.getElementById("Genero");
const button = document.getElementById("Guardando");
const codigoSeg = document.getElementById("Seguridad");
const etiquetaPos = document.getElementById("Cliente");
const imagenes = document.getElementById("ImagenPerfil");
const Instagram = document.getElementById("Consultas");
const Apellido = document.getElementById("Apellido");
const Inputinit = document.getElementById("Nombres");
const Contraseña = document.getElementById("contraseña");
const dia = document.getElementById("numeroDeFecha");
const mes = document.getElementById("fechaNacimiento");
const Correito = document.getElementById("Correo");
const botoncito = document.getElementById("botoncito");
let cambios_de_valores = document.getElementById("Cambio");

document.querySelector("#MunudeUsuario").style.display = "none";
document.querySelector(".error").style.display = "none";
document.querySelector(".inciar_seccion").style.display = "block";

let EtiquetaP = {};
let Etiquetas = "<h5></h5>";
etiquetaPos.innerHTML = Etiquetas;
imagenes.src = "./I/Avatar.png";
var soloImagen = imagenes.src;

try {
  const url = fetch("https://fakestoreapi.com/users")
    .then((respuesta) => respuesta.json())
    .then((json) => {
      const usuarios_extras = json.map(
        ({ address, email, name, password, phone, username }) => {
          return {
            address,
            email,
            id: azares(),
            name,
            password,
            phone,
            username,
            Imagen: soloImagen,
            Mes: "2000-09",
            dia: "13",
            sexo: "",
            Identificador: cantidadUsuario++,
            Instagram: "@" + name.firstname + name.lastname,
          };
        }
      );
      Usuario.push(...usuarios_extras);
      tiempoDeCarga();
      return Usuario, usuarioPost;
    });
  console.log("usuarios con exito ✅");
} catch (error) {
  console.log("No está pusheando los usuarios");
}

// Objeto Usuario

let Usuario = [
  {
    nombres: "Luis Andres",
    apellido: "Olmedo",
    Instagram: "@Luisandres.nk",
    Imagen: "./I/Usuario.png",
    Mes: "2000-09",
    Pass: "AdministradoresDeEmpresas2000",
    dia: "13",
    email: "olmedoluisandres@gmial.com",
    id: 766224,
    Identificador: 0,
    sexo: "MASCULINO",
    username: "Luiso",
  },
  {
    nombres: "Juan",
    apellido: "Carlos",
    Instagram: "@juanCarlos",
    Imagen: "./I/Usuario 2.png",
    Mes: "2022-07",
    Pass: "JuanGuarnizoes1",
    dia: "12",
    email: "juancarlos@gmial.com",
    id: 36,
    Identificador: 1,
    post1: 0,
    sexo: "MASCULINO",
    username: "Juanma",
  },
  {
    nombres: "Jose",
    apellido: "Montenegro",
    Instagram: "@JoseMontenegro",
    Imagen: "./I/usuarios (1).png",
    Mes: "2022-07",
    Pass: "54esf54e",
    dia: "12",
    email: "josemontenegro@gmial.com",
    id: 15,
    Identificador: 2,
    sexo: "MASCULINO",
    username: "Joselo",
  },
  {
    nombres: "Leo",
    apellido: "Villalva",
    Instagram: "@LeoVillalva",
    Imagen: "./I/usuarios (2).png",
    Mes: "2022-07",
    Pass: "099udjmfd",
    dia: "12",
    email: "leonelvillalva@gmial.com",
    id: 10,
    Identificador: 3,
    sexo: "MASCULINO",
    username: "LeonelMessi",
  },
  {
    nombres: "Fernando",
    apellido: "Flores",
    Instagram: "@FernandoFlores",
    Imagen: "./I/usuarios (3).png",
    Mes: "2022-07",
    Pass: "8df98dsf9",
    dia: "12",
    email: "fernandoflores@gmial.com",
    id: 9,
    Identificador: 4,
    sexo: "FEMENINO",
    username: "Flavialorra",
  },
];

//document.addEventListener("keydown", function(envento) {
//  console.log(envento);
//});

let cantidadUsuario = Usuario.length;

function azares() {
  var numeroUsuario = cantidadUsuario;
  var azar = Math.random() * 100000;
  var redondeo = Math.floor(azar);
  let numeros = numeroUsuario * redondeo;
  return numeros;
}

button.addEventListener("click", () => {
  const exportarid =
    "<p>" + "Codigo se Seguridad:" + Usuario[Usuario.length - 1].id + "</p>";
  codigoSeg.innerHTML = exportarid;
});

//---------------------------------------------------------------------------------Buscador
function Buscar() {
  var Personas = Usuario.find((Encontrado) => Encontrado.id == valor.value);
  let varificadorEmail = Usuario.find((E) => E.email == vCorreo.value);
  let varificadorpass =
    Usuario.find((E) => E.Pass == vPass.value) ||
    Usuario.find((E) => E.password == vPass.value);

  if (varificadorEmail == varificadorpass) {
    if (Personas == varificadorEmail) {
      pushDatos();
      setTimeout(() => {
        document.querySelector("#error").style.display = "none";
        document.querySelector(".inciar_seccion").style.display = "none";
        cambios_de_valores.value = "Editar perfil";
        document.querySelector("#Cambio").style.display = "none";
        document.querySelector(".Renombrarstyle").style.display = "block";
        document.querySelector(".postCreate").style.display = "block";
      }, 1000);
      document.querySelector("#MunudeUsuario").style.display = "block";
      document.querySelector("#Guardando").style.display = "none";
      document.querySelector("#Guardando").style.display = "none";
      document.querySelector("#ImagenPerfil").style.display = "block";
    } else {
      document.querySelector("#error").style.background = "rgb(241 137 137)";
    }
  } else {
    document.querySelector("#error").style.background = "rgb(241 137 137)";
  }

  function pushDatos() {
    Inputinit.value = Personas.nombres || Personas.name.firstname.toUpperCase;
    Apellido.value = Personas.apellido || Personas.name.lastname.toUpperCase;
    Instagram.value = Personas.Instagram;
    Correito.value = Personas.email;
    mes.value = Personas.Mes;
    imagenes.value = Personas.Imagen;
    dia.value = Personas.dia;
    imagenes.src = Personas.Imagen;
    selector.value = Personas.sexo;
  }

  return Personas.Identificador;
}

function reEditarDatos() {
  var valores = Usuario.push({
    nombres: (Usuario[Constante].nombres =
      Usuario[Constante].nombres || Usuario[Constante].name.lastname),
    apellido: (Buscar().apellido =
      Usuario[Constante].apellido || Usuario[Constante].name.firstname),
    Instagram: (Buscar().Instagram = Usuario[Constante].Instagram),
    id: (Buscar().id = Usuario[Constante].id),
    Imagen: (Buscar().Imagen = Usuario[Constante].Imagen),
  });
}

//---------------------------------------------------------------------------------Buscador

function DatosUsuarios() {
  sexoMF = selector.value;
  soloNombre = Inputinit.value;
  soloApellido = Apellido.value;
  soloImagen = imagenes.src;
  soloDia = dia.value;
  soloInstagram = Instagram.value;
  soloContra = Contraseña.value;
  soloMes = mes.value;
  soloEmail = Correito.value;

  soloNombre = Usuario.push({
    nombres: soloNombre,
    apellido: soloApellido,
    Imagen: soloImagen,
    email: soloEmail,
    sexo: sexoMF,
    Pass: soloContra,
    dia: soloDia,
    Mes: soloMes,
    Instagram: soloInstagram,
    Identificador: cantidadUsuario,
    id: azares(),
  });
  usuarioPost = Usuario.map(({ id, username = Instagram.value }) => {
    return id, username;
  });
  ImprimirDatos();
}

//---------------------------------------------------------------------------------Pusheo de Datos

function ImprimirDatos() {
  const valorUsuario = Usuario.find(
    (Encontrado) => Encontrado.id == valor.value
  );
  if (valorUsuario) {
    var Constante = valorUsuario.Identificador;
    Datos =
      "<spam>Nombre:</spam>" +
      Usuario[Constante].nombres +
      "<br/>" +
      "<br/>" +
      "<spam>Apellido:</spam>" +
      Usuario[Constante].apellido +
      "<br/>" +
      "<br/>" +
      "<spam>Instagram:</spam>" +
      Usuario[Constante].Instagram +
      "<br/>" +
      "<br/>" +
      "<spam>Codigo Secreto:</spam>" +
      Usuario[Constante].id;
    etiquetaPos.innerHTML = "<H1>Cargados:</H1>" + Datos;
  } else {
    etiquetaPos.innerHTML = "<h3>Guardado ✅</h3>";
  }
}

function Renombrar() {
  const valorUsuario = Usuario.find(
    (Encontrado) => Encontrado.id == valor.value
  );
  var Constante = valorUsuario.Identificador;
  Usuario[Constante].nombres = Inputinit.value;
  Usuario[Constante].apellido = Apellido.value;
  Usuario[Constante].Instagram = Instagram.value;
  Usuario[Constante].Pass = Contraseña.value;
  Usuario[Constante].email = Correito.value;
  Usuario[Constante].Mes = mes.value;
  Usuario[Constante].dia = dia.value;
  Usuario[Constante].sexo = selector.value;
  ImprimirDatos();
  return Constante;
}

// Imprime el nombre de un arrays
