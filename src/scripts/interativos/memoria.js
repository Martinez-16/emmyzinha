import { textos } from '../../conteudo/textos.js';
import { spriteSVG } from '../../pixel/sprites.js';
import { criar, preencher, movimentoReduzido } from '../utils.js';

export const NOMES_PARES = ['kuromi', 'gengar', 'novelo', 'caveira', 'coracao', 'estrela', 'lua', 'agulha'];
export function criarBaralho(aleatorio = Math.random) {
  const cartas = [...NOMES_PARES, ...NOMES_PARES].map((nome, id) => ({ nome, id }));
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(aleatorio() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
}
export function iniciarMemoria() {
  const grade = document.querySelector('#memoria-grade');
  const status = document.querySelector('#memoria-status');
  let primeira = null;
  let bloqueado = false;
  let jogadas = 0;
  let pares = 0;
  let timer;
  function esconder(botao) {
    botao.classList.remove('revelada');
    botao.innerHTML = spriteSVG('caveira', { classe: 'verso-memoria' });
    botao.setAttribute('aria-label', preencher(textos.memoria.oculta, { numero: botao.dataset.posicao }));
    botao.setAttribute('aria-pressed', 'false');
  }
  function revelar(botao, carta) {
    if (bloqueado || botao.disabled || botao === primeira?.botao) return;
    botao.classList.add('revelada');
    botao.innerHTML = spriteSVG(carta.nome);
    botao.setAttribute('aria-label', preencher(textos.memoria.revelada, { numero: botao.dataset.posicao, nome: textos.memoria.nomes[carta.nome] }));
    botao.setAttribute('aria-pressed', 'true');
    if (!primeira) { primeira = { botao, carta }; return; }
    jogadas++;
    document.querySelector('#jogadas').textContent = jogadas;
    if (primeira.carta.nome === carta.nome) {
      pares++;
      [botao, primeira.botao].forEach(b => { b.classList.add('encontrada'); b.disabled = true; });
      document.querySelector('#pares').textContent = `${pares} / 8`;
      status.textContent = pares === 8 ? preencher(textos.memoria.vitoria, { jogadas }) : preencher(textos.memoria.encontrado, { nome: textos.memoria.nomes[carta.nome] });
      primeira = null;
    } else {
      bloqueado = true;
      status.textContent = textos.memoria.tente;
      const anterior = primeira.botao;
      timer = setTimeout(() => { esconder(botao); esconder(anterior); primeira = null; bloqueado = false; }, movimentoReduzido() ? 1200 : 900);
    }
  }
  function reiniciar() {
    clearTimeout(timer);
    primeira = null; bloqueado = false; jogadas = 0; pares = 0;
    document.querySelector('#jogadas').textContent = '0';
    document.querySelector('#pares').textContent = '0 / 8';
    status.textContent = textos.memoria.comeco;
    grade.replaceChildren();
    criarBaralho().forEach((carta, indice) => {
      const botao = criar('button', 'memoria-carta');
      botao.type = 'button';
      botao.dataset.posicao = indice + 1;
      esconder(botao);
      botao.addEventListener('click', () => revelar(botao, carta));
      grade.append(botao);
    });
  }
  document.querySelector('#reiniciar').addEventListener('click', reiniciar);
  reiniciar();
}
