import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.iconeSagrado,
			nome: "Ícone Sagrado",
			niveis: [
				{
					id: "0",
					descricao:
						"O item possuirá 20 de EF. Todos os soldados sob o ícone sagrado receberão um bônus de 4 de EH podendo ir além do máximo, além de +1 em suas colunas de ataque, em suas RF e RM e em sua moral.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O item possuirá 40 de EF. Todos os soldados sob o ícone sagrado receberão um bônus de 8 de EH podendo ir além do máximo, além de +2 em suas colunas de ataque, em suas RF e RM e em sua moral.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O item possuirá 60 de EF. Todos os soldados sob o ícone sagrado receberão um bônus de 12 de EH podendo ir além do máximo, além de +3 em suas colunas de ataque, em suas RF e RM e em sua moral.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O item possuirá 80 de EF. Todos os soldados sob o ícone sagrado receberão um bônus de 16 de EH podendo ir além do máximo, além de +4 em suas colunas de ataque, em suas RF e RM e em sua moral.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O item possuirá 100 de EF. Todos os soldados sob o ícone sagrado receberão um bônus de 20 de EH podendo ir além do máximo, além de +5 em suas colunas de ataque, em suas RF e RM e em sua moral.",
					nivel: 9,
				},
			],
			descricao: `Este poderoso milagre torna um item um símbolo da sua nação ou do ideal dos soldados em uma batalha, dando grande benefícios a todos os que podem vê-lo durante a batalha. O item a ser encantado com este milagre, deve ser um item que tenha uma história profundamente interligada com a história dos soldados que o terão como símbolo e deve ser relativamente grande para que todos possam vê-lo em batalha. Pode ser uma bandeira, uma grande estátua de um rei,uma pintura de uma batalha antiga e etc, muitas são as opções, mas o efeito é o mesmo.

Uma vez escolhido o item, o sacerdote deverá fazer um ritual de preparação do item que tem um tempo de evocação de um mês e custa 50 moedas de ouro. Isso independe do efeito utilizado e torna o item mágico, mas não ativado. Após isso o sacerdote deverá fazer a ativação do item, que custa 2 moedas de ouro vezes o nível utilizado da magia.

Uma vez ativado o item, todos os soldados que estiverem a 100 metros e puderem vê-lo em batalha ganharão benefícios como EH, coluna, moral, RF, RM além de se tornarem imunes a qualquer magia que cause medo. Os bônus durarão somente uma batalha, e o item precisará ser ativado novamente para ser utilizado em uma outra batalha, requerendo novo sacrificio de moedas de ouro.

O item sagrado também recebe uma proteção de Parom, sendo dotado de uma EF que é determinada pelo nível da magia. O milagre é extremamente poderoso, mas caso o item seja destruído os bônus concedidos não só são perdidos, como todos os soldados deverão fazer uma RM contra força de ataque igual ao nível da magia e caso não passem, levarão uma penalidade de –7 colunas de resolução em seus ataques e caso alguém não tenha EH ou a tenha zerado durante a batalha, se acovardará fugindo da batalha ou se rendendo (um teste de Liderança Muito Difícil pode evitar que os soldados fujam). Não é à toa que muitas vezes o item protegido está sempre junto ao rei ou ao comandante da batalha.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 100,
			},
			duracao: {
				tipo: DuracaoEnum.PERMANENTE,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.identificacao,
			nome: "Identificação",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite a identificação do evocador com uma pessoa que seja seu amigo de longa data (mais de cinco anos}, com motivações e perfil plenamente conhecidos pelo evocador.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas a amizade pode ser de média data (de um a cinco anos).",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Permite a identificação do evocador com uma pessoa que seja seu amigo de média data e o amigo pode ter alguns segredos e motivações não reveladas ao evocador.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Permite a identificação do evocador com uma pessoa que seja seu amigo de curta data (de um mês a um ano) e o amigo pode ter significativos segredos e motivações desconhecidas pelo evocador.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Permite a identificação do evocador com uma pessoa que ele tenha conhecido a pelo menos um dia e o amigo pode não ter praticamente nenhuma motivação ou segredo revelado ao evocador.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto, o evocador consegue criar uma identificação entre ele mesmo e alguma pessoa com quem ele tenha algum contato, geralmente aquele quem ele representa. Na prática, é como se as pessoas o tratassem exatamente da mesma forma como tratariam aquele que ele representa. Assim, se o evocador representa um nobre conhecido e respeitado por sua valentia e coragem, dificilmente ele conseguiria liderar um grupo de guerreiros como seu patrono faria; no entanto, com o encanto, caso os guerreiros falhem em seus testes de Resistência à Magia, eles tratarão o evocador como se fosse o nobre, ainda que ele não tenha o mesmo porte físico, nem as experiências e conquistas de seu representado.

Para que o feitiço funcione é necessário que cada pessoa que tenha contato com o evocador faça um teste de Resistência à Magia. Caso passe, ela tratará a pessoa como ela iria tratar antes do encanto, mas caso falhe, ela deverá tratar a pessoa como se fosse seu representado. Observe que esse encanto pode até mesmo prejudicar o evocador, caso ele esteja identificado com alguém odiado ou temido. Uma outra observação é que esse feitiço só funciona se as pessoas conhecem aquele quem o evocador representa.

Conforme o nível aumenta, o evocador precisa conhecer menos o seu representado, a tal ponto que ele poderá criar uma identificação com alguém com quem tenha tido um contato mínimo. Contudo, independentemente do nível, é necessário que a pessoa representada necessariamente o olhe de forma amigável.

É importante observar que o evocador não pode estar identificado com mais de uma pessoa ao mesmo tempo e além disso, uma vez utilizada a magia, ela só poderá ser utilizada novamente para se identificar com a mesma pessoa que havia se identificado anteriormente após uma semana.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.DIA,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 10,
			},
		},
		{
			id: MagiaEnum.ilusoes,
			nome: "Ilusões",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria uma imagem que ocupa até 1 metro cúbico, com até um odor e/ou sabor bem leve em uma área de até 3 metros de raio, com um som cujo volume não seja superior ao de um homem falando. Dura até 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria. uma imagem que ocupa até 2 metros cúbicos, com até um odor e/ou sabor leve em uma área de até 5 metros de raio, com um som cujo volume não seja superior ao de 5 homens falando. Dura até 20 rodadas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Cria uma imagem que ocupa até 5 metros cúbicos, com até um odor e/ou sabor médio em uma área de até 10 metros de raio, com um som cujo volume supere o o rugido de um leão. Dura até 30 rodadas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Cria uma imagem que ocupa até 10 metros cúbicos, com até um odor e/ou sabor forte em uma área de até 15 metros de raio, com um som cujo volume não supere o urro de um Dragão. Dura até 40 rodadas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Cria uma imagem que ocupa até 20 metroscúbicos, com até um odor e/ou sabor muito forte em uma área de até 20 metros de raio, com um som cujo volume pode ser equivalente a um grande evento natural. Dura até 40 rodadas.",
					nivel: 9,
				},
			],
			descricao: `Esta magia permite que o evocador crie uma imagem tridimensional móvel de algo que o evocador conheça. A duração máxima da ilusão, o som e odor que ele pode produzir e o seu tamanho é determinado pela dificuldade do efeito usado. Quanto melhor o evocador conhecer o objeto ou criatura que está imitando com este encanto, mais perfeito e convincente ele será.

Esta magia não consegue interagir sozinha com um ser que tenha Aura, por isto ela não é capaz de causar nenhum dano independente da forma e da intensidade escolhida.Caso a ilusão toque ou seja tocada por uma criatura ou objeto qualquer, ela desaparece instantaneamente (veja a magia Pseudomatéria). Caso o evocador se afaste mais de 100 metros da ilusão, esta desaparecerá instantaneamente.

Para fazer com que a ilusão se movimente o evocador deve manter concentração sobre ela. Caso a concentração seja interrompida, a ilusão se imobiliza mesmo instante. Caso alguém tente tocar a ilusão enquanto o evocador está se concentrando nela (e o feitiço Pseudomatéria não estiver sendo usado) a defesa da ilusão é L1. Caso o evocador não esteja se concentrando o toque é automático,

Esta magia pode ser evocada conjuntamente com algumas outras magias do Colégio da ilusão para criar ilusões mais reais (Pseudomatéria e Pseudoconsciência).

Quando se diz que um determinado efeito altera um odor e/ou sabor, isto quer dizer que ele pode criá-lo, suprimi-lo ou modificá-lo..

Note que cada efeito gera uma imagem, um sabor, odor e som, mas o evocador é livre para decidir quais deles ele quer gerar, podendo por exemplo só gerar um som, ou um odor e uma imagem, etc. ou uma livre combinação de imagem, sabor, odor e som.

Este encantamento pode simular o som de vozes ou outros sons emitidos por criaturas ou qualquer outra coisa, mas caso o evocador deseje imitar a voz de um ser específico, ele deve ter ouvido a voz pelo menos uma vez e obter sucesso em um rolamento da Habilidade Códigos (Nível de Dificuldade Médio, modificado pela familiaridade com a voz imitada, como determinado pelo Mestre). Fazer uma ilusão de algo comum que se conheça bem torna a ilusão perfeita. Fazer uma ilusão de algo que se tenha visto poucas vazes a torna menos realística. Quanto mais o evocador conhecer ou poder estudar mais perfeita será Ilusão. É claro que o evocador pode usar sua imaginação para criar uma ilusão de algo que não conheça, mas provavelmente ela será pouco convincente (o Mestre decide).`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 100,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.imagem,
			nome: "Imagem",
			niveis: [
				{
					id: "0",
					descricao:
						"Evocação de 1 rodada, Duração de 6 horas e ocupa até um cubo cujo lado é 10 metros.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Evocação de 1 rodada, Duração de 12 horas e ocupa até um cubo cujo lado é 10 metros.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Evocação de 3 rodadas, Duração de 1 dia e ocupa até um cubo cujo lado é 30 metros.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Evocação de 3 rodadas, Duração de 7 dias e ocupa até um cubo cujo lado é 45 metros.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Evocação de ritual, custa 3.Mo, Duração de um mês e ocupa até um cubo cujo lado é 75 metros.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Evocação ritual, Duração 1 ano e 1 dia e ocupa até um cubo cujo lado é 100 metros. Os materiais necessários à Evocação custam 10 moedas de ouro.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço cria uma imagem tridimensional imóvel de uma criatura ou objeto. A Evocação, a Duração e o tamanho da imagem variam com a dificuldade do efeito usado.

A imagem não tem defesa, sendo atingida automaticamente se for atacada, e geralmente desaparece ao ser tocada. A magia Pseudomatéria pode ser evocada em conjunto desta para a imagem ter aparência, consistência,cheiro,odor e gosto idênticos ao real, alem do que a imagem passa a ter Defesa (L1) e EF. Neste caso a imagem pode ser tocada e até mesmo atacada.

Caso uma imagem seja destruída, ela e todos os efeitos evocados conjuntamente são destruídos (a magia é quebrada).

A imagem criada pode ocupar qualquer volume máximo para o efeito usado. O volume máximo é geralmente um cubo, cujo tamanho do lado é dado pela dificuldade do efeito usado. Alguns dos efeitos deste feitiço necessitam de alguns materiais caros. Quando for o caso, o preço destes materiais estará escrito na descrição do feitiço.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 50,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
		},
		{
			id: MagiaEnum.intuicao,
			nome: "Intuição",
			niveis: [
				{
					id: "0",
					descricao:
						"A sensação de alerta ficará ativa no místico por 30 minutos, ficando imune a surpresas parciais, podendo usar a técnica Ataque Oportuno com + 1 de bônus.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A sensação de alerta ficará ativa no místico por uma hora, ficando imune a surpresas parciais, podendo usar a técnica Ataque Oportuno com + 2 de bônus.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"A sensação de alerta ficará ativa no místico por duas horas, ficando imune a surpresas completas, podendo usar a técnica Ataque Oportuno com + 4 de bônus.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"A sensação de alerta ficará ativa no místico por 4 horas, ficando imune a surpresas completas, podendo usar as técnicas Ataque Oportuno ou Esquiva com + 6 de bônus.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"A sensação de alerta ficará ativa no místico por 8 horas, ficando imune a surpresas completas, podendo usar as técnicas Ataque Oportuno, ou Esquiva ou Desviar com + 8 de bônus.",
					nivel: 9,
				},
			],
			descricao: `Esta magia deixa um sentido sobrenatural de alerta a perigos no místico, que o informa de tudo que possa atacá-lo em um raio de 15 metros, desde um ataque até alguém chegando furtivamente. Dependendo do efeito, enquanto estiver sob o efeito deste encanto o místico não poderá sofrer surpresa parcial ou completa, além de poder utilizar a informação para contra-atacar o alvo que sofrerá uma surpresa parcial.

OBS: a magia não concede o conhecimento nas Técnicas de Combate, sendo necessário ter níveis nelas. O bônus nas técnicas de combate são só para 1 uso contra apenas um dos alvos que forem detectados pela magia.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
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
			id: MagiaEnum.invisibilidade,
			nome: "Invisibilidade",
			niveis: [
				{
					id: "0",
					descricao:
						"Torna um objeto pequeno (máximo de 50cm x 50cm x 50cm) invisível.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite que uma criatura fique invisível, contanto que permaneça completamente parada.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Faz com que uma criatura fique invisível, mas esta não pode fazer movimentos rápidos, ou o encanto é imediatamente quebrado.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Torna uma criatura invisível, mas um movimento brusco (como um ataque ou uma Evocação) quebra imediatamente o encanto.",
					nivel: 6,
				},
			],
			descricao: `Este encanto causa uma invisibilidade a todo tipo de onda luminosa. O recebedor da magia se torna opticamente indetectável, porém ainda possível de ser achado por seu odor e pelo barulho causado, além das marcas que sua passagem cria.

Todo objeto que estiver em contato direto com o beneficiado pela magia também se torna invisível. Se ele deixar algo cair, porém, o objeto se tomará visível.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.MINUTO,
				valor: 10,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.iraDivina,
			nome: "Ira Divina",
			niveis: [
				{
					id: "0",
					descricao:
						"Ritual Faz com que uma região de 1 km de diâmetro passe por uma enorme maré de azar, onde muitos acidentes menores acontecem. Isto cria um grande desperdício dos recursos do local (o que pode ser fatal em um cerco, por exemplo). Instantânea Afeta até 2 pessoas, causa Enormes coceiras causando uma ajuste de -3 nas tabelas de resolução.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Ritual As superstições locais são atiçadas: por toda parte aparecerão sombras misteriosas, maus espíritos, etc; conforme a cultura. A população e todos os indivíduos normais (não têm EH) terão um ajuste negativo de 3 colunas para o seu moral, além de ficarem todos apavorados. O alcance é de 1 km de diâmetro. Instantânea Afeta até 2 pessoas, A mete das pessoas afetadas é tomada pelo terror do deus representado pelo seu sacerdote ali presente fazendo eles fugirem ou em caso disso ser impossibilitado se mantendo o mais afastados possíveis, o sacerdote passa a ter automaticamente um bônus de Persuasão de +5 sobre essas pessoas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Ritual Traz contra as vítimas da magia efeitos reais, porém não catastróficos, como uma praga de insetos ou animais inofensivos (sapos, moscas, baratas e etc.) ou colheitas ruins. O alcance é de 6 km de diâmetro. Instantânea Afeta até 3 pessoas, o sacerdote invoca uma praga de animais (morcegos/ratos) para cima dos inimigos, estes levarão 2 turnos para se livrar dos animais, caso queiram ignorar os animais deverão passar num teste de Resistência Física a cada turno. Se houver aliados do sacerdote engajados com os alvos eles também serão afetados, porém as pragas pouparão o sacerdote.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Ritual Causa tragédias menores, tais como tremores de terra fracos (mas que derrubam estruturas frágeis como choupanas e casas pequenas}, praga de animais nocivos (gafanhotos, ratos, mosquitos e etc.) e até doenças menores na população (febre, gripes, diarreia, etc). O alcance é de 12 km de diâmetro. Instantânea Afeta até 5 pessoas, os inimigos do deus sofrem fortes dores, fazer qualquer ação que não seja se movimentar a metade de seu deslocamento pede um teste de Resistência Física.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Ritual As catástrofes de verdade aparecem agora: devastação das lavouras, peste, inundações e etc. O efeito causado deve ser escolhido com cuidado pois muitos inocentes podem sofrer com eles. O alcance é de 15 km de distância. Instantânea Afeta somente 1 pessoa, o inimigo do deus cai no chão com fortes dores, o teste de RM será feito mais duas rodadas, caso falhe mais uma vez morrerá, caso sobreviva perderá para sempre o funcionamento de um membro aleatório do corpo, a magia poderá ser cancelada pelo sacerdote em qualquer momento, caso obviamente o inimigo ainda esteja vivo. Caso morra não poderá ser ressuscitado por nenhum sacerdote do mesmo deus.",
					nivel: 9,
				},
			],
			descricao: `Este milagre é usado como castigo àqueles que tenham ofendido ao deus do sacerdote ou à sua causa. O sacerdote faz cair sobre seus inimigos as mais diversas pragas, mostrando a vingança divina.

A Ira Divina não pode ser evocada sem um bom motivo ou a magia falhará e o sacerdote será penalizado por seu deus por seu descuido com os poderes recebidos, que normalmente implicará na perda de seus poderes, ou mesmo por alguma maldição (o Mestre deverá decidir a melhor forma de punir o sacerdote}, quanto mais forte o efeito maior tem que ser o motivo.

Todas as magias tem efeito instantâneo ou ritual, tendo que o conjurador escolher qual está fazendo no inicio da magia, as magias instantâneas dão direito alvo a uma Resistência.

Os efeitos de evocação rituais duram uma semana e pode ser colocado uma condição para poupar os escolhidos dos sacerdotes (exemplo: poupar aqueles que usam determinado símbolo e suas casas, afetar apenas aqueles que participaram mesmo como espectador do apedrejamento da mulher inocente). Os efeitos de evocação instantânea duram 1 dia, com exceção do efeito 10 que é permanente.

OBS: esta magia só pode ser lançada contra aqueles que ofenderam o deus, caso o Mestre entenda que foi lançada de fora leviana o efeito da magia pode ser redirecionado ao evocador.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
		},
	];
}
