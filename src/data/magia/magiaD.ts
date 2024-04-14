import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { type Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.dadivasDaGuerra,
			nome: "Dádivas da Guerra",
			niveis: [
				{
					id: "0",
					descricao:
						"Idem ao anterior, mas também pode escolher: Combate com Escudo, Mira ou Golpe Letal.",
					nivel: 2,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas a duração é de um combate e pode ser escolhido: Leitura da Batalha, Escolta ou Dano Agravado.",
					nivel: 4,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas também o sacerdote pode usar um aprimoramento na técnica escolhida ou usar um aprimoramento para uma técnica que já possua. A partir desse nível, é possível escolher a intervenção divina: o sacerdote pede ajuda ao Deus, e apenas ele será beneficiado.",
					nivel: 6,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas a duração é de 1 hora OU o sacerdote pede ajuda ao Deus que beneficiará ele e um companheiro.",
					nivel: 8,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas a duração é de 1 dia OU o sacerdote pede ajuda ao Deus que beneficiará o grupo todo.",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite que sacerdotes de Blator, Crisagom e Crezir recebam de seus respectivos Deuses dádivas para usar em combate. Nos níveis mais baixos, as dádivas são autorizações temporárias para usar técnicas de combate permitidas apenas a Guerreiros e Ladinos. Nos níveis mais altos, o Deus também concede um auxílio direto ao sacerdote (intervenção divina).

O efeito de utilizar as técnicas de combate pode ser usado normalmente como qualquer milagre. Mas o efeito de intervenção divina somente pode ser evocado em situações críticas de combate, desfavorável ao sacerdote. A ajuda direta do Deus será específica para o momento, não poderá ferir diretamente os adversários, não garante vitória e só pode ser evocada 1 vez por dia (o efeito de usar técnicas de combate pode ser evocadas quantas vezes quiser por dia). O Mestre é quem irá definir como será essa ajuda e se o momento permite a evocação. Assim que a crise terminar, todas as alterações feitas pela magia retrocederão. Exemplos de momentos críticos e assistência divina:

- o sacerdote enfrenta um dragão, evoca a magia, e o Deus concede uma proteção extra na armadura contra fogo;

- o sacerdote enfrenta uma horda de mortos-vivos, evoca a magia, e o Deus concede um dano maior na arma usada contra as criaturas;

- o grupo do sacerdote está encurralado por gigantes e mais gigantes se aproximam pela ponte. Evoca a magia, e o Deus envia um raio para destruir a ponte.

Após evocar três vezes o efeito da intervenção divina, independente do intervalo de dias, será necessário recompensar a assistência (evocar o efeito de usar as técnicas de combate não requer retribuição, é livre, apenas a ajuda direta do Deus que precisa). O Deus mandará um enviado menor até o sacerdote para explicar como será. O Mestre deverá usar esse gancho para uma próxima aventura ou incluir essa história durante a campanha. Caso não faça, o sacerdote fica impossibilitado de usar a magia novamente, inclusive para o efeito das técnicas de combate. Prolongando-se o não pagamento da dívida, o sacerdote pode ser considerado desertor da Ordem e a divindade pode inibir o direito de o sacerdote usar magia. São exemplos de retribuições:

- Fazer a arrecadação e escoltar as doações da Igreja até a Ordem;

- Encontrar o objeto sagrado roubado do templo;

- Encontrar o assassino que está matando os fiéis;

- Mediar a paz junto a algum grupo em conflito com o rebanho, etc.

Enfim, o Mestre deverá usar de criatividade para criar e incluir a aventura. Lembrando que não são tarefas simples: o sacerdote tem que ser merecedor da dádiva divina, logo, a aventura tem que estar à altura.

A partir do nível 6, o evocador escolherá apenas um efeito na hora de lançar a magia.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
			extra: [
				"Por se tratar de magia, as restrições de Imperícia e Intermitência não se aplicam. É possível escolher técnicas com aprimoramentos a partir do nível 6 em diante porque a magia permite.",
				"O total na técnica de combate será igual a Força de Ataque (FA) da magia.",
			],
		},
		{
			id: MagiaEnum.dardosDeGelo,
			nome: "Dardos de Gelo",
			niveis: [
				{
					id: "0",
					descricao: "Cada dardo tem 8 de dano máximo;",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Cada dardo tem 16 de dano máximo;",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Cada dardo tem 20 de dano máximo;",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Cada dardo tem 24 de dano máximo;",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Cada dardo tem 32 de dano máximo;",
					nivel: 9,
				},
			],
			descricao: `Este feitiço cria 3 dardos pontiagudos de gelo no ar, os quais imediatamente se lançam às vítimas escolhidas pelo evocador. Caso mais de um dardo seja direcionado contra o mesmo alvo, o dano máximo é aumentado em 4 pontos por dardo.

Por exemplo, se um mago evocar o efeito 1, ele pode laçar 3 dardos com dano máximo 8 contra três alvos, ou dois dardos contra dois alvos onde um dardo tem dano máximo 8 e outro tem dano máximo 12, ou 1 único dardo com dano máximo 16. O dano máximo de cada dardo é determinado pelo efeito que está sendo usado.

Após atingir (ou não) o inimigo o dardo se fragmenta, derrete rapidamente e em seguida toda a água desaparece. Todo esse processo demora uma rodada (daí a Duração do feitiço).`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.degeneracaoFisica,
			nome: "Degeneração Física",
			niveis: [
				{
					id: "0",
					descricao:
						"Causa um efeito menor (como tremores, tosses, irritações, coceiras, etc) sem efeito prático, mas que impressiona o homem comum. A duração é de 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Uma dor profunda impede que a vitima aja durante a primeira rodada do efeito. Depois disso, ela passa a ter um ajuste de -2 colunas (como já foi dito antes) por um dia.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem à anterior, mas o ajuste é de -4 colunas e a duração é de 5 dias.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem à anterior, mas o ajuste é de -7 colunas e a duração é de uma semana.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"A vítima é duramente castigada por este efeito; antes de mais nada, ela fica sem ação por uma rodada, além de receber 5 pontos de dano na EF. Logo depois, vem o ajuste de -7 colunas. Por fim, a vítima deve permanecer em repouso total durante uma semana para se curar, caso contrário a duração é de um mês.",
					nivel: 9,
				},
			],
			descricao: `Esta praga é usada normalmente para punições exemplares. A dor causada por esta magia impede a vítima de agir normalmente até o final da duração (normalmente longa).

Caso a vítima do feitiço falhe em sua Resistência à Magia, ela sentirá dores tão fortes que terá penalidades para todas as Habilidades e para o combate.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.desertificacao,
			nome: "Desertificação",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 15, isRaio: true },
					descricao: "Reduz a vida vegetal em 25% da área.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 35, isRaio: true },
					descricao:
						"Reduz a vida vegetal em 50%, fazendo com que desapareçam todos os frutos e raízes comestíveis da área.",
					nivel: 3,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 75, isRaio: true },
					descricao:
						"Destrói todas as árvores frutíferas e raízes comestíveis, deixando somente as plantas resistentes como cactos e outras semelhantes da área.",
					nivel: 5,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 150, isRaio: true },
					descricao: "Destrói toda a vida vegetal na área de efeito.",
					nivel: 7,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 300, isRaio: true },
					descricao:
						"Idem ao anterior, mas além disso destrói o solo deixando-o infértil e arenoso..",
					nivel: 9,
				},
			],
			descricao: `Esta magia cria uma energia degenerativa que destrói a vida vegetal de uma área tornando-a deserta. A ação desta magia é imediata, após a evocação ser concretizada a vida vegetal começa a morrer em um ritmo muito acelerado se estendendo até o alcance máximo da magia. Quanto mais poderosa a magia, maior será a área do efeito e mais catastrófica será a desertificação.

Esta magia é perigosa podendo causar sérios danos á natureza, sendo por esse motivo, usada em ultima instancia pelos Naturalistas.

È possível diminuir o raio de abrangência da desertificação conforme a vontade do evocador.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.PERMANENTE },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 10 },
		},
		{
			id: MagiaEnum.desintegracao,
			nome: "Desintegração",
			niveis: [
				{
					id: "0",
					alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 10cm x 10cm x 10cm.",
					nivel: 1,
				},
				{
					id: "1",
					alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 50cm x 50cm x 50cm.",
					nivel: 2,
				},
				{
					id: "2",
					alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 1m x 1m x 1m, e vegetais cujas dimensões máximas sejam 10cm x 10cm x 10cm. O mago pode afetar até 2 objetos e/ou criaturas diferentes.",
					nivel: 4,
				},
				{
					id: "3",
					alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 2m x 2m x 2m, e vegetais cujas dimensões máximas sejam 50cm x 50cm x 50cm. A partir deste nível o usuário tem um controle melhor sobre sua magia, ele pode “desenhar” com sua desintegração, como se estivesse desenhando com as mãos. (usa-se o nível na habilidade “Arte” em desenho). O mago pode afetar até 3 objetos e/ou criaturas diferentes.",
					nivel: 6,
				},
				{
					id: "4",
					alcance: { tipo: AlcanceEnum.METRO, valor: 40 },
					descricao:
						"Afeta minerais cujas dimensões máximas sejam 3m x 3m x 3m, vegetais cujas dimensões máximas sejam 1m x 1m x 1m e animais cujas dimensões máximas sejam 20cm x 20cm x 20cm. O mago pode afetar 4 objetos/criaturas diferentes.",
					nivel: 8,
				},
				{
					id: "5",
					alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
					descricao:
						"Afeta minerais, cujas dimensões máximas sejam 4m x 4m x 4m, vegetais cujas dimensões máximas sejam 2m x 2m x 2m, e animais cujas dimensões máximas sejam 60cm x 60cm x60cm. O mago pode afetar 5 objetos/criaturas diferentes.",
					nivel: 10,
				},
			],
			descricao: `Esta magia destrói as forças de coesão da matéria transformando objetos ou criaturas em uma tênue nuvem (a matéria dispersada).

Este encanto é muito eficiente contra objetos, mas qualquer ser com aura é dificilmente atingido por ele. Mesmo os vegetais, têm mana suficiente para atrapalhar o encanto. Qualquer criatura viva tem o direito a um teste de Resistência à Magia para escapar de seus efeitos. Minerais e vegetais mortos (madeira) não têm esse direito.

Uma criatura só pode ser atingida por este encanto, se toda a sua aura for ameaçada, ou seja, o efeito deve ser grande o suficiente para atingir todo o corpo da vítima, ou a magia falha.

Objetos, porém, podem ser desintegrados parcialmente (uma parede pode ser destruída aos poucos).

Os efeitos indicam o tipo de material que pode ser atingido, as dimensões e volumes, a quantidade de alvos afetados de uma vez e seu alcance.

Alguns efeitos desta magia permitem que o mago desintegre vários objetos e/ou criaturas com apenas uma evocação, basta que a soma dos volumes (dimensões}, e a quantidade de objetos afetados não ultrapasse o total que o nível da magia suporta. Outra limitação é que o(s) objeto(s) afetado(s) deve(m) estar no campo de visão do mago.

Ex: Um mago deseja fugir de determinado local e para isso quer desintegrar duas tochas presas à parede que iluminam a sala onde está. Ele opta por usar o nível 6 do feitiço Desintegração e as tochas se desfazem imediatamente.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.deslocamentoNatural,
			nome: "Deslocamento Natural",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 10 },
					descricao:
						"Elimina as penalidades para terrenos pouco acidentados como chão pedregoso, matas mediamente fechadas, areia da orla de uma praia ou ladeiras com inclinação de até 20 graus.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.HORA, valor: 2 },
					descricao: "Idem ao anterior.",
					nivel: 3,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.HORA, valor: 2 },
					descricao:
						"Elimina as penalidades para terrenos muito acidentados (mas possível a travessia) como pântanos, dunas de um deserto, matas muito fechadas, mangues ou ladeiras com inclinação de até 40 graus.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					descricao: "Idem ao anterior, mas permite andar em neve muito fofa.",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.HORA, valor: 12 },
					descricao:
						"Elimina as penalidades para terrenos absurdamente acidentados e de acesso quase impossível como se deslocar durante um terremoto forte, areias movediças ou ladeiras com inclinação de até 60 graus.",
					nivel: 9,
				},
			],
			descricao: `Esse encanto permite ao místico sobrepujar as adversidades de terrenos naturais possibilitando se locomover normalmente em ambiente de difícil acesso como pântanos, areia fofa, matas fechadas, etc.

Funciona inibindo as penalidades de movimentação de tais áreas. Assim, o evocador se deslocará como se estivesse caminhando normalmente. A duração e o tipo de terreno irão depender do nível utilizado.

A inibição da penalidade do terreno também se estenderá caso o místico necessite entrar em combate. Lembrando que essa magia é de uso pessoal, e não se aplica a deslocamento montado ou combate montado.

Note que os efeitos desse encanto se aplicam somente enquanto o evocador estiver “se deslocando” e, durante esse deslocamento, necessite lutar. A critério do Mestre, ele poderá estender a outras situações julgadas no momento, como o uso de alguma habilidade, por exemplo. Mas de antemão, essa magia atua apenas para as duas situações iniciais.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
			extra: [
				'Para a correta aplicação das penalidades do terreno, recomenda-se que o Mestre consulte o capítulo 4 do Livro de Regras (Combate}, em específico os sub tópicos "Ataques em Situações Vantajosas" e "Clima e Terreno". Esta magia não esconde o rastro deixado. Esta magia só funciona em ambientes naturais.',
			],
		},
		{
			id: MagiaEnum.despistamento,
			nome: "Despistamento",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"Para perceber que a trilha é falsa é preciso atingir 1 nível de dificuldade a mais que seria necessário para detectar a trilha verdadeira; mas apenas se perceber que a trilha é falsa, poderá fazer um novo teste para rastrear a verdadeira.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
					descricao:
						"Idem anterior, mas aumenta em 2 níveis de dificuldade para detectar que a trilha é falsa.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.HORA, valor: 3 },
					descricao:
						"Idem anterior, mas aumenta em 3 níveis de dificuldade para detectar que a trilha é falsa.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.HORA, valor: 6 },
					descricao:
						"Idem anterior, mas, mesmo que a trilha falsa seja detectada, aumenta em 1 nível a dificuldade de rastreamento da trilha verdadeira. Concede um redutor de 1 nível de dificuldade em Manusear Armadilha.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.HORA, valor: 12 },
					descricao:
						"Idem anterior, mas aumenta em 4 níveis de dificuldade para detectar que a trilha é falsa. Se ela for percebida mesmo assim, dificulta em 2 níveis para se rastrear a trilha verdadeira. Concede um redutor de 2 níveis de dificuldade em Manusear Armadilha.",
					nivel: 8,
				},
				{
					id: "5",
					duracao: { tipo: DuracaoEnum.HORA, valor: 24 },
					descricao:
						"Idem anterior, mas o efeito aumenta em 5 níveis de dificuldade para detectar se a trilha é falsa, se ela for percebida mesmo assim, dificulta em 3 níveis para se rastrear a trilha verdadeira. Concede um redutor de 3 níveis de dificuldade em Manusear Armadilha.",
					nivel: 10,
				},
			],
			descricao: `Essa magia cria uma trilha falsa a partir do ponto que o evocador conjurar a magia. A direção apontada será decidida pelo místico no momento da criação, e não poderá mais ser alterada. Esta magia tem como restrição o uso em ambientes naturais ou em terrenos de terra mesmo que sejam não naturais (como ruas em cidades).

A magia não terá efeito caso o perseguidor esteja fazendo contato visual com o evocador (note que o encanto não faz com que o místico fique invisível, apenas cria uma trilha falsa). O tempo em que o perseguidor gastará seguindo a trilha falsa varia de acordo com o nível da magia.

A trilha criada é exatamente igual à que o evocador produziria mesmo estando acompanhado, não importando quantos estejam com ele, e sempre parecerá que foi feita a pouco tempo. O perseguidor deve conseguir passar no teste de seguir trilhas indicado em cada efeito para encontrar qualquer pista. Após a duração do efeito, o perseguidor terá chegado no fim da trilha e perceberá que foi enganado.

A partir do nível 6, caso o evocador tenha tempo para preparar e queira capturar o perseguidor, a magia possibilitará redução na dificuldade da habilidade Manusear Armadilhas.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
			extra: ["Esta magia só tem efeito em ambientes naturais."],
		},
		{
			id: MagiaEnum.destrezaAnimal,
			nome: "Destreza Animal",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 2 },
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, com - 4 colunas e reduzindo 2 níveis.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 4 },
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, reduzindo -2 colunas e reduzindo 2 níveis.",
					nivel: 3,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 6 },
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, reduzindo 2 níveis.",
					nivel: 5,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 8 },
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, com -4 colunas reduzindo 1 nível.",
					nivel: 7,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, reduzindo 1 nível.",
					nivel: 9,
				},
			],
			descricao: `Esta magia imbui no corpo do evocador a agilidade comum em animais, podendo então realizar um segundo ataque seguido do primeiro na mesma rodada. Esta magia pode ser evocada durante o combate sem contar como uma ação, mas deve ser declarada antes do rolamento dos dados do primeiro ataque. Este segundo ataque só pode ser usado se estiver usando armas de corpo-a-corpo.

O primeiro golpe é rolado normalmente, o segundo golpe realizado com a mesma arma é veloz porém menos potente, reduzindo assim colunas e níveis do resultado obtido. Resultado mínimo sempre é Branco, mesmo que a redução seja maior ou mesmo que seja falha (neste segundo ataque}, mas caso o primeiro ataque seja uma Falha Crítica a magia é perdida e o segundo ataque não acontece.

Devido a ligação da magia com a natureza, caso o evocador esteja a mais de uma semana fora de ambientes naturais, esta magia não poderá mais ser evocada. Será necessário se passar 1 dia em um ambiente natural para que esta magia possa ser evocada novamente.

Exemplo: O personagem ataca um oponente na coluna 10. Ao usar Destreza Animal 3, o segundo golpe se dá na coluna 8 (Destreza Animal 3 reduz duas colunas no ataque). Ao rolar o dado ele tira vermelho (75%}, mas como o efeito reduz 2 níveis, ele obtêm 25% de dano no segundo ataque.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
			extra: [
				"Na rodada que esta magia é evocada não é permitido que o personagem evoque ou tenha evocado outra magia. Nas rodadas subsequentes na qual a magia continua fazendo efeito esta restrição não se aplica e o personagem pode evocar outras magias normalmente.",
			],
		},
		{
			id: MagiaEnum.deteccaoDeMagia,
			nome: "Detecção de Magia",
			niveis: [
				{
					id: "0",
					descricao:
						"Detecta magia em 1 local, objeto ou ser tocado pelo evocador. Se for mágico indica o nível de detecção que deve ser usado de acordo com o que se deseja saber.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Detecta magia em 1 local, objeto ou ser a até 2,5 metros do evocador ou revela o menor poder de um objeto (de nível 2 ou menor) e tudo que é necessário para fazer uso deste.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Detecta magia em tudo que estiver em 1 área de 5 metros do evocador ou revela dois poderes (de nível 4 ou menor) de um objeto e tudo que é necessário para fazer uso destes.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao 4, mas permite saber a natureza da magia (arcana, divina, demoníaca, natural, profana, sagrada, titânica). No caso de seres, é possível também saber se este foi vítima do encanto ou se a ligação é de uma fonte como um item mágico (observe que neste caso os focus normais são incluídos como itens mágicos). A opção de revelação de poderes é para até 3 poderes de nível 6 ou menor.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Detecta todas as magias ao alcance de visão do evocador e permite saber qual especialização fez a magia e a força da magia (nível dela) ou revela todos os poderes (de nível 8 ou menor) de um objeto e tudo que é necessário para fazer uso destes.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Detecta todos os poderes de um objeto e tudo que é necessário para fazer uso destes.",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite ao evocador detectar e fazer uma leitura da presença de magias ou auras mágicas que estejam em locais, objetos e/ou seres. Além disso, dependendo do nível, é possível revelar como os objetos encantados e/ou mágicos funcionam e quais são as suas propriedades.

Ao utilizar este encanto, uma luz é emanada e sinaliza onde existe a presença de magia e/ou auras mágicas em operação, desde que esta esteja até 5 metros do místico. Nos níveis mais avançados o evocador começa a detectar informações mais profundas ao invés de simplesmente a presença.

Caso a magia entre em contato com um ser de aura própria, este tem direito a efetuar um teste de RM, caso passe, a magia não conseguirá detectar a presença de auras agindo sobre o ser e nem a de qualquer objeto encantado ou mágico que este esteja portando.

As informações obtidas serão sempre a do encanto mais forte (de maior nível) sobre cada alvo. Outro ponto importante de se ressaltar é que cada aura brilha de uma forma diferente, assim sendo, se uma sala tem magia em toda ela e um objeto mágico no meio, a sala brilhará em um tom e o objeto em outro, possibilitando assim identificar os alvos que possuem magia.

Os efeitos de detectar possuem evocação instantânea, mas caso o evocador opte pelo efeito de revelar a evocação é ritual.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
			extra: [
				"Caso o evocador use a magia com o mesmo efeito mais de uma vez sobre um objeto, a mesma detecção ou revelação será obtida, mesmo que o objeto possua outras informações.",
			],
		},
		{
			id: MagiaEnum.detectarIntencao,
			nome: "Detectar Intenção",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite saber se a vítima tem alguma intenção em relação ao evocador.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: `Permite saber, caso a vítima tenha alguma intenção no evocador, de saber algo a respeito da intenção. Poderão ser 5 as respostas da magia:
Muito ruim - desfavorece muito o evocador. Exemplo: coloca em perigo a vida do evocador
Ruim - desfavorece o evocador. Exemplo: deseja o mau e/ou tenta manipular
Neutra - não desfavorece nem favorece o evocador. Exemplo: um jogo político que favorece os dois lados, troca de favores
Boa - favorece o evocador . Exemplo: deseja o bem do evocador / oferece favor sem receber nada em troca
Não aplicável - algo que não favorece nem desfavorece necessariamente um ou outro. Exemplo: A pessoa está apaixonada pelo evocador`,
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas vale para todos aqueles acompanhados pelo evocador.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Permite saber se a vítima tem alguma intenção sobre alguém mencionado pelo evocador.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas permite saber alguns detalhes da intenção (o Mestre decide o que revelar).",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Permite saber com precisão qual é a intenção da vítima sobre qualquer pessoa citada pelo evocador ou próxima a ele no espaço físico, incluindo o próprio.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto, o evocador pode detectar fortes intenções que uma pessoa possa ter em relação ao evocador, nos níveis iniciais, ou alguma pessoa mencionada pelo evocador. Essa magia só pode ser evocada em uma conversa entre a vítima e o evocador da magia. A evocação é totalmente discreta e imperceptível por meios normais.

Intenções fracas não são podem ser detectadas (exemplo de fraca intenção: vou ficar perto do taverneiro pra ver se eu consigo um pouco de vinho).

Muito ruim - desfavorece muito o evocador. Exemplo: coloca em perigo a vida do evocador

Ruim - desfavorece o evocador. Exemplo: deseja o mau e/ou tenta manipular

Neutra - não desfavorece nem favorece o evocador. Exemplo: um jogo político que favorece os dois lados, troca de favores

Boa - favorece o evocador . Exemplo deseja o bem do evocador / oferece favor sem receber nada em troca

Não aplicável - algo que não favorece nem desfavorece necessariamente um ou outro. Exemplo: A pessoa está apaixonada pelo evocador`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.RODADA, valor: 3 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.distracao,
			nome: "Distração",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite atrair a atenção das pessoas em locais muito movimentados como festivais e celebrações.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite atrair a atenção das pessoas em locais bem movimentados, como um porto durante o dia.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Permite atrair a atenção das pessoas em locais de mediana movimentação, como uma cidade pequena ou vila.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Permite atrair a atenção das pessoas em locais de pouca movimentação, como uma cidade ou vila à noite.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Permite atrair a atenção das pessoas em locais onde quase não há movimentação, como um deserto.",
					nivel: 9,
				},
			],
			descricao: `Com a magia distração, o evocador é capaz de chamar rapidamente a atenção das pessoas em sua volta para onde quer que queira, de forma a ganhar tempo para fazer uma ação. Nos níveis iniciais apenas se consegue atrair para locais aonde há maior facilidade de dispersão, mas conforme o nível aumenta, as possibilidades se ampliam.

Ao evocar a magia, o evocador escolhe alguma coisa para atrair a atenção das pessoas; caso as pessoas não passem na Resistência à Magia elas irão obrigatoriamente olhar para o objeto indicado pelo evocador. Caso passem, elas não serão obrigadas a olhar, mas mesmo assim ficarão curiosas para ver. O efeito prático disso é que o evocador ganhará a iniciativa para que possa tomar alguma ação, como esconder, correr, furtar entre outras possibilidades. Quanto mais movimentado for o local, mais fácil será para tirar a atenção de si (um festival oferece bem mais oportunidades de distração do que um deserto).`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.doencas,
			nome: "Doenças",
			niveis: [
				{
					id: "0",
					descricao:
						"Conjuntivite. Esta doença afeta os olhos, embaçando a visão e causando um pouco de dor. Causa um Ajuste de -2 colunas de resolução para Percepções que envolvam visão e para ataques com armas de lançamento (arcos, atirar facas, etc). O tempo de cura é de 3 dias.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Gripe. Esta virose causa dores pelo corpo e impede esforço prolongado. A vítima recebe um Ajuste de -3 para combate ou habilidades que exijam esforço físico. O tempo de cura é de 7 dias.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Hemofilia. O sangue da vítima perde a sua capacidade de coagulação. Caso o doente receba dano na EF, ele perderá 2 pontos de EF por hora até estar morto ou o sangramento ser estancado com o uso de Curas Físicas. O tempo de cura é de 10 dias.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Febre. A vitima é acometida de febre alta e perda de coordenação motora. Isto implica em um Ajuste de -7 para o uso de combates, habilidades e feitiços. O tempo de cura é de 7 dias.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Febre amarela. Causa febre, tremores e coloração amarela pela pele. Isto implica em um Ajuste de -7 para o uso de combates, habilidades e feitiços. A cada rodada a penalidade aumenta 2 pontos (-9, -11,-13..). Após 5 rodadas o doente fica impedido de realizar qualquer esforço físico e não pode realizar qualquer tarefa delicada. O tempo de cura é de duas semanas. Caso a doença não seja tratada até 2 dias após a contaminação (com ou sem o uso de magia) a doença se agrava e vitima faz (a cada hora) uma Resistência Física contra uma força de ataque 10. Em caso de falha, a vítima morre.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço, infecta um adversário com uma doença. A magia está apenas no modo em que a doença contamina a vítima. Ou seja, a doença não pode ser retirada quebrando-se o encanto. A vítima tem direito a uma Resistência a Magia. Caso passe, o encanto não tem nenhum Efeito.

Os tempos de cura das doenças são indicados nos efeitos (o uso de magia pode abreviá-los). Note que a doença infecta a vítima imediatamente como se ela já estivesse em estágio avançado. Por isso, o tempo de cura contará corno o tempo que a doença leva para se curar a partir do momento da falha na Resistência à Magia. Todos os ajustes causados pelas doenças são recebidos imediatamente.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
			duracao: { tipo: DuracaoEnum.INSTANTANEA },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.dominacaoAnimal,
			nome: "Dominação Animal",
			niveis: [
				{
					id: "0",
					descricao: "Acalma ou espanta até 1 animal de estágio 3 ou menor.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Acalma ou espanta até 2 animais de estágio 5 ou menor.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Acalma ou espanta até 3 animais de estágio 7 ou menor OU 1 Animal Gigante de estágio 3 ou menor.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Acalma ou espanta até 4 animais de estágio 9 ou menor OU até 2 Animais Gigantes ou Místicos Irracionais de estágio 5 ou menor.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Acalma ou espanta até 5 animais de estágio 11 ou menor OU até 3 Animais Gigantes ou Místicos Irracionais de estágio 7 ou menor.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Acalma ou espanta até 6 animais de estágio 14 ou menor OU até 4 Animais Gigantes ou Místicos Irracionais de estágio 9 ou menor.",
					nivel: 10,
				},
			],
			descricao: `DominaçãoAnimal

Com esta magia o rastreador é capaz de acalmar ou espantar animais que falharem no teste de Resistência a Magia e que possam ouvir ou ver os movimentos de dominação do místico. O nível utilizado vai definir o tipo e a quantidade de animais afetados. Enquanto durar o efeito, a dificuldade nos testes de habilidade do evocador em lidar com aquele(s) animal(is) será reduzida em 1. É importante notar que qualquer ataque a um animal dominado resultará na quebra da magia e um provável castigo de Nil.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 50 },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.dominio,
			nome: "Domínio",
			niveis: [
				{
					id: "0",
					descricao: "Afeta até 4 Estágios de Elementais Menores.",
					nivel: 1,
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
				},
				{
					id: "1",
					descricao: "Afeta até 8 Estágios de Elementais Fracos ou menos.",
					nivel: 3,
					duracao: { tipo: DuracaoEnum.DIA, valor: 3 },
				},
				{
					id: "2",
					descricao: "Afeta até 16 Estágios de Elementais Médios ou menos.",
					nivel: 5,
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
				},
				{
					id: "3",
					descricao: "Afeta até 26 Estágios de Elementais Médios ou menos.",
					nivel: 7,
					duracao: { tipo: DuracaoEnum.DIA, valor: 7 },
				},
				{
					id: "4",
					descricao: "Afeta até 36 Estágios de Elementais Fortes ou menos.",
					nivel: 9,
					duracao: { tipo: DuracaoEnum.DIA, valor: 10 },
				},
			],
			descricao: `A magia Domínio põe sob o controle de seu evocador um ou mais elementais, caso os mesmos falhem em suas Resistências à Magia. A quantidade de elementais e qual o tipo mais poderoso passível de ser afetado dependem do Efeito utilizado.

Cada Efeito desta magia pode afetar apenas um número máximo de Estágios. Caso exista elementais dentro do alcance (de um tipo que possa ser afetado - ver abaixo) cuja soma dos Estágios seja superior ao número de Estágios que o Efeito usado tem condições de afetar, os mais fracos são afetados primeiro.

Além disso cada Efeito pode afetar apenas elementais de certo tipo ou menos. Elementais de tipo superior ao que o efeito pode afetar ignoram o feitiço (em compensação, eles não contam para o número máximo de Estágios que podem ser afetados).

Esta magia afetará elementais de qualquer origem (fogo, ar, água ou terra}, desde que estes possam ser afetados pelo efeito utilizado.

Cada Elemental que o evocador tenta dominar recebe uma Resistência à Magia. Os que obtiverem sucesso não serão afetados. Além disso, eles geralmente passam a ver o evocador como uma ameaça e atacarão o mesmo em preferência a todos os outros adversários.

Elementais que falhem em suas Resistências à Magia passam a servir o evocador com o melhor de suas capacidades pela Duração do efeito. Eles obedecerão todos os comandos do evocador fielmente. O evocador não precisa se concentrar para que os elementais o obedeçam.

Ao final do tempo de dominação o Elemental adquirirá imunidade a magia “Domínio” do evocador que o dominou, por isso, este mesmo Elemental não poderá ser dominado novamente por este evocador até retornar a seu plano. O tempo em que os elementais permanecem dominados, varia com o efeito usado.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 30 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.dominioMental,
			nome: "Domínio Mental",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite controlar uma criatura de até 2º estágio, o alvo pode se afastar no máximo 20 metros do evocador.",
					nivel: 1,
					duracao: { tipo: DuracaoEnum.RODADA, valor: 5 },
				},
				{
					id: "1",
					descricao:
						"Permite controlar uma criatura de até 3º estágio, os alvos podem se afastar no máximo 20 metros do evocador.",
					nivel: 2,
					duracao: { tipo: DuracaoEnum.RODADA, valor: 10 },
				},
				{
					id: "2",
					descricao:
						"Permite controlar duas criaturas até um total de 5 estágios, os alvos podem se afastar no máximo 50 metros do evocador.",
					nivel: 3,
					duracao: { tipo: DuracaoEnum.RODADA, valor: 15 },
				},
				{
					id: "3",
					descricao:
						"Permite controlar duas criaturas até um total de 7 estágios, os alvos podem se afastar no máximo 100 metros do evocador.",
					nivel: 5,
					duracao: { tipo: DuracaoEnum.RODADA, valor: 20 },
				},
				{
					id: "4",
					descricao:
						"Permite controlar duas criaturas até um total de 10 estágios, os alvos podem se afastar no máximo 200 metros do evocador.",
					nivel: 7,
					duracao: { tipo: DuracaoEnum.RODADA, valor: 20 },
				},
				{
					id: "5",
					descricao:
						"Permite controlar três criaturas até um total de 12 estágios, os alvos podem se afastar no máximo 500 metros do evocador.",
					nivel: 9,
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 30 },
				},
				{
					id: "6",
					descricao:
						"Permite controlar três criaturas até um total de 15 estágios, os alvos podem se afastar no máximo 1 km do evocador.",
					nivel: 10,
					duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
				},
			],
			descricao: `Com este encanto o mago é capaz de controlar a vontade de seres inteligentes que tenham falhado no seu teste de Resistência a Magia. Os seres controlados obedecerão a todas as ordens dadas pelo evocador com o máximo de suas capacidades, desde que estas não sejam postas em perigo (pelo menos não claramente) ou que sejam ordenados a fazerem coisas contra sua índole. Caso isto ocorra a vítima terá direito a um segundo teste de resistência para não cumprir esta ordem. Esta magia não afeta mortos-vivos e criaturas de outros planos (demônios, enviados, plantores, etc).

O mago tem que falar a mesma língua do ser enfeitiçado, se não ele não saberá como obedecer, pois não entenderá as ordens. Veja que esta magia domina a mente, mas não é possível ter acesso as memórias da vítima, ou seja, o ser enfeitiçado obedecerá a qualquer ordem, para fazer algo, que pode ser uma ação simples (andar, pegar um objeto, ficar parada, ect}, combater e até mesmo fazer uma magia (que o mago saiba que ela sabe fazer). Domínio mental anula a consciência da pessoa, impedindo que se peça para que ela revele qualquer informação que ela saiba.

Ao contrário da magia Amizade, após o termino da magia a vítima sempre terá consciência de que foi enfeitiçada, o que normalmente fará que ela odeie o mago. Caso seja forçada a fazer algo contra sua índole ela passará a ter um ódio mortal contra o mago, passando então a fazer de tudo para matar o mago.

A quantidade de seres e de estágios afetados, a duração do domínio e o alcance dependem do nível de encanto utilizado.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 3 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.dominioNatural,
			nome: "Domínio Natural",
			niveis: [
				{
					id: "0",
					descricao:
						"Obriga um Plantor Soldado ou mais fraco a realizar uma missão para o evocador.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Obriga um Plantor Mensageiro à servidão.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Obriga um Plantor Conselheiro a realizar uma missão para o evocador.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Obriga um Plantor Soldado à servidão.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"Obriga um Plantor Líder a realizar uma missão para o evocador.",
					nivel: 7,
				},
				{
					id: "5",
					descricao: "Obriga um Plantor Conselheiro à servidão.",
					nivel: 9,
				},
			],
			descricao: `Esta magia obriga um (1) Plantor à servidão ou a prestar um serviço para o evocador. O poder do Plantor dominado e o tempo que ele permanece a serviço do evocador variam com a dificuldade do Efeito usado.

Cada vez que o evocador desejar controlar um Plantor, ele deverá evocar este feitiço sobre o mesmo. Caso o ser resista à magia não será dominado e se possível irá atacar o evocador. Caso falhe será dominado.

Existem dois tipos de dominação: a servidão e o serviço. A servidão transforma o Plantor em um servo do evocador até que seu tempo de estadia no mundo físico se esgote. Durante este tempo, o Plantor sempre obedecerá o evocador servindo-o com o melhor de suas capacidades. Um evocador pode ter no máximo dois Plantares servindo-o ao mesmo tempo, sob quaisquer circunstâncias.

O serviço obriga o Plantor a realizar uma tarefa e então ficará livre para viver no mundo físico até que seu tempo de estadia neste se esgote. O evocador deve dar instruções ao Plantor sobre como realizar a Missão, e o ser vai então cumpri-la. Caso a missão demore mais de uma semana o Plantor fica livre após este período. Um evocador pode ter no máximo cinco Plantores prestando serviços para si ao mesmo tempo.

Um mesmo Plantor não pode ser dominado duas vezes pelo mesmo evocador, em outras palavras ele ganha imunidade ao encanto deste mago. Mas nada impede que outro evocador domine este mesmo Plantor.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
	];
}
