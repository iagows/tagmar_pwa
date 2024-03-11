import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.paralisia,
			nome: "Paralisia",
			niveis: [
				{
					id: "0",
					descricao: "Concede um ajuste de -2 para até 2 vítimas,",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Concede um ajuste de -4 para até 2 vítimas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Concede um ajuste de -4 para até 3 vítimas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Concede um ajuste de -7 para 3 vítima,",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Concede um ajuste de -8 e impede que a vítima utilize a sua Energia Heróica,",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Paralisa completamente 1 vítima.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto o evocador pode bloquear os nervos de uma ou mais criaturas humanóides, causando paralisia parcial ou total nos músculos das criaturas afetada, caso elas falhem em uma Resistência à Magia. Vítimas que sucedam em sua Resistência não são afetadas.

O grau da paralisia depende da Dificuldade do Efeito usado. Efeitos de dificuldade baixa causam apenas inconveniências às vítimas. Conforme a Dificuldade aumente as conseqüências vão se tomando mais e mais graves, até chegar ao ponto onde a vítima fica muito prejudicada ou mesmo completamente incapacitada.

Este feitiço consegue paralisar apenas os músculos cujo uso é completamente voluntário. Além disso, o evocador não tem a capacidade de escolher quais os músculos afetados, todos sendo afetados por igual.

Certos efeitos agem sobre mais de uma criatura por vez. Neste caso o evocador pode escolher quais serão afetadas, desde que todas estejam dentro do Alcance. Cada uma recebe uma Resistência à Magia separada e as que obtiverem sucesso não serão afetadas.

Certos Efeitos deste encanto dão Ajustes negativos para a vítima. Estes Ajustes são sempre dados em Colunas de Resolução. Eles se aplicam a quaisquer atividades que a vítima se proponha a fazer que utilizem a Tabela de resolução. Isto inclui Combate, Habilidades e Magia,

Finalmente, o Efeito de Dificuldade 10 paralisa a vítima completamente. Neste caso todos os músculos do corpo da vítima se relaxam e o seu corpo cai ao chão, imóvel. As funções involuntárias do corpo (respiração, batimentos cardíacos, etc) continuam normalmente. A vítima fica imóvel onde quer que tenha caído, incapaz de mover o menor músculo até o final da Duração.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 30,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.peleDeArvore,
			nome: "Pele de Árvore",
			niveis: [
				{
					id: "0",
					descricao: "Aumenta a absorção em 8 e sua defesa aumenta em 1.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Idem ao anterior, porém aumenta a absorção em 12.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Aumenta a absorção em 16 e sua defesa aumenta em 2.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Idem ao anterior, porém aumenta a absorção em 20.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Aumenta a absorção em 24 e sua defesa aumenta em 3.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, porém aumenta a absorção em 30. Neste nível as debilitações por críticos não são aplicadas enquanto Pele de Árvore estiver ativa, com exceção de um crítico mortal que ainda causará a morte.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o evocador entre em comunhão com a natureza fazendo com que sua pele se torne forte como um tronco de árvore milenar. A cada nível da magia sua pele se torna mais e mais rígida, fazendo assim, que suporte mais dano e melhore sua defesa. Note que ela é consumida como uma armadura e o dano acima da absorção dada pela Pele de Árvore passa direto para a EF quebrando a magia. Veja que o dano por critico é absorvido pela Pele de Árvore. Porém os efeitos do crítico continuam atuando sobre o evocador. Uma fraqueza da magia é que dano de fogo causa dano dobrado na absorção da Pele de Árvore. A evocação normalmente dura uma rodada, mas caso o evocador estiver tocando uma árvore, a evocação passa ser instantânea.

OBS: esta pele sobrenatural, apesar de rígida, se adapta à anatomia de forma a não atrapalhar o movimento do evocador.

Obs: Esta magia só pode ser evocada em ambientes (naturais ou não) que possuam árvores próximas.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 10,
			},
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
		},
		{
			id: MagiaEnum.perspicacia,
			nome: "Perspicácia",
			niveis: [
				{
					id: "0",
					descricao: "A vítima deverá fazer 1 teste de Resistência à Magia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "A vítima deverá fazer 2 testes de Resistência à Magia.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "A vítima deverá fazer 3 testes de Resistência à Magia.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "A vítima deverá fazer 4 testes de Resistência à Magia.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "A vítima deverá fazer 5 testes de Resistência à Magia.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "A vítima deverá fazer 6 testes de Resistência à Magia.",
					nivel: 10,
				},
			],
			descricao: `Através de uma análise no inimigo, especialmente a partir de seus gestos, ações e emoções, o evocador, com a magia perspicácia, consegue obter vantagens ao enfrenta-lo. Para que isso funcione é necessário, primeiramente que o evocador escolha um, e somente um, oponente para utilizar o encanto. Observe que a vítima necessariamente tem que estar combatendo para que o encanto possa ser utilizado.

A vítima então deverá fazer uma quantidade de testes de Resistência à Magia conforme descrita no nível, durante a duração da magia. Cada fez que a vítima falhar na sua Resistência à Magia, o evocador conseguirá detectar uma fraqueza no oponente, fraqueza essa que o evocador poderá expor aos seus companheiros de grupo. Isso fará com que todo aquele que souber da fraqueza tenha um bônus na sua coluna de ataque contra a vítima do feitiço.

Os bônus são de 2 colunas para cada falha em sua Resistência à Magia. Assim se o nível 8 da magia é lançado contra alguém, a vítima deverá fazer 5 testes de Resistência à Magia. Caso falhe em 3 destes testes, o evocador e a quem ele expor terão +6 colunas de ataque contra a vítima.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 15,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: MagiaEnum.pesadelo,
			nome: "Pesadelo",
			niveis: [
				{
					id: "0",
					descricao: "Duração de 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Duração de 3 dias.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Duração de 1 mês.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Duração de 1 ano e 1 dia.",
					nivel: 8,
				},
			],
			descricao: `Quando esta magia é evocada, uma pessoa escolhida pelo evocador (dentro do alcance) deve fazer sua Resistência à Magia ou sofrer terríveis pesadelos toda vez que for dormir (até a duração se esgotar). O sono passa a ser um horror, cheio de medo e tensão a cada instante. Assim sendo, o sono passa a não ser nada agradavel e a vítima não recupera Karma ou EH dormindo.

A duração deste encanto varia com a dificuldade do efeito usado. Depois da evocação do feitiço a vítima pode se afastar o quanto quiser do evocador, pois isso não tem mais nenhuma influência sobre a magia. A única forma de libertação é esperar a sua duração se esgotar ou quebrá-lo com uso de Quebra de Encantos.`,
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
		{
			id: MagiaEnum.piromanipulacao,
			nome: "Piromanipulação",
			niveis: [
				{
					id: "0",
					descricao: "Contato causa 4 de dano. O alcance é de 2 metros.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Contato causa 8 de dano. O alcance é de 3 metros.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Contato causa 12 de dano. O alcance é de 4 metros.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Contato causa 16 de dano. O alcance é de 6 metros.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Contato causa 20 de dano. O alcance é de 9 metros.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Contato causa 24 de dano. O alcance é de 12 metros.",
					nivel: 10,
				},
			],
			descricao: `Este encantamento permite que o evocador altere o calor e a forma de um fogo que já exista. A partir do Efeito de Dificuldade 4 o encanto também pode criar o fogo que será usado.

Este feitiço não pode ser usado para atacar pessoas (fazer aparecer fogo sob elas, fazer fogo cair sobre elas, etc). Caso o evocador tente fazer isso, o feitiço é quebrado instantaneamente. O evocador pode, no entanto, criar fogo em um local (por exemplo, criar uma parede de fogo entre si mesmo e um inimigo). Caso o inimigo toque ou passe através deste, ele receberá o dano normal.

Enquanto durar a magia o evocador pode alterar o formato do fogo à vontade. Para fazer isto, porém, ele precisa se concentrar (ver Capítulo V item 8.2 - Concentração). Caso o evocador não se concentre no encanto, este permanecerá na última forma em que o evocador o colocou até que a Duração se esgote. Quando a Duração se esgotar, o fogo se transformará em fogo normal (caso esteja em contato com combustível) ou se extinguirá (caso não esteja).

O evocador pode fazer com que o fogo assuma qualquer forma desejada, mas nunca pode fazer com que ele se afaste além do alcance do feitiço.`,
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
			id: MagiaEnum.piroprotecao,
			nome: "Piroproteção",
			niveis: [
				{
					id: "0",
					descricao: "Protege contra até 10 pontos de dano por até 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Protege contra até 15 pontos de dano por até 20 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Protege contra até 20 pontos de dano por até 10 minutos.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Protege contra até 25 pontos de dano por até 30 minutos.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Protege contra até 30 pontos de dano por até 1 hora.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Protege contra até 35 pontos de dano por até 2 horas.",
					nivel: 10,
				},
			],
			descricao: `Esta magia concede imunidade contra fogo até certo ponto. A força do encanto e sua duração variam de acordo com o Efeito usado.

Cada efeito desta magia protege o evocador contra determinado número de pontos de dano causados por fogo. Caso o dano infligido seja maior do que a proteção concedida pelo feitiço, o mesmo entra em colapso e quem estava sob sua proteção recebe o dano restante (se houver algum) normalmente.

Note que o dano infligido ao encanto não é cumulativo. Em outras palavras, para conseguir ferir o evocador é preciso fazer um dano maior do que a proteção oferecida por este encantamento de uma só vez.

Caso o feitiço não seja destruído antes, ele se encerrará automaticamente ao fim da Duração.`,
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
		{
			id: MagiaEnum.planoMistico,
			nome: "Plano Místico",
			niveis: [
				{
					id: "0",
					descricao:
						"Com esse nível o mago pode criar uma dimensão pequena, do tamanho de uma bolsa de moedas, aproximadamente 10x10x10 (cm). São sacrificados materiais no valor de 5 moedas de prata durante o ritual. É necessário um espelho de no mínimo 30 cm² para abrir o portal. A duração é de 1 mês.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria uma dimensão do tamanho de uma mochila, aproximadamente 50x20x20(cm). São sacrificados materiais no valor de 2 moedas de ouro durante o ritual. É necessário um espelho de no mínimo 60 cm² para abrir o portal. A duração é de 3 meses.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Cria uma dimensão do tamanho de um armário, aproximadamente 2x2x1 (m). São sacrificados materiais no valor de 6 moedas de ouro durante o ritual. É necessário um espelho de no mínimo 2m² para abrir o portal. A duração é de 6 meses.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Cria uma dimensão do tamanho de uma sala pequena, 3x3x3 (m). Permite apenas a entrada do criador da dimensão. São sacrificados materiais no valor de 10 moedas de ouro durante o ritual. É necessário um espelho de no mínimo 2m² para abrir o portal. A duração é de 1 ano e 1 dia.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Cria uma dimensão do tamanho de um cômodo grande 5x5x3 (m). A partir desse nível já é possível à entrada de mais de uma criatura além do evocador. São sacrificados materiais no valor de 20 moedas de ouro durante o ritual. É necessário um espelho de no mínimo 2m² para abrir o portal. A duração é de 1 ano e 1 dia.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Dimensão de uma casa de porte médio, 10x10x4 (m). O tempo máximo que qualquer criatura pode permanecer dentro da dimensão é de 24 horas. São sacrificados materiais no valor de 50 moedas de ouro durante o ritual. É necessário um espelho de no mínimo 4m² para abrir o portal. A duração é de 13 anos.",
					nivel: 10,
				},
			],
			descricao: `Essa magia é usada para criar um pequeno plano dimensional que geralmente são usados para guardar pertences importantes do mago.

É necessário um ritual para criar um plano místico tendo como porta de passagem a superfície de um espelho. O tamanho do espelho varia de acordo com o nível do ritual. Nesta ocasião também é encantada uma “chave” para esta dimensão. Sem a chave é impossível reabrir a “porta”. É possível se encantar várias chaves bastando para isto que de gaste a mesma quantidade de dinheiro para a confecção das “chaves” extras. As “chaves” normalmente são pérolas do tamanho de uma bola de gude.

Com a dimensão criada, o mago pode reabrir a “porta” apenas recitando as frases do ritual (demora 3 rodadas) em frente a um espelho (que servirá de “porta”) enquanto segura a pérola “chave” em sua mão. Quando acabar de recitar o ritual o mago gastará uma quantidade de karma igual ao nível da magia usada para criar o plano místico que ele deseja abrir. Depois de entrar no plano, o mago só poderá permanecer ali pelo tempo máximo descrito em cada nível, após esse período ele será “expulso” pela “porta” em que entrou. Se ele desejar, poderá sair pela porta que entrou. È possível que outros magos que tenham a cópia da chave entrem no mesmo plano, mas cada um sairá sempre pela mesma porta que entrou. O mago pode levar consigo qualquer objeto desde que não seja uma criatura.

Qualquer mago pode abrir essa “porta” desde que possa usar o mesmo nível de Plano Místico usado e possua a “chave”. Ao termino da duração ou se o espelho de uma das portas for quebrado (quando esta estiver aberta}, tudo (e todos) que estiverem dentro do plano serão expulsos e o encantamento será quebrado.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
				descricao: "Ritual / 3 rodadas",
			},
		},
		{
			id: MagiaEnum.possessao,
			nome: "Possessão",
			niveis: [
				{
					id: "0",
					descricao:
						"A Evocação demora 10 rodadas e dura 20 rodadas. Caso a vítima faça a sua Resistência à Magia, o evocador fica atordoado por 15 rodadas. Nenhum dos dois conseguirá usar magia no corpo do outro, mas afora isto ambos poderão agir em seus novos corpos. As habilidades serão transferidas com as mentes;",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A Evocação demora 5 rodadas e dura 25 rodadas. Caso a vítima faça a sua Resistência à Magia, o evocador fica atordoado por 15 rodadas. Nenhum dos dois conseguirá usar magia no corpo do outro, mas afora isto ambos poderão agir em seus novos corpos. As habilidades serão transferidas com as mentes.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"A Evocação demora 2 rodadas e dura 1 hora. Caso a vítima faça a sua Resistência à Magia, o evocador fica atordoado por 7 rodadas. Nenhum dos dois conseguirá usar magia no corpo do outro, mas afora isto ambos poderão agir em seus novos corpos. As habilidades serão transferidas com as mentes.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"A Evocação demora 2 rodadas e dura 1 hora. Nenhum dos dois conseguirá usar magia no corpo do outro, mas afora isto ambos poderão agir em seus novos corpos. As habilidades serão transferidas com as mentes.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"A Evocação demora 2 rodadas e dura 1 dia. Nenhum dos dois conseguirá usar magia no corpo do outro, mas afora isto ambos poderão agir em seus novos corpos. As habilidades serão transferidas com as mentes;",
					nivel: 6,
				},
				{
					id: "5",
					descricao:
						"A Evocação demora 2 rodadas e dura 1 dia. O evocador conseguirá usar magia no corpo da vítima se os dois forem da mesma raça. As habilidades serão transferidas com as mentes. Durante toda a possessão o corpo do evocador ficará em um estado de animação suspensa, impedindo a vítima de agir com ele.",
					nivel: 7,
				},
				{
					id: "6",
					descricao:
						"A Evocação demora 2 rodadas e dura 2 dias. O evocador conseguirá usar magia no corpo da vítima se os dois forem da mesma raça. As habilidades serão transferidas com as mentes; Durante toda a possessão o corpo do evocador ficará em um estado de animação suspensa, impedindo a vítima de agir com ele.",
					nivel: 8,
				},
				{
					id: "7",
					descricao:
						"A Evocação demora 2 rodadas e dura 1 semana. O evocador conseguirá usar magia no corpo da vítima se os dois tiverem o mesmo formato geral (2 braços, 2 pernas, cabeça e boca). As habilidades serão transferidas com as mentes. Durante toda a possessão o corpo do evocador ficará em um estado de animação suspensa, impedindo a vítima de agir com ele.",
					nivel: 9,
				},
				{
					id: "8",
					descricao:
						"Evocação demora 2 rodadas e dura 1 semana. O evocador conseguirá usar magia no corpo da vítima se os dois tiverem o mesmo formato geral (2 braços, 2 pernas, cabeça e boca). As habilidades serão transferidas com as mentes. Durante toda a possessão o corpo do evocador ficará em um estado de animação suspensa, impedindo a vítima de agir com ele.",
					nivel: 10,
				},
			],
			descricao: `Este poderoso feitiço permite que o espírito de seu evocador troque de corpo com alguma outra criatura, caso esta falhe em sua Resistência à Magia. É um encanto muito poderoso, mas de um modo geral também implica em grandes riscos para o místico.

O espírito do evocador passa a ocupar o corpo da vítima e o espírito da vítima passa a ocupar o corpo do evocador. As características mentais da vítima e do evocador são transferidas com o espírito, mas as características físicas ficam sendo aquelas do corpo que o espírito está possuindo.

Caso o corpo que o evocador está possuindo morra, ele morre imediatamente e a vítima morre quando a duração do feitiço expirar. Caso o corpo do evocador morra enquanto ele estiver possuindo um outro, a vítima morrerá na hora e o evocador morrerá quando a duração do feitiço se esgotar.

É praticamente certo que a vítima deste feitiço passará a odiar o evocador e fará tudo a seu alcance para lhe fazer mal, mesmo que isso lhe custe caro.

Independentemente do tempo de evocação do Efeito usado, os materiais necessários ao uso desta magia custam 5 Moedas de Prata por Dificuldade do Efeito.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
		},
		{
			id: MagiaEnum.presencaIntimidadora,
			nome: "Presença Intimidadora",
			niveis: [
				{
					id: "0",
					descricao:
						"Causa a perda de 8 pontos de EH em inimigos e 12 pontos em Demônios.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Causa a perda de 16 pontos de EH em inimigos e 24 pontos em Demônios.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Causa a perda de 20 pontos de EH em inimigos e 30 pontos em Demônios.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Causa a perda de 24 pontos de EH em inimigos e 36 pontos em Demônios.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Causa a perda de 32 pontos de EH em inimigos e 48 pontos em Demônios.",
					nivel: 9,
				},
			],
			descricao: `Com esse milagre, o sacerdote brada uma frase de efeito conforme o tipo do inimigo e demonstra uma aura de poder e autoridade, como um avatar de seu deus, que todos os que o veem se sentem intimidados, caso não passem na RM. A magia afeta a todos os inimigos que o sacerdote possa ver em uma distância até 20 metros. Os oponentes que falharem perderão EH. Caso a EH chegue a zero ou o inimigo não possua EH, este irá parar de lutar, tentando fugir ou se render (a magia não afeta a EF). Em Demônios a magia causa um acréscimo de 50% ao dano final (já calculado em cada nível do milagre). Este milagre não atinge Mortos-Vivos e criaturas sem mente.

Essa magia não pode ser conjurada levianamente, portanto não pode ser usada repetidamente pelo Sacerdote em combates comuns, porém contra Demônios e/ou simpatizantes seu uso poderá ser autorizado pelo seu deus (a critério do Mestre).`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.previsibilidade,
			nome: "Previsibilidade",
			niveis: [
				{
					id: "0",
					descricao:
						"O sacerdote prevê em uma conversa, a frase seguinte que a pessoa irá dizer, desde que seja algo perfeitamente normal. Ex: Então eu estava lá na floresta e depois de muito tempo eu ouvi um barulho forte, fiquei com muito medo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O sacerdote prevê determinadas atitudes simples: ele prevê em qual das 4 cadeiras uma determinada pessoa vai sentar; prevê que prato de comida determinada pessoa vai pedir, ou ainda que armadura determinado guerreiro vai pedir ao ferreiro.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O sacerdote consegue prever algumas coisas mais complexas. Em uma determinada perseguição a um ladrão, ele poderá prever em que rua ele irá virar; poderá prever também qual será a atitude do rei depois de ouvir notícias importantes.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O sacerdote consegue prever qual será a próxima ação em combate de um determinado oponente.",
					nivel: 8,
				},
			],
			descricao: `Apesar dos sacerdotes de Plandis serem considerados como caóticos e desconhecedores da ordem, esses comentários têm suas limitações. Os sacerdotes de Plandis não são ignorantes da ordem, muito pelo contrário, são grandes entendidos da ordem e da lógica das coisas, mas preferem viver de modo a fugir da previsibilidade da vida de todas as pessoas que não são devotas de Plandis. Assim, não é que os sacerdotes de Plandis são caóticos por essência, mas sim por opção.

Com o milagre Previsibilidade, os sacerdotes de Plandis são capazes de deduzir as coisas a partir de uma lógica coerente ou uma ordem que se repete.

Assim ele é capaz de concluir qual será a frase seguinte de um discurso, ou onde aquela pessoa irá depois de ter ido a muitos lugares ou até mesmo, em níveis mais altos, concluir qual será a próxima ação de um guerreiro em combate. Independentemente do efeito gerado, é necessário que haja um tempo de observação de no mínimo 1 minuto (ou 4 rodadas) para que a magia possa ser realizada. Assim apenas com 1 minuto de conversa ou depois de 4 rodadas de combate é que o sacerdote poderá usar o milagre para concluir o que acontecerá depois. Observe que o sacerdote só pode prever a atitude de uma única pessoa ou ser uma única vez, sendo necessário evocar o milagre de novo após observar mais 1 minuto (ou 4 rodadas) para prever o que outra pessoa fará ou o que a mesma pessoa fará depois de ter feito o previsto pelo sacerdote. Não existe Resistência a Magia para esse milagre.

A evocação do milagre é totalmente discreta, sendo percebida apenas por meio mágicos. O sacerdote ao evocar receberá como que por instinto a conclusão de como se desenrolará um determinado evento. Os sacerdotes de Plandis gostam especialmente de usar este encanto e logo que concluem o que uma pessoa irá dizer, eles dizem antes dela, deixando a pessoa surpresa e mostrando claramente como as pessoas são previsíveis. Por se tratar de ordem e lógica esse encanto não funciona com outros sacerdotes de Plandis ou devotos da mesma divindade, muito menos com loucos.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 30,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.primor,
			nome: "Primor",
			niveis: [
				{
					id: "0",
					descricao:
						"No uso de uma Habilidade (do grupo Influência}, se o sacerdote cometer uma Falha terá direito um teste Médio, e se bem sucedido a Falha (Verde na tabela) vira um Branco.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"No uso de uma Habilidade (dos grupos Influência e Profissional) ou no uso de uma Técnica de combate, se o sacerdote cometer uma Falha terá direito um teste Fácil, se bem sucedido a falha (Verde na tabela) vira um Branco. Caso o rolamento não tenha sido uma Falha o evocador ganha 1 nível de dificuldade na ação realizada, mas Azul Escuro não vira Cinza.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"No uso de uma Habilidade (dos grupos Influência, Profissional e Geral) ou no uso de uma Técnica de combate, ou num ataque com uma arma, se sacerdote cometer uma Falha terá direito um teste Rotineiro, e se bem sucedido a Falha (Verde na tabela) vira um Branco. Caso o rolamento não tenha sido uma Falha o evocador ganha 2 níveis de dificuldade na ação realizada, mas Azul Escuro não vira Cinza.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"No uso de uma Habilidade (dos grupos Influência, Manobra, Profissional e Geral) ou no uso de uma Técnica de combate, ou num ataque com uma arma ou magia que use a tabela colorida o sacerdote pode cancelar automaticamente uma Falha (Verde na tabela) que virará um Branco. Caso o rolamento não tenha sido uma falha o evocador ganha 3 níveis de dificuldade na ação realizada, mas Azul Escuro não vira Cinza.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas o sacerdote pode cancelar automaticamente uma Falha (Verde na tabela) que virará um Amarelo. Caso não seja uma Falha o evocador ganha 3 níveis de dificuldade na ação realizada, podendo inclusive tornar Azul Escuro em Cinza.",
					nivel: 9,
				},
			],
			descricao: `Com este pequeno ritual (10 rodadas}, o sacerdote de Lena evoca a perfeição da deusa sobre si, ganhado a capacidade de fazer habilidades, técnicas de combate, e ataques muito mais precisos e perfeitos. Assim após o rolamento normal do dado (habilidades, técnicas de combate, e ataques) há dois efeitos possíveis:

Se tiver sido uma falha ele pode fazer um teste na coluna da Força de Ataque (FA) da magia, caso obtenha sucesso a falha não acontece. Em cada nivel há uma dificuldade para este teste e indica o que acontece no lugar. Em alguns níveis não há a necessidade de se fazer teste.

Não foi uma falha, então a magia irá dar um bônus nos "Níveis de Dificuldade" o que na prática faz pular de faixa na tabela colorida (branco vira amarelo, amarelo vira laranja, e assim por diante). Para este bónus não há a necessidade de nenhum teste extra (como no caso da Falha).

Esta magia, por evocar o poder da deusa sobre o Sacerdote, não deve ser usada de forma leviana, ou para ganho próprio. O mestre do jogo deverá avaliar cada situação e caso julgue que está sendo usado de forma inadequada, a deusa poderá dar uma punição ao Sacerdote (a escolha do Mestre).

OBS: a decisão do uso da magia deve ser feita antes do rolamento dos dados. O bónus nos "Níveis de Dificuldade" só será para o primeiro rolamento de dado, não valendo para rolamentos subsequentes que existem em determinadas Técnicas de Combate, Magias e no Acerto Crítico.`,
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
			id: MagiaEnum.prisao,
			nome: "Prisão",
			niveis: [
				{
					id: "0",
					descricao: "Prende até um elemental menor por até 1 mês.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Prende um elemental fraco por até 1 mês.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Prende um elemental médio por até 3 meses.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Prende um elemental médio por até 1 ano e 1 dia.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "prende um elemental forte por até 13 anos.",
					nivel: 9,
				},
			],
			descricao: `Permite o aprisionamento de um elemental de qualquer origem dentro de um objeto previamente preparado (desde que o elemental falhe em uma Resistência à Magia). O elemental é mantido em corpo e espírito dentro da prisão. Um mesmo Mago não pode manter mais do que 4 elementais aprisionados ao mesmo tempo, qualquer que sejam os seus tipos e origens.

O objeto que vai servir de prisão pode ser virtualmente qualquer coisa. O objeto deve ser preparado para receber o elemental através de um ritual que demora duas horas e exige materiais cujo custo se eleva a 2 moedas de ouro.

Cada Efeito desta magia afeta até um determinado tipo de elemental. Elementais de tipos superiores a este simplesmente ignoram o feitiço (o Karma foi gasto inutilmente neste caso).

Quando o místico tenta aprisionar o elemental, ele deve tocar o objeto e evocar o feitiço. Se o elemental fizer a sua Resistência à Magia, ele permanece em liberdade, e se possível tentará atacar o evocador.

Caso o Mago consiga prender o elemental, o mesmo ficará na prisão até que a Duração do feitiço se esgote ou o objeto seja destruído. Enquanto o elemental estiver aprisionado, o tempo de duração de qualquer magia que esteja em operação sobre ele é paralisado, passando a ser contado somente quando este for libertado. Note que enquanto permanecer aprisionado o elemental não poderá receber nem transmitir mensagens de nenhuma forma. Uma vez libertado, o elemental adquirirá imunidade temporária a magia do evocador, por isso, este não poderá ser aprisionado novamente durante o período de 1 dia. Caso o evocador tente aprisiona-lo durante este período o elemental resistirá à magia automaticamente e o karma será gasto inutilmente. Quando o elemental é libertado, o objeto onde ele esteve aprisionado se transforma em um pó negro sem valor`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 30,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.prisaoVegetal,
			nome: "Prisão Vegetal",
			niveis: [
				{
					id: "0",
					descricao:
						"Prende um Plantor Mensageiro, por 5 rodadas após a sua conjuração.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Prende um Plantor Soldado ou mais fraco, por 7 rodadas após a sua conjuração.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Prende um Plantor Conselheiro ou mais fraco, por 10 rodadas após a sua conjuração.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Prende um Plantor Líder ou mais fraco, por 15 rodadas após a sua conjuração.",
					nivel: 7,
				},
			],
			descricao: `Restrição de Uso: Ambiente Natural

Com esta magia, o mago naturalista desenha um circulo no chão que servirá de prisão para um Plantor conjurado. Esta magia deve ser evocada em conjunto com Conjuração Natural.

A conjuração deve ser feita de modo que o Plantor apareça dentro do círculo desenhado. O Plantor conjurado ficará preso no circulo pelo tempo estipulado na magia (o Plantor não tem direito a resistir). Os magos Naturalistas utilizam este ritual com a intenção de obter uma situação ideal para o uso do feitiço Dominação Natural.

O custo do ritual é de 3 moedas de prata por dificuldade do efeito. O tempo máximo que o circulo é capaz de prender o Plantor e o tipo vulnerável a prisão, variam com a dificuldade do efeito.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.projecao,
			nome: "Projeção",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria uma imagem de Defesa L1 e EH 10 que pode se afastar até 30 metros do evocador por até 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria uma imagem de Defesa L3 e EH 20 que pode se afastar até 30 metros do evocador por até 10 rodadas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Cria uma imagem de Defesa L4 e EH 30 que pode se afastar até 200 metros do evocador por até 20 rodadas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Cria uma imagem de Defesa L5 e EH 40 que pode se afastar até 300 metros do evocador por até 30 rodadas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Cria uma imagem de Defesa L6 e EH 55 que pode se afastar até 500 metros do evocador por até 1 hora.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o evocador crie uma imagem de si mesmo que sai de seu corpo e se movimenta como se fosse o próprio evocador. A consciência do evocador estará na imagem e assim o Mago poderá perceber tudo o que a imagem tiver condições de perceber (a imagem tem os 5 sentido iguais aos do Mago).

Enquanto a imagem do evocador estiver vagando, o corpo do Mago ficará em um estado de animação suspensa, completamente indefeso e vulnerável. O evocador não tem nenhuma idéia do que está acontecendo com o seu corpo real, sendo absolutamente incapaz de sentir qualquer coisa em relação a ele.

A imagem é uma ilusão que não tem corpo. Por isto ela não deixa pegadas, marca, não faz barulho ao andar e etc. A imagem não pode de modo algum ser tornada invisível, mas pode usar quaisquer outros feitiços que o Mago pudesse usar.

A EH máxima da imagem e sua Defesa são determinadas pela dificuldade do efeito usado. A imagem não tem nenhuma EF e por isso, se receber qualquer dano na EF se desfará instantaneamente, quebrando o feitiço. Neste caso, a consciência do evocador é enviada violentamente de volta a seu corpo, devendo ele fazer uma Resistência à Magia (Força de Ataque 5) ou ficar inconsciente por uma hora.

Note que caso, a consciência do evocador volte para seu corpo por vontade própria, por que a duração se esgotou ou porque a magia Projeção foi quebrada com uso de mágica, não há trauma no retomo ao corpo e, por isso, a Resistência à Magia é desnecessária.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
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
			id: MagiaEnum.projecaoSensorial,
			nome: "Projeção Sensorial",
			niveis: [
				{
					id: "0",
					descricao:
						"Projeta 1 sentido a 10 metros do corpo por até 5 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Projeta 1 sentido a 50 metros do corpo por até 10 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Projeta 2 sentidos a 100 metros do corpo por até 15 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Projeta 2 sentidos a 200 metros do corpo por até 15 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Projeta 3 sentidos a 500 metros do corpo por até 20 rodadas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Projeta 3 sentidos a 1km do corpo do mago por até 30 rodadas.",
					nivel: 10,
				},
			],
			descricao: `O evocador projeta um ou mais de seus sentidos para fora de seu corpo, para um ponto dentro do alcance do nível usado de Projeção Sensorial. O ponto para onde os sentidos serão projetados deve ser conhecido pelo evocador (ele já deve ter estado nele) ou devem estar ao alcance da vista.

O ponto para onde os sentidos serão transportados é imóvel. Uma vez escolhido, este ponto não pode ser alterado, embora ele possa ""rodar"", permitindo que se mude a direção em que os sentidos percebem a área.

A projeção dos sentidos é total, de modo que evocador vivência o local como se estivesse lá, inclusive podendo ser afetado por magias que afetem os sentidos (Como alguns Efeitos de Manipulação de Luz, por exemplo, se ficar cego ele ficará cego o tempo determinado pela magia, mesmo que a Projeção Sensorial acabe antes). Um efeito colateral disso é que o evocador perde acesso aos seus sentidos naturais no local onde ele estiver. Isto é, se o evocador projetar a sua visão, ele não poderá ver nada no local onde ele está. Apenas a visão, a audição e o olfato podem ser projetados.

A distância e o tempo que o mago pode manter este encanto variam de acordo com os níveis da magia.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
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
			id: MagiaEnum.protecaoAnimal,
			nome: "Proteção Animal",
			niveis: [
				{
					id: "0",
					descricao:
						"Concede um bônus de +1 na Defesa e protege contra até 4 pontos de dano por 15 minutos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Concede um bônus de +1 na Defesa e +8 na Absorção por 30 minutos.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Concede um bônus de +2 na Defesa e +16 na Absorção por 1 hora.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Concede um bônus de +2 na Defesa e +24 na Absorção por 2 horas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Concede um bônus de +3 na Defesa e +32 na Absorção por 4 horas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Concede um bônus de +3 na Defesa e +40 na Absorção por 8 horas.",
					nivel: 10,
				},
			],
			descricao: `Esta magia concede proteção contra ataques físicos de animais tais como garras, presas, chifres, caudas e etc, mas não contra hálitos encantados, toques gélidos, olhares ou outros tipos de ataque. A proteção se estende a qualquer ataque feito com uma parte do corpo de uma criatura viva de Tagmar, portanto, não vale contra mortos-vivos, demônios, elementais, golens, e todas as outras criaturas não nascidas.

A proteção consiste em um aumento na defesa e na absorção de dano. Caso o dano infligido seja maior do que a absorção concedida, o encanto entra em colapso e quem estava protegido recebe o dano restante. Note que o dano infligido é cumulativo. Ou seja, para conseguir acertar a EF do evocador é necessário gastar toda a absorção concedida.

Esta magia não protege contra danos críticos que continuam acertando diretamente a EF.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.protecaoDivina,
			nome: "Proteção Divina",
			niveis: [
				{
					id: "0",
					descricao:
						"O alvo sofre o Crítico como se ainda tivesse Energia Heroica. Duração de 5 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O alvo sofre o Crítico como se ainda tivesse Energia Heroica. Duração de 10 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"O Crítico é diminuído em um nível, sendo o mínimo o resultado Verde. Duração de 5 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"O Crítico é diminuído em dois níveis, sendo o mínimo o resultado Verde. Duração de 10 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"O Crítico é diminuído em três níveis, sendo o mínimo o resultado Verde. Duração de 10 rodadas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"O alvo torna-se imune a qualquer Efeito Crítico, que passa a ser considerado um dano de 100% na Energia Heroica. Duração de 4 rodadas.",
					nivel: 10,
				},
			],
			descricao: `Por meio deste milagre, o sacerdote pode reduzir os efeitos devastadores de golpes certeiros desferidos durante o combate. O alvo do milagre só pode estar protegido por um efeito de cada vez, não sendo cumulativo o uso de vários efeitos. Note que este milagre não nega ou cura efeitos de críticos que já tenham ocorrido ou que venham a ocorrer após a duração do milagre.

Para efeitos que diminuam o Efeito Crítico, esta diminuição se dá da seguinte forma: se o alvo está protegido por um efeito que diminua o Crítico em dois níveis, um resultado Crítico Vermelho é considerado Crítico Amarelo.`,
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
		{
			id: MagiaEnum.protecaoMental,
			nome: "Proteção Mental",
			niveis: [],
			descricao:
				"Com este encanto, os sacerdotes de Palier são capazes de se proteger contra as magias que afetam a mente, como sugestão, covardia, contatos mentais, entre outras. A magia funciona da seguinte forma: o nível de proteção mental utilizado protege contra magias de mente de mesmo nível ou inferior do nível de proteção mental. Assim, proteção mental 5 protege contra contatos mentais 1, 3 e 5 mas não tem qualquer efeito contra contatos mentais 7.",
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
			id: MagiaEnum.protecaoNatural,
			nome: "Proteção Natural",
			niveis: [
				{
					id: "0",
					descricao:
						"Absorve 7 pontos de dano na EF. Necessário passar em um teste do atributo Percepção, dificuldade Média, para ser alertado com 1 rodada de antecedência. A duração é de 1 hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas absorve 14 pontos, o teste é dificuldade Fácil, com 2 rodadas de antecedência, e dura 2h.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas absorve 21 pontos, o teste é dificuldade Rotineiro, com 3 rodadas de antecedência, e dura 5 horas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas absorve 28 pontos. É avisado com 4 rodadas de antecedência, e dura 7 horas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas absorve 35 pontos. Recebe o aviso com 5 rodadas de antecedência, inclusive o tipo de desastre. A duração é de 10 horas.",
					nivel: 9,
				},
			],
			descricao: `Esse encanto forma em torno do evocador um campo de força invisível que o protege de ataques naturais, tais como: queda, desabamento, avalanche, incêndios, enchentes, e qualquer outra catástrofe natural que atinja de surpresa o místico. Ela não o protegerá caso decida entrar voluntariamente. Como também não o protege de ataques de criaturas.

Por exemplo, caso o místico seja pego por uma inundação ou um incêndio, a magia o protegerá. Mas se decidir entrar para salvar um animal outro motivo parecido, a magia não oferecerá proteção.

Caso algum inimigo provoque intencionalmente um deslizamento de terra ou qualquer outro desastre a magia terá efeito, pois pegará de surpresa o místico e se enquadrará como calamidade natural. Na dúvida sobre o que será natural, o Mestre tem a decisão final.

Nos níveis mais baixos, o Mestre solicitará um teste de Percepção para avisar com antecedência que ocorrerá algum desastre. Nos níveis mais altos, o místico saberá quando ocorrerá. Caso não passe no teste, a magia funciona normalmente, apenas não terá a informação prévia que ocorrerá uma calamidade. Também não existe falha crítica. Se atingir verde, apenas não passou no teste.

A quantidade de dano que pode ser absorvido, antes de o feitiço colapsar, é determinada pela dificuldade do efeito usado como explicado abaixo. Caso a duração do feitiço se esgote, a proteção se desfaz e os pontos restantes de absorção são perdidos.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.protecaoVegetal,
			nome: "Proteção Vegetal",
			niveis: [
				{
					id: "0",
					descricao: "Absorve até 6 de dano.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Absorve até 12 de dano.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Absorve até 20 de dano.",
					nivel: 6,
				},
				{
					id: "3",
					descricao: "Absorve até 30 de dano.",
					nivel: 8,
				},
				{
					id: "4",
					descricao: "Absorve até 40 de dano.",
					nivel: 10,
				},
			],
			descricao: `Esta magia oferece ao evocador a capacidade de proteger a si mesmo ou a alguém escolhido contra dano feito por objetos ou criaturas de origem vegetal.

Este feitiço tem a capacidade de absorver uma quantidade de dano (na EH ou na EF) feita por objetos vegetais (flechas, porretes, cajados, ou qualquer outro ataque físico de natureza vegetal). Ataques de qualquer outro tipo de material não são afetados pelo encanto (fazem dano normal).

A quantidade máxima de dano que o encanto pode absorver depende da Dificuldade do Efeito que se está usando. À medida que o encanto vai absorvendo dano ele vai perdendo potência. Quando o total de dano absorvido fica maior ou igual ao dano máximo que o feitiço pode absorver, o mesmo é quebrado. O dano excedente (se houver algum) é sofrido pelo recipiente da magia.

Note que vários usos dessa magia não são cumulativos. Caso o evocador utilize mais de um dos efeitos desse encantamento na mesma pessoa ao mesmo tempo, apenas o efeito de maior capacidade de absorção entra em operação.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 20,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.pseudoconsciencia,
			nome: "Pseudoconsciência",
			niveis: [
				{
					id: "0",
					descricao:
						"Reações simples: autodefesa, atacar inimigos, falar coisas banais e etc. O alcance é de 10 metros.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Reações normais: gestos simples, expressões faciais perfeitas, conversação inteligente e etc. O alcance é de 200 metros.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Idem ao anterior. O alcance é de 1 Km.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Permite que a ilusão reaja como o evocador gostaria que ela reagisse se estivesse em condições de decidir. O alcance é de 1 Km",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Idem ao anterior. O alcance é de 5 Km",
					nivel: 9,
				},
			],
			descricao: `Este feitiço liga uma Ilusão Visual diretamente à mente do seu evocador. Isto liberta o evocador da necessidade de se concentrar para que ela aja. Obviamente, este encanto não tem coerência própria, devendo sempre ser evocado juntamente com a magia Ilusões.

Apesar de esta magia permitir que a ilusão reaja independentemente da concentração, o grau de complexidade da reação varia conforme o Efeito de Pseudoconsciência usado. Os Efeitos de Dificuldade baixa deste encanto permitem que as ilusões tenham apenas reações simples Conforme a Dificuldade do Efeito vai aumentando, a capacidade de reação do encanto aumenta proporcionalmente.

Quando um evocador utiliza este encanto, a sua ilusão se torna ainda mais realística, tornando-se capaz de ação independente. A concentração sobre o feitiço torna-se desnecessária e, por isso, o evocador poderá agir normalmente enquanto a ilusão estiver em efeito. Isto inclui até mesmo a evocação de outras ilusões (pode-se também usar esta magia várias vezes para se obter várias ilusões que ajam independentemente da concentração do evocador).

O alcance deste feitiço é a distância máxima que o evocador pode estar da ilusão para que a ilusão possa continuar agindo sem concentração. Em outras palavras, caso a distância entre o evocador e a ilusão seja maior do que o Alcance, o dito evocador volta a ter de se concentrar para fazer com que a ilusão se mova. O alcance deste encanto varia com a Dificuldade do Efeito usado. A sua Duração é a mesma do efeito de Ilusões Visuais com o qual ele foi evocado.

É importante notar que a capacidade de reação dos Efeitos deste feitiço é cumulativa. Assim sendo, uma ilusão imbuída com Pseudoconsciência 3 tem a capacidade de reagir como uma imbuída com Pseudoconsciência 1 e ainda tem as reações listadas em Pseudoconsciência 3.`,
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
		{
			id: MagiaEnum.pseudomateria,
			nome: "Pseudomatéria",
			niveis: [
				{
					id: "0",
					descricao:
						"Concede 2 pontos de EF, 5 de EH, 12 de Dano máximo, Defesa máxima 1 (qualquer tipo}, ataque na coluna 1.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Concede 6 pontos de EF, 15 de EH, 16 de Dano máximo, Defesa máxima 2 (qualquer tipo}, ataque na coluna 3.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Concede 15 pontos de EF, 30 de EH, 20 de Dano máximo, Defesa máxima 3(qualquer tipo}, ataque na coluna 6.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Concede 25 pontos de EF, 45 de EH, 24 de Dano máximo, Defesa máxima 4 (qualquer tipo}, ataque na coluna 9.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Concede 35 pontos de EF, 60 de EH, 28 de Dano máximo, Defesa máxima 5 (qualquer tipo}, ataque na coluna 12.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Concede 45 pontos de EF, 75 de EH, 32 de Dano máximo, Defesa máxima 6 (qualquer tipo}, ataque na coluna 15.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o evocador dê à sua ilusão uma forma de pseudomatéria que pode interagir com objetos sem aura e com objetos e seres que possuam aura, inclusive permite que se combata com uma Ilusão. Isto é possível pois ela concede EF, EH, Defesa, Ataque e à ilusão, bem como a capacidade de fazer dano tanto na EH como na EF de criaturas com Aura. Este encanto não tem coerência sozinho, devendo ser evocado conjuntamente com pelo menos a magia Ilusão ou a magia Imagem.

A magia que for evocada conjuntamente a esta passa a poder influenciar o sentido do tato. Além disso, ela ganha a capacidade de se alterar perante estímulos físicos de acordo com a definição do evocador. Assim, se o evocador desejar que uma determinada ilusão (evocada junto com esta) tenha a consistência de pedra, a ilusão será sentida deste modo pelo tato e reagirá como pedra se for atacada (a não ser que seja destruída - ver abaixo). A consistência (a forma da ilusão) não tem nenhuma influência na Defesa, EF e EH da ilusão.

Caso uma Ilusão ou Imagem que não inclua esta magia em sua composição toque ou seja tocada por alguém ou alguma coisa, a mesma desaparece instantaneamente.

A pseudomatéria que este encanto infunde nas ilusões tem plena capacidade de interagir com qualquer objeto. Caso a ilusão vá interagir com uma criatura, no entanto, a situação não é tão clara. A matéria criada por este feitiço pode agir sobre uma criatura apenas se esta criatura não perceber que se trata de uma ilusão (ver abaixo). Se a vítima não perceber que se trata de uma ilusão, esta a afetará corno se fosse real, mesmo ao ponto de causar dano na EH e na EF da vítima (este dano é absolutamente real). Se, ao invés disso, ela perceber do que se trata, a ilusão passa a ser incapaz de causar dano na criatura, tornando-se imaterial para a mesma. Esta imaterialidade, no entanto, não afeta as suas outras propriedades (se a ilusão era opaca, ela continua opaca, etc).

Para uma criatura perceber que algo é na realidade uma ilusão ela deve ter algum motivo para desconfiar. Neste caso, o jogador revela o seu motivo ao Mestre e este fornece um Nível de dificuldade. O personagem deverá fazer um teste contra o atributo Intelecto e caso suceda (e o objeto for de fato uma ilusão) ele consegue se convencer de que o que está sendo visto é uma ilusão. Caso contrário, ele deve continuar a agir como se aquilo fosse real.

Existe uma outra maneira de se provar que alguma coisa é ilusão. O jogador tenta ignorar completamente o aspecto físico do objeto que ele pensa ser uma ilusão (por exemplo: ficar parado e deixar o ogro ""ilusório"" dar uma pancada na EF sem sequer tentar se esquivar; mergulhar de cabeça na parede de pedra ""ilusória""). Caso o objeto ou criatura seja de fato uma ilusão, o jogador tenta o teste com dificuldade Rotineira e, caso obtenha sucesso, percebe que se trata de uma ilusão. Caso o objeto ou criatura não seja uma ilusão ou o personagem falhe no teste, o efeito do ataque ocorre normalmente.

A pseudomatéria que esta magia fornece às ilusões é muito instável. Por isto, se a mesma sofrer mais do que certa quantidade de deformação ela de desintegra. Esta deformação é medida em termos de dano na EF A quantidade de dano na EH e na EF que uma determinada ilusão pode sofrer depende da Dificuldade do Efeito de Ilusões Materiais com que ela foi imbuída.

O evocador pode escolher qualquer Tipo de Defesa (Leve, Média ou Pesada) da ilusão mas o valor máximo é dado na descrição do efeito. Algumas vezes é conveniente escolher um valor menor do que o máximo permitido para não despertar suspeita quanto à verdadeira natureza da ilusão (Um coelho com Defesa P6 ou uma guerreiro vestindo uma couraça metálica com Defesa L1 são coisas bastante absurdas!).

A Coluna de Ataque da ilusão é a mesma, independente da Defesa de quem estiver sendo atacado, embora quem estiver controlando a ilusão possa perguntar assim mesmo, para não dar pista sobre a natureza da magia. Da mesma forma, o Dano Máximo causado pela ilusão não tem nenhuma relação com a sua aparência. Como antes, a forma da ilusão deve ser combinada com a sua aparência de modo a não despertar suspeitas (""O quê! quer dizer que o coelhinho me fez 24 de dano?""). Não adianta fazer uma Hidra de 10 cabeças pois o numero de ataques será 1 por rodada, sendo que o dano é o dado pelo efeito da magia.

A duração e o alcance desta magia são os mesmos que os das ilusões com as quais eles forem evocados, ou até toda a EF da ilusão acabar. Se o último caso ocorrer, toda a ilusão se desfaz (todos os feitiços que compõem a ilusão se desfazem - Som, Odor, Toque etc).

Caso esta magia seja usada com a magia Imagem neste caso a imagem não ataca, não move e nem tem EH, mas terá Defesa e EF).

Apesar da ilusão ter uma capacidade maior de movimento, ela não liberta o evocador da necessidade de se concentrar para fazê-la se movimentar (para isso veja o feitiço Pseudoconsciência).`,
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
		{
			id: MagiaEnum.purificacao,
			nome: "Purificação",
			niveis: [
				{
					id: "0",
					descricao:
						"informa se o alimento está impróprio para consumo; se a água é potável; se o ar é respirável ou se o solo está apto ao plantio. Uma outra opção informa se a alma de alguém está sendo influenciada por alguma magia, inclusive revelando qual é a magia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"purifica alimento e bebida, inclusive transformando água não potável em potável ou purifica um solo de área 3m x 3m x 3m deixando apto ao plantio, exceto solo desértico e pantanoso. Uma outra opção é criar uma área circular ao redor do evocador, purificando todo o ar que entra apenas para o evocador (a área é móvel e tem duração de 15 rodadas). Uma última opção é fazer a Purificação da Alma contra magias do mesmo nível ou menor.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"evita que o alimento se deteriore por 1 mês ou faz a Purificação da Alma contra magias do mesmo nível ou menor.",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"purifica um alimento que, quando consumido em situação de descanso, reduz à metade o tempo de recuperação de EF; cria uma área circular ao redor do evocador que purifica todo o ar que entra para até 3 pessoas (a área é móvel e tem duração de 15 rodadas) ou purifica um solo de área 6m x 6m x 6m deixando apto ao plantio, exceto solo desértico e pantanoso. Uma última opção é fazer a Purificação da Alma contra magias do mesmo nível ou menor.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, porém reduz em um quarto o tempo de recuperação da EF; ou purifica o ar para até 5 pessoas; ou purifica uma área de 10m x 10m x 10m, exceto solo desértico. Uma última opção é fazer a Purificação da Alma contra magias do mesmo nível ou menor.",
					nivel: 7,
				},
				{
					id: "5",
					descricao:
						"idem ao anterior, porém reduz em um sexto o tempo de recuperação da EF; ou purifica o ar para até 7 pessoas; ou purifica qualquer tipo de solo de uma área de 20m x 20m x 20m. Uma última opção é fazer a Purificação da Alma contra magias do mesmo nível ou menor, mas caso seja feito um ritual ao custo de 4 moedas de ouro, a pessoa purificada ficará imune por 1 semana.",
					nivel: 9,
				},
			],
			descricao: `Esse milagre purifica alimento, água, ar e terra (solo}, tornando-os adequados para o consumo ou para o plantio. Qualquer ação de veneno, deterioração, gás tóxico, etc, é anulada por essa magia. Cada uso da magia purifica até 5 kg de alimento e até 5 litros de água.

Qualquer corpo enterrado em solo purificado por mais de 1 dia se tornará imune a qualquer magia que crie mortos-vivos, ou seja, não poderá ser animado (o nível da magia deverá ser igual ou menor do utilizado pela magia Purificação, se for maior, conseguirá animar). Os corpos têm que caber na área da magia.

Outro efeito da magia é a Purificação da Alma (a partir do segundo nível): Caso a alma esteja influenciada por magias que alteram o estado do espírito, o efeito desse milagre retorna para o estado Neutro. Caso a alma esteja afetada por magias que manipulem o ser com o intuito de prejudicar, o efeito desse milagre anula a manipulação. O uso da purificação da alma só pode ser usado em uma pessoa, por toque, e o nível da magia oposta deve se igual ou menor ao aplicado. Não é necessário fazer qualquer teste de Resistência a Magia. São exemplos de magia que alteram o espírito: Modificar Espírito, Ódio. Exemplos de magia que manipulam o ser: Maldições, Azar, Possessão e Amizade. Caso haja dúvida quanto ao enquadramento das magias, a palavra do Mestre é a decisão final.

A partir do quinto nível, a magia encanta alimento para potencializar a recuperação da EF. O encanto fica no alimento até ser consumido ou que o alimento estrague.

OBS: Em todos os níveis há varias opções e o evocado só pode escolher uma opção.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
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
			id: MagiaEnum.putrefacao,
			nome: "Putrefação",
			niveis: [
				{
					id: "0",
					descricao: "Causa 12 pontos de dano em um domo de 1 metro de raio.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa 16 pontos de dano em um domo de 2 metros de raio.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Causa 20 pontos de dano em um domo de 2 metros de raio.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Causa 28 pontos de dano em um domo de 4 metros de raio.",
					nivel: 5,
				},
				{
					id: "4",
					descricao: "Causa 32 pontos de dano em um domo de 4 metros de raio.",
					nivel: 7,
				},
				{
					id: "5",
					descricao: "Causa 36 pontos de dano em um domo de 6 metros de raio.",
					nivel: 9,
				},
			],
			descricao: `Essa magia acelera o processo de decomposição da matéria orgânica viva causando dano em seres vivos que estejam em sua área de efeito.

Após a evocação, uma esfera de energia negra sai da mão do evocador se projetando em direção às vítimas escolhidas pelo místico. Ao alcançar o ponto desejado, a energia se expande rapidamente em forma de um domo atingindo os alvos que estiverem próximos.

Esse encanto é visto com reprovação pela maioria dos povos civilizados, o próprio uso da magia é considerado uma ação maligna e desprezível, criando inimizade imediata de devotos de deuses como Crisagom e Selimom.

Esse encanto não tem precisão, podendo atingir qualquer um dentro da área de efeito.

Note também que certas criaturas não são afetadas por essa magia. São elas: mortos-vivos, elementais e criaturas animadas. De uma forma geral, qualquer criatura que não seja um ser vivo é totalmente imune aos efeitos.

As vítimas que sofrerem 100% de dano na EH ou dano na EF devem fazer um teste de Resistência à Magia ou ficar uma rodada agonizando devido às dores causadas pela magia.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
	];
}
