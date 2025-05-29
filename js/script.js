// Variável global para armazenar o valor total da lista
var valorTotal = 0;

function addItem(btn) {
  // seleciona o elemento pelo id
  const lista = document.getElementById("lista-produtos");

  // pega o produto relacionado
  const divItem = btn.closest(".produto");

  const imagem = divItem.querySelector(".img_produto").src;
  const nome = divItem.querySelector(".nome_produto").textContent;
  const preco = divItem.querySelector(".valor_produto").textContent;

  // Criação da div do item
  const item = document.createElement("div");
  item.style.width = "100%";
  item.style.height = "10%";
  item.style.display = "grid";
  item.style.gridTemplateColumns = "10% 40% 20% 5%";
  item.style.justifyContent = "space-around";
  item.style.alignItems = "center";
  item.style.borderBottom = "solid 1px black";
  item.style.backgroundColor = "";
  item.style.boxShadow = " .1em .1em .1em rgba(0, 0, 0, 0.81)";
  lista.appendChild(item);

  // Imagem do produto na lista
  const imgItem = document.createElement("img");
  imgItem.src = imagem;
  imgItem.style.width = "110%";
  imgItem.style.borderRadius = ".5em";

  item.appendChild(imgItem);

  // Nome do produto
  const nomeItem = document.createElement("p");
  nomeItem.textContent = nome;
  item.appendChild(nomeItem);

  // Preço do produto
  const precoItem = document.createElement("p");
  precoItem.textContent = preco;
  item.appendChild(precoItem);

  let valorItem = parseFloat(
    precoItem.textContent.replace("R$ ", "").replace(",", ".")
  );

  // Botão para excluir um item da lista
  const excluirItem = document.createElement("button");
  excluirItem.textContent = "X";
  excluirItem.style.backgroundColor = "red";
  excluirItem.style.color = "white";
  excluirItem.onclick = () => {
    //removendo item da lista
    valorTotal -= valorItem;
    lista.removeChild(item);
    // alert(nome + " removido da lista com sucesso!";
    // subtrai o valor do item do total da lista
    atualizarValorTotal();
  };

  //soma o valor do item ao total da lista
  item.appendChild(excluirItem);

  // Adicionando o item na lista
  valorTotal += valorItem;
  atualizarValorTotal();
}

function atualizarValorTotal() {
  let total = document.getElementById("valor-total");
  total.innerHTML = "R$ " + valorTotal.toFixed(2).replace(".", ",");

  if(total.innerHTML == "R$ -0.00") {
    total.innerHTML = "R$ 0.00";
  }
  else
  {
    total.style.color = "red";
    total.style.fontSize = "1.5em";
  }
}

