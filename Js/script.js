// Cria uma lista para guardar os itens do carrinho
let carrinho = [];
// Cria uma variável para somar os valores dos produtos
let total = 0;

// Função chamada quando a pessoa tenta fazer login
function login() {
  // Pega o valor digitado no campo de e-mail
  const email = document.getElementById("email").value;
  // Pega o valor digitado no campo de senha
  const senha = document.getElementById("password").value;

  // Se os dois campos estiverem preenchidos, mostra mensagem de boas-vindas
  if (email && senha) {
    alert(`Seja bem-vindo, ${email}!`);
  } else {
    // Se algum campo estiver vazio, avisa o usuário
    alert("Preencha o e-mail e a senha.");
  }
}

// Função que adiciona um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  // Coloca o item na lista do carrinho
  carrinho.push({ nome, preco });
  // Soma o valor do item ao total
  total += preco;
  // Atualiza a parte do site que mostra o carrinho
  atualizarCarrinho();
}

// Função que atualiza a exibição do carrinho na tela
function atualizarCarrinho() {
  // Formata o valor total para o formato brasileiro (vírgula)
  const totalFormatado = total.toFixed(2).replace(".", ",");
  // Mostra na tela quantos itens tem no carrinho e o valor total
  document.getElementById("cart-count").innerHTML = `🛒 (${carrinho.length} itens) - Total: R$ <span id="total">${totalFormatado}</span>`;
}
