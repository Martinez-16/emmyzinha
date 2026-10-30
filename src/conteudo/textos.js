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
    titulo: `Para ${nomeDela} · um presentinho com muito amor pra você`,
    galeriaTitulo: `Nossas fotos · Para ${nomeDela}`,
    descricao: `Um pequeno presente com muito amor. De ${assinatura}, para ${nomeDela}.`
  },

  // NOME DO SITE NO CABEÇALHO
  marca: `Para ${nomeDela}`,

  // MENU E LINKS
  navegacao: {
    rotulo: "Navegação principal",
    carta: "A carta",
    cantinho: "Seu cantinho",
    atelie: "Algumas coisinhas que gosta",
    fotos: "Nossas fotos",
    voltar: "Voltar pro inicio",
    pular: "Pular para o conteúdo"
  },

  // INTRODUÇÃO COM O GENGAR
  entrada: {
    chamada: "Toque para entrar",
    subtitulo: "Psst… tem um presente te esperando.",
    detalhe: "um pequeno presente feito para você",
    pular: "Pular introdução",
    recebida: `Pode entrar, Meu amor ♡`,
    rotulo: "Introdução do presente"
  },

  // PRIMEIRA TELA — título, descrição e botão de fotos
  inicio: {
    etiqueta: `DE ${assinatura.toLocaleUpperCase('pt-BR')}, COM AMOR`,
    titulo: "Um lugar",
    tituloMeio: "todinho ",
    tituloDestaque: "seu.",
    descricao: `${nomeDela}, entre todas as coisas que eu amo em você, vim demonstrar um pouquinho delas.`,
    fotos: "Nossos incríveis momentos",
    explorar: "Explorar seu cantinho",
    nota: "Pode ficar. Aqui, o tempo é seu.",
    selo: "feito com amor e carinho",
    cena: "Nós, hihi.",
    desenho: "Você e eu",
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
      "Oii meu amor, espero que esteja bem lendo isso. Fiz esse presentinho com muito carinho, pensando em você e em tudo que a gente já viveu. Você merece todo o meu amor e eu espero que esse cantinho te faça sorrir.",
      "Eu te amo muito com toda a minha alma e espero que este lugar seja divertido o mesmo tanto que você é divertida para mim, obrigado por tudo meu amor, espero que goste daqui <3.",
      `Meu amor, lembro perfeitamente de quando nos conhecemos, e a coragem que me faltava pra te mandar mensagem kkkkk, queria eu ter te enviado aquela mensagem antes para conversar com você. Eu não sabia o que estava perdendo. \n Lembro tambem quando comecei a gostar de você, foi um sentimento muito diferente pra mim, você foi a primeira pessoa que eu senti que realmente se importava comigo, e eu não tava errado, tudo que ja fez por mim não tem preço e é algo que eu vou valorizar pro resto da minha vida, quero casar e ter uma família com você, afinal, a vida sem você já não tem mais sentido algum. \n Você me aproximou de Deus, fez eu me tornar uma pessoa melhor e me mostrou que o amor, vai além de coisas materiais, além de luxúria e coisas que são banais, você me provou que o amor é sincero, carinhoso, cuidadoso e muito cooperativo e compreensivo. Eu te agradeço muito por tudo que ja fez por mim e prometo que um dia vou te recompensar por tudo.\n Só tenho a te agradecer por todos os momentos que tive ao seu lado até agora, e pra ser sincero, foram momento que eu nunca imaginei que teria na vida. \n Obrigado por me proporcionar tudo isso e por tudo o que há em você, seu jeitinho, sua aparência, seu sorriso, tudo o que há em você é perfeito e faz eu a cada dia querer mais passar a vida ao seu lado, Eu te amo minha Esposa, minha Emmy, minha noiva, minha Princesa, Minha coelhinha nenèm. \n Eu te amo pra todo o sempre.`
    ],
    despedida: "Com todo o meu amor por você,",
    fechar: "Guardar a cartinha",
    fecharRotulo: "Fechar carta"
  },

  // SEÇÃO DOS PERSONAGENS
  cantinho: {
    etiqueta: "Nós",
    titulo: "Dois personagens que a gente ama muuuuito",
    descricao: "",
    kuromiNome: "Kuromi",
    gengarNome: "Gengar",
    kuromiPapel: "Fofinha, igual a você",
    gengarPapel: "Evolução do SixSeven",
    kuromiChamada: "A Kuromi tem um recadinho…",
    gengarChamada: "O Gengar tá de olho em você…",
    kuromiAcao: "Pedir um recadinho à Kuromi",
    gengarAcao: "Fazer o Gengar rir",
    dica: "toque para descobrir"
  },

  // RECADOS DA KUROMI — um recado entre aspas em cada linha
  frasesKuromi: [
    "Você é tão perfeita quanto eu,sabia? ♡",
    "Eu sei que você ama, mas não pode cometer canibalismo, viu?",
    "O seu namorado te ama muito e faria de tudo por você"
  ],

  // RECADOS DO GENGAR — um recado entre aspas em cada linha
  frasesGengar: [
    "Boo! Era só uma desculpa para te fazer sorrir.",
    "Para que eu to tendo siricuticos",
    "Seu namorado falou que se você ta lendo isso ele vai te encher de carinho"
  ],

  // TÍTULO DA SEÇÃO ABRA QUANDO
  cartinhas: {
    etiqueta: "Mini Cartinhas",
    titulo: "Abra quando…",
    descricao: "Pequenos lembretes para quando precisar",
    abrir: "Abrir",
    fechar: "Guardar",
    prefixo: "Abra quando"
  },

  // CARTINHAS — rotulo é o título; mensagem é o texto que aparece ao abrir
  abraQuando: [
    {
      rotulo: "o dia pesar",
      icone: "lua",
      mensagem: "Você não precisa resolver tudo hoje. tenta mimir um pouquinho, você é uma garota extremamente esforçada e merece descansar bastante, eu te amo! ♡"
    },
    {
      rotulo: "bater a saudade",
      icone: "coracao",
      mensagem: "Meu amor, você sabia que eu oro todos os dias para que Deus te proteja? Saiba que, sempre e a todo momento, a minha alma vai estar ao seu lado, abraçadinha em você"
    },
    {
      rotulo: "Faltar vontade",
      icone: "estrela",
      mensagem: "SE CONSEGUIR FAZER GANHA MUITOS BEIJINHUS E ABRACINHU :3, E SE NÃO CONSEGUIR< VAI GANHAR VARIOS BEIJINHOS ATÉ VOCÊ CONSEGUIR HEHEHEHHE"
    }
  ],

  // TÍTULO DA SEÇÃO DE BRINCADEIRAS
  brincar: {
    etiqueta: "Espacinho pra você brincar",
    titulo: "Feito exclusivamente pra minha neném.",
    descricao: "Espaço pras suas Pixel Arts e um Joguinho da memória"
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
        valor: "#fffc4d"
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
      },
      {
        nome: "Verde Claro",
        valor: "#43863b"
      },
      {
        nome: "Verde Escuro",
        valor: "#003603"
      },
      {
        nome: "Cor de pele",
        valor: "#ebc088"
      },
      {
        nome: "Marrom",
        valor: "#41200b"
      },
    


    ]
  },

  // JOGO DA MEMÓRIA — botões e mensagens
  memoria: {
    titulo: "Espero que se Divirta <3",
    subtitulo: "Eu demorei pra completar pq eu tenho TDAH",
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
    descricao: "Um lugar para guardar os nossos momentos que mais gostamos",
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
    feito: "Feito com amor e Aura por",
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
