// Desenhos originais construídos para este presente. Cada letra é um pixel.
// "." é transparente. Você pode mudar as cores e desenhar nas matrizes.
const paleta = { '.': null, K: '#160d24', D: '#442d67', P: '#6a4fa3', L: '#9b7fd1', H: '#bea0ed', R: '#e8344a', W: '#fff8f3', S: '#ff5fa2', B: '#ffb3d1', Y: '#f2cf84' };
const sprite = linhas => ({ paleta, linhas });
export const gengar = {
  paleta: {
    ...paleta,
    K: "#352044", // Contorno roxo
    D: "#644587", // Sombra
    P: "#9465bd", // Roxo principal
    L: "#ae83d5", // Lilás
    H: "#c7a4e8", // Luz
    E: "#30203e", // Olhos
    F: "#fff8f3", // Brilho dos olhos
    I: "#755581", // Reflexo dos olhos
    S: "#ef83b1", // Rosa
    B: "#ffc0d8", // Rosa claro
    W: "#fff8f3", // Dentinhos
  },

  linhas: [
    "................................",
    "................................",
    "................................",
    "......KKK..............KKK......",
    "......KPKK............KKPK......",
    "......KLPK.....K.....KKPPK......",
    "......KLLKK...KKK...KKPLDK......",
    "......KLHPKKKKKPKKKKKPLLDK......",
    "......KLHLPPPPPLPPPPPPLLDK......",
    "......KLHHLLLHHHLLLLLLLLDK......",
    ".....KKLHHHHHLLLHHLLLLLLDKK.....",
    ".....KLHHHLLLLLLLLLLLLLLLDK.....",
    "....KKLHHLEELLLLLLLLEELLLDKK....",
    "....KLHHLFFEELLLLLLFFEELLDDK....",
    "....KLHHLFFEELLLLLLFFEELLDDK....",
    "...KKLHLLEEEFLLLLLLEEEFLLDDKK...",
    "...KKLHLLEIIELLLLLLEIIELLDDKK...",
    "....KLLLLLEELLLLLLLLEELLLDDK....",
    "....KLLSBBSLLKLLLLKLLSBBSDDK....",
    "..KKKPLSSSSLLKWLLWKLLSSSSDDKKK..",
    "..KPPLLLLLLLLLKKKKLLLLLLLDLPPK..",
    ".KKPPLLLLLLLLLLLLLLLLLLLLLLPPKK.",
    "..KPPLLLLLLLKKKLLKKKLLLLLLLPPK..",
    "..KKKPDLLLDKSSSKKSSSKDLLLDPKKK..",
    "....KPPDDLDKSBBSSSSSKDLDDDPK....",
    "....KKPDDDDKSSSSSSSSKDDDDDKK....",
    ".....KPPDDPHKSSSSSSKHPDDDPK.....",
    ".....KKPDDDDHKSSSSKHHDDDDKK.....",
    "......KKPPDDDDKSSKDDDDDDKK......",
    ".......KPLLLDDDKKDDDLLLPK.......",
    ".......KPPPPKKKKKKKKPPPPK.......",
    ".......KKKPPK......KPPKKK.......",
    ".........KKKK......KKKK.........",
    "................................"
  ]
};
export const kuromi = sprite([
  '............................',
  '...SS..................SS...',
  '..SBBK................KBBS..',
  '...KKKK..............KKKK...',
  '...KDDKK............KKDDK...',
  '...KDDDKK..........KKDDDK...',
  '....KDDDKK........KKDDDK....',
  '....KDDDDKKKKKKKKKKDDDK....',
  '.....KDDDKKKKKKKKKDDDK.....',
  '.....KKKKKKSSSSKKKKKKK.....',
  '....KKKKKKSSBBSSKKKKKKK....',
  '...KKKKKKKSKSSKSKKKKKKKK...',
  '...KKKKKKKSSSSSSKKKKKKKK...',
  '...KKKKKKKKSSSSKKKKKKKKK...',
  '...KKKWWKKKKKKKKKKWWKKKK...',
  '...KKWWWWWKKKKWWWWWWWKKK...',
  '...KWWWWWWWWWWWWWWWWWWKK...',
  '...KWWWKKWWWWWWWWKKWWWKK...',
  '...KWWKKKWWWWWWWWKKKWWKK...',
  '...KWWWWKWWWWWWWWKWWWWKK...',
  '....KWWBBWWWSSWWWBBWWKK....',
  '.....KWWWWWWWWWWWWWWKK.....',
  '......KKWWWWKKWWWWKKK......',
  '........KKSSBBSSKK.........',
  '.......KSSKSSSSKSSK........',
  '......KWWKWWWWWWKWWK.......',
  '......KWWKWWWWWWKWWK.......',
  '.......KKWWWWWWWWKK........',
  '........KWWWWWWWWK.........',
  '.......KWWWWKKWWWWK........',
  '.......KKKKK..KKKKK........',
  '............................'
]);
export const coracao = sprite(['.SS..SS.','SBBSSSSS','SBBSSSSS','SSSSSSSS','.SSSSSS.','..SSSS..','...SS...']);
export const caveira = sprite(['..SSSS..','.SBBBBS.','SSKSSKSS','SSKSSKSS','.SSSSSS.','..SSSS..','..S.SS..']);
export const estrela = sprite(['....Y....','...YYY...','YYYYYYYYY','.YYYYYYY.','..YYYYY..','.YYY.YYY.','.Y.....Y.']);
export const lua = sprite(['...YYYY..','..YYY....','.YYY.....','YYY......','YYY......','YYY.....Y','.YYY...YY','..YYYYYY.','...YYYY..']);
export const novelo = sprite(['...SSSS...','.SSBBSSSS.','SBBSSSBBSS','SBSSSBBSSS','SSSSBBSSBS','SSSBBSSBBS','.SBBSSBBS.','..SSSSSS..','......S...','......SSSS']);
export const agulha = sprite(['......YY..','.....Y..Y.','.....Y....','....Y.....','....Y.....','...Y......','...Y......','..Y.......','..Y.......','.Y........','.Y........']);
export const sprites = { gengar, kuromi, coracao, caveira, estrela, lua, novelo, agulha };

export function spriteSVG(nome, { classe = '', olhos = false } = {}) {
  const desenho = sprites[nome];
  if (!desenho) return '';

  const largura = Math.max(
    ...desenho.linhas.map(linha => linha.length)
  );

  let pixels = '';
  let pixelsOlhos = '';

  desenho.linhas.forEach((linha, y) => {
    let x = 0;

    while (x < linha.length) {
      const cor = linha[x];
      let fim = x + 1;

      while (fim < linha.length && linha[fim] === cor) {
        fim++;
      }

      const preenchimento = desenho.paleta[cor];

      if (preenchimento) {
        const trecho = `
          <rect
            x="${x}"
            y="${y}"
            width="${fim - x}"
            height="1"
            fill="${preenchimento}"
          />
        `;

        // Separa os olhos e seus brilhinhos para a animação.
        if (nome === 'gengar' && 'EFI'.includes(cor)) {
          pixelsOlhos += trecho;
        } else {
          pixels += trecho;
        }
      }

      x = fim;
    }
  });

  if (pixelsOlhos) {
    pixels += `
      <g class="${olhos ? 'pupilas' : ''}">
        ${pixelsOlhos}
      </g>
    `;
  }

  return `
    <svg
      class="pixel-sprite ${classe}"
      viewBox="0 0 ${largura} ${desenho.linhas.length}"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      ${pixels}
    </svg>
  `;
}

export function preencherSprites(raiz = document) {
  raiz.querySelectorAll('[data-sprite]').forEach(el => { el.innerHTML = spriteSVG(el.dataset.sprite, { olhos: el.hasAttribute('data-olhos') }); });
}
