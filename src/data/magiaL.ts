import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.lagrimaDeDragao,
			nome: "Lágrima de Dragão",
			niveis: [
				{
					id: "0",
					descricao:
						"A magia analisa a veracidade de até 3 respostas simples e diferentes (falsas ou verdadeiras) como sim ou não, um nome, um lugar e etc.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A magia analisa a veracidade de até 3 respostas mais complexas, mas devem ser diferentes",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"A magia analisa a veracidade de até 3 respostas mais complexas e podem ser repetidas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"A magia analisa a veracidade de quantas perguntas forem feitas por um período de uma hora.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"A magia analisa a veracidade de uma conversa inteira analisando se a intenção e conteúdo foram ou não verdade. Respostas corretas não indicam uma intenção verdadeira, e uma lágrima verde indicará que mesmo tendo respondido respostas certas há uma verdade escondida.",
					nivel: 9,
				},
			],
			descricao: `Este encantamento se trata de um ritual que envolve um ritual para descobrir se alguém está mentindo.

A vitima estará livre para falar o que quiser a cada rodada e deverá fazer seu teste de resistência para cada mentira que falar. Se falhar uma lágrima vermelha escorrerá de seus olhos, indicando que ela disse uma mentira. Se disser a verdade uma lágrima azul aparecerá. Se ela resistir à magia nenhuma lágrima aparecerá. Se assim desejar a vítima poderá não resistir ao encanto.

Note que será considerada verdade aquilo em que a vitima realmente acredita. Ex. se o príncipe bastardo acreditar que seu pai é um camponês, a verdade nessa ocasião será essa.`,
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
			id: MagiaEnum.laminaDeLuz,
			nome: "Lâmina de Luz",
			niveis: [
				{
					id: "0",
					descricao: "16 de dano e dura 5 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "20 de dano e dura 5 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "24 de dano e dura 5 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "28 de dano e dura 5 rodada",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "28 de dano e dura 10 rodadas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "32 de dano e dura 10 rodadas.",
					nivel: 10,
				},
			],
			descricao:
				"Com este encanto o sacerdote é capaz de criar uma lâmina completamente feita de luz (normalmente em forma de foice, daí o nome}, que é extremamente eficaz contra combates corpo a corpo com demônios e mortos-vivos, não tendo qualquer efeito sobre outros seres que não esses. O sacerdote pode manipular livremente a luz, de sorte que pode formar a arma que quiser e mudar a arma a cada ataque, caso seja de seu desejo; independentemente da forma da arma, o efeito é o mesmo. A arma é formada apenas no momento do ataque, o que significa que esse milagre não pode ser utilizado como fonte de luz. Observe que se soma o ajuste de força mas não o ajuste de agilidade (magias como bênção e canção do ânimo funcionam normalmente) e nem é necessário também que o sacerdote tenha nível na arma a qual ele cria.",
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
			id: MagiaEnum.leitura,
			nome: "Leitura",
			niveis: [
				{
					id: "0",
					descricao:
						"O evocador leva 1 segundo para compreender o conteúdo de uma página em uma língua que ele domina, exceto escritura mágica. Duração 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, porém o evocador consegue compreender qualquer língua de raças civilizadas e raças selvagens, exceto escritura mágica. Além de compreender, o evocador consegue identificar (apontar somente) se há códigos inseridos.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Ao simples toque em um livro/texto de uma língua civilizada ou selvagem, exceto escritura mágica, o evocador compreende todo o conteúdo, inclusive se há códigos inseridos. Reduz em 1 nível de dificuldade na habilidade Códigos para decifrar.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, porém o evocador consegue compreender qualquer língua atual de seres senciente do plano material, exceto escritura mágica. Reduz em 2 níveis de dificuldade na habilidade Códigos para decifrar. Através da leitura da aura residual, o evocador cria uma identificação com o autor, tendo conhecimento da forma de como ele pensa (ou pensava). Assim, uma obra inacabada ou faltando partes (desde que a parte faltante/inacabada não ultrapasse 30% do todo) pode ser terminada ou preenchida (exceção seria um feitiço/magia/ritual inacabado).",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, porém o evocador consegue compreender qualquer língua atual ou morta de seres senciente do plano material e do plano infernal, inclusive escritura mágica. Reduz em 3 níveis de dificuldade na habilidade Códigos para decifrar. Nesse nível, até um feitiço/magia/ritual inacabado, desde que não exceda 30% do todo, pode ser completado.",
					nivel: 9,
				},
			],
			descricao: `Ao tocar um livro/texto o evocador consegue sentir a intenção do autor, sabendo o conteúdo da obra sem precisar ler as palavras. A capacidade de interpretar os escritos vai aumentando conforme o nível da magia.

Até o nível 7, o evocador não consegue compreender escritura mágica, porém consegue identificar que existe essa parte no texto, só não compreende. Compreende todo o resto.

A partir do nível 7, todo livro/texto lido será decorado. É preciso um teste de intelecto médio para lembrar.`,
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
			id: MagiaEnum.leituraDeHabitos,
			nome: "Leitura de Hábitos",
			niveis: [
				{
					id: "0",
					descricao:
						"O evocador consegue identificar a classe social exata de uma pessoa. Ex: Este homem é um nobre.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O evocador consegue identificar com exatidão a origem de uma pessoa. Ex: Este humano é de Filanti.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O evocador consegue identificar de forma aproximada a profissão de uma pessoa. Ex: Este homem é um comerciante, esta mulher lida com artes místicas. Neste nível, qualquer teste de percepção para descobrir se a pessoa está simulando um hábito tem um nível a menos de dificuldade.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O evocador consegue identificar com precisão e detalhes a origem, classe social a profissão de uma pessoa e ainda algumas outras informações. Ex: Este homem vem de Saravossa e é um mago. Pelas suas vestes ele deve ser líder de alguma instituição importante, sendo dessa forma um nobre. Seu modo de falar e agir mostra que ele é casado e que, provavelmente, tem ao menos um filho. Neste nível o evocador saberá se a pessoa está ou não fingindo algum hábito ou gesto.",
					nivel: 7,
				},
			],
			descricao: `Alguns aventureiros viajam por diversos locais aprendendo e convivendo com as mais diversas culturas de Tagmar. Toda essa experiência confere a certos místicos o poder de identificar apenas pelos gestos, sotaques ou hábitos algumas características de uma pessoa, como sua nacionalidade, classe social ou até mesmo profissão. Observe que essa magia não exige nenhum tipo de Resistência à Magia e o evocador poderá evocar essa magia discretamente, obtendo na mente a leitura daqueles hábitos da pessoa escolhida.

No entanto caso a pessoa esteja forjando algum hábito, o evocador deverá fazer um teste de Percepção contra dificuldade estipulada pelo Mestre. Caso o místico passe no teste terá conhecimento de que a pessoa está fingindo ser alguém que não é. Caso não passe, ele será enganado e irá interpretar os gestos como se eles fossem autênticos. No nível 7, no entanto, o evocador não poderá mais ser enganado por esse tipo de farsa.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.leituraLabial,
			nome: "Leitura Labial",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite que o evocador descubra o tema central da conversa. Ex: O rei, o castelo assombrado, o festival da primavera.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite que o evocador descubra o posicionamento das pessoas frente ao tema. Ex: A pessoa se mostra favorável em relação ao rei, a pessoa fala do castelo assombrado de forma irônica, a pessoa acredita que o festival será um sucesso.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Permite que o evocador descubra o posicionamento das pessoas frente ao tema bem como os argumentos que sustentam tal posicionamento. Ex: A pessoa é favorável ao rei, pois aquela medida era necessária, a pessoa é descrente em relação ao castelo porque ela já passou por lá, a pessoa acredita que o festival será um sucesso pelo empenho da organização.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O evocador consegue compreender toda a conversa, até nos mínimos detalhes.",
					nivel: 7,
				},
			],
			descricao: `Com este encanto, o evocador é capaz de compreender uma conversa apenas pela movimentação dos lábios de uma pessoa. Para que isso seja possível, ele necessariamente deve estar vendo a(s) pessoa(s) as quais ele pretende descobrir o que falam. Uma restrição, contudo, é que ele só poderá observar uma pessoa de cada vez. Assim, se é uma conversa desorganizada onde diversas pessoas falam ao mesmo tempo, o evocador só poderá identificar o conteúdo da mensagem de uma única pessoa. Se, ao contrário, as pessoas falarem de forma organizada, ele poderá ler os lábios de todas elas.

O limite máximo de tempo que o encanto permite que o evocador leia o lábio das pessoas é de 10 minutos. Caso ele deseje continuar a leitura após esse tempo, ele deverá usar o encanto novamente. A evocação deste encanto é extremamente discreta e não envolve qualquer tipo de Resistência à Magia.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 15,
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
			id: MagiaEnum.lendaViva,
			nome: "Lenda Viva",
			niveis: [
				{
					id: "0",
					descricao: "Dura 1 dia e o ritual custa . 1moeda de ouro.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Dura 1 semana e o ritual custa 3 moedas de ouro.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Dura 1 mês e o ritual custa 6 moedas de ouro.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Dura 1 ano e 1 dia e o ritual custa 12 moedas de ouro",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Dura 13 anos e o ritual custa 24 moedas de ouro.",
					nivel: 9,
				},
			],
			descricao: `As histórias e lendas são um componente marcante na vida das pessoas. São elas que mantém a esperança e registram os fatos, se tornando a cultura do povo. Entretanto, muitas vezes elas são esquecidas e se tornam meramente atrativos para estrangeiros, perdendo o significado para o próprio povo.

Com o encanto Lenda Viva, o evocador consegue reviver a lenda de um determinado local, a tal ponto que todos os acontecimentos que venham a ocorrer sob a localidade serão relacionados à lenda. Para que o encanto possa ser evocado, o evocador deverá conhecer o local e a lenda que nele se dissemina. Depois disso, ele deverá escolher algum item, de dimensões máximas 2m x 2m x 2m que possa ter alguma relação com a lenda. Por último, através de um ritual, que exigirá sacrifícios que variarão conforme o nível de dificuldade, o evocador imbuirá uma aura no objeto e todo aquele que olhar para o objeto e que tenha conhecimento da lenda, deverá fazer um teste de Resistência à Magia. Caso passe, nada lhe ocorrerá. Caso não passe, a pessoa acreditará que essa lenda irá se renovar e caso haja profecias inclusas na lenda, que elas serão cumpridas. Assim, tudo o que vier a acontecer na cidade será para essa pessoa a prova de que a lenda retorna e a profecia será cumprida.

Exemplo: O evocador vai até uma cidade e descobre lá uma lenda que dizia que há muito tempo naquela cidade um poderoso necromante foi queimado na fogueira, mas enquanto era queimado, rogava maldições dizendo que um dia voltaria para se vingar. Escolhendo um crânio como objeto, o evocador o imbui com uma aura, fazendo com que toda pessoa que conheça a lenda e o aviste deva fazer um teste de Resistência à Magia. Caso a pessoa não obtenha sucesso, acreditará que o necromante irá retornar para fazer sua vingança. Todo o evento que ocorrer na cidade será, para essa pessoa, um indício da volta do necromante. Assim se aparecer um corpo nos arredores da cidade, ou ocorrer uma grande tempestade ou houver algum surto de doença, tudo isso será considerado como os efeitos do retorno no necromante.

Observe que esse encanto também pode se aplicar a lendas de cunho positivo como o retorno de um grande herói, a aparição de um enviado e etc.

Uma vez a lenda revivida, pode-se tirar vários proveitos disso. Em um local aonde se espera o retorno de um herói, um grupo de aventureiros poderá se apresentar como representantes dele, conquistando facilmente a simpatia do povo. Em uma outra localidade, aonde se acredita que o necromante irá retornar, o líder poderá se utilizar disso para atribuir mais poder a si mesmo, conseguindo consentimento da população para prender qualquer pessoa que pareça suspeita e etc.

A duração da magia varia conforme o nível utilizado. Entretanto, caso o item seja destruído, não haverá mais como as pessoas passarem a crer na volta da lenda. No entanto, as pessoas já afetadas permanecerão até que a duração se esgote. Um outro fator importante é que para se destruir o item é necessário passar em um teste de Resistência à Magia contra força de ataque do nível da magia. Caso não consiga, a pessoa que tentar destruir o item sentirá um grande poder vindo daquele item, acreditando ser amaldiçoada caso ouse se aproximar. Caso passe, por outro lado, o item poderá ser destruído.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.lendas,
			nome: "Lendas",
			niveis: [
				{
					id: "0",
					descricao:
						"Ao ouvir uma lenda, o evocador consegue discernir se a lenda existe ou não (não julga se é verdadeira, apenas sua existência}, ou diz se o objeto ou local ou uma pessoa examinada é lendário (não descreve a lenda, apenas diz se tem).",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Extrai de pessoas, objetos ou lugares a principal informação da lenda (a epígrafe da lenda) ou passa ao evocador a impressão mais forte das pessoas que usaram o objeto ou o local (medo, amor, ódio, pânico, etc.).",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Descobre apenas o nome do local (e não a localização) de onde surgiu a lenda, aplicado a itens, lugares, pessoas e lendas faladas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Ao ouvir 3 pessoas sobre uma lenda, o Mestre informa 1 fato relevante da lenda não descrito pelos interlocutores, ou informa 1 fato relevante sobre um objeto ou local ou pessoa.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Ao ouvir 5 pessoas sobre uma lenda, o Mestre informa 2 fatos relevantes da lenda não descrito pelos interlocutores, ou informa 2 fatos relevantes sobre um objeto ou local ou pessoa.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Através de um ritual que custa 10 moedas de ouro é possível inserir uma lenda em um objeto ou local. Essa lenda deve conter até 25 palavras. O feitiço só pode ser quebrado através da magia Quebra de Encantos. Outro efeito desse nível é identificar se uma lenda em um objeto ou local foi criada com essa magia por outro místico. Para esse último efeito, a evocação volta a ser 3 rodadas.",
					nivel: 10,
				},
			],
			descricao: `Essa magia permite que o evocador descubra fatos relevantes sobre uma lenda. Percebe-se tais fatos ouvindo alguém falar sobre uma lenda, tocando em um objeto ou local que possua uma lenda ou ainda, tocando em uma pessoa para saber sobre as lendas que circundam o seu nome. Se o místico lançar a magia em itens, locais ou pessoas que não tenham uma lenda associada a si, nada será revelado e o karma será gasto normalmente.

O alcance da audição é o limite quando se quer evocar essa magia para obter informações de uma lenda dita por outros. Já objetos, lugares e pessoas, o alcance é o toque. A evocação dessa magia é muito discreta, e apenas com um teste de Misticismo (Muito difícil) se consegue detectar.

Tudo tem uma história, mas nem tudo tem uma lenda. Se uma poderosa espada foi forjada, mas guardada e nunca usada, ela tem uma história e não uma lenda. Entretanto, se essa espada foi decisiva para matar o dragão, e por isso, esse fato foi transmitido oralmente com seus feitos potencializados e adquirindo um caráter maravilhoso, poético, tem-se uma lenda. Se há um impasse entre o que é lenda ou só história, a decisão fica a cargo do Mestre.

As lendas que o místico tem conhecimento através da oralidade podem se referir a praticamente tudo: comida, criatura, cidade, feira, etc. Mas nem sempre um transmissor descreve a lenda completa. Assim, alguns níveis exigem que se ouçam mais de uma pessoa sobre a mesma lenda para descobrir um fato relevante. Ao escutá-los, o místico percebe um padrão na narrativa e consegue, através da magia, extrair informações da lenda. Essa informação é dita pelo Mestre. Entretanto, cada interlocutor deve acrescentar algo diferente, um elemento novo, mesmo que mínimo, caso contrário, não surtirá efeito a magia. São exemplos de fato relevante: o ponto fraco da criatura, o local secreto do item, o poder oculto na arma, etc.

O conteúdo e a quantidade de informações irão variar de acordo com o nível, mas sempre serão conhecimentos gerais, sem detalhamento. Caso uma pessoa tenha usado um nome falso e a lenda foi construída em cima dessa alcunha falsa, se o evocador não souber disso ao tocá-lo não descobrirá a respeito. Por exemplo, se o evocador tocar em Rostam sem saber que ele é o Defensor Mascarado, não terá informações acerca da Lenda do Defensor Mascarado: um herói que atua disfarçado para ajudar os oprimidos.

Há mais de um efeito por nível e o evocador deverá escolher apenas um na hora de lançar a magia.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.USO,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 3,
			},
		},
		{
			id: MagiaEnum.levitacao,
			nome: "Levitação",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite ao evocador pairar até a um metro acima da superfície, seja ela líquida ou sólida. O evocador tem que se concentrar no encanto. A Duração é de 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"0 evocador pode levitar a qualquer altura do solo, porém deve ser mantida a concentração. A dura é de 10 minutos.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas não é preciso manter a concentração.",
					nivel: 5,
				},
			],
			descricao: `A magia Levitação permite que o evocador tenha um livre movimento vertical. Veja que levitação não é vôo, o movimento é apenas para cima e para baixo, à velocidade de 10 metros por rodada. Além do evocador, a magia levita mais 50kg de peso.

Se o evocador achar pontos de apoio (paredes, teto, árvores etc) ele pode utilizá-los para se ""empurrar"". A levitação não concede estabilidade; ventos muito fortes podem carregar o evocador.`,
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
			id: MagiaEnum.libertacao,
			nome: "Libertação",
			niveis: [
				{
					id: "0",
					descricao:
						"Atribui uma missão a uma estátua animada. O tempo de duração do efeito é de 6 horas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Atribui uma missão a uma estátua animada. O tempo de duração do efeito é de 2 dias.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Atribui uma missão a um gárgula ou mais fraco. O tempo de duração do efeito é de 4 dias.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Atribui uma missão a um Golem de Argila ou mais fraco. O tempo de duração do efeito é de 6 dias.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Atribui uma missão a um Golem de Pedra ou mais fraco. O tempo de duração do efeito é de 8 dias.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Atribui uma missão a um Golem de Ferro ou mais fraco. O tempo de duração do efeito é de 10 dias.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o mago alquímico poderá libertar uma criatura animada da função de guardiã, fazendo com que esta, cumpra uma missão para o evocador.

Para evocar esta magia o mago deverá primeiro possuir uma criatura animada ou, caso não tenha, animar uma com a magia Geoanimação, após isso, o mago deverá fazer o ritual de Libertação.

Neste ritual o mago deverá atribuir uma missão a criatura que fará de tudo para cumpri-la com o melhor de sua capacidade (não é necessário fazer resistência á magia). Quando o tempo de duração do efeito acabar, (tenha a criatura, cumprido a missão, ou não}, o encanto da magia “Geoanimação” será quebrado e a criatura voltará a ser uma estátua comum. Devendo ser novamente animada.

A missão atribuída à criatura não poderá conter mais de 25 palavras e não pode envolver critérios que sejam subjetivos. Note que esta magia só poderá ser evocada sobre as criaturas que tenham sido animadas pelo próprio evocador.

Os materiais necessários à evocação deste feitiço custam 2mp por efeito usado. O tempo de duração da missão, e o poder da criatura libertada variam com a dificuldade do efeito.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.licantropiaLupina,
			nome: "Licantropia Lupina",
			niveis: [],
			descricao: `Com esta poderosa magia, o evocador terá a capacidade de transformar-se em lobisomem, de maneira semelhante a de um licantropo, adquirindo as capacidades e as fraquezas deste ser. O evocador recebe +1 nível em seus testes de Seguir Trilhas e Usar os Sentidos (Audição e Olfato}, por conta de seus sentidos apurados. Também adquire fraqueza contra prata. Esse metal causa ferimentos terríveis nos licantropos (soma-se 10 a todo dano recebido por arma(s) de prata}, e sua regeneração sobrenatural não funciona para estes ferimentos (vide o nível 9).

Quanto maior for o nível usado, mais agressivo e poderoso o evocador se torna; contudo, o místico corre o risco de perder a racionalidade atacando a todos, exceto animais que estejam com algum elo energético com o místico. Na prática, o evocador terá de rolar um teste de RM com Forca de Ataque igual ao total na magia; caso seja bem sucedido, não terá sua mente afetada, podendo inclusive atacar com suas armas; todavia, se este não passar no teste, ele atacará quem estiver a sua frente ou ao seu lado com garras e mordida. O mestre deve sortear quem ele atacará. A cada 5 rodadas um novo teste por der feito para tentar recobrar a sua racionalidade.

Este dano deverá ser somado à Força do evocador e também ao bônus que os efeitos da magia dão. A coluna de ataque é obtida pelo total na magia, somado com o bônus concedido pelo nível usado, acrescido dos modificadores de defesa L/M/P. O dano e coluna de ataque para cada respectivo ataque são: 100% de Garras é 12, e as colunas são L3/M0/P-3. Já 100% de mordida é 16; e as colunas de ataque são L1/M0/P-1.

É importante ressaltar que, uma vez realizada a magia, os efeitos sobre o corpo e mente do evocador somente retornarão à condição normal após término da magia.

Licantropia 1: O evocador ganha um ajuste de +1 na coluna e +1 no dano para qualquer ataque realizado. O evocador se tornará levemente agressivo, mas manterá seu discernimento normal. Neste efeito, os olhos do evocador mudam e seus dentes caninos tornam-se levemente maiores.

Licantropia 3: O evocador ganha um ajuste de +2 na coluna e +2 no dano para qualquer ataque realizado. O evocador se tornará um ser agressivo com pouco discernimento em situações de extrema pressão, podendo perder o controle caso falhe em um teste de Branco (Rotineiro). Nesse efeito, além das mudanças do nível anterior, o evocador ganhará também garras e presas, e ficará levemente mais peludo.

Licantropia 5: O evocador ganha um ajuste de +3 na coluna, +3 no dano para qualquer ataque realizado, porém agora ele recebe +5 EH extra. O evocador se tornará um ser agressivo, com pouquíssimo discernimento, perdendo o controle em qualquer situação hostilidade explícita caso falhe num teste de Amarelo (Fácil). Neste efeito, além das mudanças dos níveis anteriores, o evocador terá todo o seu corpo levemente modificado ao formato de um lobisomem.

Licantropia 7: O evocador ganha um ajuste de +4 na coluna, +4 no dano para qualquer ataque realizado, porém agora ele recebe +5 na Velocidade Base, +5 EF e +10 EH extras. Neste nível, o evocador se tornará um ser selvagem com nenhum discernimento caso falhe num teste de Laranja (Médio). Caso falhe, ele só reconhecerá as pessoas com as quais possua um laço afetivo. Neste efeito, além das mudanças dos efeitos anteriores, o evocador terá calda de lobo e seus pelos aumentarão.

Licantropia 9: O evocador ganha um ajuste de +5 na coluna, +5 no dano para qualquer ataque realizado, porém agora ele recebe +10 na Velocidade Base, +10 EF e +20 EH extra. Neste nível, o evocador adquire a capacidade de regeneração sobrenatural, conseguindo recuperar 1 ponto de EF a cada 10 minutos, e 1 ponto de EH por minutos (4 rodadas) estando em combate ou não. O evocador se tornará um ser completamente agressivo e irracional, atacando qualquer um que represente uma ameaça, mesmo que este seja uma pessoa querida, caso falhe num teste de Vermelho (Difícil). Neste efeito, o evocador será um lobisomem completo.`,
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
			id: MagiaEnum.linguagem,
			nome: "Linguagem",
			niveis: [
				{
					id: "0",
					descricao: "Concede total 1 na linguagem desejada.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Concede total 7 na linguagem desejada.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Concede total 13 na linguagem desejada.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Concede conhecimento infinito na linguagem desejada.",
					nivel: 6,
				},
			],
			descricao: `Este feitiço concede temporariamente ao evocador habilidade em uma língua que ele normalmente não teria condições de entender e se expressar. O nível de habilidade que o encantamento concede ao evocador depende do nível do efeito usado.

Caso o evocador saiba ler em alguma língua, o feitiço também lhe permite de ler (mas não de escrever) nesta nova língua.

Após a duração da magia, os conhecimentos obtidos através dela desaparecem completamente. O uso deste feitiço não ajuda em nada o aprendizado de uma língua.`,
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
	];
}
