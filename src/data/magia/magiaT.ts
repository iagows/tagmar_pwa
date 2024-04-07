import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.telecinese,
			nome: "Telecinese",
			niveis: [
				{
					id: "0",
					descricao:
						"Move 5kg, arrasta 10 kg e derruba 1 5kg. Afeta apenas 1 alvo",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Move 10kg, arrasta 20 kg e derruba 30kg. Afeta apenas 1 alvo",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Move 20kg, arrasta 40 kg e derruba 60kg. Afeta apenas 1 alvo",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"Move 50kg, arrasta 100 kg e derruba 150 kg. Afeta até 2 alvos",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"Move 100kg, arrasta 200 kg e derruba 300 kg. Afeta até 3 alvos",
					nivel: 7,
				},
				{
					id: "5",
					descricao:
						"Move 200 kg, arrasta 400 kg e derruba 600 kg. Afeta até 4 alvos",
					nivel: 9,
				},
			],
			descricao: `Esta magia cria uma força invisível capaz de mover objetos. Essa força é mantida pela concentração do evocador.

Essa força pode, basicamente, fazer três coisas: derrubar, arrastar ou mover. ""Mover"" é o controle completo dos movimentos do objeto para cima, para os lados, para baixo, etc. ""Arrastar"" é mover penosamente junto ao solo, e derrubar é apenas tirar o objeto de sua posição de equilíbrio. Os objetos são movidos ou arrastados à velocidade de 5 metros por rodada. Se esse encanto for usado contra um ser com aura, ele tem direito de resistir à magia.

Note que em alguns efeitos desta magia, o evocador pode optar por manipular mais de 1 objeto e/ou criatura com uma só evocação. Quando isso ocorrer, a força da magia atuará sobre a soma das massas dos alvos. Sendo assim, se o efeito 7 for usado contra 3 alvos que pesem respectivamente: 50kg, 60kg e 70 kg. O Maximo que a magia poderá fazer é arrasta-los, já que o valor da soma das massas é igual a 180kg (50+60+70=180kg). Caso a soma dos pesos dos alvos seja superior a capacidade do nível usado, nenhum efeito será aplicado e o karma será gasto inutilmente.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 30,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 10,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.tensao,
			nome: "Tensão",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria uma tensão que confere um bônus de +1 nas jogadas de iniciativa. Ao término da magia, todas as pessoas sob tensão receberão 1 ponto de dano na EH.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria uma tensão que confere um bônus de +2 nas jogadas de iniciativa. Ao término da magia, todas as pessoas sob tensão receberão 3 pontos de dano na EH.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Cria uma tensão que confere um bônus de +3 nas jogadas de iniciativa. Ao término da magia, todas as pessoas sob tensão receberão 5 pontos de dano na EH. Além disso, todos os testes da habilidade Usar os Sentidos terão 1 nível a menos de dificuldade.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas o bônus é de +4 e o dano recebido na EH é 7.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas o bônus é +5 e o dano recebido na EH é 10. Além disso, a tensão gera uma atenção tão grande que a pessoa conseguirá se desviar com mais facilidade de ataques. Na prática todas as pessoas sob tensão ganham +1 na sua defesa.",
					nivel: 9,
				},
			],
			descricao: `A música é capaz de provocar diversos sentimentos, entre os quais a tensão. Em um estado de tensão, a pessoa fica mais atenta e cautelosa, calculando muito bem suas ações. No entanto, a tensão não costuma durar muito, normalmente a pessoa após um tempo começa a relaxar. Com a magia Tensão, o evocador toca uma música em seu instrumento ou diz algumas palavras que gerarão uma tensão, de intensidade crescente de acordo com o nível, a todos que estiverem a até 10 metros de distância dele caso falhem na sua Resistência à Magia.

Uma vez tensa, a pessoa estará muito mais atenta, o que na prática, lhe garante um bônus na iniciativa em combate e, nos níveis mais altos, facilita a habilidade Usar os Sentidos.

Observe que as vítimas do encanto podem voluntariamente falhar na Resistência à Magia. Isso geralmente é feito pelos companheiros do grupo que sabem que com sua música, o evocador consegue mantê-los atentos. Outras pessoas, no entanto, geralmente procurarão resistir ao encanto. Vale lembrar que embora essa magia traga benefícios, a tensão é um sentimento ruim e muito incômodo. Na prática, ao final da duração do encanto todas as pessoas sob tensão levarão um dano na EH descrito nos níveis.

Caso a vítima não possua mais EH ou ela chegue a zero com esse efeito, ela deverá fazer uma Resistência Física contra força de ataque igual ao nível da magia. Caso passe, nada lhe ocorrerá. Caso falhe, a vítima receberá uma penalidade de –3 colunas para todas as suas habilidades (físicas, incluindo combate, mentais e sociais). Essa penalidade não pode ser quebrada via Quebra de Encantos, mas é eliminada naturalmente após a pessoa dormir, que é quando, normalmente, mais estará relaxada. A utilização do milagre Curas Espirituais pode também anular efeito desde que recupere uma EH maior do que aquela que a magia faz perder.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
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
			id: MagiaEnum.terremoto,
			nome: "Terremoto",
			niveis: [
				{
					id: "0",
					descricao:
						"Causa tremores leves por isso não apresenta efeitos em combate, mas atrapalha na realização de Habilidades eminentemente físicas como Acrobacias, Escalar Superfícies, (exceção a natação). Na prática aumenta-se um nível de dificuldade para estas tarefas. O alcance é de 15m de raio.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Os tremores fazem com que criaturas que pesem menos de 60 kg sofram um ajuste de –3 para combate, Habilidades e evocações. O alcance é de 30m de raio",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas o peso é de 90 kg, o ajuste é de –4 e o alcance é de 50m de raio.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Os tremores fazem com que criaturas que pesem menos de 240 kg sofram um ajuste de –5 para combate, Habilidades e evocações. Seres que pesem menos de 60 kg devem fazer um teste de Acrobacias fácil para realizar qualquer ataque. O teste deve ser realizado toda rodada. O alcance é de 100m de raio",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Os tremores fazem com que criaturas que pesem menos de 720 kg sofram um ajuste de –6 para combate, Habilidades e evocações. Seres que pesem menos de 90 kg devem fazer um teste de Acrobacias fácil para realizar qualquer ataque. O teste deve ser realizado toda rodada. O alcance é de 200m de raio, este efeito compromete estruturas pequenas (Ex.: casas e torres baixas).",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Este terremoto é capaz de levar ao chão estruturas pequenas, causar fendas erosivas no solo e comprometer estruturas medianas como casas grandes e torreões. Os tremores fazem com que criaturas que pesem menos de 1500 kg sofram um ajuste de –7 para combate, Habilidades e evocações. Seres que pesem menos de 240 kg devem fazer um teste de Acrobacias fácil e seres que pesem menos de 90 kg devem fazer um teste de Acrobacias média para realizar qualquer ataque. O teste deve ser realizado toda rodada. O alcance é de 300m de raio.",
					nivel: 10,
				},
			],
			descricao:
				"Esta poderosa magia provoca tremores de terra (não funciona na água) que podem desde atrapalhar o inimigo até derruba-lo. Esta magia é perigosa podendo causar sérios danos às estruturas que estiverem dentro da sua área de alcance. O Evocador não fica imune aos efeitos da magia.",
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 15,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 3,
			},
		},
		{
			id: MagiaEnum.toqueGelido,
			nome: "Toque Gélido",
			niveis: [
				{
					id: "0",
					descricao: "Causa 12 de dano máximo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa 16 de dano máximo.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Causa 20 de dano máximo.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Causa 24 de dano máximo.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Causa 28 de dano máximo.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Causa 32 de dano máximo.",
					nivel: 10,
				},
			],
			descricao: `Com esta tenebrosa magia o evocador poderá atacar a aura do seu oponente com um toque gélido semelhante ao dos espectros e de outras criaturas maléficas, no entanto o ataque tem efeitos que vão além do dano infligido. A criatura que receber algum dano ocasionado por esta magia sentirá uma tenebrosa sensação de frio. O ataque será resolvido na coluna igual ao nível que o evocador possuir na magia.

Se a dificuldade do dano causado for menor do que 100% então o oponente não foi tocado e somente o dano é aplicado.

Mas caso o mago consiga 100% ou mais na EH de seu adversário ou tenha conseguido causar dano na EF, acontece então um efeito especial: o valor correspondente aos 25% do dano máximo da magia será incorporado a Energia Heróica do evocador podendo exceder o seu máximo. Os pontos que excedam a capacidade máxima do evocador desaparecem após 2 horas.

Caso um ataque acerte a EF do alvo, este deverá fazer uma resistência à magia, caso falhe fugirá do evocador por 10 rodadas. Caso um ser das raças civilizadas seja morto por este feitiço, este deverá realizar uma resistência á magia, caso falhe sua alma será poluída se transformando em um Fantasma após 4 dias.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.transformacao,
			nome: "Transformação",
			niveis: [
				{
					id: "0",
					descricao:
						"Tem Duração de 30 minutos. Permite que se transforme uma criatura em outra semelhante e aproximadamente do mesmo tamanho (cachorro em lobo, humano em orco, etc). O limite de peso é de 120 kg.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Tem Duração de 6 horas. Permite que se transforme uma criatura em outra semelhante e aproximadamente do mesmo tamanho (cachorro em lobo, humano em orco, etc). O limite de peso é de 120 kg.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Tem Duração de 1 dia. Permite que se transforme uma criatura em outra semelhante e aproximadamente do mesmo tamanho da criatura original (um humano pode ser transformado em um pequenino ou um ogro, etc). O limite de peso é de 120 kg.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Tem Duração de 6 dias. Permite que se transforme uma criatura em outra semelhante cujo tamanho seja de metade até o dobro do tamanho da criatura original (um humano pode ser transformado em um pequenino ou um ogro, etc). O limite de peso é de 300 kg.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Tem Duração de 1 ano e 1 dia. Permite que se transforme uma criatura em outra da mesma classe (mamífero, réptil, ave ou anfíbio) da criatura original (um humano em um gato, uma águia em um papagaio, etc). O limite de peso é de 300 kg.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Tem Duração permanente. Permite que se transforme uma criatura em outra (um humano em um sapo, um papagaio em uma lagartixa, etc). O limite de peso é de 500 kg.",
					nivel: 10,
				},
			],
			descricao: `Transformação dá ao evocador o poder de transformar uma criatura em outra, caso falhe em uma Resistência à Magia. A duração deste encanto, o tipo de criatura que pode ser afetado e em que ela pode ser transformada depende do Efeito. Caso a criatura afetada concorde com a transformação não será necessário fazer uma resistência à magia. Mas se não concordar, a magia só funcionará se ela falhar na sua Resistência a Magia.

A criatura em que foi transformada mantém as suas capacidades mentais e seus conhecimentos. Caso a nova forma permita, ela poderá até mesmo usar as suas habilidades e feitiços, a critério do Mestre (um humano transformado em um orco, poderia falar e usar as suas habilidades normalmente, mas um transformado em sapo não conseguiria sequer falar).

A EF e a EH da criatura permanecem inalteradas. Os efeitos de Dificuldade 4 ou menos não têm a capacidade de transformar o equipamento da criatura. Nos efeitos restantes o equipamento se funde ao corpo da criatura transformada (armadura vira pele, espadas viram garras ou unhas, etc).

Cada Efeito pode manipular apenas certa quantidade de matéria ou menos. Tanto o peso da criatura original quanto o da criatura formada devem ser inferiores a este limite de peso. Em nenhum caso se pode transformar uma criatura em uma outra que pese menos de 300 gramas ou metade do seu peso, o que for menor (em outras palavras, não é possível se transformar um humano em uma formiga, mas é possível se transformar uma formiga em outra menor).`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 2,
			},
		},
		{
			id: MagiaEnum.transformacaoMetalica,
			nome: "Transformação Metálica",
			niveis: [
				{
					id: "0",
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 10cm x 10cm x 10cm.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 50cm x 50cm x 50cm.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 1m x 1m x 1m.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 2m x 2m x 2m.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 3m x 3m x 3m.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 4m x 4m x 4m.",
					nivel: 10,
				},
			],
			descricao:
				"Com esse milagre, o sacerdote de Mon tem a capacidade de alterar a maleabilidade do metal tornando-o mais flexível ou mais rígido conforme o desejo do sacerdote. Assim, o sacerdote pode inclusive manipular um metal flexível entortando-o. Assim pode-se fazer com que uma espada fique completamente torta. Entretanto, se qualquer metal tiver aura imbuída, para a magia funcionar deverá cobrir toda a área. Assim se o sacerdote quer por exemplo entortar a espada de um guerreiro, é necessário que essa magia afete não só a espada como o guerreiro como um todo. Além disso, nesse caso, é necessário que o guerreiro falhe em uma Resistência a Magia para que a espada possa ser entortada. Em contrapartida, metais sem aura, podem ser manipulados em partes, não necessariamente ele todo.",
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 10,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.transmutacao,
			nome: "Transmutação",
			niveis: [
				{
					id: "0",
					descricao:
						"Transmuta um material de origem vegetal em outro semelhante (uma maçã em pêra, um pedaço de madeira ruim em nobre).",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Transmuta água em outro líquido ou o inverso.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Transmuta um material de origem vegetal em outro de origem vegetal (um galho em uma fruta, um pedaço de madeira em ervas).",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Transmuta um material de origem vegetal em outro de origem vegetal ou em um líquido (um galho em água, um pedaço de madeira em uma fruta).",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Transmuta um material de origem mineral em outro de origem mineral (cobre em ouro, mármore em ferro). Caso o evocador queira transformar um material menos nobre em um mais nobre (ex: prata em ouro, pedra em diamante) e o resultado da rolagem for uma falha catastrófica (cor verde}, a mesma quantidade de massa que seria transmutada, será desintegrada do corpo do próprio evocador (a critério do Mestre do Jogo).",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Transmuta qualquer material em qualquer material, no entanto a restrição para materiais minerais nobres será igual ao do efeito 8.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o mago altera a constituição da matéria transformando um material em outro diferente. Só é possível transmutar materiais de origem mineral ou vegetal, criaturas que tenham o corpo constituído por estes materiais não são afetados pela transmutação. Caso o material a ser transmutado contenha a aura de uma criatura, a Resistência a Magia do material deverá ser realizada.

Só é possível transmutar materiais de massa igual ou inferior a 5kg. Caso o objeto transmutado seja de origem vegetal para vegetal, e o efeito permita, a sua forma poderá ser alterada, mas a massa será a mesma (um galho de arvore poderá ser transmutado em uma fruta). Caso a transmutação envolva material de origem mineral, a sua forma não se alterará (se o metal de uma espada for transformado em madeira, esta continuará na forma de uma espada) a menos que a sua nova constituição seja instável (se a mesma espada do exemplo anterior fosse transformada em água, esta não mais ficaria em forma de espada).

Este feitiço exige um controle muito preciso da matéria a ser transmutada, por isso em certos casos, a evocação desta magia se torna perigosa para o evocador. Materiais de origem vegetal tendem a ser mais fácies de serem transmutados devido a menor densidade, por isso a evocação é segura, mas existem materiais de origem mineral (principalmente nobres) que se mal transmutados, podem ocasionar danos irreversíveis ao evocador, como a perda de uma das mãos ou em casos mais catastróficos braços e pernas. Os riscos de cada evocação estão descritos nos efeitos correspondentes.

Note que para transmutar objetos em outros, é necessário que o evocador conheça o objeto a ser transmutado, caso contrario a transmutação não poderá ser realizada. Transmutar materiais comuns em nobres, exige um rolamento na coluna do nível que o evocador possuir na magia. Quanto maior for a diferença entre a nobreza dos materiais transmutados, maior será a dificuldade do teste para a transmutação (transmutar uma pedra comum em ouro é uma tarefa muito difícil, mas transmutar uma moeda de prata em outra de ouro é uma tarefa fácil).

Outros fatores também poderão influenciar na transmutação, como o conhecimento que o evocador tiver a respeito do material a ser transmutado (transmutar uma folha de macieira em uma erva rara deverá ser uma tarefa fácil para quem conhecer bem a erva em questão, mas uma tarefa difícil ou muito difícil para quem conhecer pouco um quase nada da erva em questão). Muitos serão os casos, mas estes deverão ser tratados da maneira que o mestre do jogo achar mais justo.

A diferença dos materiais que podem ser transmutados varia com a dificuldade do efeito.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.PERMANENTE,
			},
			evocacao: {
				tipo: EvocacaoEnum.MINUTO,
				valor: 10,
			},
		},
		{
			id: MagiaEnum.transporteDimensional,
			nome: "Transporte Dimensional",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite ao evocador transportar instantaneamente um objeto de até 5kg de uma parte de seu corpo (bolso, mãos e etc.) a até 5 metros de distância.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas o objeto pode ter até 20kg e é transportado para 100 metros de distância.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O evocador é transportado instantaneamente até 10 metros de distância, podendo levar 50 kg de peso adicional.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Idem ao anterior, mas a distância é de 100 metros.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O evocador cria um portal entre dois pontos que estejam a até 1 quilômetro de distância um do outro. O portal é um círculo de 2 metros de diâmetro que dura duas rodadas e depois desaparece. Aquele que passar pelo portal é transportado instantaneamente de um ponto para o outro.",
					nivel: 9,
				},
			],
			descricao: `O transporte dimensional cria uma distorção no tecido da realidade, ligando dois pontos do espaço, possibilitando assim um transporte instantâneo entre dois locais distantes.

O transporte só pode ser feito entre dois pontos conhecidos do evocador, ou seja, ele tem de estar vendo e ou já ter visto o local para onde deseja ir. Caso este local esteja além do alcance do efeito, a magia falha.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
	];
}
