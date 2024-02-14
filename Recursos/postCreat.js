const posteo = document.getElementById("postCreador");
var postLoad = document.getElementById("postLoad");
let textPost = document.getElementById("post");
const posteos = [
  { id: 6, texto: "Todo lo que quieras postear!", usuario: "@mor_2314" },
  { id: 0, texto: "Es raro, me gusta esta red social", usuario: "@Luisandres.nk" },
];

posteosNew = { ...Usuario }; // Cree una copia del objeto.
// setTimeout(
//   ((usuarioPost = Usuario.map(({ id, username }) => {
//     return id, username;
//   })),
//   5000)
// );

function cargar() {
  var boxPost = document.createElement("div");
  postLoad.appendChild(boxPost);
  let textDePost = textPost.value;
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
    textDePost +
    "</p>" +
    "</div>";
  boxPost.innerHTML = postearPost;
  return posteos.push({
    id: Buscar(),
    usuario: usuarioEncontrado,
    texto: textPost.value,
  });
}
