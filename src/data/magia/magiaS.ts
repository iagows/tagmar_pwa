import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.sacrificio,
			nome: "Sacrifício",
			niveis: [
				{
					id: "0",
					descricao:
						"O sacerdote sacrifica 10% pontos de sua EF para ganhar 2 pontos de Karma.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O sacerdote sacrifica 20% dos pontos de sua EF para ganhar 4 pontos de Karma.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"O sacerdote sacrifica 40% dos pontos de sua EF para ganhar 8 pontos de Karma (que pode ser doado todo ou em parte a outro místico) ou aumentar em 16 pontos de EF de outra pessoa.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"O sacerdote sacrifica 60% dos pontos de sua EF para ganhar 12 pontos de Karma (que pode ser doado todo ou em parte a outro místico) ou aumentar em 24 pontos de EF de outra pessoa.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"O sacerdote sacrifica 80% dos pontos de sua EF para ganhar 18 pontos de Karma (que pode ser doado todo ou em parte a outro místico) ou aumentar em 36 pontos de EF de outra pessoa.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"O sacerdote sacrifica 100% dos pontos de sua EF para ganhar 24 pontos de Karma (que pode ser doado todo ou em parte a outro místico) ou aumentar em 48 pontos de EF de outra pessoa.",
					nivel: 10,
				},
			],
			descricao: `Conhecidos por sua extrema bondade e desejo de paz, os sacerdotes de Selimom são capazes de passar por grandes sofrimentos em prol dos seus semelhantes. Muitas vezes para evitar um conflito eles utilizam poderes cedidos por seu Deus. Os Sacerdotes de Selimom são capazes de realizar um milagre sem seu Karma, para isto encontram na flagelação do próprio corpo uma fonte de Karma. Sim, mesmo com seu Karma esgotado o sacerdote poderá convocar o milagre Sacrifício, que lhe dará pontos de Karma para serem gastos em até uma hora em milagres que existam na sua lista de magias. Note que não é necessário que todo seu Karma tenha se esgotado para que esta magia seja evocada, já que ela pode ser usada para completar um Karma que falta para uma determinada magia. Outra capacidade deste milagre é de transferir a energia vital (EF) do sacerdote para outra pessoa, mas neste caso o Karma deve ser gasto normalmente. Na doação de EF, quem recebe ganha muito mais que a EF sacrificada, podendo ir além do máximo, mas após o término da duração, a EF que estiver além do máximo é perdida.

Uma possibilidade permitida é que o milagre Sacrifício pode ser ser convocado conjuntamente com outro milagre, mas o Karma não utilizado deve ser gasto em até uma hora. Deve-se observar que o sacerdote perde EF oferecendo sua vitalidade ao seu deus como uma oferenda, por essa razão o sacerdote que evocar este milagre não poderá recuperar os pontos perdidos usando qualquer tipo de magia, devendo se recuperar de forma normal. Mas nada impede o uso de poções mágicas e ou qualquer outro objeto mágico. A habilidade de Medicina pode ser usada.

Caso sua EF fique em zero, o Sacerdote ainda fica de pé e consegue atuar (usar habilidades, magias, etc). Alguns estudiosos acreditam que isto acontece por sua força de vontade ou por uma benção de Selimom. Mas se a redução da EF leve ela a um valor negativo (mas com um valor de até -15}, o Sacerdote entrará em um estado de coma (estável e sem perigo de vida) permanecendo neste estado até que sua EF volte ao normal (maior que zero). Todo Karma não usado é perdido ao término da magia, mas a EF perdida deve ser recuperada como explicado acima. Note que se ele perder exatamente a quantidade de sua EF e ficar com zero, ele não cairá em coma. Caso sua EF vá abaixo de -15 com o uso desta magia ele morrerá, e seu corpo evaporará sendo levado literalmente de corpo e alma para Selimon. Caso o percentual de perda resulte um número quebrado, o valor da perda deve ser arredondado para cima.

Um ponto importante da magia é que deve ser considerada apenas a EF que não inclui o equipamento de defesa, logo só deve ser considerado a EF Básica + Atributo Físico + Atributo Força. Assim, em cada efeito há um percentual perdido que deve ser calculado em cima desta EF Básica + Físico + Força para se determinar se o sacerdote caiu em coma. Esta perda deve ser anotada na ficha, pois nada impede do sacerdote usar esta magia mais de uma vez. Caso ele evoque novamente o percentual de perda deve sempre usar a EF Básica + Físico + Força original do personagem (quando ele não tem dano nenhum). Nos casos que ele já tiver sofrido dano na EF deve-se sempre verificar se já tomou dano no físico real (EF Básica + Físico + Força}, pois é dele que é descontada a perda.

Exemplo: Um sacerdote de Selimon que possui 17 de EF Básica, Força 1 e Físico 1 e usa um Elmo aberto. Ele tem então EF igual a 21 (17+1+1+2). Em uma situação crítica ele evoca Sacrifício 6 o que lhe causa a perda de 60% que corresponde a 60% de 19 (já que não conta o elmo) o que resulta em uma perda de 11,4 que arredondado para cima dá 12, ficando com 7 na EF (sem considerar o elmo) e 9 de EF considerando o elmo. A situação no combate piora e mesmo estando muito mal ele evoca de novo o efeito 6 de Sacrifício, que faz perder de novo 12 de EF. Note que deve ser usado sempre o valor original no cálculo! Como já estava com 7 de EF ele vai para -5 de EF entrando em coma, como descrito acima.

OBS: quando usada para ajudar outra pessoa, esta magia não pode ser usada uma segunda vez na pessoa no período de duração, mesmo que seja feito por outro Sacerdote.`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 5 },
			duracao: {
				tipo: DuracaoEnum.HORA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.sagracao,
			nome: "Sagração",
			niveis: [
				{
					id: "0",
					descricao:
						"abençoa até 3 de frascos de 250ml de água benta (o custo do ritual neste caso já inclui os frascos); ou abençoa uma arma para que ela seja capaz de atingir seres imateriais como fantasmas por uma semana (fica como uma arma magicamente +0); ou protege uma área de raio igual a 10 metros contra demônios e mortos vivos, por uma semana. O ritual custa 5 M.P. em qualquer um dos casos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"uma arma se toma magicamente +1; ou um objeto se torna um fócus +3; ou item de proteção ganha absorção +2; ou protege uma área de raio igual a 20 metros contra demônios e mortos vivos. Em qualquer desses efeitos a duração é de 1 mês e o ritual custa 1 M.O..",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"uma arma se toma magicamente +2; ou um objeto se torna um fócus +5; ou um item de proteção ganha absorção +4 e defesa +1 (se for armadura ou escudo) ; ou protege uma área de raio igual a 40 metros contra demônios e mortos vivos. Em qualquer desses efeitos a duração é de 3 meses e o ritual custa 2 M.O. e 5 M.P.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"uma arma se toma magicamente +3; ou um objeto se torna um fócus +7; ou um item de proteção ganha absorção +6 e defesa +2 (se for armadura ou escudo); ou protege uma área de raio igual a 80 metros contra demônios e mortos vivos. Em qualquer desses efeitos a duração é de 6 meses e o ritual custa 5 M.O.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"uma arma se toma magicamente +4; ou um objeto se torna um fócus +9; ou um item de proteção ganha absorção +8 e defesa +3 (se for armadura ou escudo); ou protege uma área de raio igual a 160 metros contra demônios e mortos vivos. Em qualquer desses efeitos a duração é de 1 ano e o ritual custa 10 M.O.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"uma arma se toma magicamente +5; ou um objeto se torna um fócus +11; ou um item de proteção ganha absorção +10 e defesa +4 (se for armadura ou escudo); ou protege uma área de raio igual a 240 metros contra demônios e mortos vivos; ou idem efeito 8 para o caso de itens, mas o sacerdote pode colocar junto ao efeito um milagre de seu conhecimento de efeito máximo igual a quantidade de Karma usado. Tal milagre será usado somente uma vez em uma situação de extrema necessidade (escolhida pelo jogador que estiver controlando o item) e depois o item fica como um item do efeito 8. Em qualquer desses efeitos a duração é de 1 ano e o ritual custa 15 M.O.",
					nivel: 10,
				},
			],
			descricao: `Sagração

Este milagre faz com que objetos normais recebam capacidades mágicas temporárias. Os itens encantados através desse feitiço têm que ter um propósito específico (expulsar os orcos do templo, matar o gigante líder da tribo, etc). Objetivos genéricos criados apenas para perdurar o efeito (destruir o mal, acabar com todos os Orcos de Tagmar, etc) fazem a magia falhar. A magia acaba quando o propósito for cumprido ou quando se esgotar a duração, o que acontecer primeiro. Só é permitido aos Sacerdotes manter consagrados um total de 3 objetos simultaneamente. Além desse limite a magia só pode voltar a ser evocada quando algum deles voltar a ser um item comum (cumpriu seu objetivo, a duração acabou ou a magia foi quebrada). Os itens podem estar distribuídos entre personagens diversos e/ou com o próprio sacerdote, porém situações exageradas podem ter a consagração negada pela divindade a critério do Mestre, caso ache que o sacerdote está criando objetos com um propósito leviano. Para detalhes sobre os itens mágicos ver Livro de Regras.

Além da capacidade de encantar objetos, a magia permite ao sacerdote consagrar o solo ou a água ao seu deus, de forma que se tornam poderosos contra seres como demônios e mortos vivos, conforme o tipo de efeito escolhido:

A água consagrada se torna água benta permanentemente, até que seja usada.

Um solo consagrado exerce uma força contra demônios e mortos vivos. Demônios e mortos-vivos têm que ter sucesso em suas Resistências à Magia contra a Força de Ataque de magia do conjurador deste milagre para poder entrar nas terras sagradas, e se falharem irão fugir para o mais longe que puderem durante 1 dia.

Ao escolher um nível de efeito o evocador só pode escolher uma das possibilidades descritas no efeito.

OBS: os itens de proteção são escudos, elmos e armaduras e os bônus deles não se acumulam num mesmo personagem, permanecendo o bônus maior. A Água abençoada Causa 1 de dano na EF ou 4 na EH, e reduz em 1 a RM (mas "não acumula"). Funciona contra demônios e mortos vivos.`,
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
			id: MagiaEnum.santuarioNatural,
			nome: "Santuário Natural",
			niveis: [
				{
					id: "0",
					descricao:
						"cria um santuário capaz de proteger 3 pessoas e torna o santuário invisível para animais, animais gigantes e animais sombrios.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"cria um santuário capaz de proteger 3 pessoas e 3 cavalos. Nenhum som de dentro do santuário se propagará para fora, ou seja, pode-se conversar dentro do santuário que ninguém ouvirá de fora. Além do efeito do nível anterior, torna o santuário invisível para raças civilizadas e selvagens; criaturas artificiais e místicas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"idem ao anterior, mas cria um santuário para 4 pessoas e 4 cavalos e neste nível também inibirá o cheiro. Torna também invisível para elementais e mortos vivos.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"idem ao anterior, mas cria um santuário para 6 pessoas e 6 cavalos, além do evocador pode fazer teste de Usar os Sentidos para uma área de até 10 metros de raio, exceto se estiver dormindo. Também torna o santuário invisível para monstros e hidras.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, mas cria um santuário para 7 pessoas e 7 cavalos e torna também invisível para dragões e criaturas infernais.",
					nivel: 9,
				},
			],
			descricao: `Ao utilizar essa magia, o evocador toca o local e faz surgir um santuário capaz de proteger pessoas e/ou animais contra os perigos ambientais (chuva, sol, inundações, desabamentos, terremotos, etc.). A magia tem efeito apenas em ambientes naturais, exceto dentro de lagos, rios ou oceanos (nesses lugares, a magia não funciona). Desta forma, assim que executar a magia, o terreno natural se adapta criando um santuário: o solo é moldado, raízes se erguem, buracos se abrem na rocha, galhos e folhagens se entrelaçam, etc. Enfim, as possibilidades são imensas e o Mestre irá informar o que foi criado de acordo com a descrição do local.

O santuário fica ativo por 10 horas. Após esse período, ele se desfaz sem deixar rastro. O evocador tem total conhecimento do tempo, sabendo exatamente quantos minutos faltam para encerrar. Caso seja da vontade dele, pode ser encerrado a qualquer hora. Caso for deixado qualquer objeto dentro do santuário ou se tiver alguém quando terminar o tempo, o santuário irá passivamente expulsar tudo que está dentro. Por exemplo, caso a forma definida pelo Mestre seja uma caverna em uma montanha, a rocha se moldou de fora para dentro. Logo, ao se desfazer o encanto, ela tomará o caminho inverso: de dentro para fora: e irá expelir quem ou o quê estivesse no santuário, sem causar dano.

É importante frisar que essa magia não pode ser usada para alterar estruturas artificiais que estejam no local.

E um último efeito da magia é tornar o santuário invisível para determinadas espécies caso fracassem em uma RM (a força de ataque deverá ser baseada no maior nível que o evocador possuir na magia). Caso passem, o santuário ainda apresentará os efeitos de acordo com os níveis: inibição de cheiro, som, e a possibilidade do evocador usar os sentidos, mas estará visível para tais criaturas.

A forma de como se tornará invisível, ou seja, imperceptível para essas criaturas, irá depender do tipo de santuário criado: ilusão para disfarçar a entrada do santuário (se numa caverna ilusões de rochas, se numa árvore ilusões de raízes}, mimetização do ambiente, ou até mesmo a invisibilidade. O mestre dirá de que forma ficará camuflado o santuário de acordo com o tipo de formação criada no ambiente.

Algumas criaturas conseguem sobrepujar o efeito de invisibilidade, devido ao vasto poder (dragões imperiais, por exemplo) e/ou profunda ligação com a natureza (licantropos e criaturas vegetais, por exemplo).`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 10,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 10,
			},
		},
		{
			id: MagiaEnum.seducao,
			nome: "Sedução",
			niveis: [
				{
					id: "0",
					descricao:
						"paralisa por duas rodadas ou reduz um nível de dificuldade em uma habilidade de interação social.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"paralisa por três rodadas ou seduz o alvo para que este faça sua vontade por 1 hora, desde que não ponha em risco sua vida, não prejudique os outros, nem seja contra a lei e que esteja a seu alcance ou ainda, reduz dois níveis de dificuldades em uma habilidade de interação social.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"paralisa por quatro rodadas ou reduz três níveis em uma habilidade de interação social.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"paralisa por seis rodadas ou seduz o alvo para que este faça sua vontade por oito horas, desde que não ponha em risco sua vida, nem seja contra a lei e o alvo fará de tudo para ficar a seu alcance ou ainda, reduz 5 níveis de dificuldade em uma habilidade de interação social ou torna Muito Difícil algo que seria Impossível.",
					nivel: 9,
				},
			],
			descricao: `Ao evocar essa magia, o alvo passa a ver no evocador um ser de beleza incrivelmente estonteante. Tal visão irá impactar o alvo de modo que ele não conseguirá fazer mais nada, ficando paralisado. Outro efeito da magia é tornar o evocador mais sedutor ao ponto de conseguir tirar vantagens no alvo da magia (efeito sedução). E um último efeito, é reduzir o nível de dificuldade em habilidades que se utilizam de interação social. São essas três habilidades que esse milagre afeta: Empatia, Persuasão ou Extrair Informação (essa última, desde que que não seja usada algum tipo de agressão física}, e apenas uma poderá ser escolhida.

Nos efeitos paralisante e sedução, o alvo terá direito a uma RM. Já na redução do nível de habilidade, não precisa de RM e a ação ocorrerá conforme as regras da habilidade. Mas em todos os casos, o evocador deverá escolher apenas um efeito de acordo com o nível na hora de lançar a magia.

A magia só funciona em raças civilizadas. O efeito paralisante e a redução da dificuldade da habilidade de interação social independem do sexo do alvo. Mas para o efeito sedução funcionar, será necessário descobrir a preferência sexual do alvo. Essa informação será dada no momento que lançar a magia e o alvo fracasse na RM. Caso a preferência seja por pessoas do mesmo sexo do evocador, a magia funcionará. Caso seja diferente, a magia é interrompida (o karma será gasto normalmente). Contudo, nada impede, caso o evocador queria, de tentar descobrir por outros meios a preferência sexual do alvo, evitando assim, a possibilidade de perder karma. A exceção é o nono nível, que o evocador consegue tirar vantagens do alvo independente da preferência sexual.

O efeito paralisante pode ser usado para interromper uma atividade ou até mesmo para evitar ser atacado em um combate. Caso alguém ataque o alvo sob o efeito da magia, a magia é quebrada. Enquanto durar o efeito, o evocador não poderá atacar ou tomar qualquer atitude que prejudique o alvo.

Sedução 7- paralisa por cinco rodadas ou seduz o alvo para que este faça sua vontade por quatro horas, desde que não ponha em risco sua vida, nem seja contra a lei e que esteja a seu alcance.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.sentidoNatural,
			nome: "Sentido Natural",
			niveis: [
				{
					id: "0",
					descricao:
						"Possibilita o evocador usar 1 sentido em uma área de 50m de raio.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Possibilita o evocador usar 2 sentidos em uma área de 120m de raio.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Possibilita o evocador usar 3 sentidos em uma área de 300 m de raio.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Possibilita o evocador usar 4 sentidos em uma área de 500m de raio. Os testes de Usar os Sentidos são feitos com -1 nível de dificuldade.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Possibilita o evocador usar 5 sentidos em uma área de 1000m de raio. Os testes de Usar os Sentidos são feitos com -2 nível de dificuldade.",
					nivel: 9,
				},
			],
			descricao: `Com esta magia, o místico pode fundir seus sentidos com a as plantas ao seu redor para obter informações que estejam nas proximidades do local onde se encontra. Para isto ele deve sentar em posição de meditação. Quando a magia é feita, o corpo do evocador entra em transe, e seus sentidos são projetados pela natureza que o cerca. Com esta projeção, os sentidos do místico podem caminhar de planta em planta na velocidade normal de sua VB enquanto eles se movem pela região desde que as plantas não estejam a mais de 5m uma da outra. Na hipótese de seus sentidos depararem com um lugar com ausência de plantas ou com algum obstáculo (pedras, muros, rio largo) ou com uma barreira mágica de qualquer tipo, eles não poderão atravessá-los. Os sentidos "andarão" como se fosse o próprio evocador na sua altura normal. Se um obstáculo requerer algum teste da habilidade (dificuldade Fácil ou maior) para ser transposto, então ele não poderá ser transposto.

Quando desejar o evocador pode interromper a magia e despertar do transe. Durante o transe, qualquer teste de Usar os Sentidos para perceber coisas em volta de seu corpo físico terá um nível a mais de dificuldade para ser feito. Caso seja atacado e seja acertado na EF ou 100% na EH a magia é interrompida.

Quanto maior o nível da magia, maior o alcance e mais sentidos poderão ser usados pelo evocador. A magia não fornece em si nenhuma informação, mas o evocador pode usar a habilidade Usar os Sentidos (a critério do Mestre) para que ele obtenha alguma informação quando não for uma situação de dificuldade Rotineira. O posicionamento dos sentidos do místico será igual ao que seria o seu posicionamento no local em questão. Os testes de Usar os sentido feitos na "caminhada" não possuem penalidades, e nos níveis mais altos possuem bônus.

Esta magia só pode ser usada em ambientes de grande predominância vegetal, como florestas, pomares e etc.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 5,
			},
		},
		{
			id: MagiaEnum.serDeAgua,
			nome: "Ser de Água",
			niveis: [
				{
					id: "0",
					descricao:
						"Doando 1 de EF do sacerdote, ele anima um ser de água com 1 de EF e defesa L0. É necessário no mínimo um copo de água e a criatura criada tem 1 palmo de altura e 200g de peso. A duração é de uma hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Doando 2 de EF do sacerdote, ele anima um ser de água com 5 de EF e defesa L1. É necessário no mínimo um balde de água e a criatura criada tem 50cm de altura e 5kg de peso. A duração é de 3 horas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Doando 3 de EF do sacerdote, ele anima um ser de água com 35 de EF e defesa L2. Ataca na coluna igual a FA da magia e faz 20/15/10/5 de dano. É necessário no mínimo 50 litros de água e a criatura criada tem 1,5 metros de altura e 50 Kg de peso. A duração é de 6 horas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Doando 4 de EF do sacerdote, ele anima um ser de água com 70 de EF e defesa L3. Ataca na coluna igual a FA da magia e faz 24/15/10/5 de dano. É necessário no mínimo 100 litros de água e a criatura criada tem 2m de altura e 100 Kg de peso. A duração é de 12 horas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Doando 5 de EF do sacerdote, ele anima um ser de água com 140 de EF e defesa L4. Ataca na coluna igual a FA da magia e faz 28/21/14/7 de dano. É necessário no mínimo 200 litros de água de água e a criatura criada tem 2,5m de altura e 200 Kg de peso. A duração é de 1 dia.",
					nivel: 9,
				},
			],
			descricao: `Com este milagre, o Sacerdote usa parte da sua força vital (EF) para dar vida a uma quantidade limitada de água. A água animada se comporta como uma criatura humanoide que obedece às vontades do evocador podendo se mover de forma independente do evocador podendo pegar e carregar objetos (suas mãos ficam sólidas para isto). Tarefas mais complexas como manipular alavancas, chaves, fechaduras ou qualquer outra ação que exija movimento de uma mão estão além das capacidades da criatura. O ser de água possui inteligência 0 e por isto não é necessário concentração para manter o milagre, mas em hipótese alguma ele irá afastar para além do alcance, e caso o sacerdote se mova ele se moverá também para tentar manter-se dentro do alcance da magia. Caso a distância entre o Sacerdote e o ser de água seja maior que o alcance da magia o encanto se quebra. O Sacerdote pode interromper a magia no momento que desejar e isto não requer gasto de Karma.

Para que o ser de água seja criado é necessário ter a quantidade de água indicada no nível do efeito. A criatura pode se mover com uma VB de 10 metros por rodada, podendo carregar um peso igual ao seu próprio peso. Ela também pode se espichar tornando-se mais fino até o limite do triplo de sua altura. Ele pode usar este recurso para escalar ou alcançar um local mais alto que sua altura. Outra capacidade é poder passar por buracos e frestas, mas neste caso o tempo para passar pelo buraco (ou fresta) é idêntico que água de igual volume normal levaria (1Kg de água = 1 litro de água).

A partir do estágio 5 a criatura passa a poder combater com seus punhos que ficam também sólidos quando em combate, sendo que a coluna de resolução é igual a Força do Ataque (FA) da magia. Armas normais podem acertá-la, mas armas perfurantes fazem -25% de dano. Caso o sacerdote fique muito ferido (EF<0) o ser de água interromperá o que estiver fazendo para ir proteger o sacerdote. Caso o sacerdote morra, a magia se encerra.

OBS: só é possível animar 1 ser de água por vez, a doação de EF deve ser da EF do próprio corpo do Sacerdote, por isto não pode ser usado EF referente a absorção dos equipamentos de defesa (armaduras, elmos, escudos, etc).`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 20 },
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
			},
		},
		{
			id: MagiaEnum.serenidade,
			nome: "Serenidade",
			niveis: [
				{
					id: "0",
					descricao:
						"Aumenta o nível de tranquilidade de tropas aliadas em um raio de 5 metros com centro no evocador, impedindo-as de serem vítimas de magias ou efeitos mágicos que afetem a audição por 5 rodadas OU permite que o evocador não erre (resultado branco) o seu primeiro ataque.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Aumenta o nível de tranquilidade de tropas aliadas em um raio de 5 metros com centro no evocador, impedindo-as de serem vítimas de magias ou efeitos mágicos que afetem a audição e visão por 10 rodadas OU torna o evocador imune ao erro comum (todo resultado branco torna-se amarelo}, mas não imune à falha por 10 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Aumenta o nível de tranquilidade de tropas aliadas em um raio de 10 metros com centro no evocador, impedindo-as de serem vítimas de magias ou efeitos mágicos que afetem a audição, olfato e visão por 10 rodadas OU permite que o evocador, durante a execução de uma nova magia sua, mantenha-se concentrado de tal forma que um ataque que cause 100% de dano na EH não quebrará a evocação do novo milagre, o efeito dura 10 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Eleva o moral de tropas aliadas em um raio de 10 metros com centro no evocador, impedindo-as de serem vítimas de magias ou efeitos mágicos que afetem visão, audição, tato e olfato por 15 rodadas OU aumenta um nível do ataque do evocador por 10 rodadas (Branco torna-se 25%, 25% torna-se 50%, e assim por diante. A falha permanece e o resultado Azul não se torna crítico).",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Eleva o moral de tropas aliadas em um raio de 20 metros com centro no evocador, impedindo-as de serem vítimas de magias ou efeitos mágicos que afete qualquer um dos sentidos por 15 rodadas OU aumenta um nível do ataque do evocador por 10 rodadas, sendo possível, inclusive, uma única vez, anular uma falha e torná-la apenas um erro(branco) e permite que o evocador, durante a execução de uma nova magia sua, mantenha-se concentrado de tal forma que um ataque que causaria 100% de dano na EH ou até 50% de dano na EF não quebrará a evocação do novo milagre, mas o crítico quebrará.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Eleva o moral de tropas aliadas em um raio de 20 metros com centro no evocador, impedindo-as de serem vítimas da magia Covardia e de magias ou efeitos mágicos que afetem qualquer um dos sentidos por 20 rodadas OU aumenta um nível do ataque do evocador por 15 rodadas, sendo possível, inclusive, uma única vez, anular uma falha e torná-la apenas um erro (branco) e, também uma única vez, tornar um Azul escuro em Crítico. Além disso, permite que o evocador, durante a execução de uma nova magia, mantenha-se concentrado de tal forma que um ataque que causaria qualquer dano na EF não quebrará a evocação do novo milagre, mas o crítico quebrará.",
					nivel: 10,
				},
			],
			descricao: `Serenidade é o sentimento daquilo que está tranquilo, calmo e suave. Ter serenidade é expressar suavidade nas ações, mesmo diante de situações adversas e de conflitos.

Este milagre permite ao sacerdote, em situações de conflito ou nas mais diferentes adversidades, manter-se sereno, tranquilo e calmo ou afetar a serenidade de outros ao seu redor tranquilizando-os, desde que não passem em um teste de RM, ou mesmo elevando-lhes o espírito(moral).

Em combate, o encanto preza pela suavidade das ações podendo até fazer com que a tranquilidade e mansidão do próprio sacerdote no manuseio de suas armas evitem que falhas ocorram e, até mesmo, permitam que um crítico aconteça. Além disso, a serenidade adquirida pode inclusive, em níveis mais altos, permitir que a concentração do evocador para lançar novos milagres não seja quebrada, mas o dano recebido é somado normalmente.`,
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
			id: MagiaEnum.sextoSentido,
			nome: "Sexto Sentido",
			niveis: [
				{
					id: "0",
					descricao:
						"Um uso da habilidade Sensitividade sofre um redutor de -1 nível de dificuldade. Duração do efeito é de 1 hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O Sacerdote sente os intemperes nunca sendo pego de surpresa por uma chuva, nevasca, terremoto ou qualquer desastre natural a quantidade de dias afrente que pode ser visto e de até 1 dia por nível da magia ativa. Dificuldade amarela para sentir os intemperes. Um uso da habilidade Sensitividade sofre um redutor um redutor de -2 nível de dificuldade. Duração do efeito é de 2 horas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas o redutor para Sensitividade é de -3 (valendo para 2 usos}, e a Duração é de 3 horas. O Sacerdote literalmente sente as emoções das pessoas, sabe se a vítima está feliz, triste, cansada, com dor, com medo etc. Além disso, possui um bom senso de perigo, que o mantém sempre alerta à vida, assim no caso de ser pego numa surpresa parcial ele tem direito a um teste extra em Sensitividade (difícil) para não cair nela. Dificuldade laranja (Médio) para sentir as emoções.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"idem ao anterior, mas o redutor para Sensitividade é de -4 (valendo para 2 usos}, e a Duração é de 4 horas, e o teste para não ser pego em surpresa é médio e vale tanto para surpresa parcial como completa. O Sacerdote se torna uma pessoa altamente intuitiva. Sente e compreende o que está a sua volta profundamente, indo além do senso comum, podendo perceber se alguém está ou não mentindo. Dificuldade vermelha (difícil) para sentir mentiras.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, mas o redutor para Sensitividade é de -5 (valendo para 3 usos}, e a Duração é de 5 horas, fica imune a surpresa parcial, o teste para surpresa completa é fácil e dificuldade laranja para sentir mentiras. O Sacerdote sente quando as coisas não estão acontecendo como deveriam. Além disto, com um teste de dificuldade azul (Muito difícil) ele consegue sentir perigo (situações que coloque a vida do evocador em risco tais como armadilhas comuns e ou mágicas).",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"idem ao anterior, mas o redutor para Sensitividade é de -5 (valendo para 3 usos}, e a Duração é de 6 horas, fica imune a surpresa parcial ou completa e dificuldade vermelha para sentir o perigo. Além disto, todo rolamento impossível de Sensitividade vira muito difícil (neste caso o bónus de -5 não se aplica).",
					nivel: 10,
				},
			],
			descricao: `O sexto sentido é uma percepção extrassensorial, que vai além dos nossos cinco sentidos básicos, visão, audição, paladar, olfato, tato. É uma intuição, que de certa maneira nos permite ter sensações de “clarividência”. Com esse milagre, o Sacerdote expande as capacidades da habilidade Sensitividade permitindo que ela faça coisas além da sua capacidade normal. Em efeitos mais altos o sacerdote consegue prever e até mesmo evitar ataques de surpresa.

A partir do nível 4 a magia irá prevenir ataques em surpresa parcial e ou completa. O Sacerdote pode usar os efeitos anteriores em quanto a magia estiver ativa evocando uma magia de maior nível utilizando se assim do redutor de nível da magia de maior nível respeitando a quantidade de utilizações. Não existe resistência a magia pois não enfeitiça o oponente, apenas o próprio Sacerdote, melhorando sua habilidade. Um efeito extra desta magia é que ela elimina a penalidade por uso de armaduras na habilidade Sensitividade.

Um ponto importante a ressaltar é que a duração da magia que está indicada em cada efeito, só é válida para efeitos que não exigem o rolamento da habilidade Sensitividade. Para os efeitos que usam a habilidade Sensitividade a magia dura até o tempo estipulado ou quando a quantidade de usos for alcançada.

OBS: Tirar 1 no dado sempre seria falha, mas neste caso o evocador pode fazer outra tentativa, porem aumentando a dificuldade estipulada na magia em 2 níveis. Se não obter sucesso a falha acontece. Outro ponto importante é que redutor de níveis de dificuldade só se aplica no uso da habilidade Sensitividade, não se aplicando aos efeitos de saber do clima, das emoções, mentiras, pressentir perigo e de não cair em surpresa, pois estes efeitos têm em cada nível a dificuldade já definida.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 5,
			},
		},
		{
			id: MagiaEnum.silencio,
			nome: "Silêncio",
			niveis: [
				{
					id: "0",
					descricao:
						"Silencia uma área de meio metro de raio em tomo do ponto escolhido.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Silencia uma área de 1 metro de raio em torno do ponto escolhido.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Silencia uma área de 2 metros de raio em torno do ponto escolhido.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Silencia uma área de 3 metros de raio em torno do ponto escolhido.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Silencia uma área de 5 metros de raio em torno do ponto escolhido.",
					nivel: 9,
				},
			],
			descricao: `Com a utilização deste encantamento, o evocador pode criar silêncio absoluto em torno de um ser ou uma área em volta de um ponto escolhido. Nenhum som se propaga na área de efeito desta magia, em nenhuma direção.

O valor da área de efeito do feitiço depende do efeito escolhido. Caso o evocador decida lançar esta magia contra uma pessoa e essa pessoa resista à magia, o encantamento não tem nenhum efeito. Caso a vítima falhe na Resistência a área do silêncio fica centrada nela, e se move com ela.

Seres que estejam dentro da área do encanto poderão usar apenas magias cuja evocação seja instantânea. Magias que tenham evocação mais longa não poderão ser utilizadas, pois os seus evocadores não poderão fazer o componente vocal da evocação.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 5,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.sono,
			nome: "Sono",
			niveis: [
				{
					id: "0",
					descricao: "Faz com que uma vítima fique sonolenta por 2 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Faz com que uma vítima fique sonolenta por 5 rodadas",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Induz uma vítima a dormir um sono leve por 10 rodadas.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Induz uma vítima a dormir um sono leve por 10 minutos.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"Faz com que três vítimas fiquem sonolentas por 10 rodadas",
					nivel: 6,
				},
				{
					id: "5",
					descricao:
						"Induz uma vítimas a dormir um sono pesado por 10 rodadas.",
					nivel: 7,
				},
				{
					id: "6",
					descricao: "Induz uma vítima a dormir um sono pesado por 1 hora.",
					nivel: 9,
				},
			],
			descricao: `A magia Sono faz com que uma ou mais vítimas durmam ou sejam acometidas de grande sonolência. Todas as vítimas têm direito de tentar resistir à magia. Aquelas que resistem não são afetadas. Esta magia tem evocação muito discreta e dificilmente o evocador será percebido. Devido a isso e ao efeito da magia, algumas vítimas sequer percebem que sofreram um encanto.

Três tipos de sono são possíveis com essa magia: a sonolência, o sono leve e o sono pesado.

A sonolência é um estado de semi-inconsciência no qual o individuo tem grande dificuldade em perceber o que se passa a sua volta, porém, qualquer barulho, por menor que seja, pode despertá-lo. Caso alguém queira se aproximar de uma vítima sobre efeito de sonolência sem acordá-la, um teste da habilidade “Ações Furtivas” deverá ser efetuado (a critério do mestre do jogo).

Uma vítima em estado de sonolência não esta totalmente inconsciente e reagirá caso seja atacada de maneira óbvia (um ataque direto). Nesta situação ela pode receber um ataque de surpresa parcial com grande facilidade, mas só sofrerá ataques de surpresa completos de atacantes cuja presença ela desconhecia antes de receber a magia.

Em sono leve ou pesado a vítima está realmente dormindo. O sono leve pode ser desfeito por barulhos altos ou toques leves e o sono pesado é desfeito apenas por pancadas na vítima. Uma pessoa em sono pesado não acordará se for tocada, mas movimentos bruscos como tentar amarrá-la ou carregá-la a acordam.

Note que deixar alguém sonolento ou em sono leve durante uma batalha seria inútil pois ele despertaria imediatamente devido ao barulho.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.sorte,
			nome: "Sorte",
			niveis: [
				{
					id: "0",
					descricao:
						"O sacerdote consegue uma pequena ajuda em momentos de necessidade. Sacerdote sem dinheiro encontra uma moeda de cobre no chão pra comprar um pão. Ou então está no meio de uma grande cidade com muita sede e encontra uma fonte de água limpa. A evocação é de 1 rodada e dura 1 hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior mas a ajuda pode se dar em ambientes mais inesperados, como encontrar ajuda no meio de uma estrada ou estar perdido em algum lugar não perigoso e encontrar uma pessoa que possa indicar o caminho. A evocação é de 1 rodada e dura 2 horas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior mas o local pode ser mais inesperado como encontrar um cacto num deserto ou alimentos saudáveis dentro de uma caverna. O sacerdote também poderá encontrar itens comercializáveis mais raros em cidades pequenas (como encontrar materiais para magia) ou ainda será beneficiado em sua viagem com o clima. A evocação é de 1 rodada e dura 2 horas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"O sacerdote já conta com uma sorte incrível: se cair de uma ponte não muito alta cairá sobre uma carroça de feno que está passando, se estiver em uma taverna ladrões não irão se importar em rouba-lo a não ser que haja algo que chame muito atenção no sacerdote, serviços especializados e incomuns podem ser encontrados mesmo em locais menos prováveis (encontrar um ferreiro em uma floresta, um médico experiente no meio do estrada, um cartógrafo em uma vila pequena). A evocação é ritual e dura uma semana. Os materiais necessários para a evocação custam 4 moedas de ouro.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"O sacerdote é dotado de grande sorte. No meio de uma batalha os inimigos são atacados por abelhas que tinham numa colméia próxima, um antigo amigo o encontra e lhe oferece ajuda, armadilhas não muito complexas disparam antes do sacerdote se aproximar delas, um inimigo que quisesse surpreendê-lo tem uma crise de espirro. A evocação é ritual e dura 1 semana. Os materiais necessários para a evocação custam 10 moedas de ouro.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"O sacerdote é um verdadeiro protegido de seu deus com esse efeito. O sacerdote está sempre na hora certa e no lugar certo. Mesmo as coisas mais absurdas podem acontecer. O sacerdote pode encontrar um item mágico no chão, pode se perder no meio de um deserto e sair andando e chegar exatamente no lugar onde queria, caso tenha sido amaldiçoado encontra facilmente quem possa quebrar sua maldição e esteja disposto a fazê-lo, ao falhar em combate e deixar a arma cair no chão ela pode “quicar” e voltar à mão, ao ser perseguido e atravessar uma ponte ela se quebra imediatamente depois que o sacerdote passou por ela, o sacerdote pode cair em um precipício e um galho de uma árvore prender em sua roupa e salva-lo. Além disso tudo o que o sacerdote resolve fazer tem uma maior chance de dar certo, recebendo –1 nível de dificuldade em qualquer habilidade e a falha em combate passa a ser considerado como erro. A evocação é de 1 rodada e dura 1 hora.",
					nivel: 10,
				},
			],
			descricao: `Com este milagre, o sacerdote de Plandis é favorecido por situações incomuns e inesperadas, considerado perante os outros como uma pessoa sortuda. Para a evocação do milagre nos níveis mais altos são necessários materiais para se realizar um ritual cujos valores estão descritos no nível da magia.

Os efeitos descritos são apenas sugestões para os mestres, mas não cobrem todas as possibilidades. Além disso, deve ficar claro que o sacerdote ao evocar o milagre não tem qualquer controle sobre o encanto, sendo o Mestre responsável por determinar os efeitos que ocorrerão. Os efeitos são cumulativos, ou seja, alguém que evoque sorte 8, terá também os efeitos de Sorte 1,2,4 e 6. Observe que mesmo nos efeitos de evocação instantânea a duração não é instantânea, ou seja, não é logo após que o sacerdote evoca o milagre que o evento acontece automaticamente, geralmente leva-se um tempo e aconselha-se que todo evento ocorrido em prol do sacerdote esteja relacionado com a aventura. Além disso, em certas situações o Mestre pode querer evitar certo tipo de ajuda e portanto, ele pode fazer com que o efeito não ocorra. Contudo, apesar do Mestre não ser obrigado a enviar a ajuda, aconselha-se que ele sempre pense em uma maneira de ajudar de acordo com o nível da magia, e de preferência o mais inesperada ou estranha possível.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
		},
		{
			id: MagiaEnum.sosia,
			nome: "Sósia",
			niveis: [
				{
					id: "0",
					descricao:
						"O sósia não tem a capacidade de falar e não pode se afastar mais do que 20 metros do evocador. O ritual custa 2 moedas de ouro. O Sósia vive por 1 mês e possui 2 pontos de karma para evocar Mutação.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas neste nível o sósia passa a poder se comunicar telepaticamente com o mago e adquire a capacidade de fala. Ele não pode se afastar mais do que 50 metros do evocador. O ritual custa 4 moedas de ouro. O sósia vive por 2 meses.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas o sósia passa a ser capaz de evocar 1 magia do mago que o criou com nível máximo 5. Ele não pode se afastar mais do que 70 metros do evocador e possui 5 pontos de karma. O ritual custa 7 moedas de ouro. O Sósia vive por 5 meses.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas o sósia passa a ser capaz de evocar 2 magias do mago que o criou com nível máximo 7. Ele não pode se afastar mais do que 100 metros do evocador e possui 7 pontos de karma. O ritual custa 10 moedas de ouro. O Sósia vive por 8 meses.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas o sósia passa a ser capaz de evocar 3 magias do mago que o criou com nível máximo 10. Ele não pode se afastar mais do que 150 metros do evocador e possui 10 pontos de karma. O ritual custa 14 moedas de ouro. O Sósia vive por 1 ano e 1 dia.",
					nivel: 10,
				},
			],
			descricao: `Essa é uma das grandes magias do Colégio do Conhecimento. Estes magos se aprofundaram tanto no conhecimento de si próprios que foram capazes de através da magia, liberar parte de sua essência e fazê-la interagir com o mundo como se fosse um ser vivo. Esse ser nasce do corpo do mago e, por isso, sempre que um Sósia é gerado o mago além de pagar o sacrifício do ritual, perde metade de sua EF, a qual pode ser regenerada normalmente. A EF do sósia gerado é igual à quantidade de EF gasta pelo mago no momento que ele realiza o ritual e não é possível gastar mais EF para melhorar o sósia.

O ritual da magia Sósia é extremamente cansativo e doloroso. No fim do ritual o mago estará totalmente exaurido, precisando descansar por no mínimo 1 dia.

O sósia gerado obedecerá todas as ordens do mago sem hesitar e como ele é parte do mago, de acordo com o nível de efeito usado ele pode compartilhar algumas de suas magias. Em alguns níveis a ligação entre o mago e o Sósia se torna muito forte. Caso haja algum elo mental com o sósia, e esse morrer, o mago perderá novamente metade de sua EF e ficará atordoado por uma rodada. Os magos não costumam colocar seus Sósias em perigo, mas nada os impede de fazê-lo, sendo que estes seres foram gerados originalmente para serem auxiliares do mago.

O sósia tem os mesmos parâmetros que o mago (tamanho, peso, EH, Velocidade, força, agilidade, aura, etc). Em níveis mais altos o Sósia é capaz de usar algumas magias de seu criador, as quais devem ser escolhidas no momento da evocação de Sósia e não podem ser modificadas posteriormente. O tempo de vida de cada Sósia depende do nível do feitiço utilizado. O mago pode aumentar o tempo de vida do sósia realizando novamente o ritual. Um mesmo Sósia pode ser mantido vivo por, no máximo, 50 anos.

A distância que o sósia pode ficar do mago depende também do nível de feitiço utilizado, se a distância entre eles for além do permitido o sósia cairá inerte no chão e só se recuperará quando o mago se aproximar. O Sósia não atacará o seu criador a menos que seja ordenado por este. Um mago não pode ter mais do que 3 Sósias ao mesmo tempo.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 5,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.sugestao,
			nome: "Sugestão",
			niveis: [
				{
					id: "0",
					descricao:
						"A sugestão pode ter até 3 palavras e durar até 5 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A sugestão pode ter até 7 palavras e durar até 15 rodadas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "A sugestão pode ter até 15 palavras e durar até 1 hora.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "A sugestão pode ter até 15 palavras e durar até 3 horas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "A sugestão pode ter até 45 palavras e durar até 6 horas.",
					nivel: 9,
				},
				{
					id: "5",
					descricao:
						"A sugestão pode ter até 15 palavras e durar até 24 horas.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço permite que seu evocador implante uma sugestão na mente de uma vítima, que tentará cumpri-la diligentemente caso falhe em sua Resistência à Magia. A complexidade da sugestão e a Duração da magia são determinadas pela Dificuldade do efeito usado.

A sugestão será determinada por uma frase cujo número máximo de palavras depende da Dificuldade do efeito usado. As frases devem ser gramaticalmente corretas para que a magia entre em efeito.

Sugestões que vão de encontro à natureza ou às inclinações da vítima dão direito a uma Resistência à Magia por rodada enquanto a mesma estiver sendo cumprida. No momento em que a vítima fizer a sua Resistência à Magia ou a Duração do encanto se esgotar, ela recupera a sua liberdade de ação e percebe que foi enfeitiçada. Sugestões que induzam a vítima ao suicídio simplesmente não são cumpridas.

Se a sugestão não for algo contrário à natureza da vítima, a mesma não perceberá que foi vítima de um encanto mesmo que obtenha sucesso em sua Resistência à Magia.

A Duração deste feitiço é o tempo que a sugestão permanece válida. Ou seja, a sugestão dada à vítima deve ser cumprida dentro deste tempo, ou o encantamento perderá o efeito e não cumprirá a sugestão a não ser que o deseje.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
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
