const posteo = document.getElementById("postCreador");
var postLoad = document.getElementById("postLoad");
let textPost = document.getElementById("post");
const posteos = [
  {
    id: 36,
    texto: "Post Prueba ✅",
    usuario: "@mor_2314",
  },
  {
    id: 0,
    texto: "cargamos con forEach 😎",
    usuario: "@luisandres.nk",
  },
  {
    id: 0,
    texto: "Se cargan correctamente 💬",
    usuario: "@luisandres.nk",
  },
  {
    id: 0,
    texto: "Otro 14 de feb, soltero y feliz 😎",
    usuario: "@luisandres.nk",
  },
  {
    id: 1,
    usuario: "Juanma",
    texto: "Limpieza de Js, Css, corrección de palabras. 👀",
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
    "<input type='image' src='./I/🦆 icon _edit pencil_.png' class='botonImagen'>" +
    "</br>" +
    "<input type='image' src='./I/🦆 icon _trash_.png' class='botonImagen'>" +
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
  });
}
