import { textos } from '../conteudo/textos.js';
import { criar, foraDoDialogo, movimentoReduzido } from './utils.js';

export function iniciarCarta() {
  const dialogo = document.querySelector('#carta-dialogo');
  const envelope = document.querySelector('.envelope');
  const paragrafos = document.querySelector('#carta-paragrafos');
  textos.carta.paragrafos.forEach(texto => paragrafos.append(criar('p', '', texto)));
  let abrindo = false;
  let origem;
  function abrir(evento) {
    if (abrindo || dialogo.open) return;
    abrindo = true;
    origem = evento.currentTarget;
    envelope.classList.add('aberto');
    setTimeout(() => {
      dialogo.showModal();
      dialogo.scrollTop = 0;
      dialogo.querySelector('button').focus({ preventScroll: true });
      abrindo = false;
    }, movimentoReduzido() ? 0 : 450);
  }
  function fechar() { dialogo.close(); }
  // Somente o próprio envelope abre a carta (clique, toque ou teclado).
  envelope.addEventListener('click', abrir);
  document.querySelectorAll('[data-fechar-carta]').forEach(el => el.addEventListener('click', fechar));
  dialogo.addEventListener('click', evento => { if (foraDoDialogo(evento, dialogo)) fechar(); });
  dialogo.addEventListener('close', () => { envelope.classList.remove('aberto'); origem?.focus({ preventScroll: true }); });
}
