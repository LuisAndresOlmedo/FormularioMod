let textodeposteo = document.getElementById("post");

const Post = Usuario.map(function(Identificador) {
  return Identificador;
});

function cicloFizzBuzz() {
  for (let numero = 0; numero > Post.Identificador; numero++) {
    if (numero = 1) {
      console.log("hay uno");
    } else {
      console.log("Muchos numeros");
    }
  }
}

function postUsers() {
  const ppp = document.getElementById("postAlone");

  var divisordedivisires = document.createElement("div");
  divisordedivisires.classList.add("justos");
  ppp.appendChild(divisordedivisires);

  var dividiendo = document.createElement("div");
  dividiendo.classList.add('divisorUSU');
  divisordedivisires.appendChild(dividiendo);
  //
  var imagenFace = document.createElement("img");
  imagenFace.src = Post.perfilPost;
  imagenFace.classList.add("imagenPost");
  dividiendo.appendChild(imagenFace);
  //
  var nameTags = document.createElement("p");
  nameTags.classList.add("name_Tag");
  nameTags.textContent = Post.tagName;
  dividiendo.appendChild(nameTags);
  //
  var divisorTwo = document.createElement("div");
  divisorTwo.classList.add('divisor2');
  divisordedivisires.appendChild(divisorTwo);
  //
  var name = document.createElement("h5");
  name.classList.add("nombre_de_Ususario");
  name.textContent = Post.nombre;
  divisorTwo.appendChild(name);
  //
  //
  var postText = document.createElement("h3");
  postText.textContent = textodeposteo.value;
  postText.classList.add("Texto_de_Posteo");
  divisorTwo.appendChild(postText);
  //
};
