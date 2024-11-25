const Menugeral = document.getElementById("menu");
// console.log(Menugeral);
const Meucarrinho = document.getElementById("meucarrinho");
const dentrodocarrinho = document.getElementById("dentrodocarrinho");
const submeucarrinho = document.getElementById("submeucarrinho");
const subdentrodocarrinho = document.getElementById("subdentrodocarrinho");
const Valortotal = document.getElementById("valortotal");
const Fechar = document.getElementById("Fechar");
const Finalizar = document.getElementById("Finalizar");
const Quantidadecarinho = document.getElementById("quantidadecarinho");
const Addressinput = document.getElementById("address");
const Addresswarninput = document.getElementById("address-warn");
const itensaddnocarrinho = document.getElementById("itensadd");
const subbottom = document.getElementById("subbottom");
const out = document.getElementById("out");
const Finish = document.getElementById("Finish");
// const error = document.getElementById("error");
// const success = document.getElementById("success");

var listcar = [];
subbottom.style.display = "none";
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
  // submeucarrinho.innerHTML= "";
  // updatecarrinho();
  dentrodocarrinho.style.display = "block";
  // updatecarrinho();
  // subbottom.style.display = "none";
});

//fechar o carrinho, click fora
dentrodocarrinho.addEventListener("click", function (event) {
  if (event.target === dentrodocarrinho) {
    dentrodocarrinho.style.display = "none";
  }
});
//fim de outro teste

subbottom.addEventListener("click", function (event) {
  if (event.target === out) {
    dentrodocarrinho.style.display = "none";
  }
});
// updatecarrinho();

//fechar carrinho no click em fechar

dentrodocarrinho.addEventListener("click", function (event) {
  if (event.target === Fechar) {
    dentrodocarrinho.style.display = "none";
  }
});

Menugeral.addEventListener("click", function (event) {
  // console.log(event.target);

  var parentButtom = event.target.closest(".addcart");

  // console.log(parentButtom);

  if (parentButtom) {
    const name = parentButtom.getAttribute("data-name");
    const price = parseFloat(parentButtom.getAttribute("data-price"));

    // console.log(name);
    // console.log(price);

    //adicionar no carrinho

    addinmycar(name, price);
    // remoitenscarrinho(name);
  }
});

// função para adicionar no carrinho
function addinmycar(name, price) {
  // alert(` item is ${name} and  price is ${price}`);

  const checklistcar = listcar.find((item) => item.name === name);

  if (checklistcar) {
    //se o item já existe aumenta a quantidade +1
    // console.log(checklistcar);
    checklistcar.quantity += 1;

    // return;
  } else {
    listcar.push({
      name,
      price,
      quantity: 1,
    });
  }
  updatecarrinho();
  subbottom.style.display = "block";
}

//atualizar o carrinho

function updatecarrinho() {
  submeucarrinho.innerHTML = "";
  let total = 0;

  listcar.forEach((item) => {
    const incluirosprodutos = document.createElement("div");
    incluirosprodutos.setAttribute("class", "estilizarprodutos");

    // incluirosprodutos.style.display = "flex";
    // incluirosprodutos.style.justifyContent = "space between";
    // incluirosprodutos.style.color = "red";
    // incluirosprodutos.style.background = "black";

    incluirosprodutos.innerHTML = `<div>
        <div>
            <p>${item.name}</p>
            <p> Qtds:${item.quantity}</p>
            <p>R$:${item.price.toFixed(2)}</p>

        </div>

           <buttom class='removeritem' data-name="${item.name}">Remover</buttom>
      
    </div>`;
    total += item.price * item.quantity;
    submeucarrinho.appendChild(incluirosprodutos);
  });

  //valor total do carrinho
  Valortotal.textContent = `Total: ${total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;

  Quantidadecarinho.innerHTML = listcar.length;
}

// funçao para remover item
submeucarrinho.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeritem")) {
    const name = event.target.getAttribute("data-name");
    console.log(name);
    //chamar funçao
    removeritens(name);
  }
});

function removeritens(name) {
  const index = listcar.findIndex((item) => item.name === name);

  if (index !== -1) {
    const item = listcar[index];
    // console.log(item);

    if (item.quantity > 1) {
      item.quantity -= 1;
      updatecarrinho();
      return;
    } else {
      listcar.splice(index, 1);
      updatecarrinho();
    }
  }
}

Addressinput.addEventListener("input", function (event) {
  var inputValue = event.target.value;
  if (inputValue !== "") {
    // Addresswarninput.style.visibility = "hidden";
  }
});

Finish.addEventListener("click", function () {
  if (listcar.length === 0) return;

  if (Addressinput.value === "") {
    // Addresswarninput.style.visibility = "visible";
  }
  // if (Addressinput.value !== "") {
  //   Addresswarninput.style.visibility = "hidden";
  // }
  // if (inputValue.length <4) {
  //   Addresswarninput.style.visibility = "visible";
  // }
});
