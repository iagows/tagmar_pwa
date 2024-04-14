import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { type Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.velocidade,
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
			id: MagiaEnum.ventriloquismo,
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
			id: MagiaEnum.vigilia,
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
			id: MagiaEnum.vigor,
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
			id: MagiaEnum.vinculo,
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
			id: MagiaEnum.vinculoVital,
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
			id: MagiaEnum.visaoAnimal,
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
			id: MagiaEnum.visaoDeBatalhas,
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
			id: MagiaEnum.visaoDeCena,
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
			descricao:
				"Essa magia traz á mente do evocador imagens dos fatos ocorridos no local onde a mágica é realizada. Para que funcione, o evocador deve antes ser bem sucedido num teste de Seguir Trilhas para achar algum rastro. Este ritual permite dar informações apenas visuais sobre as pessoas do rastro encontrado. Como se o evocador estivesse olhando e não ouvindo o que ocorreu no local.",
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
			id: MagiaEnum.visaoMistica,
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
			descricao:
				"Com este encanto o evocador concentra-se, fechando seus olhos ao abri-los eles estarão mais leves, rápidos e fixos como os de uma águia. Alguns Magos, do Colégio do Conhecimento depois muito tempo de auto-estudo conseguiram achar um modo de usar este encanto para ver coisas além da capacidade da visão normal ou mesmo para lhes dar vantagem de conseguir prever os ataques inimigos. Todos os efeitos são cumulativos.",
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
			id: MagiaEnum.visaoNoturna,
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
			id: MagiaEnum.visaoTermica,
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
