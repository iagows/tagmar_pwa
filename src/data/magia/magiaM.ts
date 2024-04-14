import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { type Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.malabarismo,
			nome: "Malabarismo",
			niveis: [
				{
					id: "0",
					descricao:
						"Reduz em 1 o nível de dificuldade da habilidade malabarismo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Reduz em 2 o nível de dificuldade da habilidade malabarismo.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Reduz em 3 o nível de dificuldade da habilidade malabarismo.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Reduz em 4 o nível de dificuldade da habilidade malabarismo.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Reduz em 5 o nível de dificuldade da habilidade malabarismo ou torna Muito Difícil algo que seria Impossível.",
					nivel: 9,
				},
			],
			descricao:
				"Em Tagmar existem aqueles que fazem do malabarismo seu ofício. Geralmente trabalhando em circos, esses malabaristas desenvolverem uma arte que permite dar mais graciosidade e precisão aos seus movimentos. Na prática, ao evocar a magia Malabarismo, o evocador poderá reduzir os níveis de dificuldade da habilidade malabarismo.",
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.USO,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.maldicoes,
			nome: "Maldições",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite a criação de um símbolo no corpo da vítima que identifica o portador como amaldiçoado. O símbolo pode ser escondido, mas não apagado. O símbolo é permanente, só saindo se a magia for quebrada.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria um efeito físico muito pequeno: cresce o nariz e a orelha, um braço fica maior que o outro e etc. Embora não tenha efeito prático, isto toma a vítima motivo de escárnio. Duração de 1 semana.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Faz aparecer um problema físico: gagueira, cegueira parcial etc, ou mental: loucura não violenta, perda de memória, ódio cego e etc. Isto dura uma hora, servindo como punição, aviso ou mostra de poder.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Consegue manipular os seres e objetos à volta da vítima, causando: azar, ódio pela vítima, não conseguir segurar uma arma (a arma deve ser especificada: arco, machado, espada, etc}, ser incapaz de montar um cavalo e etc. Tanto a vítima como todos os seres manipulados têm direito a Resistência à Magia. Esta maldição dura um mês.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Os efeitos são idênticos aos de Maldições 4, mas a Duração é de um mês.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Induz a uma deformação física grotesca, assim como aleijar, cegar, mudar totalmente as feições e etc. ou criar um problema mental grave, como tornar a vítima um louco violento, um débil mental e etc. O encanto é permanente.",
					nivel: 10,
				},
			],
			descricao:
				"Esse encanto maléfico afeta um indivíduo com punições incontáveis caso este falhe em resistir à magia. As maldições são múltiplas em seus efeitos, sendo limitadas apenas pela imaginação do evocador e seu nível na magia. Apesar disso, seus efeitos gerais podem ser vistos abaixo:",
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 3,
			},
		},
		{
			id: MagiaEnum.manipulacaoDeLuz,
			nome: "Manipulação de Luz",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria uma tênue luz de 10 metros de diâmetro por 10 rodadas. Não pode ser usada para cegar o oponente.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Diminui a luminosidade em uma esfera de 5 metros de diâmetro, causando uma escuridão como a de 1 noite sem estrelas, que dura por 10 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Cria um a esfera de luz de 10 metros de diâmetro que dura 10 minutos. Pode cegar o oponente por 2 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Cria uma esfera de luz de 20 metros de diâmetro por 1 hora. Cega o adversário por 4 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas a esfera tem 20 metros de diâmetro, dura por 1 dia e cega por 10 rodadas. Essa luz é muito forte.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas são 30 metros de diâmetro, dura 1 mês e cega por 20 rodadas, Além disso, essa luz é tão forte quanto à luz de um dia claro (fazendo com que certos mortos-vivos se afastem amedrontados por 10 rodadas).",
					nivel: 10,
				},
			],
			descricao:
				"Esta magia permite ao evocador criar luz ou escuridão que ocupa um círculo de diâmetro variável (conforme indique o efeito). O centro do círculo é o local de maior intensidade do efeito, ou seja, a luz ou escuridão é mais forte. O centro do círculo pode ser posto em um objeto ou criatura, ou seja, onde ele for, o círculo se moverá com ele. Se a luz for posta nos olhos de uma criatura ela deverá fazer uma resistência a magia e caso falhe ficará parcialmente cega por algum tempo, até seus olhos se acostumarem com a nova luminosidade. Caso a vítima resista, a magia não acertou os olhos da vítima ficando perto dela, mas sem gerar efeitos maiores.",
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.manipularConfianca,
			nome: "Manipular Confiança",
			niveis: [
				{
					id: "0",
					descricao:
						"Concede um ajuste de -1/+1 nível de dificuldade para pessoas em um alcance de 5 metros.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Concede um ajuste de -1/+1 nível de dificuldade para pessoas em um alcance de 15 metros.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Concede um ajuste de -2/+2 níveis de dificuldade para pessoas em um alcance de 15 metros.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Concede um ajuste de -2/+2 níveis de dificuldade para pessoas em um alcance de 45 metros.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Concede um ajuste de -3/+3 níveis de dificuldade para pessoas em um alcance de 45 metros.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Concede um ajuste de -3/+3 níveis de dificuldade para pessoas em um alcance de 100 metros.",
					nivel: 10,
				},
			],
			descricao: `Com este encantamento o evocador canta uma canção ou conta uma história acerca de uma pessoa, que pode ter efeito depreciativo ou inspirativo sobre os ouvintes. As vítimas do encanto ficarão tão apreciadas pela história que ficarão extremamente admiradas com a pessoa citada, caso o evocador tenha contado uma história positiva, ou ficarão temerosas e ressentidas caso a canção seja depreciativa. Assim o evocador com este mesmo feitiço pode escolher exaltar ou depreciar a imagem de alguma pessoa. O efeito causado é que a pessoa em questão terá facilidade ou dificuldade em qualquer teste de persuasão sobre as vítimas do efeito.

A magia afeta todas as pessoas que falharem no teste de Resistência à Magia e todas as pessoas tem que ser capazes de ouvir e entender o que o evocador está cantando ou contando para que o feitiço funcione.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.MES,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 10,
			},
		},
		{
			id: MagiaEnum.marcaArcana,
			nome: "Marca Arcana",
			niveis: [
				{
					id: "0",
					descricao:
						"Este é o nível usado para criar a tatuagem mágica. O mago pode ter apenas 1 elo. Com este nível o mago pode sentir se está próximo ou longe da vitima, mais apenas terá sensações de próximo (1m até 50m metros do elo}, perto (50m até 100m do elo) ou longe (mais de 100m). A duração é de 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idêntico ao anterior, mas o mago também pode saber a direção aproximada. Distância máxima é de 1 km e a duração de 3 dias.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas o mago pode ter até 2 elos. Com este nível o mago pode saber a ordem de grandeza (em quilômetros) da distância que o separa do elo e a direção exata em que ele está. A distância máxima é de 5 km e a duração de 2 semanas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior mas o mago pode ter até 3 elos. Com este nível o mago pode descobrir com um toque se alguém possui uma marca arcana. A distância máxima é de 10 km e a duração de 1 mês.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, este nível permite ao mago entrar no sonho do elo e conversar com ele por alguns momentos, se ele falhar em um novo teste de resistência à magia ou se permitir. Se o elo resistir, a marca arcana continua ativada, mas o mago não pode entrar em seu sonho. Durante a conversa não é possível se passar informações complexas, o mago apenas entenderá mensagens mais simples como uma frase curta. A distância máxima é de 50 km e a duração de 2 meses.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas o mago pode ter até 4 elos. Com este nível o mago pode tocar uma tatuagem e saber quem a criou. Neste nível o mago é tão ligado aos seus elos que ele sentirá calafrios seguidos de visões (lembranças) se eles estiverem sofrendo algum mal. A distância máxima é de 100 km e a duração de 3 meses. 1 vez por dia poderá conversar livremente com um dos seus elos.",
					nivel: 10,
				},
			],
			descricao: `Essa magia tem a capacidade de criar um elo entre o evocador e uma pessoa com um simples toque, formando no local tocado uma tatuagem. É óbvio que para ser tocado a pessoa deve aceitar ser tocada ou então que ela esteja indefesa (amarrada, paralisada, etc...). Não é necessário que se faca um teste de resistência à magia, e logo após o elo ser criado, o evocador passa ter pressentimentos se está perto ou longe do alvo com uma simples concentração.

Em níveis maiores pode-se saber a direção a qual seguir e a distância exata e até mesmo se a pessoa encantada está sendo atacada ou ferida.

O alcance e a quantidade máxima de elos que podem ser criados dependem do nível na magia.

Note que essa tatuagem não poderá ser removida por nenhum método não mágico, mas Quebra de Encantos pode ser usada normalmente para fazer isso. Caso a pessoa perca o membro onde a tatuagem está, a tatuagem continuara fazendo efeito no membro, mas se o alvo de algum modo mágico repor esse membro a tatuagem aparecera novamente no alvo.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.marcaDaMorte,
			nome: "Marca da Morte",
			niveis: [
				{
					id: "0",
					descricao:
						"A marca colocada na vítima fará com que o sacerdote saiba se a vítima está a até 1 km de distância dele. O sacerdote apenas sabe se vítima está próxima, mas não sabe a direção.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior mas a vítima pode estar a até 10 km de distância.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior mas o sacerdote sabe exatamente a direção e como chegar até a vítima.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas a vítima pode estar a até 100 km de distância.",
					nivel: 7,
				},
			],
			descricao:
				"Os sacerdotes de Crezir amam as batalhas e não gostam de deixar seus oponentes fugirem, ainda mais aqueles que o feriram gravemente, seja no seu corpo, ou no seu orgulho. Por isso, alguns sacerdotes colocam uma marca sobre seu oponente, a fim de que possam mais tarde, saber aonde encontrar essa pessoa a fim de destruí-la. O alcance da magia se refere ao alcance necessário para que a marca seja colocada, caso a vítima falhe na sua resistência à magia. A marca é invisível e ninguém pode vê-la a não ser o próprio sacerdote. A marca só pode ser colocada em seres racionais e corpóreos, sendo animais e mortos vivos imunes a essa magia. A marca perdura por 1 ano. Passado este tempo, a marca se desfaz. Observe que embora o sacerdote possa detectar a vítima marcada para morrer, a vítima não tem noção da proximidade do sacerdote.",
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.ANO,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.medo,
			nome: "Medo",
			niveis: [
				{
					id: "0",
					descricao: "Afeta 1 pessoa que esteja a até 1 metro de distância.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Afeta 1 pessoa que esteja a até 10 metros de distância.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Afeta até 2 pessoas que estejam a até 10 metros de distância.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Afeta até 3 pessoas que estejam a até 10 metros de distância.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Afeta até 4 pessoas que estejam a até 15 metros de distância.",
					nivel: 8,
				},
			],
			descricao: `Com o uso deste feitiço o evocador traz à superfície todos os medos irracionais da vítima que, caso falhe na sua Resistência à Magia, fugirá apavorada pela duração do encanto. O número de pessoas afetadas por esta magia, bem como o alcance da mesma, depende da dificuldade do efeito usado, Vítimas que obtiverem sucesso em suas Resistências à Magia não sofrerão nenhum efeito.

Se as vítimas deste encanto não puderem se afastar do evocador por impedimento do terreno, elas procurarão se manter à maior distância possível do mesmo pela duração da magia.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 10,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.memorizacao,
			nome: "Memorização",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite memorizar 1 imagem de até 50 x 50 cm ou um som que dure até 5 segundos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite memorizar 2 imagens de até 1x 1m ou 2 sons que durem até 15 segundos.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Permite memorizar 3 imagens de até 1,50 x 1,50 m ou 3 sons que durem até 30 segundos.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Permite memorizar 4 imagem de até 2 x 2 m ou 4 sons que durem até 45 segundos.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Permite memorizar 5 imagens de até 2,5x 2,5 m ou 5 sons que durem até 1 minuto.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto, o evocador fixa uma ou mais imagens ou sons, dependendo do nível de efeito, de forma a não esquecê-las até que a duração do feitiço acabe. Mesmo quando a duração acaba, o evocador pode reutilizar este feitiço para manter memorizada a imagem (ou o som}, desde que o número máximo de imagens ou sons não exceda ao permitido pelo nível. O tamanho da imagem memorizada também é determinado pelo nível da magia, entretanto, é possível gravar imagens que quando se unem formam uma grande imagem, como ocorre em um quebra-cabeça. Da mesma forma, o som também pode ser somado a sua duração para que se possa memorizar uma melodia inteira, por exemplo.

Observe que com esse encanto é perfeitamente possível memorizar a página de um livro, já que se trata de uma imagem. Entretanto, o evocador só tem noção dos símbolos linguísticos que lá existem e não o som proveniente dos caracteres. Isso implica que se o evocador memorizar uma imagem de um texto escrito em uma língua desconhecida, ele não saberá a pronúncia de tais palavras.

A imagem (ou som) pode ser gravada mesmo em situações rápidas e difíceis.

Uma vez gravada a imagem (ou som}, qualquer teste de Percepção realizado sobre ela terá -2 níveis de dificuldade. Assim se em uma determinada situação o evocador gravou a imagem de um homem encapuzado e quer tentar perceber algo, além de no próprio momento que ele avistou a sombria figura ele poderá também realizar um novo teste de percepção mais tarde, caso tenha usado o feitiço em questão, com um redutor de -2 níveis de dificuldade; isso porque perceber algo quando se tem tempo é muito mais fácil que perceber algo de relance.

Essa é uma magia muito utilizada por bardos pintores. No caso de sons, observe que embora possam ser gravados, existem sons que não tem como serem reproduzidos (como um rugido de um leão).

Uma restrição da magia, contudo, é que o evocador não pode misturar os sentidos. Caso esteja memorizando imagens, não pode memorizar sons, e vice-versa. Um aspecto importante é que o evocador pode usar esta magia para memorizar uma frase dita por ele próprio ou por outra pessoa.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.SEMANA,
				valor: 2,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.meteoros,
			nome: "Meteoros",
			niveis: [
				{
					id: "0",
					descricao:
						"Causa dano máximo 16 em pessoas a até 1 metro do ponto de impacto. O alcance é de 20 metros.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Causa dano máximo 20 em pessoas a até 2 metros do ponto de impacto. O alcance é de 30 metros.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Causa dano máximo 28 em pessoas a até 3 metros do ponto de impacto. O alcance é de 40 metros.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Causa dano máximo 32 em pessoas a até 4 metros do ponto de impacto. O alcance é de 50 metros.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Causa dano máximo 36 em pessoas a até 5 metros do ponto de impacto. O alcance é de 60 metros.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Causa dano máximo 40 em pessoas a até 6 metros do ponto de impacto. O alcance é de 75 metros.",
					nivel: 10,
				},
			],
			descricao: `Restrição de Uso: Ar Livre

Este feitiço faz com que o mago arremesse uma grande quantidade de fragmentos rochosos contra um ponto. Pessoas próximas à área de impacto são afetadas, recebendo dano e, se for o caso, críticos de esmagamento. Note que esta magia não causa crítico como efeito mágico. Isto significa que ela pode ser combatida por magias como Geoproteção ou Proteção Divina (no caso de efeitos críticos).

Criaturas que estejam até certa distância (determinada pelo Efeito utilizado) do ponto de impacto recebem ataques. O alcance da magia, também determinado pelo Efeito empregado, representa a distância máxima entre o ponto de impacto e o evocador.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.mimetismoAnimal,
			nome: "Mimetismo Animal",
			niveis: [
				{
					id: "0",
					descricao:
						"Mimetiza 1 capacidades natural de 1 animal doador de capacidades. A duração é de 1 hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Item ao anterior, mas a duração é de 1 dia.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Item ao anterior, mas mimetiza duas capacidades naturais de 1 animal e a duração é de 3 dias.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Item ao anterior, mas agora podem ser dois animais doadores de suas capacidades e a duração é de 5 dias.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Item ao anterior mas mimetiza 3 capacidades naturais. A duração é de 7 dias.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao nível anterior, agora podem ser 3 animais doadores de suas capacidade e a duração é de 10 dias.",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite que o evocador imbua uma ou mais capacidades (peçonha, respirar em baixo d'água, voar e etc.) de um ou mais animais para um outro. Durante o encanto, é preciso o animal que irá receber o mimetismo possua Elo Animal com o evocador e que esteja acomodado ao seu lado. Os animais que vão doar as capacidades também devem estar presentes (ao lado do evocador}, mas se eles não possuírem Elo Animal com o evocador, eles terão direito a um teste de RM. É possível também se usar um animal morto como origem, desde que ele não tenha morrido a mais de 24 horas e que o corpo possua ainda a parte que se deseja mimetizar (penas para formar asas, presas para formar peçonha, guelras para poder respirar em baixo d'água, etc). Neste caso não há a necessidade de teste de RM.

Ao executar a magia o evocador define quais capacidades naturais serão mimetizadas e imbuídas, de acordo com o nível de efeito utilizado. Exemplo: O místico, através desse encanto, mimetiza a capacidade natural da peçonha de uma cobra venenosa encontrada por ele na selva e transfere para seu Cão Alão, que agora possuirá, magicamente e temporariamente, a capacidade gerar o veneno e injetá-lo por meio de suas mordidas. O nível da capacidade natural será igual ao da criatura doadora, podendo ser maior que a do recebedor. Caso o místico tente imbuir uma capacidade que não seja nativa de um animal em outro, o encanto não terá efeito.

Caso o alvo deste encanto adquira uma capacidade de ataque e haja a necessidade de adaptação, ele deverá aplicar a seguinte regra:

1ª Regra - Coluna do Ataque: A coluna de ataque será igual do animal original, mas caso este seja de estágio maior que o animal que está sendo encantado, deve-se subtrair 1 ponto de cada coluna (L,M,P) para cada nível a mais que a criatura original tiver.

2ª Regra - Dano do Ataque: O dano será calculado de acordo com o dano máximo dentre todos os tipos de ataque do animal encantado possui.

O corpo do animal encantado sofrerá mudanças físicas de proporções equilibradas para adaptar-se as novas capacidades (asas, dentes, glândulas venenosas, guelra, etc.}, passando a ter total compreensão sobre suas novas capacidades e podendo usá-las com perfeição, como se fossem suas capacidades nativas.

Entende-se que "capacidades naturais" são todas Habilidades, Técnicas de combate, VB, ou capacidades naturais (respirar embaixo d'água, voar, visão aguçada, enxergar no escuro, etc). Atributos e demais estatísticas da criatura não são copiadas (tais como EF, EH, Defesa, RM, RF, Karma, Moral) .

Este encanto pode ser encerrado pelo místico a qualquer momento que este achar pertinente. Note que o evocador é responsável por todos os animais que estejam sob os efeitos deste encanto, qualquer tipo de abuso faz que com ele perca permanentemente seu elo com o animal e fique impossibilitado de fazer a magia por um tempo (a escolha do mestre).

OBS: esta magia falhará caso o evocador mate um animal somente para poder mimetizar uma capacidade. A magia não rouba as capacidades, apenas as copia.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.modificarEspirito,
			nome: "Modificar Espírito",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite saber o estado de espírito de todos dentro do alcance.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite alterar em 2 passos à esquerda ou à direita o espírito de todos dentro do alcance.",
					nivel: 5,
				},
				{
					id: "2",
					descricao:
						"Permite alterar em 3 passos à esquerda ou à direita o espírito de todos dentro do alcance.",
					nivel: 7,
				},
				{
					id: "3",
					descricao:
						"Permite alterar em 4 passos à esquerda ou à direita o espírito de todos dentro do alcance.",
					nivel: 9,
				},
			],
			descricao: `Com esse milagre, o evocador consegue alterar o estado de espírito de todo aquele que estiver na área de 10 metros de raio com centro no próprio evocador caso este falhe na sua Resistência à Magia. O quanto ele pode alterar depende da dificuldade do efeito.

Como pode ser observado abaixo, existem vários estados possíveis. O evocador poderá mover um ou mais passos à esquerda ou à direita a fim de acalmar ou incitar ódio a todos aqueles que estão próximos a ele. Uma observação é que ele só pode deslocar no mesmo sentido o estado das pessoas dentro da área, ou seja, ele não pode deslocar o espírito de uma pessoa para a direita enquanto o outro para a esquerda. O evocador tem que escolher apenas um lado, que afetará toda a área.

Entretanto, no caso de se acalmar, se o evocador ou quem o acompanha tentar utilizar isso como vantagem para atacar alguém, o encanto se quebra imediatamente. O estado inicial da(s) pessoa(s) é definido pelo mestre. A seguir os estados e uma pequena descrição:

Total Pacifismo - Muito Pacifismo - Pacifismo - Neutro - Indisposto - Agressivo - Extremamente Agressivo.

Total Pacifismo - Nesse estado, a pessoa está em estado de paz completa. Alguém pode xingar a pessoa ou até mesmo atacá-la e ela não reagirá lutando, no máximo tentando conversar.

Muito Pacifismo - Nesse estado, a pessoa evita sempre que possível uma luta ou discussão. Ela tolerará qualquer agressão verbal, mas caso sofra qualquer agressão física, irá lutar para se defender, mas irá sempre tentar não machucar, ou convencer o seu oponente a parar de lutar.

Pacifismo - A pessoa não está disposta a lutar, lutando apenas caso alguém a agrida verbalmente de forma muito intensa ou então a agrida fisicamente.

Neutro - Qualquer ofensa clara a pessoa, ela poderá te agredir verbalmente ou fisicamente, de acordo com a gravidade do que foi falado ou feito anteriormente. A pessoa não terá qualquer pudor em se defender se necessário.

Indisposto - Idem ao anterior, mas vale também para uma ofensa indireta.

Agressivo - Mesmo que alguém trate bem alguém em estado agressivo, essa pessoa ainda assim a tratará mal, ofendendo verbalmente. Caso a outra pessoa responda ou fale qualquer coisa mais dura, um combate se iniciará.

Extremamente Agressivo - Tudo que essa pessoa quer é motivo para brigar, seja verbalmente ou fisicamente. Ela xingará qualquer pessoa, justamente no intuito de provocá-la e assim, descarregar em alguém sua ira.

OBS: Apesar de o evocador ter capacidades de mudar os estados, deve-se observar que a índole ainda é mantida. Assim é impossível tornar um guerreiro sanguinário em um total pacifista, por exemplo. Cada pessoa tem uma faixa mais ou menos de 4 estados de espírito.

Modificar Espírito 3: Permite alterar em 1 passo à esquerda ou à direita o espírito de todos dentro do alcance.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.motivacao,
			nome: "Motivação",
			niveis: [
				{
					id: "0",
					descricao: "Revigora em 4 pontos a EH de todos dentro do alcance.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Revigora em 8 pontos a EH de todos dentro do alcance.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Revigora em 12 pontos a EH de todos dentro do alcance.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Revigora em 16 pontos a EH de todos dentro do alcance.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Revigora em 20 pontos a EH de todos dentro do alcance.",
					nivel: 9,
				},
			],
			descricao: `Após uma batalha, os soldados fatigados nem sempre têm tempo para descansar antes da próxima batalha. Com a música que traz motivação, o evocador consegue recuperar EH de todos aqueles que estejam a até 20 metros dele após terem ouvido 10 minutos de sua música alentadora.

Todas as pessoas na área, exceto ele próprio, terão seus ânimos restabelecidos, sendo impossível escolher quem será e quem não será curado. A EH recuperada não pode ultrapassar o máximo, sendo assim, caso recupere-se mais que o total da EH de alguém os pontos extras são perdidos. Apesar da cura não ser tão intensa quanto à de um sacerdote, a vantagem é a capacidade de atingir grande quantidade de pessoas.

Uma restrição, contudo, é que para a pessoa ser revigorada é necessário que ela esteja dando total atenção à música, não podendo realizar nenhuma outra atividade. Além disso, essa magia não pode ser evocada duas vezes sobre as mesmas pessoas sem que tenha decorrido um dia da utilização da primeira vez.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.MINUTO,
				valor: 10,
			},
		},
		{
			id: MagiaEnum.mutacao,
			nome: "Mutação",
			niveis: [
				{
					id: "0",
					descricao:
						"Causa uma modificação na aparência do evocador, como se fosse um disfarce perfeito, embora a voz não mude. Para tomar a aparência de uma pessoa específica é necessária muita pesquisa e contato com o indivíduo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"0 evocador toma a forma de qualquer animal cujo tamanho esteja entre o de um gato e o de um cavalo. Note que os itens do evocador não se transformam com ele.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas os itens se transformam junto do evocador, fazendo parte da nova forma.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Pode assumir qualquer forma entre o tamanho de uma formiga até o tamanho de um Trol. Mesmo formas de seres místicos podem ser assumidas, mas o evocador tem que ter visto pessoalmente uma criatura do tipo a ser copiado. Os itens do evocador se transformam também.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas qualquer tipo de criatura pode ser copiada, não há restrição com relação ao tamanho da criatura copiada.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço causa uma mutação no evocador, permitindo-lhe tomar a forma de diferentes tipos de criatura. Note que em certas formas o uso de magia é impossibilitado: não é possível fazer os gestos ou pronunciar as palavras místicas que compõem a Evocação.

A mutação não altera nem a E.H. nem a E.F. do evocador. Ao tomar a forma de um ser humanóide não se ganham as habilidades que ele possua, a não ser que sejam eminentemente físicas (escalar, para um macaco; nadar, para um peixe e etc). Apesar disso, o evocador pode utilizar todos os outros recursos não mágicos da forma assumida. Uma vez que uma forma é assumida, ela não pode ser mudada.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.mutualidade,
			nome: "Mutualidade",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite evocar magias de nível 1 com o karma do outro. A duração do elo de mutualidade é de 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite evocar magias de nível máximo 3 com o karma do outro. A duração do elo de mutualidade é de 10 minutos.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Permite evocar magias de nível máximo 7 com o karma do outro. A duração do elo de mutualidade é de 1 hora.",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"Permite evocar magias de nível máximo 10 com o karma do outro. A duração do elo de mutualidade é de 12 horas.",
					nivel: 5,
				},
			],
			descricao: `Com esta magia o mago alquímico será capaz de compartilhar pontos de karma ou evocar magias com o karma de outro místico.

O mago deve primeiramente evocar esta magia sobre alguém que queira recebe-la (este encanto não pode ser imposto). Depois de evocada a magia sobre o alvo. Um elo de mutualidade será estabelecido entre ambas as partes. A partir de então, um dos místicos poderá evocar magias gastando o karma do outro e vice-versa, desde que ambos não estejam a uma distancia superior ao alcance da magia. Caso o mago e o alvo da magia se afastem mais de 20 metros um do outro, o karma não poderá ser compartilhado entre eles até que a distancia necessária seja retomada. O nível máximo da magia que poderá ser evocada com o karma do outro e o tempo de duração do elo de mutualidade, variam com a dificuldade do efeito usado.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
	];
}
