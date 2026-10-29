import { textos } from '../../conteudo/textos.js';
import { spriteSVG } from '../../pixel/sprites.js';
import { movimentoReduzido } from '../utils.js';

export function iniciarPersonagens() {
  const gengar = document.querySelector('#gengar');
  const kuromi = document.querySelector('#kuromi');
  const pupilas = gengar.querySelector('.pupilas');
  function seguir(evento) {
    if (movimentoReduzido()) return;
    const r = gengar.getBoundingClientRect();
    const x = Math.max(-.7, Math.min(.7, (evento.clientX - r.left - r.width / 2) / r.width));
    const y = Math.max(-.45, Math.min(.45, (evento.clientY - r.top - r.height / 2) / r.height));
    pupilas.setAttribute('transform', `translate(${x} ${y})`);
  }
  // Mouse na região e dedo no personagem usam o mesmo sistema de ponteiros.
  document.querySelector('#cantinho').addEventListener('pointermove', seguir, { passive: true });
  gengar.addEventListener('pointerdown', seguir, { passive: true });
  document.querySelector('#cantinho').addEventListener('pointerleave', () => pupilas.removeAttribute('transform'));
  let indiceGengar = 0;
  let indiceKuromi = 0;
  gengar.addEventListener('click', () => {
    if (textos.frasesGengar.length) document.querySelector('#frase-gengar').textContent = textos.frasesGengar[indiceGengar++ % textos.frasesGengar.length];
    gengar.classList.remove('rindo');
    void gengar.offsetWidth;
    gengar.classList.add('rindo');
  });
  kuromi.addEventListener('click', () => {
    if (textos.frasesKuromi.length) document.querySelector('#frase-kuromi').textContent = textos.frasesKuromi[indiceKuromi++ % textos.frasesKuromi.length];
    if (movimentoReduzido()) return;
    const r = kuromi.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const p = document.createElement('span');
      p.className = 'particula';
      p.setAttribute('aria-hidden', 'true');
      p.style.left = `${r.left + r.width / 2}px`;
      p.style.top = `${r.top + r.height / 2}px`;
      p.style.setProperty('--dx', `${(Math.random() - .5) * 180}px`);
      p.style.setProperty('--dy', `${-60 - Math.random() * 100}px`);
      p.style.setProperty('--rot', `${(Math.random() - .5) * 100}deg`);
      p.innerHTML = spriteSVG(i % 2 ? 'caveira' : 'coracao');
      document.body.append(p);
      setTimeout(() => p.remove(), 900);
    }
  });
}
