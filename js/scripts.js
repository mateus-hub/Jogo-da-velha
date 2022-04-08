// definir o marcador de x e o
let x = document.querySelector(".x");
let o = document.querySelector(".o");
//pegar caixas
let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o v eventop de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // quando alguem clica na caixa
  boxes[i].addEventListener("click", function () {
    // setando o elemento pra ser inserido no grid "campo"
    let el = checkEl(player1, player2);

    //determinando se tem algum nó filho "x" ou "o"
    if (this.childNodes.length == 0) {
      // criando filho do clone do elemento definido ná lógica
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      // computar jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
    }
  });
}

// identifica quem é o jogador
function checkEl(player1, player2) {
  if (player1 == player2) {
    //x
    el = x;
  } else {
    //o
    el = o;
  }

  return el;
}
