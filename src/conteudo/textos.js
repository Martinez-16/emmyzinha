// [EDITE AQUI] TODOS OS TEXTOS DO SITE ESTÃO NESTE ARQUIVO.
// As legendas de cada foto ficam em fotos.js, na mesma pasta.
//
// COMO EDITAR:
// 1. Procure a seção desejada pelos comentários em letras maiúsculas.
// 2. Troque somente as palavras entre aspas. Preserve vírgulas, colchetes e chaves.
// 3. Na carta, cada linha de paragrafos corresponde a um parágrafo.
// 4. Para um texto com várias linhas, use crases (veja o exemplo no README).
// 5. Salve o arquivo. Com npm run dev aberto, a página se atualiza sozinha.
//
// Os campos com ${nomeDela} ou ${assinatura} usam os nomes abaixo automaticamente.
// Nas mensagens dos jogos, preserve marcadores como {numero} e {jogadas}.

// NOMES E DATA — altere aqui uma vez.
const nomeDela = "Emmy";
const assinatura = "José";
const dataInicioNamoro = "2026-08-11"; // 11 de agosto de 2026. Formato: AAAA-MM-DD.

export const textos = {
  nomeDela,
  assinatura,
  dataInicioNamoro,
  fusoHorario: "America/Sao_Paulo",

  // TÍTULOS DA ABA DO NAVEGADOR
  meta: {
    titulo: `Para ${nomeDela} · um universo todinho seu`,
    galeriaTitulo: `Nossas fotos · Para ${nomeDela}`,
    descricao: `Um pequeno universo de pixels, desenhos e carinho. De ${assinatura}, para ${nomeDela}.`
  },

  // NOME DO SITE NO CABEÇALHO
  marca: "emmy.verso",

  // MENU E LINKS
  navegacao: {
    rotulo: "Navegação principal",
    carta: "A carta",
    cantinho: "Seu cantinho",
    atelie: "Ateliê",
    fotos: "Nossas fotos",
    voltar: "Voltar ao nosso universo",
    pular: "Pular para o conteúdo"
  },

  // INTRODUÇÃO COM O GENGAR
  entrada: {
    chamada: "Toque para entrar",
    subtitulo: "Psst… tem um presente te esperando.",
    detalhe: "um pequeno universo feito para você",
    pular: "Pular introdução",
    recebida: `Pode entrar, ${nomeDela} ♡`,
    rotulo: "Introdução do presente"
  },

  // PRIMEIRA TELA — título, descrição e botão de fotos
  inicio: {
    etiqueta: `DE ${assinatura.toLocaleUpperCase('pt-BR')}, COM CARINHO`,
    titulo: "Um universo",
    tituloMeio: "todinho ",
    tituloDestaque: "seu.",
    descricao: `${nomeDela}, entre um pontinho de crochê e um pixel, guardei um pouquinho do meu carinho por você.`,
    fotos: "Nossos pequenos instantes",
    explorar: "Explorar seu cantinho",
    nota: "Pode ficar. Aqui, o tempo é seu.",
    selo: "feito de pixels & carinho",
    cena: "Kuromi e Gengar em pixel art sobre um tapete de crochê, sob a lua e pequenas estrelas.",
    desenho: "você + eu + um pouquinho de magia",
    divisor: "seu jeitinho é a minha parte favorita"
  },

  // CONTADOR DO TEMPO JUNTOS
  contador: {
    etiqueta: "CADA MINUTINHO CONTA",
    titulo: "O nosso tempo, juntinhos.",
    dias: "dias",
    horas: "horas",
    minutos: "minutos",
    esperando: "A nossa história merece a data certinha. ♡",
    futuro: "Contando os dias para o nosso começo. ♡",
    invalida: "Vamos conferir a data do nosso começo. ♡",
    contando: "E ainda tem tanta coisa bonita pela frente."
  },

  // CARTA PRINCIPAL — edite cada item de paragrafos para trocar a carta
  carta: {
    etiqueta: "01 / PALAVRINHAS GUARDADAS",
    titulo: "Algumas coisas ficam\nmelhores por escrito.",
    descricao: "Um envelope, um tantinho de coragem e tudo aquilo que eu queria te dizer.",
    dica: "Toque no selo para abrir",
    abrir: `Abrir a carta para ${nomeDela}`,
    destinatario: `para: ${nomeDela}`,
    remetente: `de: ${assinatura}`,
    tituloAberto: `Para a ${nomeDela},`,
    paragrafos: [
      "Fiz este cantinho pensando em você. Queria que ele tivesse um pouco das coisas que você gosta: a Kuromi, o Gengar, desenhos e a delicadeza de algo feito pontinho por pontinho.",
      "Que este pequeno universo te faça sorrir. Que você possa voltar aqui para brincar, desenhar ou simplesmente receber um pouquinho de carinho.",
      `[EDITE AQUI] ${assinatura}, escreva aqui uma lembrança de vocês ou aquilo que você mais quer dizer para a ${nomeDela}.`
    ],
    despedida: "Com todo o meu carinho,",
    fechar: "Guardar a cartinha",
    fecharRotulo: "Fechar carta"
  },

  // SEÇÃO DOS PERSONAGENS
  cantinho: {
    etiqueta: "02 / BOA COMPANHIA",
    titulo: "Dois guardiões do seu sorriso.",
    descricao: "Um pouquinho de travessura. Um montão de carinho.",
    kuromiNome: "Kuromi",
    gengarNome: "Gengar",
    kuromiPapel: "fofa, mas com atitude",
    gengarPapel: "sombra com boas intenções",
    kuromiChamada: "A Kuromi tem um recadinho…",
    gengarChamada: "O Gengar tá de olho em você…",
    kuromiAcao: "Pedir um recadinho à Kuromi",
    gengarAcao: "Fazer o Gengar rir",
    dica: "toque para descobrir"
  },

  // RECADOS DA KUROMI — um recado entre aspas em cada linha
  frasesKuromi: [
    "Ser fofa e ter atitude? Você consegue os dois. ♡",
    "Um coraçãozinho rosa só para você!",
    "Seu jeito de criar deixa o mundo mais bonito."
  ],

  // RECADOS DO GENGAR — um recado entre aspas em cada linha
  frasesGengar: [
    "Boo! Era só uma desculpa para te fazer sorrir.",
    "Prometo assombrar só os seus dias chatos.",
    "Modo travessura: ligado. Modo carinho: também."
  ],

  // TÍTULO DA SEÇÃO ABRA QUANDO
  cartinhas: {
    etiqueta: "03 / CARINHO DE BOLSO",
    titulo: "Abra quando…",
    descricao: "Pequenos lembretes para diferentes pedacinhos do dia.",
    abrir: "Abrir",
    fechar: "Guardar",
    prefixo: "Abra quando"
  },

  // CARTINHAS — rotulo é o título; mensagem é o texto que aparece ao abrir
  abraQuando: [
    {
      rotulo: "o dia pesar",
      icone: "lua",
      mensagem: "Você não precisa resolver tudo hoje. Respira um pouquinho, descansa e lembra: você merece cuidado também. ♡"
    },
    {
      rotulo: "bater a saudade",
      icone: "coracao",
      mensagem: "Este cantinho é um abraço em forma de pixels. Fica mais um pouquinho; tem carinho guardado aqui para você."
    },
    {
      rotulo: "faltar inspiração",
      icone: "estrela",
      mensagem: "Uma linha, uma cor, um primeiro pontinho. Não precisa sair perfeito para ser bonito. Que tal começar pelo que dá vontade?"
    }
  ],

  // TÍTULO DA SEÇÃO DE BRINCADEIRAS
  brincar: {
    etiqueta: "04 / MAIS UM POUQUINHO AQUI",
    titulo: "Feito para o seu lado criativo.",
    descricao: "Sem pressa, sem regras difíceis. Só você e a próxima ideia."
  },

  // ATELIÊ — botões, instruções e cores da paleta
  atelie: {
    titulo: `Ateliê da ${nomeDela}`,
    subtitulo: "Um pixel de cada vez.",
    tamanho: "16 × 16 pixels",
    instrucao: "Escolha uma cor e desenhe. No teclado, use as setas e pressione Espaço para pintar.",
    grade: "Tela de pixel art com 16 linhas e 16 colunas",
    borracha: "Borracha",
    limpar: "Limpar",
    baixar: "Baixar PNG",
    confirmar: "Apagar todo o desenho?",
    apagar: "Sim, limpar",
    cancelar: "Continuar desenhando",
    limpo: "Tela limpa. Espaço para uma nova ideia!",
    salvo: "Seu desenho está pronto para baixar.",
    erro: "Não foi possível exportar agora. Tente novamente.",
    arquivo: "atelie-da-emmy.png",
    cursor: "Linha {linha}, coluna {coluna}",
    corEscolhida: "Cor: {cor}",
    cores: [
      {
        nome: "Rosa",
        valor: "#ff5fa2"
      },
      {
        nome: "Lilás",
        valor: "#ae8be8"
      },
      {
        nome: "Roxo",
        valor: "#6a4fa3"
      },
      {
        nome: "Creme",
        valor: "#fff4e8"
      },
      {
        nome: "Amarelo",
        valor: "#f2cf84"
      },
      {
        nome: "Vermelho",
        valor: "#e8344a"
      },
      {
        nome: "Noite",
        valor: "#1b1030"
      },
      {
        nome: "Branco",
        valor: "#ffffff"
      }
    ]
  },

  // JOGO DA MEMÓRIA — botões e mensagens
  memoria: {
    titulo: "Pares de outro mundo",
    subtitulo: "Uma memória cheia de pequenas fofuras.",
    jogadas: "jogadas",
    pares: "pares",
    reiniciar: "Jogar de novo",
    oculta: "Carta {numero}, virada para baixo",
    revelada: "Carta {numero}: {nome}",
    encontrado: "Par de {nome} encontrado!",
    tente: "Quase! Tente outro par.",
    vitoria: "Todos os pares juntinhos! Você conseguiu em {jogadas} jogadas. ♡",
    comeco: "Encontre os 8 pares. Vamos começar?",
    nomes: {
      kuromi: "Kuromi",
      gengar: "Gengar",
      novelo: "novelo",
      caveira: "caveira",
      coracao: "coração",
      estrela: "estrela",
      lua: "lua",
      agulha: "agulha de crochê"
    }
  },

  // PÁGINA DE FOTOS — as legendas de cada foto ficam em fotos.js
  galeria: {
    etiqueta: "PEDACINHOS DA NOSSA HISTÓRIA",
    titulo: "Nós, em pequenos instantes.",
    descricao: "Um lugar para guardar os momentos que dão vontade de viver de novo.",
    vazioTitulo: "As nossas memórias vão morar aqui.",
    vazioTexto: "Cada espaço está esperando um pedacinho da nossa história.",
    placeholder: "Coloque sua foto aqui",
    faltando: "Esta lembrança está esperando a foto.",
    abrir: "Ampliar: {legenda}",
    fechar: "Fechar foto",
    anterior: "Foto anterior",
    proxima: "Próxima foto",
    posicao: "{atual} de {total}",
    voltar: "Voltar ao nosso universo",
    nota: "tem tanta coisa bonita para guardar ♡",
    rotulo: "Visualização da foto"
  },

  // MENSAGEM FINAL E RODAPÉ
  rodape: {
    frase: "Entre tantos universos, que bom ter você no meu.",
    feito: "Feito com carinho por",
    topo: "Voltar ao início"
  },

  // OUTROS BOTÕES E AVISOS
  interface: {
    fechar: "Fechar",
    dialogo: "Confirmação",
    replay: "Rever a entrada",
    semJavascript: "Ative o JavaScript para abrir este presente interativo."
  },
};
