import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { type Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.fabricacaoDivina,
			nome: "Fabricação Divina",
			niveis: [
				{
					id: "0",
					descricao:
						"Recebe bônus de 1 nível na sua rolagem de carpintaria, trabalho em metal ou trabalhos manuais. Adicionalmente o tempo exigido pela habilidade passa a ser reduzido pela metade. O material e ferramentas deve ser providenciado normalmente pelo sacerdote.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Recebe bônus de 2 níveis na sua rolagem de carpintaria, trabalho em metal ou trabalhos manuais. Adicionalmente o tempo exigido pela habilidade passa a ser 1/4 do original. O material e ferramentas deve ser providenciado normalmente pelo sacerdote.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Recebe bônus de 3 níveis na sua rolagem de carpintaria, trabalho em metal ou trabalhos manuais. Adicionalmente o tempo exigido pela habilidade passa a ser 1/6 do original. O material deve ser providenciado normalmente pelo sacerdote. Ferramentas pequenas podem ser providenciadas pelo deus, mas ferramentas grandes (um forja por exemplo) deve ser providenciadas pelo Sacerdote.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Recebe bônus de 4 níveis na sua rolagem de carpintaria, trabalho em metal ou trabalhos manuais. Adicionalmente o tempo exigido pela habilidade passa a ser 1/8 do original. Metade do material deve ser providenciado normalmente pelo sacerdote. A outra metade do material e ferramentas pequenas podem ser providenciadas pelo deus, mas ferramentas grandes (um forja por exemplo) deve ser providenciadas pelo Sacerdote.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Recebe bônus de 5 níveis na sua rolagem de carpintaria, trabalho em metal ou trabalhos manuais ou torna Muito Difícil algo que seria Impossível. Adicionalmente o tempo exigido pela habilidade passa a ser 1/10 do original. Todo o material pode ser providenciado pelo Deus. Ferramentas pequenas podem ser providenciadas pelo deus, mas ferramentas grandes (um forja por exemplo) deve ser providenciadas pelo Sacerdote.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Se o resultado obtido não for uma falha (Verde}, o objeto criado é uma obra prima. Adicionalmente o tempo exigido pela habilidade passa a ser 1/10 do original. Todo o material e as ferramentas podem ser providenciadas pelo deus.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto o sacerdote consegue aprimorar seu uso das habilidades carpintaria, trabalho em metal ou trabalhos manuais. Nos níveis mais baixos é necessário ter o material para fabricação e as ferramentais apropriadas. A partir do efeito 4 o Sacerdote pode rogar ao seu deus pela ajuda de matérias e ferramentas conforme descrito nos efeitos. O Sacerdote só deve rogar ao deus se material ou ferramentas não estiverem disponíveis. Se a motivação for fútil, como por exemplo quer tirar proveito financeiro, o pedido de ajuda divina pode irritar o deus e a magia falhará, podendo inclusive ser punido por ele. Esta decisão de ser uma causa fútil (ou não) é de exclusiva decisão do Mestre. Há também uma limitação de materiais/ferramentas que o deus pode providenciar. Normalmente o deus só enviará uma quantidade limitada que seja adequada ao uso pessoal do sacerdote. Como regra geral o Sacerdote não tem nenhum controle sobre o que será providenciado, e esta decisão da quantidade e de quais itens o deus enviará fica a cargo de Mestre de acordo com cada situação.

A duração do encanto será de acordo com a duração da habilidade usada. No momento em que o místico realizar qualquer outra ação que não esteja relacionada ao uso da habilidade a magia será encerrada. Todo material que sobrar e as ferramenta sumirão depois que a fabricação tiver sido concluída.`,
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
			id: MagiaEnum.faro,
			nome: "Faro",
			niveis: [
				{
					id: "0",
					descricao:
						"Pode farejar uma característica de plantas, animais e objetos que; recebe menos 1 nível de dificuldade para Usar Sentidos aplicado a faro. O efeito dura 15 mim e a distância máxima é de 1 km.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Pode farejar até duas características de plantas, animais e objetos; recebe menos 2 níveis de dificuldade para Usar Sentidos aplicado a faro. O efeito dura 30 minutos e a distância máxima é de 2 km.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Pode farejar até 4 características de plantas, animais, seres e objetos com um bom grau de precisão; pode sentir odores que já passaram no locar até 5 dias, recebe menos 3 níveis de dificuldade para Usar Sentidos aplicado a faro. Poderá perceber se vai chover em breve. O efeito dura uma hora e a distância máxima é de 3 km.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Pode farejar até 6 características de todo tipo de odor com um ótimo grau de precisão, e pode sentir odores que já passaram no locar até 10 dias, recebe menos 4 níveis de dificuldade para Usar Sentidos aplicado a faro. Poderá perceber pelo cheiro que alguém se aproxima usando uma rolagem de Usar Sentidos em quanto a magia estiver ativa ou até mesmo que vai chover em breve. O efeito dura duas horas e a distância máxima é de 4 km.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Pode farejar até 10 características todo tipo de odor com um grau de precisão incrível, e pode sentir odores que já passaram no locar até 15 dias, recebe menos 5 níveis de dificuldade para Usar Sentidos aplicado a faro e torna rolamento impossíveis em muito difíceis. Poderá perceber pelo cheiro que alguém se aproxima usando a rolagem de Usar Sentidos enquanto a magia estiver ativa ou até mesmo que vai chover em breve. O efeito dura 3 horas e a distância máxima é de 5 km.",
					nivel: 9,
				},
			],
			descricao: `Com esse feitiço o evocador pode mudar seu poder olfativo chegando próximo ou até mesmo superando os lobos e os cães. A diferença entre o olfato humano para o canino, é que um humano consegue saber que um javali está sendo assado, já o canino consegue dizer quais os temperos foram usados com exatidão e até mesmo saber se exagerou no sal, podendo assim dividir os cheiros para ser assertivo no que busca. Caso tenha alguma amostra do que está procurando (como por exemplo uma peça de roupa de uma pessoa) poderá até mesmo isolar esse odor dos demais, tornando assim extremamente efetivo, dependendo do nível da magia.

Caso o que procura tenha vários cheiros, isso tornara mais difícil farejar em efeitos mais baixos, mas em níveis mais altos ajuda a ser mais seletivo. Em um certo nível o evocador pode até dizer se alguém esteve ali quantos dias e pode seguir seu rasto se ainda estiver dentro do tempo estipulado na magia. O evocador precisa conhecer o odor do que vai procurar ou estar de alguma forma no ambiente em que está iniciando sua busca. Se no local ele perceber um odor desconhecido ele pode farejar para saber de quem ou do que se trata.

Essa magia tem dependência de habitat e só pode ser utilizado em ambientes naturais. Nos níveis 7 e 9 onde pode-se sentir o odor de alguém que se aproxime, a criatura deve ter o "vento do ponto da criatura em direção ao evocador" assim ele pode sentir o odor até 100 metros de distância, caso contrário ele o percebera quando a criatura estiver a 20 metros do evocador usando um "usar sentido" fácil.

Exemplos de características de odor pode ser madeira específica, penas de aves especificas, pelos e couro de animais específicos, minérios, plantas especificas e em níveis maiores podendo ter um conjunto de odores, se existir odor, ele pode ser farejado. Para melhor entendimento, abaixo temos alguns exemplos:

Um rastreador evoca o efeito 1 e por 15 minutos pode farejar uma característica só até 1 km de distância, como por exemplo um pelo de urso, uma planta específica etc. assim que a duração da magia acabar ele deve refazer a magia ou não conseguira continuar a farejá-lo.

Um rastreador evoca o efeito 9 e por 3 horas ele pode farejar coisas mais especificas até 5 km de distância, um humano, com armadura de metal, uma capa de couro, carrega ração de viagem, fuma tabaco, está ferido, usando um emplastro de ervas etc. Quanto mais dados tiver da criatura mais específica é sua busca!`,
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
			id: MagiaEnum.fascinio,
			nome: "Fascínio",
			niveis: [
				{
					id: "0",
					descricao: "Afeta até 3 pessoas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Afeta até 10 pessoas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Afeta até 25 pessoas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Afeta até 60 pessoas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Afeta até 100 pessoas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Afeta até 200 pessoas.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia, o evocador consegue atrair a atenção das pessoas, de forma que as mesmas passam a esquecer tudo o que acontece à sua volta, devotando sua atenção unicamente a ele. Ele então começará a tocar, a cantar, a contar uma história, entre outras possibilidades, e, após 10 rodadas, todas as pessoas afetadas pela magia, cujo número varia de acordo com o nível do efeito, deverão fazer um teste de Resistência à Magia. Caso não passe, uma pessoa ficará com toda sua atenção voltada para o evocador. Caso a pessoa passe no teste, ela deverá fazer uma nova resistência à magia por rodada, até que falhe ou ela saia do alcance da magia. Caso alguma pessoa entre no alcance após ter começado a apresentação, ela deverá fazer um teste de resistência à magia após 10 rodadas de apreciação da música e, conforme o outro caso, fazer uma resistência por rodada caso tenha sucesso no teste inicial.

A magia acaba quando o evocador pára de tocar o seu instrumento, cantar ou discursar ou até mesmo de fazer malabarismo; ou seja, quando for de seu interesse. Entretanto, o místico não pode fazer nenhuma outra ação a não ser fazer sua apresentação enquanto produz o encanto. Quando parar de tocar, as pessoas despertarão do encanto, tendo a sensação de terem ido a uma ótima apresentação. As pessoas não têm nenhuma noção de que foram enfeitiçadas. Caso alguém ataque qualquer uma das pessoas sob o efeito, a magia se quebrará sob todas as pessoas. Neste caso, as pessoas percebem que foram enfeitiçadas. A pessoa atacada, entretanto, sofrerá uma surpresa parcial.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 50,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 10,
			},
		},
		{
			id: MagiaEnum.feixesIncandescentes,
			nome: "Feixes Incandescentes",
			niveis: [
				{
					id: "0",
					descricao: "1 feixe de dano 16.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "2 feixes de dano 20.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "2 feixes de dano 28.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "2 feixes de dano 32.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "3 feixes de dano 40.",
					nivel: 9,
				},
			],
			descricao: `Restrição de Uso: Ar Livre

Está magia do Colégio Naturalista canaliza certa quantidade de energia solar, moldado-as em feixes que caem do céu em direção aos alvos escolhidos pelo evocador. Só é possível atacar um alvo por feixe. O som do fogo rasgando o ar e de seu potente impacto na terra fazem desta magia um evento magnífico.

Este feitiço só pode ser evocado em ambiente aberto, durante o dia e o céu deve estar limpo, sem nuvens. O numero de feixes e o dano de cada, variam com a dificuldade do efeito.

Embora esta magia seja de origem energética, sua matéria prima é o fogo, se submetendo portanto, á magias como Piroproteção e Armadura Elemental.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 50,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.fitogenese,
			nome: "Fitogênese",
			niveis: [
				{
					id: "0",
					descricao:
						"cria uma área de 7 m de raio de clareira e uma árvore de porte menor. O tempo de duração dos vegetais é de 2 dias.",
					nivel: 2,
				},
				{
					id: "1",
					descricao:
						"Cria uma área de 20m de raio com uma razoável diversidade de plantas e flores com árvores de médio porte ou menores. O tempo de duração dos vegetais é de 7 dias.",
					nivel: 6,
				},
				{
					id: "2",
					descricao:
						"Cria uma área de 30 de raio com uma grande diversidade de plantas, flores e a presença de raízes comestíveis. O tempo de duração dos vegetais é de 15 dias.",
					nivel: 8,
				},
				{
					id: "3",
					descricao:
						"Cria uma área de 50 de raio com vasta diversidade de plantas, flores, raízes comestíveis e árvores frutíferas de porte maior, ou menores. O tempo de duração dos vegetais é de um mês.",
					nivel: 9,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas a área pode se estender até 100 m de raio. O tempo de duração dos vegetais é permanente, e a evocação é um ritual que custa 5 moedas de ouro para cada 10m de raio.",
					nivel: 10,
				},
			],
			descricao: `Restrição de Uso: Ambiente Natural

Com esta magia o mago induz a criação de vegetais em uma área. Os tipos de vegetais criados, a área da vegetação e o tempo em que os vegetais perduram no local, variam com a dificuldade do efeito.

O aparecimento dos vegetais é imediato, surgindo do solo imediatamente após o termino da evocação. Os magos naturalistas costumam evocar esta magia para obter os vegetais necessários a evocação de outros feitiços.

Esta magia só pode ser efetuada em contato direto como o solo, caso contrário, a magia falhará.

Com exceção do Nível de dificuldade 10, evocação dos efeitos desta magia é de 10 rodadas.

Para identificar o tamanho exato dos vegetais citados, verifique a descrição da magia (Animação Vegetal).

Fitogênese1: Cria uma área de 2 m de raio de vegetação rasteira sem presença de arvores. O tempo de duração dos vegetais é de 12 horas.

Filogênese 4: Cria uma área de 10 m de raio com uma pequena diversidade de plantas e árvores de Pequeno porte ou menores. O tempo de duração dos vegetais é de 4 dias.`,
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
		{
			id: MagiaEnum.fogoDivino,
			nome: "Fogo Divino",
			niveis: [
				{
					id: "0",
					descricao: "Causa 12 pontos de dano em uma área de 1 metro de raio.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa 16 pontos de dano em uma área de 2 metros de raio.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Causa 24 pontos de dano em uma área de 2 metros de raio.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Causa 28 pontos de dano em uma área de 4 metros de raio.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Causa 32 pontos de dano em uma área de 6 metros de raio.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Causa 40 pontos de dano em uma área de 6 metros de raio.",
					nivel: 10,
				},
			],
			descricao: `Restrição de Uso: Ar Livre

Conhecido como o milagre mais poderoso de Palier, o fogo divino é sempre relembrado por suas características peculiares. Por ser divino, nem mesmo os demônios e os elementais de fogo resistem ao poder de Palier, podendo ser afetados normalmente por este fogo. Entretanto, para se utilizar este encanto, é necessário que o evocador esteja ao ar livre e que o tempo esteja sem nuvens, chovendo ou mesmo nublado (exatamente o oposto da magia Relâmpago). Caso as condições estejam satisfeitas, o sacerdote poderá clamar por seu deus e uma grande coluna de fogo rasgando o céu virá como resposta ao seu apelo.

Os sacerdotes que dominam este milagre não devem usá-lo levianamente, apenas em caso de extrema necessidade. Caso seja evocado em uma situação que não seja de extrema necessidade ou se for evocado por um motivo efêmero e/ou mundano, a magia falhará e o sacerdote será punido pelo seu deus (o Mestre decide qual será a punição).`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 100,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.forcaMutua,
			nome: "Força Mútua",
			niveis: [
				{
					id: "0",
					descricao:
						"Concede +2 na coluna de ataque do evocador e de até 1 de seus companheiros animais. Os companheiros animais ganham +5 na EH. A penalidade pela quebra do laço de coragem é de 1 dia;",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Concede +4 na coluna de ataque do evocador e de até 2 de seus companheiros animais. Os companheiros animais ganham +10 na EH. A penalidade pela quebra do laço de coragem é de 3 dias;",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Concede +6 na coluna de ataque do evocador e de até 3 de seus companheiros animais. Os companheiros animais ganham +15 na EH. A penalidade pela quebra do laço de coragem é de 7 dias;",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Concede +8 na coluna de ataque do evocador e de até 4 de seus companheiros animais. Os companheiros animais ganham +20 na EH. A penalidade pela quebra do laço de coragem é de 15 dias;",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Concede +10 na coluna de ataque do evocador e de todos seus companheiros animais. Os companheiros animais ganham +25 na EH. A penalidade pela quebra do laço de coragem é de 1 mês.",
					nivel: 9,
				},
			],
			descricao: `Com esta magia, o evocador cria um laço de coragem e determinação entre si e seus companheiros animais, fazendo com que todos aumentem suas capacidades para o combate desde que o evocador e seus companheiros estejam engajados no combate. Esta magia não funcionará no caso de não haver nenhum companheiro animal. Caso todos os seus companheiros saiam do combate a magia se encerrará. Devido a ligação da magia com a natureza, caso o evocador esteja mais de uma semana fora de ambientes naturais, esta magia não poderá mais ser evocada. Será necessário passar um dia em um ambiente natural para que esta magia possa ser evocada novamente.

O número de colunas de ataque atribuído ao evocador e aos animais variam de acordo com a dificuldade do efeito. Esta magia só afeta animais que estejam sob efeito das magias: Elo Animal ou Convocação Animal. O Rastreador deve ter cuidado com o uso desta magia, pois caso algum de seus companheiros animais seja morto em decorrência do combate, a quebra do laço de coragem causa um efeito negativo no Rastreador, assim o bônus nas colunas se torna penalidade, que perdura por um tempo muito maior que a própria duração da magia.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
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
			id: MagiaEnum.forcaSagrada,
			nome: "Força Sagrada",
			niveis: [
				{
					id: "0",
					descricao: "Concede + 1 de ajuste de força ao sacerdote.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Concede + 2 de ajuste de força ao sacerdote.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Concede + 3 de ajuste de força ao sacerdote.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Concede + 4 de ajuste de força ao sacerdote.",
					nivel: 7,
				},
				{
					id: "4",
					descricao: "Concede + 5 de ajuste de força ao sacerdote.",
					nivel: 9,
				},
			],
			descricao:
				"Com este encanto, o sacerdote de Blator clama a seu deus, e recebe em resposta uma força divina para ajuda-lo intensamente na batalha. Na prática o sacerdote receberá um ajuste de força extra que deverá ser somado ao dano. Assim se o sacerdote tinha força 2, e usou o nível 7 que concede + 4 de ajuste, o sacerdote passará a ter força 6. Essa magia não só se aplica ao dano mas também ajuda o sacerdote a realizar outras tarefas que exijam uma força absurda. Ao esgotar a duração da magia, a força do sacerdote volta a seu estado normal.",
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
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
			id: MagiaEnum.forcarDisputa,
			nome: "Forçar Disputa",
			niveis: [
				{
					id: "0",
					descricao:
						"O evocador recebe +2 colunas de ataque em qualquer ação contra o oponente.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O evocador recebe +3 colunas de ataque em qualquer ação contra o oponente e temporariamente mais 5 de EH (podendo ir além do máximo).",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O evocador recebe +4 colunas de ataque em qualquer ação contra o oponente e temporariamente mais 10 de EH (podendo ir além do máximo).",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas quando sua EH acabar, ela automaticamente se cura para 20 pontos.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas o primeiro crítico causado pelo oponente é cancelado e vira um ataque normal de 100% na EF.",
					nivel: 9,
				},
			],
			descricao: `Esta magia é utilizada de forma estratégica para atrair a atenção um determinado oponente e forçá-lo a combater com o evocador. Para que a magia funcione é necessário que o jogador interprete o que deve ser dito com palavras e/ou gestos e faça algo que acerte o ego ou instinto adversário. O oponente tem direito a um teste de RM, e caso tenha sucesso não será forçado a lutar contra o evocador.

Caso falhe na RM, o oponente será forçado a lutar contra o evocador, mas não é obrigado a fazê-lo de perto, podendo usar ataques a distância. Quando o oponente perder toda a EH ou o evocador fizer o seu primeiro acerto na EF este deve oferecer a rendição. Caso o oponente se recuse o combate prossegue normalmente. Caso aceite a rendição, o evocador não poderá mais atacar o oponente sob pena de receber uma maldição divina (sem teste de RM). Se o oponente rendido for desleal e voltar a combater ou se resolver fugir é este que receberá uma maldição divina (sem teste de RM). Caso o oponente passe no teste de RM não será forçado a combater, podendo inclusive fugir sem nenhuma penalidade.

Independente do oponente ter passado ou não no teste de RM o evocador recebe alguns bônus conforme o efeito. Note que os bônus de colunas e críticos só funcionam contra o oponente desafiado, mas a EH recebida funciona contra todos. Se o oponente estiver numa situação que não possa atacá-lo diretamente (protegido por algo ou alguém) o evocador poderá entrar em combate com outros desde que seja para poder chegar ao seu oponente. Caso o próprio evocador é que decida sair da disputa (mesmo que seja para ajudar um companheiro) ele receberá uma maldição divina que não tem direito a RM.

Esta magia só pode ser usada uma vez por cena de combate e ela só funciona com criaturas inteligentes, não funcionando contra criaturas irracionais. O Mestre irá avaliar se a interpretação foi satisfatória, caso ache que não foi a contento a magia falha automaticamente. Caso o oponente já estiver predisposto a atacar o evocador, isto implica que ele automaticamente aceita o desafio e é o equivalente a ter falhado no testes de RM (que não precisa ser feito).

OBS: a maldição será escolhida livremente pelo Mestre que avaliará qual o grau de punição que deve ser dado.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.COMBATE,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: MagiaEnum.formaDePedra,
			nome: "Forma de Pedra",
			niveis: [
				{
					id: "0",
					descricao: "Duração de dois dias.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Duração de 1 semana.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Duração de 1 mês.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Duração de 1 ano.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Duração de 13 anos.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Duração de 100 anos.",
					nivel: 10,
				},
			],
			descricao: `Há séculos há uma lenda entre os anões que diz que os sacerdotes de Parom jamais morrem. A lenda diz que quando é chegada a hora do sacerdote de Parom deixar o mundo, o sacerdote assume uma forma de pedra, transformando-se em uma estátua, para que sua presença jamais possa ser extinta do mundo. Por isso o sacerdote não morre, apenas entra “em forma de pedra”.

Com o milagre forma de pedra o sacerdote pode se transformar ou transformar alguém em uma estátua. Esse milagre não pode ser usado contra a vontade de uma pessoa, sendo necessário que a pessoa declare abertamente que deseja ser transformado em estado de pedra.

No estado de pedra, a pessoa não envelhece, não pode sofrer qualquer doença nem ser alvo de qualquer magia direta (as que necessitam de resistência). Caso a pessoa entre em estado de pedra estando amaldiçoada ou doente, sua maldição e doença é suspensa até que a vítima saia do seu estado de pedra. A pessoa, entretanto, perde completamente a consciência, como se estivesse em um coma profundo. O tempo que esse estado perdura depende do nível da magia. A pedra é de uma firmeza muito grande, sendo impossível destruí-la por meios normais e imune à magias como desintegração. Com a fim da magia, seja pelo esgotamento da duração ou via quebra de encantos, a pessoa sai da forma de pedra no mesmo estado em que ela estava antes de entrar.

Esse milagre é muito utilizado por anões velhos que desejam ver seu último desejo realizado e por conta de sua idade jamais estariam vivos para isso.

Uma restrição, contudo, é que uma pessoa não pode entrar em estado de pedra pela segunda vez a não ser que ela fique em seu estado normal no mínimo o mesmo período que ficou no estado de pedra pela primeira vez.

Os materiais necessários a evocação deste milagre custam 1 moeda de ouro vezes o nível utilizado.`,
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
			id: MagiaEnum.formaFluida,
			nome: "Forma Fluida",
			niveis: [],
			descricao: `Com esse milagre, o sacerdote de Ganis pede à Deusa que transforme momentaneamente em água seu corpo e suas vestes, incluindo armadura e elmo. Pode ser usado para se infiltrar através de rachaduras, fendas ou qualquer orifício que o Mestre julgar possível; escapar de prisões ou amarras; ou até mesmo camuflagem. Também torna o místico imune a ataques físicos (todos os golpes atravessam o corpo sem causar dano}, mas ataques elétricos (Relâmpago e Raio Elétrico, por exemplo) causam um nível a mais de dano. Ataques mágicos e que afetam a mente funcionam normalmente contra o evocador. Armas mágicas funcionam parcialmente, causando metade do dano, arredondando para cima.

A magia cria uma tensão superficial possibilitando manter o formato corpóreo ou a que o volume de água permitir (uma poça d'água, por exemplo). Sua cor será semelhante ao reflexo do místico na água. Por ser uma água divina, possuindo aura específica, a forma fluida não é afetada por magias de controle de água, como Hidromanipulação, por exemplo.

Durante o efeito, o evocador mantém os sentidos normais, fica impossibilitado de fazer ataques físicos e realizar magias, não precisa respirar e não consegue segurar objetos. A VB permanece a mesma, respeitando as penalidades para as adversidades do terreno. Armas e escudos, caso estejam empunhadas no momento da ativação da magia, cairão no chão; mas se a arma estiver guardada e o escudo nas costas, transformar-se-á em água também (não servirão para ataques ou defesa). Os danos sofridos na forma fluida serão contabilizados normalmente da EF e EH do sacerdote.

É possível usar essa magia para se camuflar em um rio, lago, etc., mas um teste de Usar os Sentidos (Muito difícil) identificará uma porção de água diferente do normal (a critério do Mestre, um teste de Misticismo Difícil pode ser usado para relacionar com a magia).

Se por algum motivo o corpo fluido estiver dividido no momento em que acabar a duração da magia, irá reaparecer onde concentrar a maior parte, mas sofrerá dano na EF na seguinte proporção:

2 pontos se apenas um quinto ou menos do corpo não conseguir se reagrupar;

4 pontos para um quarto;

6 pontos para um terço;

8 pontos para metade (o jogador escolhe em qual metade o corpo reaparecerá).

Mas caso o corpo reapareça em um local onde não há espaço para ser formado (por exemplo, numa fresta na montanha}, será morte instantânea. O Mestre julgará o quanto do corpo foi perdido e/ou se é possível o surgimento.

E por fim, a partir do sétimo nível será possível criar um prolongamento de água do braço, formando um chicote, e usar para atacar (efeito chicote).

Corpo Fluido 1: Transforma o corpo em água, mas não consegue falar. Duração de 5 rodadas.

Corpo Fluido 3: Idem ao anterior, mas consegue falar.

Corpo Fluido 5: Idem ao anterior, mas a duração é de 10 rodadas.

Corpo Fluido 7: Idem ao anterior, mas permite usar um braço como se fosse um chicote para atacar na coluna 10 e causando 23/18/13/8 de dano. A duração é de 15 rodadas e o alcance do chicote é de 2 metros.

Corpo Fluido 9: Idem ao anterior, mas causa 27/21/15/9 de dano, ataca na coluna 12 e a duração é de 20 rodadas.`,
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
	];
}
