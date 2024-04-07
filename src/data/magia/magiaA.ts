import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.abrigo,
			nome: "Abrigo",
			descricao: `Essa magia desenvolve um senso de sobrevivência no místico, possibilitando encontrar a melhor forma de se abrigar contra os rigores da natureza. O evocador será direcionado a um local seguro (abrigo) ou saberá a melhor atitude a ser tomada diante das calamidades naturais, mas todas as opções de refúgio devem estar dentro da área de 5 km (alcance da magia).

Por exemplo, caso o místico precise se proteger da noite com um abrigo físico, a magia indicará a direção onde encontrar (pode ser uma caverna, um espaço nas raízes de uma imensa árvore, etc.). Caso não possua abrigos ao alcance da magia, o evocador será informado e a magia fornecerá redução na dificuldade da habilidade Sobrevivência no tocante à construção de um abrigo, além de indicar o local menos provável de ser atacado pela fauna e flora local para construir (copa da árvore ou em cima do monte, por exemplo). O Mestre julgará o ambiente e indicará o local. Para esse efeito, a evocação é de 1 rodada.

Por outro lado, se o evocador, sem o auxílio da magia, encontrar um abrigo físico, esse encanto poderá ser usado para identificar se é seguro. A resposta virá na forma de um pressentimento e basta usar o nível de acordo com a quantidade de pessoas que o abrigo encontrado suporta. Por exemplo:

- encontrou um abrigo para até 3 pessoas: usa o nível 1.
- encontrou um abrigo até 6 pessoas ou 3 pessoas e suas montarias: usa o nível 5
- encontrou um abrigo que comporta até 10 pessoas ou 5 pessoas e suas montarias, ou mais (limitado a uma área de 20m de raio): usa o nível 9.

Mas se o evocador estiver perdido em uma tempestade de areia, por exemplo, a magia indicará a melhor atitude a ser tomada (ex.: “fique deitado” ou “corra para trás”). A mensagem virá na forma da percepção do evocador por ter analisado a situação, e o nível da magia informará a quantidade de palavras que contém a mensagem (o Mestre deve ter em mente a melhor opção para sobreviver). É preciso deixar claro que a resposta não isenta dano, doença, etc., mas será a melhor escolha que reduzirá ao máximo as consequências. Para esse efeito, a evocação é instantânea.

A partir do quinto nível, a magia tornará o abrigo camuflado, mais difícil de ser detectado. A quantidade de pessoas que pode ser abrigada varia com a dificuldade do feitiço. Este encanto pode ser usado apenas em Ambiente Natural e precisa escolher um efeito na hora de lançar a magia.
`,
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
			alcance: {
				tipo: AlcanceEnum.QUILOMETRO,
				valor: 5,
			},
			duracao: {
				tipo: DuracaoEnum.USO,
				valor: 1,
			},
			niveis: [
				{
					id: "0",
					nivel: 1,
					descricao:
						"Encontra um abrigo capaz de proteger até 3 pessoas (caso não possua abrigo ao alcance da magia, reduz em 1 nível a dificuldade da habilidade sobrevivência para construir um abrigo) ou o evocador receberá uma mensagem de até 2 palavras com a melhor atitude a ser tomada.",
				},
				{
					id: "1",
					nivel: 3,
					descricao:
						"Idem ao anterior, mas abriga até 4 pessoas ou 2 pessoas e suas montarias (reduz 2 níveis) ou recebe uma mensagem de até 3 palavras.",
				},
				{
					id: "2",
					nivel: 5,
					descricao:
						"Idem ao anterior, mas abriga até 6 pessoas ou 3 pessoas e suas montarias (reduz 3 níveis) ou recebe uma mensagem de até 4 palavras. A partir desse nível, o encanto camuflará o abrigo, o que torna mais difícil de ser encontrado, aumentando em 1 nível a dificuldade na habilidade Usar o Sentidos e/ou Seguir Trilhas para quem tentar detectá-lo.",
				},
				{
					id: "3",
					nivel: 7,
					descricao:
						"Idem ao anterior, mas abriga até 8 pessoas ou 4 pessoas e suas montarias (reduz 4 níveis) ou sabe automaticamente a melhor atitude a ser tomada. Aumenta em 2 níveis para detectar.",
				},
				{
					id: "4",
					nivel: 9,
					descricao:
						"Idem ao anterior, mas abriga até 10 pessoas ou 5 pessoas e suas montarias (reduz 5 níveis) ou sabe automaticamente a melhor atitude a ser tomada e essa atitude o livrará de sofrer dano. Aumenta em 3 níveis para detectar.",
				},
			],
			extra: [
				"Os abrigos encontrados serão seguros e sem perigos. Ou seja, protegerá dos perigos ambientais (chuvas, sol, terremotos, etc.) e não a ameaças naturais em seu interior (ursos, orcos, aranhas, etc.). Caso algum inimigo o encontre, não oferecerá proteção extra. Como também não identifica perigo sobrenatural.",
			],
		},
		{
			id: MagiaEnum.adestramento,
			nome: "Adestramento",
			niveis: [
				{
					id: "0",
					nivel: 1,
					descricao:
						"Com este efeito pode-se ensinar um truque básico (correr, buscar objetos, saltar, sentar etc) a animais domésticos, é possível usar um animal , desde que forte o suficiente, como montaria.",
				},
				{
					id: "1",
					nivel: 3,
					descricao:
						"Idem ao anterior, mas permite ensinar 2 truques que agora podem ser mais complexos (levar objetos de um canto a outro, emitir som caso algo aconteça, etc) ou executar manobras montadas como saltar obstáculos e correr em grande velocidade. Além disso, pode-se ensinar truques simples a animais Selvagens.",
				},
				{
					id: "2",
					nivel: 5,
					descricao:
						"Com este efeito é possível ensinar 3 truques complexos a animais Selvagens e adestrar animais Predadores para que realizam tarefas básicas. É possível usar um Animal Selvagem, desde que forte o suficiente, como montaria.",
				},
				{
					id: "3",
					nivel: 7,
					descricao:
						"Com este efeito, o evocador será capaz de adestrar animais Predadores para que realizem tarefas mais complexas (igual ao do efeito 3) e treinar criaturas Místicas para tarefas mais simples (igual ao efeito 1). É possível usar um Animal Predador, desde que forte o suficiente, como montaria.",
				},
				{
					id: "4",
					nivel: 9,
					descricao:
						"Com este efeito, o evocador pode adestrar um animal Místico para realizar tarefas complexas (igual ao efeito 3). É possível usar um Animal Místico, desde que forte o suficiente, como montaria.",
				},
			],
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
			evocacao: { valor: 10, tipo: EvocacaoEnum.MINUTO },
			descricao: `Através deste encanto, o evocador cria uma ligação mágica temporária com uma criatura de intelecto irracional e consegue plantar um certo conhecimento/habilidade em sua mente. A complexidade do “truque” depende do nível da magia.

A criatura alvo deve ser tocada para que a magia seja evocada. Em tese, qualquer criatura irracional pode ser adestrada, porém encantar um cavalo domesticado, ou um cão doméstico é bem mais fácil que um cervo selvagem ou um lobo feroz. A criatura pode resistir à magia, se bem sucedida, não será adestrada. A criatura fica imune a novas tentativas de adestramento do mesmo evocador até o próximo dia. A critério do mestre a criatura pode não resistir à magia.

Os “truques” ensinados não devem ser suicidas, como ensinar macacos a pular do penhasco de forma consciente, o encanto será imediatamente quebrado, mas “adestrar” um rinoceronte para servir de montaria numa batalha é viável. O adestramento deve ser descrito com exatidão no momento da evocação. O animal adestrado será no mínimo amistoso ao evocador, mas sempre será obediente.

A magia adestramento não torna a criatura servil ao evocador. Um tigre selvagem se permitiria montar pelo evocador e obedeceria seus comandos quando montado, conforme seu treinamento, mas ainda atacaria o mesmo evocador se ele estivesse caído a sua frente pois este é seu instinto. Para criar uma relação de fidelidade ou servidão seria necessário convivência, uso de habilidade ou de outra magia.

Para esta magia, divide-se os animais nas seguintes categorias.

Domésticos: Animais acostumados a viver entre as raças inteligentes. Ex.: Cães, gatos, cavalos, galinhas, falcões, cabras.
Selvagens: Versões selvagens dos animais domésticos. Ex.: Cavalos Selvagens, cabras das Montanhas, Perus Selvagens.
Predadores: São animais que em condições normais seriam predadores ou pelo menos hostis ao evocador. Ex.: Búfalos selvagens, Leões, Tigres, Águias, Gorilas.
Místicos: São animais de natureza mágica que possuem uma resistência maior à magia. Ex.: Mantícoras, Hipogrifos, Pégasus.

O Mestre deve usar o bom senso para julgar se o animal possui “inteligência” para executar a tarefa/truque.
    `,
		},
		{
			id: MagiaEnum.aeroataque,
			nome: "Aeroataque",
			niveis: [
				{
					id: "0",
					nivel: 1,
					descricao:
						"Carrega até 20 kg, é preciso Força -1 para se segurar e derruba até 60 kg, não afetando criaturas e objetos a partir daí.",
				},
				{
					id: "1",
					nivel: 3,
					descricao:
						"Carrega até 40 kg, é preciso Força 0 para se segurar e derruba até 120 kg, não afetando criaturas e objetos a partir daí.",
				},
				{
					id: "2",
					nivel: 5,
					descricao:
						"Carrega até 60 kg, é preciso Força 1 para se segurar e derruba até 180 kg, não afetando criaturas e objetos a partir daí.",
				},
				{
					id: "3",
					nivel: 7,
					descricao:
						"Carrega até 90 kg, é preciso Força 2 para se segurar e derruba até 270 kg, não afetando criaturas e objetos a partir daí.",
				},
				{
					id: "4",
					nivel: 10,
					descricao:
						"Carrega até 150 kg, é preciso Força 3 para se segurar e derruba até 450 kg, não afetando criaturas e objetos a partir daí.",
				},
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
			descricao: `Cria ventanias de grande força, mas pouca precisão (para precisão, veja o encanto Aeromanipulação). Os fortes ventos criados têm a capacidade de carregar, derrubar e/ou arrastar criaturas e objetos até certo peso.

O vento se desloca na direção que o evocador apontar, na forma de uma faixa de 3 metros de largura, começando no místico e chegando até o alcance máximo. Para se tentar afetar alguém com este vento é preciso primeiro se obter um resultado de 50% ou mais em um ataque físico.

Criaturas e objetos que estejam na área de efeito se enquadram em 3 categorias: aqueles que podem ser carregados, aqueles que podem ser derrubados e os que não podem ser afetados. A categoria a qual um objeto ou criatura pertence é determinada pelo seu peso e pela Dificuldade do Efeito que está sendo usado contra ele(a).

A força do vento tem a capacidade de carregar coisas de peso relativamente pequeno, a não ser que haja um ponto de apoio fixo e força para se segurar. Criaturas nesta categoria que consigam se segurar não poderão fazer nenhuma ação enquanto este feitiço estiver em operação (isto é, além de se agarrar ao seu apoio). Objetos que estejam firmemente presos (por exemplo, cimentados ao chão) não são afetados.

Objetos e criaturas que sejam carregados são arremessados cerca de 15 metros para trás e, no caso das criaturas, precisam gastar duas rodadas se recuperando e levantando. Caso haja uma superfície sólida na trajetória da queda de 15 metros citada acima (por exemplo, uma parede) o objeto ou criatura é tratado como se tivesse caído de 7 metros de altura. O Mestre do Jogo saberá como cuidar disto.

Os que possuem um peso intermediário não podem ser carregados, embora possam ser derrubadas, não sofrendo nenhum dano (mas sendo levados para trás cerca de 3 metros) e, no caso das criaturas, as mesmas devem gastar uma rodada se recuperando e se levantando. Caso encontrem um ponto de apoio, elas não são derrubadas, mas não podem avançar contra o vento enquanto o feitiço estiver em ação.

Seres que possuam uma grande massa não serão afetados por este encanto, não sofrendo qualquer efeito prático.
    `,
		},
		{
			id: MagiaEnum.aeromanipulacao,
			nome: "Aeromanipulação",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite dar formas especificas a gases dentro da área de efeito.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Forma uma barreira de vento em volta do evocador que impede ataques com projeteis não mágicos e dá penalidade -2 em combates corpo a corpo, afetando inclusive o evocador caso este queira atacar ultrapassando a barreira de vento com armas de mão. Entretanto os ataques mágicos a distância não recebem qualquer penalidade.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Cria fortes ventos saindo do evocador em todas as direções. A força dos ventos repele objetos e criaturas como explicado na descrição da magia. Além disso, a força do vento impede ataques com projeteis não mágicos e concede um ajuste de -5 para todos os outros ataques que exijam proximidade, mágicos ou não (ex: tanto a espada mágica quanto a espada comum sofrerão a penalidade de -5 pontos}, observa-se que esta penalidade se aplicará inclusive aos seus aliados, entretanto inaplicáveis ao evocador.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Cria fortes ventos saindo a partir de um circulo de 6 metros de raio do evocador. A força dos ventos repele objetos e criaturas como explicado na descrição da magia. Além disso, a força do vento impede ataques com projeteis não mágicos e concede um ajuste de -5 para todos os outros ataques, mágicos ou não, observa-se que os aliados do evocador não serão afetados caso estejam dentro do raio de proteção da magia.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Permite que o evocador use o vento para carregar, manipular e lançar objetos como forma de atacar o oponente. Este efeito tem grande precisão e permite que o evocador manipule até 4 objetos de até 2 quilos e dano máximo de 8 pontos por objeto atirado",
					nivel: 10,
				},
			],
			descricao: `A magia Aeromanipulação permite o controle de substâncias gasosas que estejam a uma distância do evocador menor do que o alcance do feitiço.

Este encanto pode ser usado para criar ventos dentro da área de efeito, podendo estes sair desta área. Neste caso, eles perderão a força gradualmente até pararem totalmente (da mesma forma que o vento causado por um ventilador diminui gradualmente, até parar). Além disso, o evocador perderá o controle sobre eles se estiverem além do Alcance.

A força do vento permanece relativamente constante em todos os efeitos deste encanto. Um controle cada vez maior sobre o vento permite que o evocador crie uma série de efeitos muito interessantes. O vento tem a capacidade de mover até 30 quilogramas e de impedir que objetos ou criaturas que pesem até 100 quilogramas se movam velozmente contra ele (no máximo, se arrastam vagarosamente).`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 30 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.alucinacao,
			nome: "Alucinação",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
					descricao: "Cria uma alucinação, afetando 1 sentido.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao: "Cria uma alucinação, afetando 1 sentido.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
					descricao: "Cria uma alucinação, afetando 2 sentidos.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao: "Cria uma alucinação, afetando 2 sentidos.",
					nivel: 5,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
					descricao: "Cria uma alucinação, afetando 3 sentidos.",
					nivel: 6,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao: "Cria uma alucinação, afetando 3 sentidos.",
					nivel: 7,
				},
				{
					id: "6",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao: "Cria uma alucinação, afetando 4 sentidos.",
					nivel: 8,
				},
				{
					id: "7",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 8 },
					descricao: "Cria uma alucinação, afetando 4 sentidos.",
					nivel: 9,
				},
				{
					id: "8",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao: "Cria uma alucinação, afetando 5 sentidos.",
					nivel: 10,
				},
			],
			descricao: `Esta magia afeta um ou mais sentidos de uma pessoa, fazendo com que ela sofra uma alucinação por algum tempo caso falhe na sua Resistência à Magia. A duração da alucinação e o número de sentidos afetados (tato, audição, visão, etc) dependem da dificuldade do efeito usado.

Caso a vítima deste feitiço obtenha sucesso em sua Resistência à Magia ela não sofrerá nenhum efeito. Algumas vezes as alucinações causadas podem dar chance a vitima de perceber que o que ela está sentindo não é normal. Quando isto acontecer, a vítima tem direito a tentar uma Percepção difícil. Caso obtenha sucesso, saberá que não pode confiar em seus sentidos, mas continuará sob o efeito da magia. A evocação deste feitiço é muito discreta e, por isto, não pode ser percebida normalmente.

A alucinação pode afetar o(s) sentido(s) escolhido(s) pelo evocador e tomará qualquer forma escolhida pelo mesmo, o evocador deverá apenas escolher o que ele deseja que a vítima perceba. Caso a vítima tenha falhado na sua Resistência à Magia, ela perceberá apenas aquilo que o evocador deseja que ela perceba.

Enquanto a magia permanecer em operação, o evocador pode mudar o que ele deseja que os sentidos da vítima captem, desde que a vítima esteja dentro do alcance da magia e no campo de visão do evocador. Caso este se afaste da vítima além do alcance do feitiço ou perca a vítima de vista, esta continua percebendo (ou não percebendo) o que o evocador determinou até o fim da duração.

O evocador pode desejar, por exemplo, que a vítima veja um terreno plano no lugar do abismo que se encontra à sua frente, que seus amigos são monstros, que não veja nem ouça o evocador e seu grupo passarem à sua frente, etc.

Note que, como este encanto afeta a mente da vítima e não ondas de luz, etc, apenas a vítima perceberá a alucinação, devendo agir conforme as informações que lhe chegam.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.amizade,
			nome: "Amizade",
			niveis: [
				{
					id: "0",
					duracao: {
						tipo: DuracaoEnum.ESPECIAL,
						descricao: "Até o favor ser feito",
					},
					descricao:
						"Torna uma criatura inteligente mais simpática em relação ao evocador. Este pode pedir um pequeno favor à vítima, desde que seja algo razoável.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"A vítima passa a considerar o evocador um bom amigo e atenderá seus desejos, desde que não contrariem sua índole, seus deveres ou o prejudiquem muito.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"Idem ao anterior, mas a vítima pode fazer algo que a prejudique (mas não a mate).",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					descricao: "Idem ao anterior.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					descricao:
						"Idem ao anterior, mas a vítima desprezará seus deveres para ajudar o evocador.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					descricao: "Idem ao anterior.",
					nivel: 10,
				},
			],
			descricao: `Esse encanto torna a vítima mais receptiva a idéias do evocador, caso ela falhe em sua Resistência à Magia.

Conforme o poder do efeito, mais subserviente se torna a vítima, até o ponto em que sua personalidade se anula. Muitas vezes se falará sobre a índole do alvo da magia. Esta pode ser definida como o padrão de conduta. Fora da sua índole está tudo aquilo que ele não faria nem por um amigo. Se o evocador pedir a uma vítima desta magia, que roube algo ou mate alguém, ela somente atenderá o pedido se isso não contrariar sua índole. Sendo assim, mesmo que uma vítima que tenha boa índole considere o evocador como seu melhor amigo jamais matará alguém ou fará algo muito grave pelo evocador. Isso porque sua índole não permite fazer essas coisas nem mesmo por seu melhor amigo.

Note que ao final do efeito a vítima se lembrará de tudo que fez e sentiu, por isso, existirão situações em que a vítima poderá perceber que foi enfeitiçada. Para perceber basta realizar um teste de percepção com nível de dificuldade determinado pelo mestre do jogo de acordo com a situação. Considera-se que quanto mais incomum for o comportamento da vítima durante o tempo em que esteve enfeitiçada, mais fácil será o teste para saber se foi enfeitiçada.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.analise,
			nome: "Análise",
			niveis: [
				{
					id: "0",
					descricao: `Analisa propriedades mágicas de nível 1.

Magias de nível 1; focus +2; absorção +1.`,
					nivel: 1,
				},
				{
					id: "1",
					descricao: `Analisa propriedades mágicas de nível máximo 2.

Magias de nível 2; focus +4; absorção +2; armas +1.`,
					nivel: 2,
				},
				{
					id: "2",
					descricao: `Analisa propriedades mágicas de nível máximo 3.

Magias de nível 3; focus +6; absorção +3; defesa +1.`,
					nivel: 3,
				},
				{
					id: "3",
					descricao: `Analisa propriedades mágicas de nível máximo 4.

Magias de nível 4; focus +8; absorção +4; armas +2.`,
					nivel: 4,
				},
				{
					id: "4",
					descricao: `Analisa propriedades mágicas de nível máximo 5.

Magias de nível 5; focus +10; absorção +5.`,
					nivel: 5,
				},
				{
					id: "5",
					descricao: `Analisa propriedades mágicas de nível máximo 6.

Magias de nível 6; focus +12; absorção +6; armas +3; defesa +2.`,
					nivel: 6,
				},
				{
					id: "6",
					descricao: `Analisa propriedades mágicas de nível máximo 7.

Magias de nível 7; focus +14; absorção +7.`,
					nivel: 7,
				},
				{
					id: "7",
					descricao: `Analisa propriedades mágicas de nível máximo 8.

Magias de nível 8; focus +16; absorção +8; armas +4.`,
					nivel: 8,
				},
				{
					id: "8",
					descricao: `Analisa propriedades mágicas de nível máximo 9.

Magias de nível 9; focus +18; absorção +9.`,
					nivel: 9,
				},
				{
					id: "9",
					descricao: `Analisa propriedades mágicas de nível máximo 10.

Magias de nível 10; focus +20; absorção +10; armas +5; defesa +3.`,
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o evocador analise a aura de um objeto e descubra as propriedades mágicas que ele possui. Caso o evocador use esta magia em um objeto que não seja mágico, ele descobre imediatamente que o objeto não é mágico (mas ainda assim desperdiça o dinheiro do ritual).

Embora esta magia seja muito útil, ela requer muito treinamento, pois o evocador só é capaz de descobrir propriedades mágicas de poder equivalente ao seu conhecimento em Análise. Para a maioria das propriedades mágicas vale o que está descrito.

Propriedades específicas que não se enquadrem na relação acima como por exemplo os itens descritos no Livro de Artefatos, terão seu nível determinado pelo mestre do jogo.

Caso um item tenha mais de uma propriedade, o evocador deve primeiro descobrir as propriedades de menor nível para depois ser capaz de analisar as de nível mais alto, em uma escala crescente. Sempre se analisa apenas uma propriedade de cada vez.

Após o último poder ser descoberto, a leitura seguinte dirá que não existe mais nenhuma propriedade a ser lida. Note que não há nenhuma maneira de se saber que uma determinada propriedade é a última, a não ser usar novamente o encanto.

Se um ritual de Análise de baixo nível for realizado em um item com propriedades de nível mais alto, o evocador não será capaz de descobrir a propriedade, mas saberá qual nível deve ser usado, se possuir o nível necessário. Caso o evocador não possua o nível necessário ele apenas saberá que a análise daquela propriedade está além de suas capacidades.

Este ritual exige o uso de materiais raros, de modo que eles custam 5 moedas de prata por dificuldade do efeito que se deseja usar.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.USO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.animacaoMetalica,
			nome: "Animação Metálica",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					descricao:
						"Grupo de Armas igual a 1 em uma arma média que cause dano máximo 16, Concede defesa P1 e 10 pontos de EH.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 2 },
					descricao:
						"Grupo de Armas igual a 3 em uma arma média que cause dano máximo 20, Concede defesa P1 e 20 pontos de EH.",
					nivel: 2,
				},
				{
					id: "2",
					custo: { ouro: 4 },
					descricao:
						"Grupo de Armas igual a 6 em duas armas médias que causem dano máximo 20, Concede defesa P2 e 30 pontos de EH.",
					nivel: 4,
				},
				{
					id: "3",
					custo: { ouro: 6 },
					descricao:
						"Grupo de Armas igual a 9 em uma arma média que cause 20 de dano e uma arma pesada que cause 20 de dano. Concede defesa P3 e 40 pontos de EH.",
					nivel: 6,
				},
				{
					id: "4",
					custo: { ouro: 8 },
					descricao:
						"Grupo de Armas igual a 12 em uma arma média que cause 20 de dano e uma arma pesada que cause 24 de dano. Concede defesa P4 e 50 pontos de EH.",
					nivel: 8,
				},
				{
					id: "5",
					custo: { ouro: 10 },
					descricao:
						"Grupo de Armas igual a 15 em três armas a escolha do evocador. Concede defesa P5 e 60 pontos de EH.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o mago alquímico é capaz de animar armaduras. Estas devem ser couraças parciais com elmos fechados, de onde ela obterá toda a sua Energia Física.

A armadura, elmo, escudo e/ou arma que compõem o ser animado devem ser virgens, isto é, não podem ter sido utilizados.

Durante o ritual de encantamento, o mago deverá escolher a(s) arma(s) que o ser será capaz de utilizar, de acordo com o nível da magia (o dano da arma utilizada pela armadura não sofre ajuste de força). Após o ritual, a armadura será capaz de utilizar apenas a(s) arma(s) e/ou escudo que foram encantadas com ela no ritual.

Após o ritual de encantamento a armadura se tornará um servo fiel ao evocador, executando qualquer missão desde de que esta não contenha mais de 25 palavras, não envolva qualquer tipo de avaliação por parte da armadura, nem envolva critérios que não possam ser captados pelo sentido da visão ou sejam subjetivos.

As armaduras são imunes a toda e qualquer ilusão ou ataque de origem mental.

Caso a armadura venha a receber algum dano em sua estrutura, este será recuperado a razão de 1 ponto por hora. Caso a EF do ser seja levada à faixa de inconsciência (entre 0 e –15) a armadura cairá, se recompondo normalmente. Se a Energia Física do ser for levada à –16 ou menos, o encanto da animação metálica será desfeito. Um mesmo místico não pode ter mais de 3 armaduras animadas em um mesmo período de tempo.

O nível da magia diz os parâmetros gerais do ser, as armas que ele será capaz de utilizar, seu valor de grupo de armas e o custo do ritual.

* O parâmetro para altura das armaduras animadas será relativo ao dos humanos.

* A resistência à magia do ser será igual ao nível da magia “Animação Metálica” usada para animar a armadura.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.ANO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.animacaoVegetal,
			nome: "Animação Vegetal",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 4 },
					descricao: "Anima uma árvore de Porte menor.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 3 },
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					descricao: "Anima uma árvore de Pequeno porte.",
					nivel: 3,
				},
				{
					id: "2",
					custo: { ouro: 5 },
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 2 },
					descricao: "Anima uma árvore de Médio porte.",
					nivel: 5,
				},
				{
					id: "3",
					custo: { ouro: 7 },
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 3 },
					descricao: "Anima uma árvore de Médio porte.",
					nivel: 7,
				},
				{
					id: "4",
					custo: { ouro: 9 },
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					descricao: "Anima uma árvore de Grande porte.",
					nivel: 9,
				},
			],
			descricao: `Este ritual transforma árvores em seres de aparência vagamente humanóide (semelhante a um Enida) sob controle do evocador. Na verdade este ritual transforma árvores comuns em Árvores Animadas (veja os detalhes delas no Livro de Criaturas).

O custo do ritual e o poder da criatura variam com o porte da árvore e a dificuldade do efeito usado. As árvores podem ser classificadas em porte menor (entre 2m e 3m}, pequeno porte (entre 3m e 4m}, médio porte (entre 4m e 5m) e grande porte (entre 5m e 7m). Qualquer árvore que seja de tamanho maior do que as capacidades do nível utilizado não será afetada pelo ritual, o karma e os materiais serão gastos inutilmente. O evocador só pode ter uma Árvore Animada por vez com este ritual.

A árvore animada realizará apenas comandos de baixa complexidade vindos do evocador, tais como "Empurre essa rocha" ou "Ataque aquela criatura". Caso o evocador deseje que a Árvore Animada execute tarefas mais complexas, ele precisará manter a concentração enquanto a controla. Além disso, também é requisito estar a menos de 50m da Árvore, caso contrário o ser ficará imóvel até que as condições necessárias se restabeleçam.

Sacerdotes de Sevides costumam costumam animar árvores para auxilia-los em tarefas da lavoura, das mais leves como espantar pássaros indesejados da plantação, até defender as terras de criaturas invasoras como orcos e goblins. Por outro lado, Magos naturalistas animam árvores para proteção de seus refúgios, alguns deles mudam árvores de local para criar verdadeiras fortalezas e caminhos intransponíveis.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.anulacaoMistica,
			nome: "Anulação Mística",
			niveis: [
				{
					id: "0",
					descricao: "Cria uma área de um metro de raio.",
					nivel: 1,
					evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 1, isRaio: true },
				},
				{
					id: "1",
					descricao: "Cria uma área de dois metros de raio.",
					nivel: 3,
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					alcance: { tipo: AlcanceEnum.METRO, valor: 2, isRaio: true },
					secundario: {
						id: "0",
						nivel: 0,
						descricao: "Pode ser direcionada para uma pessoa.",
						evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					},
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
					evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					alcance: { tipo: AlcanceEnum.METRO, valor: 4, isRaio: true },
					descricao: "Cria uma área de quatro metros de raio.",
					nivel: 5,
					secundario: {
						id: "0",
						nivel: 0,
						descricao:
							"Pode ser direcionada até duas pessoas com distancia máxima de 10 metros entre os alvos.",
						alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
						evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
					},
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 6, isRaio: true },
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					descricao: "Cria uma área de seis metros de raio.",
					nivel: 7,
					secundario: {
						id: "0",
						nivel: 0,
						alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
						duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
						evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
						descricao:
							"Pode ser direcionada até três pessoas com distancia máxima de 15 metros entre os alvos.",
					},
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 10, isRaio: true },
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					descricao: "Cria uma área de dez metros de raio.",
					nivel: 9,
					secundario: {
						id: "0",
						nivel: 0,
						alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
						duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
						evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
						descricao:
							"Pode ser direcionada até três pessoas com distancia máxima de 30 metros entre os alvos.",
					},
				},
			],
			descricao: `Com este milagre, o místico pode criar um campo que impossibilita a utilização de magias de qualquer natureza ou, em seu segundo efeito, direcionar a magia para um alvo específico que terá direito há uma rolagem de Resistência à Magia.

Caso escolha o primeiro efeito – criação de um campo, a área afetada pelo encantamento anula quaisquer magias cujos níveis sejam iguais ou inferiores aos do campo de anulação mística. Assim, se for evocada anulação mística 7, um mago que evoque alguma magia nível 4, gastará seus pontos de karma e não conseguirá nenhum resultado. Caso evoque uma magia nível 8 não terá nenhum empecilho. A única exceção para essa magia é a magia Quebra de Encantos, pois é possível evocar a quebra de encantos com o mesmo nível da magia anulação mística, enquanto qualquer outra magia só terá seu efeito realizado caso o nível seja maior (e não igual) ao do campo. Itens encantados seguem a mesma regra. Se alguém desejar usar um anel com raio elétrico 4, só terá o efeito realizado caso o campo de anulação mística tenha nível menor que 4. A evocação é variável, podendo ser instantânea ou levar a um ritual que custa 2 moedas de ouro.

Se a escolha do usuário for pelo segundo efeito, o(s) alvo(s) terá(ão) direito à Resistência à Magia, caso não passe(m}, ficará(ão) sob efeito do encantamento até que este seja quebrado ou que o efeito passe.

Esse milagre costuma ser muito utilizado em masmorras de castelos, em especial as dos países em que a magia é mais presente como Calco ou Portis. As famosas celas antimágicas são criadas a partir desta magia. Só é possível criar um campo de anulação mística que esteja a uma distância maior do que 20 metros de outra área encantada com esta magia. Caso contrário, a magia falhará.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.apelo,
			nome: "Apelo",
			niveis: [
				{
					id: "0",
					descricao: "Conjura temporariamente um enviado menor.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Conjura temporariamente um enviado tipo I.",
					nivel: 3,
				},
				{
					id: "2",
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					custo: { ouro: 10 },
					descricao:
						"Conjura um enviado menor para servir o evocador até a morte (do enviado ou do evocador).",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Conjura temporariamente um enviado tipo II",
					nivel: 5,
				},
				{
					id: "4",
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					custo: { ouro: 30 },
					descricao:
						"Conjura um enviado tipo I para servir o evocador até a morte (do enviado ou do evocador).",
					nivel: 6,
				},
				{
					id: "5",
					descricao: "Conjura temporariamente um enviado tipo III.",
					nivel: 7,
				},
				{
					id: "6",
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					custo: { ouro: 50 },
					descricao:
						"Conjura um enviado tipo II para servir o evocador até a morte (do enviado ou do evocador).",
					nivel: 9,
				},
			],
			descricao: `Com esse milagre, o sacerdote pede ajuda ao seu deus, que responde mandando enviados para solucionar seus problemas ou ajudá-lo em suas funções.

O ser conjurado permanece com o evocador por 30 rodadas, normalmente. Os efeitos Apelo 4, 6 e 9 são rituais que fazem com que o enviado fique permanentemente ajudando o sacerdote. Apenas uma dessas criaturas pode ficar permanentemente com o sacerdote. A conjuração temporária tem evocação de uma rodada e a permanente é ritual.

Esta magia não deverá ser evocada levianamente, apenas em caso de necessidade real. Caso seja evocada em uma situação que não seja de extrema necessidade ou se for evocado por um motivo efêmero e/ou mundano, a magia falhará e o sacerdote será punido pelo seu deus, o que normalmente implicará na perda de seus poderes, ou mesmo por alguma maldição (o Mestre deverá decidir a melhor forma de punir o sacerdote).

Caso o enviado morra ou a duração chegue ao fim, ele desaparece, voltando para junto de seu o deus.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.aprimorarHabilidades,
			nome: "Aprimorar Habilidades",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.USO, valor: 1 },
					descricao: "Bônus ou Redução de 1 Nível em um rolamento.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.USO, valor: 1 },
					descricao: "Bônus ou Redução de 2 Níveis em um rolamento.",
					nivel: 3,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.USO, valor: 2 },
					descricao: "Bônus ou Redução de 2 Níveis em um rolamento.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.USO, valor: 3 },
					descricao: "Bônus ou Redução de 2 Níveis em um rolamento.",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.USO, valor: 3 },
					descricao:
						"Idem ao anterior, mas agora um dos usos pode transformar um rolamento Impossível em Absurdo (Cinza).",
					nivel: 9,
				},
			],
			descricao:
				"Ao adquirir pelo menos 1 nível neste encanto, o evocador terá de escolher até 3 habilidades e ao adentrar em uma especialização, este poderá escolher mais 5 novas habilidades. As habilidades que podem ser escolhidas são: Acrobacias, Ações Furtivas, Aplicar Esforço, Carpintaria, Corrida, Escalar Superfícies, Escapar, Lidar com Animais, Manusear Armadilhas, Medicina, Montar Animais, Natação, Navegação, Seguir Trilhas, Sobrevivência, Trabalhos Manuais, Usar Sentidos e Venefício. Somente as habilidades escolhidas terão seus níveis de dificuldade diminuídos de acordo com os efeitos abaixo; uma vez escolhida a habilidade não é mais possível trocá-la. Note que, caso o místico não possua nível na habilidade que tenha escolhido, este encanto não poderá ser utilizado.",
			extra: [
				"Este feitiço pode ser evocado em conjunto ao uso de uma habilidade, caso seja evocado desta maneira não gastará a ação da rodada, mas gastará 1 uso automaticamente. O encanto irá entrar em colapso se: todos os usos forem gastos, se o a duração máxima for alcançada ou se for evocado novamente. Neste último caso, o efeito mais recente torna-se o vigente. É importante ressaltar que com exceção do efeito 9, esta magia não reduz o nível de dificuldade se ela for Impossível.",
			],
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: {
				tipo: DuracaoEnum.USO,
				descricao: "Uso(s) ou 12 horas",
			},
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.areaDePaz,
			nome: "Área de Paz",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.PESSOAL },
					duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
					descricao: "A área de paz restringe-se apenas ao sacerdote.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 2, isRaio: true },
					descricao: "A área de paz é de 2 metros de raio.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 4, isRaio: true },
					descricao: "A área de paz é de 4 metros de raio.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 10, isRaio: true },
					descricao: "A área de paz é de 10 metros de raios.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 10, isRaio: true },
					descricao: "A área de paz é de 10 metros de raios.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					alcance: { tipo: AlcanceEnum.VARIAVEL },
					descricao:
						"Neste nível, o sacerdote pode criar uma área de paz. Para tal, o sacerdote deverá fazer um ritual cujos sacrifícios valem 5 m.o para cada metro de raio que se deseje formar a área, sendo que no máximo a área poderá atingir 10 metros de raio. Milagre muito utilizado nos templos de Selimom (os maiores, que podem arcar com os custos do ritual).",
					nivel: 10,
				},
			],
			descricao: `Com este milagre, o sacerdote de Selimom cria ao seu redor uma área pacífica que repudia todo aquele que possui desejos violentos contra aqueles presentes na área. Na prática, qualquer um que tente atacar qualquer pessoa na área deverá fazer uma Resistência à Magia. Caso resista, poderá atacar normalmente, mas deverá fazer uma resistência à magia por rodada.

A área da magia é alterada de acordo com o nível e o sacerdote pode escolher entre colocar a área móvel consigo ou fixá-la formando um círculo imóvel, ambas as opções tem como centro o próprio sacerdote no instante da evocação do milagre.`,
			extra: [
				"Esse milagre evita que qualquer um ataque pessoas dentro da área, inclusive ataques à distância como arco e flecha e magias como bola de fogo e raio elétrico. Entretanto, se qualquer pessoa protegida pelo milagre atacar ou realizar qualquer encanto, a área de paz é desfeita automaticamente.",
			],
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.armadilha,
			nome: "Armadilha",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.DIA, valor: 10 },
					descricao: "Armazena até 3 pontos de Karma.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.DIA, valor: 20 },
					descricao: "Armazena até 6 pontos de Karma.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					descricao: "Armazena até 9 pontos de Karma.",
					nivel: 3,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.MES, valor: 2 },
					descricao: "Armazena até 9 pontos de Karma.",
					nivel: 4,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.MES, valor: 5 },
					descricao: "Armazena até 12 pontos de Karma.",
					nivel: 6,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					descricao: "Armazena até 21 pontos de Karma.",
					nivel: 8,
				},
				{
					id: "6",
					duracao: { tipo: DuracaoEnum.PERMANENTE },
					descricao: "Armazena até 30 pontos de Karma.",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite que uma ilusão seja armazenada em um local para ser liberada de acordo com uma determinada condição especificada no momento de sua evocação. O tempo que uma ilusão permanece válida após ser armazenada e a perfeição da magia que pode ser armazenada dependem da dificuldade do efeito usado pelo evocador.

Esta magia é evocada no local onde a ilusão que se deseja armazenar deve ficar (obrigatoriamente um local imóvel). Na rodada seguinte ao final da evocação deste encantamento a ilusão que se deseja armazenar deve ser evocada pelo mesmo místico que evocou a magia Armadilha. Ao final da evocação da ilusão, a condição na qual a mesma será disparada deve ser estabelecida. Esta condição é uma frase de 15 palavras ou menos. Quaisquer características que possam ser captadas pelos sentidos humanos da visão e da audição podem ser usadas, mas critérios subjetivos não são válidos.

Assim, a condição "dispare quando um orco de elmo preto entrar nesta sala e falar a palavra grokk" é válida, mas "dispare quando um homem feio entrar nesta sala" não é, pois envolve um critério subjetivo (beleza). Do mesmo modo, "dispare quando uma elfa com cheiro de flores entrar na sala" também não é válido, pois envolve um sentido que não é visão ou audição. Caso uma condição inadequada seja usada, a ilusão dispara imediatamente contra o evocador (além disso, é óbvio, do dinheiro do ritual ser perdido).

O tempo que uma magia fica armazenada e o número máximo de pontos de Karma que podem ser colocados nela dependem da dificuldade do efeito usado. Note que o número máximo de pontos de Karma inclui todos os pontos usados em uma evocação conjunta.

Quando a duração se esgota, a magia armazenada se dissipa sem efeito. Quando a Armadilha é disparada, a magia preparada se realiza e o encanto se dissipa, a não ser que o efeito de Armadilha usado tenha duração permanente. Neste caso, após a magia armazenada ser disparada o efeito fica sem atuar por 24 horas. Após este tempo a Armadilha volta a atuar normalmente.

Finalmente, este encanto não pode ser evocado a menos de 10 metros do local onde outra magia Armadilha está colocada. Caso isto aconteça, ambas as magias se dissolvem imediatamente sem fazer efeito. Os materiais usados para a evocação custam 1 moeda de ouro por Dificuldade do efeito usado. Ou seja, evocar o efeito Armadilha 3 custa 3 moedas de ouro.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.armadilhaNatural,
			nome: "Armadilha Natural",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.HORA, valor: 24 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 3, isRaio: true },
					descricao:
						"A natureza auxilia o evocador fazendo uma armadilha que causa 12 pontos de dano à vítima.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 5, isRaio: true },
					descricao:
						"Idem ao anterior, porém causa 18 pontos de dano na vítima, que permanece atordoada por 5 minutos, além disso recebendo -1 em suas ações por 1 dia.",
					nivel: 3,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 2 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 7, isRaio: true },
					descricao:
						"Idem ao anterior, porém causa 22 pontos de dano na vítima, que permanece desmaiada por 10 minutos, além disso recebendo -2 em suas ações por 1 dia.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 3 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 9, isRaio: true },
					descricao:
						"Idem ao anterior, porém causa 26 pontos de dano na vítima, que fica presa na armadilha e atordoada por 30 minutos, além disso recebendo -4 em suas ações por 1 dia.",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 12, isRaio: true },
					descricao:
						"Idem ao anterior, porém causa 30 pontos de dano na vítima, que fica presa na armadilha desmaiada por 1 hora, além disso recebendo -8 em suas ações por 2 dias.",
					nivel: 9,
				},
			],
			descricao: `Com esta esta magia o evocador pede auxílio para a natureza para criar uma armadilha natural. A magia tem dependência de habitat, pois os efeitos são naturais: um galho cai na vítima, uma cobra pica a vítima, a vítima pisa em um espinho venenoso ou cai em um buraco, etc... o efeito é uma ajuda da natureza, como se o ambiente ajudasse o evocador. O dano é causado à vítima como um ataque mágico: nível da magia + aura para coluna e o dano é fracionado normalmente como em um ataque 25% 50% 75% 100%. As debilitações entram caso a vítima receba 50% de dano da armadilha ou mais, caso contrário só recebera o dano.

No efeito em que a vítima fica presa, ela poderá fazer um teste usando a habilidade mais pertinente para o momento a critério do mestre com dificuldade difícil. Exemplo: se cair em um buraco profundo, poderá tentar Escalar Superfícies, um galho grande caiu em cima da vítima ele pode Aplicar Esforço para retirar, uma rede prende a vítima fazendo assim usar Escapar e etc...

O evocador só pode manter até 3 armadilhas mágicas ao mesmo tempo. Caso faça uma quarta armadilha, a primeira será quebrada e assim por diante. Enquanto a armadilha durar, o evocador sentirá quando a armadilha for disparada de onde ele estiver. A armadilha só pode ser detectada através da magia detecção de magias.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
		},
		{
			id: MagiaEnum.armaduraElemental,
			nome: "Armadura Elemental",
			niveis: [
				{
					id: "0",
					descricao: "Absorve 6 de dano.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Absorve 12 de dano.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Absorve 20 de dano.",
					nivel: 6,
				},
				{
					id: "3",
					descricao: "Absorve 30 de dano.",
					nivel: 8,
				},
				{
					id: "4",
					descricao: "Absorve 40 de dano.",
					nivel: 10,
				},
			],
			descricao: `Com o uso deste encantamento o evocador forma em torno de si um campo de energia mágica que o protege de ataques de elementos naturais como fogo, gelo, eletricidade, etc. Esta magia pode ser usada fora de Ambiente Natural sem nenhum problema.

Este feitiço pode absorver certa quantidade de dano feito por ataques elementais antes de ser dissipada. A quantidade de dano que pode ser absorvida antes do feitiço entrar em colapso é determinada pela dificuldade do efeito usado como explicado abaixo. Caso a duração do feitiço se esgote, a armadura se desfaz e os pontos restantes de absorção são perdidos.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 15 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.armaduraNatural,
			nome: "Armadura Natural",
			niveis: [
				{
					id: "0",
					descricao: "Absorve 6 pontos de dano.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Absorve 12 pontos de dano.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Absorve 18 pontos de dano.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Absorve 24 pontos de dano.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Absorve 30 pontos de dano.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Absorve 36 pontos de dano.",
					nivel: 10,
				},
			],
			descricao: `Com o uso deste encantamento, o evocador forma em torno de si um campo de energia que o protege de ataques de origem natural.

Este feitiço pode absorver certa quantidade de dano feito por magias que utilizem a força da natureza e que causem dano direto (Chuva Ácida, Feixes Incandescentes, Relâmpagos, etc.}, parando então de funcionar.

A quantidade de dano que pode ser absorvida antes do feitiço entrar em colapso é determinada pela dificuldade do efeito usado, como explicado abaixo. Caso a duração do feitiço se esgote, a armadura se desfaz e os pontos restantes de absorção são perdidos.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.MINUTO, valor: 10 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.arqueirismo,
			nome: "Arqueirismo",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.USO, valor: 1 },
					descricao:
						"O tiro nunca erra o alvo (verde e branco viram amarelo) quando usada em situação fora de combate e o evocador possa se concentrar por pelo menos uma rodada.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.USO, valor: 1 },
					descricao:
						"Semelhante ao anterior, mas pode ser usada para fazer um ataque de surpresa parcial (antes de um combate ser iniciado) o que permite se usar a técnica de Ataque Oportuno, mas é necessário se concentrar por duas rodadas.",
					nivel: 3,
					secundario: {
						id: "0",
						nivel: 0,
						duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
						descricao:
							"Além disto, há a opção de usar durante um combate, caso obtenha um dano no físico ou 100% na EH o oponente é desarmado ou o que estiver segurando com uma das mãos é deixado cair. O evocador pode escolher qual das mãos ele deseja afetar.",
					},
				},
				{
					id: "2",
					duracao: {
						tipo: DuracaoEnum.RODADA,
						valor: 3,
						descricao:
							"3 rodadas, mas a penalidade -2 e o efeito da perda de EF dura até a flecha ser retirada (que gasta pelo menos uma ação de combate)",
					},
					descricao:
						"Durante um combate, caso obtenha um dano no físico, o evocador encrava a flecha no corpo do oponente, que causará -2 de penalidade em ações (combate e habilidades) que exijam movimentação. O oponente passa a perder 1 ponto de EF por rodada.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao:
						"O jogador faz 2 ataques (com o arco) na rodada. Os 2 ataques são normais, mas o dano do segundo terá um de redutor de 25% no dano. Para o segundo ataque, que possui o redutor de 25% no dano, caso erre o alvo (branco) este não vira falha (verde).",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
					descricao:
						"O jogador pode optar em causar o dobro do dano quando um crítico é obtido. Deve-se fazer o rolamento do crítico para saber o dano obtido, mas os efeitos especiais não devem ser contados. Este efeito deve ser usado antes de se fazer o rolamento que indica o dano do efeito crítico.",
					nivel: 9,
				},
			],
			descricao: `Esta magia aumenta a habilidade com arco e flecha do evocador, concedendo bônus e efeitos especiais. Esta magia deve ser evocada no início de uma rodada, antes do uso de arco e flecha, sendo que ela não conta como uma ação na rodada. Os efeitos de cada nível não são cumulativos entre si, mas o jogador pode escolher qualquer efeito do nível lançado para baixo. Esta escolha deve ser feita em cada rodada que a magia durar, logo após se lançar os dados do ataque.

Exemplo: Um rastreador evoca Arqueirismo 7. Ele faz um rolamento de dado e ele tira amarelo. Ele pode escolher os efeitos de 1 a 7, mas como tirou amarelo, decide escolher o efeito 7 que permite ele fazer um segundo ataque com 25% de redutor. Como a magia dura 3 rodadas, na segunda rodada ele faz um novo tiro e desta vez ele tira azul (100%) então ele decide usar o efeito 3 e desarma o oponente que foge do combate. Na 3ª rodada, ele decide atacar outro oponente e tira um crítico. Como ele lançou o efeito 7, então decide usar o efeito 7. O critico é resolvido normalmente e ele pode fazer um segundo ataque com 25% de redução do dano. Se ele tivesse lançado Arqueirismo 9, poderia ter escolhido o efeito de dobrar o dano.

Uma limitação desta magia, é que o Rastreador tem de fazer pelo menos uma vez um pequeno ritual de 30 minutos de purificação de seu arco e de suas flechas. Este ritual não gasta Karma e deve ser feito em ambiente natural. Somente após este ritual a magia pode ser evocada, pois é a sua ligação com a natureza que permite ele fazer estes efeitos extraordinários. O ritual não precisa ser refeito a cada evocação, mas caso o Rastreador saia do ambiente natural por mais de uma semana ligação é perdida e ele deve fazer de novo o ritual de purificação antes de poder usar novamente a magia.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.assimilacao,
			nome: "Assimilação",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 10 },
					descricao:
						"Permite fazer uma Assimilação Temporária de qualquer magia da lista do Colégio Alquímico de nível 1.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"Permite fazer uma Assimilação Armazenada em qualquer magia da lista do Colégio Alquímico e da lista básica de nível máximo 2.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 30 },
					descricao:
						"Permite fazer uma Assimilação Temporária de qualquer magia da lista do Colégio Alquímico e da lista básica de nível 2.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					descricao:
						"Permite fazer uma Assimilação Armazenada de qualquer magia contida na lista de todos os Colégios de Magia e da lista básica, de nível máximo 5.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.HORA, valor: 3 },
					descricao:
						"Permite fazer uma Assimilação Temporária de qualquer magia contida na lista de todos os Colégios de Magia e da lista básica, de nível máximo 6.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.HORA, valor: 12 },
					descricao:
						"Permite fazer uma Assimilação Armazenada de qualquer magia contida na lista de todos os Colégios de Magia, da lista básica, da lista de Bardo e Rastreador, de nível máximo 8.",
					nivel: 9,
				},
				{
					id: "6",
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					descricao:
						"Permite fazer uma Assimilação Temporária de qualquer magia contida na lista de todos os Colégios de Magia, da lista básica, da lista de Bardo e Rastreador, de nível máximo 8.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto o mago poderá “copiar” os feitiços de outros místicos fazendo com que seja possível utilizá-los.

Para copiar os encantos de outro místico, o evocador deverá primeiramente evocar esta magia sobre um alvo escolhido (que terá direito a resistir). Quando o alvo falhar em sua resistência á magia, o evocador estará ligado energeticamente com ele durante as próximas 7 rodadas. A partir de então, o evocador poderá “copiar” qualquer encanto que o alvo evocar dentro deste período de tempo. O evocador deverá escolher até 3 dos feitiços que o alvo evocar durante o tempo da ligação energética. Depois de escolhido(s) o(s) encanto(s}, a ligação energética será rompida e o(s) encanto(s) escolhido(s) será (ao) assimilado(s).

Exemplo: Um mago tentar copiar o encanto “Maldições” evocado por um demônio, mas a evocação da magia Maldições (3 rodadas) deve ser realizada durante o tempo da ligação energética (7 rodadas). Se a evocação da magia Maldições fosse iniciada na quinta rodada da ligação energética, o efeito da maldição seria lançado após o termino da ligação energética (8ª radada}, por isso o encanto não poderia ser Assimilado. O mesmo vale para uma situação em que a ligação energética seja feita durante o tempo da evocação de alguma magia.

A Evocação, o alcance e a duração da magia assimilada permanecem iguais aos da magia original, ou seja, o mago poderá utilizar a magia assimilada normalmente. Mas note que somente o efeito de dificuldade usado pelo alvo pode ser evocado. Se a magia assimilada for Doenças 7, o evocador não poderá utilizar os efeitos de Doenças 5, 3 e 1.

Existem duas formas de assimilação de magias: A “Assimilação Temporária” e a “Assimilação Armazenada”.

A Assimilação Temporária permite que o evocador use a magia assimilada, o quanto quiser, em um determinado período curto de tempo.

A assimilação Armazenada permite que uma magia assimilada seja “estocada” durante um período longo de tempo, no entanto ela só poderá ser evocada uma vez após a assimilação.

Note que o místico não pode manter mais de 3 magias assimiladas em um mesmo período de tempo, seja qual for o tipo de Assimilação realizada.

A origem da magia que poderá ser assimilada, o tipo de assimilação e o tempo de cada, variam com a dificuldade do efeito. (A “lista básica” descrita nos efeitos da magia refere-se apenas a lista de magias básicas dos Magos).

Não é possível assimilar magias de itens mágicos Pois somente criaturas podem ser alvos deste feitiço.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.assombracao,
			nome: "Assombração",
			niveis: [
				{
					id: "0",
					custo: { prata: 2 },
					descricao:
						"Atrai até 2 estágios de mortos-vivos para o local assombrado.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { prata: 4 },
					descricao:
						"Atrai até 3 estágios de mortos-vivos para o local assombrado.",
					nivel: 2,
				},
				{
					id: "2",
					custo: { prata: 8 },
					descricao:
						"Atrai até 6 estágios de mortos-vivos para o local assombrado.",
					nivel: 4,
				},
				{
					id: "3",
					custo: { prata: 12 },
					descricao:
						"Atrai até 9 estágios de mortos-vivos para o local assombrado.",
					nivel: 6,
				},
				{
					id: "4",
					custo: { prata: 16 },
					descricao:
						"Atrai até 12 estágios de mortos-vivos para o local assombrado.",
					nivel: 8,
				},
				{
					id: "5",
					custo: { prata: 20 },
					descricao:
						"Atrai até 15 estágios de mortos-vivos para o local assombrado.",
					nivel: 10,
				},
			],
			descricao: `Esta magia canaliza uma quantidade de energia negativa e as vincula a um ambiente fechado (casas, torres, castelos...) fazendo com que mortos-vivos incorpóreos (Fantasmas, Assombrações, Sombras, Espectros...) sejam atraídos para o local. A quantidade e o tipo de criaturas que irão assombrar o local dependem da quantidade de estágios de mortos-vivos que o efeito indicar, assim o efeito de dificuldade 8 poderá atrair 4 sombras menores (3+3+3+3=12) ou em vez disso apenas um espectro maior (12=12). O evocador não tem controle sobre o tipo de criatura que será atraída para o local (cabe ao mestre decidir quais criaturas serão atraídas para o local, de acordo com o número de estágios indicado no efeito).

Caso uma pessoa que esteja no local assombrado morra, esta deverá fazer uma resistência à magia, em caso de falha será transformada em Assombração, e não poderá deixar o local até que o tempo de duração da magia se esgote.

O custo do ritual é de 2 moedas de prata por nível de dificuldade. A quantidade de estágios de mortos-vivos que serão atraídos para o local varia com a dificuldade do efeito. A magia só funciona uma vez e quando um morto-vivo for esconjurado ou destruído ela não atrairá mais mortos-vivos. Enquanto existir um morto-vivo esta magia não poderá ser evocada novamente no mesmo lugar.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.ANO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.ataqueImpetuoso,
			nome: "Ataque Impetuoso",
			niveis: [
				{
					id: "0",
					descricao: "Concede +1/+2/+3/+4 de dano.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Concede +2/+4/+6/+8 de dano.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Concede +3/+8/+12/+12 de dano.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Concede +4/+8/+12/+16 de dano.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Concede +5/+10/+15/+20 de dano.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Concede +6/+12/+18/+24 de dano.",
					nivel: 10,
				},
			],
			descricao: `Com um grito feroz e ensurdecedor, o usuário reforça seu corpo e sua arma em um único ataque impetuoso. Esta magia deve ser lançada ao mesmo tempo em que se faz um ataque, mas não pode ser invocada mais de uma vez na mesma rodada. A magia deve ser lançada antes do dado de ataque ser resolvido e o dano final deve ser a soma do dano que a arma provocaria normalmente, somado ao dano que esta magia provoca mais o bonus de aura. O dano extra é considerado mágico, do mesmo tipo que a arma que a provocou (corte mágico no caso de um machado, por exemplo).

Nos níveis da magia apresentados abaixo, os danos estão apresentados na forma dos resultados Amarelo/Laranja/Vermelho/Azul, que ainda devem ser somados à aura. Exemplo:

Kardim sacerdote de Crezir possui Aura 3, faz um ataque com sua espada e tira laranja, como ele tem Força 2, faria 12 de dano (10+2). Como ele invocou (antes de rolar o dado) a magia Ataque Impetuoso 6 ele fará um total de 23 de dano (10 da arma, 2 da força, 8 da magia e 3 da Aura).`,
			extra: [
				"A magia só concede bônus de dano. Nenhum bônus é concedido nas Colunas de Ataque.",
			],
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.ataqueTermico,
			nome: "Ataque Térmico",
			niveis: [
				{
					id: "0",
					descricao:
						"Afeta no máximo um ser ou objeto, alterando em 9ºC a temperatura do corpo, causando 3 pontos de dano se usado em criaturas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Afeta no máximo dois seres ou objetos, alterando em 9ºC a temperatura externa do corpo, causando 3 pontos de dano se usado em criaturas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Afeta no máximo dois seres ou objetos, alterando em 12ºC a temperatura externa do corpo, causando 5 pontos de dano se usado em criaturas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Afeta no máximo três seres ou objetos, alterando em 12ºC a temperatura externa do corpo, causando 5 pontos de dano se usado em criaturas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Afeta no máximo três seres ou objetos, alterando em 21ºC a temperatura externa do corpo, causando 7 pontos de dano se usado em criaturas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Afeta no máximo quatro seres ou objetos, alterando em 30ºC a temperatura externa do corpo, causando 10 pontos de dano se usado em criaturas. Se o alvo falhar em sua resistência à magia deve tentar resistência física contra força de ataque 1, em caso de falha a vítima fica inconsciente por uma hora por choque térmico.",
					nivel: 10,
				},
			],
			descricao:
				"Com essa magia o mago pode alterar a temperatura externa de objetos e/ou seres, (seres têm direito a resistir á magia.). Caso o alvo falhe na resistência levará o dano descrito na EF, sem armadura.",
			alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.atoFalho,
			nome: "Ato Falho",
			niveis: [
				{
					id: "0",
					descricao:
						"O alvo recebe -3 Colunas de Resolução na sua próxima rodada em ações de ataque ou Teste de Habilidade.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O alvo recebe -5 Colunas de Resolução na suas duas próximas rodadas em ações de ataque ou Teste de Habilidade. O alvo é malsucedido automaticamente num teste de dificuldade Muito Difícil ou Absurdo.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O alvo recebe -7 Colunas de Resolução nas suas próximas três rodadas em ações de ataque ou Teste de Habilidade. O encanto também afeta a mente do alvo fazendo-o ser obrigado a responder com a verdade um questionamento de até seis palavras feito pelo sacerdote.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O alvo recebe -9 Colunas de Resolução nas suas próximas quatro rodadas em ações de ataque ou Teste de Habilidade. O alvo é malsucedido automaticamente num teste de dificuldade Difícil, Muito Difícil ou Absurdo e encanto também afeta a mente do alvo fazendo-o ser obrigado a responder com a verdade um questionamento de até seis palavras feito pelo sacerdote.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O alvo recebe -11 Colunas de Resolução nas suas próximas cinco rodadas em ações de ataque ou Teste de Habilidade. O encanto também afeta a mente do alvo fazendo-o se sentir compelido a delatar suas falhas morais. O alvo deve responder a um questionamento de até seis palavras feito pelo sacerdote ou (caso não haja questionamento) contar algo do qual se arrepende profundamente.",
					nivel: 9,
				},
			],
			descricao: `Com este milagre o sacerdote de Plandis pode canalizar o poder de seu deus e utiliza-lo para prejudicar e confundir seu inimigo, causando-lhe uma ação falha. O encanto também pode afetar a mente do alvo deixando-o inclinado a delatar suas falhas caso não obtenha êxito em uma Resistência a Magia. A evocação do encanto é discreta, só podendo ser percebida por meios mágicos ou num teste Muito Difícil de Misticismo. Quando falha na sua RM a vítima sofre uma penalidade nas suas ações na próxima rodada conforme o nível indicado. Em alguns níveis a magia obriga o alvo a falar a verdade ou a contar um de seus crimes pessoais passados, o que o alvo falará dependerá de estímulos externos na forma de uma pergunta feita pelo sacerdote após a conjuração. Caso este não pergunte nada a vítima falará algo do qual se arrepende, de acordo com sua consciência.

Note que a magia não afeta a personalidade do alvo, um assassino poderia se arrepender de não ter matado vítimas o bastante antes de ser pego, um padeiro de adicionar água ao pão antes de pesa-lo, etc.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.auraAmeacadora,
			nome: "Aura ameaçadora",
			niveis: [
				{
					id: "0",
					descricao:
						"As vítimas que forem bem sucedidas em um teste de Usar os Sentidos ficarão sem ação por uma rodada e sofrerão na próxima rodada que voltarem a jogar um reajuste negativo de -1 em todos os rolamentos por 3 rodadas. Entretanto mesmo falhando no teste este obrigatoriamente perceberá a obra de arte se três pessoas de seu grupo forem bem sucedidas no teste de Usar os Sentidos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"As vítimas que forem bem sucedidas em um teste de Usar os Sentidos ficarão sem ação por uma rodada e sofrerão na próxima rodada em que jogar reajuste de -1.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "As vítimas ficam sem ação por 4 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "As vítimas ficam sem ação por 6 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "As vítimas ficam sem ação por 8 rodadas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"As vítimas ficam compenetradas na obra de arte por 5 rodadas, devendo ainda se submeter a um teste de resistência mágica, falhando receberá -6 pontos negativos em todas as habilidades nas próximas 5 rodadas.",
					nivel: 10,
				},
			],
			descricao: `Com o encanto Aura Ameaçadora, o evocador é capaz de imbuir uma expressividade ameaçadora em uma escultura ou pintura, na qual todo aquele que olhar para o objeto de arte se sentirá intimidado e incomodado com o objeto em questão.

Independentemente de ser uma pintura ou uma escultura, ela deverá retratar uma imagem intimidadora, mas não necessariamente malévola. Assim poderá ser uma escultura de uma gárgula ou de alguma besta, como pode ser uma estátua de um rei em sua majestade.

No caso de uma pintura, pode ser retratada uma cena violenta como uma guerra. Tal imagem necessariamente deverá ter no mínimo dois metros de comprimento e de largura. Já como escultura, as estátuas deverão ter no mínimo dois metros e meio de altura.

Tanto em um caso como em outro, o objeto de arte tem que ser muito familiar ao evocador, ou ele próprio tendo feito ou então sendo conhecedor das técnicas de escultura e/ou pintura e da história daquela obra específica para que o encanto possa ser realizado.

Atendidas essas condições, o encanto será utilizado apenas tocando na pintura ou escultura. Toda pessoa, à exceção do evocador, que olhar para aquela imagem deverá fazer um teste de Resistência à Magia. Caso passe, a pessoa se sentirá incomodada pela pintura ou pela estátua, mas não receberá nenhum outro efeito. Caso falhe, no entanto, a(s) vítima(s) não conseguirão fazer mais nada a não ser ficar olhando para a imagem ameaçadora, temerosas que tal imagem faça algo contra ela(s). Caso a vítima seja atacada neste estado, o feitiço se quebra. No entanto, este ataque é considerado como surpresa parcial.

O encantamento do objeto é de efeito permanente, e a pintura ou escultura ficará encantada passando a possuir aura imbuída. O efeito só é quebrado se for usado com sucesso a magia Quebra de Encantos.

Uma mesma pessoa não pode ser vítima duas vezes seguidas de uma só evocação. Este encanto é muitas vezes usado para proteger locais importantes, sendo a magia usada em pinturas gravadas na porta do local ou em estátuas próximas.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.PERMANENTE },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.auraDivina,
			nome: "Aura Divina",
			niveis: [
				{
					id: "0",
					descricao:
						"Todos os demônios e mortos-vivos recebem -1 coluna de ataque.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Todos os demônios e mortos-vivos recebem -2 colunas de ataque.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Todos os demônios e mortos-vivos recebem -3 colunas de ataque.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Todos os demônios e mortos-vivos recebem -4 colunas de ataque.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Todos os demônios e mortos-vivos recebem -5 colunas de ataque.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Todos os demônios e mortos-vivos recebem -6 colunas de ataque.",
					nivel: 10,
				},
			],
			descricao:
				"Com este milagre, o sacerdote de Cruine cria ao seu redor uma aura que incomoda demônios e mortos-vivos. Para essas criaturas a aura repele sua proximidade, dificultando atacar o sacerdote e seus companheiros que estejam na área protegida. Na prática, qualquer demônio ou morto-vivo que atacar terá seus ataques penalizados, sem ter direito a resistência à magia, uma vez que a aura não ataca magicamente as criaturas e se constitui em uma espécie de empecilho ao ataque. ",
			extra: [
				"Mesmo ataques à distância, inclusive magias de ataque, recebem penalidade. Entretanto, para qualquer outro ser além dos mencionados, a aura não tem qualquer efeito e é invisível e, portanto, imperceptível para seres não-místicos. Apenas o sacerdote é protegido pela aura.",
			],
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 20 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.auraEmocional,
			nome: "Aura Emocional",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 1, isRaio: true },
					descricao:
						"Imbui um local com uma aura cuja área seja de até 1 metro de raio.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 5 },
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 5, isRaio: true },
					descricao:
						"Imbui um local com uma aura cuja área seja de até 5 metros de raio.",
					nivel: 3,
				},
				{
					id: "2",
					custo: { ouro: 10 },
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 10, isRaio: true },
					descricao:
						"Imbui um local com uma aura cuja área seja de até 10 metros de raio. ",
					nivel: 5,
				},
				{
					id: "3",
					custo: { ouro: 20 },
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					alcance: { tipo: AlcanceEnum.METRO, valor: 15, isRaio: true },
					descricao:
						"Imbui um local com uma aura cuja área seja de até 15 metros de raio.",
					nivel: 7,
				},
				{
					id: "4",
					custo: { ouro: 40 },
					duracao: { tipo: DuracaoEnum.ANO, valor: 13 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 20, isRaio: true },
					descricao:
						"Imbui um local com uma aura cuja área seja de até 20 metros de raio. A duração é de 13 anos e o ritual custa 40 medas de ouro.",
					nivel: 9,
				},
			],
			descricao: `Os grandes acontecimentos deixam marcas profundas nas pessoas, modificando suas motivações, crenças, comportamento, enfim toda sua vida. Mas não só nas pessoas as marcas são evidentes, mas também em um local. O campo onde o massacre ocorreu, a casa de interrogatório, o templo que serviu de refúgio: todos podem ter uma marca que lembre os acontecimentos passados. O encanto Aura Emocional é capaz de imbuir um local com uma aura de modo que todo aquele que dele se aproximar sentirá uma sensação que corresponda à história do local. A distância e o tempo que a aura tem efeito variam conforme o nível, assim como os materiais necessários para a evocação.

Uma vez na presença da aura, qualquer ação que vise contrariar o sentimento do local só poderá ser realizada se a pessoa passar em um teste de Resistência à Magia contra o nível da magia. Esse teste deverá ser realizado a cada rodada até que o indivíduo falhe na sua Resistência à Magia ou saia da área. Assim, se um campo onde foram mortos vários inocentes estiver imbuído de uma aura, qualquer atitude que mostre felicidade não poderá ser realizada a menos que o indivíduo passe na Resistência à Magia. Da mesma forma, se uma sala na qual houve um grande acordo de paz entre reinos, for imbuída com uma aura, toda e qualquer ação que procure desavenças só poderá ser realizada caso a pessoa passe na sua Resistência à Magia. Isso poderá render muitos benefícios, na medida em que impede as pessoas de tomarem ações indesejadas. Dessa forma, o evocador poderá se utilizar desses locais para outros fins, como por exemplo, se refugiar em um local marcado pela paz ou comover um líder autoritário ao levá-lo a um lugar marcado pela tristeza.

Para se realizar a magia é necessário que seja escolhido um ponto central no local a ser encantado. Além disso, é necessário que um evento marcante e conhecido pelo evocador tenha ocorrido envolvendo o local. Obviamente a aura imbuída necessariamente provocará um sentimento condizente com tal acontecimento.`,
			extra: [
				"Caso a pessoa não passe na Resistência à Magia, ela terá uma forte sensação de que não pode fazer isso naquele lugar, a ponto de impedi-la de fazê-lo. No caso da pessoa conhecer o evento ocorrido, ela obrigatoriamente irá lembrá-lo.",
			],
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.auraMagica,
			nome: "Aura Mágica",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.DIA, valor: 3 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 10, isQuadrado: true },
					descricao:
						"Imbui aura mágica a uma superfície de até 10m², que passará a ter Resistência à Magia 1.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.SEMANA, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 100, isQuadrado: true },
					descricao:
						"Imbui aura mágica a uma superfície de até 100m², que passará a ter Resistência à Magia 4.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.MES, valor: 1 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 1000, isQuadrado: true },
					descricao:
						"Imbui aura mágica a uma superfície de até 1.000m², que passará a ter Resistência à Magia 7.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.ANO_E_DIA },
					alcance: { valor: 10000, isQuadrado: true, tipo: AlcanceEnum.METRO },
					descricao:
						"Imbui aura mágica a uma superfície de até 10.000m², que passará a ter Resistência à Magia 10.",
					nivel: 6,
				},
			],
			descricao: `Através desta magia, o mago imbui uma aura mágica a uma superfície de origem mineral ou vegetal, como paredes de pedra, portões de ferro, tábuas de madeira, telhas de barro, etc.

É possível imbuir auras mágicas a duas ou mais superfícies, desde que a soma de suas áreas não ultrapasse a capacidade máxima permitida pelo efeito usado.

A aura atribuída à superfície se portará exatamente como a aura de uma criatura, por isso, esta passará a ter resistência à magia (dada pelo efeito) para qualquer feitiço que aja sobre ela, como “Desintegração” e “Telecinese”, ou magias que possam ser vinculadas a ela como “Manipulação de Luz” e “Silêncio”. A superfície encantada poderá ainda anular magias como “Geomanipulação” e “Piromanipulação” que se quebram ao entrar em contato com a aura de criaturas. A aura também impede que Criaturas incorpóreas como “Espectros” atravessem as paredes encantadas.

É impossível imbuir aura mágica a criaturas, pois estas já possuem aura própria, caso isso seja feito a magia não terá nenhum efeito e os materiais serão gastos inutilmente.

A área da superfície afetada, a resistência à magia dada, e o tempo que a aura permanece em atividade variam com o efeito. O custo do ritual é de 1 moeda de ouro por nível de dificuldade do efeito.

O mago pode evocar essa magia diversas vezes para ampliar a área da superfície, mas a cada evocação, o valor do ritual deverá ser gasto novamente.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.ausencia,
			nome: "Ausência",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite passar despercebido por locais onde não há a menor preocupação de reconhecimento, como uma cidade em um dia normal.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite passar despercebido por locais onde há pouca preocupação de reconhecimento como em uma taverna muito movimentada.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Permite passar despercebido por locais onde há média preocupação de reconhecimento, como uma biblioteca comum ou um templo.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Permite passar despercebido por locais onde há alta preocupação de reconhecimento, como uma estalagem de luxo.",
					nivel: 8,
				},
			],
			descricao: `A normalidade gera indiferença. O que é muito comum acaba passando desapercebido, sejam lugares, objetos e até pessoas. Com o encanto Ausência o evocador é capaz de se apresentar de forma tão comum que acaba não sendo notado. Na prática é como se ele se tornasse, de fato, invisível.

Obviamente o evocador deverá sempre estar dentro dos “padrões de normalidade” para que o feitiço funcione. Assim, se no meio da cidade ele estiver vestido com roupas suntuosas não poderá passar despercebido; se ele entra em um templo de Selimom portando uma arma à mostra, será notado invariavelmente. Nesse sentido é sempre necessário que se estude antes o local pelo qual ele queira passar despercebido.

Quanto maior o nível da magia, mais fácil será passar por locais onde há atenção para a identificação das pessoas, conforme consta nos níveis descritos. Para todos os efeitos, alguém sobre o efeito de Ausência é como se estivesse invisível para as outras pessoas.`,
			extra: [
				"É impossível passar despercebido por locais aonde há total preocupação em se reconhecer as pessoas, como na entrada de um castelo ou colégio de magia, no caso de pessoas que estejam procurando pelo evocador ou ainda em locais com pouco movimento.",
			],
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.auxilioIncerto,
			nome: "Auxílio Incerto",
			niveis: [],
			descricao: `Com este milagre, o sacerdote de Plandis pede uma ajuda a seu deus, e é respondido de forma aleatória. A resposta poderá ser de grande ajuda ou mesmo inútil. O tipo de ajuda depende de qual contexto a magia foi evocada em situações descritas abaixo.

Preparação & Exploração - Quando os personagens estão explorando (ou se preparando) para um lugar o evocador pode rezar ao seu deus clamando por um milagre (evocação de 10 minutos). O resultado será lhe concedido no momento de maior necessidade daquele dia. Este contexto só pode ser usado uma vez ao dia. Em algum momento de descanso, o jogador precisa avisar ao mestre que seu personagem vai rezar Auxílio Incerto e sorteia o efeito. Pelas próximas 24h (dentro do jogo) ele pode decidir quando ativar o efeito sorteado.

Combate - Quando esta magia é evocada durante o combate.

Interpretação - Quando os personagens estão interagindo com outras pessoas (exemplo: conversando, negociando}, ou realizando algum trabalho.

A evocação também varia com o tipo: para o contexto de Combate e Interpretação é instantâneo, e para o efeito do contexto de Preparação & Exploração é um ritual de 10 min. Ao evocar o milagre o sacerdote faz sua oração. A resposta dessa oração depende do que será sorteada em uma das 3 listas que mais se aproxime do contexto. Então, definida a lista, joga-se um D20 para definir o efeito. A escolha do no nível do efeito é de livre decisão do jogador e pode ser entre 1 e o nível que personagem tem em Auxílio Incerto. Esta escolha deve ser feita antes do sorteio e o Karma é gasto de acordo com o nível do efeito escolhido.

Observação: caso a magia sorteada possua alguma limitação que impediria de ela ser evocada a magia é perdida. Mas é uma opção do mestre fazer que algo inusitado/improvável aconteça e que esta limitação suma, por exemplo: Relâmpagos só pode ser evocada quando tem uma nuvem em áreas a céu aberto, mas o Sacerdote está em uma grande caverna, ... uma nuvem surge temporariamente no teto para suprir a limitação!. Note que quem decide se algo inusitado/improvável vai acontecer é o Mestre que pode avaliar se o Sacerdote está ou não nas graças de Plandis. Sacerdotes que com frequência não seguem os preceitos do deus dificilmente receberão esta "ajudinha".

Combate

O personagem recebe a ajuda que o mestre julgar como menos eficaz desta.

Apelo

Área de Paz

Ataque Impetuoso

Auxílio Natural

Bravura

Corrente

Dádivas da Guerra

Dardos de Gelo

Degeneração Física

Feixes Incandescentes

Fogo Divino

Força Sagrada

Onda Destrutiva

Presença Intimidadora

Relâmpagos

Vigor

O mestre do jogo escolhe um efeito de qualquer (que seja favorável ao personagem).

O jogador escolhe a ajuda de sua preferência desse número para baixo.

O jogador recebe 2 ajudas: uma a sua escolha ente o 2 a 18, e outra que será um ajuda que sempre será uma coisa inusitada (e útil) que irá acontecer (o mestre escolhe). Por exemplo uma vaca cai do céu em cima de um inimigo.

Exploração e Preparação

O personagem recebe a ajuda que o mestre julgar como menos eficaz desta.

Detecção de Magias

Hidromanipulação

Lendas

Orientação

Perfeição.

Persistência

Proteção Divina.

Purificação

Resistência

Resistência Elemental

Restauração

Santuário Natural

Sexto Sentido

Visão de Batalhas

Visão Mística

Visão Noturna

O jogador escolhe a ajuda de sua preferência desse número para baixo.

O mestre do jogo escolhe um efeito de qualquer (que seja favorável ao personagem).

O jogador recebe 2 ajudas: uma a sua escolha ente o 2 a 18, e outra que será um ajuda que sempre será uma coisa inusitada (e útil) que irá acontecer (o mestre escolhe). Por exemplo, um rastreador misterioso aparece e ajuda a passar pela cena.

Interpretação

O personagem recebe a ajuda que o mestre julgar como menos eficaz desta.

Amizade

Ato Falho

Avaliação

Convocação

Detectar Intenção

Empatia

Esplendor

Esquecimento

Linguagem

Maldições

Proteção Mental

Modificar Espírito

Ordens

Sedução

Serenidade

Sugestão

O jogador escolhe a ajuda de sua preferência desse número para baixo.

O mestre do jogo escolhe um efeito de qualquer (que seja favorável ao personagem)

O jogador recebe 2 ajudas: uma a sua escolha ente o 2 a 18, e outra que será um ajuda que sempre será uma coisa inusitada (e útil) que irá acontecer (o mestre escolhe). Por exemplo um pessoa com as habilidades ou informações que o grupo precisa aparece e oferece ajuda por 1 dia como força de agradecimento a Plandis.

Após sortear o dado, uma magia ou um efeito autodescritivo virá como resposta. A magia poderá ser utilizada como se o próprio sacerdote estivesse evocando e, portanto, ele escolherá os inimigos que serão as vítimas dos Relâmpagos, ou quem irá ser obrigado a cumprir Ordens, ou mesmo quem será imobilizado por Correntes. O nível da magia que virá como resposta é numericamente igual ao nível da magia utilizada pelo sacerdote (ou maior dependendo da descrição do efeito usado de Auxílio Incerto).

Exemplo: O sacerdote evoca Auxílio Incerto 3 (da lista de Combate) e rola 17 no dado, ele então evocará a magia Vigor 3. Caso o nível da magia não exista, deve-se pegar o nível da magia existente imediatamente acima. Assim a magia que sair for Fogo Divino e ele tiver evocado Auxílio Incerto 3, o efeito que sairá será o 4 já que não existe o efeito 3 na magia Fogo Divino. Nesta situação de não existir o efeito correspondente se não existir um acima, sairá então o efeito abaixo.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.auxilioNatural,
			nome: "Auxílio Natural",
			niveis: [
				{
					id: "0",
					descricao:
						"Todos os inimigos devem fazer um teste de resistência à magia. Caso falhem, raízes agarrarão seus pés, animais o atrapalharão etc., fazendo com que tenham -1 em sua coluna de resolução.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Idem ao anterior, mas o ajuste é de -2.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Idem ao anterior, mas o ajuste é de -4.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas além disso, os inimigos serão atacados pela natureza (árvores jogam seus frutos em cima dos inimigos, pedras caem na cabeça dos inimigos, relâmpagos chegam próximos aos inimigos) podendo sofrer dano máximo de 4.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Idem ao anterior mas o dano máximo é 8.",
					nivel: 9,
				},
			],
			descricao: `Restrição de Uso: Ambiente Natural

Com este encanto o sacerdote clama a sua divindade e pede ao ambiente que o ajude a derrotar seus inimigos.

Atendendo ao pedido do sacerdote, o ambiente o ajudará: árvores moverão seus galhos para fazer os inimigos tropeçarem, ventos fortes podem surgir em alto mar para atrapalhar os inimigos, rochas poderão desabar próximo ao inimigo; enfim, diversas são as possibilidades, mas os efeitos são sempre os descritos nos níveis. A grande vantagem deste encanto é sua área imensa, que serve até mesmo para atrapalhar um exército inteiro. Uma observação, entretanto, é que uma mesma área não pode estar sob efeito de dois Auxílios Naturais. Assim, se dois sacerdotes evocarem a magia, apenas o nível mais forte funcionará.

Uma observação especial é que esta magia é muito restrita e só deve ser usada em caso de extrema necessidade. Se for evocada por um motivo efêmero, numa situação desnecessária ou por motivos pessoais e/ou mundanos, a magia falhará e o sacerdote será punido por sua divindade.`,
			extra: [
				"Cada sacerdote só poderá usar esse encanto em ambientes específicos. Sacerdotes de Vet e Nil poderão usar em planícies ou florestas, de Mon, em montanhas e cavernas, de Ganis, em alto mar, uma praia ou um lago e Sevides em qualquer lugar que seja solo fértil (campos, plantações, florestas, beiras de rios, ou mesmo um horta).",
			],
			alcance: { tipo: AlcanceEnum.METRO, valor: 500 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 15 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.avaliacao,
			nome: "Avaliação",
			niveis: [
				{
					id: "0",
					descricao:
						"Revela se o item é mágico e qual o seu valor de mercado dos itens tocados. Reduz 1 nível de dificuldade da habilidade Negociação.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"idem ao anterior, mas revela se algum item tem algo de errado (objeto falso, defeituoso, mal feito) ou é prejudicial ao evocador (contem uma maldição, vai causar prejuízo, é roubado). A revelação apenas informa que há algo de errado, não diz exatamente o que. Reduz 2 níveis de dificuldade da habilidade Negociação.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"idem ao anterior, mas revela se algum item tem algo de errado (objeto falso, defeituoso, mal feito) ou é prejudicial ao evocador (contem uma maldição, vai causar prejuízo, é roubado). A revelação informa precisamente o que está errado. Além disto em uma negociação revela as intenções (boas, neutras ou más) das pessoas que estão envolvidas. Permite também avaliar coisas maiores como edificações pequenas e mecanismos simples. Qualquer magias de controle mental durante uma negociação é bloqueada. Reduz 3 níveis de dificuldade da habilidade Negociação.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"idem ao anterior, mas revela as essências do objetos se eles forem mágicos e revela todos os problemas dos objetos (falso, defeituoso, mal feito, contem uma maldição, vai causar prejuízo, é roubado). Ao tocar (ou se aproximar) de um item que possua qualquer encantamento que seria disparado ao tocar (ou se aproximar) este não é disparado ou não faz efeito. Permite também avaliar coisas maiores como edificações (de qualquer tamanho}, mecanismos (de qualquer complexidade}, pontes ou qualquer outra coisa construída/fabricada que se deseje saber seu valor ou problemas. Reduz 4 níveis de dificuldade da habilidade Negociação.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, mas revela precisamente os problemas do objeto e as intenções exatas de quem estiver envolvido em uma negociação. Neste nível qualquer magia de ilusão sobre o item tocado é desfeito e qualquer efeito que de alguma forma possa fazer mal é cancelado. Reduz 5 níveis de dificuldade da habilidade Negociação ou torna Muito Difícil algo que seria Impossível.",
					nivel: 9,
				},
			],
			descricao:
				"Com este encanto, o evocador é capaz de avaliar quaisquer objetos que ele toque, ajudando-o a saber os valores daqueles objetos.",
			extra: [
				"Esse encanto ajuda muito pouco na descoberta de algum poder mágico que o item possa vir a ter. É possível em determinados níveis sentir as intenções dos envolvidos, mas só é pressentido as intenções com relação a uma negociação, não revelando nada que não tenha a ver com a negociação em si.",
				"Os níveis são cumulativos nos efeitos, com exceção do bônus na habilidade Negociação, que sempre será apenas o maior. Os efeitos de cancelamento só valem para o Sacerdote enquanto ele estiver próximo ou tocando, se outra pessoa se aproximar ou tocar o feito acontecerá normalmente sobre a pessoa.",
			],
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.azar,
			nome: "Azar",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
					descricao:
						"No combate o adversário perde o equilíbrio e não consegue atacar, precisando de um turno para se recompor.",
					nivel: 1,
					secundario: {
						id: "0",
						nivel: 0,
						duracao: { tipo: DuracaoEnum.MINUTO, valor: 30 },
						descricao:
							"Fora de combate tudo que a vítima segurar irá cair: uma caneca, um livro, uma bolsa, etc.",
					},
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
					descricao:
						"No combate o adversário atinge a si mesmo, causando 25% do dano e descontrole de 1 coluna.",
					nivel: 3,
					secundario: {
						id: "0",
						nivel: 0,
						duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
						descricao:
							"Fora de combate a vítima terá crises de tosses tão fortes, que durante 1 hora não terá concentração para realizar tarefa alguma.",
					},
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 2 },
					descricao:
						"No combate o adversário atinge a si mesmo, causando 50% do dano e descontrole de 2 colunas.",
					nivel: 5,
					secundario: {
						id: "0",
						nivel: 0,
						duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
						descricao:
							"Fora de combate os afazeres da vítima terão maior probabilidade de darem errado. Ao cavalgar, irá escorregar da sela. Ao tocar um instrumento, os dedos começam a tremer; etc. Na prática, qualquer habilidade utilizada pela vítima terá um nível a mais de dificuldade.",
					},
				},
				{
					id: "3",
					descricao:
						"No combate o adversário atinge a si mesmo, causando 75% do dano e descontrole de:3 colunas por três rodadas. Fora de combate eventos indesejados acontecem a vítima: cruza com um antigo inimigo, a ponte a qual iria passar despenca, o item pelo qual procurava já foi vendido, etc. Os efeitos devem ser indiretos. Muitas são as possibilidades e o Mestre (não o evocador) deverá escolher qual(is) evento(s) acontece(m) com a vítima, que de preferência se relacionem bastante com a aventura vigente. Dura 1 semana.",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 4 },
					descricao:
						"No combate o adversário atinge a si mesmo, causando 100% do dano e descontrole de 4 colunas por quatro rodadas.",
					nivel: 9,
					secundario: {
						id: "0",
						nivel: 0,
						duracao: { tipo: DuracaoEnum.MES, valor: 1 },
						descricao:
							"Fora de combate a vítima será alvo direto de acontecimentos ruins, causando algum agravante físico. Tropeça e torce o pé em algum buraco na rua, cai do cavalo e se machuca, corta-se tratando alguma comida, é atacado porque o confundiram com bandido, é o primeiro a sofrer com uma possível invasão de orcos, etc. Assim como no nível anterior, muitas são as possibilidades e o Mestre (não o evocador) deverá escolher qual(is) evento(s) acontece(m) com a vítima.",
					},
				},
			],
			descricao: `Conhecido como "a maldição de Plandis", o milagre Azar torna a vítima, caso falhe em sua RM, mais suscetível a eventos estranhos, incomuns e imprevisíveis. Nos níveis mais baixos a vítima é tida perante outros como uma pessoa azarada, mas nos mais altos, ela é tida como amaldiçoada ou perseguida pelos deuses.

É possível usar essa magia em duas situações: em combate ou fora de combate. Se usado em combate terá evocação instantânea, se usado fora de combate, evocação de duas rodadas. Só poderá ser direcionada a um adversário, e, caso o efeito cause dano, acontecerá como em um combate normal: primeiro atinge a EH, o que passar é perdido e, após acabar a EH, atinge a EF.

Alguns níveis têm descontrole como efeito em situação de combate. Enquanto durar o descontrole, a magia ainda está ativa, logo, só poderá ser lançada novamente nessa vítima ou em qualquer outra quando findar as rodadas de descontrole.

Na descrição de cada nível da magia, o primeiro efeito é em combate. O segundo é fora. O evocador deverá escolher um na hora de lançar a magia. O Mestre deverá adaptar os efeitos fora de combate a cada tipo de criatura. Por exemplo, caso, por algum motivo qualquer, o evocador deseje lançar a magia em um animal. Não teria lógica os dedos tremerem ao tocar um instrumento, devendo o efeito, portanto, ser adaptado.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
	];
}
