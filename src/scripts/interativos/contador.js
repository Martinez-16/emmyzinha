import { textos } from '../../conteudo/textos.js';
import { dataValida } from '../utils.js';

// A data é interpretada no fuso escolhido, independentemente do país de quem abre.
export function inicioDoDia(data, fuso) {
  if (!dataValida(data)) return NaN;
  const base = new Date(`${data}T00:00:00Z`).getTime();
  const formato = new Intl.DateTimeFormat('en-CA', { timeZone: fuso, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  let instante = base;
  for (let i = 0; i < 2; i++) {
    const p = Object.fromEntries(formato.formatToParts(instante).map(({ type, value }) => [type, value]));
    const local = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
    instante += base - local;
  }
  return instante;
}
export function tempoDecorrido(inicio, agora) {
  const total = Math.max(0, Math.floor((agora - inicio) / 60000));
  return { dias: Math.floor(total / 1440), horas: Math.floor(total / 60) % 24, minutos: total % 60 };
}
export function iniciarContador() {
  const mensagem = document.querySelector('#contador-mensagem');
  if (!textos.dataInicioNamoro) { mensagem.textContent = textos.contador.esperando; return; }
  let inicio;
  try { inicio = inicioDoDia(textos.dataInicioNamoro, textos.fusoHorario); } catch { inicio = NaN; }
  if (!Number.isFinite(inicio)) { mensagem.textContent = textos.contador.invalida; return; }
  function atualizar() {
    const agora = Date.now();
    mensagem.textContent = agora < inicio ? textos.contador.futuro : textos.contador.contando;
    const valores = tempoDecorrido(inicio, agora);
    for (const [chave, valor] of Object.entries(valores)) document.getElementById(chave).textContent = String(valor).padStart(2, '0');
  }
  atualizar();
  setInterval(atualizar, 1000);
}
