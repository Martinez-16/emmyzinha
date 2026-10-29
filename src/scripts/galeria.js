import '../estilos/tema.css';
import '../estilos/base.css';
import '../estilos/galeria.css';
import { textos } from '../conteudo/textos.js';
import { fotos } from '../conteudo/fotos.js';
import { preencherSprites, spriteSVG } from '../pixel/sprites.js';
import { aplicarTextos, criar, dataLegivel, foraDoDialogo, preencher } from './utils.js';

aplicarTextos();
preencherSprites();
const grade = document.querySelector('#fotos-grade');
const dialogo = document.querySelector('#lightbox');
const imagemGrande = document.querySelector('#lightbox-imagem');
let atual = 0;
let origem;
function placeholder(mensagem = textos.galeria.placeholder) {
  const el = criar('div', 'foto-placeholder');
  el.innerHTML = spriteSVG('coracao');
  el.append(criar('p', '', mensagem));
  return el;
}
// Os arquivos ficam sempre dentro de public/fotos/. Aceita subpastas, mas não URLs externas.
export function caminhoFoto(arquivo) {
  if (typeof arquivo !== 'string' || !arquivo || arquivo.startsWith('/') || arquivo.includes('..') || arquivo.includes(':') || arquivo.includes('\\')) return null;
  return `/fotos/${arquivo.split('/').map(encodeURIComponent).join('/')}`;
}
function colocarFoto(container, foto, lazy = false) {
  container.replaceChildren();
  const caminho = caminhoFoto(foto.arquivo);
  if (!caminho) { container.append(placeholder(textos.galeria.faltando)); return; }
  const img = criar('img');
  img.alt = foto.legenda || textos.galeria.placeholder;
  img.width = 1200; img.height = 1200;
  img.draggable = false;
  img.loading = lazy ? 'lazy' : 'eager';
  img.decoding = 'async';
  img.addEventListener('error', () => { if (container.contains(img)) container.replaceChildren(placeholder(textos.galeria.faltando)); }, { once: true });
  img.src = caminho;
  container.append(img);
}
function mostrar(indice) {
  atual = (indice + fotos.length) % fotos.length;
  const foto = fotos[atual];
  colocarFoto(imagemGrande, foto);
  document.querySelector('#lightbox-legenda').textContent = foto.legenda || textos.galeria.placeholder;
  document.querySelector('#lightbox-data').textContent = dataLegivel(foto.data || '');
  document.querySelector('#lightbox-posicao').textContent = preencher(textos.galeria.posicao, { atual: atual + 1, total: fotos.length });
  document.querySelector('#foto-anterior').disabled = fotos.length < 2;
  document.querySelector('#foto-proxima').disabled = fotos.length < 2;
}
if (!fotos.length) {
  document.querySelector('#galeria-vazia').hidden = false;
  for (let i = 0; i < 3; i++) {
    const cartao = criar('div', 'polaroid');
    const area = criar('div', 'foto-area');
    area.append(placeholder());
    cartao.append(area, criar('span', 'foto-numero', `0${i + 1} / ♡`));
    grade.append(cartao);
  }
} else {
  fotos.forEach((foto, indice) => {
    const botao = criar('button', 'polaroid');
    botao.type = 'button';
    botao.setAttribute('aria-label', preencher(textos.galeria.abrir, { legenda: foto.legenda || textos.galeria.placeholder }));
    const area = criar('span', 'foto-area');
    colocarFoto(area, foto, true);
    botao.append(area, criar('span', 'foto-legenda', foto.legenda || textos.galeria.placeholder));
    const data = dataLegivel(foto.data || '');
    if (data) { const time = criar('time', 'foto-data', data); time.dateTime = foto.data; botao.append(time); }
    botao.addEventListener('click', () => { origem = botao; mostrar(indice); dialogo.showModal(); });
    grade.append(botao);
  });
}
const fechar = () => dialogo.close();
document.querySelector('#fechar-foto').addEventListener('click', fechar);
document.querySelector('#foto-anterior').addEventListener('click', () => mostrar(atual - 1));
document.querySelector('#foto-proxima').addEventListener('click', () => mostrar(atual + 1));
dialogo.addEventListener('click', evento => { if (foraDoDialogo(evento, dialogo)) fechar(); });
dialogo.addEventListener('close', () => origem?.focus({ preventScroll: true }));
dialogo.addEventListener('keydown', evento => {
  if (evento.key === 'ArrowRight') { evento.preventDefault(); mostrar(atual + 1); }
  if (evento.key === 'ArrowLeft') { evento.preventDefault(); mostrar(atual - 1); }
});
let toque;
imagemGrande.addEventListener('pointerdown', evento => {
  if (!evento.isPrimary) return;
  toque = { x: evento.clientX, y: evento.clientY, id: evento.pointerId };
  imagemGrande.setPointerCapture(evento.pointerId);
});
imagemGrande.addEventListener('pointerup', evento => {
  if (!toque || toque.id !== evento.pointerId) return;
  const dx = evento.clientX - toque.x;
  const dy = evento.clientY - toque.y;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) mostrar(atual + (dx < 0 ? 1 : -1));
  toque = null;
});
imagemGrande.addEventListener('pointercancel', () => { toque = null; });
