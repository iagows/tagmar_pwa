import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.barreiraMistica,
			nome: "Barreira Mística",
			niveis: [
				{
					id: "0",
					descricao:
						"Afeta um total de criaturas cujos Estágios somados não excedam 2.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Afeta um total de criaturas cujos Estágios somados não excedam 3.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Afeta um total de criaturas cujos Estágios somados não excedam 6.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Afeta um total de criaturas cujos Estágios somados não excedam 9.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Afeta um total de criaturas cujos Estágios somados não excedam 12.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Afeta um total de criaturas cujos Estágios somados não excedam 15.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o evocador cria uma barreira mística invisível que o protege da aproximação de qualquer ser que tenha Aura (mesmo que negativa). Aquele que tentar se aproximar a menos de 3 metros do evocador deve fazer uma resistência à magia. Aqueles que conseguirem poderão se aproximar, mas aqueles que falharem serão forçados a se manter afastados, pelo menos, 5 metros de distância. Este encantamento não impede que alguém use um ataque a distância, seja ele mágico ou não (flechas, lanças, raio elétrico, bola de fogo, etc.).

A quantidade de criaturas afetadas é determinada pelos efeitos. Quando várias criaturas/pessoas entrarem no raio de ação da magia e a quantidade exceder a do poder do efeito, o evocador pode escolher quem ele deseja que seja afetado. A quantidade de pessoas/criaturas que exceder a capacidade do efeito não será afetada, podendo se aproximar livremente. É possível evocar novamente a magia caso alguém tenha resistido, mas quando a quantidade máxima for atingida não é possível mais se evocar a magia. O evocado poderá escolher não afetar alguém a sua livre escolha e não é necessário se evocar esta magia somente quando alguém se aproxima, mas quando a duração se esgotar os efeitos terminam.

Após a evocação não é necessário manter a concentração nesta magia, podendo o evocador fazer qualquer tipo de ação.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.bencao,
			nome: "Bênção",
			niveis: [
				{
					id: "0",
					descricao:
						"Um companheiro do Sacerdote aumenta em 1 sua coluna de ataque.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Três companheiros do Sacerdote aumentam em 1 sua coluna de ataque.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Três companheiros do Sacerdote aumentam em 2 sua coluna de ataque.",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"O Sacerdote sacrifica um pouco de seu vigor para tornar um companheiro seu mais heróico e combativo. O Sacerdote perde 5 pontos de sua EH mas o alvo da magia ganha 15 pontos de EH, podendo ir além de seu máximo. Caso, ao terminar a duração do milagre, o ser abençoado ainda tenha mais EH que o seu máximo normal, esses pontos excedentes são perdidos. Além do ganho de EH, o abençoado também aumenta em 2 sua coluna de ataque.",
					nivel: 4,
				},
				{
					id: "4",
					descricao:
						"Três companheiros do Sacerdote aumentam em 3 sua coluna de ataque.",
					nivel: 5,
				},
				{
					id: "5",
					descricao:
						"O Sacerdote sacrifica um pouco de seu vigor para tornar um companheiro seu mais heróico e combativo. O Sacerdote perde 5 pontos de sua EH mas o alvo da magia ganha 30 pontos de EH, podendo ir além de seu máximo. Caso, ao terminar a duração do milagre, o ser abençoado ainda tenha mais EH que o seu máximo normal, esses pontos excedentes são perdidos. Além do ganho de EH, o abençoado também aumenta em 3 sua coluna de ataque.",
					nivel: 6,
				},
				{
					id: "6",
					descricao:
						"Três companheiros do Sacerdote aumentam em 4 sua coluna de ataque.",
					nivel: 7,
				},
				{
					id: "7",
					descricao:
						"cinco companheiros do sacerdote aumentam em 5 sua coluna de ataque.",
					nivel: 8,
				},
				{
					id: "8",
					descricao:
						"O Sacerdote sacrifica um pouco de seu vigor para tornar três companheiros seus mais heróicos e combativos. O Sacerdote perde 15 pontos de sua EH mas três de seus companheiros ganham 30 pontos de EH, podendo ir além de seu máximo. Caso, ao terminar a duração do milagre, o ser abençoado ainda tenha mais EH que o seu máximo normal, esses pontos excedentes são perdidos. Além do ganho de EH, os abençoados também aumentam em 5 sua coluna de ataque.",
					nivel: 9,
				},
				{
					id: "9",
					descricao:
						"sete companheiros do sacerdote aumentam em 7 sua coluna de ataque.",
					nivel: 10,
				},
			],
			descricao: `O Sacerdote pede a seu deus que auxilie seus companheiros na batalha causando um aumento no vigor e na coragem de todos os afetados. Inicialmente, este milagre apenas melhora a capacidade de combate, mas em determinados níveis afeta também a Energia Heróica dos abençoados.

De qualquer forma, os efeitos não são cumulativos, não se pode abençoar seguidas vezes a mesma pessoa. Note que este milagre serve para abençoar os companheiros do Sacerdote e não a ele mesmo.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.bencaoSelvagem,
			nome: "Bênção Selvagem",
			niveis: [
				{
					id: "0",
					nivel: 1,
					descricao:
						"Qualquer ataque realizado por animais em quem recebe a benção passa a ter redutor de -2 colunas. O redutor pela exaustão é de -2 por 15 minutos.",
				},
				{
					id: "1",
					nivel: 2,
					descricao:
						"Idem ao anterior, porém Técnicas de Combate também recebem o mesmo redutor de -2 colunas. O redutor pela exaustão é de -2 por 30 minutos.",
				},
				{
					id: "2",
					nivel: 4,
					descricao:
						"Idem ao anterior, porém o redutor é de -4. A penalidade por exaustão é de -2 por um hora.",
				},
				{
					id: "3",
					nivel: 6,
					descricao:
						"Idem ao anterior, porém o redutor é de -6 . A penalidade por exaustão é de -3 por duas horas.",
				},
				{
					id: "4",
					nivel: 8,
					descricao:
						"Idem ao anterior, porém o o redutor é de -8 . A penalidade por exaustão é de -4 por 3 horas.",
				},
				{
					id: "5",
					nivel: 10,
					descricao:
						"Idem ao anterior, porém o redutor é de -10. A penalidade por exaustão é de -5 por 4 horas.",
				},
			],
			descricao: `Através deste encanto, o místico cria uma aura protetora em torno de algumas pessoas e/ou companheiros animais do evocador. Esta aura será imperceptível e protegerá os alvos da magia causando redutores para qualquer ação hostil feita por animais de qualquer porte contra eles. Note que é impossível conjurar Bênção Selvagem em quem não queira receber o encanto, ou que já esteja sobre seu efeito. A magia tem o limite de até 5 pessoas e/ou animais.

Ao término do encanto, o evocador sente uma grande exaustão e recebe um redutor conforme indicado no efeito usado. Esse redutor não pode ser recuperado de forma mágica.`,
			extra: [
				"Esta magia só pode ser usada no próprio evocador se pelo menos um dos recebedores da benção seja também um de seus animais com qual ele possua Elo Animal. O redutor de exaustão se aplica às colunas de ataque (para todos os níveis de efeitos) e nas Técnicas de Combate (nos efeito 2 a 10)",
			],
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.CENA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.biogerminacao,
			nome: "Biogerminação",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					descricao:
						"Causa um efeito plástico menor como a aparição de um pequeno galho verde (0,3 cm de diâmetro e 5cm de comprimento) em uma parte do corpo (braço, testa, etc.) não causando dores.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao:
						"Causa a aparição de folhas na superfície da pele (5% da superfície corporal) causando dores menores, mas sem efeitos para combate.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.DIA, valor: 2 },
					descricao:
						"Causa a aparição de pequenos galhos (1cm de diâmetro; 10cm de comprimento) com folhas na superfície da pele. Este efeito abrange 15% da superfície corporal. Causa dores e um ajuste de –3 para combate e magia.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.DIA, valor: 3 },
					descricao:
						"Causa a aparição de galhos médios e ramificados (2cm de diâmetro, 15cm de comprimento) com folhas e flores na superfície da pele. Este efeito abrange 30% da superfície corporal, causando dores intensas com um ajuste de –5 para combate e magia.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.DIA, valor: 4 },
					descricao:
						"Causa a aparição de galhos grandes (3 cm de diâmetro, 20 de comprimento) e espinhosos com muitas ramificações, folhas e flores. Este efeito abrange 60% da superfície corporal, causando dores horríveis, um número avançado de galhos e espinhos impede a utilização de armaduras, elmos e escudos. A Energia Heróica é reduzida à metade e a vítima recebe um ajuste de –7 para combate, magia e habilidades.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao:
						"Causa a aparição de galhos espinhosos muito grandes (4cm de diâmetro; 30 cm de comprimento) com muitas ramificações, folhas e flores. Além disso, a pele da vítima é ressecada transformando-se em casca de árvore e as ramificações espinhosas se amparam enroscando-se nos membros e impossibilitando quaisquer movimentos, caracterizando um quadro horrível. O avançado grau de comprometimento do corpo implica em um teste de Resistência Física contra força de ataque igual à quantidade de Karma usado (o rolamento deve ser secreto}, em caso de falha a vítima morre ao final do 3º dia se o encanto não for quebrado.",
					nivel: 10,
				},
			],
			descricao: `Esta aterrorizante magia castiga um ser (caso falhe em sua resistência à magia}, condenando-o a uma dor horrível, podendo matar em seu efeito mais poderoso.

No ser afetado será implantada uma semente que se desenvolverá e utilizará o corpo da vítima como hospedeiro até que a duração do feitiço se esgote. Os efeitos da magia acontecem imediatamente após o alvo falhar em sua resistência à magia.

O efeito plástico deste feitiço causa um quadro espantoso fazendo com que o recipiente da magia seja alvo de escárnio. O tipo de vegetal implantado e as conseqüências de sua estadia variam com a dificuldade do efeito usado. Se alguma parte da planta parasita for arrancada, outra irá crescer imediatamente substituindo esta.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 2 },
		},
		{
			id: MagiaEnum.bloqueio,
			nome: "Bloqueio",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 3, isRaio: true },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					custo: { ouro: 2 },
					descricao:
						"Impede a entrada de criaturas animadas que sejam de estágio 2 ou inferior. A área de atuação da magia é de 3m de raio.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 5, isRaio: true },
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					custo: { ouro: 4 },
					descricao:
						"Impede a entrada de criaturas animadas que sejam de estágio 4 ou inferior. A área de atuação da magia é de 5m de raio.",
					nivel: 2,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 7, isRaio: true },
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 2 },
					custo: { ouro: 8 },
					descricao:
						"Impede a entrada de criaturas animadas e construídas que sejam de estágio 7 ou inferior. A área de atuação da magia é de 7m de raio.",
					nivel: 4,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 15, isRaio: true },
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					custo: { ouro: 12 },
					descricao:
						"Impede a entrada de criaturas animadas e construídas que sejam de estágio 10 ou inferior. A área de atuação da magia é de 15m de raio.",
					nivel: 6,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 25, isRaio: true },
					duracao: { tipo: DuracaoEnum.MES, valor: 6 },
					custo: { ouro: 16 },
					descricao:
						"Impede a entrada de criaturas animadas e construídas que sejam de estágio 13 ou inferior. A área de atuação da magia é de 25m de raio.",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.METRO, valor: 50, isRaio: true },
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					custo: { ouro: 20 },
					descricao:
						"Impede a entrada de criaturas animadas e construídas que sejam de estágio 16 ou inferior. A área de atuação da magia é de 50m de raio A duração do efeito é de 1 ano e 1 dia.",
					nivel: 10,
				},
			],
			descricao: `Esta magia cria um campo de força mística que interfere nos encantos de animação impedindo a entrada de criaturas animadas na área de atuação da magia. Qualquer criatura animada (Armaduras Animadas, variações de Golens, Estatuas Animadas, Gárgulas, Árvores Animadas, Corpos Necroanimados etc.) que tentar entrar na área de atuação do bloqueio deverá realizar um teste de resistência à magia, caso falhe não poderá entrar na área.

A área de atuação da magia, o poder das criaturas afetadas (estágio) e a duração do encanto variam com a dificuldade do efeito.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.boato,
			nome: "Boato",
			niveis: [
				{
					id: "0",
					descricao: "A vítima passará a informação para 3 pessoas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "A vítima passará a informação para 6 pessoas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "A vítima passará a informação para 15 pessoas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "A vítima passará a informação para 40 pessoas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "A vítima passará a informação para 80 pessoas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "A vítima passará a informação para 150 pessoas.",
					nivel: 10,
				},
			],
			descricao: `Com este poderoso feitiço, o evocador pode espalhar um boato de forma que seja tido como verdade por aqueles que o ouviram, manipulando o pensamento destas pessoas.

Isso se dá da seguinte forma: primeiramente o evocador deverá conversar por, no mínimo, 5 minutos com uma, e somente uma pessoa sobre o assunto que deverá se tornar o boato. No final da conversa o evocador deverá dizer uma frase, geralmente resumindo o que ele disse até então, de no máximo 20 palavras que será justamente o boato. A pessoa então deverá fazer um teste de Resistência à Magia e, se falhar, assimilará o boato como verdade, sentindo a necessidade de passar essa informação para outras pessoas.

O número de pessoas que ela necessariamente deverá passar a informação adiante, variará de acordo com o nível da magia. Quando a vítima espalhar o boato para o número máximo de pessoas descrito no nível, ela não sentirá mais a necessidade de passar adiante a informação, embora ela possa fazê-lo caso seja de seu desejo. O boato espalhado pela vítima necessariamente deverá ser fiel ao transmitido do evocador a ela.

Além disso, a vítima após uma hora de enfeitiçada esquecerá quem foi a pessoa que lhe passou a informação. Ela não se lembrará de seu nome nem rosto nem qualquer outro elemento que possa identificá-la, mas saberá que veio de uma fonte altamente "confiável".`,
			extra: [
				"As pessoas as quais o boato for transmitido podem acreditar ou não no que a vítima disser. Isso é uma decisão particular de cada pessoa. Por conta disso, é sempre importante para o evocador escolher a pessoa certa, que tenha mais credibilidade o possível, para que passe o boato. Assim, se a vítima for uma criança, muitas pessoas possivelmente não acreditarão no que ela disser, alegando ser fruto da imaginação dela. No entanto, se a vítima for um sacerdote respeitado, as pessoas tenderão a ser muito mais receptivas ao que ele disser.",
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 20 },
		},
		{
			id: MagiaEnum.bolaDeFogo,
			nome: "Bola de Fogo",
			niveis: [
				{
					id: "0",
					descricao:
						"Causa 12 pontos de dano em uma esfera de 1 metro de raio.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Causa 16 pontos de dano em uma esfera de 2 metros de raio.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Causa 20 pontos de dano em uma esfera de 4 metros de raio.",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"Causa 28 pontos de dano em uma esfera de 6 metros de raio.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"Causa 32 pontos de dano em uma esfera de 10 metros de raio.",
					nivel: 7,
				},
				{
					id: "5",
					descricao:
						"Causa 36 pontos de dano em uma esfera de 10 metros de raio.",
					nivel: 9,
				},
			],
			descricao: `Essa magia cria uma pequena bola de fogo que voa da mão do evocador em direção a um alvo escolhido. Ao se aproximar do alvo ela explode, causando dano na área de explosão.

Veja que o encanto não tem precisão, podendo atingir qualquer um na área de efeito da explosão. Isto é resolvido com um ataque individual em cada um que estiver na área de efeito da magia. O dano máximo é dito no efeito.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.bote,
			nome: "Bote",
			niveis: [
				{
					id: "0",
					descricao:
						"O bote permite um Ataque Oportuno por uma rodada (mesmo sem obter surpresa) e caso obtenha surpresa (parcial ou completa) na próxima rodada poderá fazer mais um Ataque Oportuno.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas caso acerte 100% na EH ou acerte a EF do oponente, este deve fazer um teste de moral fácil, caso falhe fugirá do combate.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas caso obtenha surpresa (parcial ou completa) poderá fazer nas próximas duas rodadas um Ataque Oportuno (um por rodada). O teste de moral é médio.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas o teste de moral é difícil. Caso o oponente falhe no teste de moral, os companheiros dele devem fazer um teste fácil de moral, e se falharem fugirão também.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas caso obtenha surpresa (parcial ou completa) poderá fazer nas próximas três rodadas um Ataque Oportuno (um por rodada). O teste de moral é muito difícil para o oponente e médio para os companheiros deles.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas o teste de moral é absurdo para o oponente e difícil para os companheiros dele.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto, o evocador traz sobre si o espírito de alguns animais predadores, que lhe concedem uma manobras especial: o Bote, que consiste em realizar um ataque no momento mais oportuno sobre sua vítima. Para isto, antes de poder evocar esta magia é necessário que ele possua um amuleto composto por alguma parte destes tipos de animais, como cobras, felinos, crocodilos, etc. O amuleto deve ser criado pelo próprio evocador com partes do animal morto (há no máximo um dia}, sendo que ele não pode ter matado o animal apenas para o propósito de confeccionar o amuleto.

Para realizar o bote, é necessário estar no máximo a 10 metros de distância da vítima. Caso a vítima não perceba sua presença (Surpresa parcial ou completa) ou esteja em uma situação desfavorável (caído no chão, de costas, tropeção, etc}, o efeito do bote é prolongado de acordo com nível do encanto utilizado e o bônus de Ataque oportuno pode ser usado em todos os ataques enquanto durar a magia; caso não pegue o oponente de surpresa ou em situação desfavorável, o encanto só terá efeito em um ataque, podendo usar o Ataque Oportuno mesmo quando não poderia.

Por se tratar de uma manobra impetuosa, o místico ganha automaticamente a iniciativa dos ataques enquanto o encanto estiver vigente. Os ajustes deste encanto afetarão apenas o evocador e a vítima do seu bote. Outro efeito da magia é assustar o oponente e os companheiro dele, o que poderá fazer com que fuja(m) caso falhe(m) num teste de moral.`,
			extra: [
				"Esta magia só pode ser usada com armas de corpo-a-corpo, e após ser evocada deve-se realizar o ataque em no máximo 3 rodadas, senão perde o efeito. É importante ressaltar que esta magia não estende a duração do efeito de Surpresa Completa (ataque direto na EF}, assim sendo, após o primeiro ataque deve-se considerar os Ataques Oportunos extras como se fosse surpresa parcial (dano na EH) até o termino dos efeitos da magia. Este encanto só pode ser usado contra 1 oponente.",
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.bravura,
			nome: "Bravura",
			niveis: [
				{
					id: "0",
					descricao:
						"Torna alguém imune a magias que causem pavor de nível 1 e ainda ganha 4 pontos de EH, podendo ir além do máximo; ou anula os efeitos de magias que causem pavor de nível 1.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Torna alguém imune a magias que causem pavor de nível 2 e ainda ganha 8 pontos de EH, podendo ir além do máximo; ou anula os efeitos de magias que causem pavor de nível 2.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Torna alguém imune a magias que causem pavor de nível 4 e ainda ganha 12 pontos de EH, podendo ir além do máximo; ou anula os efeitos de magias que causem pavor de nível 4.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Torna alguém imune a magias que causem pavor de nível 6 e ainda ganha 16 pontos de EH, podendo ir além do máximo; ou Anula os efeitos de magias que causem pavor de nível 6.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Torna alguém imune a magias que causem pavor de nível 8 e ainda ganha 20 pontos de EH, podendo ir além do máximo; ou Anula os efeitos de magias que causem pavor de nível 8.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Torna alguém imune a magias que causem pavor de nível 10 e ainda ganha 24 pontos de EH, podendo ir além do máximo; ou Anula os efeitos de magias que causem pavor de nível 10.",
					nivel: 10,
				},
			],
			descricao: `Com esse milagre o sacerdote torna alguém ou a si próprio mais bravo, fazendo com que o beneficiado se torne imune a magias que causem pavor, como Medo e Covardia e ainda ganhe uma EH extra que pode ir além do máximo.

Este milagre pode ser evocado durante o turno de combate do sacerdote sem contar como uma ação.

A imunidade a magias que causem pavor, funciona do mesmo jeito que a Magia Proteção Mental, ou seja, o nível de “Bravura” utilizado torna o personagem imune a magias que causem pavor cujo nível seja igual ou inferior ao do milagre. Assim com Bravura 4, um personagem está imune a Medo 1, 2 e 4 mas não tem qualquer efeito para Medo 6 por exemplo.

Se essa magia for lançada sobre um alvo vítima dos efeitos de fuga causados pelas magias Medo ou Covardia, esses efeitos podem ser imediatamente quebrados, dependendo da dificuldade do efeito usado.

Caso não queira receber os efeitos da Bravura, o alvo pode fazer um teste de RM. Uma criatura sob efeito Bravura estará motivada e determinada a enfrentar situações de risco. Desta forma, para fugir de uma batalha ela precisa ser bem sucedida em um teste de RM ou continuará em combate até que seus inimigos sejam derrotados.

OBS: Na rodada que esta magia é evocada não é permitido que o evocador faça outra magia. Nas rodadas subsequentes na qual a magia continua fazendo efeito esta restrição não se aplica e o evocador pode evocar outras magias normalmente`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.HORA, valor: 2 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
	];
}
