Responda em exercicios/aula02.js, abrindo cada questão com o marcador (// ex1, // ex2, e assim
por diante). Os exercícios 4 e 5 são feitos no index.html, e no arquivo de exercícios você escreve só o
que mudou.

1. Destes quatro pares, quais reprovam na régua de 4,5:1? Você pode usar um medidor de contraste
na internet.
#FFFFFF no #1F4E79 #888888 no #FFFFFF #FFFFFF no #C00000 #CCCCCC no #FFFFFF

Reprova: #CCCCCC no #FFFFFF

2. Escreva o alt para cada uma destas três imagens:
(a) foto da fila da cantina dobrando o corredor no intervalo; (b) o logotipo da escola no topo da página;
(c) uma listra colorida usada só para enfeitar a borda do cartão.

(a) alt="Fila de alunos na cantina dobrando o corredor durante o intervalo"
(b) alt="Logotipo da Escola"
(c) alt=""

3. O trecho abaixo roda, não dá erro, e mesmo assim deixa parte das pessoas sem saber o que aconteceu.
Diga por quê e escreva a correção.
botao.addEventListener("click", function() {
botao.style.backgroundColor = "green";
});

Motivo: A mudança de estado é informada apenas pela cor, impedindo que pessoas cegas ou daltônicas saibam o que aconteceu.
Correção:
botao.addEventListener("click", function() {
  botao.style.backgroundColor = "green";
  botao.setAttribute("aria-label", "Ação concluída com sucesso");
});

4. No seu index.html, faça as três correções obrigatórias da seção 8. Escreva aqui, em três linhas, o
que você mudou em cada uma.

1. Adicionado o atributo lang="pt-BR" na tag <html>.
2. Adicionado o atributo alt descritivo em todas as imagens da página.
3. Adicionadas as tags <label> associadas aos <input> do formulário.

5. Preencha a tabela de auditoria da seção 8 e escolha três melhorias que você faria na sua página.
Coloque em ordem, da que você faria primeiro à última, e escreva uma linha explicando por que essa
ordem. Pelo menos uma das três tem que ser de acessibilidade.

1ª (Acessibilidade): Corrigir o contraste de cor dos textos para no mínimo 4.5:1.
2ª (Acessibilidade): Adicionar o atributo alt em todas as imagens decorativas e informativas.
3ª (Desempenho): Otimizar o tamanho das imagens para carregar a página mais rápido.
Justificativa da ordem: Acessibilidade é prioridade para garantir que o conteúdo seja legível e utilizável por todos antes de otimizar o desempenho.