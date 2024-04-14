import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { type Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.raioEletrico,
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
			id: MagiaEnum.raizesMisticas,
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
			id: MagiaEnum.rastreamento,
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
			id: MagiaEnum.recuperacaoFisica,
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
			descricao:
				"Não somente o combate é motivo de mortes. Venenos e doenças também são responsáveis pela queda dos heróis. Este encanto se desfaz esse perigo, curando doenças e neutralizando venenos.",
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
			id: MagiaEnum.refletir,
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
			id: MagiaEnum.regeneracao,
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
			descricao:
				"Através desse milagre, o Sacerdote acelera o ritmo de cura do corpo. É possível também usar essa magia para se recuperar partes cortadas, destruídas ou inutilizadas do corpo do indivíduo tocado.",
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
			id: MagiaEnum.relampagos,
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
			id: MagiaEnum.replicas,
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
			id: MagiaEnum.resistencia,
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
			id: MagiaEnum.resistenciaElemental,
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
			id: MagiaEnum.ressurreicao,
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
			id: MagiaEnum.restauracao,
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
			id: MagiaEnum.retencaoMagica,
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
			id: MagiaEnum.retorno,
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
			id: MagiaEnum.ritualDeSangue,
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
			id: MagiaEnum.ruido,
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
			id: MagiaEnum.runas,
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
