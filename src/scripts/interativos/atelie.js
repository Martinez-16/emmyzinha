import { textos } from '../../conteudo/textos.js';
import { coracao } from '../../pixel/sprites.js';
import { criar, preencher, avisar } from '../utils.js';

const TAMANHO = 16;
const CHAVE = 'emmy-pixel-art-v1';

// Interpola pontos rápidos: o traço não fica com buracos entre eventos do mouse.
export function pontosDoTraco(a, b) {
  const passos = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
  if (!passos) return [a];
  return Array.from({ length: passos + 1 }, (_, i) => ({ x: Math.round(a.x + (b.x - a.x) * i / passos), y: Math.round(a.y + (b.y - a.y) * i / passos) }));
}
export function iniciarAtelie() {
  const canvas = document.querySelector('#pixel-canvas');
  const ctx = canvas.getContext('2d');
  const paleta = document.querySelector('#paleta');
  const borracha = document.querySelector('#borracha');
  const status = document.querySelector('#canvas-status');
  const confirmacao = document.querySelector('#limpar-dialogo');
  let pixels = Array(TAMANHO * TAMANHO).fill(null);
  let cor = textos.atelie.cores[0]?.valor ?? '#ff5fa2';
  let apagando = false;
  let desenhando = false;
  let ponteiro = null;
  let ultimo = null;
  let cursor = { x: 7, y: 7 };
  let cursorVisivel = false;
  // Pequeno desenho inicial; o desenho da pessoa passa a ser salvo neste navegador.
  coracao.linhas.forEach((linha, y) => [...linha].forEach((letra, x) => { if (coracao.paleta[letra]) pixels[(y + 4) * TAMANHO + x + 4] = coracao.paleta[letra]; }));
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE));
    if (Array.isArray(salvo) && salvo.length === 256 && salvo.every(c => c === null || /^#[0-9a-f]{6}$/i.test(c))) pixels = salvo;
  } catch { /* Desenhar não depende do armazenamento estar disponível. */ }
  function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(pixels)); } catch { /* Exportar continua disponível. */ } }
  function renderizar() {
    const p = canvas.width / TAMANHO;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < TAMANHO; y++) for (let x = 0; x < TAMANHO; x++) {
      ctx.fillStyle = pixels[y * TAMANHO + x] || ((x + y) % 2 ? '#e5dbe9' : '#eee7f0');
      ctx.fillRect(x * p, y * p, p, p);
    }
    ctx.strokeStyle = '#6a4fa31c';
    ctx.lineWidth = 1;
    for (let i = 1; i < TAMANHO; i++) {
      ctx.beginPath(); ctx.moveTo(i * p + .5, 0); ctx.lineTo(i * p + .5, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * p + .5); ctx.lineTo(canvas.width, i * p + .5); ctx.stroke();
    }
    if (cursorVisivel) {
      ctx.strokeStyle = '#1b1030'; ctx.lineWidth = 4;
      ctx.strokeRect(cursor.x * p + 2, cursor.y * p + 2, p - 4, p - 4);
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2;
      ctx.strokeRect(cursor.x * p + 5, cursor.y * p + 5, p - 10, p - 10);
    }
  }
  function atualizarPaleta() {
    paleta.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(!apagando && b.dataset.cor === cor)));
    borracha.setAttribute('aria-pressed', String(apagando));
  }
  textos.atelie.cores.forEach(item => {
    const botao = criar('button', 'cor');
    botao.type = 'button';
    botao.dataset.cor = item.valor;
    botao.style.setProperty('--cor', item.valor);
    botao.setAttribute('aria-label', preencher(textos.atelie.corEscolhida, { cor: item.nome }));
    botao.title = item.nome;
    botao.addEventListener('click', () => { cor = item.valor; apagando = false; atualizarPaleta(); });
    paleta.append(botao);
  });
  borracha.addEventListener('click', () => { apagando = !apagando; atualizarPaleta(); });
  function coordenada(evento) {
    const r = canvas.getBoundingClientRect();
    return { x: Math.max(0, Math.min(15, Math.floor((evento.clientX - r.left) / r.width * TAMANHO))), y: Math.max(0, Math.min(15, Math.floor((evento.clientY - r.top) / r.height * TAMANHO))) };
  }
  function pintar(ponto) { pixels[ponto.y * TAMANHO + ponto.x] = apagando ? null : cor; }
  canvas.addEventListener('pointerdown', evento => {
    if (!evento.isPrimary || (evento.pointerType === 'mouse' && evento.button !== 0)) return;
    evento.preventDefault();
    canvas.focus({ preventScroll: true });
    cursorVisivel = false;
    desenhando = true;
    ponteiro = evento.pointerId;
    canvas.setPointerCapture(ponteiro);
    ultimo = coordenada(evento); cursor = ultimo;
    pintar(ultimo); renderizar();
  });
  canvas.addEventListener('pointermove', evento => {
    if (!desenhando || evento.pointerId !== ponteiro) return;
    const ponto = coordenada(evento);
    pontosDoTraco(ultimo, ponto).forEach(pintar);
    ultimo = ponto; cursor = ponto; renderizar();
  });
  function terminar(evento) {
    if (evento.pointerId !== ponteiro) return;
    desenhando = false; ultimo = null; ponteiro = null; salvar();
  }
  canvas.addEventListener('pointerup', terminar);
  canvas.addEventListener('pointercancel', terminar);
  canvas.addEventListener('lostpointercapture', terminar);
  canvas.addEventListener('focus', () => { cursorVisivel = true; renderizar(); });
  canvas.addEventListener('blur', () => { cursorVisivel = false; renderizar(); });
  canvas.addEventListener('keydown', evento => {
    const movimentos = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] };
    if (movimentos[evento.key]) {
      evento.preventDefault();
      cursorVisivel = true;
      const [dx, dy] = movimentos[evento.key];
      cursor = { x: Math.max(0, Math.min(15, cursor.x + dx)), y: Math.max(0, Math.min(15, cursor.y + dy)) };
      if (evento.shiftKey) { pintar(cursor); salvar(); }
      status.textContent = preencher(textos.atelie.cursor, { linha: cursor.y + 1, coluna: cursor.x + 1 });
      renderizar();
    } else if (evento.key === ' ' || evento.key === 'Enter') {
      evento.preventDefault(); pintar(cursor); salvar(); renderizar();
    }
  });
  document.querySelector('#limpar').addEventListener('click', () => { confirmacao.showModal(); document.querySelector('#cancelar-limpar').focus(); });
  document.querySelector('#cancelar-limpar').addEventListener('click', () => confirmacao.close());
  document.querySelector('#confirmar-limpar').addEventListener('click', () => { pixels.fill(null); salvar(); renderizar(); confirmacao.close(); avisar(textos.atelie.limpo); });
  document.querySelector('#baixar').addEventListener('click', () => {
    const imagem = document.createElement('canvas');
    imagem.width = imagem.height = 512;
    const imagemCtx = imagem.getContext('2d');
    pixels.forEach((c, i) => { if (c) { imagemCtx.fillStyle = c; imagemCtx.fillRect((i % 16) * 32, Math.floor(i / 16) * 32, 32, 32); } });
    imagem.toBlob(blob => {
      if (!blob) { avisar(textos.atelie.erro); return; }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = textos.atelie.arquivo;
      document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      avisar(textos.atelie.salvo);
    }, 'image/png');
  });
  atualizarPaleta(); renderizar();
}
