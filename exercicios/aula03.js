// ex1
// O HTML perde completamente toda a sua estilização e identidade visual. 
// O site é exibido "pelado", ou seja, apenas com o texto puro, fontes padrão do navegador, 
// elementos desalinhados e ocupando toda a largura da tela.

// ex2
// O defer não é estritamente necessário se a tag <script> estiver localizada no final do <body>, 
// pois o HTML já terá sido completamente lido (parsed) antes de executar o script. 
// A diferença central é que com o "defer" na tag <head>, o download do arquivo JS acontece 
// em paralelo com a leitura do HTML, otimizando o carregamento da página. Sem o "defer" e no topo, 
// a página trava até baixar e executar o script.

// ex3
/*
:root {
  --cor-alerta: #C00000;
}

.cartao-urgente {
  border: 3px solid var(--cor-alerta);
}

.titulo-urgente {
  color: var(--cor-alerta);
}
*/

// ex4
// Separei o projeto nos três arquivos (index.html, styles.css e script.js). 
// Ao separar, certifiquei-me de conferir o caminho relativo na tag <link> e a inclusão 
// correta do <script defer src="script.js">. O projeto funcionou corretamente sem erros no console.

// ex5
// 1. --cor-fundo-principal: Define a cor de fundo padrão de toda a aplicação para manter padrão visual.
// 2. --cor-texto-destaque: Utilizada nos títulos e botões para consistência visual.
// 3. --espaco-padrao: Define o padding/margin base (ex: 16px) para manter o alinhamento.
// 4. --borda-padrao: Define o estilo/largura das bordas dos cards e contêineres.