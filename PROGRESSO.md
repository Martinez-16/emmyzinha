# Ponto de continuação — site da Emmy

## Versão implementada

O site está completo em Vite + HTML/CSS/JavaScript puro, com duas páginas reais. As fontes são locais e os sprites foram desenhados em matrizes de pixels. A pesquisa de referência e as decisões de edição estão no README.

Funcionalidades prontas: entrada pulável/repetível, envelope e carta, contador, personagens clicáveis, cartinhas, ateliê 16×16 com PNG, memória de 8 pares e galeria com lightbox.

Data de início do namoro informada pelo José: **11/08/2026**. Já configurada como `2026-08-11` em `textos.js`; o contador parte da meia-noite no fuso de São Paulo.

## Ajustes pedidos nesta revisão

- O botão da primeira tela agora diz **Nossos pequenos instantes** e leva a `galeria.html`.
- A carta principal abre somente ao ativar o envelope. O link do menu apenas navega até a seção.
- Trilha sonora removida: botão, textos, estilos, módulo e pasta de áudio.
- `src/conteudo/textos.js` organizado por seções comentadas, com uma propriedade por linha. Os nomes do casal são definidos uma vez e reutilizados nos textos.
- README atualizado com um mapa de edição e exemplos para trocar os parágrafos da carta.

## Verificação realizada

- Revisão atual conferida no navegador: botão inicial abre a galeria; link do menu não abre a carta; envelope abre e fecha corretamente; botão de áudio ausente; primeira tela sem rolagem horizontal em 360 px.
- Todos os atributos de texto das duas páginas foram conferidos contra `textos.js`, sem chaves ausentes.
- Instalação npm e primeira compilação concluídas; `dist/` contém as duas páginas.
- Quatro testes de lógica passaram: fuso e contagem, validade de datas, distribuição dos pares e continuidade do traço.
- Página principal conferida em contêineres de 360, 390, 430, 768 e 1152 px; paisagem de 844×390. Sem rolagem horizontal. O teste usa o navegador desktop com largura limitada, não um iPhone físico.
- Carta aberta e fechada, incluindo Esc e leitura rolável em largura de celular. Tamanho do selo corrigido durante a revisão.
- Frases dos dois personagens e cartinha que vira conferidas.
- Desenho por teclado, confirmação para limpar e download PNG verificados.
- Memória concluída até 8/8 pares, com mensagem de vitória; reinício conferido.
- Galeria vazia, imagem carregada, arquivo ausente, anterior/próxima, gesto horizontal com ponteiro, setas e Esc conferidos. Imagens temporárias de teste removidas.
- `prefers-reduced-motion` e áreas seguras estão implementados; ainda é recomendável conferir o resultado no aparelho da Emmy.

## Próximas personalizações (dependem de vocês)

1. Trocar o trecho `[EDITE AQUI]` da carta e ajustar as mensagens ao jeito do casal.
2. Adicionar fotos em `public/fotos/` e suas legendas em `src/conteudo/fotos.js`.

O projeto está configurado para a Vercel com preset Vite, comando `npm run build` e saída `dist`. Não houve publicação na conta Vercel do usuário. A versão de trabalho pode ser acessada pela publicação privada do site; a identidade da hospedagem fica em `.openai/hosting.json` no checkout.

Para retomar, mantenha a estrutura atual e edite os arquivos da seção correspondente. Não é necessário migrar para React, Next ou outro framework.
