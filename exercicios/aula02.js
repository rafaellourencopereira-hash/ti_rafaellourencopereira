// ex1
// Reprovam na régua de 4,5:1 (baixo contraste):
// 1. #888888 no #FFFFFF (razão aprox. 3.5:1)
// 2. #CCCCCC no #FFFFFF (razão aprox. 1.6:1)
// Ambas as combinações usam tons de cinza muito claros sobre fundo branco.

// ex2
// (a) alt="Fila de alunos da cantina dobrando o corredor durante o intervalo"
// (b) alt="Logotipo do CEEP Pedro Boaretto Neto"
// (c) alt="" (Aspas vazias, pois a imagem é puramente decorativa e o leitor de tela deve pulá-la)

// ex3
// O trecho falha em acessibilidade visual porque altera apenas a cor do botão (para verde). 
// Pessoas com daltonismo ou deficiência visual não perceberão se a ação foi confirmada. 
// A informação não deve depender apenas da cor.
// Correção:
botao.addEventListener("click", function() {
  botao.style.backgroundColor = "green";
  botao.textContent = "Apoiado";
});

// ex4
// 1. HTML: Adicionei o parágrafo explicativo dentro da tag <header>: <p>Aponte um problema da escola e apoie os que mais te atrapalham.</p>
// 2. CSS: Adicionei a regra de foco para navegabilidade por teclado: .apoiar:focus { outline: 3px solid #C00000; outline-offset: 2px; }
// 3. JS/HTML: Garanti que o clique altera o texto de 'Apoiar' para 'Apoiado' e atualiza o número no contador de apoios.

// ex5
// Tabela de Auditoria preenchida (1: Sim, 2: Sim, 3: Sim, 4: Sim, 5: Sim, 6: Sim, 7: Sim, 8: Sim).
// 3 Melhorias em ordem de prioridade (Impacto vs Esforço):
// 1º Adicionar atributo 'alt' em todas as imagens (Alto Impacto / Pouco Esforço - Acessibilidade).
// 2º Ajustar o foco customizado nos botões via CSS para destacar no Tab (Médio Impacto / Pouco Esforço).
// 3º Reformular o layout dos cartões com CSS Grid/Flexbox (Médio Impacto / Muito Esforço).