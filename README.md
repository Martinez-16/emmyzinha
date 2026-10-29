# Emmy · um universo todinho seu

Presente de José para Emmy, com tema Kuromi × Gengar, pixel art original em código e detalhes de crochê. Vite + HTML/CSS/JavaScript puro; sem framework, backend ou banco de dados.

## Rodar no computador

Instale Node.js **22.12 ou mais recente**. Abra o terminal dentro desta pasta:

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar. Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

Não abra `index.html` por duplo clique: os módulos precisam do servidor. A pasta `dist/` terá **index.html e galeria.html**, com as fontes e os demais arquivos locais.

## Personalizar em cinco minutos

1. **Textos e data:** abra `src/conteudo/textos.js`. O arquivo tem instruções no início, uma informação por linha e comentários indicando cada seção. Altere `nomeDela`, `assinatura` e `dataInicioNamoro` nas primeiras linhas. A data usa o formato `AAAA-MM-DD`; vazia, mantém o contador em espera. O contador considera meia-noite em `America/Sao_Paulo` e não exibe números negativos.
2. **Fotos:** coloque os arquivos em `public/fotos/`. Depois adicione entradas em `src/conteudo/fotos.js`:

   ```js
   export const fotos = [
     { arquivo: 'foto-01.jpg', legenda: 'Escreva a legenda de vocês', data: '' },
     { arquivo: 'foto-02.jpg', legenda: 'Mais uma lembrança', data: '' }
   ];
   ```

   A data é opcional; quando preenchida, use `AAAA-MM-DD`. Prefira nomes simples, com as mesmas maiúsculas/minúsculas do arquivo. Comprima as imagens para cerca de **1600 px de largura e até 500 KB**. Não escreva `public/` nem `/fotos/` em `arquivo`: o código acrescenta `/fotos/` automaticamente. Lista vazia ou arquivo ausente mostra um espaço amigável.
3. **Cores e fontes:** edite as variáveis de `src/estilos/tema.css`. As fontes Pixelify Sans e DM Sans são instaladas via npm e servidas localmente, sem CDN.
4. **Sprites:** edite `src/pixel/sprites.js`. As letras das matrizes representam as cores da paleta; `.` é transparente. Nenhuma imagem oficial foi baixada ou incluída.

## Onde alterar cada texto

Você só precisa de **`src/conteudo/textos.js`** para mudar as frases. Não precisa editar HTML nem os scripts das brincadeiras.

| Quero mudar… | Procure em `textos.js` |
| --- | --- |
| Nomes e data do namoro | `nomeDela`, `assinatura` e `dataInicioNamoro`, no começo |
| Nome do site no cabeçalho | `marca` |
| Frases da introdução | `entrada` |
| Título e descrição da primeira tela | `inicio` |
| Texto do botão que leva às fotos | `inicio.fotos` |
| Carta principal | `carta.paragrafos` |
| Título, envelope e despedida da carta | `carta` |
| Falas dos personagens | `frasesKuromi` e `frasesGengar` |
| Cartinhas “abra quando” | `abraQuando`: `rotulo` e `mensagem` |
| Título e mensagens da galeria | `galeria` |
| Mensagem final | `rodape.frase` |
| Legenda de uma foto | `legenda` no arquivo **`src/conteudo/fotos.js`** |

Por exemplo, para trocar a carta, substitua a lista `paragrafos` por seus próprios textos:

```js
paragrafos: [
  "Escreva o primeiro parágrafo aqui.",
  "Escreva o segundo parágrafo aqui.",
  "Escreva quantos parágrafos quiser."
],
```

Cada item é um parágrafo. Para adicionar outro, coloque uma vírgula depois do anterior. Preserve as aspas, vírgulas, colchetes e chaves. Aspas simples podem ficar dentro das duplas, como `"Este cantinho é 'nosso'."`; se precisar de aspas duplas dentro da frase, use `\"`.

Para manter uma quebra de linha **dentro do mesmo parágrafo**, use crases:

```js
paragrafos: [
  `Escreva sua primeira linha aqui.
Escreva a próxima linha aqui.`
],
```

Os trechos `${nomeDela}` e `${assinatura}` usam automaticamente os nomes definidos no início do arquivo. Nos avisos dos jogos, preserve os marcadores como `{numero}`, `{nome}` e `{jogadas}`: o site os preenche sozinho.

Com `npm run dev` aberto, salve o arquivo para ver o resultado. Antes de publicar suas alterações, rode `npm run build`; se esquecer uma aspa ou vírgula, o terminal indica onde corrigir.

## O que funciona

- Entrada pulável com Gengar, sorriso e transição para Kuromi. Só aparece uma vez por sessão; use **Rever a entrada** no rodapé para repetir.
- O botão principal **Nossos pequenos instantes** abre a galeria. A carta abre **somente pelo próprio envelope**, com clique, toque, Enter ou Espaço. O link **A carta** do menu apenas leva até a seção.
- Envelope animado, carta rolável e fechamento pelo botão, Esc ou fundo. O foco retorna ao envelope depois de fechar.
- Contador de dias, horas e minutos, com estados para data vazia, inválida ou futura.
- Kuromi com partículas e Gengar com olhos que acompanham o ponteiro na seção dos personagens.
- Cartinhas que viram com clique, toque, Enter ou Espaço.
- Ateliê 16×16: mouse/toque, cores, borracha, confirmação para limpar e PNG **512×512 com transparência**, sem a grade. No teclado: setas para mover, Espaço/Enter para pintar, Shift + setas para traçar. O desenho fica salvo apenas no navegador usado.
- Memória com oito pares, jogadas, mensagem de vitória e reinício que cancela jogadas pendentes.
- Galeria em página separada, polaroids, imagens lazy, proporção reservada e lightbox com anterior/próxima, setas, swipe horizontal, Esc, X ou clique fora.
- Layout responsivo, foco visível, áreas de toque de 44 px ou mais, áreas seguras e respeito a `prefers-reduced-motion`.

## Publicar na Vercel

1. Envie esta pasta para um repositório seu no GitHub, GitLab ou Bitbucket (sem `node_modules/` e sem `dist/`).
2. Na Vercel, importe o repositório. Se o projeto estiver dentro de uma subpasta, selecione **site-emmy** como Root Directory.
3. Selecione **Framework Preset: Vite**, **Build Command: `npm run build`**, **Output Directory: `dist`**. Mantenha uma versão de Node compatível com `package.json`.
4. Clique em Deploy. Depois de editar, um novo push dispara outra publicação.

Não precisa de `vercel.json`, variável de ambiente nem reescrita SPA: o link `/galeria.html` é uma página real. A pasta `.openai/`, quando presente no checkout, serve somente à hospedagem de trabalho e pode ser omitida na sua cópia para Vercel.

O projeto usa `noindex, nofollow` por ser um presente pessoal. Isso pede que buscadores não indexem a página; não é uma senha ou controle de acesso. Defina a visibilidade da hospedagem antes de adicionar fotos pessoais.

## Organização

```text
index.html / galeria.html  → estrutura das duas páginas
src/conteudo/             → textos, data, fotos e legendas
src/pixel/sprites.js      → todos os desenhos em pixels
src/estilos/              → tema, base e estilos por seção
src/scripts/              → entrada, carta e galeria
src/scripts/interativos/  → um arquivo por brincadeira
public/fotos/             → coloque as fotos aqui
tests/logica.test.js      → datas, memória e continuidade do desenho
PROGRESSO.md              → o que já foi feito e o que personalizar
```

`npm test` executa os testes de lógica com o próprio Node, sem instalar biblioteca de testes.

## Referências e manutenção

A pesquisa visual inspirou formas e textura; os desenhos finais foram criados como matrizes novas. Referências consultadas: [pixel art Kuromi](https://cloverworkss.itch.io/kuromi-sprite), [amigurumi Kuromi](https://www.elo7.com.br/kuromi-amigurumi-croche/dp/19BD9DD), [sprite Gengar](https://www.deviantart.com/michael12dz/art/Custom-Sprites-Gengar-920590129). Documentação: [Vite multipágina](https://vite.dev/guide/build#multi-page-app), [builds na Vercel](https://vercel.com/docs/builds/configure-a-build).

Kuromi e Gengar pertencem aos seus respectivos titulares; este é um projeto pessoal de fã. A versão do Vite está fixada pelo `package-lock.json`; use `npm ci` para reproduzir exatamente a instalação.
