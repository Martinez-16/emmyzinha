import { textos } from '../conteudo/textos.js';
import { movimentoReduzido } from './utils.js';

export function iniciarEntrada() {
  const dialogo = document.querySelector('#entrada');
  const botao = document.querySelector('#entrar');
  const subtitulo = document.querySelector('#entrada-subtitulo');
  const temporizadores = [];
  const chave = 'emmy-entrada-v1';
  function fechar() {
    temporizadores.forEach(clearTimeout);
    temporizadores.length = 0;
    dialogo.close();
    dialogo.classList.remove('sorrindo', 'dissolvendo');
    botao.disabled = false;
    try { sessionStorage.setItem(chave, 'vista'); } catch { /* A intro também funciona sem armazenamento. */ }
  }
  function abrir() {
    subtitulo.textContent = textos.entrada.subtitulo;
    dialogo.showModal();
    botao.focus({ preventScroll: true });
  }
  botao.addEventListener('click', () => {
    if (movimentoReduzido()) { fechar(); return; }
    botao.disabled = true;
    dialogo.classList.add('sorrindo');
    temporizadores.push(setTimeout(() => { dialogo.classList.add('dissolvendo'); subtitulo.textContent = textos.entrada.recebida; }, 500));
    temporizadores.push(setTimeout(fechar, 1850));
  });
  document.querySelector('#pular-entrada').addEventListener('click', fechar);
  document.querySelector('#rever-entrada').addEventListener('click', abrir);
  dialogo.addEventListener('cancel', evento => { evento.preventDefault(); fechar(); });
  let vista = false;
  try { vista = sessionStorage.getItem(chave) === 'vista'; } catch { /* Sem armazenamento: mostrar a entrada. */ }
  // Âncoras apontam diretamente ao conteúdo, inclusive ao voltar da galeria.
  if (!vista && !window.location.hash) abrir();
}
