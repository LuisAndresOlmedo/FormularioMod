let posteo = document.getElementById("postCreador");
var postLoad = document.getElementById("postLoad");
let textPost = document.getElementById("post");
const filtroS = document.getElementById("filtro");
const exportPostBuscador = document.getElementById("resultadoFiltro");

let contador1 = 0;

function ejecutar() {
  let objeto = Usuario.find((u) => u.Instagram == filtroS.value);
  let objet = posteos.filter((U) => U.usuario == objeto.Instagram);
  var plus =
    "<div class='mostrarUsuarios'><p class='username'>" +
    objet[contador1++].usuario +
    "</p><p>" +
    objet[contador1++].texto +
    "</p></div>";
  return objet.forEach(() => exportPostBuscador.innerHTML = plus);
}

const posteos = [
  {
    id: 36,
    texto: "Post Prueba ✅",
    usuario: "@juanCarlos",
    fecha: {
      dia: "Fri",
      mes: "Feb",
      diaDelMes: "16",
      año: "2024",
      hora: "16:03:33",
      timeZone: "GMT-0300",
      timeZoneNombre: "(hora estándar de Argentina)",
    },
  },
  {
    id: 0,
    texto: "cargamos con forEach 😎",
    usuario: "@luisandres.nk",
    fecha: {
      dia: "Fri",
      mes: "Feb",
      diaDelMes: "16",
      año: "2024",
      hora: "16:03:33",
      timeZone: "GMT-0300",
      timeZoneNombre: "(hora estándar de Argentina)",
    },
  },
  {
    id: 0,
    texto: "Se cargan correctamente 💬",
    usuario: "@luisandres.nk",
    fecha: {
      dia: "Fri",
      mes: "Feb",
      diaDelMes: "16",
      año: "2024",
      hora: "16:03:33",
      timeZone: "GMT-0300",
      timeZoneNombre: "(hora estándar de Argentina)",
    },
  },
  {
    id: 0,
    texto: "Otro 14 de feb, soltero y feliz 😎",
    usuario: "@luisandres.nk",
    fecha: {
      dia: "Fri",
      mes: "Feb",
      diaDelMes: "16",
      año: "2024",
      hora: "16:03:33",
      timeZone: "GMT-0300",
      timeZoneNombre: "(hora estándar de Argentina)",
    },
  },
  {
    id: 1,
    usuario: "@juanCarlos",
    texto: "Limpieza de Js, Css, corrección de palabras. 👀",
    fecha: {
      dia: "Fri",
      mes: "Feb",
      diaDelMes: "14",
      año: "2024",
      hora: "16:03:33",
      timeZone: "GMT-0300",
      timeZoneNombre: "(hora estándar de Argentina)",
    },
  },
];

function tiempoDeCarga() {
  setTimeout(
    ((usuarioPost = Usuario.map(({ id, username }) => {
      return id, username;
    })),
    2000)
  );
}

let identificadorUsuario = Usuario.filter((u) => {
  return u.id == posteos[0].username;
});

let fechaActual = Date().split(" ");

let contador = 0;
posteos.forEach(() =>
  cargarPstPrevios(
    posteos[contador].usuario,
    posteos[contador].texto,
    contador++
  )
);

function cargarPstPrevios(usuarioEncontrado, textDePost) {
  var boxPost = document.createElement("div");
  postLoad.appendChild(boxPost);
  boxPost.classList.add("boxMax");
  const postearPost =
    "<div class='postLoaders'>" +
    "<div>" +
    "<h4 class='nameUser'>" +
    usuarioEncontrado +
    "</h4>" +
    "<p class='postUser'>" +
    textDePost +
    "</p>" +
    "</div>" +
    "<div class='editarEliminar'>" +
    "<input type='image' src='./image/🦆 icon _edit pencil_.png' class='botonImagen'>" +
    "</br>" +
    "<input type='image' src='./image/🦆 icon _trash_.png' class='botonImagen'>" +
    "</div>" +
    "</div>";
  boxPost.innerHTML = postearPost;
}

function cargar() {
  var boxPost = document.createElement("div");
  postLoad.appendChild(boxPost);
  let textDePost = textPost.value;
  boxPost.classList.add("boxMax");
  const usuarioEncontrado = usuarioPost[Buscar()];
  const postearPost =
    "<div class='postLoaders'>" +
    "<div>" +
    "<h4 class='nameUser'>@" +
    usuarioEncontrado +
    "</h4>" +
    "<p class='postUser'>" +
    textDePost +
    "</p>" +
    "</div>" +
    "<div class='editarEliminar'>" +
    "<input type='image' src='./I/🦆 icon _edit pencil_.png' class='botonImagen'>" +
    "</br>" +
    "<input type='image' src='./I/🦆 icon _trash_.png' class='botonImagen'>" +
    "</div>" +
    "</div>";
  boxPost.innerHTML = postearPost;
  return posteos.push({
    id: Buscar(),
    usuario: usuarioEncontrado,
    texto: textPost.value,
    fecha: {
      dia: Date().split(" ")[0],
      mes: Date().split(" ")[1],
      diaDelMes: Date().split(" ")[2],
      año: Date().split(" ")[3],
      hora: Date().split(" ")[4].split(":"),
      timeZone: Date().split(" ")[5],
      timeZoneNombre: Date().split(" ")[6],
    },
  });
}
