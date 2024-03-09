import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: "196",
			nome: "Quebra de Encantos",
			niveis: [],
			descricao: `Quebra de encantos serve para desfazer outros feitiços que afetem o evocador ou outros ao seu redor. É claro que o mago deve ser capaz de falar e se mover para evocá-la, ou seja, alguém que tenha sido transformado em orco pode muito bem evocar a quebra de encantos sobre si, mas se esse mesmo evocador estiver sob o efeito de correntes, por exemplo, ele não pode quebrar o encanto já que está imóvel.

O tempo de evocação da magia quebra de encantos é exatamente igual à evocação do encanto utilizado. Assim, para se quebrar a magia Medo, que é instantânea, a evocação da quebra de encantos será instantânea, mas para quebrar Maldições, que se evoca por 3 rodadas, serão necessárias 3 rodadas de evocação e assim por diante.

O nível da magia quebra de encantos determina o nível da magia que ela pode quebrar. Para se quebrar Medo 4 é necessário ter no mínimo Quebra de Encantos 4. Para se quebrar Manipulação de Luz 10 é necessário no mínimo Quebra de Encantos 10.

Para quebrar uma magia, o místico evoca a quebra de encantos, gasta o Karma por essa magia. Se a magia não for uma das que ele pode evocar, é necessário ter que cobrir o Karma utilizado pelo outro místico no encanto. Assim, se algum oponente encantou alguém com Maldiçoes 6 e o evocador não conhece a magia Maldições (não tenha nenhum nível nela) ele precisará usar Quebra de Encantos 6, gastando 6 de Karma, mais 6 de karma da magia do oponente totalizando 12 pontos.

Quando são gastos os pontos de Karma necessários e o tempo de evocação é cumprido, a magia é quebrada, não sendo necessário se fazer nenhum tipo de teste de resistência à magia.

Entretanto, caso o místico queira quebrar um encanto seu, ele não gasta nenhum ponto de karma, desde que tenha a magia quebra de encantos no mesmo nível da magia a ser desfeita.

Exemplo: Um elfo mago que lançou Pesadelo 5 em um anão insolente e queira desfazer o encanto, não precisa gastar qualquer ponto de karma, desde que tenha ao menos quebra de encantos 5 em sua lista de magia.

Note que quebrar magias de duração Permanente, lançadas por outros místicos é uma tarefa muito mais difícil e exige conhecimento total do evocador na magia a ser quebrada. Dessa forma, será necessário que o evocador saiba evocar, em mesmo nível, a magia a ser quebrada. Ou seja, para quebrar a magia Maldições 10 (que é permanente) lançada por um demônio em um companheiro, será necessário que o evocador tenha no mínimo nível 10 na magia Maldições, caso contrário, a magia não poderá ser quebrada.

Uma situação possível é quando o evocador deseja quebrar feitiços provenientes de item mágico. Isto é possível, contudo, o item mágico não perde permanentemente o poder desfeito pelo evocador em um determinado momento.

Exemplo: O mago irritado com o guerreiro que possui uma armadura com a magia Armadura Elemental, portanto é resistente ao seu poderoso raio elétrico, pode querer quebrar essa proteção para poder combater o guerreiro. Se o místico quebrar o feitiço, ainda assim o guerreiro poderá utilizar o poder de novo caso o item mágico faça mais de uma vez por dia o efeito. O místico, por conseguinte, pode também querer quebrar novamente o encanto. As que propriedades mágicas como bônus de ataque, de absorção, de defesa e focus não podem ser quebrados.

Observação: Não é possível quebrar magias com Duração instantânea como bolas de fogo, raio elétrico e etc.

Observação 2: Algumas magias têm certas restrições a serem cumpridas para poderem ser quebradas. Isto está descrito na própria magia.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.VARIAVEL,
			},
		},
	];
}
export namespace Magias {
	export const lista: Magia[] = [
		{
			id: "197",
			nome: "Raio Elétrico",
			niveis: [
				{
					id: "0",
					descricao: "Causa 16 de dano máximo e o alcance é de 5 metros.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa 20 de dano máximo e o alcance é de 15 metros.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Causa 28 de dano máximo e o alcance é de 30 metros.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Causa 32 de dano máximo e o alcance é de 50 metros.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Causa 36 de dano máximo e o alcance é de 75 metros.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Causa 40 de dano máximo e o alcance é de 100 metros.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço cria uma acumulação de energia elétrica nas mãos do evocador, que pode lançá-la contra um adversário que esteja dentro do alcance da magia.

0 raio elétrico criado é bem preciso, atingindo apenas aqueles que o evocador escolher. A partir do efeito 6, o raio pode se bifurcar, acertando até dois alvos simultaneamente. O crítico (que venha a acontecer) é resolvido na tabela de magia.`,
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
			id: "198",
			nome: "Raízes Místicas",
			niveis: [
				{
					id: "0",
					descricao: "Cria 1 Raiz com EF 10 que perdura por 5 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Cria 2 Raízes com EF 15 que perduram por 7 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Cria 2 Raízes com EF 20 que perduram por 10 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "cria 3 Raízes com EF 25 que perduram por 15 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Cria 3 Raízes com E; 30 que perduram por 30 rodadas",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Cria 4 raízes com EF 35 que perduram por 45 rodadas.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o mago Naturalista prende ou imobiliza uma criatura através de raízes que surgem do solo em baixo da vítima se enroscando em seus membros. O número de ataques será igual à quantidade de raízes descrita no efeito. Para agarrar as criaturas o mago deve efetuar o ataque na coluna igual ao nível que possuir na magia (o ataque não causa dano}, se atingir 75% ou menos, as raízes retornam ao solo imediatamente.

Para prender uma criatura basta conseguir 100% na EH do alvo. Uma vez preso pelas raízes, o alvo não poderá se locomover do local onde se encontra, mas poderá fazer qualquer outra ação normalmente. Para se libertar é preciso atacar as raízes (com um ajuste de –3 por raiz que o estiver prendendo). A defesa da raiz é L2 ,ou conseguir um teste de força médio, para cada raiz que o prender.

Para imobilizar, é preciso conseguir atingir a EF do alvo. A imobilização não permite que o alvo ataque ou use qualquer habilidade física. Para se soltar das raízes místicas, é preciso um teste de força difícil para cada raiz que o imobilizar.

Se o mago falhar no primeiro ataque, ele deverá fazer os ataques em si mesmo se submetendo aos efeitos da magia (se for o caso). Se a falha acontecer no segundo ataque ou após, será considerado apenas um erro simples.

O numero de raízes, o tempo de permanência, e a Energia Física das raízes variam com a dificuldade do efeito. Seres muito grandes como dragões não são imobilizados pelas raízes sendo no máximo presos a elas.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 15,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "199",
			nome: "Rastreamento",
			niveis: [
				{
					id: "0",
					descricao:
						"Direciona intuitivamente o rastreador para uma trilha que atenda a sua busca, por isto o Rastreador deve anunciar ao mestre o que está tentando trilhar. Se a busca for genérica demais a trilha encontrada pode não ser a desejada. A distância maxima da trilha deve ser no máximo de 1 km e o tempo que os seres que deixaram a trilha é no máximo de 4 horas. Um rolamento de Seguir Trilhas (muito difícil) revelará perigos, tais como: armadilhas, buracos, pedras soltas ou outras coisas (inanimadas) que possam representar perigo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas é possível saber o número aproximado de seres que passaram pela trilha em até 1 dia. O teste para pressentir perigo é Difícil.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas é possível saber o número exato e o tipo aproximado de seres em até 2 dias.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas é possível saber o tipo exatos das criaturas que passaram pela trilha em até 3 dias.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas agora é possível ver a trilha energética deixada pela aura dos seres, esta trilha pode ser seguida em qualquer lugar em até 7 dias. O teste para pressentir perigo é Rotineiro e o bônus em Ações Furtivas é de dois níveis.",
					nivel: 9,
				},
			],
			descricao: `Este encanto permite ao evocador obter informações referentes a uma trilha. A informação é obtida sem a necessidade de rolamento da habilidade Seguir Trilhas, mas o uso conjunto com esta habilidade traz alguns bônus conforme vistos nos níveis da magia. É importante frisar que nada impede de utilizar a habilidade Seguir Trilhas para usar as suas capacidades não descritas aqui nesta magia, mas neste caso deve ser feito o teste normal da habilidade.

Exemplo: Dois seres humanoides de tamanho normal, três humanoides grandes, um quadrúpede grande com cascos e um pequeno com garras passaram por aqui há cerca de 2 dias. O teste para pressentir perigo é Médio, e permite pressentir qualquer tipo de perigo.

Exemplo: Um orco, um humano, dois ogros, um trol, um cavalo e um lobo passaram por aqui há cerca de 3 dias. O teste para pressentir perigo é Fácil, permite pressentir qualquer tipo de perigo. Caso passe no teste e pressinta que há inimigos a espreita concede também um bônus de 1 nível na habilidade Ações Furtivas

OBS: Pressentir perigo quer dizer que o rastreador passa estar ciente dos perigos, logo não pode ser surpreendido. Os efeitos da magia perdurarão enquanto o Rastreador estiver seguindo a trilha ou até a duração se esgote. O teste de Seguir Trilhas só pode ser feito uma vez e nenhuma magia ou efeito mágico poderá dar qualquer tipo de de bônus neste teste.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 12,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: "200",
			nome: "Recuperação Física",
			niveis: [
				{
					id: "0",
					descricao: "Curam-se doenças menores (gripes, fraquezas e etc).",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Neutralizam-se venenos não mortais (que causem sono, fraqueza, torpor e etc).",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Curam-se doenças fortes de ação prolongada.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Neutralizam-se venenos que causam dano mas não morte.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Cura qualquer doença.",
					nivel: 7,
				},
				{
					id: "5",
					descricao: "Neutraliza venenos mortais.",
					nivel: 9,
				},
			],
			descricao: `Não somente o combate é motivo de mortes. Venenos e doenças também são responsáveis pela queda dos heróis. Este encanto se desfaz esse perigo, curando doenças e neutralizando venenos.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: "201",
			nome: "Refletir",
			niveis: [
				{
					id: "0",
					descricao:
						"Reflete magias que sejam de nível máximo 2, dura 5 rodadas ou 1 uso.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Reflete magias que sejam de nível máximo 3, dura 10 rodadas ou 1 uso.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Reflete magias que sejam de nível máximo 5, dura 10 rodadas ou 1 uso.",
					nivel: 3,
				},
				{
					id: "3",
					descricao:
						"Reflete magias que sejam de nível máximo 7, dura 10 minutos ou 2 usos.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"Reflete magias que sejam de nível máximo 9, dura uma hora ou 2 usos.",
					nivel: 7,
				},
				{
					id: "5",
					descricao:
						"Reflete magias que sejam de nível máximo 10, dura meio dia ou 2 usos.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto o mago cria uma aura que é capaz de refletir encantamentos que sejam feitos diretamente contra o mago. O encantamento refletido é devolvido ao evocador original, e o efeito é resolvido normalmente. Este encantamento não funciona contra magias onde o efeito é em uma área, ou que não visam diretamente o mago. Desta forma magias como Bola de Fogo, Meteoros não são afetados pela magia Refletir. Esta magia na verdade não protege o mago, mas sim permite que ele devolva ataques iguais aos seus oponentes. Magias de toque, poderes naturais que não sejam uma magia em especifica e hálitos encantados não são afetadas por esta magia.

Após evocar este encantamento caso o mago receba um ataque de uma magia que necessite de uma Resistência a Magia, ele deve fazer o teste normalmente. Caso falhe, a magia do oponente funcionará e nada será refletido. Caso ele resista, a magia será refletida e o oponente fará sua resistência à magia para não cair no efeito da própria magia. Caso o mago sofra um ataque de uma magia que cause dano, o mago fará um teste extra de Resistência a Magia. Passando ou não no teste o ataque do oponente é resolvido normalmente, mas se conseguir passar na resistência, a magia é refletida para o oponente e este ataque devolvido deverá ser resolvido normalmente.

A magia refletida terá uma força de ataque (ou coluna de resolução) igual ao efeito usado no encantamento. A duração da magia é dada no efeito e é limitada a certo número de usos ou a uma duração (o que vier primeiro). Esta magia não requer concentração, mas o mago não pode controlar quais magias serão refletidas. Cada nível desta magia indica qual nível máximo da magia que será refletida. Caso ele receba um ataque com um efeito maior que o suportado, Refletir não surte efeito, mas também não é contado como uso.`,
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
			id: "202",
			nome: "Regeneração",
			niveis: [
				{
					id: "0",
					descricao:
						"O tempo de cura de qualquer crítico passa a ser 12 horas se ele era maior que esse valor.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Idem ao anterior, mas o tempo de cura passa a 1 hora.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Elimina cicatrizes e marcas (não mágicas) -não naturais. A magia. demora 1 dia para terminar seu efeito.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Regenera problemas menores como: um olho, uma mão, um pé, uma orelha e etc, após 1 dia de efeito. Os Deuses exigem 12 moedas de ouro em sacrifícios por esse ritual.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, mas podem ser regenerados problemas maiores como: braços, pernas, coluna quebrada e etc. Além disso, o ritual passa a exigir um sacrifício no valor de 20 moedas de ouro.",
					nivel: 10,
				},
			],
			descricao: `Através desse milagre, o Sacerdote acelera o ritmo de cura do corpo. É possível também usar essa magia para se recuperar partes cortadas, destruídas ou inutilizadas do corpo do indivíduo tocado.`,
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
			id: "203",
			nome: "Relâmpagos",
			niveis: [
				{
					id: "0",
					descricao:
						"O raio atinge 1 vítima causando um dano máximo de 16 pontos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Idem ao anterior, mas causa 20 pontos de dano.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Idem ao anterior, mas causa 28 pontos de dano.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Idem ao anterior, mas causa 32 pontos de dano.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Atinge até 2 vítimas, causando 36 pontos de dano máximo.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Atinge até 3 vítimas, causando 40 pontos de dano máximo.",
					nivel: 10,
				},
			],
			descricao: `A magia Relâmpagos atrai raios de tempestades até uma vítima indicada pelo evocador. É importante frisar que este feitiço não cria a tempestade, apenas utiliza seu poder. Sendo assim, é necessário que já existam fortes chuvas ou nuvens negras na região.

Esta magia quando evocada por Sacerdotes, exige que se tenha um bom motivo ou a magia falhará e o sacerdote será penalizado por seu deus por seu descuido com os poderes recebidos, que normalmente implicará na perda de seus poderes, ou mesmo por alguma maldição (o Mestre deverá decidir a melhor forma de punir o sacerdote). Magos ao evocarem esta magia não têm esta restrição.

Outro importante fator è que este encanto não pode ser evocado debaixo de um teto (tem que ser a céu aberto, não dentro de uma estrutura). Sendo assim, o feitiço não pode ser feito de dentro de uma torre (caso o topo da torre seja aberto, o místico pode evocar o encanto de lá).`,
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
			id: "204",
			nome: "Réplicas",
			niveis: [
				{
					id: "0",
					descricao:
						"Faz 1 réplica com EH 5, que só poderá realizar tarefas físicas. O tempo de duração é de 5 rodadas",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Faz 1 réplica com EH 12, que só poderá realizar tarefas físicas. O tempo de duração é de 10 rodadas",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Faz 2 réplicas com EH 18, que só poderão realizar tarefas físicas. O tempo de duração é de 10 rodadas",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Faz 2 réplicas com EH 24, que poderão realizar tarefas físicas e evocar magias. O tempo de duração é de 15 rodadas",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Faz 3 réplicas com EH 30, que poderão realizar tarefas físicas e evocar magias. O tempo de duração é de 20 rodadas",
					nivel: 9,
				},
			],
			descricao: `Com esta magia o mago alquímico manipula uma pequena quantidade de matéria retirada de seu próprio corpo para criar réplicas idênticas de si mesmo. O mago deverá sacrificar 2 pontos de sua EF para cada réplica que ele queira fazer. As réplicas poderão realizar qualquer tarefa física que o mago seja capaz se realizar (habilidades e Combate) e nos efeitos mais poderosos elas também serão capazes de evocar magias. O karma gasto pelas magias das réplicas será descontado diretamente do karma do Místico. Caso o tempo de duração da magia se esgote, a cópia se afaste mais de 30 metros do evocador ou a sua EF seja levada a um valor menor que 1, a cópia se transformará em uma nuvem de massa dispersa (igual à descrição da magia “Desintegração”).

O mago poderá agir da forma que quiser com a réplica, como se ela fosse uma extensão de seu próprio corpo.

A Cópia terá EF 2 (não podendo ser aumentada) e sua EH será dada pelo efeito usado. Todos os outros parâmetros serão idênticos os do mago. O número máximo de réplicas que poderão ser feitas em uma evocação, a EH de cada e o tempo de duração da magia varia com a dificuldade do efeito.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
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
			id: "205",
			nome: "Resistência",
			niveis: [
				{
					id: "0",
					descricao:
						"Aumenta em 2 pontos na RF e RM, protege contra variações de temperaturas de 0ºC à 60ºC. Além disso, dispensa os 2 próximos rolamentos para fadiga. A duração é de 6 horas. Afeta só o evocador.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Aumenta em 3 pontos, protege contra variações de temperaturas de -15ºC à 70ºC. Além disso, dispensa os 3 próximos rolamentos para fadiga. A duração é de 12 horas. Afeta só o evocador.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Aumenta em 4 pontos, protege contra variações de temperaturas de -40ºC à 80ºC. Além disso, dispensa os 3 próximos rolamentos para fadiga. A duração é de 24 horas. Afeta o evocador e mais um alvo que o evocador tocar.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Aumenta em 5 pontos, protege contra variações de temperaturas de -65ºC à 90ºC. Além disso, dispensa os 5 próximos rolamentos para fadiga. A duração é de 24 horas. Afeta o evocador e mais dois alvos que o evocador tocar.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Aumenta em 6 pontos, protege contra variações de temperaturas de -90ºC à 100ºC. Além disso, dispensa os 6 próximos rolamentos para fadiga. A duração é de 24 horas. Afeta o evocador e mais três alvos que o evocador tocar.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto, o evocador canaliza uma certa quantidade de energia para tornar a si e a quem ele tocar mais protegidos física e magicamente. Esta magia aumenta temporariamente a RF e a RM por um número de pontos indicados em seus efeitos e concede resistência à fadiga e a temperatura extremas.

Obs: Se a magia for usada novamente antes de seu efeito acabar, o antigo efeito será quebrado e o novo passa a ser o vigente.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
			},
		},
		{
			id: "206",
			nome: "Resistência Elemental",
			niveis: [
				{
					id: "0",
					descricao: "Protege o Rastreador de -5 a 55 graus.",
					nivel: 3,
				},
				{
					id: "1",
					descricao: "Protege o Rastreador de -15 a 65 graus.",
					nivel: 5,
				},
				{
					id: "2",
					descricao: "Protege o Rastreador de -35 a 85 graus.",
					nivel: 7,
				},
				{
					id: "3",
					descricao:
						"Protege o Rastreador de quaisquer extremos naturais de temperatura.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço protege o Rastreador contra extremos de frio e calor de origem natural. O feitiço também protege o Rastreador contra o excesso ou a falta de umidade do ar, tornando-o praticamente invulnerável às condições ambientais. Não é conferida proteção contra nenhum tipo de fogo ou frio mágico, qualquer que seja a sua origem. O grau de proteção conferido ao Rastreador depende do efeito usado.

Cada um dos efeitos deste feitiço tem uma faixa de operação. Caso a temperatura ambiente esteja dentro desta faixa, o Rastreador estará completamente protegido de seus efeitos adversos. Caso a temperatura esteja fora dos limites do efeito usado, o feitiço protegerá o Rastreador por 5 rodadas e então entrará em colapso.

O Rastreador que tem este feitiço, sempre sabe em que efeito se enquadra a temperatura ambiente (ou seja, ele sabe qual o efeito de menor dificuldade o protegerá da temperatura ambiente).

Resistência Elemental. 1: Protege o Rastreador de 5 a 45 graus.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.DIA,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "207",
			nome: "Ressurreição",
			niveis: [
				{
					id: "0",
					descricao:
						"O indivíduo morto consegue balbuciar as últimas palavras - uma ou duas frases. O Sacerdote não tem controle sobre o que vai ser falado. A magia deve ser aplicada até uma hora depois da morte do indivíduo ou ela falhará. Só funciona uma vez por morto. A evocação é de 3 rodadas e a duração é de 2 rodadas (o tempo para as frases).",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Mantém a alma no corpo por mais 24 horas e impede a decomposição, ganhando assim mais tempo. Só pode ser usada uma vez em cada morto e a aplicação deve ser muito rápida: 5 rodadas após a morte, no máximo. A evocação é instantânea.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Permite o retomo à vida àqueles que tenham morrido de forma violenta (dano na EF). Certos críticos, porém, impedem este retomo: decapitação, afundamento toráxico que destrói os pulmões e etc. Estes correspondem à faixa cinza do crítico. A criatura que retoma à vida fica com -15 na EF, porém já estabilizada. A magia deve ser aplicada rapidamente: até 5 rodadas após a morte e o recipiente do feitiço deve ter morrido até com -16 na EF. A duração é instantânea e a evocação é de uma rodada.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem à anterior, mas o recipiente da magia pode ter morrido com até -17 na EF.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Idem à anterior, mas a morte pode ter sido por até -20.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Idem à anterior, mas a morte pode ter sido por até -25.",
					nivel: 10,
				},
			],
			descricao: `Com este milagre, o Sacerdote consegue manter a alma de um morto no corpo e trazê-lo de volta à vida, porém existem muitos limites para este encanto. Criaturas cujas mortes tenham sido demasiadamente violentas (dano muito grande na EF) dificilmente são trazidas de volta. O tempo de morte também influencia no poder necessário à ressurreição.

Este retorno ao mundo dos vivos é raramente permitido aos mortais. Esta outra chance quase nunca é dada mais de uma vez, a não ser aos seguidores fiéis do Deus Cruine.`,
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
			id: "208",
			nome: "Restauração",
			niveis: [
				{
					id: "0",
					descricao:
						"restaura objetos com até 5 anos de idade, cujas dimensões não ultrapassem 1m x 1m x 1m. Restaura até 10 pontos de armadura leve, escudo pequeno ou elmo aberto. Restaura armas de categoria Leve. A evocação é de uma rodada.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"restaura objetos com até 25 anos de idade, cujas dimensões não ultrapassem 3m x 3m x 3m. Restaura 20 pontos de armadura média, escudo grande ou pequeno, ou elmo aberto. Restaura armas de categoria Média. A evocação é de uma rodada.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"restaura objetos com até 50 anos de idade, cujas dimensões não ultrapassem 5m x 5m x 5m. Restaura 30 pontos de armadura pesada, qualquer escudo, ou qualquer elmo. Restaura armas de categoria Pesada. A evocação é de uma rodada.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"restaura permanentemente objetos com até 75 anos de idade, cujas dimensões não ultrapassem 10m x 10m x 10m. Restaura permanentemente armas das categorias Leve e Média, bem como equipamentos de proteção descritos nos níveis 1 e 3. O custo do ritual é um terço do valor da arma ou do equipamento de proteção, e 3 moedas de ouro para construções. A evocação é ritual.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"restaura permanentemente objetos com até 100 anos de idade, cujas dimensões não ultrapassem 15m x 15m x 15m. Restaura permanentemente qualquer arma, bem como equipamento de proteção descrito no nível 5. O custo do ritual é metade do valor da arma ou do equipamento de proteção, e 6 moedas de ouro para construções. A evocação é ritual.",
					nivel: 9,
				},
			],
			descricao: `Com esta magia pode-se restaurar objetos que estejam quebrados ou até mesmo destruídos, desde que alguma parte esteja intacta. Pode-se restaurar qualquer objeto ao seu estado original. Quando o objeto for uma construção inicialmente, apenas construções feitas por raças civilizadas podem ser restauradas. A partir do momento que o evocador conhece a construção de outra raça, ele também poderá restaurar. Se caso tenha apenas observado, será necessário passar em um teste de Intelecto (médio) para compreender a construção e poder restaurar.

Entende-se que se classifica por objeto qualquer coisa inanimada criada por uma criatura inteligente, tais como: artefatos, pergaminhos, casas, armas, brasões, mapas, símbolos, ferramentas, armaduras, desenhos, etc. Enfim, há uma gama imensa de possibilidades. Caso haja dúvida em o que pode se enquadrar, a palavra do Mestre é a decisão final.

A magia só pode ser usada uma vez por objeto danificado. Após o efeito, o objeto da magia retorna ao estado em que se encontrava (exceto os níveis 7 e 9, onde os efeitos são permanentes).

Caso o objeto seja restaurado pelos meios convencionais, poderá ser usado novamente a magia, respeitando o ciclo acima. Caso não seja restaurado pelos meios convencionais, o karma será gasto, porém não surtirá efeito.

Cada efeito restaura até uma certa idade, além desta idade não são afetados. Algo totalmente danificado não pode ser restaurado, é necessário que uma parte esteja intacta, mesmo que mínima.

A restauração dos Pontos de Absorção dos equipamentos de proteção deve ser direcionada a até dois itens (toque}, sendo os pontos divididos entre eles, não podendo ultrapassar o valor original. Valores excedentes serão perdidos.

Até o nível 5, o efeito é revertido após 20 rodadas (inclusive equipamento de proteção e armas). O nível 7 e 9 têm efeitos permanentes e é preciso um ritual.

A magia funciona em itens mágicos, porém só restaurará o encanto do objeto se for do mesmo nível (ou inferior) que o efeito usado para restaurar. Caso não seja, o objeto será restaurado, porém o encanto não.`,
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
			id: "209",
			nome: "Retenção Mágica",
			niveis: [
				{
					id: "0",
					descricao:
						"Retêm uma magia de nível 1 que será liberada apenas 1 vez. O tempo de duração do encanto é de 1 semana.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Retêm uma magia de nível máximo 2 que será liberada apenas 1 vez. O tempo de duração do encanto é de 1 mês.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Retêm uma magia de nível máximo 4 que será liberada apenas 1 vez. O tempo de duração do encanto é de 2 meses.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Retêm uma magia de nível máximo 6 que será liberada até 2 vezes. O tempo de duração do encanto é de 6 meses.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Retêm uma magia de nível máximo 8 que será liberada até 3 vezes. O tempo de duração do encanto é de 1 ano e 1 dia.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Retêm uma magia de nível máximo 10 que será liberada até 4 vezes. O tempo de duração do encanto é de 13 anos.",
					nivel: 10,
				},
			],
			descricao: `Este feitiço retém uma magia em um objeto, que será liberada quando uma criatura com aura o tocar. Somente objetos relativamente pequenos podem ser encantados (espadas, brasões, cajados, etc.}, caso esta magia seja evocada em uma superfície imóvel (no muro de um castelo ou nas paredes de uma torre) a magia falhará (mas nada impede que a magia seja evocada na maçaneta de uma porta).

Somente magias de atuação direta (“Sono”, “Maldições”, “Doenças”, etc.) podem ser retidas nos objetos. O mago só poderá reter magias que ele conheça, ou magias que estejam assimiladas através do encanto “Assimilação”. Para reter uma magia em um objeto com um efeito assimilado, é preciso que o tempo da assimilação dure até o final da evocação da magia “Retenção Mágica”.

Alguns efeitos desta magia permitem que a magia retida continue em um objeto mesmo após uma criatura tê-lo tocado, nestes casos a magia poderá ser disparada até no máximo o número de vezes indicado no efeito. Se uma criatura resistir á magia e mantiver o objeto em contato com o seu corpo, está deverá realizar uma resistência à magia por rodada até acabar o numero de liberações da magia retida, indicado no efeito.

O custo da evocação desta magia é de 8 moedas de prata por nível de dificuldade usado. O tempo de duração do encanto, o número de vezes que a magia pode ser liberada e o nível máximo da magia retida viria com a dificuldade do efeito.`,
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
			id: "210",
			nome: "Retorno",
			niveis: [
				{
					id: "0",
					descricao: "Expulsa 1 elemental fraco.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Expulsa 2 elementais fracos (1 sem resistência a magia)",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Expulsa 1 elemental médio e 2 elementais fracos (ambos sem resistência a magia).",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Expulsa 2 elementais médios e 3 de elementais fracos (sem resistência a magia)",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Expulsa 1 elemental forte, 3 elementais médios (sem resistência a magia) e 5 de elementais Fracos (sem resistência a magia) .",
					nivel: 9,
				},
			],
			descricao: `O uso deste encanto obriga um ou mais elementais a retomar ao seu plano de origem. O número e a força dos elementais expulsos variam de acordo com o Efeito usado.

Todos os elementais que estiverem a uma distância do evocador que seja menor do que o alcance da magia poderam ser afetados. Isto inclui, obviamente, os que estejam acima ou abaixo do evocador, mesmo que haja barreiras se interpondo entre eles e o evocador.

Cada nível afeta um número máximo de elementais, caso existam na área de efeito da magia mais elementais que a quantidade máxima afetada pelo nível usado, os mais próximos do evocador são afetados primeiro.

Outra restrição deste feitiço é que cada nível pode afetar apenas elementais até certo tipo. Elementais cujo poder seja maior do que a magia pode afetar simplesmente ignoram o encanto mas, por outro lado, eles também não são contados quando se determina o total de elementais afetados.

O feitiço afeta elementais de qualquer origem, apenas de um tipo ou misturados. Assim, elementais da terra, fogo, ar e água podem ser afetados com um único uso do encanto, desde que as restrições de quantidade e poder sejam respeitadas.

Quando este feitiço é evocado alguns elementais são expulsos automaticamente, sem a necessidade de testes e outros são submetidos a um teste de resistência à magia contra o nível usado, caso sucesso seja obtido nada acontece, mas se o elemental falhar ele será expulso de volta para os planos elementais (ver descrição abaixo).`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 100,
			},
			duracao: {
				tipo: DuracaoEnum.INSTANTANEA,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: "211",
			nome: "Ritual de Sangue",
			niveis: [
				{
					id: "0",
					descricao:
						"O Sacerdote aumenta em 1 ponto um Atributo no qual o Inimigo Sacrificado tenha maior que o sacerdote, além de receber duas Capacidades da vítima para adquirir temporariamente (Habilidades, Técnicas de combate, Conhecimento). Duração de 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, porém o sacerdote aumenta 1 ponto em até dois atributos em qual a vítima de sacrifício tenha maior, além de receber 3 Capacidades da vítima para adquirir temporariamente (Habilidades, Técnicas de combate, Conhecimento). Duração de 1 semana.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, porém o sacerdote aumenta 1 ponto em até três atributos em qual a vítima de sacrifício tenha maior, além de receber 4 Capacidades da vítima para adquirir temporariamente (Habilidades, Técnicas de combate, Conhecimento). Duração de 2 semanas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, porém o sacerdote aumenta 2 pontos em um atributo em qual a vítima de sacrifício tenha maior, além de receber 5 Capacidades da vítima para adquirir temporariamente (Habilidades, Técnicas de combate, Conhecimento). Duração de 3 semanas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, porém o sacerdote aumenta 2 pontos em dois atributos em qual a vítima de sacrifício tenha maior, além de escolher 6 Capacidades da vítima para adquirir temporariamente (Habilidades, Técnicas de combate, Conhecimento). Duração de 1 mês.",
					nivel: 9,
				},
			],
			descricao: `Com este milagre o sacerdote de Crezir oferece a vida do inimigo em batalha como sacrifício à Deusa da Fúria. Com o corpo do inimigo derrotado, o sacerdote consegue retirar as essências de um inimigo morto e trazê-la para si através de um ritual. Como resultado, o sacerdote consegue ficar mais poderoso.

Para que o milagre funcione, é necessário primeiramente que o inimigo morto seja igual ou mais poderoso que o nível do milagre Ritual de Sangue que o sacerdote deseja evocar, ou seja, ele deve possuir estágio igual ou superior ao nível de Ritual de Sangue usado pelo sacerdote. Caso o estágio do inimigo seja inferior ao nível do milagre usado pelo sacerdote, o milagre não funciona. Vale destacar que o milagre não pode ser usado levianamente, ou seja, tem que ser usada em um oponente realmente merecedor.

Para utilizar o milagre é necessário que o sacerdote tenha matado o inimigo ou tenha ajudado a matá-lo. Ou seja, o sacerdote deve ter conseguido atingir, pelo menos, um (1) golpe na EF da vítima. Apesar de não ser necessário que o sacerdote tenha derrotado o inimigo em uma luta justa, é preciso que haja um combate entre o sacerdote e a vítima, ou seja, o inimigo deve ter tido alguma chance de vencer o sacerdote (mesmo que remota). Dessa forma, o milagre falhará se o inimigo tiver morrido em uma situação de completa impotência (o inimigo foi amarrado e golpeado até a morte, foi morto enquanto estava dormindo e etc.) Além disso, é preciso que a criatura morta necessariamente tenha sangue. Outro requisito é que o ritual deve ser iniciado em até 10 rodadas depois da morte do inimigo. Caso esse tempo tenha passado, o ritual não poderá ser utilizado. Após iniciada a evocação do ritual, o sacerdote não poderá ser interrompido ou a magia irá falhar.

Se essas condições descritas forem respeitadas, o sacerdote poderá evocar o ritual, que exige como sacrifício o corpo do inimigo. A duração do milagre é determinada pelo efeito usado. Só podem ser adquiridas as habilidades do inimigo derrotado caso o sacerdote não as possua, por exemplo: O sacerdote não pode ter nenhum nível comprado em Usar Sentidos para adquirir todos os níveis nesta mesma Habilidade de seu inimigo derrotado, não podendo passar de seu nível.

A mesma mecânica do exemplo acima se aplica para Técnicas de Combate, assim o Sacerdote pode adquirir temporariamente alguma Técnica de Combate desde que não tenha nenhum nível comprado nela. Podem ser adquiridas Técnicas de Combate de criaturas, como se o usuário do milagre fosse contaminado pelo espirito da criatura, a critério do Mestre.

Ao preparar o corpo e encaminhar a alma à Deusa, o sacerdote pode conseguir ver pelos olhos do inimigo morto e acessar sua memórias recentes e/ou mais importantes. Na prática, o Sacerdote compreende um conhecimento que podem ser: um segredo, qual seu mestre, localização do covil, uma missão secreta, algo valioso (não necessariamente bem material}, estes são alguns exemplos a critério do Mestre. Conhecimentos de criaturas irracionais, mesmo sendo simples, são adquiridos.

Somente conhecimentos que não envolvam aprendizagem de alguma forma é que não se esvaem junto com o término da magia. Os Atributos, Habilidades e Técnicas de Combate somem ao término da magia seja por Duração, Quebra de Encantos ou uma segunda Evocação deste milagre.

Outro efeito possível dessa magia é o ganho das forças vitais do inimigo pelo Sangue, ou seja, o usuário consegue aumentar temporariamente seus atributos INT, AUR, CAR, FOR, FIS, AGI, PER. A regra para este aumento acontecer é que o Inimigo Sacrificado tenha um valor maior que o usuário da magia no atributo escolhido, valores iguais ou menores não surtem efeitos.

Exemplo: Sacerdote Heitor tem atributos com estes valores: INT 0, AUR 3 , CAR 2 , FOR 1, FIS 1, AGI 0, PER 1. O inimigo Sacrificado tem atributos com estes valores: INT 2, AUR 0, CAR 0, FOR 2, FIS 1, AGI 1, PER 0. Neste exemplo, o Sacerdote apenas conseguiria adquirir 1 ponto a mais em INT, FOR e AGI. Dependendo do efeito da magia, escolheria um, dois ou os três atributos para aumentar.

As capacidades adquiridas pelo Sacerdote ficam a critério do Mestre, cada nível do milagre dá uma quantidade de Capacidades do inimigo morto (2, 3, 4, 5 e 6}, que dentre elas o mestre decidirá quais o sacerdote Receberá. Caso o sacerdote possua todas habilidades e técnicas de seu inimigo ou que não consiga aumentar seus atributos, o inimigo sacrificado não era tão poderoso e não foi aceito pela Deusa, mas algum conhecimento poderá ser adquirido (a critério do Mestre). De qualquer forma, o gasto de Karma ocorre normalmente.

OBS* Note que se o sacerdote já estiver sob o efeito de um ritual de sangue e evocar novamente este feitiço, o encanto mais recente prevalecerá e o antigo será perdido com todos seus efeitos.

Todos efeitos funcionam em criaturas racionais e irracionais, desde que obedeçam às condições de sacrifício.`,
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
			id: "212",
			nome: "Ruído",
			niveis: [
				{
					id: "0",
					descricao: "Cria um ruído que causa uma penalidade de –1 coluna.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria um ruído que causa uma penalidade de –2 colunas. Além disso, as vítimas ficam impossibilitadas de usar qualquer magia cuja evocação seja diferente de instantânea. O mesmo vale para as técnicas de combate.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior mas a penalidade é de –3 colunas e o ruído causa um dano máximo de 4 pontos por rodada (4/3/2/1).",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior mas a penalidade é de –4 colunas e o ruído causa um dano máximo de 8 pontos por rodada (8/6/4/2).",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior mas a penalidade é de –5 colunas e o ruído causa um dano máximo de 12 pontos por rodada (12/9/6/3).",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior mas a penalidade é de –6 colunas e o ruído causa um dano máximo de 16 pontos por rodada (16/12/8/4).",
					nivel: 10,
				},
			],
			descricao: `Com a magia Ruído, o evocador consegue produzir um ruído com tal intensidade que tira a concentração daquele que o ouve, recebendo penalidades em qualquer ação que tome. Nos níveis avançados, até mesmo algum dano é causado Todas as pessoas que estiverem na área de efeito deverão fazer um teste de Resistência Física contra o nível usado. Caso passem, receberão as penalidades tais quais estão descritas nos níveis, além dos danos por rodada a serem jogados, caso hajam. Caso não passem, além das penalidades e dos danos as vítimas ficarão a primeira rodada de efeito da magia paralisadas.

Uma importante observação é que o evocador deverá continuar produzindo o ruído para que as penalidades e os danos sejam mantidos. Quando ele parar de produzir o som, automaticamente o feitiço irá parar. O encanto também poderá ser quebrado caso o evocador receba um ataque que lhe cause 100% ou mais na EH ou dano na EF. Uma outra desvantagem é que qualquer pessoa que esteja na área será afetada, inclusive os próprios companheiros do evocador.

O evocador, no entanto, tem a capacidade de alterar o volume do som, permitindo que diminua a área de efeito caso seja de seu desejo. No entanto, o limite máximo é de 15 metros de raio. Observe que essa área ele pode alterar livremente enquanto produz o ruído.

O evocador não poderá fazer qualquer outra ação enquanto estiver usando a magia, como habilidades ou combate, podendo, no máximo, andar rapidamente. Criaturas que tenham uma audição superapurada como morcegos e corujas recebem penalidades dobradas, sendo que animais, em geral, costumam fugir assustados com o ruído. Mortos-vivos e criaturas animadas são imunes ao feitiço. O feitiço ruído pode ser anulado também através da magia Silêncio.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 15,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "213",
			nome: "Runas",
			niveis: [
				{
					id: "0",
					descricao:
						"Pode ser escrita uma Runa em um local ou objeto imóvel, que quando ativada causa 12 pontos de dano em uma esfera de 2 metros de raio, duração de 1 mês. Pode ser escrita uma Runa em um objeto móvel, se uma outra pessoa tentar pegar o objeto protegido, esta pessoa é obrigada fazer um teste RM. Se não passar no teste não conseguirá tocá-lo durante 1 dia e receberá 9 pontos de dano na EF.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Pode ser escrita uma Runa em um local ou objeto imóvel, que quando ativada causa 16 pontos de dano em uma esfera de 4 metros de raio, duração de 3 meses. Como no anterior pode por uma Runa móvel, porém o objeto causa 12 pontos de dano na EF se o alvo falhar na RM. Opcionalmente o objeto tem seu peso reduzido em 1/4 e seu tamanho em 1/2, estes efeitos alternativos duram 12 horas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Pode ser escrita uma Runa em um local ou objeto imóvel, que quando ativada causa 20 pontos de dano em uma esfera de 6 metros de raio, duração de 5 meses. Como no anterior, mas o dano é de 15 pontos na EF, e possui uma segunda opção de camuflar o objeto durante todo o dia ou durante toda a noite, +6 de bônus em Ações Furtivas para escondê-lo. Os efeitos opcionais duram 12 horas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Pode ser escrita uma Runa em um local ou objeto imóvel, que quando ativada causa 28 pontos de dano em uma esfera de 8 metros de raio, duração de 7 meses. Como no anterior, porém o dano causa 17 pontos de dano na EF, os bônus para esconder com ações furtivas passam para +10 e opcionalmente tem seu peso reduzido em 1/2 e seu tamanho em 3/4. Estes efeitos opcionais duram 24 horas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Pode ser escrita uma Runa em um local ou objeto imóvel, que quando ativada causa 32 pontos de dano em uma esfera de 10 metros de raio, duração de 1 ano e um dia.",
					nivel: 9,
				},
			],
			descricao: `A magia Runa permite ao evocador colocá-las em objetos móveis e imóveis, uma marca escrita que serve como guardiã.

Esta Runa (tipo de escrita antiga) guarda um encanto (escolhido dentre dois tipos de encantos) que se ativam conforme cada tipo de Runa. Após ativação, ela dura a quantidade de tempo descrita no efeito.

As runas podem ser escritas em objetos móveis e imóveis normalmente, o evocador ou o alvo mantém consigo o objeto marcado com uma runa. O evocador pode escrever uma Runa com no mínimo 10 cm, portanto o objeto ou local escolhido deve ter tamanho suficiente para caber esta escrita, por conta da quantidade de Karma e poder envolvido no ritual.

Cada nível da magia Runas possui dois tipo de encantos, um fixo e um móvel:

O tipo fixo da magia é um ritual que grava uma escrita em um local ou item que tem que permanecer imóvel, como uma armadilha, que ao mínimo movimento ou toque direto irá ativar seu efeito, o elemento do dano é escolhido durante o ritual entre: explosão de fogo, disparos de setas de gelo, corrente de raios ou impactos por rochas. Distância mínima para esse tipo de Runas é de 20 metros entre elas.

No tipo móvel o evocador instantaneamente grava em um objeto no qual possa carregar consigo de modo que se beneficie de seus efeitos. Este efeito não se ativa se o possuidor do objeto escrito com Runas entregar de vontade própria o objeto para outra pessoa OU encostá-lo propositalmente em outra pessoa na intenção de lhe causar dano.

Observações:

- No caso de uma runa móvel.

Apenas um objeto por pessoa poderá conter os efeitos de Runas móveis, caso utilize duas vezes essa magia para o mesmo alvo, o efeito antigo se esvai. Os efeitos da magia que reduzem tamanho e peso são opcionais, para que o evocador possa colocar em uma espada e ela não perca suas propriedades com a diminuição (vire um punhal, por exemplo}, que uma armadura e elmo caibam normalmente ou que um escudo não perca sua proteção normal.

- No caso de uma runa fixa.

Caso seja criado uma Runa fixa a menos de 20 metros da outra fixa, a magia nova sempre irá sobrepor a antiga, mesmo se o nível for menor, a antiga se esvai.

Como no anterior, porém causa 20 pontos de dano na EF e se o objeto for perdido ou roubado, o mesmo volta à mão do seu dono apenas com força do pensamento, não gasta sua ação, porém se caso o objeto já esteja em posse de outra pessoa, a RM será contra o novo possuidor do objeto, que se falhar perde a posse e o objeto volta às mãos do seu dono, estes novos efeitos duram 24 horas.`,
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
	];
}
export namespace Magias {
	export const lista: Magia[] = [
		{
			id: "214",
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
			id: "215",
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
			id: "216",
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
			id: "217",
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
			id: "218",
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
			id: "219",
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
			id: "220",
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
			id: "221",
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
			id: "222",
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
			id: "223",
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
			id: "224",
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
			id: "225",
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
			id: "226",
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
export namespace Magias {
	export const lista: Magia[] = [
		{
			id: "227",
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
			id: "228",
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
			id: "229",
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
			descricao: `Esta poderosa magia provoca tremores de terra (não funciona na água) que podem desde atrapalhar o inimigo até derruba-lo. Esta magia é perigosa podendo causar sérios danos às estruturas que estiverem dentro da sua área de alcance. O Evocador não fica imune aos efeitos da magia.`,
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
			id: "230",
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
			id: "231",
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
			id: "232",
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
			descricao: `Com esse milagre, o sacerdote de Mon tem a capacidade de alterar a maleabilidade do metal tornando-o mais flexível ou mais rígido conforme o desejo do sacerdote. Assim, o sacerdote pode inclusive manipular um metal flexível entortando-o. Assim pode-se fazer com que uma espada fique completamente torta. Entretanto, se qualquer metal tiver aura imbuída, para a magia funcionar deverá cobrir toda a área. Assim se o sacerdote quer por exemplo entortar a espada de um guerreiro, é necessário que essa magia afete não só a espada como o guerreiro como um todo. Além disso, nesse caso, é necessário que o guerreiro falhe em uma Resistência a Magia para que a espada possa ser entortada. Em contrapartida, metais sem aura, podem ser manipulados em partes, não necessariamente ele todo.`,
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
			id: "233",
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
			id: "234",
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
export namespace Magias {
	export const lista: Magia[] = [
		{
			id: "235",
			nome: "Unidade Natural",
			niveis: [
				{
					id: "0",
					descricao:
						"O sacerdote consegue se camuflar próximo a árvores, fazendo com que ele possua -1 nível de dificuldade em Ações Furtivas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O sacerdote consegue transcender a matéria e se unir a natureza. Ele pode entrar e permanecer dentro de uma árvore, por exemplo. Duração de 5 minutos. Caso a árvore seja atacada, é como se o próprio evocador estivesse sendo atacado, mas mesmo assim sua EH ainda valerá.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Idem ao anterior, mas dura 30 minutos.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O sacerdote transcendendo a matéria consegue a capacidade de se deslocar entre as árvores misticamente. Na prática, isso funciona como se fosse um transporte dimensional. O evocador poderá se transportar a até 20 metros de distância.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas o evocador pode se transportar a até 200 metros de distância.",
					nivel: 9,
				},
			],
			descricao: `Com esse milagre, o sacerdote de Vet é capaz de se unir a natureza, como se fosse um só com ela. Esse milagre, só funciona em locais aonde exista grande vegetação, como em florestas ou bosques. Observe que uma vez unido a natureza, o sacerdote deverá necessariamente perder 1 rodada para romper essa ligação e voltar ao seu estado normal. O sacerdote poderá escolher romper antes da duração da magia acabar, mas de uma ou de outra forma ele sempre gastará uma rodada para romper a ligação, o que impede de se realizar ataques de surpresas. Essas observações valem para os efeitos 1,3 e 5. Já para os efeitos 7 e 9 não é necessário o rompimento, já que a duração da magia é instantânea nesses casos, ou seja, o rompimento é automático.`,
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
export namespace Magias {
	export const lista: Magia[] = [
		{
			id: "236",
			nome: "Velocidade",
			niveis: [
				{
					id: "0",
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, com -4 colunas e reduzindo 2 níveis. Além disto tem sua VB aumentada em 3. A duração é de 3 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, reduzindo -2 colunas e reduzindo 2 níveis. Além disto tem sua VB aumentada em 5. A duração é de 5 rodadas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, reduzindo 2 níveis. Além disto tem sua VB aumentada em 8. A duração é de 8 rodadas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, com -4 colunas reduzindo 1 nível. Além disto tem sua VB aumentada em 10. A duração é de 10 rodadas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O usuário pode realizar um segundo golpe no mesmo ataque, reduzindo 1 nível. Além disto tem sua VB aumentada em 15. A duração é 15 rodadas.",
					nivel: 9,
				},
			],
			descricao: `Ao evocar essa magia, uma descarga de energia cinética cobre o evocador. Raios percorrem o seu corpo aumentando a sua velocidade de movimentação (VB) e sua velocidade dos golpes, podendo realizar um segundo ataque seguido do primeiro na mesma rodada. Esta magia pode ser evocada durante o combate sem contar como uma ação, mas deve ser declarada antes do rolamento dos dados do primeiro ataque.

O primeiro golpe é rolado normalmente, o segundo golpe realizado com a mesma arma é veloz, porém menos potente, reduzindo assim colunas e níveis do resultado obtido. Resultado mínimo sempre é Branco, mesmo que a redução seja maior ou mesmo que seja falha (neste segundo ataque}, mas caso o primeiro ataque seja uma Falha Crítica a magia é perdida e o segundo ataque não acontece.

Exemplo: O personagem ataca um oponente na coluna 10. Ao usar Velocidade 3 o segundo golpe se dá na coluna 8 (Velocidade 3 reduz duas colunas no ataque). Ao rolar o dado ele tira vermelho (75%}, mas como o efeito reduz 2 níveis, ele obtém 25% de dano no segundo ataque.

OBS: Na rodada que esta magia é evocada não é permitido que o personagem evoque ou tenha evocado outra magia. Nas rodadas subsequentes na qual a magia continua fazendo efeito esta restrição não se aplica e o personagem pode evocar outras magias normalmente.`,
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
			id: "237",
			nome: "Ventriloquismo",
			niveis: [
				{
					id: "0",
					descricao: "Permite lançar a voz a até 1 metro de distância.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Permite lançar a voz a até 3 metros de distância.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Permite lançar a voz a até 10 metros de distância.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Permite lançar a voz a até 20 metros de distância.",
					nivel: 4,
				},
				{
					id: "4",
					descricao: "Permite lançar a voz a até 30 metros de distância.",
					nivel: 6,
				},
				{
					id: "5",
					descricao: "Permite laçar a voz até 50 metros de distância.",
					nivel: 8,
				},
				{
					id: "6",
					descricao: "Permite laçar a voz até 70 metros de distância.",
					nivel: 10,
				},
			],
			descricao: `Esta magia permite que o evocador projete a sua voz, fazendo com que ela pareça estar vindo de qualquer ponto dentro do alcance. O alcance da magia é determinado pela dificuldade do efeito usado.

Enquanto a duração do feitiço continuar, o evocador poderá mover o ponto de onde a sua voz sai à vontade e instantaneamente, desde que este ponto de saída fique dentro do alcance. Esta magia pode ser evocada conjuntamente com qualquer outra magia que altere ou produza som, como por exemplo, Controle da Voz.`,
			alcance: {
				tipo: AlcanceEnum.VARIAVEL,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 15,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "238",
			nome: "Vigília",
			niveis: [
				{
					id: "0",
					descricao:
						"É possível utilizar a habilidade Usar os Sentidos na coluna 0 enquanto estiver dormindo. Qualquer situação de perigo iminente o acordará.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas será possível utilizar a habilidade Usar os Sentidos em nível normal e Sensitividade na coluna 0.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas será possível utilizar a habilidade Sensitividade em nível normal e caminhar em uma direção previamente determinada (pelos pontos cardeais) enquanto dorme e desviar de objetos que estiverem no caminho.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas será possível também falar e seguir qualquer trajeto a sua escolha (percorrer uma trilha sinuosa na floresta). Além disso, pode-se realizar pequenas tarefas que não exijam um grande esforço mental ou motor (pegar um objeto, apagar uma tocha etc.).",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas será possível usar o restante das habilidades na coluna 0 para tarefas que tenham a dificuldade menor ou igual a Rotineiro.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto, é possível adquirir a capacidade de dormir sem “desligar” totalmente a consciência, mantendo-se atento mesmo enquanto recupera as energias. Os antigos dizem que a Vigília foi desenvolvida para permitir que qualquer um possa andar sozinho pelas matas durante dias com segurança, sem ser pego desprevenido por uma situação indesejada. Quanto mais alto o nível de vigília, mais atividades poderão ser feitas enquanto estiver dormindo.

As EF e EH serão recuperadas exatamente como se tivesse dormido normalmente durante uma noite inteira (caso não seja despertado da vigília). É possível ficar consciente e interromper a Vigília, então, o encanto será quebrado e as energias recuperadas serão relacionadas de acordo com tempo em que o encanto ficou vigente. Não será possível recuperar Karma algum a menos que a vigília seja completa, neste caso serão recuperados apenas 25% do Karma total.

OBS: caso o personagem não possua as habilidade Usar os Sentidos ou Sensitividade estas serão usadas sempre na coluna -7.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 8,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
				valor: 1,
			},
		},
		{
			id: "239",
			nome: "Vigor",
			niveis: [
				{
					id: "0",
					descricao: "Soma 5 pontos à EF por 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Soma 5 pontos à EF por 1 hora.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Soma 10 pontos à EF por 10 rodadas.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Soma 10 pontos à EF por 1 hora.",
					nivel: 5,
				},
				{
					id: "4",
					descricao: "Soma 15 pontos à EF por 10 rodadas.",
					nivel: 7,
				},
				{
					id: "5",
					descricao: "Soma 15 pontos à EF por 1 hora.",
					nivel: 9,
				},
				{
					id: "6",
					descricao: "Soma 15 pontos à EF por 6 horas.",
					nivel: 10,
				},
			],
			descricao: `Esta magia causa um aumento de vigor e resistência do corpo. A energia divina aumenta as capacidades físicas a um nível tal que a EF do portador da magia tem um aumento real enquanto o milagre durar.

Repare que isto não é como uma armadura, é aumento da EF que não é absorção! Esta nova energia física será contada como máxima para curas e críticos com relação ao recipiente da magia.`,
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
			id: "240",
			nome: "Vínculo",
			niveis: [
				{
					id: "0",
					descricao: "alcance de 50m, duração de 30 minutos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "alcance de 300m, duração de 1 hora",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "alcance de 1 km, duração de 5 horas",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "alcance de 10 km, duração de 24 horas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "alcance de 50 km, duração de 5 dias",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "alcance de 100 km, duração de 10 dias.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o evocador cria um vínculo visual com um alvo, que deve ser das raças civilizadas. A partir daí, sempre que o mago se concentrar, poderá ver o que o recipiente da magia estiver vendo.

Se o recipiente estiver além do limite da magia, o efeito será rompido.

Esta magia também pode ser ligada a alguém involuntariamente (a vítima tem direito a resistir).

Resta lembrar que este poder só afeta o sentido visual. Acima do 8º nível, o mago pode comunicar-se com o recipiente, mas este não pode responder.`,
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
			id: "241",
			nome: "Vínculo Vital",
			niveis: [
				{
					id: "0",
					descricao: "É capaz de vincular a uma criatura.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem a anterior, mas agora você e suas criaturas recebem 1/5 da RM e RF de seus aliados vinculados.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem a anterior, mas agora todo dano recebido por você e suas criaturas é reduzido em 1 nível.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Idem a anterior, mas agora a soma de RM e RF é de 1/4.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem a anterior, mas agora o vínculo pode ser usado em até duas criaturas.",
					nivel: 9,
				},
			],
			descricao: `Com este poderoso encanto o místico consegue criar um vinculo vital com suas criaturas, sendo capaz de compartilhar sua energia física e mental.

Todo dano aplicado na EF e EH será dividido pelo místico e as criaturas que estiverem vinculadas a ele, caso a divisão do dano venha a ser um número quebrado o alvo do ataque ficar com a maior quantia. No entanto, caso o dano compartilhado exceda 50% da EF dos outros que não sejam o alvo do ataque o dano será aplicado até a faixa de 50% e o encanto colapsa, retornando o resto do dano ao alvo atacado. No caso de crítico, apenas o dano é compartilhado, e críticos que causam morte deixam os vinculados atordoados por uma rodada.

Ex.:

João esta vinculado ao seu lobo Spok, Spok recebe um ataque na EF de 21. João tem 18 EF e Spok 15, Spok ficaria com 11 de dano e João com 10, no entanto João só é capaz de receber 9 de dano, sendo assim o encanto quebra e Spok sofre 12 de dano ao invés de 11.

Ao ser alvo de um encanto que não deseja resistir ou que foi incapaz este compartilhará o efeito com aqueles vinculados. O efeito aplicado em seus aliados vinculados será metade do valor arredondado para cima. Caso seus aliados já estejam sobre o efeito da mesma magia nada acontece.

O custo do ritual é de 1 M.O. por nível. Os materiais também podem ser coletados normalmente pelo místico na natureza, a critério do Mestre. Este estipulará o nível de dificuldade de encontrar os materiais.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 5,
			},
			duracao: {
				tipo: DuracaoEnum.MES,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: "242",
			nome: "Visão Animal",
			niveis: [
				{
					id: "0",
					descricao: "A visão noturna permite enxergar em escuridão parcial.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas quando em luz normal permite enxergar o dobro da distância.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas visão noturna permite enxergar em escuridão total e na escuridão parcial enxerga o dobro da distância.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas quando em luz normal permite enxergar o 3 vezes mais longe.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas permite enxergar em escuridão mágica, na a escuridão parcial enxerga o 3 vezes da distância, e na escuridão total enxerga o dobro da distância.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas quando em luz normal permite enxergar o 5 vezes mais longe.",
					nivel: 10,
				},
			],
			descricao: `O evocador adquire temporariamente a capacidade de adaptar a sua visão para enxergar no escuro ou (dependendo do efeito) a enxergar mais longe. Na visão noturna, o personagem passa a ver todos os objetos em escalas de cinza. O alcance da visão noturna é igual ao que ela teria caso o local estivesse banhado pela luz do dia. Devido a sua conexão com a natureza o Rastreador quando estiver fora de ambientes naturais não conseguirá mais evocar esta magia, mas se tiver sido evocada antes em ambientes naturais, ela continuará até o limite da duração, mesmo que ele entre em ambientes não naturais.

Para efeitos de regras:

Escuridão Parcial: é aquela em que, apesar de haver luz, a quantidade existente é pequena demais para permitir uma visão nítida.

Escuridão Total: é aquela em que não existe nenhuma possibilidade de enxergar o ambiente ao seu redor.

Escuridão Mágica: é aquela em que é causada por efeitos de magia.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 12,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "243",
			nome: "Visão de Batalhas",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite que o Sacerdote veja uma batalha que tenha acontecido em no máximo 24 horas, ou concede um bônus de +1 na sua iniciativa, +2 colunas em técnicas de combate das categorias Proteção, Postura e Perícia. Apenas o sacerdote é afetado neste nível.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite que o Sacerdote veja uma batalha que tenha acontecido em no máximo uma semana, ou concede bônus de +2 na sua iniciativa, +3 em técnicas de combate das categorias Proteção, Postura e Perícia. Durante o combate o mestre dá uma pequena dica de algo que vai acontecer.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Permite que o Sacerdote veja uma batalha que tenha acontecido em no máximo um mês, ou concede ao Sacerdote e mais 1 aliado, bônus de +3 na sua iniciativa, +3 colunas em técnicas de combate das categorias Proteção, Postura e Perícia. Os afetados receberão uma dica do mestre de algo que vai acontecer de importante para o desenrolar do combate.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao efeito anterior, mas o Sacerdote pode ver batalhas acontecidas a 1 ano, ou durante um combate os afetados poderão escapar dos efeitos especiais do primeiro ataque crítico recebido (inutilização de membros, incapacitação e redutores}, mas o dano continua sendo causado e críticos cinza continuam causando a morte do combatente!",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao efeito anterior, mas o Sacerdote pode ver batalhas acontecidas a 13 anos ou todos os efeitos afetam o sacerdote e mais dois aliados. A dica recebida será precisa e indicará algo de importância alta que realmente ajude o grupo do sacerdote.",
					nivel: 9,
				},
			],
			descricao: `Este milagre pode ser utilizado de duas formas: Observar eventos de uma batalha passada ou uma batalha que está por vir. O sacerdote é capaz de ver uma batalha que tenha ocorrido em determinado lugar, trazendo alguns benefícios ao evocador: conseguir informações da batalha e seus combatentes, quantos eram, que armas utilizaram, que armaduras vestiam e como lutaram, para se prepararem melhor para futuros combates. Para que o milagre funcione desta maneira é necessário que o tempo que a batalha tenha ocorrido não exceda ao permitido pelo nível. Quanto maior o nível, a mais o tempo a batalha pode ter ocorrido. O sacerdote ao evocar o milagre, verá alguns fragmentos da batalha ocorrida. Para que a magia funcione é necessário ter ficado alguma marca de batalha, como uma espada quebrada, um crânio, um elmo etc.

Outro uso desse milagre permite que o sacerdote e alguns aliados recebam durante uma batalha lampejos de visões dos movimentos futuros no campo de batalha. Os afetados não são capazes de prever os resultados dos combates, quem sairá vitorioso ou quem será destruído, esta magia mostra aos combatentes sutilezas instantâneas da movimentação dos indivíduos presentes. Na prática, uma diversidade de bônus pode ser garantida a depender do nível de dificuldade empregado representando a ligeira vantagem concedida pelas visões futuras da batalha.

O mestre deve buscar narrar pequenas cenas futuras do confronto de forma a ajudar os afetados pelo milagre a obter vantagens no combate como visto neste exemplo: A sacerdotiza Mitriel e seus companheiros estão em batalha, sob efeito deste milagre, contra um grupo de demônios. O mestre narra a cena "Mitriel, você tem uma visão onde o demônio líder inicia um voo na tentativa de fugir do alcance de vocês", o jogador que planejava realizar um ataque contra a criatura, muda de ideia e utiliza o milagre Corrente para tentar impedir a fuga. Um segundo exemplo seria: O mago amigo da Mitriel se prepara para lançar contra os demônios, o seu feitiço preferido: Bola de Fogo. O mestre poderia narrar "Você, antes de você iniciar sua evocação, sente os demônios rindo da inutilidade de seu feitiço contra eles".

O mestre também é encorajado a narrar os efeitos mecânicos do milagre como visto neste 3º exemplo: Maquifufim, o guerreiro do grupo, resolve que vai aparar o ataque de uma das criaturas. "O demônio na sua frente prepara as garras e dá-lhe uma estocada na altura do seu pescoço, então sua consciência volta ao presente, instantes antes do ataque! (+3 em aparar)"

O sacerdote pode realizar esse milagre antes de um combate e os efeitos durarão até o fim do próximo confronto, porém se em 30 minutos nenhuma batalha ocorrer, os efeitos serão encerrados.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.MINUTO,
				valor: 30,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "244",
			nome: "Visão de Cena",
			niveis: [
				{
					id: "0",
					descricao:
						"O evocador consegue enxergar uma cena curta de 1 minuto que tenha ocorrido a menos de 1 hora atrás. Neste nível a cena é bastante desfocada e um pouco borrada. Tudo que é visto é relativamente borrado, mas é possível distinguir as cores.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Idem ao anterior, mas o tempo aumenta para 10 minutos e a cena pode ter acontecido a até 3 horas atrás. Neste nível a cena de uma forma geral não está desfocada mas os seres ainda permanecem um pouco borrados. Agora é possível também distinguir as raças se estas forem bem diferentes umas das outras (EX: Um pequenino de um humano).",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, mas a cena pode ter ocorrido até 6 horas atrás. Neste nível a cena é perfeita e os seres permanecem com um leve desfoque o que impede de serem reconhecidos caso o evocador não os conheça previamente.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas a cena pode ter ocorrido até 12 horas atrás e o evocador consegue identificar os rostos das pessoas mesmo que não as conheça.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas a cena pode ter ocorrido até 1 dia e a cena pode agora pode ser vista claramente e fica ativa por 30 minutos, é possível até fazer leitura labial dos presentes, contudo, não é possível ouvir o som.",
					nivel: 9,
				},
			],
			descricao: `Essa magia traz á mente do evocador imagens dos fatos ocorridos no local onde a mágica é realizada. Para que funcione, o evocador deve antes ser bem sucedido num teste de Seguir Trilhas para achar algum rastro. Este ritual permite dar informações apenas visuais sobre as pessoas do rastro encontrado. Como se o evocador estivesse olhando e não ouvindo o que ocorreu no local.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
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
			id: "245",
			nome: "Visão Mística",
			niveis: [
				{
					id: "0",
					descricao:
						"Faz com que o evocador fique com +1 de defesa. O alcance de sua visão duplica e passa ater -1 nível de dificuldade na Habilidade Usar os Sentidos quando usada no alcance normal.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Faz com que o evocador fique com +2 de defesa. O alcance de sua visão triplica e passa ater -1 nível de dificuldade na Habilidade Usar os Sentidos quando usada para ver coisas até o dobro da distância normal.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, e ele pode enxergar tão bem como um anão.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas faz com que o evocador fique com +3 de defesa e passa a ter – 2 níveis de dificuldade na Habilidade Usar os Sentidos quando usada para ver coisa até o dobro da distância normal.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas faz com que o evocador fique com +4 de defesa e passa ver qualquer coisa que esteja invisível.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto o evocador concentra-se, fechando seus olhos ao abri-los eles estarão mais leves, rápidos e fixos como os de uma águia. Alguns Magos, do Colégio do Conhecimento depois muito tempo de auto-estudo conseguiram achar um modo de usar este encanto para ver coisas além da capacidade da visão normal ou mesmo para lhes dar vantagem de conseguir prever os ataques inimigos. Todos os efeitos são cumulativos.`,
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
			id: "246",
			nome: "Visão Noturna",
			niveis: [
				{
					id: "0",
					descricao: "Permite visão em escuridão parcial.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Permite visão em escuridão total.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Permite visão em escuridão de origem mágica.",
					nivel: 4,
				},
			],
			descricao: `Este encantamento permite que uma criatura receba a capacidade de ver em condições de pouca luminosidade. A eficiência, da visão obtida depende do Efeito utilizado.

Seja qual for a eficiência, no entanto, o personagem passa a ver todos os objetos em tonalidades de preto e branco. O alcance da visão é igual ao que ela teria caso o local estivesse banhado pela luz do dia. Não há nenhum efeito adverso caso o local seja repentinamente iluminado. Caso isto ocorra, quem estiver sob efeito do encanto passará a enxergar normalmente. Caso a iluminação cesse, mas a Duração da magia não tenha se esgotado, o feitiço entra em ação novamente.

Escuridão parcial é aquela em que, apesar de haver luz, a quantidade existente é pequena demais para permitir uma visão nítida. Nesta categoria se encaixam noites estreladas mas sem lua e cavernas à luz de uma tocha.

Escuridão total é aquela onde não existe nenhuma fonte de luz presente. Um compartimento fechado sem iluminação se encaixa nesta categoria.

Escuridão de origem mágica é, obviamente, aquela que é causada por magia. Um exemplo disso é a causada pela magia Escuridão.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.HORA,
				valor: 12,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "247",
			nome: "Visão Térmica",
			niveis: [
				{
					id: "0",
					descricao:
						"A visão possui uma qualidade ruim, capaz apenas de identificar pontos de calor de maneira muito desfocada. O evocador poderá se confundir com relação ao número de seres, caso estes estejam muito próximos. A visão afeta até 20 metros de distancia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"A visão possui uma qualidade média capaz de identificar pontos de calor de maneira desfocada, porém precisa. É possível enxergar apenas o formato aproximado de uma criatura, devendo-se executar um teste de Usar os Sentidos Médio para uma identificação segura. A visão afeta até 35 metros de distancia.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"A visão possui uma qualidade boa capaz de identificar pontos de calor de maneira precisa. É possível enxergar com exatidão o formato de uma criatura. A visão afeta até 50 metros de distancia.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"A visão possui uma qualidade muito boa capaz de identificar pontos de calor de maneira precisa. É possível enxergar com exatidão o formato de uma criatura. A visão afeta até 65 metros de distancia.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"A visão possui uma qualidade de perfeita capaz de identificar pontos de calor de maneira exata. É possível enxergar com perfeição o formato de uma criatura e identificar pessoas através de seus traços. Para isso é necessário um teste de Usar os Sentidos (a critério do mestre do jogo). A visão afeta até 80 metros de distancia.",
					nivel: 9,
				},
			],
			descricao: `Com esta magia o evocador poderá identificar seres ou objetos através do calor emanado por seus corpos por meio de uma visão especial capaz enxergar o calor em tonalidades de cores diferentes. Quanto mais alto for o nível da magia maior será a qualidade da visão assim como a distancia máxima alcançada pela visão térmica.

Note que quanto mais afastado estiver o foco de calor, mais difícil será a sua percepção assim como a sua identificação. Os parâmetros inscritos na magia estão relacionados a distancia média da visão, logo quanto mais próximo ou mais longe estiver o alvo, mais fácil ou mais difícil será a percepção e identificação dele, respectivamente.`,
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.RODADA,
				valor: 5,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
	];
}
