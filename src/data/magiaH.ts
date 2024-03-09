import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.habilidadeAnimal,
			nome: "Habilidade Animal",
			niveis: [
				{
					id: "0",
					descricao: "Permite aumentar em duas vezes a sua velocidade base.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite enxergar detalhes pequenos que seriam vistos até no máximo 5 metros, a uma distância de 100 metros.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Permite usar a ecolocalização para se nortear sem o uso da visão. O alcance é bem limitado (20 metros) e pode-se apenas perceber obstáculos no caminho, mas permite se locomover sem bater ou tropeçar em algo ou cair num buraco.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Permite ao usuário efetuar saltos três vezes maiores que o normal.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Permite ficar em apneia (sem respirar) durante 30 minutos.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Permite reduzir o impacto causado por danos de queda em um quarto do valor.",
					nivel: 10,
				},
			],
			descricao: `Através deste encanto o místico torna-se temporariamente capaz de expandir suas capacidades, assemelhando-o com os animais.

Cada um dos efeitos pode ser ou não cumulativo com o anterior, desta forma, o evocador ao conjurar um efeito deve escolher quais efeitos anteriores ele gostaria de usar. Este encanto irá colapsar quando for evocado novamente, assim que o usuário decidir cessar seu uso ou assim que o tempo limite se esgotar.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
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
			id: MagiaEnum.herbologia,
			nome: "Herbologia",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria um chá que cura enfermidades menores como febre, dores no corpo, inflamações internas etc. Além disto cura venenos tipo 1 e ajuda em 1 nível de dificuldade na resistência do vício em drogas e no combate à abstinência.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria um emplastro a ser aplicado no local da ferida que ajuda em recuperar 2 pontos de EF e ajuda nos sintomas de infecção; ou um chá para curar venenos tipo 2 e ajuda em 2 níveis de dificuldade na resistência do vício em drogas e no combate à abstinência.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior mas recupera 4 pontos de EF e ajuda nos sintomas de infecção; ou um chá para curar venenos tipo 3 e ajuda em 3 níveis de dificuldade na resistência do vicio em drogas e no combate à abstinência; ou um chá que melhora o ânimo recuperando a EH em 10 pontos.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas recupera 6 pontos de EF e ajuda nos sintomas de infecção; ou um chá para curar venenos tipo 4 e ajuda em o 4 níveis de dificuldade na resistência do vício em drogas e no combate à abstinência; ou um chá que melhora o ânimo recuperando a EH em 20 pontos.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas recupera 8 pontos de EF e ajuda nos sintomas de infecção ou um chá para curar venenos tipo 5 e ajuda em 5 níveis de dificuldade (um rolamento Impossível se torna Muito Difícil) na resistência do vício em drogas e no combate à abstinência ou um chá que melhora o ânimo recuperando a EH em 30 pontos.",
					nivel: 9,
				},
			],
			descricao: `O encanto da Herbologia faz com que o evocador use a natureza ao seu redor para prover efeitos benéficos usando ervas, plantas e tudo que a natureza pode oferecer como forma de cura e vigor, como explicado em cada efeito da magia. As ervas e materiais naturais funcionam muito melhor por terem sido preparado utilizando a magia.

A busca pelos materiais deve ser feita em um ambiente natural (teste de Sobrevivência Médio) e se estiver em local conhecido onde tenha Sabedoria naquela área de atuação se torna Rotineiro. As folhas para o chá podem ser secas e guardadas por até 10 dias, pois ainda devem conter suas propriedades naturais. Assim que for preparado deve ser usado imediatamente ou perderá o efeito. O chá age rápido e em 30 minutos tem o efeito realizado.

Os materiais para o emplastro devem ser frescos e colhidos a menos de 5 dias, pois ainda devem conter suas propriedades místicas naturais. Após o preparo, devem ser usados imediatamente ou perderá o efeito. Após a aplicação os efeitos demoram duas horas se realizarem.

OBS: O Emplastro e o chá só podem ser usado uma vez por dia por pessoa (só poderá ser usado novamente na mesma pessoa depois de 24h). No caso de existir mais indivíduos, deve-se realizar novamente a magia para cada um, utilizando novos materiais para estas novas doses de chá ou emplasto.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.USO,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.MINUTO,
				valor: 5,
			},
		},
		{
			id: MagiaEnum.hidromanipulacao,
			nome: "Hidromanipulação",
			niveis: [
				{
					id: "0",
					descricao: "Afeta 3 metros cúbicos e carrega até 20 kg.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Afeta 6 metros cúbicos e carrega até 40 kg.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Afeta 15 metros cúbicos e carrega até 100 kg.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Afeta 25 metros cúbicos e carrega até 150 kg.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Afeta 35 metros cúbicos e carrega até 250 kg.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Afeta 50 metros cúbicos e carrega até 400 kg.",
					nivel: 10,
				},
			],
			descricao: `Esta magia torna o evocador capaz de moldar um grande volume de líquidos. O volume que pode ser manipulado depende da Dificuldade do Efeito.

Apenas os líquidos que estejam a uma distância do evocador menor do que o alcance podem ser manipulados. Os líquidos podem ser jogados para fora desta área, mas após saírem eles voltarão a se comportar normalmente.

A capacidade de manipulação deste encanto é total, podendo-se criar pilares de água, ondas, buracos na água, redemoinhos e etc, conforme o desejo do evocador, desde que a restrição do volume seja respeitada.

É possível tentar afogar uma criatura com este encanto, mas isto é muito difícil de se fazer. O Efeito que se está usando para afogá-la deve ser capaz de carregar o seu peso.

Caso o evocador tente fazer isto, a criatura que ele está tentando afogar tem o direito de rolar a cada rodada sua Habilidade Natação contra um Nível de Dificuldade Difícil. Caso obtenha sucesso, a vítima consegue se libertar na rodada do rolamento. Caso passe mais de 6 rodadas (90 segundos) sem conseguir respirar, ela perderá a consciência por falta de ar.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 15,
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
			id: MagiaEnum.hidrotolerancia,
			nome: "Hidrotolerância",
			niveis: [
				{
					id: "0",
					descricao:
						"O sacerdote ou um companheiro seu consegue respirar debaixo d'água por 5 minutos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Idem ao anterior, mas dura 1 hora.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"O sacerdote ou um companheiro seu não só consegue respirar debaixo d'água como também consegue utilizar seus sentidos normalmente. Assim o alvo da magia pode ouvir o que outra pessoa está dizendo embaixo d'água embora essa mesma pessoa não o possa ou pode ver também com a mesma clareza como se estivesse na superfície. Dura 2 horas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas o alvo adquire uma movimentação melhor na água. Isso permite que o alvo da magia possa lutar debaixo d'água, mas terá - 10 em todas as suas colunas de ataque, sua agilidade não contará para sua defesa e, além disso, é impossível convocar qualquer magia ou milagre neste efeito. A EH, entretanto, já pode ser utilizada normalmente. Observe que armas que ataquem a longa distância como arcos, não podem ser utilizadas. Dura 2 horas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas o ajuste é de -5 e é possível convocar magias ou milagres desde que não tenham manifestações físicas, como dardos de gelo. Dura 2 horas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"O alvo do milagre pode se locomover normalmente na água, como se estivesse na superfície, podendo até mesmo tocar um instrumento, dançar ou fazer acrobacias. Assim ele poderá lutar normalmente sem qualquer penalidade, podendo usar a sua agilidade na defesa. Além disso, a aura não só afeta o alvo da magia, como qualquer objeto por ele possuído ou lançado, se tornando possível atacar com arco e flecha e com magias de manifestação física debaixo d'água (dentro do bom senso). Dura 6 horas.",
					nivel: 10,
				},
			],
			descricao: `Hidrotolerância como o próprio nome sugere, é a tolerância a água. Uma grande aura envolve a pessoa que possibilita realizar as mesmas coisas que alguém na superfície poderia fazer. Nos efeitos iniciais o sacerdote consegue fazer com que ele mesmo ou algum de seus companheiros possa respirar debaixo d'água. Já nos efeitos mais avançados, a tolerância à água é de tal forma, que o sacerdote (ou quem escolher) pode agir naturalmente debaixo d'água, como se estivesse na superfície, podendo até mesmo lutar.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
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
