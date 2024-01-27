const posteo = document.getElementById("postCreador");
const usuarioPost = [];

posteo.addEventListener("click",() => {
 setTimeout((usuarioPost = Usuario.map(({id, name  }) => {return id, name }), 5000))
});

const post = [
  {
    primer: usuarioPost,
  },
];