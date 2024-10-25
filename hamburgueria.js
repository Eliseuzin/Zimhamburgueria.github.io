const Menugeral = document.getElementById("menu");
// console.log(Menugeral);
const Meucarrinho = document.getElementById("meucarrinho");
const dentrodocarrinho = document.getElementById("dentrodocarrinho");
const Valortotal = document.getElementById("valortotal");
const Fechar = document.getElementById("Fechar");
const Finalizar = document.getElementById("Finalizar");
const Quantidadecarinho = document.getElementById("quantidadecarinho");
const Addressinput = document.getElementById("address");
const Addresswarninput = document.getElementById("address-warn");

// const Meuccarrinho = Window.document.getElementById("meucarrinho");
// const dentrodocarinho = Window.document.getElementById("submeucarrinho");
// const Valortotal = Window.document.getElementById("valortotal");
// const Fechar = Window.document.getElementById("Fechar");
// const Finalizar = Window.document.getElementById("Finalizar");
// const Quantidadecarinho = Window.document.getElementById("quantidadecarinho");
// const Addressinput = Window.document.getElementById("address");
// const Addresswarninput = Window.document.getElementById("address-warn");

// abrir o carrinho

Meucarrinho.addEventListener("click", function () {
  dentrodocarrinho.style.display = "block";
});

//fechar o carrinho click fora
dentrodocarrinho.addEventListener("click", function (event) {
  if (event.target === dentrodocarrinho) {
    dentrodocarrinho.style.display = "none";
  }
});

//fechar carrinho no click em fechar

dentrodocarrinho.addEventListener("click", function (event) {
  if (event.target === Fechar) {
    dentrodocarrinho.style.display = "none";
  }
});

Menugeral.addEventListener("click", function (event) {
  // console.log(event.target);
  var parentButtom = event.target.closest(".addcart");
  console.log(parentButtom);
});
