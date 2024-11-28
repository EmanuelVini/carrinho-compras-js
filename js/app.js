let totalGeral = 0;
//document.getElementById("lista-produtos").innerHTML = "";
//document.getElementById("valor-total").innerHTML = "R$ 0";
limpar();

function adicionar() {
  //recuperar valores, produto, quantidade, valor
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;

  //calcular preço subtotal
  let preço = quantidade * valorUnitario;

  //adicionar carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
  //atualizar valor total
  totalGeral = totalGeral + preço;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$ 0";
}
