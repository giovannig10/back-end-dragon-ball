import { PrismaClient } from "@prisma/client";
import planetasModel from "../../src/models/planetasModel.js";
import racasModel from "../../src/models/racaModel.js";
import personagensModel from "../../src/models/personagemModel.js";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // Código opcional para limpar o banco de dados antes de inserir novos dados
  await prisma.planeta.deleteMany({});

  // Criar planetas de diferentes temáticas
  const planetas = await prisma.planeta.create( [{
    data: {
      planetaId: 1,
      name: "Terra",
      descricao: "Planeta natal dos humanos e local central na maior parte da série. Possui enorme diversidade de seres e riquezas naturais.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/8/8e/EarthEp163.png/revision/latest?cb=20150124184006&path-prefix=pt-br",
      nivelPoder: "Extremamente variado"
    },
    data : {
      planetaId: 2,
      name: "Namekusei",
      descricao: "Planeta natal dos Namekuseijins; ambiente aquático e perigoso, palco da saga das esferas do dragão originais.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/4/43/NamekGreenPlanet.png/revision/latest?cb=20150208114703&path-prefix=pt-br",
      nivelPoder: "Médio-alto"
    },
    data : {
      planetaId: 3,
      name: "Vegeta",
      descricao: "Planeta natal dos Saiyajins, destruído por Freeza; ambiente hostil, força bruta entre os habitantes.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/d6/PlanetVegetaBeforeItWasD.png/revision/latest/scale-to-width-down/300?cb=20130814022903&path-prefix=pt-br",
      nivelPoder: "Alto"
    },
    data : {
      planetaId: 4,
      name: "Kaioshin",
      descricao: "	Pequeno planeta do Kaio do Norte, usado como local de treino de Goku; gravidade é 10x maior que a Terra.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/5/5e/KingKaisPlanetNV.png/revision/latest?cb=20150201015228&path-prefix=pt-br",
      nivelPoder: "Baixo"
    },
    data : {
      planetaId: 5,
      name: "Freeza 79",
      descricao: "Base militar de Freeza; planetas conquistados pelo exército do vilão.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/4/48/Frieza79.png/revision/latest?cb=20141227173809&path-prefix=pt-br",
      nivelPoder: "Alto"
    },
    data : {
      planetaId: 6,
      name: "Airla",
      descricao:"Planeta dos Arlianos, insectoides, destruído por Vegeta.",
      imageUrl:"https://static.wikia.nocookie.net/dragonball/images/e/ee/Planeta_Arlia.jpg/revision/latest?cb=20140322140404&path-prefix=pt-br",
      nivelPoder: "Baixo"
    },
    data : {
      planetaId: 7,
      name: "Hera",
      descricao: "Planeta natal de Bojack e capangas, todos muito poderosos comparados à média do universo.",
      imageUrl: "https://static.wikia.nocookie.net/dblegacy/images/9/90/Planethera.png/revision/latest?cb=20140329223032",
      nivelPoder: "Alto"
    },
    data : {
      planetaId: 8,
      name: "Estrela Gete",
      descricao: "A Estrela Gete é um grande planeta-monstro que eventualmente absorveu os restos de Coola, que permitiu que ele controlasse a estrela em Dragon Ball Z: O Retorno de Coola.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/c/cc/Screenshotsdbzmovie6_017.jpg/revision/latest/scale-to-width-down/536?cb=20150224154702&path-prefix=pt-br",
      nivelPoder: "Infinito"
    },
    data : {
      planetaId: 9,
      name: "Konatsu",
      descricao: "Konatsu é um planeta na Galáxia Sul que é o lar dos Konatsu-seijins, incluindo os dois irmãos guerreiros Tapion e Minotia.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/0c/Konats.jpg/revision/latest/scale-to-width-down/180?cb=20150204202030&path-prefix=pt-br",
      nivelPoder: "Médio"
    },
    data : {
      planetaId: 10,
      name: "Novo Planeta Vegeta",
      descricao: "Novo Planeta Vegeta  era um planeta que seria o lar dos Saiyajins restantes após a destruição do original Planeta Vegeta por Freeza.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/5/5c/New_Planet_Vegeta.jpg/revision/latest/scale-to-width-down/535?cb=20130814024215&path-prefix=pt-br",
      nivelPoder: "Alto"
    },
    data : {
      planetaId: 11,
      name: "Planeta Beerus",
      descricao: "Planeta Beerus é o lar do Deus da Destruição Beerus e o Anjo Whis.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/f/f8/BeerusPlanetDBSEp30001.png/revision/latest/scale-to-width-down/250?cb=20201018222203&path-prefix=pt-br",
      nivelPoder: "Extremamente alto"
    },
    data : {
      planetaId: 12,
      name: "Planeta do Grande Kaioh",
      descricao: "O Planeta do Grande Kaioh  é o lar de Grande Kaioh, o rei das galáxias. Foi introduzido na saga Majin Boo em Dragon Ball Z.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/a/a3/GrandKaisPlanet.png/revision/latest/scale-to-width-down/230?cb=20150204202704&path-prefix=pt-br",
      nivelPoder: "Médio-alto"
    },
    data : {
      planetaId: 13,
      name: "Planeta Litt",
      descricao: "Planeta Litt é o planeta que Vegeta foi enquanto buscava Goku.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/e/ed/PlanetLitt1.png/revision/latest/scale-to-width-down/220?cb=20150218174547&path-prefix=pt-br",
      nivelPoder: "Baixo"
    },
    data : {
      planetaId: 14,
      name: "Planeta Yardrat",
      descricao: "Planeta Yardrat é o lar dos Yardrats. Goku cai nesse planeta após sua batalha com Freeza em Namekusei.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/b/b1/PlanetYardrat.png/revision/latest/scale-to-width-down/300?cb=20150211172658&path-prefix=pt-br",
      nivelPoder: "Médio"
    },
    data : {
      planetaId: 15,
      name: "Planeta Kaishin",
      descricao: "Planeta Kaishin  é o planeta natal original dos Glinds. É localizado no Segundo Reino dos Demônios.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/f/f0/SacredWorldoftheKais.png/revision/latest?cb=20150226223702&path-prefix=pt-br",
      nivelPoder: "Alto"
    }
  }]);

  const racas = await prisma.collection.create([{
    data: {
      name: "Andróides",
      descricao: "Andróides são Terráqueos cyborgs/robóticos, a maioria criados pelo cientista Dr. Gero. É dito que maioria dos androides têm energia ilimitada e vida eterna. Devido à sua natureza inorgânica, eles também não tem aura (ao contrário de Saiyajins, Terráqueos, e outros), então eles não podem ser rastreados usando rastreadores ou pelo Ki.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/1/10/Androids.jpeg/revision/latest?cb=20141228144731&path-prefix=pt-br",
      caracteristicas: "Possuem energia ilimitada, vida eterna, não possuem aura",
      habilidadesEspeciais: "Resistência maior a danos, força sobre-humana, indetectáveis por rastreadores de Ki e energia ilimitada",
      nivelPoderMedio: "Extremamente alto",
      planetaId: 1,
      racaId: 1
    },
    data: {
      name: "Terráqueos",
      descricao: "Terráqueos são os principais habitantes do planeta Terra em Dragon Ball.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/d8/SatanFan%28Jmp%29.png/revision/latest/scale-to-width-down/300?cb=20130815170824&path-prefix=pt-br",
      caracteristicas: "Menos poderosos comparados a maioria e grande diversidade.",
      habilidadesEspeciais: "Extremamente variado, dependendo do indivíduo",
      nivelPoderMedio: "Baixo",
      planetaId: 1,
      racaId: 2
    },
    data: {
      name: "Glind",
      descricao: "Os Glinds são a raça da qual os Kaiohshins fazem parte, e são originários do Segundo Reino dos Demônios antes de saírem e se mudarem para outros universos.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/7/7f/Glinds.png/revision/latest/scale-to-width-down/350?cb=20241115221012&path-prefix=pt-br",
      caracteristicas: "Humanoides com orelhas pontudas, pele de cores incomuns (verde, azul, roxo), aliados do bem e seres com poderes espirituais",
      habilidadesEspeciais: "Poderes espirituais e imortalidade (não envelhecem)",
      nivelPoderMedio: "Alto",
      planetaId: 15,
      racaId: 3
    },
    data: {
      name: "Majin",
      descricao: "Majin é uma raça que estreia com Majin Boo na saga Majin Boo em Dragon Ball Z. São seres magicos com habilidades únicas e poderes incríveis.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/e/ee/DjinnDBOWallpaper.png/revision/latest/scale-to-width-down/300?cb=20130825165446&path-prefix=pt-br",
      caracteristicas: "Possuem corpos maleáveis e flexíveis, podem tranfoormar objetos e pessoas em doces, são feitos de magias e sua pele é semelhante a um chiclete rosa",
      habilidadesEspeciais: "Regeneração total de seu corpo, transformações de coisas e seres em doces, poder de cura e poder de absorção",
      nivelPoderMedio: "Extremamente alto",
      planetaId: 15,
      racaId: 4
    },
    data: {
      name: "Nmaekuseijin",
      descricao: "Namekuseijins  são uma raça originária do Reino dos Demônios. Eles existem tanto no Universo 6 quanto no Universo 7, habitando o planeta Namekusei nesses universos, tendo se mudado do Reino dos Demônios para lá há muito tempo. Eles estão entre as raças mais importantes da série, pois eles são os criadores das Esferas do Dragão.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/f/f1/Namekians03.png/revision/latest/scale-to-width-down/300?cb=20150104110503&path-prefix=pt-br",
      caracteristicas: "Humanoides de pele verde, antenas na cabeça, com alta expectativa de vida",
      habilidadesEspeciais: "Regeneração, poderes mágicos, podem criar Esferas do Dragão e podem se multiplicar",
      nivelPoderMedio: "Médio-alto",
      planetaId: 2,
      racaId: 5
    },
    data: {
      name: "Raça do Freeza",
      descricao: "Raça do Freeza é a misteriosa raça sem nome que Freeza, Rei Cold, Coola, Kuriza, Chilled, e Frost pertencem. A raça é introduzida na série na saga Namekusei de Dragon Ball Z.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/6a/KingColdandFreezainHell.png/revision/latest/scale-to-width-down/300?cb=20150217141835&path-prefix=pt-br",
      caracteristicas: "Humanoides com cauda, pele de cores incomeuns",
      habilidadesEspeciais: "Transformações que elevam seu poder de luta e podem sobreviver no espaço",
      nivelPoderMedio: "Extremamente alto",
      planetaId: 5,
      racaId: 6
    },
    data: {
      name: "Saiyajin",
      descricao: "Os Saiyajins  são uma raça guerreira que foi quase toda extinta por Freeza antes do começo da série Dragon Ball. Eles têm um papel central em Dragon Ball Z, Dragon Ball GT, e Dragon Ball Super após ser revelado que o protagonista Goku é na verdade um Saiyajin que foi mandado para destruir a Terra.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/c/c4/SaiyansDBKK.png/revision/latest/scale-to-width-down/270?cb=20130814021958&path-prefix=pt-br",
      caracteristicas: "Humanoides com cauda de macaco, pele clara, cabelos pretos e espetados",
      habilidadesEspeciais: "Transformações que elevam seu poder de luta, força sobre-humano, evoluções de poderes rápidas e constantes após cada batalha",
      nivelPoderMedio: "Extremamente alto",
      planetaId: 3,
      racaId: 7
    },
    data: {
      name: "Raça Hera",
      descricao: "Uma raça alienigena que habita no planeta Hera, incluindo Bojack, Zangya, Bido e Kogu.",
      imageUrl: "https://preview.redd.it/s9caxdxw8xr71.jpg?auto=webp&s=d43e1569e2ab851bdcfff2b9043c26e3cf8fab7d",
      caracteristicas: "Humanoides com pele azul, verde ou roxa, cabelos de cores vivas (azul, rosa, roxo)",
      habilidadesEspeciais: "Força física extremamente alta, habilidades de luta avançadas",
      nivelPoderMedio: "Alto",
      planetaId: 7,
      racaId: 8
    },
    data: {
      name: "Konatsu-seijins",
      descricao: "Os Konatsu-seijins  são uma raça de guerreiros do planeta Konatsu na Galáxia Sul. Eles são conhecidos por sua força e habilidades de luta.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/08/Tapion_and_minotia.jpg/revision/latest/scale-to-width-down/180?cb=20150128163925&path-prefix=pt-br",
      caracteristicas: "Cabelos vermelhos, orelhas pontudas algo que remete um anel na cabeça",
      habilidadesEspeciais: "Habilidades de luta avançadas, uso de espadas",
      nivelPoderMedio: "Médio",
      planetaId: 9,
      racaId: 9
    },
    data: {
      name: "Saibaimans",
      descricao: "Saibaimans são plantas alienígenas que se assemelham a pequenos arbustos com rostos e braços. Eles são criados e controlados por Freeza e seu exército para lutar contra seus inimigos.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/8/8b/SaiabamenInfoBox.jpeg/revision/latest/scale-to-width-down/536?cb=20141227155300&path-prefix=pt-br",
      caracteristicas: "Pequenos arbustos com rostos e braços com cores variadas",
      habilidadesEspeciais: "Explodem ao contato, podem se multiplicar",
      nivelPoderMedio: "Baixo",
      planetaId: 3,
      racaId: 10
    },
    data: {
      name: "Yardrat",
      descricao: "Yardrats são uma raça do Planeta Yardrat. Eles são uma raça fisicamente frágil, mas possuem a habilidade de manipular espaço e tempo, e ensinam a técnica do Teletransporte para Goku.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/6c/Yadrats.png/revision/latest/scale-to-width-down/300?cb=20150210230113&path-prefix=pt-br",
      caracteristicas: "Pequenos humanoides com pele rosa com orelhas pontudas",
      habilidadesEspeciais: "Manipulação de espaço e tempo, Teletransporte e hablidades especiais",
      nivelPoderMedio: "Médio",
      planetaId: 14,
      racaId: 11
    },
    data: {
      name: "Litt-seijins",
      descricao: "Os Litt-seijins  são uma raça de guerreiros do planeta Litt. Eles são conhecidos por sua força e habilidades de luta.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/6c/Bird-LikeFriezaSoldier.png/revision/latest/scale-to-width-down/300?cb=20150218170353&path-prefix=pt-br",
      caracteristicas: "Humanoides com pele verde e penas coloridas",
      habilidadesEspeciais: "Habilidades de luta avançadas, voo",
      nivelPoderMedio: "Médio",
      planetaId: 13,
      racaId: 12
    },

  }]);

  const personagens = await prisma.collection.create([{
    data: {
      name: "Andróide 13",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/c/c1/Android13-.png/revision/latest?cb=20141230181645&path-prefix=pt-br",
      ki: "1 milhão",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Absorção de energia, energia ilimitada",
      transformacoes: "Sim (Fusão com os outros androides)",
      sagas: "Saga dos Androides, Saga de Cell",
      biografia: "Andróide 13 é um dos antagonistas do filme Dragon Ball Z: O Super Andróide. Ele é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 13 é conhecido por sua força imensa e habilidades de combate avançadas."
    },
    data: {
      name: "Andróide 14",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/3/3a/DBZ_-_Android_14.jpg/revision/latest/scale-to-width-down/535?cb=20140929173907&path-prefix=pt-br",
      ki: "900 mil",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Energia ilimitada, força sobre-humana",
      transformacoes: "Não",
      sagas: "Saga dos Androides, Saga de Cell",
      biografia: "Andróide 14 é um dos antagonistas do filme Dragon Ball Z: O Super Andróide. Ele é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 14 é conhecido por sua força imensa e habilidades de combate avançadas."
    },
    data: {
      name: "Andróide 15",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/8/82/Android15SA13.png/revision/latest?cb=20141228193109&path-prefix=pt-br",
      ki: "950 mil",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Energia ilimitada, força sobre-humana",
      transformacoes: "Não",
      sagas: "Saga dos Androides, Saga de Cell",
      biografia: "Andróide 15 é um dos antagonistas do filme Dragon Ball Z: O Super Andróide. Ele é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 15 é conhecido por sua força imensa e habilidades de combate avançadas."
    },
    data: {
      name: "Andróide 16",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/3/3e/Android16GokusAssasinK-1-.png/revision/latest?cb=20150124164210&path-prefix=pt-br",
      ki: "1.2 milhão",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Energia ilimitada, força sobre-humana, auto-destruição",
      transformacoes: "Não",
      sagas: "Saga dos Androides, Saga de Cell",
      biografia: "Andróide 16 é um dos antagonistas da série Dragon Ball Z. Ele é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 16 é conhecido por sua força imensa, habilidades de combate avançadas e sua natureza pacífica, apesar de ser um andróide."
    },
    data: {
      name: "Andróide 17",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/01/Androide_17NV.png/revision/latest?cb=20171001042843&path-prefix=pt-br",
      ki: "1.5 milhão",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Energia ilimitada, força sobre-humana, barreira de energia",
      transformacoes: "Sim (Fusão com Andróide 18)",
      sagas: "Saga dos Androides, Saga de Cell, Saga do Torneio do Poder",
      biografia: "Andróide 17 é um dos antagonistas da série Dragon Ball Z e posteriormente um aliado em Dragon Ball Super. Ele é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 17 é conhecido por sua força imensa, habilidades de combate avançadas e sua personalidade fria e calculista."
    },
    data: {
      name: "Andróide 18",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/b/b7/Android18ImperfectCellSagaNV.png/revision/latest?cb=20141227015455&path-prefix=pt-br",
      ki: "1.5 milhão",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Energia ilimitada, força sobre-humana, barreira de energia",
      transformacoes: "Sim (Fusão com Andróide 17)",
      sagas: "Saga dos Androides, Saga de Cell, Saga majin Boo, Saga Batalha dos Deuses, Saga Universo 6 vs Universo 7, Saga do Torneio do Poder",
      biografia: "Andróide 18 é uma das antagonistas da série Dragon Ball Z e posteriormente uma aliada em Dragon Ball Super. Ela é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 18 é conhecida por sua força imensa, habilidades de combate avançadas e sua personalidade fria e calculista, mas também mostra um lado mais humano após se casar com Kuririn."
    },
    data: {
      name: "Andróide 19",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/0d/Android19FBNV.png/revision/latest?cb=20140408201553&path-prefix=pt-br",
      ki: "800 mil",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Absorção de energia, energia ilimitada",
      transformacoes: "Não",
      sagas: "Saga dos Androides",
      biografia: "Andróide 19 é um dos antagonistas da Saga dos Andróides em Dragon Ball Z. Ele é um andróide criado pelo Dr. Gero com o objetivo de eliminar Goku. Andróide 19 é conhecido por sua força imensa e habilidades de combate avançadas."
    },
    data: {
      name: "Andróide 20 (Dr. Gero)",
      imageUrl: "https://i.pinimg.com/736x/e3/3f/7f/e33f7facea27ef6b1f441dffc6c191c8.jpg",
      ki: "800 mil",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Absorção de energia, energia ilimitada",
      transformacoes: "Não",
      sagas: "Saga dos Androides",
      biografia: "Dr. Gero, também conhecido como Andróide 20, é o criador dos andróides e um dos principais antagonistas da Saga dos Andróides em Dragon Ball Z. Ele é um cientista brilhante que se tornou obcecado em eliminar Goku e seus amigos, criando uma série de andróides poderosos para esse fim."
    },
    data: {
      name: "Anunciador do Torneio",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/d4/Announcer.png/revision/latest/scale-to-width-down/536?cb=20150309170532&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Desconhecido",
      transformacoes: "Não",
      sagas: "Picollo, Saga Majin Boo",
      biografia: "O Anunciador do Torneio é um personagem que aparece durante o Torneio de Artes Marciais em Dragon Ball Z. Ele é responsável por anunciar os lutadores e as lutas que acontecem durante o torneio. Embora não tenha um papel significativo na história, ele é uma presença constante durante os torneios e é conhecido por sua voz alta e entusiasmada."
    },
    data: {
      name: "Bardock",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/d2/BardockFatherOfGokuNVk1.png/revision/latest?cb=20130815180226&path-prefix=pt-br",
      ki: "800 mil",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Espírito Saiyajin, Explosão de Ki",
      transformacoes: "Sim (Super Saiyajin)",
      sagas: "Especial Bardock - O Pai de Goku, Dragon Ball Super: Broly",
      biografia: "Bardock é o pai de Goku e um guerreiro Saiyajin. Ele é conhecido por sua bravura e determinação em lutar contra as forças do mal, mesmo quando está em desvantagem. Bardock desempenha um papel crucial na história de Dragon Ball, especialmente em relação à origem de Goku e à destruição do Planeta Vegeta."
    },
    data: {
      name: "Beerus",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/b/b9/Bills.png/revision/latest?cb=20171004050904&path-prefix=pt-br",
      ki: "10 Bilhões",
      planetaId: 11,
      racaId: null,
      tecnicasEspeciais: "Hakai (Destruição), Velocidade Divina, Força Sobre-humana",
      transformacoes: "Não",
      sagas: "Saga Batalha dos Deuses, Saga Universo 6 vs Universo 7, Saga do Torneio do Poder, Saga Super Hero",
      biografia: "Beerus é o Deus da Destruição do Universo 7 em Dragon Ball Super. Ele é um ser extremamente poderoso e tem a responsabilidade de manter o equilíbrio no universo, destruindo planetas e civilizações quando necessário. Beerus é conhecido por seu temperamento imprevisível e sua paixão por comida deliciosa."
    },
    data: {
      name: "Bojack",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/2/23/BojacksTeam9.jpg/revision/latest?cb=20150304180150&path-prefix=pt-br",
      ki: "1.2 milhão",
      planetaId: 7,
      racaId: 8,
      tecnicasEspeciais: "Força Sobre-humana, Habilidades de Combate Avançadas",
      transformacoes: "Sim (Forma Final)",
      sagas: "Dragon Ball Z: O Retorno de Bojack",
      biografia: "Bojack é o antagonista principal do filme Dragon Ball Z: O Retorno de Bojack. Ele é um pirata espacial extremamente poderoso que foi selado em uma cápsula por 30 anos antes de ser libertado por acidente. Bojack busca vingança contra os guerreiros Z e tem como objetivo dominar o universo."
    },
    data: {
      name: "Booter",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/e/e8/BurterPosing.png/revision/latest/scale-to-width-down/180?cb=20150107194308&path-prefix=pt-br",
      ki: "100 mil",
      planetaId: null,
      racaId: null,
      tecnicasEspeciais: "Velocidade Extrema, Força Sobre-humana",
      transformacoes: "Não",
      sagas: "Saga Freeza",
      biografia: "Burter é um membro do Esquadrão Ginyu, uma equipe de elite que serve sob o comando de Freeza. Ele é conhecido por sua velocidade incrível, sendo considerado o ser mais rápido do universo. Burter é um lutador habilidoso e confiante, mas acaba sendo derrotado pelos guerreiros Z durante a batalha em Namekusei."
    },
    data: {
      name: "Broly",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/d9/Broly_infobox.png/revision/latest/scale-to-width-down/536?cb=20150102195827&path-prefix=pt-br",
      ki: "10 milhões",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Transformação em Super Saiyajin Lendário, Força Sobre-humana",
      transformacoes: "Sim (Super Saiyajin Lendário)",
      sagas: "Dragon Ball Z: O Retorno de Broly, Dragon Ball Super: Broly",
      biografia: "Broly é um Saiyajin lendário conhecido por sua força imensa e natureza selvagem. Ele é o protagonista dos filmes Dragon Ball Z: O Retorno de Broly e Dragon Ball Super: Broly. Broly possui uma transformação única chamada Super Saiyajin Lendário, que aumenta seu poder de forma exponencial. Apesar de sua força, Broly é um personagem trágico, lutando para controlar sua raiva e instintos destrutivos."
    },
    data: {
      name: "Bulma",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/d9/Broly_infobox.png/revision/latest/scale-to-width-down/536?cb=20150102195827&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Gênio Inventora, Habilidades Técnicas Avançadas",
      transformacoes: "Não",
      sagas: "Todas as sagas",
      biografia: "Bulma é uma das personagens principais da série Dragon Ball. Ela é uma cientista brilhante e inventora, conhecida por criar várias tecnologias importantes, incluindo as Esferas do Dragão. Bulma é amiga próxima de Goku e desempenha um papel crucial em muitas das aventuras dos guerreiros Z."
    },
    data: {
      name: "Capitão Ginyu",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/2/28/CaptainGinyuVsGoku.png/revision/latest?cb=20150126234340&path-prefix=pt-br",
      ki: "400 mil",
      planetaId: null,
      racaId: null,
      tecnicasEspeciais: "Troca de Corpos, Força Sobre-humana",
      transformacoes: "Não",
      sagas: "Saga Freeza",
      biografia: "Capitão Ginyu é o líder do Esquadrão Ginyu, uma equipe de elite que serve sob o comando de Freeza. Ele é conhecido por sua habilidade única de trocar de corpos com outros seres, o que ele usa para tentar derrotar os guerreiros Z. Capitão Ginyu é um lutador poderoso e estratégico, mas acaba sendo derrotado pelos guerreiros Z durante a batalha em Namekusei."
    },
    data: {
    name: "Cell",
    imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/0d/CellPerfectNVVsGoku.png/revision/latest?cb=20130813195410&path-prefix=pt-br",
    ki: "2 milhões",
    planetaId: 1,
    racaId: 1,
    tecnicasEspeciais: "Absorção de energia, regeneração, Kamehameha",
    transformacoes: "Sim (Forma Perfeita)",
    sagas: "Saga de Cell",
    biografia: "Cell é um dos principais antagonistas da série Dragon Ball Z. Ele é um bio-andróide criado pelo Dr. Gero, projetado para ser o guerreiro perfeito ao absorver as células de outros guerreiros poderosos. Cell passa por várias transformações, culminando em sua forma perfeita, onde se torna uma ameaça formidável para os guerreiros Z. Ele é conhecido por sua inteligência, habilidades de combate avançadas e capacidade de regeneração."
    },
    data: {
      name: "Cell Jr.",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/6f/Cell_Juniores.jpg/revision/latest/scale-to-width-down/536?cb=20170617022410&path-prefix=pt-br",
      ki: "1.5 milhão",
      planetaId: 1,
      racaId: 1,
      tecnicasEspeciais: "Força Sobre-humana, Habilidades de Combate Avançadas",
      transformacoes: "Não",
      sagas: "Saga de Cell",
      biografia: "Cell Jr. são pequenas criaturas criadas por Cell durante a Saga de Cell em Dragon Ball Z. Eles são clones de Cell, possuindo habilidades e poderes semelhantes aos do original. Cell Jr. são extremamente agressivos e letais, representando uma ameaça significativa para os guerreiros Z durante o torneio de Cell."
    },
    data: {
      name: "Caos",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/8/8f/Chaos.png/revision/latest/scale-to-width-down/536?cb=20150101214936&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Auto-destruição, manipulação de energia",
      transformacoes: "Não",
      sagas: "Saga Sayajins",
      biografia: "Chaos é um terráqueo pequeno, de pele branca e bochechas vermelhas, que aparece na Saga Sayajins em Dragon Ball Z. Ele é um personagem cômico e um tanto inútil, conhecido por sua habilidade de auto-destruição, que ele usa como uma técnica de combate desesperada. Apesar de sua aparência frágil, Chaos é um aliado leal dos guerreiros Z."
    },
    data: {
      name: "chichi",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/0/05/ShonenChiChi.png/revision/latest?cb=20140924181318&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Habilidades de Combate Básicas",
      transformacoes: "Não",
      sagas: "Todas as sagas",
      biografia: "Chichi é a esposa de Goku e mãe de Gohan e Goten na série Dragon Ball. Ela é conhecida por sua personalidade forte e protetora, muitas vezes preocupada com a segurança e o bem-estar de sua família. Apesar de não ser uma lutadora poderosa como os guerreiros Z, Chichi é uma personagem importante na série, desempenhando um papel crucial na vida de Goku e seus filhos."
    },
    data: {
      name: "Coola",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/9/9a/KOLLAR.png/revision/latest?cb=20140508015445&path-prefix=pt-br",
      ki: "1.1 milhão",
      planetaId: 5,
      racaId: 6,
      tecnicasEspeciais: "Transformações, Força Sobre-humana",
      transformacoes: "Sim (Várias formas)",
      sagas: "Dragon Ball Z: O Retorno de Cooler",
      biografia: "Coola é o irmão mais novo de Freeza e um dos antagonistas do filme Dragon Ball Z: O Retorno de Cooler. Ele é um guerreiro poderoso que busca vingança contra os guerreiros Z por causa da derrota de seu irmão. Coola possui várias formas de transformação, cada uma aumentando significativamente seu poder de luta."
    },
    data: {
      name: "Freeza",
      imageUrl: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/63c96660-93f3-5314-99aa-f2d599f894ba/eddacbbf-030d-5f73-809b-72846a8be24f.jpg",
      ki: "1 milhão",
      planetaId: 5,
      racaId: 6,
      tecnicasEspeciais: "Transformações, Death Beam, Supernova",
      transformacoes: "Sim (Várias formas)",
      sagas: "Saga Freeza, Saga Trunks do Futuro, Saga do Torneio do Poder",
      biografia: "Freeza é um dos principais antagonistas da série Dragon Ball Z. Ele é o imperador do universo e é conhecido por sua crueldade e poder imenso. Freeza possui várias formas de transformação, cada uma aumentando significativamente seu poder de luta. Ele é responsável pela destruição do Planeta Vegeta e pela quase extinção da raça Saiyajin. Freeza é um inimigo formidável para os guerreiros Z, especialmente durante a Saga de Freeza em Namekusei."
    },
    data: {
      name: "Gine",
      imageUrl: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/63c96660-93f3-5314-99aa-f2d599f894ba/eddacbbf-030d-5f73-809b-72846a8be24f.jpg",
      ki: "Desconhecido",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Habilidades de Combate Básicas",
      transformacoes: "Não",
      sagas: "Dragon Ball Z bardock - O Pai de Goku",
      biografia: "Gine é a mãe de Goku e esposa de Bardock na série Dragon Ball. Ela é uma Saiyajin gentil e amorosa, diferente da maioria dos Saiyajins que são conhecidos por sua natureza guerreira. Gine desempenha um papel importante na história de Goku, especialmente em relação à sua origem e à destruição do Planeta Vegeta."
    },
    data: {
      name: "Gogeta",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/d/dd/GogetaFusionRebornDVD.png/revision/latest/scale-to-width-down/536?cb=20130814184842&path-prefix=pt-br",
      ki: "10 milhões",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Fusão, Kamehameha, Big Bang Kamehameha",
      transformacoes: "Sim (Super Saiyajin, Super Saiyajin Blue)",
      sagas: "Dragon Ball Z: O Retorno de Broly, Dragon Ball Super: Broly",
      biografia: "Gogeta é a fusão de Goku e Vegeta, dois dos guerreiros mais poderosos da série Dragon Ball. A fusão é realizada através da dança da fusão, resultando em um guerreiro incrivelmente poderoso que combina as habilidades e poderes de ambos os personagens. Gogeta é conhecido por sua força imensa, habilidades de combate avançadas e várias técnicas poderosas, incluindo o Kamehameha e o Big Bang Kamehameha."
    },
    data: {
      name: "Gohan",
      imageUrl: "https://static0.srcdn.com/wordpress/wp-content/uploads/Ultimate-Gohan-Dragon-Ball-Z.jpg",
      ki: "1 Bilhão",
      planetaId: 1,
      racaId: 7,
      tecnicasEspeciais: "Masenko, Kamehameha,",
      transformacoes: "Sim (Super Saiyajin, Potencial Liberado)",
      sagas: "Todas as sagas",
      biografia: "Gohan é o filho mais velho de Goku e Chi-Chi na série Dragon Ball. Ele é um guerreiro poderoso que possui um potencial imenso, muitas vezes superando até mesmo seu pai."
    },
    data: {
      name: "Gotenks",
      imageUrl: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/03c0cd2c-f688-52fa-b895-955faceefea3/37c62ba0-801e-5cbb-9817-26e7c0828519.jpg",
      ki: "3 milhões",
      planetaId: 1,
      racaId: 7,
      tecnicasEspeciais: "Fusão, Super Ghost Kamikaze Attack",
      transformacoes: "Sim (Super Saiyajin, Super Saiyajin 3)",
      sagas: "Saga Majin Boo",
      biografia: "Gotenks é a fusão de Goten e Trunks, dois jovens guerreiros Saiyajins na série Dragon Ball Z. A fusão é realizada através da dança da fusão, resultando em um guerreiro incrivelmente poderoso que combina as habilidades e poderes de ambos os personagens. Gotenks é conhecido por sua personalidade brincalhona e confiante, bem como por suas técnicas únicas, como o Super Ghost Kamikaze Attack"
    },
    data: {
      name:"Goku",
      imageUrl: "https://i.pinimg.com/1200x/39/31/86/39318692baf7faade13d1d5e2c9ba089.jpg",
      ki: "50 Bilhões",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Kamehameha, Genki Dama, Teletransporte",
      transformacoes: "Sim (Ozaru, Super Saiyajin, Super Saiyajin Red, Super Saiyajin Blue, Ultra Instinto)",
      sagas: "Todas as sagas",
      biografia: "Goku é o protagonista principal da série Dragon Ball. Ele é um Saiyajin que foi enviado à Terra quando era bebê e cresceu para se tornar um dos guerreiros mais poderosos do universo. Goku é conhecido por sua personalidade alegre e determinada, bem como por sua paixão por lutar e proteger seus amigos e entes queridos."
    },
    data: {
      name: "Goten",
      imageUrl: "https://i.pinimg.com/1200x/e6/19/99/e619997aaac3fdd37429d88d39ad6c84.jpg",
      ki: "1 milhão",
      planetaId: 1,
      racaId: 7,
      tecnicasEspeciais: "Kamehameha, Super Saiyajin",
      transformacoes: "Sim (Super Saiyajin, Fusão com Trunks)",
      sagas: "Saga Majin Boo",
      biografia: "Goten é o filho mais novo de Goku e Chi-Chi na série Dragon Ball Z. Ele é um jovem guerreiro Saiyajin que possui habilidades de combate impressionantes, muitas vezes comparáveis às de seu irmão mais velho, Gohan. Goten é conhecido por sua personalidade alegre e brincalhona, bem como por sua capacidade de se transformar em Super Saiyajin desde muito jovem."
    },
    data: {
      name: "Gurdo",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/c/cb/GULDO.jpg/revision/latest?cb=20150208221349&path-prefix=pt-br",
      ki: "80 mil",
      planetaId: null,
      racaId: null,
      tecnicasEspeciais: "Manipulação do Tempo, Força Sobre-humana",
      transformacoes: "Não",
      sagas: "Saga Freeza",
      biografia: "Guldo é um membro do Esquadrão Ginyu, uma equipe de elite que serve sob o comando de Freeza. Ele é conhecido por sua habilidade única de manipular o tempo, permitindo-lhe parar o tempo por curtos períodos. Guldo é um lutador astuto e estratégico, mas acaba sendo derrotado pelos guerreiros Z durante a batalha em Namekusei."
    },
    data: {
      name: "Kaioh do Norte",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/61/KingKaiNV.png/revision/latest/scale-to-width-down/536?cb=20141226190332&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 4,
      racaId: 3,
      tecnicasEspeciais: "Teletransporte, Treinamento de Artes Marciais",
      transformacoes: "Não",
      sagas: "Saga Sayajins, Saga Freeza, Saga de Cell, Saga Majin Boo",
      biografia: "Kaioh do Norte, também conhecido como Rei Kai, é um dos quatro Kaioshins do universo em Dragon Ball. Ele é responsável por treinar Goku e outros guerreiros Z, ajudando-os a melhorar suas habilidades de combate. Kaioh do Norte é conhecido por seu senso de humor peculiar e por sua habilidade de ensinar técnicas poderosas, como o Kaio-ken e a Genki Dama."
    },
    data: {
      name: "Dende",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/b/bb/Oie_0RmmLLrcEzgS.png/revision/latest/scale-to-width-down/535?cb=20250226150813&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 2,
      racaId: 5,
      tecnicasEspeciais: "Regeneração, Criação de Esferas do Dragão",
      transformacoes: "Não",
      sagas: "Saga Freeza, Saga de Cell, Saga Majin Boo, Dragon Ball Super",
      biografia: "Dende é um Namekuseijin que desempenha um papel crucial na série Dragon Ball. Ele é responsável por criar as Esferas do Dragão de Namekusei, que são usadas para invocar o dragão Shenlong e conceder desejos. Dende também possui habilidades de cura e regeneração, ajudando os guerreiros Z em várias ocasiões. Ele eventualmente se torna o novo Deus da Terra, substituindo Kami."
    },
    data: {
      name: "Kuririn",
      imageUrl: "https://i.pinimg.com/736x/a8/68/80/a86880e13c4c1152107aa75dbba2d6cf.jpg",
      ki: "200 mil",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Kamehameha, Kienzan",
      transformacoes: "Não",
      sagas: "Todas as sagas",
      biografia: "Kuririn é um dos melhores amigos de Goku e um dos guerreiros Z na série Dragon Ball. Ele é conhecido por sua coragem, lealdade e habilidades de combate impressionantes, apesar de não ser tão poderoso quanto alguns dos outros guerreiros Z. Kuririn é um personagem cômico e muitas vezes serve como alívio cômico na série, mas também demonstra grande determinação e bravura em batalha."
    },
    data: {
      name: "Majin Boo",
      imageUrl: "https://i.pinimg.com/736x/2a/eb/17/2aeb17816e82e172d2ad2816a89da3ec.jpg",
      ki: "3 bilhões",
      planetaId: 1,
      racaId: 4,
      tecnicasEspeciais: "Regeneração, Transformações, Kamehameha",
      transformacoes: "Sim (Várias formas)",
      sagas: "Saga Majin Boo",
      biografia: "Majin Boo é um dos principais antagonistas da série Dragon Ball Z. Ele é uma criatura mágica criada pelo mago Bibidi, conhecida por sua capacidade de regeneração e transformação. Majin Boo passa por várias formas ao longo da saga, cada uma com diferentes níveis de poder e personalidade. Apesar de sua natureza destrutiva, Majin Boo eventualmente se torna um aliado dos guerreiros Z após ser purificado por Goku e seus amigos."
    },
    data: {
      name: "Super Boo",
      imageUrl: "https://i.pinimg.com/736x/03/2d/e7/032de72d2a69b0c82e01fa6848bfbbd5.jpg",
      ki: "3 bilhões",
      planetaId: 1,
      racaId: 4,
      tecnicasEspeciais: "Regeneração, Transformações, Kamehameha",
      transformacoes: "Sim (Várias formas)",
      sagas: "Saga Majin Boo",
      biografia: "Super Boo é uma das formas de Majin Boo na série Dragon Ball Z. Ele é a forma resultante da fusão de Majin Boo com o Sr. Satan, o que o torna mais inteligente e menos destrutivo. Super Boo mantém a capacidade de regeneração e transformação de Majin Boo, mas também demonstra um senso de humor e personalidade mais desenvolvidos. Apesar de sua natureza caótica, Super Boo eventualmente se torna um aliado dos guerreiros Z após ser purificado por Goku e seus amigos."
    },
    data: {
      name: "Kid Boo",
      imageUrl: "https://i.pinimg.com/1200x/5b/84/97/5b84970834caad99ae98d911a3bbb332.jpg",
      ki: "4 bilhões",
      planetaId: 1,
      racaId: 4,
      tecnicasEspeciais: "Regeneração, Transformações, Kamehameha",
      transformacoes: "Não",
      sagas: "Saga Majin Boo",
      biografia: "Kid Boo é a forma original e mais pura de Majin Boo na série Dragon Ball Z. Ele é uma criatura malévola e caótica, conhecida por sua natureza destrutiva e imprevisível. Kid Boo possui habilidades de regeneração e transformação, tornando-o um adversário formidável para os guerreiros Z. Ele é o antagonista final da Saga Majin Boo, representando uma ameaça significativa que Goku e seus amigos devem enfrentar para salvar o universo."
    },
    data: {
      name: "Meste Kame",
      imageUrl: "https://i.pinimg.com/736x/f8/fb/28/f8fb28df7e44060eb2d1cf798f38796f.jpg",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Kamehameha, Mafuba",
      transformacoes: "Não",
      sagas: "Todas as sagas",
      biografia: "Mestre Kame, também conhecido como Mestre Roshi, é um dos personagens mais icônicos da série Dragon Ball. Ele é um mestre de artes marciais e o criador da técnica Kamehameha. Mestre Kame é conhecido por sua personalidade excêntrica e senso de humor, muitas vezes agindo de maneira pervertida. Apesar de sua aparência idosa e comportamento cômico, ele é um lutador habilidoso e sábio, desempenhando um papel crucial no treinamento de Goku e outros guerreiros Z."
    },
    data: {
      name: "Metal Cooler",
      imageUrl: "https://i.pinimg.com/1200x/39/c3/02/39c302b57f62542134bcc0acdab38e69.jpg",
      ki: "2 milhões",
      planetaId: 5,
      racaId: 8,
      tecnicasEspeciais: "Transformações, Força Sobre-humana",
      transformacoes: "Sim (Forma Metálica)",
      sagas: "Dragon Ball Z: O Retorno de Cooler",
      biografia: "Metal Cooler é uma versão aprimorada de Cooler, o irmão mais novo de Freeza, na série Dragon Ball Z. Ele é um guerreiro ciborgue criado a partir do corpo de Cooler após sua derrota pelos guerreiros Z. Metal Cooler possui força e resistência aumentadas, bem como a capacidade de se regenerar rapidamente. Ele busca vingança contra os guerreiros Z por causa da derrota de seu irmão e representa uma ameaça significativa durante o filme Dragon Ball Z: O Retorno de Cooler."
    },
    data: {
      name: "Nappa",
      imageUrl: "https://i.pinimg.com/736x/0a/00/2e/0a002e97f7f58530021491c790025a3a.jpg",
      ki: "10 mil",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Força Sobre-humana, Habilidades de Combate Avançadas",
      transformacoes: "Não",
      sagas: "Saga Sayajins",
      biografia: "Nappa é um guerreiro Saiyajin que aparece como antagonista na Saga dos Sayajins em Dragon Ball Z. Ele é um aliado de Vegeta e chega à Terra com o objetivo de conquistar o planeta e eliminar os guerreiros Z. Nappa é conhecido por sua força bruta e habilidades de combate, mas acaba sendo derrotado pelos guerreiros Z durante a batalha."
    },
    data: {
      name: "Piccolo",
      imageUrl: "https://i.pinimg.com/736x/0a/00/2e/0a002e97f7f58530021491c790025a3a.jpg",
      ki: "800 milhões",
      planetaId: 2,
      racaId: 5,
      tecnicasEspeciais: "Makankosappo, Regeneração, Fusão",
      transformacoes: "Sim (Fusão com Kami e Nail)",
      sagas: "Todas as sagas",
      biografia: "Piccolo é um dos personagens principais da série Dragon Ball. Ele é um Namekuseijin que inicialmente aparece como um antagonista, mas eventualmente se torna um aliado dos guerreiros Z. Piccolo é conhecido por sua inteligência, habilidades de combate avançadas e técnicas poderosas, como o Makankosappo. Ele também possui a capacidade de regeneração e já se fundiu com outros Namekuseijins, como Kami e Nail, para aumentar seu poder."
    },
    data: {
      name: "Raditz",
      imageUrl: "https://i.pinimg.com/736x/f2/1e/ca/f21eca7c956c66997a8b156bb54dd8be.jpg",
      ki: "1 mil",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Força Sobre-humana, Habilidades de Combate Avançadas",
      transformacoes: "Não",
      sagas: "Saga Sayajins",
      biografia: "Raditz é um guerreiro Saiyajin que aparece como o primeiro antagonista na série Dragon Ball Z. Ele é o irmão mais velho de Goku e chega à Terra para recrutar Goku para ajudar na conquista do planeta. Raditz é conhecido por sua força bruta e habilidades de combate, mas acaba sendo derrotado por Goku e Piccolo durante a batalha."
    },
    data: {
      name: "Rei Vegeta",
      imageUrl: "https://i.pinimg.com/736x/4f/09/ea/4f09ea5276bc5845f45a0c327610bfd1.jpg",
      ki: "Desconhecido",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Habilidades de Combate Avançadas",
      transformacoes: "Não",
      sagas: "Saga Freeza",
      biografia: "Rei Vegeta é o pai de Vegeta e o antigo rei dos Saiyajins na série Dragon Ball Z. Ele é conhecido por sua personalidade orgulhosa e ambiciosa, buscando constantemente aumentar o poder e a influência dos Saiyajins. Rei Vegeta desempenha um papel crucial na história dos Saiyajins, especialmente em relação à destruição do Planeta Vegeta por Freeza."
    },
    data: {
      name: "Rikum",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/8/8a/RecoomeTGFP.png/revision/latest/scale-to-width-down/535?cb=20150206190744&path-prefix=pt-br",
      ki: "300 mil",
      planetaId: null,
      racaId: null,
      tecnicasEspeciais: "Força Sobre-humana, Habilidades de Combate Avançadas",
      transformacoes: "Não",
      sagas: "Saga Freeza",
      biografia: "Recoome é um membro do Esquadrão Ginyu, uma equipe de elite que serve sob o comando de Freeza. Ele é conhecido por sua força bruta e habilidades de combate impressionantes, bem como por sua personalidade excêntrica e teatral. Recoome é um lutador poderoso, mas acaba sendo derrotado pelos guerreiros Z durante a batalha em Namekusei."
    },
    data: {
      name: "Sr. Popo",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/9/98/Mrpopo.png/revision/latest/scale-to-width-down/536?cb=20150209202341&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Habilidades de Combate Básicas, Assistência ao Kami",
      transformacoes: "Não",
      sagas: "Saga Sayajins, Saga Freeza, Saga de Cell, Saga Majin Boo, Dragon Ball Super",
      biografia: "Sr. Popo é o assistente leal do Kami, o guardião da Terra, na série Dragon Ball. Ele é responsável por cuidar do Templo Sagrado e ajudar os guerreiros Z em várias ocasiões. Sr. Popo é conhecido por sua sabedoria, habilidades de combate básicas e devoção ao Kami. Apesar de sua aparência incomum, ele é um personagem importante na série, desempenhando um papel crucial na proteção da Terra."
    },
    data: {
      name: "Tapion",
      imageUrl: "https://i.pinimg.com/736x/4f/13/de/4f13de7fe6ac3ed1ea1e7dac392fdd02.jpg",
      ki: "3.5 milhões",
      planetaId: 9,
      racaId: 9,
      tecnicasEspeciais: "Força Sobre-humana, Habilidades de Combate Avançadas, Uso de Espada",
      transformacoes: "Não",
      sagas: "Dragon Ball Z: O Domínio dos Deuses",
      biografia: "Tapion é um personagem que aparece no filme Dragon Ball Z: O Domínio dos Deuses. Ele é um guerreiro de um planeta distante que possui habilidades de combate impressionantes e é conhecido por sua força sobre-humana. Tapion é um personagem nobre e corajoso, disposto a sacrificar-se para proteger os outros. Ele desempenha um papel crucial na história do filme, ajudando Goku e seus amigos a enfrentar uma ameaça poderosa."
    },
    data: {
      name: "Tenshinhan",
      imageUrl: "https://i.pinimg.com/1200x/8b/bc/93/8bbc93e25e75d9514d31381552d7482b.jpg",
      ki: "180 mil",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Kikoho, Dodonpa, Shiyoken",
      transformacoes: "Não",
      sagas: "Todas as sagas",
      biografia: "Tenshinhan é um dos guerreiros Z na série Dragon Ball. Ele é conhecido por sua habilidade de combate avançada e técnicas poderosas, como o Kikoho e o Dodonpa. Tenshinhan é um personagem sério e dedicado, muitas vezes servindo como um rival para Goku. Apesar de não ser tão poderoso quanto alguns dos outros guerreiros Z, ele demonstra grande determinação e bravura em batalha."
    },
    data: {
      name: "Trunks (criança)",
      imageUrl: "https://i.pinimg.com/1200x/82/94/17/829417b1bc2eda64e57d69c16197977b.jpg",
      ki: "1 milhão",
      planetaId: 1,
      racaId: 7,
      tecnicasEspeciais: "Fusão",
      transformacoes: "Sim (Super Saiyajin, Fusão com Goten)",
      sagas: "Saga Majin Boo",
      biografia: "Trunks é o filho de Vegeta e Bulma na série Dragon Ball Z. Ele é um jovem guerreiro Saiyajin que possui habilidades de combate impressionantes, muitas vezes comparáveis às de seu pai. Trunks é conhecido por sua personalidade confiante e determinada, bem como por sua capacidade de se transformar em Super Saiyajin desde muito jovem. Ele também é capaz de se fundir com Goten para formar Gotenks, um guerreiro incrivelmente poderoso."
    },
    data: {
      name: "Trunks (futuro)",
      imageUrl: "https://i.pinimg.com/1200x/80/d3/43/80d34388660617f6d41871bce521103e.jpg",
      ki: "2 milhões",
      planetaId: 1,
      racaId: 7,
      tecnicasEspeciais: "Galick-ho, Habilidades de Combate Avançadas, Uso de Espada",
      transformacoes: "Sim (Super Saiyajin)",
      sagas: "Saga dos Andróides, Saga do Cell",
      biografia: "Trunks do Futuro é uma versão alternativa de Trunks que vem de um futuro distópico na série Dragon Ball Z. Ele é o filho de Vegeta e Bulma, e viaja no tempo para avisar os guerreiros Z sobre a ameaça dos Andróides e Cell. Trunks do Futuro é um guerreiro habilidoso, conhecido por sua força, habilidades de combate avançadas e uso de uma espada. Ele é um personagem sério e determinado, disposto a fazer o que for necessário para proteger seu futuro."
    },
    data: {
      name: "Vegeta",
      imageUrl: "https://i.pinimg.com/736x/30/09/89/3009894ff61c6b691fb4ec13c2eb2093.jpg",
      ki: "49 bilhões",
      planetaId: 3,
      racaId: 7,
      tecnicasEspeciais: "Galick-ho, Final Flash, Big Bang Attack",
      transformacoes: "Sim (Ozaru, Super Saiyajin, Super Saiyajin Red, Super Saiyajin Blue)",
      sagas: "Todas as sagas",
      biografia: "Vegeta é o príncipe dos Saiyajins e um dos personagens principais da série Dragon Ball. Inicialmente introduzido como um antagonista, Vegeta eventualmente se torna um aliado dos guerreiros Z. Ele é conhecido por sua personalidade orgulhosa e competitiva, bem como por sua determinação em se tornar o guerreiro mais poderoso do universo. Vegeta possui várias transformações poderosas, incluindo Super Saiyajin e Super Saiyajin Blue, e é um lutador habilidoso com técnicas devastadoras como o Galick-ho e o Final Flash."
    },
    data: {
      name: "Velho Kaioshin",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/a/a3/OldKaiNV.png/revision/latest/scale-to-width-down/536?cb=20150112215920&path-prefix=pt-br",
      ki: "Desconhecido",
      planetaId: 15,
      racaId: 3,
      tecnicasEspeciais: "Teletransporte, Treinamento de Artes Marciais",
      transformacoes: "Não",
      sagas: "Saga Majin Boo, Dragon Ball Super",
      biografia: "Velho Kaioshin, também conhecido como Old Kai, é um dos quatro Kaioshins do universo em Dragon Ball. Ele é um personagem sábio e excêntrico que desempenha um papel crucial na série, especialmente durante a Saga Majin Boo. Velho Kaioshin é conhecido por sua habilidade de desbloquear o potencial oculto dos guerreiros, ajudando Gohan a alcançar seu estado de Potencial Liberado. Apesar de sua aparência idosa e comportamento peculiar, ele é um personagem importante na série, oferecendo orientação e apoio aos guerreiros Z."
    },
    data: {
      name: "Videl",
      imageUrl: "https://i.pinimg.com/1200x/93/d7/b2/93d7b20c50fc6df4699a186d0105e6fd.jpg",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Habilidades de Combate Básicas, Voo",
      transformacoes: "Não",
      sagas: "Saga Majin Boo, Dragon Ball Super",
      biografia: "Videl é a filha de Mr. Satan e uma personagem importante na série Dragon Ball Z. Ela é uma lutadora habilidosa que aprende a voar e usar ki com a ajuda de Gohan. Videl eventualmente se torna a esposa de Gohan e mãe de Pan. Ela é conhecida por sua personalidade forte e determinada, bem como por seu desejo de proteger aqueles que ama."
    },
    data: {
      name: "Mr. Satan",
      imageUrl: "https://i.pinimg.com/736x/a6/98/52/a6985292c3c76afeff03d624e56e4dc3.jpg",
      ki: "Desconhecido",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Habilidades de Combate Básicas",
      transformacoes: "Não",
      sagas: "Saga Majin Boo, Dragon Ball Super",
      biografia: "Mr. Satan, também conhecido como Hercule na versão em inglês, é um personagem cômico na série Dragon Ball Z. Ele é um lutador de artes marciais que se torna famoso por derrotar Cell, embora na verdade tenha sido Gohan quem o derrotou. Mr. Satan é conhecido por sua personalidade exagerada e senso de humor, muitas vezes servindo como alívio cômico na série. Apesar de não ser tão poderoso quanto os guerreiros Z, ele desempenha um papel importante na história, especialmente durante a Saga Majin Boo."
    },
    data: {
      name: "Whis",
      imageUrl: "https://i.pinimg.com/1200x/2d/2c/b1/2d2cb1a309473ae7bf3ab398080691e8.jpg",
      ki: "Desconhecido",
      planetaId: 11,
      racaId: null,
      tecnicasEspeciais: "Manipulação do Tempo, Habilidades de Combate Avançadas",
      transformacoes: "Não",
      sagas: "Dragon Ball Super",
      biografia: "Whis é um personagem poderoso na série Dragon Ball Super. Ele é o anjo assistente do Deus da Destruição, Beerus, e serve como seu mestre e guia. Whis é conhecido por sua habilidade de manipular o tempo, permitindo-lhe reverter eventos recentes. Ele também é um lutador habilidoso, capaz de derrotar facilmente guerreiros poderosos. Apesar de sua natureza calma e serena, Whis desempenha um papel crucial na série, ajudando Goku e Vegeta a alcançar novos níveis de poder."
    },
    data: {
      name: "Yamcha",
      imageUrl: "https://i.pinimg.com/1200x/78/43/5c/78435c0690153247753a347e154970df.jpg",
      ki: "80 mil",
      planetaId: 1,
      racaId: 2,
      tecnicasEspeciais: "Kamehameha, Roubo de Energia",
      transformacoes: "Não",
      sagas: "Todas as sagas",
      biografia: "Yamcha é um dos primeiros personagens introduzidos na série Dragon Ball. Ele é um lutador habilidoso e ex-ladrão que se torna um aliado dos guerreiros Z. Yamcha é conhecido por suas habilidades de combate, incluindo o Kamehameha e a técnica de Roubo de Energia. Apesar de não ser tão poderoso quanto alguns dos outros guerreiros Z, Yamcha demonstra grande coragem e determinação em batalha. Ele também é conhecido por sua personalidade descontraída e senso de humor."
    },
    data: {
      name: "Zarbon",
      imageUrl: "https://i.pinimg.com/1200x/84/f8/df/84f8df2bc5d11d7aa799f7084f30fc25.jpg",
      ki: "100 mil",
      planetaId: null,
      racaId: null,
      tecnicasEspeciais: "Transformações, Força Sobre-humana",
      transformacoes: "Sim (Forma Monstruosa)",
      sagas: "Saga Freeza",
      biografia: "Zarbon é um dos principais tenentes de Freeza na série Dragon Ball Z. Ele é conhecido por sua aparência elegante e habilidades de combate impressionantes. Zarbon possui a capacidade de se transformar em uma forma monstruosa, aumentando significativamente seu poder e força. Ele é um lutador astuto e estratégico, mas acaba sendo derrotado pelos guerreiros Z durante a batalha em Namekusei."
    }
  }])
}
