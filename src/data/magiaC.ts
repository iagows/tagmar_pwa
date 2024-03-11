import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.cacadaMarcada,
			nome: "Caçada Marcada",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					alcance: { valor: 1, isRaio: true, tipo: AlcanceEnum.QUILOMETRO },
					descricao:
						"O místico sabe a direção e será guiado até o ser marcado, desde que este esteja dentro do alcance.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 2 },
					alcance: { valor: 5, isRaio: true, tipo: AlcanceEnum.QUILOMETRO },
					descricao:
						"Idem ao anterior e saberá quando se aproximar a 100 metros ou menos da caça. Também receberá informações genéricas (longe, perto, muito perto, etc) sobre a distância entre ele e a caça.",
					nivel: 3,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 3 },
					alcance: { valor: 10, isRaio: true, tipo: AlcanceEnum.QUILOMETRO },
					descricao:
						"Idem ao anterior e saberá quando se aproximar a 1 km ou menos da caça.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 4 },
					alcance: { valor: 50, isRaio: true, tipo: AlcanceEnum.QUILOMETRO },
					descricao:
						"Idem ao anterior e saberá quando se aproximar a 5 km ou menos da caça. Também receberá informações mais precisas sobre a distância entre ele e a caça (com uma precisão de 50 metros).",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 5 },
					alcance: { valor: 100, isRaio: true, tipo: AlcanceEnum.QUILOMETRO },
					descricao:
						"idem ao anterior e saberá quando se aproximar a 10 km ou menos da caça.",
					nivel: 9,
				},
			],
			descricao: `Ao evocar essa magia, o místico marca a aura de uma presa para continuar a caçada caso ela fuja ou escape do combate, ou prefira caçá-la em melhores condições. A criatura a ser marcada deve estar até 5 metros do evocador e precisa falhar em um teste de RM para o encanto funcionar. A aura do ser marcado emanará um brilho tênue percebível apenas pelo evocador (à noite, se destaca a uma distância máxima de 10 metros, de dia não faz diferença).

A magia apontará a direção e guiará o evocador até o exato local onde a caça se encontra, desde que esteja dentro do raio de alcance definido pelo nível da magia. Se a presa sair dessa área, o místico só terá informações até a borda do raio, daí para frente nada mais será informado. Caso volte para a marcação antes que a duração do feitiço acabe, o encanto é retomado. É importante ressaltar que a magia não fornece informações acerca do local que se encontra a criatura, o místico só tomará conhecimento quando chegar lá. Os níveis darão informações acerca da distância entre o caçador e a caça.

Note que apenas o místico obtém informação da presa (esta não recebe informação sobre o caçador). Após a duração do encanto, a presa deixará de brilhar e o evocador não receberá mais informações, sabendo apenas a direção e distância até o momento. A magia funciona em qualquer ser que tenha aura.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.campoabencoado,
			nome: "Campo Abençoado",
			niveis: [
				{
					id: "0",
					nivel: 1,
					alcance: { tipo: AlcanceEnum.METRO, valor: 20, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
					descricao:
						"Com este efeito o sacerdote cria um campo em que todo aquele que descansar ou fizer esforço leve, sua recuperação de EH será como se estivesse dormindo, sendo 2 pontos por hora. Fazendo esforço pesado a recuperação de EH é de 1 ponto por hora.",
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 20, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
					descricao:
						"Idem ao anterior, além disso, com este efeito todos aumentam em 2 sua coluna de ataque contra criaturas infernais e mortos vivos.",
					nivel: 2,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 20, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
					descricao:
						"Idem ao anterior, mas o aumento em 2 sua coluna de ataque também afeta as raças selvagens. Além disso, com este efeito não são necessárias mais as três horas iniciais para conformação do mana, para só então passar a recuperar o karma. Todos dentro do Alcance da magia passam a recuperar 1 ponto de karma por hora.",
					nivel: 4,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 1, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					descricao:
						"Idem ao anterior, mas com este efeito o Sacerdote também consegue sentir a presença das criaturas inimigas. Além disso, pelas propriedades curativas, qualquer teste de medicina realizado no campo terá -1 nível de dificuldade, e caso a EF esteja entre -11 e -15, qualquer um se estabiliza na primeira hora em que estiver dentro do Alcance da magia.",
					nivel: 6,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 10, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					descricao:
						"Idem ao anterior, mas qualquer teste de medicina realizado no campo terá -2 níveis de dificuldade, e o alcance da magia passa a ser de 10 km.",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 10, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					descricao:
						"Idem ao anterior, mas com este efeito todos, incluindo a fauna e a flora, aumentam em 3 sua coluna de ataque contra qualquer um que tenha intenção de prejudicar, seja pessoa, animal ou o meio ambiente, que estejam dentro do Alcance da magia.",
					nivel: 10,
				},
			],
			descricao:
				"Com este milagre, o sacerdote de Sevides é capaz de abençoar uma determinada área de 20 metros a 10 km de raio. Nessa área, a proteção de Sevides estará sobre aquele que nela permanecer por toda sua duração. Esse milagre é muito utilizado nas aventuras, dada as propriedades de cura e proteção.",
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.HORA, valor: 8 },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.campoabencoado,
			nome: "Camuflagem",
			niveis: [
				{
					id: "0",
					descricao:
						"O ambiente deve ser no mínimo equivalente a uma vegetação muito densa, grandes declinações no terreno (ladeiras, pedras, planaltos etc.}, lugares escuros (como cavernas}, etc.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O ambiente deve ser no mínimo equivalente a uma vegetação mediana ou médias declinações no terreno.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"O ambiente deve ser no mínimo equivalente a uma vegetação baixa ou onde haja um pequeno declínio no terreno. Os alvos da magia podem se mover lentamente (1 metro pro rodada).",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas agora os alvos agora podem se mover do local desde que a sua velocidade não seja superior a 2 metros por rodada.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas agora podem se mover usando metade da sua velocidade base.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas agora podem se mover metade da sua velocidade base normal e é possível se camuflar mesmo em ambientes que não sejam naturais.",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite que o evocador use o ambiente a sua volta para camuflar a si mesmo e/ou outros seres próximos. A camuflagem dada por esta magia é adaptável ao ambiente de forma a deixar os alvos quase imperceptíveis.

Os seres e seus pertences ficam camuflados de forma idêntica ao ambiente onde estão, para vê-los é necessário um teste Azul (Muito Difícil) na habilidade Usar os Sentidos. Estes serão notados como uma espécie de forma aquosa muito parecida como a do personagem do cinema "Predador", do filme "O Predador". Note que a magia camuflagem não os impede de serem percebidos pelos sentidos que não sejam a visão. Os níveis que não possuem duração perduram até que o alvo se mova, os demais níveis ficam ativos para cada alvo por um tempo de dez minutos ou podem terminar antes caso este efetue um ataque, mova-se além da velocidade permitida ou evoque uma magia. A quantidade de alvos que a magia afeta é sempre dois, sendo o evocador e outro alvo, exceto nos níveis mais avançados onde afeta apenas o evocador e seus companheiros animais.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.cancaoDoAlento,
			nome: "Canção do Alento",
			niveis: [
				{
					id: "0",
					descricao:
						"A pessoa receberá +1 coluna em todas as suas habilidades. O evocador recebe 5 pontos de dano na EH.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A pessoa receberá +2 colunas em todas as suas habilidades. O evocador recebe 10 pontos de dano na EH.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"A pessoa receberá +3 colunas em todas as suas habilidades. O evocador recebe 15 pontos de dano na EH.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"A pessoa receberá +4 colunas em todas as suas habilidades. O evocador recebe 20 pontos de dano na EH.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"A pessoa receberá +5 colunas em todas as suas habilidades e ainda receberá 5 EH, podendo ir além do seu máximo. O evocador recebe 25 pontos de dano na EH.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"A pessoa receberá +6 colunas em todas as suas habilidades, receberá 10 EH, podendo ir além do seu máximo, e seu brilhantismo lhe confere uma capacidade de lidar com as pessoas equivalente a da magia Amizade nível 1 até duas vezes dentro da duração da magia. O evocador recebe 30 pontos de dano na EH.",
					nivel: 10,
				},
			],
			descricao: `A ansiedade e a preocupação são grandes inimigos dos heróis. Uma batalha decisiva, uma disputa de honra, uma reunião diplomática ou mesmo o encontro com alguém de grande importância: tudo isso pode ser motivo de preocupação e com certeza, perturba a pessoa e a impede de ter o seu melhor desempenho. Existem aqueles, no entanto, através da música, conseguem trazer alento ao coração preocupado e paz ao ânimo inquieto.

Através de um ritual extremamente cansativo para o evocador, ele pode fazer com que a pessoa tensa consiga ter uma noite de sono com perfeita paz, repleta de sonhos com mensagens animadoras e vitoriosas. No dia seguinte, essa pessoa acordará de forma tão disposta, que tudo o que ela estava para fazer terá uma maior chance de dar certo. Para quem observa, a pessoa está radiante, com brilho, como se dissesse que aquele dia havia sido feito exatamente para aquela pessoa. É importante notar que embora possam existir outras pessoas que durmam próximas uma das outras, apenas uma delas (a que o evocador escolher) poderá ser beneficiada pelo encanto.

Para que o ritual funcione, é necessário primeiramente que a pessoa beneficiada tenha algum motivo de preocupação e ansiedade de algo que venha a ocorrer no dia seguinte da realização do ritual. Satisfeita essa condição, o evocador deverá tocar uma canção suave enquanto a pessoa ainda estiver acordada. Após algum tempo, essa pessoa acabará dormindo e o evocador deverá continuar tocando até o dia seguinte, quando a pessoa acordar. Ela irá dormir muito bem e acordará no dia seguinte com uma série de bônus. No entanto, é necessário que o tempo de sono seja de no mínimo 6 horas. Conseqüentemente, a evocação da magia será de no mínimo seis horas somados ao tempo inicial da música enquanto a pessoa ainda estava acordada.

Nesse sentido, se por algum motivo, a pessoa acordar ou o evocador parar de tocar enquanto a pessoa estiver dormindo, a magia perderá o seu efeito.

Este encanto é extremamente cansativo para o evocador, fazendo com que ele perca uma quantidade de EH ao final da evocação. Caso a EH dele chegue a zero com este encanto, ele irá desmaiar, só acordando após 8 horas de sono. A EH , no entanto, recupera normalmente com o descanso.

Os bônus recebidos duram 1 dia contado a partir do momento que a pessoa acorda. Os bônus também serão perdidos caso a pessoa decida dormir antes do tempo se esgotar.`,
			extra: [
				"Caso um ou outro aconteça, é impossível retomar a evocação da magia uma vez que ela tenha sido quebrada.",
				"A pessoa beneficiada deve ser capaz de ouvir e querer ouvir a música, não podendo, nesse sentido, a magia ser imposta.",
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.cancaoDoAnimo,
			nome: "Canção do Ânimo",
			niveis: [
				{
					id: "0",
					nivel: 1,
					descricao: "Concede +3 nos ataques para 1 pessoa.",
				},
				{
					id: "1",
					nivel: 3,
					descricao: "Concede +3 nos ataques para 3 pessoas.",
				},
				{
					id: "2",
					nivel: 5,
					descricao: "Concede +3 nos ataques para 6 pessoas.",
				},
				{
					id: "3",
					nivel: 6,
					descricao: "Concede +5 na EH e +5 nos ataques para uma pessoa.",
				},
				{
					id: "4",
					nivel: 8,
					descricao: "Concede +5 na EH e +5 nos ataques para 2 pessoas.",
				},
				{
					id: "5",
					nivel: 10,
					descricao: "Concede +10 na EH e +5 nos ataques para 6 pessoas.",
				},
			],
			descricao: `Com o uso deste feitiço, o Bardo pode dar a um ou mais de seus companheiros ânimo e coragem para enfrentar o combate. O número de pessoas que podem ser afetadas e o efeito específico de cada uso dependem da dificuldade.

O encanto Concede ajuste na EH e no ataque do personagem que esteja sob o seu efeito. O ajuste na EH se dá como certo número de pontos que são somados à EH do beneficiado, podendo mesmo passar do máximo da pessoa. Caso um personagem ainda tenha mais pontos de EH que o seu máximo no fim da duração desta magia, estes pontos adicionais desaparecem.

O ajuste no ataque que é ganho toma a forma de um ajuste na coluna de resolução final do personagem. Assim sendo, o personagem soma o ajuste ganho com a sua coluna de resolução para obter a coluna na qual o ataque é feito.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 20 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.cancaoDoSono,
			nome: "Canção do Sono",
			niveis: [
				{
					id: "0",
					descricao:
						"Torna uma vítima sonolenta, causando um ajuste de -5 para as Percepções.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Torna três vítimas sonolentas, causando um ajuste de -5 para as Percepções.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Faz dormir uma pessoa. Note-se o simples sacolejar da vítima poderá quebrar o efeito da magia.",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"Faz dormir duas pessoas. Note-se o simples sacolejar da vítima poderá quebrar o efeito da magia.",
					nivel: 4,
				},
				{
					id: "4",
					descricao:
						"Faz dormir uma pessoa, sendo quebrado o encanto caso a vítima sinta dor ou incômodos maiores.",
					nivel: 5,
				},
				{
					id: "5",
					descricao:
						"Faz dormir duas pessoas, sendo quebrado o encanto caso as vítimas sintam dor ou incômodos maiores.",
					nivel: 6,
				},
				{
					id: "6",
					descricao:
						"Faz dormir três pessoas, sendo quebrado o encanto caso as vítimas sintam dor ou incômodos maiores.",
					nivel: 7,
				},
				{
					id: "7",
					descricao:
						"Faz uma pessoa dormir um sono profundo, mas podendo ser acordada apenas quando a magia for anulada ou sua duração se esgotar, por isso este efeito não poderá ser quebrado mesmo que sejam desferidos golpes que causem dor na vítima.",
					nivel: 8,
				},
				{
					id: "8",
					descricao:
						"Faz três pessoas dormirem um sono profundo, que podem ser acordadas apenas quando a magia for anulada ou sua duração se esgotar, por isso este efeito não poderá ser quebrado mesmo que sejam desferidos golpes que causem dor nas vítimas.",
					nivel: 9,
				},
				{
					id: "9",
					descricao:
						"Faz todas as pessoas que escutarem a música dormirem um sono profundo, os efeitos atingem inclusive os aliados do evocador que escutarem. Só acordarão quando a magia for anulada ou sua duração se esgotar. Note-se que os efeitos deste nível não serão quebrados mesmo que sejam desferidos golpes que causem dor nas vítimas.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o Bardo, toque algumas notas musicais que, combinadas com a sua mágica, podem fazer com que um ou mais seres sintam sono. Qualquer nível desta magia não atingirá o evocador que lançá-la.

A duração do feitiço, a não ser que a descrição do efeito diga o contrário, é igual a 20 rodadas ou o tempo que o evocador permanecer concentrado tocando a canção, desde que não exceda a 2 (duas) horas. Se o Bardo for impedido de continuar tocando ou as vítimas do encanto saírem do alcance da canção o feitiço permanece pelo restante da duração ou (se a duração tiver se esgotado) se quebra imediatamente (as vítimas acordam).`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 20,
				descricao:
					"20 rodadas ou o tempo que o evocador permanecer concentrado tocando a canção, desde que não exceda a 2 (duas) horas",
			},
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.cancaoDoTormento,
			nome: "Canção do Tormento",
			niveis: [
				{
					id: "0",
					descricao: "Afeta uma pessoa impondo um ajuste de -1 coluna.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Afeta uma pessoa impondo um ajuste de -2 colunas e perda de 5 pontos de EH.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Afeta uma pessoa impondo um ajuste de -3 colunas e perde de 10 pontos de EH.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Afeta uma pessoa impondo um ajuste de -4 colunas e perda de 15 pontos de EH.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Afeta uma pessoa impondo um ajuste de -5 colunas e perda de 20 pontos de EH.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Afeta uma pessoa impondo um ajuste de -6 colunas e perda de 30 pontos de EH.",
					nivel: 10,
				},
			],
			descricao: `Canção do Tormento é um encanto utilizado em batalhas. O evocador canta uma canção ou apenas toca uma melodia ou até mesmo fala algumas coisas e a vítima deverá fazer uma resistência à magia; se falhar virá à mente da vítima uma imagem julgadora de seus atos; assim se o pai de um inimigo condenava seus atos, a imagem do pai da vítima virá à sua mente; se um grande espadachim for a vítima, a imagem do seu mestre poderá vir a mente. Diversas podem ser as imagens, mas todas elas causarão uma dificuldade na batalha. No primeiro caso a imagem do pai desconcentra o oponente, no segundo caso, a imagem do mestre faz com que o espadachim fique nervoso, pois não pode errar na frente do seu mestre. Essas imagens farão com que as vítimas lutem em piores condições, já que estão sendo submetidas a um olhar superior que as pressionam e as desconcentram.

Caso a EH da vítima chegue a zero com esse feitiço, a vítima não conseguirá fazer nada além de chorar, lamentar ou amaldiçoar a imagem que veio a sua mente por 5 rodadas. Caso ela seja atacada, no entanto, durante esse período, ela será desperta do transe. `,
			extra: [
				"Até mesmo criaturas dos reinos inferiores podem ser afetadas por esse encanto: um ser inferior de baixo nível pode ficar aterrorizado com a lembrança do discurso de seu superior de quem falhar na missão. Seres irracionais não podem ser afetados por esse encanto.",
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 20 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.cataclisma,
			nome: "Cataclisma",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 2, isRaio: true },
					descricao:
						"Rouba o karma de até 1 alvo, a explosão tem 2 metros de raio e causa dano máximo 12.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 3, isRaio: true },
					descricao:
						"Rouba o karma de até 1 alvo, a explosão tem 3 metros de raio e causa dano máximo 16.",
					nivel: 2,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 4, isRaio: true },
					descricao:
						"Rouba o karma de até 2 alvos, a explosão tem 4 metros de raio e causa dano máximo 20.",
					nivel: 4,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 5, isRaio: true },
					descricao:
						"Rouba o karma de até 2 alvos, a explosão tem 5 metros de raio e causa dano máximo 24.",
					nivel: 6,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 6, isRaio: true },
					descricao:
						"Rouba o karma de até 3 alvos, a explosão tem 6 metros de raio e causa dano máximo 28.",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.METRO, valor: 7, isRaio: true },
					descricao:
						"Rouba o karma de até 3 alvos, a explosão tem 7 metros de raio e causa dano máximo 32.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia, o mago alquímico pode roubar a energia de outros místicos e as converter em uma quantidade de energia que se manifesta na forma de uma explosão em, forma de domo, ao redor do evocador atingindo a todos que estejam na área.

Na pratica o evocador deverá, primeiramente, escolher os alvos que terão suas energias “roubadas” (os alvos têm de estar a pelo menos 20 metros do evocador). Após a evocação, os alvos escolhidos deverão fazer uma resistência á magia e os que falharem perderão 1 ponto de karma que será imediatamente assimilado à energia do cataclisma. A cada um (1) ponto de karma roubado, aumenta-se (4) no dano básico da explosão (se um cataclisma de dano máximo 16 receber um acréscimo de 2 pontos de karma, seu dano máximo passará a ser 24) .

A área de abrangência da explosão, o número de alvos que poderão ter o karma roubado e o dano da explosão, varia com o efeito usado.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.chuvaAcida,
			nome: "Chuva Ácida",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 25, isRaio: true },
					descricao:
						"Causa dano 1 por rodada de exposição em área de até 25 m de raio.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 50, isRaio: true },
					descricao:
						"Causa dano 2 por rodada de exposição em área de até 50 m de raio.",
					nivel: 3,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 125, isRaio: true },
					descricao:
						"Causa dano 2 por rodada de exposição em área de até 125 m de raio",
					nivel: 5,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 150, isRaio: true },
					descricao:
						"Causa dano 3 por rodada de exposição em área de até 150 m de raio",
					nivel: 7,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 300, isRaio: true },
					descricao:
						"Causa dano 3 por rodada de exposição em área de até 300 m de raio",
					nivel: 9,
				},
			],
			descricao: `Restrição de Uso: Ar livre

Esta magia manipula as propriedades gasosas das nuvens fazendo com que produzam ácido e água.

Durante a evocação, o místico deve posicionar o foco de atuação em qualquer lugar dentro do alcance da magia. Uma vez posicionado, o foco não poderá ser mudado de posição até o final da duração da magia.

No local do foco de atuação da magia o céu é tomado por uma nuvem negra em forma de redemoinho. A tonalidade negra da nuvem se expande do centro do redemoinho para fora. Ao final da evocação a chuva ácida começará a cair da nuvem negra atingindo tudo que estiver na área de efeito. Esta magia causa dano por rodada em criaturas que estejam no foco de atuação. Qualquer estrutura que esteja na área de efeito sofrerá danos por corrosão.

Esta magia é perigosa podendo causar sérios danos á natureza, sendo por esse motivo, usada em ultima instancia pelos Naturalistas.

Esta magia não cria a chuva, apenas se utiliza dela, por isso é preciso que o tempo já esteja chuvoso antes do início de evocação da magia. Para criar chuva, leia o encanto Controle Climático. O dano por rodada de exposição e a área de atuação da chuva ácida variam com a dificuldade do efeito. A área pode ser controlada de no mínimo 25 m de raio até o máximo que o efeito permitir.`,
			alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 1 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 30 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 3 },
		},

		{
			id: MagiaEnum.circuloDeProtecao,
			nome: "Círculo de Proteção",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.HORA, valor: 13 },
					descricao: "Impede a entrada de criaturas de Estágio inferior a 2",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.HORA, valor: 13 },
					descricao: "Impede a entrada de criaturas de Estágio inferior a 3.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.HORA, valor: 13 },
					descricao: "Impede a entrada de criaturas de Estágio inferior a 5.",
					nivel: 3,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.DIA, valor: 13 },
					descricao: "Impede a entrada de criaturas de Estágio inferior a 4.",
					nivel: 4,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.DIA, valor: 13 },
					descricao: "Impede a entrada de criaturas de Estágio inferior a 7.",
					nivel: 5,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.DIA, valor: 13 },
					descricao: "Impede a entrada de criaturas de Estágio inferior a 9.",
					nivel: 6,
				},
				{
					id: "6",
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					descricao:
						"Impede a entrada de criaturas de Estágio inferior a 11 por um ano e um dia.",
					nivel: 7,
				},
				{
					id: "7",
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					descricao:
						"Impede a entrada de criaturas de Estágio inferior a 13 por um ano e um dia.",
					nivel: 8,
				},
				{
					id: "8",
					duracao: { tipo: DuracaoEnum.ANO, valor: 13 },
					descricao:
						"Impede a entrada de criaturas de Estágio inferior a 15 por 13 anos.",
					nivel: 9,
				},
				{
					id: "9",
					duracao: { tipo: DuracaoEnum.ANO, valor: 13 },
					descricao:
						"Impede a entrada de criaturas de Estágio inferior a 20 por 13 anos.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o evocador energize um círculo, previamente preparado no chão, que protegerá quem estiver no seu interior de mortos-vivos que estiverem fora dele. Qualquer outra criatura não será afetada pelo círculo. O poder das criaturas que podem ser contidas e o tempo pelo qual elas podem ser contidas varia com o efeito usado. A Evocação deste feitiço não inclui o tempo necessário para se preparar o círculo.

Cada morto-vivo terá direito a uma Resistência à Magia. Aqueles que falharem não poderão agir direta ou indiretamente sobre quem estiver dentro do círculo (mas quem estiver dentro do círculo poderá agir sobre eles normalmente). Caso seja obtido sucesso na Resistência, a criatura poderá ignorar a existência do círculo por uma hora, embora não possa danificá-lo. Após este tempo, uma nova Resistência à Magia será necessária.

Caso um morto-vivo esteja dentro do círculo quando o feitiço for evocado, ele não será afetado pelo encanto, podendo agir normalmente dentro do círculo e inclusive sair do mesmo. Após deixar o círculo, no entanto, a criatura será tratada como qualquer outra que esteja fora do círculo (ou seja, ela pode não conseguir entrar de novo).

O círculo de proteção pode ser desenhado ou entalhado no chão, em qualquer tamanho desejado pelo evocador (desde que ele tenha dinheiro para pagar os materiais) até o limite de 5 metros de raio. Caso o evocador deseje desenhar o círculo, o traçado do mesmo levará 2 horas por metro de raio e custará uma moeda de ouro por metro de raio. Caso o evocador deseje entalhar o círculo no chão, o entalhe custará 5 moedas de ouro por metro de raio e demorará dois dias por metro de raio, mas a Resistência à Magia da criatura é reduzida em 5 colunas.

Os círculos são bastante vulneráveis a ataques. Caso qualquer parte de um circulo desenhado seja apagada ou qualquer parte de um circulo entalhado seja desfigurada (quebrada, lascada, etc.) a integridade do círculo será comprometida, se isso acontecer, qualquer feitiço que estiver em efeito nele será destruído. Mesmo que não haja nenhum feitiço em efeito no momento do comprometimento, o circulo é, a partir, de então inútil, não podendo mais ser usado. É impossível reparar um circulo que tenha sido danificado.

Círculos podem ser reutilizados, mas a cada novo uso deve-se gastar novamente o Karma do feitiço e mais uma moeda de ouro em materiais.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 5,
				descricao: "Até 5m de raio",
			},
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.clarividencia,
			nome: "Clarividência",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.SEGUNDO, valor: 1 },
					descricao:
						"O evocador tem uma visão (apenas imagem) e pode ser do presente ou do futuro (o MESTRE escolhe).",
					nivel: 1,
					custo: { ouro: 1 },
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.SEGUNDO, valor: 10 },
					descricao:
						"O evocador tem uma visão (apenas imagem) e pode ser do presente ou do futuro (o MESTRE escolhe).",
					nivel: 3,
					custo: { ouro: 3 },
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.SEGUNDO, valor: 1 },
					descricao:
						"O evocador tem uma visão (apenas imagem) e pode ser do presente ou do futuro (o JOGADOR escolhe).",
					nivel: 5,
					custo: { ouro: 5 },
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.SEGUNDO, valor: 10 },
					descricao:
						"O evocador tem uma visão (apenas imagem) e pode ser do presente ou do futuro (o JOGADOR escolhe).",
					nivel: 7,
					custo: { ouro: 7 },
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.SEGUNDO, valor: 20 },
					descricao:
						"O evocador tem uma visão (imagem e som) e pode ser do presente ou do futuro (o JOGADOR escolhe).",
					nivel: 9,
					custo: { ouro: 9 },
				},
			],
			descricao: `Com esta magia o evocador tem uma visão de lugares e de situações, sejam elas no presente ou no futuro. O que será visto é uma imagem (parada ou em movimento com ou sem som) de um lugar ou situação, e a precisão não é grande. O jogador antes de fazer a magia deve dizer ao Mestre o que pretende ver. De acordo com o efeito o Mestre, determinará o que será visto. Não há limite para a distância mas a duração da visão é dada no efeito. Note que toda visão é meio turva e mas o som é bem razoável. Toda clarividência que seja sobre o futuro não necessariamente irá acontecer.

Para este ritual precisa-se que esteja disponível um objeto apropriado para clarividência, que pode ser uma bola de cristal, um espelho, ou um pequeno lago ou poço, desde que a água esteja completamente parada.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
		},
		{
			id: MagiaEnum.cobertura,
			nome: "Cobertura",
			niveis: [
				{
					id: "0",
					descricao:
						"Os primeiros 10 pontos de dano no alvo são redirecionados para o sacerdote.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Os primeiros 20 pontos de dano no alvo são redirecionados para o sacerdote.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Os primeiros 30 pontos de dano no alvo são redirecionados para o sacerdote, pode proteger 2 pessoas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Os primeiros 40 pontos de dano no alvo são redirecionados para o sacerdote, pode proteger 2 pessoas e o dano recebido cai 25%.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Os primeiros 50 pontos de dano no alvo são redirecionados para o sacerdote, pode proteger 3 pessoas e o dano recebido cai 25%.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Os primeiros 60 pontos de dano no alvo são redirecionados para o sacerdote, pode proteger 3 pessoas e o dano recebido cai 50%.",
					nivel: 10,
				},
			],
			descricao: `Com este milagre o sacerdote cria uma corrente de energia incorpórea que protege uma pessoa até 15 metros de distância, recebendo dano em seu lugar. Após ser encantado com o milagre, o alvo pode entrar em qualquer ambiente normalmente mantendo o alcance (inclusive se houver obstáculos como paredes, portas de madeira ou ferro}, porém se ultrapassar o alcance a magia se desfaz.

Se o alvo do milagre receber dano em combate ou de outras situações, este dano é redirecionado para o Sacerdote que efetuou o milagre, seguindo as regras de se reduzir primeiro Energia Heroica e posterior a Energia Física.

Todos os danos sofridos pelo Alvo da magia é redirecionado para o Sacerdote, inclusive resultados negativos após uma rolagem crítica (20) do atacante, exceto dano que causem morte instantânea por queda ou golpe crítico (20/20).

A quantidade de dano que o sacerdote poderá receber no lugar da pessoa varia de acordo com o nível da magia. Apesar de estar protegendo o alvo da magia, o sacerdote pode continuar atacando normalmente sem qualquer penalidade.

O Sacerdote poderá cancelar o milagre a qualquer momento que desejar sem esforços, desta forma não gasta sua ação se estiver em batalha.

Se o alvo deste milagre, durante uma batalha realizar um ritual ou evocação com uma rodada ou mais e receber ataques na EF ou 100% da EH, este alvo não sofrerá penalidades ou interrupção por dano.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 30 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.comandoDePaz,
			nome: "Comando de Paz",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 7 },
					descricao:
						"Permite ao evocador acalmar pessoas em discussões e desentendimentos. Permite ao evocador ou outra pessoa por ele indicada possa tentar uma persuasão para evitar uma luta. Nesse nível não é possível parar brigas físicas. Podendo afetar até 8 pessoas.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 7 },
					descricao:
						"Idem ao anterior, mas pode interromper brigas. Os afetados param de lutar e assumem uma postura defensiva. Porém afeta até 10 pessoas.",
					nivel: 2,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.HORA, valor: 3 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
					descricao:
						"A partir desse nível o evocador não precisa argumentar e os afetados são influenciados pela própria influência divina e sentirão uma urgência em recuar e evitar o combate. Aqueles que conseguirem resistir a esta influência sofrem um redutor de -1 na coluna de ataque. Afeta até 20 pessoas.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
					descricao:
						"Idem ao anterior mas afeta até 30 pessoas. Alvos com Resistência à Magia igual ou menor a 2 falham automaticamente.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.HORA, valor: 12 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
					descricao:
						"Idem ao anterior, mas o redutor para ataques passa a ser -2 colunas e afeta até 50 pessoas. Alvos com Resistência à Magia igual ou menor a 4 falham automaticamente.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 100 },
					descricao:
						"Idem ao anterior, mas afeta até 100 pessoas. Alvos com Resistência à Magia igual ou menor a 6 falham automaticamente. Esse efeito praticamente força uma trégua.",
					nivel: 10,
				},
			],
			descricao: `Esta Magia permite ao Evocador pôr fim a conflitos, retirando a vontade de lutar ou ao menos reduzindo a hostilidade.

Em níveis mais baixos pode-se impedir ou encerrar brigas em taverna e em suas versões mais poderosas batalhas podem ser interrompidas.

A evocação leva uma rodada e pode ou não envolver preces ou argumentações. A magia é resistível e quem falhar sentirá uma necessidade extrema e urgente de recuar e cessar o combate (isso não significa que irá fugir, mas sim que vai recuar e se defender). Já quem passar no teste de Resistência à Magia sentirá o corpo rígido e mesmo ofensas dirigida a seus oponentes serão difíceis de ser proferidas, a partir do nível 4 a dificuldade se reflete em redutor nos testes de ataque.

Esta magia não afeta mortos-vivos, criaturas artificiais e demônios; mas afeta criaturas irracionais como animais e todos os tipos de criaturas místicas.

Vale ressaltar que pessoas lutando por sua vida não serão afetadas por este milagre, exemplo pessoas lutando contra feras famintas, ou fugindo de captores.

Outro detalhe importante é que só será afetado quem estiver na área de feito no momento do lançamento da magia.

Usar essa magia para forçar um recuo do oponente e propiciar um ataque ou emboscada é considerado contra as regras da magia que é instantaneamente quebrada caso ocorra tal transgressão. Caso o evocador seja um Sacerdote outras punições podem vir da divindade.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.comunhaoNatural,
			nome: "Comunhão Natural",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
					descricao:
						"O evocador tem conhecimento total em uma área de 50 m de distância do sacerdote.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 100 },
					descricao:
						"Idem ao anterior, mas a área é de 100m de distância do sacerdote.",
					nivel: 2,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 300 },
					descricao:
						"Idem ao anterior mas a área é de 300m de distância do sacerdote.",
					nivel: 4,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 300 },
					descricao:
						"Idem ao anterior, mas o evocador também pode neste nível projetar sua voz através de uma árvore, pedra, água (que se modifica formando algo próximo do rosto do evocador; a voz assim como a imagem também é um pouco distorcida) em algum ponto escolhido dentro da área.",
					nivel: 6,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 500 },
					descricao:
						"Idem ao anterior mas a área é de 500m de distância do sacerdote.",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.METRO, valor: 500 },
					descricao:
						"Idem ao anterior, mas agora o sacerdote pode projetar sua voz em quantos lugares ele quiser ao mesmo tempo. Entretanto, a mensagem transmitida é a mesma.",
					nivel: 10,
				},
			],
			descricao:
				"Com este milagre, o sacerdote poderá ver através da natureza e saber tudo o que acontece em uma área que varia de acordo com o nível da magia. Da mesma forma que em Auxílio Natural, cada sacerdote só poderá utilizar esse encanto em ambientes específicos de acordo com a sua divindade. Na prática essa magia concede a capacidade de ver, ouvir e cheirar em qualquer ponto da área da magia",
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},

		{
			id: MagiaEnum.conhecimento,
			nome: "Conhecimento",
			niveis: [
				{
					id: "0",
					descricao: "Concede +1 coluna no teste.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Concede +2 colunas no teste.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Concede +4 colunas no teste.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Concede +6 colunas no teste.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Concede +8 colunas no teste.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Concede +10 colunas no teste.",
					nivel: 10,
				},
			],
			descricao:
				"Uma vez usado o encanto Conhecimento, toda e qualquer habilidade que envolva conhecimento deverá ser jogada com colunas extras, que variarão conforme o nível.",
			extra: [
				"As habilidades que envolvem conhecimento não se reduzem apenas ao grupo de habilidades Conhecimento, mas sim toda e qualquer habilidade que de alguma forma possa ser usada para obter uma informação. Assim, se o personagem quer saber de onde tal tecido poderia ter vindo, ele deverá fazer um teste de Trabalhos Manuais. Como se trata de informação, os bônus se aplicarão a essa habilidade. Mas se, por exemplo, o personagem resolver reparar uma roupa, o encanto de nada lhe adiantaria, já que não lida especificamente com um conhecimento geral, mas sim técnico.",
			],
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.ATIVACAO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.conhecimentoLinguistico,
			nome: "Conhecimento Linguístico",
			niveis: [
				{
					id: "0",
					descricao:
						"É capaz de falar e ler em uma língua a sua escolha como se fosse secundaria além de ser capaz de usar a Habilidade Códigos sem nível ou recebe bônus de 1 nível em Línguas, Escrita e Códigos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"É capaz de falar e ler em uma língua a sua escolha como se fosse primaria além de ser capaz de usar a Habilidade Códigos sem nível ou recebe bônus de 2 níveis em Línguas, Escrita e Códigos.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"É capaz de falar e ler em três língua a sua escolha como se fossem primarias além de ser capaz de usar a Habilidade Códigos sem nível ou recebe bônus de 3 níveis em Línguas, Escrita e Códigos.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"É capaz de falar e ler em seis língua a sua escolha como se fossem primarias além de ser capaz de usar a Habilidade Códigos sem nível ou recebe bônus de 4 níveis em Línguas, Escrita e Códigos. Ler, escrever e decifrar são 2 vezes mais rápido.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"É capaz de falar e ler em dez língua a sua escolha como se fossem primarias além de ser capaz de usar a Habilidade Códigos sem nível ou recebe bônus de 5 níveis em Línguas, Escrita e Códigos. Ler, escrever e decifrar são 4 vezes mais rápido.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas agora consegue falar e ler em qualquer língua e torna uma tarefa de dificuldade Impossível em uma Absurda, além de ler, escrever e decifrar 10 vezes mais rápido.",
					nivel: 10,
				},
			],
			descricao:
				"Com este feitiço o evocador é capaz de compreender línguas e códigos que não teria capacidade de entender e se expressar. Caso o evocador tenha a habilidade Escrita ele será capaz de escrever na(s) língua(s) escolhida(s) se não só poderá compreender a escrita e nunca escrever na mesma.",
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.conhecimentoNatural,
			nome: "Conhecimento Natural",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 500, isRaio: true },
					descricao:
						"O evocador saberá se o ar é respirável, se existe massa líquida (rio, lago, etc.}, se o tipo de solo sofrerá alteração, as principais espécies de animais e plantas, tudo dentro do alcance. Elimina o Verde na tabela de resoluções para habilidade Navegação (menor resultado: branco).",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 500, isRaio: true },
					descricao:
						"Idem ao anterior, mas saberá se a água é potável, e a localização e a distância das principais espécies de plantas e animais comuns. Também elimina o Branco (menor resultado: amarelo).",
					nivel: 2,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 2, isRaio: true },
					descricao:
						"Idem ao anterior, mas saberá quais os tipos de solo existem no ambiente, se existem cavernas e sua localização, o principal minério, e se existem trilhas na área. Também elimina o Amarelo (menor resultado: Laranja).",
					nivel: 4,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 4, isRaio: true },
					descricao:
						"Idem ao anterior, mas saberá os principais animais gigantes que existem no ambiente. Também elimina o Laranja (menor resultado: Vermelho).",
					nivel: 6,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 7, isRaio: true },
					descricao:
						"Idem ao anterior, mas saberá a localização e a distância dos principais animais gigantes, as principais espécies de animais místicos. Também elimina o Vermelho (menor resultado: Azul).",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 10, isRaio: true },
					descricao:
						"o Místico entra em sintonia com o ambiente, tendo pleno conhecimento, localização e a distância das plantas e animais (comum, gigante e místico) do local; conhecimento do relevo, incluindo solo e minérios; massa d'água; caminhos, trilhas e qualquer formação natural relevante. Também elimina o Azul, ou seja, o sucesso é automático com exceção do Cinza (o nível Absurdo necessita jogar dado) e transforma algo Impossível em Absurdo.",
					nivel: 10,
				},
			],
			descricao: `Esse encanto concede ao Místico a capacidade de ler o ambiente, e com isso, obter informações relevantes sobre os seguintes elementos da área: ar, água, solo, fauna e flora. Caso haja alguma construção artificial ao alcance da magia, uma perturbação será sentida, mas não conseguirá definir o que é e nem a localização (mas não interrompe a magia). A quantidade de informações e o tamanho do local compreendido variam de acordo com o nível da magia.

Por ampliar o conhecimento do terreno, a magia também melhora a performance na habilidade Navegação (mas somente para uma área que pertença dentro do alcance da magia). De acordo com o nível do encanto, elimina-se uma cor na tabela de resoluções. Por exemplo, no nível 1 elimina-se o verde. Logo, o menor resultado é branco (caso tire verde, o resultado é considerado o primeiro posterior, ou seja, branco). Esse efeito vale apenas por 1 uso.`,
			extra: [
				"Animais Místicos oferecem RM para serem identificados e/ou localizados. Caso passem no teste de RM, o Místico saberá apenas que existem Animais Místicos na área, mas não conseguirá determinar a espécie e a localização. Esta magia só pode ser evocada em ambientes naturais.",
			],
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 20 },
		},
		{
			id: MagiaEnum.conjuracaoNatural,
			nome: "Conjuração Natural",
			niveis: [
				{
					id: "0",
					descricao: "Conjura um Plantor Mensageiro",
					nivel: 1,
					custo: { ouro: 3 },
				},
				{
					id: "1",
					descricao: "Conjura um Plantor Soldado",
					nivel: 3,
					custo: { ouro: 6 },
				},
				{
					id: "2",
					descricao: "Conjura um Plantor Conselheiro",
					nivel: 5,
					custo: { ouro: 15 },
				},
				{
					id: "3",
					descricao: "Conjura um Plantor Líder",
					nivel: 7,
					custo: { ouro: 21 },
				},
			],
			descricao: `Através deste ritual o evocador entra em sintonia com o Plano Astral para trazer entidades deste, temporariamente à terra.

O evocador imbui um corpo vegetal ao espírito Natural para que este possa habitar nosso plano físico (ver descrição de Plantores). Devido à origem mágica da incorporação, o tempo em que a mesma permanece sob operação não pode exceder o limite permitido pela magia.

O poder do Plantor conjurado varia com a dificuldade do efeito usado.

Esta magia não oferece nenhuma forma de dominar o ser conjurado, para isso leia o encanto Domínio Natural.`,
			extra: ["Esta magia só pode ser invocada em ambientes naturais"],
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.ANO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.conjurarObjetos,
			nome: "Conjurar objetos",
			niveis: [
				{
					id: "0",
					nivel: 1,
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 5 },
					descricao:
						"Conjura um objeto inanimado de até 1 kg para a mão do evocador. O objeto pode ser entregue a outra pessoa ou ser largado no chão, mas terá uma aparência levemente translúcida que indica que não é um objeto comum.",
				},
				{
					id: "1",
					nivel: 3,
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 15 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
					descricao:
						"Idem anterior, mas o objeto pode pesar até 5 kg e pode ser conjurado para a mão do evocador ou para um lugar que ele aponte.",
				},
				{
					id: "2",
					nivel: 5,
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 30 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
					descricao: "Idem anterior, mas o objeto pode pesar até 10 kg.",
				},
				{
					id: "3",
					nivel: 7,
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
					descricao: "Idem anterior, mas o objeto pode pesar até 20 kg.",
				},
				{
					id: "4",
					nivel: 9,
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
					descricao: "Idem anterior, mas o objeto pode pesar até 40 kg.",
				},
			],
			descricao: `O feiticeiro estende suas mãos e faz um objeto aparecer. O objeto tem a duração variável conforme os efeitos abaixo. Nos efeitos 3 em diante, o evocador pode escolher onde o objeto vai surgir, caso ele escolha que o objeto irá surgir tocando uma criatura ou imediatamente a sua frente, a criatura pode fazer um teste de RM para resistir ao efeito. Armaduras criadas com esta magia não podem ser utilizadas. A proximidade com a aura do possível usuário torna o feitiço instável e ela se desfaz em alguns instantes. Armas e escudos podem ser utilizados normalmente.

Este feitiço não é capaz de criar objetos muito específicos, tal como a chave de uma determinada cela ou reproduzir fielmente uma obra de arte. Seus efeitos são limitados a objetos comuns do tipo desejado pelo usuário, com detalhes específicos toscos ou faltantes, dependendo da precisão com a que foi imaginado (representada pela descrição oferecida pelo jogador).

As armas criadas com esta magia causam dano não mágico.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},

		{
			id: MagiaEnum.contatosMentais,
			nome: "Contatos Mentais",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
					descricao:
						"O evocador consegue transmitir seus pensamentos a uma pessoa que queira recebê-los voluntariamente.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao:
						"Permite uma comunicação mental entre várias pessoas. A comunicação tem de ser voluntária.",
					nivel: 3,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
					descricao: "Idem ao anterior.",
					nivel: 5,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao:
						"Este encanto permite que o evocador leia a mente de um indivíduo. A vítima tem direito a resistir a esse efeito.",
					nivel: 7,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao:
						"Idem ao anterior e, além disso, implanta na mente da vítima uma sugestão. A sugestão tem que ser algo que não ponha a vítima em perigo (pelo menos não claramente).",
					nivel: 9,
				},
			],
			descricao:
				"Este feitiço permite uma insinuação do evocador na mente da vítima; inicialmente o encanto possibilita apenas uma comunicação entre os indivíduos; os efeitos mais fortes, porém, permitem entrar na mente alheia e até implantar sugestões nela.",
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.contatosMusicais,
			nome: "Contatos Musicais",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite transmitir uma mensagem de até 1 palavra a uma pessoa.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite transmitir uma mensagem de até 3 palavras a até 2 pessoas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Permite transmitir uma frase curta com no máximo 10 palavras para 2 pessoas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Permite transmitir uma frase longa com no máximo 25 palavras para 3 pessoas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Permite transmitir um pequeno discurso com no máximo 100 palavras para 4 pessoas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Permite transmitir um discurso com no máximo 1000 palavras para uma pessoa.",
					nivel: 10,
				},
			],
			descricao: `Contatos musicais é uma magia que permite a utilização de música instrumental ou vocal desliterada para transmitir informações a pessoas específicas. A música é tão melodiosa e instigante que em si carrega uma mensagem que a vítima do encanto percebe claramente. Não é possível saber de onde o encanto veio.

Embora se assemelhe com ventrioloquismo, Contatos Musicais têm características próprias. A primeira delas, diferentemente de ventrioloquismo, que desloca o som e que, portanto é audível a todos os que estão próximos, é que o contato musical não pode ser entendido por nenhuma pessoa (a música tocada é audível mas a mensagem é inaudível). Assim o evocador pode fazer com que no meio de uma multidão uma pessoa específica ouça o que ele está dizendo enquanto todos os outros não podem, desde que a pessoa seja capaz de ouvir a melodia. A segunda delas é que é necessária que se faça um teste de resistência à magia para a pessoa cuja mensagem está direcionada e ela deverá falhar neste teste para que possa ouvir a mensagem, a não ser que voluntariamente ela queira escutar a mensagem.

O alcance da magia é variável, pois depende do meio de execução e o ambiente no qual está inserido. Assim se o instrumento estiver sendo tocado em meio a muito barulho, é impossível a mensagem chegar a seu(s) destinatário(s). Fica a cargo do Mestre determinar se o som do instrumento chegará ou não até a(s) pessoa(s}, levando em consideração a sua intensidade e a quantidade de outras fontes sonoras que atrapalham a mensagem.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.controle,
			nome: "Controle",
			niveis: [
				{
					id: "0",
					descricao: "Domina morto-vivos de Estágio máximo 1.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Domina morto-vivos de Estágio máximo 2",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Domina morto-vivos de Estágio máximo 3.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Domina morto-vivos de Estágio máximo 4.",
					nivel: 4,
				},
				{
					id: "4",
					descricao: "Domina morto-vivos de Estágio máximo 5.",
					nivel: 5,
				},
				{
					id: "5",
					descricao: "Domina morto-vivos de Estágio máximo 6.",
					nivel: 6,
				},
				{
					id: "6",
					descricao: "Domina morto-vivos de Estágio máximo 7.",
					nivel: 7,
				},
				{
					id: "7",
					descricao: "Domina morto-vivos de Estágio máximo 8.",
					nivel: 8,
				},
				{
					id: "8",
					descricao: "Domina morto-vivos de Estágio máximo 9.",
					nivel: 9,
				},
				{
					id: "9",
					descricao: "domina morto-vivos de Estágio máximo 10.",
					nivel: 10,
				},
			],
			descricao: `Concede ao evocador a capacidade de escravizar mortos-vivos à sua vontade. A quantidade, o Estágio máximo dos mortos-vivos controlados e o preço dos materiais necessários à evocação do feitiço são determinados pelo efeito usado.

Cada vez que o evocador desejar controlar um morto-vivo ele deve evocar este feitiço sobre o mesmo. Caso o morto-vivo tenha sido criado pelo próprio evocador, o sucesso do controle é automático. Caso contrário, o morto-vivo terá direito a fazer uma Resistência à Magia, caso tenha sucesso ele não será controlado e tentará destruir o evocador. Caso falhe na Resistência, ele será controlado.

Um morto-vivo controlado passa a ser um escravo completo do evocador, sempre procurando servir o seu mestre com o melhor de suas capacidades e de seu entendimento. Ele não pode ser convencido a agir contra o seu mestre sem uso de mágica. Jogar esta magia sobre um morto-vivo que já esteja controlado é inútil pois a segunda vez não tem nenhum efeito.

Entretanto o necromante não tem capacidade para dominar mortos-vivos infinitamente, mas quanto maior seu conhecimento sobre a magia Controle maior será essa capacidade. Em termos de regras um necromante pode controlar um número máximo de mortos-vivos até 5 vezes seu total na magia Controle. Assim, um necromante com total 6 em Controle pode dominar no máximo 30 mortos vivos.

Note também que o evocador poderá dominar apenas mortos-vivos até um determinado Estágio. Considera-se que mortos vivos acima deste Estágio não podem ser controlados por este evocador até que ele aprimore seus conhecimentos em Controle.

O evocador não possui nenhuma forma especial de comunicação com o morto-vivo, devendo usar comandos verbais que possam ser entendidos por ele.

Caso o evocador seja morto, os mortos-vivos cumprirão suas últimas instruções e então ficarão livres. O custo da evocação deste feitiço é de cinco peças de cobre por dificuldade. Lembre-se que o encanto só pode ser usado em um morto-vivo de cada vez.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.PERMANENTE },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
		},
		{
			id: MagiaEnum.controleClimatico,
			nome: "Controle Climático",
			niveis: [
				{
					id: "0",
					descricao: "Muda em um passo a condição de um clima local.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Altera em dois passos a condição de um clima local.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Altera em três passos a condição de um clima local.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Altera em quatro passos a condição de um clima local.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Altera em cinco passos a condição de um clima local.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Altera em seis passos a condição de um clima local.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite ao evocador (quando estiver em ar livre) mudar as condições climáticas de uma região de 10 km de raio em poucas rodadas e gerar outros fenômenos naturais para tomar proveito. O evocador é capaz de alterar e controlar o clima podendo manipular diversos elementos relacionados, bem como causar mudanças de precipitação, umidade, temperatura e ventos. A mudança pode ser em um sentido ou em outro, acalmando um Temporal ou o transformando em uma Tempestade. O poder do efeito diz quantos passos desta cadeia o evocador pode alterar.

ÁGUA: Desértico - Árido - Muito Seco - Seco - ideal - Garoa - Chuva Fina - Chuva Forte - Temporal - Tempestade

VENTO: Sem vento - Brisa - Ventos Leves - Ventania - Vendaval - Tornado

TEMPERATURA: Nevasca - Granizo - Neve - Inverno - Frio - Ideal - Quente - Verão - Mormaço - Calor Seco - Calor Escaldante

Outro efeito desta magia é do evocador se beneficiar dos extremos de cada condição climática, isso ocorre quando o Karma utilizado para evocar a magia se mistura com a natureza, dando origem a diversos fenômenos naturais (como Tempestades, Tornados, Nevascas..}, que a cada três rodadas atingem seus inimigos que estejam até 20 metros de distância do evocador, o tipo do dano depende da condição climática, Ex: Tempestade irá gerar um Relâmpago, Tornado um Aeroataque.

Esse novo efeito é integralmente NATURAL, ou seja o evocador não tem controle sobre esse segundo efeito, é simplesmente a natureza mostrando sua força contra seus inimigos e o ataque é aleatório se houver mais de um adversário. O inimigo para ser atingido deve atender o pré-requisito que está destacado em cada efeito máximo do tipo de clima.

Abaixo segue a lista de efeitos práticos que vão acontecer em determinadas situações climática.

Tempestade - Atrai aleatoriamente um Relâmpago por turno, que atinge um inimigo que esteja a menos de 20 metros do evocador e que preferencialmente esteja utilizando armamentos de metal e armaduras pesadas. Ver efeitos de Relâmpagos mesmo nível da magia para calcular dano.

Tornado - Cria uma lufada de vento por turno, que atinge um inimigo que esteja a menos de 20 metros do evocador e que preferencialmente esteja utilizando armaduras leves e medias, e armas de madeira. Ver efeitos de Aeroataque no mesmo nível da magia.

Nevasca - Forma um dardo de gelo por turno, que atinge um inimigo que esteja a menos de 20 metros do evocador e atinge preferencialmente inimigos que estejam usando roupas inadequadas para o frio. Ver efeitos de Dardos de Gelo no mesmo nível da magia para calcular dano.

Calor Escaldante - Molda a energia solar em formas de um feixe extremamente quente, que atinge um inimigo que esteja a menos de 20 metros do evocador e atinge preferencialmente inimigos que estejam usando roupas inadequadas para o calor. Ver efeitos de Feixes Incandescentes no mesmo nível da magia para calcular dano.

Após o término da duração, as condições climáticas ficam livres para voltar às suas tendências antigas e este encanto só pode ser aplicado uma vez por dia no mesmo local.

Outro ponto importante é que o Evocador não controla o resultado que a condição climática irá oferecer, ou seja, será atingido juntamente com seu grupo de amigos indiretamente afetando as condições de sobrevivência, por exemplo: a exposição prolongada ao Calor Escaldante poderá causar desidratação; a Nevasca irá causar problemas na visibilidade, movimentação e possivelmente hipotermia; o Tornado irá dificultar ataques a distância, etc.

OBS* Cada condição climática causa penalidades no movimento e no combate, para isso o Mestre deverá ler o capítulo Combate -> Penalidades Aplicadas ao Movimento - Penalidades Especiais - Clima e Terreno. Para condições climáticas que não estejam descritas o Mestre usará o bom senso.

Tempestade, Nevasca e Calor Escaldante apenas irão gerar um Relâmpago, um Dardo de Gelo e um Feixe Incandescente respectivamente, mesmo que na magia diga que são mais de 1.`,
			alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 3 },
		},
		{
			id: MagiaEnum.controleMecanico,
			nome: "Controle Mecânico ",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 10 },
					descricao:
						"Permite controlar um mecanismo que seria operado com uma mão com uma força normal (Força = 0}, tais como alavancas e fechaduras. Requer concentração.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"Permite controlar um mecanismo que seria operado por uma pessoa e que exige as duas mãos e com uma força média (Força = 2}, tais como lemes de direção, roda para içar uma pequena âncora. Requer concentração.",
					nivel: 3,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"Permite controlar um mecanismo que seria operado por até duas pessoas normais ou por uma pessoa de grande força (Força = 3}, tais como controle de um barco, uma roda para içar uma ancora. Não requer concentração.",
					nivel: 5,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao:
						"Permite controlar um mecanismo que seria operado por até 3 pessoas ou com uma força de um boi (Força = 4}, tais como um pequeno moinho, uma roda para içar uma grande ancora de um navio, uma grande roda para levantar um portão de um castelo. Não requer concentração.",
					nivel: 7,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 100 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao:
						"Permite controlar um mecanismo que seria operado por grandes animais tais como Elefantes ou criaturas gigantes (Força = 6). Não requer concentração.",
					nivel: 9,
				},
			],
			descricao: `Com esta magia é possível o evocador controlar um dispositivo mecânico que seria operado por uma ou mais pessoas ou criaturas. Assim é possível se mover uma alavanca, uma roda ou até mesmo um dispositivo tracionado por animais ou criaturas, tais como um moinho tracionado por bois, uma ponte levadiça, portão levadiço, leme de um barco, uma roda de tortura...

A limitação da magia é que tem de ser um e somente um dispositivo mecânico que esteja dentro do alcance e dentro da força necessária. Mecanismos complexos exigem que o evocador saiba operá-lo ou mesmo exige que saiba a habilidade correspondente. Não é possível se operar mecanismos automáticos tais como moinhos d´água e relógios. A magia apenas permite se operar o mecanismo se este estiver operacional e sem impedimentos. Desta forma, pode-se destrancar uma porta, mas apenas se a chave já se encontrar dentro da fechadura.

A magia funciona como se o evocador estivesse operando diretamente o mecanismo o que requer concentração durante a operação nos níveis mais baixos, mas a partir do nível 5 não é necessário concentração. O alcance da magia varia com o efeito. Caso o mecanismo já esteja sendo operado por alguém, é possível se sobrepor à operação do mecanismo, mas é necessário fazer um teste usando as "Regras para Teste de Atributo" que está no capítulo 2 do Livro de Regras. Note que se a disputa for feita sobre um mecanismo frágil este pode se quebrar, mas isto deve ser decidido pelo Mestre de acordo com a situação.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},

		{
			id: MagiaEnum.conversaoEnergetica,
			nome: "Conversão Energética",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao:
						"Converte 1 ponto de karma das magias evocadas contra o mago. A duração do encanto é de 5 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 7 },
					descricao:
						"Converte até 2 pontos de karma das magias evocadas contra o mago. A duração do encanto é de 7 rodadas.",
					nivel: 3,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 30 },
					descricao:
						"Converte até 2 pontos de karma das magias evocadas contra o mago. A duração do encanto é de 30 rodadas.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 30 },
					descricao:
						"Converte até 3 pontos de karma das magias evocadas contra o mago. A duração do encanto é de 30 rodadas.",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 30 },
					descricao:
						"Converte até 3 pontos de karma das magias evocadas contra o mago. A duração do encanto é de 30 minutos.",
					nivel: 9,
				},
			],
			descricao: `Esta magia cria um campo de força mística em torno do mago, que converte a energia das magias evocadas por outros místicos, em karma para o evocador.

Após o término da evocação do feitiço, uma aura esverdeada tomará todo o corpo do evocador. A partir de então qualquer magia direta ou indireta que seja evocada contra o evocador será convertida em um numero de pontos karma para o mesmo. Note que este feitiço só age sobre a energia de magias de ataque direto (“Sono”, “Corrente”, “Covardia”, etc) ou indireto (“Bola de fogo”, “Dardos de Gelo”, “Raio Elétrico”, etc}, magias como “Apelo”, “Piromanipulação”, “Sombras”, não são direcionadas contra o evocador, logo não podem ser convertidas. Magias que possam ser vinculadas ao evocador (Escuridão, Manipulação de luz, Silencio, etc) também podem ser afetadas, desde que estas sejam evocadas contra o evocador na forma de um ataque direto.

Em quanto esta magia estiver ativada, qualquer dano de ataques indiretos causados por magia, que o mago receba (na EH ou EF}, será convertida em karma para o evocador. Caso o evocador receba um ataque causado por magia direta, é preciso que este resista á magia, caso contrário nenhum ponto de karma é convertido.

Em cada efeito da magia está descrito o numero de pontos de karma que o mago poderá converter. Caso o efeito consiga absorver uma quantidade de karma superior à usada em uma magia contra o evocador, apenas o valor correspondente ao karma gasto para evocá-la poderá ser convertido.

Note que o mago não fica imune ao dano causado pela magia, este será aplicado normalmente.

Caso o mago converta mais pontos de karma do que sua capacidade máxima, os pontos excedentes desaparecerão quando o efeito da magia “Conversão Energética” entrar em colapso. O tempo de duração da magia e a quantidade de pontos de karma que poderão ser convertidos variam com a dificuldade do efeito.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 2 },
		},
		{
			id: MagiaEnum.convivencia,
			nome: "Convivência",
			niveis: [
				{
					id: "0",
					descricao: "O evocador obtém as principais informações de uma vila.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O evocador obtém as principais informações de uma cidade pequena.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O evocador obtém as principais informações de uma cidade média.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O evocador obtém as principais informações de uma cidade grande.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O evocador obtém as principais informações de uma capital.",
					nivel: 9,
				},
			],
			descricao: `Através do encanto Convivência o evocador consegue se adaptar rapidamente aos locais pelos quais circula, podendo conhecer tudo acerca de uma vila ou cidade de forma muito mais rápida do que uma pessoa normal. Depois de evocada a magia, o místico terá um dia para conversar com as pessoas da localidade para que possa obter as informações da região.

Na prática, ao final da duração da magia, o evocador saberá as principais características do local como: regime legal, deuses mais influentes, padrão de comércio, principais lendas e canções, comidas típicas, pessoas mais importantes, as festividades; enfim, o evocador passa a ter conhecimento de todas as principais informações existentes na localidade. Ao critério do Mestre é possível ainda que informações mais sigilosas sejam obtidas. Nesse caso o jogador poderá fazer um ou mais testes de Persuasão de dificuldade determinada pela Mestre, mas influenciada pela interpretação do jogador.

De acordo com o nível, o alcance da magia aumenta, ou seja, o tamanho da localidade vai se tornando maior.`,
			extra: [
				"Todo o conhecimento não vem instantaneamente na mente do místico ao final da evocação, ele irá adquirir esse conhecimento aos poucos e, ao final da evocação, o que ele não pôde ouvir diretamente das pessoas poderá deduzir devido ao seu grande conhecimento já adquirido. Isso significa também que necessariamente o místico deverá estar se comunicando com as pessoas, sendo impossível usar esse feitiço em uma prisão ou em um local aonde as pessoas não são simpáticas ao evocador.",
				"Uma outra observação é que ao final da evocação o conhecimento não fica memorizado na mente do evocador, o que significa que ele poderá esquecer as informações obtidas. Por isso, muitos místicos capazes de usar essa magia costumam carregar consigo muitos pergaminhos para que possam registrar essas informações.",
			],
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
		},
		{
			id: MagiaEnum.convocacao,
			nome: "Convocação",
			niveis: [
				{
					id: "0",
					evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					duracao: { tipo: DuracaoEnum.INSTANTANEA },
					alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
					descricao:
						"O evocador se mostra intimamente a todos os fiéis que estejam dentro do alcance. A magia faz as pessoas verem com clareza a sua causa, suas motivações. Pessoas com estas mesmas motivações terão grande simpatia pelo evocador, facilitando qualquer persuasão. A evocação é imperceptível.",
					nivel: 1,
				},
				{
					id: "1",
					evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
					descricao:
						"Permite ao evocador pedir pequenos favores aos fiéis (refeição, moradia, pequenos serviços, etc) sem ter que pagar por isso.",
					nivel: 2,
				},
				{
					id: "2",
					evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 1 },
					descricao:
						"Convoca 5 pessoas, em boas condições físicas e dispostas a lutar por sua causa, que estejam dentro do alcance da magia. Esta magia atinge primeiro as pessoas comuns (sem EH) e, na falta destas, completa o número necessário com indivíduos especiais (com EH).",
					nivel: 4,
				},
				{
					id: "3",
					evocacao: { tipo: EvocacaoEnum.RODADA, valor: 20 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 3 },
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 2 },
					descricao: "Idem à anterior, mas convoca até 10 pessoas.",
					nivel: 6,
				},
				{
					id: "4",
					evocacao: { tipo: EvocacaoEnum.MINUTO, valor: 10 },
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 5 },
					descricao: "Idem à anterior, mas convoca até 20 pessoas.",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 10 },
					evocacao: { tipo: EvocacaoEnum.HORA, valor: 1 },
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					descricao: "Idem à anterior, mas convoca até 50 pessoas.",
					nivel: 10,
				},
			],
			descricao: `Este milagre permite ao evocador incitar magicamente criaturas de sua mesma religião a tomarem atitudes em favor da Igreja ou de seus Sacerdotes.

Inicialmente, só é possível se distinguir os fiéis da religião ou pedir pequenos favores, mas com os efeitos mais poderosos é possível se montar uma verdadeira guerra santa! Os indivíduos só são convocados caso não estejam fazendo nada essencial (médicos curando, guerreiros no meio da batalha, etc). Ao se completar o encanto, as pessoas convocadas se aproximam instintivamente do local onde está o Sacerdote. Embora a magia possa ser resistida, normalmente os fiéis não tentam resisti-Ia.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.convocacaoAnimal,
			nome: "Convocação Animal",
			niveis: [
				{
					id: "0",
					descricao:
						"Convoca animais totalizando 6 estágios, mas o estágio máximo de cada animal é 2 ou pede um favor a um animal de estágio máximo 2.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Convoca animais totalizando 12 estágios, mas o estágio máximo de cada animal é 4; ou pede um favor a um animal de estágio máximo 4.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Convoca animais totalizando 18 estágios de animais, mas o estágio máximo de cada animal e 6; ou pede um favor a um animal de estágio máximo 6.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Convoca animais totalizando 24 estágios de animais, mas o estágio máximo de cada animal é 8; ou pede um favor a um animal de estágio máximo 8.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Convoca animais totalizando 30 estágios de animais, mas o estágio máximo de cada animal é 10; ou pede um favor a um animal de estágio máximo 10.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Convoca animais totalizando 36 estágios de animais, mas o estágio máximo de cada animal é 12; ou pede um favor a um animal de estágio máximo 12.",
					nivel: 10,
				},
			],
			descricao: `Esse encanto possui dois efeitos. No primeiro o místico entra em comunhão com a natureza e convoca um grupo de animais, que ficarão à sua disposição para realizar uma tarefa especial (sempre algo demorado e/ou complexo). Esse efeito não pode ser evocado por um motivo simples sob pena de perder sua harmonia com a natureza, ficando assim, impossibilitado de usar encantos até redimir o seu erro. Também não pode sujeitar os animais a risco de vida, sob pena de mesma punição. O Mestre irá julgar se o motivo é digno e/ou se os animais estão em perigo. Caso julgue afirmativo, definirá a missão de retratação (só após cumprir essa missão, poderá evocar magia novamente).

São exemplos de tarefas para esse efeito:

- Ajudar o místico a encontrar sobreviventes após o terremoto;

- Ajudar na remoção dos feridos no incêndio;

- Encontrar a planta rara cujo chá cura a praga que assola a vila, etc.

O primeiro efeito desta magia tem evocação de 5 minutos e não dá direito à RM. O nível informará a quantidade de animais convocados de acordo com os estágios. A espécie convocada é de acordo com a região, e o Mestre dirá quais animais apareceram. É possível escolher a espécie que se queira convocar, mas é preciso que o místico tenha conhecimento que ela exista na redondeza (pode ser através de outra magia ou através de observação prévia do local). Caso o místico tenha solicitado espécies que não tenham ao alcance da magia, o Karma será gasto e os animais não aparecerão.

O segundo efeito desta magia tem evocação de 1 rodada e funciona como um favor que o animal presta ao evocador (uma tarefa simples e rápida). Assim que prestar o favor, o encanto acaba. Só convoca um animal e este tem direito a RM. A critério do Mestre, essa RM pode ser dispensada caso seja oferecido um agrado ao animal (troca de favores). Igual ao efeito anterior, não pode oferecer risco ao animal, e a espécie convocada deve existir na área da magia, caso contrário, o Karma é gasto e o animal não aparece.

Por exemplo: o místico está na beira de um rio e sua espada cai no fundo desse rio. Ele usa esse efeito e convoca um boto para buscá-la. A critério do Mestre, antes de evocar a magia, o evocador pode informar que oferecerá um peixe (alimento) para o boto trazer a espada, dispensando a RM. Mas caso não cumpra com o prometido, o Mestre deverá puni-lo com a perda dos poderes, precisando efetuar uma missão de redenção para recuperá-los (o Mestre dirá qual será).

Deverá ser escolhido apenas um efeito na hora de lançar a magia. Esta magia só pode ser evocada em ambiente natural.`,
			alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 7, isRaio: true },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.coordenacao,
			nome: "Coordenação",
			niveis: [
				{
					id: "0",
					descricao:
						"Concede +1 coluna de resolução para o sacerdote e seu grupo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Concede +1 coluna de resolução para o sacerdote e seu grupo e –1 coluna para todos os que os atacam.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Concede +2 colunas de resolução para o sacerdote e seu grupo e –1 coluna para todos os que os atacam.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Concede +2 colunas de resolução para o sacerdote e seu grupo e –2 colunas para todos os que os atacam.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Concede +3 colunas de resolução para o sacerdote e seu grupo e –2 colunas para todos os que os atacam.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Concede +3 colunas de resolução para o sacerdote e seu grupo e –3 colunas para todos os que os atacam.",
					nivel: 10,
				},
			],
			descricao:
				"Com este milagre, o sacerdote de Crisagom percebe rapidamente diversas condições que afetam a batalha como o aspecto geográfico e as condições climáticas que afetam a batalha, obtendo vantagem através disso, coordenando até 4 de seus companheiros, para um melhor posicionamento que torna o grupo como um todo mais poderoso ao passo que prejudicando o outro grupo. Esse milagre concede bônus nas colunas de resolução para o próprio sacerdote e para até mais 4 pessoas e prejudica todas aquelas que os atacam, sem direito a Resistência a Magia.",
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 15 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},

		{
			id: MagiaEnum.corrente,
			nome: "Corrente",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
					descricao: "Paralisa 1 ser.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
					descricao: "Paralisa 1 ser",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 6 },
					descricao: "Paralisa 1 ser.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 6 },
					descricao: "Paralisa 2 seres.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
					descricao: "Paralisa 2 seres.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
					descricao: "Paralisa 3 seres.",
					nivel: 10,
				},
			],
			descricao: `Com este milagre, o evocador cria uma força em forma de correntes mágicas que prendem a vítima, caso esta falhe em sua Resistência à Magia.

A magia prenderá o ser na posição que este estiver, permitindo apenas movimentos mínimos que seriam como se ele realmente estivesse acorrentado. A vítima da magia não pode lançar magias, usar habilidades que necessitem de movimentação de qualquer tipo ou atacar. Apesar disso, ele não está paralisado e continua consciente do que se passa à sua volta, portanto tem direito ao uso de sua Energia Heróica para resistir a golpes.`,
			extra: [
				"Atacar alguém que esteja imobilizado pela Magia Correntes, ou deixar por omissão alguém faça isto, é um ato de covardia e é desaprovados por todos os deuses. Neste caso o sacerdote será punido por seu deus. O Mestre deve ficar atendo a este detalhe.",
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.covardia,
			nome: "Covardia",
			niveis: [
				{
					id: "0",
					descricao: "Causa a perda de 4 pontos de EH.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa a perda de 10 pontos de EH.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Causa a perda de 20 pontos de EH.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Causa a perda de 50 pontos de E.H.",
					nivel: 5,
				},
				{
					id: "4",
					descricao: "Causa a perda de 65 pontos de EH.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Causa a perda de 85 pontos de EH.",
					nivel: 10,
				},
			],
			descricao: `Através dessa magia, o evocador tira o ânimo, a coragem e o heroísmo da vítima.

A pessoa atacada deve fazer sua Resistência à Magia, ou perder o número de pontos de EH indicado nos efeitos abaixo. Caso a vítima seja levada a 0 de EH por essa magia, ela fugirá apavorada por 5 rodadas. Caso a vítima não tenha EH, ela apenas correrá apavorada caso falhe em sua Resistência.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.criacao,
			nome: "Criação",
			niveis: [
				{
					id: "0",
					custo: { prata: 3 },
					descricao: "Cria 1 morto-vivo de estágio 1.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { prata: 6 },
					descricao: "Cria 1 morto-vivo de estágio 2.",
					nivel: 2,
				},
				{
					id: "2",
					custo: { prata: 9 },
					descricao: "Cria 1 morto-vivo de estágio 3.",
					nivel: 3,
				},
				{
					id: "3",
					custo: { prata: 12 },
					descricao: "Cria 1 morto-vivo de estágio 4.",
					nivel: 4,
				},
				{
					id: "4",
					custo: { prata: 15 },
					descricao: "Cria 1 morto-vivo de estágio 5.",
					nivel: 5,
				},
				{
					id: "5",
					custo: { ouro: 2 },
					descricao: "Cria 1 morto-vivo de estágio até 6.",
					nivel: 6,
				},
				{
					id: "6",
					custo: { ouro: 3 },
					descricao: "Cria 1 morto-vivo de estágio até 7.",
					nivel: 7,
				},
				{
					id: "7",
					custo: { ouro: 4 },
					descricao: "Cria 1 morto-vivo de estágio até 8.",
					nivel: 8,
				},
				{
					id: "8",
					custo: { ouro: 5 },
					descricao: "Cria 1 morto-vivo de estágio até 9.",
					nivel: 9,
				},
				{
					id: "9",
					custo: { ouro: 7 },
					descricao: "Cria 1 morto-vivo de estágio até 10.",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite que o evocador crie um morto-vivo por meio de um complexo ritual. O tipo de morto-vivo criado depende da dificuldade do efeito usado. Para evocar este efeito, o necromante deve dispor de um corpo morto, que deverá ser de acordo com o tipo de morto-vivo que se deseja criar (ver descrição das criaturas mortos-vivos).

O nível da magia usada diz qual o estágio do morto-vivo a ser criado, assim, para criar um esqueleto, que possui nível 1, deve-se usar Criação 1. Caso o mago use Criação acima do necessário ele gastará os recursos do nível usado mas o morto-vivo não será mais poderoso.

O morto-vivo criado é completamente independente do seu criador e agirá de acordo com a sua natureza, o que geralmente implica em atacar o evocador. Se desejar dominar o morto-vivo, a magia Controle deve ser usada. Este feitiço pode ser evocado conjuntamente com Controle.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.PERMANENTE },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.criptogramaMistico,
			nome: "Criptograma Místico ",
			niveis: [
				{
					id: "0",
					evocacao: { tipo: EvocacaoEnum.RODADA, valor: 3 },
					descricao:
						"Faz um texto ou desenho em uma folha ficar invisível a olhos não treinados. Mesmo textos já escritos podem ser afetados por esta magia. Qualquer mago capaz de usar este nível sentirá, caso toque um material encantado por Criptograma Místico 1, que a magia está sendo usada. Para ler é preciso usar o mesmo.",
					nivel: 1,
				},
				{
					id: "1",
					evocacao: { tipo: EvocacaoEnum.HORA, valor: 1 },
					custo: { descricao: "1 moeda de ouro por pena" },
					descricao:
						"Com este nível é possível criar uma ou mais penas e tinta. O texto escrito com esse material poderá ser visto somente por aqueles que participaram do ritual, ninguém mais.",
					nivel: 2,
				},
				{
					id: "2",
					evocacao: {
						tipo: EvocacaoEnum.VARIAVEL,
						descricao:
							"Varia de 1 minuto para desenhos simples a 10 minutos para desenhos complexos",
					},
					descricao:
						"O mago consegue transmitir para o papel com perfeição qualquer imagem visualizada por ele. O usuário entra num estado de transe e seus dedos “desenham” na superfície do papel a imagem. Os detalhes, a cor e a nitidez do desenho vão depender do quão bem a imagem ficou gravada na memória do usuário.",
					nivel: 4,
				},
				{
					id: "3",
					evocacao: {
						tipo: EvocacaoEnum.VARIAVEL,
						descricao:
							"Varia de 1 minuto para desenhos simples a 10 minutos para desenhos complexos",
					},
					descricao:
						"Idem ao anterior mas o mago pode fazer um desenho extraído do subconsciente de outro ser, fazendo com que ele pense na figura que o evocador quer extrair. Para isso o mago toca com uma das mãos a cabeça do alvo e com a outra começa o desenho. O alvo pode resistir com um teste se resistência à magia se assim desejar e, caso falhe (ou concorde}, ambos entram em estado de transe e a mente do alvo ficará fixada nesta imagem até que o mago acabe o desenho.",
					nivel: 6,
				},
				{
					id: "4",
					custo: { ouro: 6 },
					descricao:
						"Esse interessante ritual deve ser usado em um livro ou pergaminho que após confeccionado pode ao desejo do mago gravar magicamente, em suas folhas, toda a conversação realizada próxima a ele por um máximo de uma hora. Após este período o livro deverá ser encantado novamente. O livro capta palavras num raio de até 25 metros. As palavras serão escritas com a letra do conjurador e no sentido em que o mesmo entenderia essa conversa se estivesse presente. Existe uma cor para cada timbre de voz, sendo fácil uma visualização de quem diz cada frase.",
					nivel: 8,
				},
				{
					id: "5",
					custo: { ouro: 6 },
					descricao:
						"Esse nível é um ritual conhecido como folhas gêmeas. Este nível permite encantar duas folhas de modo que, após o encantamento ao escrever em um deles, a outra ficará escritas da mesma forma, independente da distância que as duas folhas estiverem. Note que qualquer acidente com uma das folhas (fogo, água, tempo, sangue}, serão assimilados pelas outras.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto os magos são capazes de criar ou enfeitiçar pergaminhos para enviar e receber informações com mais segurança.

Os Magos geralmente usam este feitiço para guardar os segredos de uma forma mais segura ou, em certos níveis, para espionar ou descobrir espiões. Alguns usam Criptograma Místico para escrever livros que somente ele e seus companheiros possam ler.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.ANO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.curasEspirituais,
			nome: "Curas Espirituais ",
			niveis: [
				{
					id: "0",
					descricao: "Cura 6 pontos de EH.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Cura 14 pontos de EH.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Cura 30 pontos de EH.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Cura 50 pontos de EH.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"A força dessa magia não somente cura o heroísmo, como também expulsa espíritos estranhos do corpo do ser tocado. O espírito que esteja possuindo o corpo deve fazer uma Resistência a essa magia, se falhar será expulso. Além disso, está magia cura 75 pontos de EH.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"A força dessa magia não somente cura o heroísmo, como também expulsa espíritos estranhos do corpo do ser tocado. O espírito que esteja possuindo o corpo deve fazer uma Resistência a essa magia, se falhar será violentamente expulso, recebendo 50 pontos de dano. Além disso, esta magia Cura 100 pontos de EH do ser tocado.",
					nivel: 10,
				},
			],
			descricao: `Lutas mortais, fúria, medo, ferimentos... Diversas situações podem afetar o espírito dos aventureiros de maneira a aproximá-los da morte. Curas Espirituais é um bálsamo para a alma destes heróis cansados, renovando-os para a batalha.

Esse milagre recupera imediatamente a EH do ser tocado. Uma cura, que levaria horas ou dias se faz em um instante. O processo, ainda assim, é apenas uma recuperação, pontos de cura que levem a EH acima do máximo da criatura curada são perdidos.

Nos níveis mais altos este milagre é capaz de se afetar espíritos estranhos no corpo do ser tocado, ou seja, agem como um exorcismo. O espírito que esteja possuindo o corpo deve fazer uma Resistência a magia contra o nível usado, se falhar será expulso ou destruído.

Como o alcance da magia é o toque, se faz necessário que o sacerdote e a pessoa a ser curada permaneçam completamente imóveis durante as duas rodadas de evocação do milagre.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 2 },
		},

		// 75
		{
			id: MagiaEnum.curasFisicas,
			nome: "Curas Físicas ",
			niveis: [
				{
					id: "0",
					descricao: "Cura 2 pontos de dano na EF.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Cura 7 pontos de dano na EF.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Cura 12 pontos de dano na EF.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Cura 25 pontos de dano na EF.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Cura 45 pontos de dano na EF.",
					nivel: 9,
				},
			],
			descricao: `Esta magia cura instantaneamente ferimentos, reparando total ou parcialmente qualquer dano na EF do favorecido com o milagre. A quantidade de dano que é restaurada depende do Efeito utilizado.

Note que a EF de uma criatura não pode ultrapassar o máximo que esta pessoa tem.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.PERMANENTE },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.curasHeroicas,
			nome: "Curas Heróicas ",
			niveis: [
				{
					id: "0",
					nivel: 1,
					descricao: "Cura um valor máximo de 16 pontos de EH.",
				},
				{
					id: "1",
					nivel: 2,
					descricao: "Cura um valor máximo de 24 pontos de EH.",
				},
				{
					id: "2",
					nivel: 4,
					descricao: "Cura um valor máximo de 36 pontos de EH.",
				},
				{
					id: "3",
					nivel: 6,
					descricao: "Cura um valor máximo de 48 pontos de EH.",
				},
				{
					id: "4",
					nivel: 8,
					descricao: "Cura um valor máximo de 64 pontos de EH.",
				},
				{
					id: "5",
					nivel: 10,
					descricao: "Cura um valor máximo de 80 pontos de EH.",
				},
			],
			descricao: `Durante os combates, o heroísmo dos lutadores é facilmente abatido. O cansaço e a perda de confiança são mortais em certos casos.

Esse milagre recupera imediatamente a EH do ser tocado. Uma cura, que levaria horas ou dias, se faz em um instante. O processo, ainda assim, é apenas uma recuperação. Pontos de cura que levem a EH acima do máximo da criatura curada são perdidos.

Para efetuar a cura, o sacerdote deverá fazer uma rolagem na coluna do nível que possuir na magia. De acordo com o resultado obtido na rolagem, certa quantia de EH será curada. A quantidade recuperada será dada pela fração conseguida na rolagem (exatamente como são aplicados os danos}, ou seja, se um efeito é capaz de curar um valor máximo de 24 pontos de EH, isso quer dizer que as frações de recuperação de acordo com a rolagem serão as seguintes: 100% = 24, 75% = 18, 50% = 12 e 25% = 6. Caso o alvo não queira ser curado joga-se resistência à magia e usam-se os resultados da tabela normalmente. Um resultado crítico (cor cinza) será contado como critico de magia podendo curar mais que o descrito no efeito. Em caso de erro ou falha (branco e verde) nenhum ponto de EH é recuperado.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
	];
}
