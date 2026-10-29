import { textos } from '../../conteudo/textos.js';
import { spriteSVG } from '../../pixel/sprites.js';
import { criar } from '../utils.js';

export function iniciarCartinhas() {
  const lista = document.querySelector('#cartinhas');
  textos.abraQuando.forEach(item => {
    const botao = criar('button', 'cartinha');
    botao.type = 'button';
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', `${textos.cartinhas.prefixo} ${item.rotulo}`);
    const miolo = criar('span', 'cartinha-miolo');
    const frente = criar('span', 'cartinha-face cartinha-frente');
    const icone = criar('span', 'cartinha-icone');
    icone.innerHTML = spriteSVG(item.icone);
    const acao = criar('span', 'cartinha-acao', `${textos.cartinhas.abrir} ↗`);
    frente.append(icone, criar('span', 'cartinha-prefixo', textos.cartinhas.prefixo), criar('span', 'cartinha-titulo', item.rotulo), acao);
    const verso = criar('span', 'cartinha-face cartinha-verso');
    verso.append(criar('span', 'cartinha-mensagem', item.mensagem), criar('span', 'cartinha-acao', `${textos.cartinhas.fechar} ♡`));
    verso.setAttribute('aria-hidden', 'true');
    miolo.append(frente, verso);
    botao.append(miolo);
    botao.addEventListener('click', () => {
      const aberta = botao.getAttribute('aria-expanded') !== 'true';
      botao.setAttribute('aria-expanded', String(aberta));
      frente.setAttribute('aria-hidden', String(aberta));
      verso.setAttribute('aria-hidden', String(!aberta));
      botao.setAttribute('aria-label', aberta ? `${item.mensagem} ${textos.cartinhas.fechar}` : `${textos.cartinhas.prefixo} ${item.rotulo}`);
    });
    lista.append(botao);
  });
}
