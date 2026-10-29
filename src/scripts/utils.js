import { textos } from '../conteudo/textos.js';

export const movimentoReduzido = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const preencher = (modelo, valores) => modelo.replace(/\{(\w+)\}/g, (_, chave) => String(valores[chave] ?? ''));
export function aplicarTextos(raiz = document) {
  const obter = caminho => caminho.split('.').reduce((objeto, chave) => objeto?.[chave], textos);
  raiz.querySelectorAll('[data-text]').forEach(el => { const valor = obter(el.dataset.text); if (typeof valor === 'string') el.textContent = valor; });
  raiz.querySelectorAll('[data-label]').forEach(el => { const valor = obter(el.dataset.label); if (typeof valor === 'string') el.setAttribute('aria-label', valor); });
}
export function foraDoDialogo(evento, dialogo) {
  if (evento.target !== dialogo) return false;
  const r = dialogo.getBoundingClientRect();
  return evento.clientX < r.left || evento.clientX > r.right || evento.clientY < r.top || evento.clientY > r.bottom;
}
export function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto !== undefined) el.textContent = texto;
  return el;
}
let timerToast;
export function avisar(mensagem) {
  const el = document.querySelector('#toast');
  if (!el) return;
  clearTimeout(timerToast);
  el.textContent = mensagem;
  el.hidden = false;
  timerToast = setTimeout(() => { el.hidden = true; }, 5000);
}
export function dataValida(data) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const d = new Date(`${data}T12:00:00Z`);
  return Number.isFinite(d.getTime()) && d.toISOString().slice(0, 10) === data;
}
export function dataLegivel(data) {
  return dataValida(data) ? new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${data}T12:00:00Z`)) : '';
}
