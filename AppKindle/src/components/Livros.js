  export const books = {
   romance: [
      { id: 1, image:  require('../images/romance.jpg'), titulo: 'É assim que acaba', autor: 'Colleen Hoover', preco: 'R$ 29,41', avaliacoes: 84.119,
        descrition: 'É assim que acaba de Colleen Hoover apresenta Lily, uma jovem que, após se mudar para Boston e abrir uma floricultura, se envolve com Ryle, um neurocirurgião que tem aversão a relacionamentos. O romance se torna tumultuado, levando Lily a confrontar a realidade de um relacionamento tóxico e a complexidade do amor e do abuso.',
      },
      { id: 2, image:  require('../images/romance2.jpg'), titulo: 'Eu e esse meu coração', autor: 'C.C Hunter', preco: 'R$ 37,41', avaliacoes: 15.000,
        descrition: 'Em O Coração de Leah, Leah MacKenzie, de 17 anos e com um coração artificial, cria uma lista de coisas para fazer antes de morrer. Após receber a chance de um transplante de coração, ela descobre que o doador era um colega que se suicidou. Junto a Matt, o irmão gêmeo do doador, Leah tenta desvendar o mistério e acaba se apaixonando, refletindo sobre a vida e a morte.', },
      { id: 3, image:  require('../images/romance3.jpg'), titulo: 'A biblioteca da meia-noite', autor: 'Matt Haig', preco: 'R$ 29,35', avaliacoes: 48.054, 
        descrition: 'A Biblioteca da Meia-Noite acompanha Nora Seed, que, após uma série de eventos trágicos, encontra uma biblioteca entre a vida e a morte, onde pode viver vidas alternativas. À medida que explora essas possibilidades, Nora reflete sobre arrependimentos e o que realmente faz a vida valer a pena.',},
      { id: 4, image:  require('../images/romance4.jpg'), titulo: 'Uma segunda chance', autor: 'Colleen Hoover', preco: 'R$ 31,41', avaliacoes: 6.000, 
        descrition: 'Uma Segunda Chance narra a luta de Kenna Rowan para reconstruir sua vida após um acidente que a levou à prisão por cinco anos. Ao retornar à cidade e tentar se reconectar com sua filha, ela enfrenta o preconceito da comunidade. Com a ajuda de Ledger, um homem do bar local, Kenna busca a redenção e a superação de julgamentos injustos.',},
    ],
    terror: [
      { id: 1, image:  require('../images/horror1.jpg'), titulo: 'A maldição do verdadeiro amor', autor: 'Stephanie Garber', preco: 'R$ 45,90', avaliacoes: 1.600, 
        descrition: 'Em A Maldição do Verdadeiro Amor, Evangeline Raposa busca seu final feliz no Magnífico Norte, acordando sem memória e casada com Apollo em um castelo. No entanto, para viver esse conto de fadas, ela paga um preço alto e desconhece o que perdeu, enquanto seu marido tenta garantir sua ignorância, até mesmo ameaçando a vida de Jacks, o Príncipe de Copas. Este livro é a conclusão da trilogia Era uma vez um coração partido, repleta de intrigas e magia.',},
      { id: 2, image:  require('../images/horror2.jpg'), titulo: 'A serpente e as asas feitas de noite', autor: 'Clarissa Broadbent', preco: 'R$ 39,41', avaliacoes: 640, 
        descrition: 'Nascidos da Noite apresenta Oraya, a filha adotiva do rei dos vampiros, lutando pela sobrevivência em um mundo hostil. Para vencer o brutal torneio Kejari, ela deve se aliar a Raihn, um vampiro atroz e inimigo do rei. À medida que Oraya enfrenta desafios, a atração por Raihn se intensifica, colocando sua vida e seu coração em risco.'},
      { id: 3, image:  require('../images/horror3.jpg'),titulo: 'O vilarejo', autor: 'Raphael Montes', preco: 'R$ 44,90', avaliacoes: 12.000, 
        descrition: 'Em Os Sete Demônios, Raphael Montes inspira-se na ligação feita pelo padre Peter Binsfeld entre os pecados capitais e demônios, contando sete histórias sobre a decadência de um vilarejo isolado. As narrativas, que podem ser lidas em qualquer ordem, convergem para uma conclusão surpreendente, revelando a lenta degradação dos moradores, marcados pela neve e pela fome.'},
      { id: 4, image:  require('../images/horror4.jpg'), titulo: 'A última casa da rua needless', autor: 'Catriota Ward', preco: 'R$ 45,92', avaliacoes: 2.336, 
        descrition: 'A Casa ao Lado é um thriller psicológico que segue Ted Bannerman, um homem com problemas de memória que vive com sua filha, Lauren. Quando a irmã de uma menina desaparecida se muda para a casa ao lado, segredos enterrados começam a ressurgir, trazendo à tona um passado sombrio que envolve assassinato, sequestro e vingança. Considerado um dos melhores livros de terror, a trama promete uma leitura impactante e aterrorizante.',},
    ],
    fantasiaFiccao: [
      { id: 1, image:  require('../images/fantasia1.jpg'), titulo: 'Duna', autor: 'Frank Herbert', preco: 'R$ 69,98', avaliacoes: 14.443, 
        descrition: 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.',},
      { id: 2, image:  require('../images/fantasia2.jpg'), titulo: 'Beren e Lúthien', autor: 'J.R.R. Tolkien', preco: 'R$ 53,41', avaliacoes: 4.400, 
        descrition: 'O Silmarillion, de J.R.R. Tolkien, narra a história épica de Beren, um homem mortal, e Lúthien, uma princesa élfica, cuja união é contrariada pelo pai dela, um poderoso senhor élfico. Para se casarem, Beren deve cumprir uma tarefa impossível: roubar uma Silmaril do maligno Morgoth. O conto, escrito entre 1916 e 1917, passou por várias revisões, e Christopher Tolkien reuniu diferentes versões da lenda em um único volume. Junto com "A Queda de Gondolin" e "Os Filhos de Húrin", "Beren e Lúthien" é considerado um dos Três Grandes Contos dos Dias Antigos e possui um significado pessoal para Tolkien, que comparava o romance dos protagonistas à sua própria história de amor. A aventura do casal é acompanhada pelas ilustrações do artista Alan Lee, reconhecido por seu trabalho na trilogia cinematográfica de O Senhor dos Anéis.',},
      { id: 3, image:  require('../images/fantasia3.jpg'), titulo: 'O pequeno príncipe', autor: 'Antoine de Saint-Exupéry', preco: 'R$ 15,41', avaliacoes: 17.389,
         descrition: 'Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.Um livro para todos os públicos, O pequeno príncipe é uma obra atemporal, com metáforas pertinentes e aprendizados sobre afeto, sonhos, esperança e tudo aquilo que é invisível aos olhos. ',},
      { id: 4, image:  require('../images/fantasia4.jpg'), titulo: 'Harry potter e as relíquias da morte', autor: 'J.K Rowling', preco: 'R$ 29,41', avaliacoes: 15.191, 
        descrition: 'Harry Potter e as relíquias da morte, de J.K. Rowling, é o sétimo e último livro da série. Voldemorte está cada vez mais forte e Harry Potter precisa encontrar e aniquilar as Horcruxes para enfraquecer o lorde e poder enfrentálo. Nessa busca desenfreada, contando apenas com os amigos Rony e Hermione, Harry descobre as Relíquias da Morte, que serão úteis na batalha do bem contra o mal.',},
    ],
    literaturaFiccao: [
      { id: 1, image:  require('../images/ficcao1.jpg'),titulo: 'O silo', autor: 'Hugh Howey', preco: 'R$ 49,41', avaliacoes: 1.600, 
        descrition: 'Silo, de Hugh Howey, apresenta um mundo onde homens e mulheres vivem enclausurados sob regras rigorosas, rodeados de segredos. Juliette, uma das poucas que ousa sonhar e ter esperança, enfrenta uma punição mortal por suas ações. A história é marcada por um ritmo frenético e personagens cativantes, conquistando destaque nas listas de mais vendidos e elogios da crítica. Com mais de 600 mil cópias vendidas, Silo é uma leitura instigante para fãs de ficção científica e distopias.',},
      { id: 2, image:  require('../images/ficcao2.jpg'), titulo: 'A fúria dos reis: As crônicas de gelo e fogo', autor: 'Geoge R.R Martin', preco: 'R$ 39,41', avaliacoes: 4.000, 
        descrition: 'Em A Fúria dos Reis, de George R.R. Martin, o caos toma conta de Westeros, onde seis facções lutam pelo controle do Trono de Ferro. Irmãos tramam contra irmãos, e uma princesa se disfarça para sobreviver em um mundo repleto de intrigas, assassinatos e fratricídio. A narrativa intensa destaca a luta pelo poder e a necessidade de frieza em tempos de guerra, consolidando a obra como uma das melhores séries de fantasia já escritas.',},
      { id: 3, image:  require('../images/ficcao3.jpg'), titulo: 'A máquina do tempo', autor: 'H. G. Wells', preco: 'R$ 29,90', avaliacoes: 790, 
        descrition: 'A Máquina do Tempo, de H.G. Wells, segue um cientista que viaja do século XIX para o distante ano de 802701, onde encontra uma civilização pacífica chamada Eloi, mas que teme os sombrios Morlocks que habitam os subterrâneos. Ao perder sua Máquina do Tempo, o protagonista precisa descer para recuperá-la. Este romance inovador, publicado em 1895, é considerado uma obra-prima que abriu caminho para a ficção científica.',},
      { id: 4, image:  require('../images/ficcao4.jpg'), titulo: 'O fim da morte', autor: 'Cixin Liu', preco: 'R$ 39,41', avaliacoes: 2.200, 
        descrition: 'No terceiro volume da trilogia, após a Batalha do Fim do Mundo, a Terra atinge um frágil acordo com os invasores trissolarianos. Luo Ji, conhecido como Portador da Espada, enfrenta o desafio de proteger duas civilizações, enquanto Cheng Xin, uma engenheira do século XXI, desperta em uma nova era. Com o destino da humanidade em jogo, ela deve decidir se está pronta para assumir a responsabilidade e confrontar um projeto antigo que pode afetar o futuro da Terra.',},
    ],
misterioSuspense: [
  { 
    id: 1, 
    image: require('../images/misterioSuspense1.jpg'),
    titulo: 'Dias perfeitos',
    autor: 'Raphael Montes',
    preco: 'R$ 34,90',
    avaliacoes: 4.000,
    descrition: 'Um suspense psicológico perturbador sobre obsessão, manipulação e perda do controle. A narrativa acompanha um estudante de medicina que leva seu fascínio por uma jovem a extremos inimagináveis, criando um clima tenso do início ao fim.'
  },
  { 
    id: 2, 
    image: require('../images/misterioSuspense2.jpg'),
    titulo: 'Nunca minta',
    autor: 'Freida McFadden',
    preco: 'R$ 39,90',
    avaliacoes: 4.300,
    descrition: 'Com uma atmosfera sombria, o livro mergulha nos segredos de uma família aparentemente comum. Ao longo da trama, o leitor é levado a duvidar de tudo e todos, em uma história cheia de reviravoltas e mistérios bem guardados.'
  },
  { 
    id: 3, 
    image: require('../images/misterioSuspense3.jpg'),
    titulo: 'Jantar secreto',
    autor: 'Raphael Montes',
    preco: 'R$ 42,50',
    avaliacoes: 700,
    descrition: 'Quatro amigos se envolvem em um esquema criminoso que começa como uma forma de sobrevivência e logo se torna algo muito maior. Com críticas sociais afiadas, o livro mistura humor ácido, violência e suspense em doses equilibradas.'
  },
  { 
    id: 4, 
    image: require('../images/misterioSuspense4.jpg'),
    titulo: 'O casamento da empregada',
    autor: 'Freida McFadden',
    preco: 'R$ 36,90',
    avaliacoes: 1.000,
    descrition: 'Uma empregada dedicada se vê presa em uma trama de segredos sombrios da família para a qual trabalha. À medida que a tensão cresce, as máscaras caem e a história revela um desfecho surpreendente e perturbador.'
  },
],

prime: [
  { 
    id: 1, 
    image: require('../images/prime1.jpg'),
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    preco: 'R$ 49,90',
    avaliacoes: 18.879,
    descrition: 'Primeiro volume da série que se tornaria um fenômeno mundial. Acompanhamos Harry Potter ao descobrir ser um bruxo e entrar em Hogwarts, vivendo aventuras mágicas e enfrentando desafios que moldarão seu destino.'
  },
  { 
    id: 2, 
    image: require('../images/prime2.jpg'),
    titulo: 'Noites brancas',
    autor: 'Fiódor Dostoiévski',
    preco: 'R$ 29,90',
    avaliacoes: 2.354,
    descrition: 'Uma narrativa delicada sobre solidão, sonhos e a busca por amor. Ambientada em São Petersburgo, a história apresenta encontros breves e intensos que deixam marcas profundas no protagonista e no leitor.'
  },
  { 
    id: 3, 
    image: require('../images/prime3.jpg'),
    titulo: 'Até você ser minha',
    autor: 'Samantha Hayes',
    preco: 'R$ 33,90',
    avaliacoes: 1.353,
    descrition: 'Um thriller psicológico em que a chegada de uma nova babá transforma completamente a vida de uma família. O clima de mistério cresce a cada página, levando a um desfecho eletrizante e inesperado.'
  },
  { 
    id: 4, 
    image: require('../images/prime4.jpg'),
    titulo: 'Todos os meus pecados',
    autor: 'Elisabeth George',
    preco: 'R$ 38,90',
    avaliacoes: 4.384,
    descrition: 'Mistério policial que combina investigação detalhada, personagens complexos e uma trama cheia de intrigas. O livro expõe as contradições humanas e os segredos de uma comunidade onde ninguém é totalmente inocente.'
  },
],

maisVendido: [
  { 
    id: 1, 
    image: require('../images/maisVendido1.jpg'),
    titulo: 'Stay for me',
    autor: 'Corinne Michaels',
    preco: 'R$ 41,90',
    avaliacoes: 1.463,
    descrition: 'Um romance intenso sobre segundas chances, perdão e a força do amor verdadeiro. A narrativa emociona ao mostrar como recomeços podem ser difíceis, mas também profundamente transformadores.'
  },
  { 
    id: 2, 
    image: require('../images/maisVendido2.jpg'),
    titulo: 'Jogada arriscada',
    autor: 'Meghan Quinn',
    preco: 'R$ 37,90',
    avaliacoes: 200,
    descrition: 'Divertido e apaixonante, o livro mistura o universo dos esportes com relacionamentos complicados. Com humor e romance, a trama conquista o leitor e mostra que, no amor, arriscar pode valer a pena.'
  },
  { 
    id: 3, 
    image: require('../images/maisVendido3.jpg'),
    titulo: 'Te amo em segredo',
    autor: 'Vi Keeland',
    preco: 'R$ 44,90',
    avaliacoes: 283,
    descrition: 'Romance envolvente cheio de segredos, paixões e revelações inesperadas. A escrita leve e cativante prende o leitor até a última página, tornando impossível não torcer pelos protagonistas.'
  },
  { 
    id: 4, 
    image: require('../images/maisVendido4.jpg'),
    titulo: 'A hora da estrela',
    autor: 'Clarice Lispector',
    preco: 'R$ 22,90',
    avaliacoes: 5.686,
    descrition: 'Um dos clássicos mais marcantes da literatura brasileira, que narra a vida simples e sofrida de Macabéa. Clarice constrói uma obra profundamente reflexiva, sobre desigualdade, invisibilidade social e a fragilidade da existência.'
  },
]
  };

  export const forYou = {
    livrosNovos: [
    { id: 1, image: require('../images/jogosVorazes.jpg'), titulo: 'Em chamas', autor: 'Suzanne Collins', preco: 'R$ 31,41', avaliacoes: 3.000, 
        descrition: 'Em Chamas, sequência de Jogos Vorazes, acompanha Katniss Everdeen e Peeta Mellark após sua vitória nos Jogos. A população de Panem começa a se agitar, e sinais de revolta surgem. O governo teme a influência dos dois vencedores, que se tornaram ídolos, e busca formas de controlá-los, até mesmo forçando-os a lutar novamente. No meio do turbilhão, Katniss lida com seus sentimentos confusos por Peeta e seu amigo Gale, enquanto tenta manter a farsa do romance.' },
    { id: 2, image: require('../images/empregada.jpg'), titulo: 'A empregada', autor: 'Freida MacFadden', preco: 'R$ 33,41', avaliacoes: 15.788, 
        descrition: 'Em A Empregada, de Freida McFadden, Millie é contratada para trabalhar na casa dos Winchester. Porém, a vida no local está longe de ser tranquila. Nina, sua patroa, faz de tudo para atormentá-la, enquanto Andrew, o marido, parece cada vez mais fragilizado. À medida que Millie observa o sofrimento de Andrew, ela começa a se perguntar como seria viver no lugar de Nina. Mas, os Winchester não fazem ideia do que Millie é realmente capaz, e a verdade sobre sua personalidade pode ser revelada de forma devastadora.' },
    { id: 3, image: require('../images/assimComeca.jpg'), titulo: 'É assim que começa', autor: 'Colleen Hoover', preco: 'R$ 29,35', avaliacoes: 54.000, 
        descrition: 'Em É Assim que Começa, de Colleen Hoover, Lily está tentando seguir em frente após seu divórcio de Ryle, mas o reencontro com Atlas, seu amor da adolescência, mexe com seus sentimentos. Embora pareça o momento certo para retomarem o relacionamento, Ryle, ainda amargurado pelo fim do casamento, não aceita o envolvimento de Lily com Atlas. Alternando entre os pontos de vista de Lily e Atlas, a obra explora as dificuldades de um novo começo em meio a um ex-marido ciumento.' },
    { id: 4, image: require('../images/verity.jpg'), titulo: 'Verity', autor: 'Colleen Hoover', preco: 'R$ 31,41', avaliacoes: 47.000, 
        descrition: 'Verity, de Colleen Hoover, narra a história de Lowen Ashleigh, uma escritora em crise financeira que é convidada a concluir a série de sucesso da famosa autora Verity Crawford, após um acidente que a incapacitou. Ao se mudar para a casa dos Crawford, Lowen descobre uma autobiografia perturbadora de Verity, que revela segredos sombrios sobre sua vida e o relacionamento com o marido Jeremy. Envolta em um jogo psicológico, Lowen deve decidir se expõe esses segredos ou se mantém em silêncio, enquanto o suspense cresce até um final chocante.Verity, de Colleen Hoover, narra a história de Lowen Ashleigh, uma escritora em crise financeira que é convidada a concluir a série de sucesso da famosa autora Verity Crawford, após um acidente que a incapacitou. Ao se mudar para a casa dos Crawford, Lowen descobre uma autobiografia perturbadora de Verity, que revela segredos sombrios sobre sua vida e o relacionamento com o marido Jeremy. Envolta em um jogo psicológico, Lowen deve decidir se expõe esses segredos ou se mantém em silêncio, enquanto o suspense cresce até um final chocante.' },
    ],
  }

   export const explore = {
    livrosExplore: [
    { id: 1, image:  require('../images/ficcao4.jpg'), titulo: 'O fim da morte', autor: 'Cixin Liu', preco: 'R$ 39,41', avaliacoes: 2.200, 
            descrition: 'No terceiro volume da trilogia, após a Batalha do Fim do Mundo, a Terra atinge um frágil acordo com os invasores trissolarianos. Luo Ji, conhecido como Portador da Espada, enfrenta o desafio de proteger duas civilizações, enquanto Cheng Xin, uma engenheira do século XXI, desperta em uma nova era. Com o destino da humanidade em jogo, ela deve decidir se está pronta para assumir a responsabilidade e confrontar um projeto antigo que pode afetar o futuro da Terra.',},
    { id: 2, image: require('../images/empregada.jpg'), titulo: 'A empregada', autor: 'Freida MacFadden', preco: 'R$ 33,41', avaliacoes: 15.788, 
        descrition: 'Em A Empregada, de Freida McFadden, Millie é contratada para trabalhar na casa dos Winchester. Porém, a vida no local está longe de ser tranquila. Nina, sua patroa, faz de tudo para atormentá-la, enquanto Andrew, o marido, parece cada vez mais fragilizado. À medida que Millie observa o sofrimento de Andrew, ela começa a se perguntar como seria viver no lugar de Nina. Mas, os Winchester não fazem ideia do que Millie é realmente capaz, e a verdade sobre sua personalidade pode ser revelada de forma devastadora.' },
    { id: 3, image: require('../images/assimComeca.jpg'), titulo: 'É assim que começa', autor: 'Colleen Hoover', preco: 'R$ 29,35', avaliacoes: 54.000, 
        descrition: 'Em É Assim que Começa, de Colleen Hoover, Lily está tentando seguir em frente após seu divórcio de Ryle, mas o reencontro com Atlas, seu amor da adolescência, mexe com seus sentimentos. Embora pareça o momento certo para retomarem o relacionamento, Ryle, ainda amargurado pelo fim do casamento, não aceita o envolvimento de Lily com Atlas. Alternando entre os pontos de vista de Lily e Atlas, a obra explora as dificuldades de um novo começo em meio a um ex-marido ciumento.' },
    { id: 4, image:  require('../images/horror3.jpg'),titulo: 'O vilarejo', autor: 'Raphael Montes', preco: 'R$ 44,90', avaliacoes: 12.000, 
            descrition: 'Em Os Sete Demônios, Raphael Montes inspira-se na ligação feita pelo padre Peter Binsfeld entre os pecados capitais e demônios, contando sete histórias sobre a decadência de um vilarejo isolado. As narrativas, que podem ser lidas em qualquer ordem, convergem para uma conclusão surpreendente, revelando a lenta degradação dos moradores, marcados pela neve e pela fome.'},
    ],
  }

  export const lancamentos = {
  livrosLancamentos: [
    { 
      id: 1, 
      image: require('../images/literaturaFiccao1.jpg'),
      titulo: 'Sede de me beber inteira',
      autor: 'Alana Portela',
      preco: 'R$ 35,90',
      avaliacoes: 4.474,
      descrition: 'Uma narrativa poética e visceral que mergulha nas emoções humanas mais intensas. O livro explora o amor, o desejo e a vulnerabilidade de forma crua, mostrando como os relacionamentos podem nos consumir por completo.'
    },
    { 
      id: 2, 
      image: require('../images/literaturaFiccao2.jpg'),
      titulo: 'O ano em que eu morri em Nova York',
      autor: 'Milly Lacombe',
      preco: 'R$ 39,90',
      avaliacoes: 1.373,
      descrition: 'Um romance autobiográfico que mistura ficção e realidade, trazendo a jornada de autodescoberta em uma Nova York vibrante. A narrativa combina dor, paixão e reflexões sobre identidade e escolhas de vida.'
    },
    { 
      id: 3, 
      image: require('../images/literaturaFiccao3.jpg'),
      titulo: 'O segredo de espionosa',
      autor: 'Lilian Fontes',
      preco: 'R$ 32,90',
      avaliacoes: 203,
      descrition: 'Envolta em uma rede de intrigas, uma jovem descobre segredos que podem mudar o rumo de sua vida. Entre espionagem e mistério, a trama mostra como coragem e inteligência podem ser armas poderosas.'
    },
    { 
      id: 4, 
      image: require('../images/literaturaFiccao4.jpg'),
      titulo: 'Memórias póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      preco: 'R$ 19,90',
      avaliacoes: 12.374,
      descrition: 'Clássico do realismo brasileiro narrado por um “defunto-autor”, que revisita sua vida com ironia e humor ácido. A obra é uma crítica à sociedade da época, mas também permanece atual por suas reflexões universais sobre vaidade, poder e morte.'
    },
  ],
}

  