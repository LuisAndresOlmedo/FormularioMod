const posteo = document.getElementById("postCreador");
var postLoad = document.getElementById("postLoad");
let textPost = document.getElementById("post");
const posteos = [];

button.addEventListener("click", () =>
  setTimeout(
    ((usuarioPost = Usuario.map(({ id, username }) => {
      return id, username;
    })),
    2000)
  ));

function cargar() {
  var boxPost = document.createElement("div");
  postLoad.appendChild(boxPost);
    boxPost.classList.add("boxMax");
    const usuarioEncontrado = usuarioPost[Buscar()];
    const postearPost = 
    "<div" +
    " " +
    "class=" +
    "'postLoaders'" +
    ">" +
    "<p>" +
    "@" +
    usuarioEncontrado +
    "</p>" +
    "</br>" +
    "<p>" +
    textPost.value +
    "</p>" +
    "</div>";
    boxPost.innerHTML = postearPost;
    return posteos.push({id: Buscar(), usuario: usuarioEncontrado, texto: textPost.value});
  }
 