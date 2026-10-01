// AULA 07: Seleciona todos os botões de apoiar da página
let botoesApoiar = document.querySelectorAll('.apoiar');

// Percorre a lista de botões de apoiar e adiciona o evento de clique em cada um
botoesApoiar.forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Localiza o cartão pai do botão clicado
    let cartao = botao.parentElement;
    
    // Procura o elemento da contagem dentro desse cartão específico
    let display = cartao.querySelector('.contagem');
    
    // Converte o texto para número e incrementa
    let valor = Number(display.textContent);
    valor++;
    
    // Atualiza o valor na tela
    display.textContent = valor;
  });
});

// AULA 07 (Exercício 6): Seleciona todos os botões de remover apoio
let botoesRemover = document.querySelectorAll('.remover');

// Percorre a lista de botões de remover e adiciona o evento de clique
botoesRemover.forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Localiza o cartão pai do botão clicado
    let cartao = botao.parentElement;
    
    // Procura o elemento da contagem dentro desse cartão específico
    let display = cartao.querySelector('.contagem');
    
    // Converte o texto para número
    let valor = Number(display.textContent);
    
    // Garante que o contador não fique menor que zero
    if (valor > 0) {
      valor--;
      display.textContent = valor;
    }
  });
});