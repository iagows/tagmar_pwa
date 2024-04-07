import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.obstinacao,
			nome: "Obstinação",
			niveis: [
				{
					id: "0",
					descricao:
						"O sacerdote ganha +1 em todas as colunas de ataque e dano, além de +1 nas suas resistências físicas e mágicas, e 5 de EH, podendo ir além do seu máximo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O sacerdote ganha +2 em todas as suas colunas de ataque e dano, além de +2 nas suas resistências físicas e mágicas, e 10 de EH, podendo ir além do seu máximo.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O sacerdote ganha +3 em todas as suas colunas de ataque e dano, além de +3 nas suas resistências físicas e mágicas, e 15 de EH, podendo ir além do seu máximo.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O sacerdote ganha +4 em todas as suas colunas de ataque e dano, além de +4 nas suas resistências físicas e mágicas, e 20 de EH, podendo ir além do seu máximo.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O sacerdote ganha +5 em todas as suas colunas de ataque e dano, além de +5 nas suas resistências físicas e mágicas, e 25 de EH, podendo ir além do seu máximo.",
					nivel: 9,
				},
			],
			descricao: `Com este milagre, o sacerdote de Plandis se impõe uma missão pela qual deve cumprir a todo custo. A fé cega faz com que o sacerdote canalize toda a sua atenção para o cumprimento da missão que poderá ser destruir um inimigo, encontrar um item, salvar uma vila, fazer uma grande invenção. Independentemente da missão que o sacerdote escolher, ele terá 2 meses para cumpri-la.

Enquanto estiver nesses dois meses e empenhado na missão, o sacerdote ficará imune a qualquer magia que cause medo (como medo, covardia}, a qualquer maldição (maldições, azar, pesadelo) e a qualquer doença. Além disso, ainda ganhará um bônus em coluna, EH, RF e RM de acordo com o nível utilizado. Caso o sacerdote se afaste da missão por qualquer motivo, todos os bônus são perdidos. Os bônus desaparecem também quando a missão é completada. Não há necessidade de materiais para a evocação desse ritual. Apesar do grande poder desse milagre, ele tem uma grave desvantagem. Caso o sacerdote chegue ao término de dois meses e não tenha cumprido sua missão, ele deverá fazer uma Resistência a Magia contra força de ataque igual ao nível da magia utilizado. Caso passe, nada lhe ocorrerá; entretanto caso não passe, o sacerdote entrará em profunda depressão por não ter concluído sua missão e após um dia nesse estado de depressão ele morrerá.

Observe que o encanto não pode ser renovado, ou seja, não se pode evocá-lo de novo enquanto estiver sobre o seu efeito e não se pode também evoca-lo para cumprir duas missões. Outro fato importante é que não há como o encanto ser quebrado.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.MES,
				valor: 2,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.olharDoPredador,
			nome: "Olhar do Predador",
			niveis: [
				{
					id: "0",
					descricao:
						"Contemplar a face do místico e fracassar na RM implicará em perda da iniciativa. Informará, sem necessidade de RM, a velocidade base, todos os tipos de ataque e se a presa está doente ou ferida.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"idem ao anterior, mas implicará em -2 colunas no ataque por 2 rodadas (se falhar na RM). Também informará, sem a necessidade de RM, a extensão de sua força (atributos Força e Físico) e sua resistência (EH, EF e RF).",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"idem ao anterior, mas inibirá qualquer técnica de combate que for usada contra o místico nas 2 primeiras rodadas (se falhar na RM). Também informará, sem a necessidade de RM, se a presa está usando algum item mágico contra ele (caso tenha, mas não esteja usando em combate, não obtém informação) e se possui uma capacidade ou poder especial.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"idem ao anterior, mas implicará em -4 colunas de ataque por 2 rodadas (se falhar na RM). Também informará, sem a necessidade de RM, as caracterizações físicas e as técnicas de combate (e seus aprimoramentos).",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, mas a penalidade de -4 colunas no ataque aumentam para 4 rodadas e inibirá qualquer técnica de combate que for usada contra o místico nas 4 primeiras rodadas (ambos se falharem na RM). O evocador adquire uma visão de 180 graus.",
					nivel: 9,
				},
			],
			descricao: `Ao evocar essa magia, o místico apresenta um olhar agressivo e pavoroso, causando penalidades em quem contemplar a face do evocador e não passar no teste de RM.

Além disso, o evocador conseguirá enxergar detalhes na sua presa indetectáveis com a visão comum. E no nono nível, ampliará o seu campo visual. Para esses efeitos, não é necessário teste de RM, precisando apenas estar na área do encanto.

Todos aqueles dentro do alcance da magia são passíveis de ter as informações subtraídas, porém o evocador só receberá o conhecimento de um ser por rodada e somente daquele para quem sua atenção está voltada.

É importante frisar que as penalidades só serão ativadas nos seres que direcionarem suas ações de ataque contra o evocador (fitaram a face do místico e falharam na RM). Atacar outra pessoa do grupo, mesmo tendo falhado na RM, não terá redutores.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 30,
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
			id: MagiaEnum.ondaDestrutiva,
			nome: "Onda Destrutiva",
			niveis: [
				{
					id: "0",
					descricao: "Causa dano máximo de 4.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa dano máximo de 8.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Causa dano máximo de 12.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Causa dano máximo de 16.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Causa dano máximo de 20.",
					nivel: 9,
				},
			],
			descricao: `Com este poderoso encanto o sacerdote de Parom é capaz de criar uma grande onda destrutiva a partir dele mesmo com 3 metros de largura e alcance de 10 metros em que todos os objetos de metal, couro e madeira são danificados. Para que os objetos possam ser danificados é necessário que o sacerdote possa vê-los sendo impossível assim destruir moedas dentro de um saco, por exemplo. Objetos de tecido não sofrem qualquer dano. O dano causado varia conforme o nível da magia e se aplica a todos os itens que a vítima estiver usando.

Essa magia é basicamente utilizada pra destruir as armaduras, elmos e escudos dos oponentes, mas também pode inutilizar armas embora com muito menos potência. Na prática o dano causado, que variará conforme o resultado tirado na tabela de resolução (trata-se de um ataque}, afetará primeiro os itens com menor absorção para depois afetar os itens de maior absorção. Caso a absorção do item chegue a zero, o item é inutilizado e se desfaz, caindo em pedaços no chão.

Exemplo: Um sacerdote de Parom evoca Onda Destrutiva 5 que causa 12 de dano contra um inimigo que usa um elmo aberto, um escudo pequeno, uma armadura de couro rígido e uma espada. Tirando 50% ele causa 6 de dano fazendo com que o elmo e o escudo se quebrem e a armadura tome 2 pontos de dano.

No caso de armas, considera-se que para inutilizar uma arma é necessário que o dano causado seja numericamente igual ao 100% de uma arma. No exemplo anterior caso o sacerdote tivesse conseguido 100% em seu ataque contra a vítima ela teria consegui dar 12 de dano destruindo o elmo, o escudo, a armadura e causando 3 pontos de dano na espada. Para que a espada fosse destruída era necessário dar 20 de dano (o valor equivalente ao 100% de dano). Sendo assim é muito difícil destruir armas com este encanto, e mesmo que o sacerdote consiga faze-lo geralmente guerreiros experientes sempre carregam mais de uma arma.

No caso do elmo, armadura, escudo ou arma ser mágico, o funcionamento é exatamente igual e o item mágico ficará inutilizado caso a absorção chegue a zero. Entretanto o item se recuperará normalmente. No exemplo anterior se considerarmos que a armadura era de couro rígido era +2 e o sacerdote tenha dado 12 de dano, ele teria destruído o escudo, o elmo e a armadura e a espada teria tomado 1 de dano.

Observe que quando um item de proteção é quebrado, a defesa dada por ele, no caso de escudos e armaduras, é automaticamente perdida. No caso de haver mais de uma pessoa na área é feito um rolamento separado para cada pessoa.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.ondaPsiquica,
			nome: "Onda Psíquica",
			niveis: [
				{
					id: "0",
					descricao:
						"A onda afeta todos até 3 metros de distância do mago, as vítimas recebem –1 para todos os testes físicos durante 3 rodadas. O alvo pode escolher ficar 1 turno parado para se restabelecer e perder essa penalidade.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A onda afeta todos até 5 metros de distância do mago, as vítimas recebem -2 para todos os testes físicos durante 3 rodadas. O alvo pode escolher ficar 1 turno parado para se restabelecer e perder essa penalidade.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"A onda afeta todos até 7 metros de distância do mago, as vítimas ficam com dificuldades nos movimentos, perdendo metade de sua velocidade básica e recebem –3 para todos os testes físicos durante 5 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"A onda afeta todos até 9 metros de distância do mago. As vítimas afetadas não poderão usar magia na próxima rodada e recebem penalidade de –4 colunas em todos os testes que realizarem durante 5 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"A onda afeta todos até 12 metros de distância do mago. As vítimas afetadas não poderão usar magia nas próximas 2 rodadas e recebem penalidade de –5 colunas em todos os testes que realizarem durante 10 rodadas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"A onda afeta todos até 15 metros de distância do mago. As vítimas afetadas não poderão usar magia nas próximas 3 rodadas e recebem penalidade de –6 colunas em todos os testes que realizarem durante 10 rodadas.",
					nivel: 10,
				},
			],
			descricao: `Esta magia cria uma onda psíquica que emana do evocador em um arco de 120 graus a sua frente, atingindo todos dentro do raio de ação. É possível ver a onda se aproximando em uma coloração azul/esverdeada quase transparente.

Os seres atingidos deverão passar em um teste de resistência à magia ou sofrerão os efeitos da magia. A Onda Psíquica confunde e atrapalha a mente das vítimas, prejudicando todas as suas ações durante determinado período de tempo. Criaturas animadas, morto-vivos e criaturas irracionais, não são afetadas por esta magia.

A magia Proteção Mental pode ser usada para evitar os efeitos de Onda Psíquica. Não é possível usar Onda Psíquica seguida vezes para acumular as penalidades, vale o maior nível usado.`,
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
			id: MagiaEnum.ordens,
			nome: "Ordens",
			niveis: [
				{
					id: "0",
					descricao:
						"0 evocador dá uma ordem de 2 palavras a um indivíduo que a cumprirá por uma rodada. Um oponente não pode ser ordenado a se matar.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Idem ao anterior, mas dura 2 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas afeta 2 oponentes e dura 3 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas atua sobre 3 indivíduos por 5 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Permite a uma pessoa que siga o Deus do evocador receber uma missão sagrada. Este encanto é voluntário, não pode ser imposto. Durante a missão, o recebedor da magia fica livre de qualquer maldição que pese sobre ele. Além disso, durante a missão ele não poderá ser dominado mentalmente (torna-se imune) nem paralisado (idem). Caso o indivíduo falhe na missão ou desista do seu objetivo, ele morre imediatamente. Se ele se afastar da missão por mais de uma semana (o tempo é cumulativo}, isto é considerado desistência. Caso ele tenha sucesso ou não, todos os seus pecados são perdoados e as maldições sobre ele são retiradas (no sucesso ou na morte).",
					nivel: 7,
				},
				{
					id: "5",
					descricao:
						"A última e mais poderosa das ordens obriga um indivíduo qualquer a fazer uma missão para o Sacerdote. A missão tem que ser possível de ser realizada ou a magia falhará. Caso a vítima se recuse a cumprir a missão ou se afaste do objetivo, ela ficará doente imediatamente, ficando de cama após 1 dia. Caso continue se recusando a retomar para a missão, a vítima morrerá no final do segundo dia.",
					nivel: 10,
				},
			],
			descricao:
				"Através deste encanto o evocador força outro indivíduo a obedecer um comando seu, caso este falhe em Resistir à Magia e entenda o que foi ordenado. Esta magia também serve como sagração para uma missão sagrada ou de penitência como se verá nas descrições.",
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
			id: MagiaEnum.orientacao,
			nome: "Orientação",
			niveis: [
				{
					id: "0",
					descricao:
						"O evocador sempre sabe para onde fica o Norte geográfico, além disto, diminui 1 nível de dificuldade para testes de Navegação. A duração é de uma hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas o evocador consegue decorar mapas simples e pequenos, ou produzir um mapa simples pelo local que tenha passado durante o efeito da magia. A duração é de duas horas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Item ao anterior, mas durante o efeito da magia o evocador tem direito a um palpite sobre qual caminho seguir quando encontrar um lugar que tenha mais de um caminho a seguir. Além disto diminui 2 níveis de dificuldade nos testes de Navegação e o evocador consegue decorar qualquer mapa e pode produzir mapas detalhados. A duração é de 4 horas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas tem direito a 2 “palpites” e caso o evocador possua um mapa do local, este saberá durante o efeito da magia, aproximadamente onde ele está (no mapa). A duração é de 8 horas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas tem direito a 3 “palpites” e diminui 3 níveis de dificuldade em testes de Navegação. A duração é de 12 horas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas transforma uma Navegação Impossível em Muito Difícil e tem direito a 4 palpites. A duração é de 1 dia.",
					nivel: 10,
				},
			],
			descricao: `Esse feitiço faz com que o evocador consiga se orientar em ambientes naturais. Devido a sua conexão com a natureza o Rastreador quando estiver fora de ambientes naturais não conseguirá mais evocar esta magia, mas se tiver sido evocada antes em ambientes naturais, ela continuará até o limite da duração, mesmo que ele entre em ambientes não naturais. O evocador receberá bônus nos testes de Navegação e algumas capacidades especiais conforme o nível do efeito. Note quem Navegações que sejam de dificuldade Impossíveis não podem ter o seu nível reduzido, com exceção do efeito 10.

Esta magia não acumula bônus no teste de Navegação com nenhum outro efeito mágico. O efeito de decorar mapas não é permanente e acaba quando termina a magia. Outro ponto importante é que esta magia não informará se um mapa está errado ou que faltam informações de trilhas e caminhos e acidentes geográficos.

A partir do nível 4 há o efeito de "palpite” que sempre será em relação ao local onde o evocador quer chegar, por exemplo: um Rastreador quer chegar à casa de um eremita que vive nas montanhas e encontra uma bifurcação. Ele usa o "palpite" e descobre que não é nenhum dos 2 caminhos, ou seja, que ele está na trilha errada. A magia apenas diz qual caminho seguir quando há mais de uma opção podendo ser uma delas, ou nenhuma se o caminho estiver completamente errado. Se a houver mais de um caminho válido o palpite dirá quais são os validos, mas não revelará qual é o melhor ou menos perigoso.

OBS: para que os “palpites” funcionem é necessário declarar ao Mestre o local onde deseja chegar antes de executar magia.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
			},
		},
	];
}
