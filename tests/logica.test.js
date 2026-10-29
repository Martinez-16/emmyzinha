import test from 'node:test';
import assert from 'node:assert/strict';
import { inicioDoDia, tempoDecorrido } from '../src/scripts/interativos/contador.js';
import { criarBaralho, NOMES_PARES } from '../src/scripts/interativos/memoria.js';
import { pontosDoTraco } from '../src/scripts/interativos/atelie.js';
import { dataLegivel, dataValida } from '../src/scripts/utils.js';

test('o contador respeita meia-noite no Brasil e a virada de minuto/dia', () => {
  const inicio = inicioDoDia('2026-10-24', 'America/Sao_Paulo');
  assert.equal(inicio, Date.parse('2026-10-24T03:00:00Z'));
  assert.deepEqual(tempoDecorrido(inicio, inicio + 86400000 + 3660000), { dias: 1, horas: 1, minutos: 1 });
  assert.deepEqual(tempoDecorrido(inicio, inicio - 1), { dias: 0, horas: 0, minutos: 0 });
  assert.deepEqual(tempoDecorrido(inicio, inicio + 59999), { dias: 0, horas: 0, minutos: 0 });
});
test('datas impossíveis são recusadas e 29 de fevereiro só existe em ano bissexto', () => {
  assert.equal(dataValida('2025-02-29'), false);
  assert.equal(dataValida('2024-02-29'), true);
  assert.equal(dataValida('2026-13-01'), false);
  assert.equal(dataValida(''), false);
  assert.ok(Number.isNaN(inicioDoDia('2026-02-30', 'America/Sao_Paulo')));
  assert.match(dataLegivel('2026-10-24'), /24 de outubro de 2026/);
});
test('a memória sempre tem exatamente 8 pares e 16 identidades diferentes', () => {
  for (let tentativa = 0; tentativa < 30; tentativa++) {
    const baralho = criarBaralho();
    assert.equal(baralho.length, 16);
    assert.equal(new Set(baralho.map(c => c.id)).size, 16);
    for (const nome of NOMES_PARES) assert.equal(baralho.filter(c => c.nome === nome).length, 2);
  }
});
test('um traço rápido preenche todas as células intermediárias', () => {
  const pontos = pontosDoTraco({ x: 0, y: 0 }, { x: 15, y: 15 });
  assert.equal(pontos.length, 16);
  assert.deepEqual(pontos[15], { x: 15, y: 15 });
  assert.deepEqual(pontosDoTraco({ x: 2, y: 2 }, { x: 2, y: 2 }), [{ x: 2, y: 2 }]);
  assert.equal(pontosDoTraco({ x: 15, y: 0 }, { x: 0, y: 0 }).length, 16);
});
