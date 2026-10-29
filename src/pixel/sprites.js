// Desenhos originais construídos para este presente. Cada letra é um pixel.
// "." é transparente. Você pode mudar as cores e desenhar nas matrizes.
const paleta = { '.': null, K: '#160d24', D: '#442d67', P: '#6a4fa3', L: '#9b7fd1', H: '#bea0ed', R: '#e8344a', W: '#fff8f3', S: '#ff5fa2', B: '#ffb3d1', Y: '#f2cf84' };
const sprite = linhas => ({ paleta, linhas });
export const gengar = sprite([
  '................................',
  '......KK..............KK........',
  '......KPK............KPK........',
  '......KPPK....KK....KPPPK........',
  '......KPLPK..KPPK..KPLPPK........',
  '.......KPLKKPPLPKKPPLPK.........',
  '.......KPPLLLLLLLLLPPPK.........',
  '......KPPLLLLLLLLLLPPPPK........',
  '.....KPPLLLLLLLLLLPPPPPPK.......',
  '....KPPLLLLLLLLLPPPPPPPPPK......',
  '...KPPLLLLLLLLLPPPPPPPPPPPK.....',
  '..KKPPLKKKLLLLPPPPKKKPPPPPKK....',
  '..KPPLLWRRKKLPPPKKRRWPPPPPPK....',
  '..KPPPLLWRRRKPPKRRRWPPPPPPPK....',
  '.KPPPPPPLRRRKPPKRRRPPPPPPPPPK...',
  'KPPPPPPPPKKKPPPPKKKPPPPPPPPPPK..',
  'KPLPPPPPPPPPPPPPPPPPPPPPPPPLPK..',
  '.KKPPPWWKWWWWWWWWKWWPPPPPPKK....',
  '..KPPPWWKWWKWWKWWKWWPPPPPPK.....',
  '..KPPPWWKWWKWWKWWKWWPPPPPPK.....',
  '..KPPPPWWWWKWWKWWWWPPPPPPPK.....',
  '..KPPPPPWWWWWWWWWWPPPPPPPDK.....',
  '...KPPPPPPKKKKKKPPPPPPPPDK......',
  '...KPPPPPPPPPPPPPPPPPPPDDK......',
  '....KPPPPPPPPPPPPPPPPPDDK.......',
  '....KDPPPPPPPPPPPPPPDDDDK.......',
  '...KDDDDPPPPPPPPPPDDDDDDDK......',
  '..KDDDDDDDKKKKKKKDDDDDDDDDK.....',
  '..KKKKKKKK.......KKKKKKKKKK.....',
  '................................'
]);
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
  const largura = Math.max(...desenho.linhas.map(linha => linha.length));
  let pixels = '';
  desenho.linhas.forEach((linha, y) => [...linha].forEach((cor, x) => {
    if (desenho.paleta[cor]) pixels += `<rect x="${x}" y="${y}" width="1" height="1" fill="${desenho.paleta[cor]}"/>`;
  }));
  if (olhos && nome === 'gengar') pixels += '<g class="pupilas" fill="#160d24"><rect x="11" y="13" width="1.5" height="2"/><rect x="20" y="13" width="1.5" height="2"/></g>';
  return `<svg class="pixel-sprite ${classe}" viewBox="0 0 ${largura} ${desenho.linhas.length}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${pixels}</svg>`;
}

export function preencherSprites(raiz = document) {
  raiz.querySelectorAll('[data-sprite]').forEach(el => { el.innerHTML = spriteSVG(el.dataset.sprite, { olhos: el.hasAttribute('data-olhos') }); });
}
