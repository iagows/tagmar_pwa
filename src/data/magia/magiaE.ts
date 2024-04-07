import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.elementalDaAgua,
			nome: "Elemental da Água",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura Elemental Menor da Água.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 3 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura Elemental da Água fraco.",
					nivel: 3,
				},
				{
					id: "2",
					custo: { ouro: 5 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura Elemental da Água médio.",
					nivel: 5,
				},
				{
					id: "3",
					custo: { ouro: 7 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura Elemental da Água médio.",
					nivel: 7,
				},
				{
					id: "4",
					custo: { ouro: 9 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura Elemental da Água forte.",
					nivel: 9,
				},
			],
			descricao: `Este encanto permite que o evocador conjure e tente obter a servidão de uma criatura oriunda do plano elemental da água. A execução do feitiço exige que haja a menos de 5 metros do evocador uma quantidade de água proporcional à força do Elemental conjurado (uma poça d'água para um Elemental menor, um caldeirão de água para um Elemental fraco, etc).

O Elemental pode ser convencido ou forçado a cumprir uma ou mais missões para o evocador. Quando a Duração do encanto chegar ao fim, este fica livre e volta imediatamente para o Plano Elemental da Água. A criatura dará o máximo de si e irá até onde for necessário para cumprir a sua missão (dentro das suas possibilidades, é claro). Ao terminar as suas missões, ele retoma imediatamente ao seu plano.

O ser conjurado aparece no local escolhido pelo evocador desde que este local esteja a menos de 5 metros do mesmo e que no local haja a quantidade necessária de água. No momento em que a criatura aparece o evocador escolhe se haverá ou não sacrifício. O sacrifício toma a forma de um rubi cujo valor varia com a força do elemental (sem pechinchas). Caso o evocador resolva fazer o sacrifício, ele então deve rolar uma Persuasão Rotineira. Caso obtenha sucesso, o elemental realizará duas missões para o místico. Se o evocador falhar em sua Persuasão ou decidir não fazer sacrifício ele ainda pode tentar forçar o elemental a servi-lo. O Elemental faz uma Resistência à Magia e, caso falhe, é obrigado a aceitar uma missão imposta pelo evocador. Caso resista, ele volta para casa após 5 rodadas (as quais ele gasta tentando matar o místico). Os materiais necessários à evocação deste feitiço custam 5 moedas de prata.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.elementalDaTerra,
			nome: "Elemental da Terra",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura um Elemental. Menor da Terra.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 3 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura um Elemental da Terra fraco.",
					nivel: 3,
				},
				{
					id: "2",
					custo: { ouro: 5 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura um Elemental da Terra médio.",
					nivel: 5,
				},
				{
					id: "3",
					custo: { ouro: 7 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura um Elemental da Terra médio.",
					nivel: 7,
				},
			],
			descricao: `Este encanto permite que o evocador conjure e tente obter a servidão de uma criatura oriunda do plano elemental da Terra. Este feitiço pode ser conjurado apenas em terra firme. A evocação desta magia em lugares fechados pode provocar dano nas estruturas do local.

O elemental pode ser convencido ou forçado a cumprir uma ou mais missões para o evocador. Quando a Duração do encanto chega ao fim, o elemental fica livre e volta imediatamente para o Plano Elemental da Terra. A criatura dará o máximo de si e irá até onde for necessário para cumprir a sua missão (dentro das suas possibilidades, é claro). Ao terminar as suas missões ele retoma imediatamente ao seu plano.

O ser conjurado aparece no local escolhido pelo evocador desde que este local esteja a menos de 5 metros do mesmo e que no local haja a quantidade necessária de terra. No momento em que a criatura aparece, o evocador escolhe se haverá ou não sacrifício. O sacrifício toma a forma de um rubi cujo valor varia com a força do elemental (sem pechinchas). Caso o evocador resolva fazer o sacrifício ele deve rolar uma Persuasão Rotineira. Caso obtenha sucesso, o elemental realizará duas missões para o místico. Se o evocador falhar em sua Persuasão ou decidir não fazer sacrifício, ele ainda pode tentar forçar o elemental a servi-lo. O elemental faz uma Resistência à Magia e, caso falhe, é obrigado a aceitar uma missão imposta pelo evocador. Caso resista, ele volta para casa após 5 rodadas (as quais ele gasta tentando matar o evocador). Os materiais necessários à evocação deste feitiço custam 5 moedas de prata.

Elemental, da Terra 9: Conjura um Elemental da Terra forte por 5 dias. O rubi custa 9 moedas de ouro.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.elementalDoAr,
			nome: "Elemental do Ar",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura Elemental Menor do Ar.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 3 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura Elemental do Ar fraco.",
					nivel: 3,
				},
				{
					id: "2",
					custo: { ouro: 5 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura Elemental do Ar médio.",
					nivel: 5,
				},
				{
					id: "3",
					custo: { ouro: 7 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura Elemental do Ar médio.",
					nivel: 7,
				},
				{
					id: "4",
					custo: { ouro: 9 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura Elemental do Ar forte.",
					nivel: 9,
				},
			],
			descricao: `Este encanto permite que o evocador conjure e tente obter a servidão de uma criatura oriunda do plano elemental do ar. O ritual necessário à evocação deste feitiço pode ser executado apenas ao ar livre.

O elemental pode ser convencido ou forçado a cumprir uma ou mais missões para o evocador. Quando a Duração do encanto chega ao fim, o elemental fica livre e volta imediatamente para o Plano Elemental do Ar. A criatura dará o máximo de si e irá até onde for necessário para cumprir a sua missão (dentro das suas possibilidades). Ao terminar as suas missões, ele retoma imediatamente ao seu plano.

O ser conjurado aparece no local escolhido pelo evocador desde que este local esteja a menos de 5 metros do mesmo e seja ao ar livre. No momento em que a criatura aparece, o evocador escolhe se haverá ou não sacrifício. O sacrifício torna a forma de um diamante transparente cujo valor varia com a força do elemental (sem pechinchas). Se o evocador resolver fazer o sacrifício, ele deve então tentar uma Persuasão Rotineira. Caso obtenha sucesso, o elemental realizará duas missões para o mesmo. Se o evocador falhar em sua Persuasão ou decidir não fazer sacrifício ele ainda pode tentar forçar o elemental a servi-lo. O Elemental faz uma Resistência à Magia e, caso falhe, é obrigado a aceitar uma missão imposta pelo evocador. Caso resista, ele volta para casa após 5 rodadas (as quais ele gasta tentando matar o evocador). Os materiais necessários à evocação deste feitiço custam 5 moedas de prata.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.elementalDoFogo,
			nome: "Elemental do Fogo",
			niveis: [
				{
					id: "0",
					custo: { ouro: 1 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura um Elemental Menor do Fogo.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 3 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao: "Conjura um Elemental do Fogo fraco.",
					nivel: 3,
				},
				{
					id: "2",
					custo: { ouro: 5 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao:
						"Conjura um Elemental do Fogo médio por 1 dia. O rubi custa 5 moedas de ouro.",
					nivel: 5,
				},
				{
					id: "3",
					custo: { ouro: 7 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura um Elemental do Fogo médio.",
					nivel: 7,
				},
				{
					id: "4",
					custo: { ouro: 9 },
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao: "Conjura um Elemental do Fogo forte.",
					nivel: 9,
				},
			],
			descricao: `Este encanto permite que o evocador conjure e tente obter a servidão de uma criatura oriunda do plano elemental do fogo. A execução do feitiço exige que haja a menos de 5 metros de evocador uma quantidade de fogo proporcional à força do Elemental conjurado (um braseiro para um Elemental menor, uma pequena fogueira para um Elemental fraco, etc).

O Elemental pode ser convencido ou forçado a cumprir uma ou mais missões para o evocador, Quando a Duração do encanto chega ao fim, o Elemental fica livre e volta imediatamente para o Plano Elemental do Fogo. A criatura dará o máximo de si e irá até onde for necessário para cumprir a sua missão (dentro das suas possibilidades). Ao terminar as suas missões ele retoma imediatamente ao seu plano.

O ser conjurado aparece no local escolhido pelo evocador desde que este local esteja a menos de 5 metros do mesmo e que no local haja a quantidade necessária de fogo. No momento em, que a criatura aparece, o evocador escolhe se haverá ou não sacrifício. O sacrifício torna a forma de um rubi cujo valor varia com a força do elemental (sem pechinchas). Caso o místico resolva fazer o sacrifício, ele deve rolar uma Persuasão Rotineira. Caso obtenha sucesso o elemental realizará duas missões para o místico. Se o evocador falhar em sua Persuasão ou decidir não fazer sacrifício ele ainda pode tentar forçar o elemental a servi-lo. O elemental faz uma Resistência à Magia e, caso falhe, é obrigado a aceitar uma missão imposta pelo evocador. Caso resista, ele volta para casa após 5 rodadas (as quais ele gasta tentando matar o evocador). Os materiais necessários à evocação deste feitiço custam 5 moedas de prata.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.eloAnimal,
			nome: "Elo Animal",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.DIA, valor: 1 },
					descricao:
						"Cria um elo temporário ou permanente com um animal de Estágio 3 ou menos. O elo temporário tem duração de 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					duracao: { tipo: DuracaoEnum.MINUTO, valor: 30 },
					alcance: { tipo: AlcanceEnum.METRO, valor: 15 },
					descricao:
						"Permite que o evocador se comunique e peça um favor para 1 animal. O animal obedecerá com a melhor de suas capacidades, mas não correrá nenhum risco de vida pelo evocador.",
					nivel: 2,
				},
				{
					id: "2",
					duracao: { tipo: DuracaoEnum.DIA, valor: 3 },
					descricao:
						"Cria um elo temporário ou permanente com até 2 animais de Estágio 7 ou menos. O elo temporário tem duração de 3 dias.",
					nivel: 4,
				},
				{
					id: "3",
					duracao: { tipo: DuracaoEnum.DIA, valor: 5 },
					descricao:
						"Cria um elo temporário ou permanente com até 3 animais de Estágio 11 ou menos. O elo temporário tem duração de 5 dias.",
					nivel: 6,
				},
				{
					id: "4",
					duracao: { tipo: DuracaoEnum.DIA, valor: 7 },
					descricao:
						"Cria um elo temporário ou permanente com até 3 animais de Estágio 15 ou menos. O elo temporário tem duração de 7 dias.",
					nivel: 8,
				},
				{
					id: "5",
					evocacao: { tipo: EvocacaoEnum.RITUAL },
					alcance: { tipo: AlcanceEnum.QUILOMETRO, valor: 5 },
					descricao:
						"Permite comunicar-se com todos os animais de pequeno porte de um ambiente natural. Este feitiço dura enquanto o evocador tenha a posse do talismã (ver texto) e esteja em ambientes naturais. Nenhuma Resistência à Magia é necessária (o sucesso é automático).",
					nivel: 10,
				},
			],
			descricao: `Este encanto permite que o místico se comunique com os animais, podendo também transmitir suas emoções, de maneira que construa um elo empático entre si mesmo e um ser de inteligência animal.

O animal submetido a este feitiço tem direito a uma Resistência à Magia; caso obtenha sucesso, recusará a aliança. Esta magia não mais poderá ser usada nesse animal durante o período de um dia. Os animais que não passarem no teste de Resistência à Magia ficarão dóceis em relação ao evocador.

Conforme o efeito usado, o místico pode pedir um favor, um elo temporário (1 rodada de evocação) ou um elo permanente (ritual curto de uma hora, mas que custa 1 M.O por nível do efeito). Qualquer que seja o caso, deverá haver ajuda e proteção mútua; portanto, causar problemas ao animal com que se firmou um pacto para tirar proveito disso (por exemplo: mandar o animal na frente para que as armadilhas caiam nele, mandar o animal para a morte para poder arranjar alianças com animais melhores etc.}, é uma ofensa gravíssima que deverá ser punida com extremo rigor pelo Mestre.

Os efeitos deste feitiço permitem que o místico receba informações do animal e transmita ordens, mesmo à distância (desde que o animal não esteja a mais de 5 Km de distância). O animal obedecerá às ordens do místico com o máximo de suas capacidades. É importante lembrar que a inteligência do animal é pequena, tornando a comunicação muito limitada. As conversas devem se restringir a conceitos muito simples (4 palavras ou menos) e sensações muito rudimentares como: Imagens, impressões táteis, odores, sabores e/ou sons, podendo ser tanto transmitidos quanto recebidas; contudo, para isso, o místico deve manter-se em concentração absoluta.

Caso o evocador use este encanto para criar um elo com Duração permanente em um animal, este elo perdurará até que um dos dois morra (ou seja, este efeito não pode ser dissolvido). O evocador pode criar até 3 elos permanentes com animais. Note que se o animal morrer por culpa exclusiva do evocador, este ficará atordoado por 3 horas e perderá seus poderes, recuperando-os somente quando tiver cumprido uma missão para se redimir.

O último nível deste encanto é um ritual que permite ao místico se comunicar com todos os animais de pequeno porte de uma área natural de 5 km ao seu redor. Animais de pequeno porte são aqueles que são pequenos demais sequer para terem Estágio (esquilos, passarinhos etc.). Os animais passam a se comunicar com o místico contando-o tudo que acontece e existe na área, o efeito disso é que o místico não pode ser pego desprevenido e passa a ter total compreensão do território, podendo até mesmo encontrar locais secretos. O místico por sua vez se sente na obrigação de retribuir a ajuda, fazendo tudo o possível para proteger os animais e a natureza. O ritual deve ser feito em ambiente natural e é necessário que o evocador confeccione um talismã antes do ritual. O talismã servirá para ativar o efeito. O evocador poderá carregá-lo e usá-lo quando estiver em ambientes naturais, seu efeito ficará ativo enquanto ele estiver em tais ambientes. Se o talismã for roubado e o evocador não conseguir recuperá-lo, poderá fazer outro ritual que anulará o primeiro.`,
			alcance: { tipo: AlcanceEnum.VARIAVEL },
			duracao: { tipo: DuracaoEnum.VARIAVEL },
			evocacao: { tipo: EvocacaoEnum.VARIAVEL },
		},
		{
			id: MagiaEnum.eloEmpatico,
			nome: "Elo Empático",
			niveis: [
				{
					id: "0",
					custo: { prata: 5 },
					descricao:
						"A magia cria um elo entre duas pessoas. as partes saberão se uma das partes envolvidas estão em grande perigo ou em grande sofrimento.",
					nivel: 1,
				},
				{
					id: "1",
					custo: { ouro: 1 },
					descricao:
						"As partes saberão a distância que os separa, obtendo as seguintes respostas: muito perto (até 1km}, perto (de 1 a 10 km}, médio (de 10 a 100km}, longe (de 100 a 1.000km}, muito longe (mais que 1.000km}, além de saber a direção nos pontos cardeais: Norte, Sul, Leste ou Oeste, a magia pode criar um elo com até 4 pessoas.",
					nivel: 2,
				},
				{
					id: "2",
					custo: { ouro: 2 },
					descricao:
						"Uma vez por semana, todas as partes terão um sonho em comum, onde poderão conversar normalmente, nenhuma delas terá como prever quando será o sonho. Obviamente para que o sonho possa ocorrer é necessário que as partes estejam dormindo ao mesmo tempo, a magia pode criar um elo com até 6 pessoas.",
					nivel: 4,
				},
				{
					id: "3",
					custo: { ouro: 4 },
					descricao:
						"Uma vez por dia, as partes poderão por 30 minutos verem uns aos outros, nesse caso eles podem escolher quando farão isso. Eles terão uma imagem dinâmica um do outro, olhando por cima, como se estivessem a uns 10 metros de distância acima, apenas as partes afetadas pela magia podem ver a imagem. Nenhum deles tem como saber se o outro está observando. Os 30 minutos devem ser utilizados uma única vez (ou seja, não se pode ver a imagem durante 20 minutos e depois ver mais 10 minutos) e aquele que convocar essa imagem, deverá estar em estado de meditação, longe de grandes barulhos e completamente alheio ao que acontece ao seu redor. Qualquer coisa que desperte sua atenção, fará com que a imagem se perca, a magia pode criar um elo com até 8 pessoas.",
					nivel: 6,
				},
				{
					id: "4",
					custo: { ouro: 8 },
					descricao:
						"Idem ao anterior, mas os 30 minutos para ver a outra parte não precisa ser utilizado de uma única vez, podendo ser divididos em várias vezes, desde que cada uma delas tenham um mínimo de 1 minuto, a magia pode criar um elo com até 10 pessoas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"As partes poderão, durante 5 minutos por dia, entrar em contato com quem desejar. Para que isso funcione, o que deseja entrar em contato deve adentrar em estado de meditação profunda e depois de 5 minutos nesse estado, o evocador consegue enviar uma projeção sua para perto de quem deseja contatar ou para um grupo que esteja sobre o efeito da magia. O corpo do evocador fica em estado de animação suspensa, completamente indefeso e vulnerável, sem ter nenhuma ideia do que está acontecendo com o seu corpo real, e projetado para perto da(s) outra(s) parte(s}, poderá ver, ouvir e cheirar tudo o que acontece próximo ao(s) outro(s). Para o(s) que recebe(m}, este lhe parecerá como uma imagem translúcida, sendo que apenas ele(s) poderá(ão) ver, ouvir e cheirar a projeção, nenhuma outra pessoa poderá ver. Sob essa forma, eles podem conversar livremente, mas não há como um tocar no outro. O que evocou a projeção poderá se manter assim em até 5 minutos, depois disso a projeção simplesmente desaparece. Observe que os 5 minutos valem para ambos; ou seja, não pode uma pessoa enviar sua projeção e depois no mesmo dia a outra parte enviar; apenas um enviará e se manterá assim por 5 minutos. Caso a projeção seja atacada, ela irá se desfazer e aquele que enviou deverá fazer uma Resistência à Magia contra força de Ataque 5: caso passe nada lhe ocorrerá, mas caso não passe sofrerá o golpe em sua forma espiritual que resultara o dano na Energia Heroica. A magia pode criar um elo com até 12 pessoas.",
					nivel: 10,
				},
			],
			descricao: `Conhecido como a benção de Lena, o milagre Elo Empático é utilizado em pessoas que mantenham relações sexuais, ou entre um empregador e seus subordinados que firmem um contrato de trabalho, seja fixo como trabalhar no exército do reino; ou temporário, uma missão até uma caverna matar um dragão e resgatar a princesa. O milagre faz com que haja uma elo sobrenatural entre as partes, que permite saber coisas acerca das pessoas mesmo à maior distância.

Este é um milagre que também é utilizado em cavaleiros reais e suas esposas, uma vez que estando sempre longe um do outro, através desse milagre é possível saber algo sobre o outro.

Para que o milagre funcione é necessário que cada uma das partes possua algum objeto imbuído com a aura do outro, ou algo que tenha vindo diretamente do corpo dele como cabelos e unhas. São necessários sacrifícios para esse ritual com o valor mostrado nos níveis. Observe que os efeitos são cumulativos, assim as partes com Elo Empático 4 terá os efeitos do nível 4, do nível 2 e do nível 1.`,
			alcance: { tipo: AlcanceEnum.TOQUE },
			duracao: { tipo: DuracaoEnum.ANO, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RITUAL },
		},
		{
			id: MagiaEnum.empatia,
			nome: "Empatia",
			niveis: [
				{
					id: "0",
					descricao: "Permite perceber os sentimentos de 1 pessoa.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Permite perceber os sentimentos de 3 pessoas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Permite perceber e influenciar os sentimentos de pessoa.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Permite perceber e influenciar os sentimentos de 3 pessoas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Permite perceber e influenciar os sentimentos de 7 pessoas.",
					nivel: 9,
				},
			],
			descricao: `Este encantamento permite que o evocador crie um elo empático com o ser em quem o feitiço for usado, podendo assim perceber quais os sentimentos deste ser e, caso possua o efeito adequado, criar ou reduzir certos sentimentos nesta pessoa.

Caso a vítima faça a sua Resistência à Magia, o evocador não só não pode perceber nem influenciar os sentimentos da criatura, como o ser também fica extremamente mal disposto em relação ao místico, dando +2 Níveis de Dificuldade para quaisquer tentativas de Empatia, Persuasão e Negociação e impossibilitando o uso da Habilidade Liderança por uma semana.

Caso o evocador possa perceber os sentimentos da vítima, ele pode manipulá-la muito mais facilmente. Os usos das Habilidades Empatia, Persuasão e Negociação serão 1 Nível de Dificuldade menores. Ou seja, Absurdo vira Muito Difícil, Fácil se toma Rotineiro, etc. Além disso, ele ganhará um ajuste de +5 para o seu total na Habilidade Liderança enquanto o feitiço durar.

Se, além de perceber os sentimentos da vítima, o evocador também puder manipulá-los magicamente, fica extremamente fácil influenciar esta criatura. Os usos das Habilidades Empatia, Persuasão e Negociação serão 2 Níveis de Dificuldade menores. Ou seja, Absurdo vira Difícil, Fácil se torna Rotineiro, etc. Além disso, ele ganhará um ajuste de +10 para o seu total na Habilidade Liderança enquanto o feitiço durar.

Note que, após o elo empático ser criado, ele permanece em efeito durante a duração total da magia. O evocador, no entanto, só pode perceber ou alterar os sentimentos da vítima quando esta estiver dentro do alcance. Também é conveniente notar que a vítima é escolhida no momento em que o feitiço é evocado e não pode ser mudada depois. Em outras palavras, depois que a(s) vítima(s) foi escolhida, o evocador pode afetar apenas esta vítima(s) (a não ser, é claro, que ele evoque a magia novamente em vítimas diferentes).`,
			alcance: { tipo: AlcanceEnum.METRO, valor: 10 },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.RODADA, valor: 1 },
		},
		{
			id: MagiaEnum.encantamento,
			nome: "Encantamento",
			niveis: [
				{
					id: "0",
					duracao: { tipo: DuracaoEnum.DIA, valor: 3 },
					descricao:
						"Encanta um objeto comum com 1 magia de nível 1 que só poderá ser evocada 1 vez por dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Encanta um objeto comum com 1 magia de nível máximo 2 que poderá ser evocada até 2 vezes por dia, a duração do encantamento é de 1 semana.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Encanta um objeto comum com 1 magia de nível máximo 3 que poderá ser evocada até 3 vezes por dia, a duração do encantamento é de 2 semanas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Encanta um cetro menor com 1 magia de nível máximo 4, a duração do encantamento é de 1 mês.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Encanta um cetro maior com 2 magias de nível máximo 6, a duração do encantamento é de 6 meses.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Encanta um cajado comum com 3 magias de nível máximo 8, a duração do encantamento é de 1 ano e 1 dia.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o mago alquímico poderá imbuir uma ou mais magias á um “objeto comum”, “Cetros” ou “Cajados”. Dentre os objetos que podem ser encantados os que mais se familiarizam com essa recepção são os cetros e cajados, sendo também os mais difíceis de serem encantados.

Este ritual não tem a capacidade de transformar objetos comuns em mágicos, ele apenas encanta um objeto fazendo com que este seja capaz de portar uma ou mais magias a escolha do evocador. Os “objetos comuns” são mais fácies de serem encantados, mas as magias atribuídas a eles são de pouco poder e além disso impõem um limite de vezes por dia (dado pelo efeito) para serem usados.

Os “objetos comuns” podem ser qualquer coisa, no entanto os magos alquímicos dão preferência a jóias (anéis, colares, brincos) ou a itens comuns no dia a dia de aventuras como (armas, armaduras, instrumentos musicais etc.)

Os cetros e cajados usados nesta magia devem ser feitos por encomenda, pois é necessário que eles portem gemas que serão recipientes de magias. O numero de gemas dos cetros e cajados serão iguais ao numero de matrizes de poder destes objetos. O valor mínimo de cada gema está em torno de 3 moedas de ouro e devem ser pagas separadamente. Os parâmetros de uso dos cetros e cajados encantados por esta magia serão os mesmos dos usados nos cetros e cajados mágicos, assim como o número de matrizes de poder (ver capítulo 8 do Manual de Regras).

Qualquer “objeto comum” encantado por esta magia portará somente uma magia, enquanto que os cetros e cajados poderão conter duas e três magias, respectivamente.

O mago só poderá encantar objetos com magias que ele conheça, ou magias que estejam assimilas através do encanto “Assimilação”. Para encantar um objeto com um efeito assimilado, é preciso que o tempo da assimilação dure até o final da duração do ritual de Encantamento.

Note que é impossível encantar objetos com magias cujo tempo de evocação seja “ritual”. O tipo de objeto que poderá ser encantado, o tempo de duração do encantamento, e o nível da magia que poderá ser colocada, variam com o nível.

Os materiais necessários para a evocação desta magia são de 15 moedas de prata por nível de dificuldade. Um mesmo mago não pode manter mais de três itens encantados em um mesmo período de tempo com este ritual.`,
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
			id: "101",
			nome: "Encolhimento",
			niveis: [
				{
					id: "0",
					descricao:
						"Diminui para 90% do tamanho original, objetos cujas dimensões máximas sejam 50cm x 50cm x 50cm. A duração da magia é de 30 minutos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Diminui para 75% do tamanho original, objetos cujas dimensões máximas sejam 1m x 1m x 1m, ou criaturas cujas dimensões máximas sejam 10cm x 10cm x 10cm. A duração da magia é de 1 hora.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Diminui para 50% do tamanho original, objetos cujas dimensões máximas sejam 2m x 2m x 2m, ou criaturas cujas dimensões máximas sejam 50cm x 50cm x 50cm. A duração da magia é de 6 horas.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Diminui para 10% do tamanho original, objetos cujas dimensões máximas sejam 4m x 4m x 4m, ou criaturas cujas dimensões máximas sejam 1m x 1m x 1m. A duração da magia é de 12 horas.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Diminui para 1% do tamanho original, objetos cujas dimensões máximas sejam 8m x 8m x 8m, ou criaturas cujas dimensões máximas sejam 2m x 2m x 2m. A duração da magia é de 1 dia.",
					nivel: 9,
				},
			],
			descricao: `Com esta magia o mago alquímico poderá encolher um objeto ou criatura desde que estes correspondam aos requisitos da magia.

Objetos tendem a ser mais fácies de serem encolhidos por possuírem uma composição mais simples do que os corpos dos animais. Cada efeito da magia poderá encolher um objeto ou criatura até certo valor. Não é possível usar o mesmo efeito desta magia mais de uma vez sobre um objeto ou criatura para reduzi-los a um tamanho menor do que o normal. Caso isso seja feito o karma será gasto e nenhum efeito será conseguido.

Caso o mago utilize um efeito mais poderoso da magia sobre um objeto ou criatura que já esteja diminuído, o encanto mais fraco será quebrado e o efeito mais poderoso prevalecerá. Note que o efeito mais poderoso diminuirá o objeto ou criatura, tomando como base o tamanho real da criatura, e não o seu tamanho já reduzido. Ou seja, se uma espada que esteja sobre o efeito da magia Encolhimento 1, for alvo do efeito de Encolhimento 5. Esta será reduzida a metade de seu tamanho original e não do tamanho que tinha quando estava sobre o efeito de Encolhimento 1.

A criatura que for Encolhida por esta magia, terá a EF reduzida na mesma proporção da diminuição de seu corpo (a critério do mestre do jogo) considerando, no entanto, o valor mínimo como (1). “Um guerreiro de energia física 18 que tenha sido encolhido para 1% do tamanho original, terá energia física 1.”

No entanto sua EH permanece intacta e sua VB só pode ser reduzida no máximo até a metade.

Para que seja possível encolher um objeto ou criatura, é necessário que seu tamanho original caiba dentro das dimensões indicadas no efeito usado.

O efeito indica o volume, o tipo de composição do alvo a ser Encolhido e a duração da magia.`,
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
			id: "102",
			nome: "Esconjuração",
			niveis: [
				{
					id: "0",
					descricao: "Expulsa 4 Estágios,",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Expulsa 8 Estágios.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Expulsa 12 Estágios.",
					nivel: 3,
				},
				{
					id: "3",
					descricao: "Expulsa 16 Estágios.",
					nivel: 4,
				},
				{
					id: "4",
					descricao: "Expulsa 20 Estágios.",
					nivel: 5,
				},
				{
					id: "5",
					descricao:
						"Expulsa 24 Estágios. Caso sejam criaturas de Estágio 1 ou menos, elas não são expulsas, mas sim destruídas.",
					nivel: 6,
				},
				{
					id: "6",
					descricao:
						"Expulsa 28 Estágios. Caso sejam criaturas de Estágio 1 ou menos, elas não são expulsas, mas sim destruídas.",
					nivel: 7,
				},
				{
					id: "7",
					descricao:
						"Expulsa 32 Estágios. Caso sejam criaturas de Estágio 2 ou menos, elas não são expulsas, mas sim destruídas.",
					nivel: 8,
				},
				{
					id: "8",
					descricao:
						"Expulsa 36 Estágios. Caso sejam criaturas de Estágio 2 ou menos, elas não são expulsas, mas sim destruídas.",
					nivel: 9,
				},
				{
					id: "9",
					descricao:
						"Expulsa 40 Estágios. Caso sejam criaturas de Estágio 3 ou menos, elas não são expulsas, mas sim destruídas.",
					nivel: 10,
				},
			],
			descricao: `Esse feitiço canaliza forças positivas para derrotar mortos-vivos e Demônios. Caso um destes falhe em resistir a essa magia, ele será imediatamente forçado a fugir do evocador por um dia, como que possuído por um pânico terrível. Se o efeito usado for muito poderoso, é possível até mesmo destruir o corpo físico da criatura.

A magia afeta criaturas que estejam dentro do alcance (a menos de 20 metros do evocador) até certo número total de Estágios. Isto significa que somam-se os Estágios dos oponentes até atingir o limite da magia. Se uma vítima tem mais Estágios que o que ""sobrou"" do poder da magia, ela está a salvo, pois não pode ser parcialmente afetada. Ela começa afetando os seres mais fracos primeiro (menor Estágio) para então atingir os mais fortes.

Note que todo ser afetado por Esconjuração deixa imediatamente de ser controlado (se estava antes}, sendo liberto de magias como Controle ou Controle Demoníaco.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
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
			id: "103",
			nome: "Escrita",
			niveis: [
				{
					id: "0",
					descricao: "Reduz em 1 o nível de dificuldade da habilidade escrita.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Reduz em 2 o nível de dificuldade da habilidade escrita.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Reduz em 3 o nível de dificuldade da habilidade escrita.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Reduz em 4 o nível de dificuldade da habilidade escrita.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Reduz em 5 o nível de dificuldade da habilidade escrita ou torna Muito Difícil algo que seria Impossível.",
					nivel: 9,
				},
			],
			descricao:
				"Utilizando-se inúmeras vezes de cartas, sejam de amor, repletas de poesias, ou mensagens, com inúmeros termos formais, algumas pessoas podem desenvolver sua técnica da escrita, conseguindo escrever e ler textos mais rebuscados ou poesias de maior densidade e com maior clareza. Na prática, ao utilizar a magia escrita, o evocador poderá reduzir os níveis de dificuldade da habilidade escrita. Observe que a magia afeta unicamente uma única língua escolhida pelo evocador.",
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
			},
			duracao: {
				tipo: DuracaoEnum.USO,
				valor: 1,
			},
			evocacao: {
				tipo: EvocacaoEnum.INSTANTANEA,
			},
		},
		{
			id: "104",
			nome: "Escrituras Místicas",
			niveis: [
				{
					id: "0",
					descricao:
						"Retêm uma magia de nível 1 que poderá ser liberada apenas 1 vez após o ritual. A duração do encanto é de 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Retêm uma magia de nível máximo 3 que poderá ser liberada até 1 vez após o ritual. A duração do encanto é de 1 semana.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Retêm uma magia de nível máximo 5 que poderá ser liberada até 2 vezes após o ritual. A duração do encanto é de 1 mês.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Retêm uma magia de nível máximo 7 que poderá ser liberada até 2 vezes após o ritual. A duração do encanto é de 1 ano e um dia.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Retêm uma magia de nível máximo 9 que poderá ser liberada até 3 vezes após o ritual. A duração do encanto é de 13 anos.",
					nivel: 9,
				},
			],
			descricao: `Esta magia encanta um pergaminho com escrituras místicas que guardarão um encanto a escolha do evocador. A magia retida no pergaminho será liberada quando alguém pronunciar as palavras das Escrituras Místicas.

Note que é impossível reter magias cujo tempo de evocação seja “ritual”.

O evocador poderá reter no pergaminho, qualquer magia que ele saiba evocar, ou que esteja assimilada com o encanto “Assimilação”. Para reter uma magia assimilada, será preciso que o tempo da assimilação dure até o final do ritual da magia “Escrituras Místicas”. O tempo de evocação das magias escritas será igual ao tempo normal de sua evocação.

O pergaminho deve ser conseguido a parte e é preciso que este nunca tenha sido usado, caso contrário, a magia falhará e os materiais serão gastos inutilmente.

Os níveis indicam o poder da magia retida, o tempo de duração do encanto e o número de vezes que a magia poderá ser liberada do pergaminho até que as escrituras místicas fiquem obsoletas. O custo do ritual é de 8 moedas de prata por nível de dificuldade usado.

Não é possível para um mesmo mago manter mais de 3 pergaminhos encantados em um mesmo período de tempo, com este ritual.`,
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
			id: "105",
			nome: "Escudo Místico",
			niveis: [
				{
					id: "0",
					descricao:
						"Possui raio de base 1 metro, defesa L1 e pode absorver até 13 pontos de dano. A duração do encanto é de 2 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Possui raio de base 2 metros, defesa L3 e pode absorver até 18 pontos de dano. A duração do encanto é de 4 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Possui raio de base 4 metros, defesa M1 e pode absorver até 23 pontos de dano. A duração do encanto é de 8 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Possui raio de base 6 metros, defesa M3 e pode absorver até 28 pontos de dano. A duração do encanto é de 10 rodadas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Possui raio de base 8 metros, defesa P1 e pode absorver até 33 pontos de dano. A duração do encanto é de 20 rodadas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Possui raio de base 10 metros, defesa P3 e pode absorver até 38 pontos de dano. A duração do encanto é de 10 minutos.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia o mago cria ao seu redor um domo de energia que tem a capacidade de absorver danos. Para manter o domo o mago deve permanecer imóvel e é necessário ao mago manter-se concentrado. Nenhum ataque físico poderá ser infligido atravessando-se as paredes do domo, tanto de fora para dentro, como de dentro para fora. O domo protegerá a todos que estiverem dentro a área de proteção no momento da evocação. O domo tem uma capacidade sofrer uma quantidade limitada de dano. O dano sofrido não é cumulativo, ou seja, para quebrar a barreira é preciso causar um dano maior que a absorção do escudo místico de uma só vez.

No início da evocação, o mago poderá reduzir o tamanho do raio de base do domo de acordo com a sua vontade, mas depois de evocada a magia o evocador não poderá mais alterar o tamanho do raio da base. A defesa do domo é dada de acordo com o poder do Escudo Místico criado. Esta magia não impede que alguém atravesse domo, mas o domo oferecerá uma dificuldade a passagem o que forçará aquele que tentar a atravessá-lo a fazê-lo devagar. Caso alguém tente atravessar o domo em velocidade, ele se comportará como uma parede sólida.`,
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
			id: "106",
			nome: "Escudo Protetor",
			niveis: [
				{
					id: "0",
					descricao:
						"Possui raio de 1 metro, defesa L1 e pode absorver até 10 pontos de dano. A duração do milagre é de 4 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Possui raio de 2 metros, defesa L3 e pode absorver até 20 pontos de dano. A duração do milagre é de 6 rodadas.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Possui raio de 4 metros, defesa M1 e pode absorver até 40 pontos de dano. A duração do milagre é de 8 rodadas. O escudo também pode proteger contra deslizamentos, parando todas as rochas que caírem contra a área.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, mas possui raio de 6 metros, defesa M3 e pode absorver até 60 pontos de dano. Um teste de RM permite defletir magias de ataque físico. A duração do milagre é de 12 rodadas. O escudo também serve para proteger contra quedas, envolvendo todos os protegidos em uma esfera que descerá verticalmente até o chão. Após o uso deste efeito de amortecimento de queda o milagre se encerra. Este efeito não dá a capacidade de voar, e muito menos poder controlar onde irá descer.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, mas possui raio de 8 metros, defesa P1 e pode absorver até 80 pontos de dano. Um teste de RM permite defletir magias de ataque físico. A duração do milagre é de 20 rodadas. O escudo também protege contra gases tóxicos formando uma bolha perfeitamente isolada do ar que pode ser movida com todos dentro a uma velocidade de até 10 metros por rodada.",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Idem ao anterior, mas possui raio de 10 metros, defesa P3 e pode absorver até 100 pontos de dano. Um teste de RM permite defletir magias de ataque físico. A duração do milagre é de 10 minutos. O escudo também protege contra inundação, formando uma bolha perfeitamente isolada da água que pode ser movida verticalmente com todos dentro a uma velocidade de 5m por rodada até a superfície, mas neste caso não é possível fazer ataques de dentro para fora. Ao chegar à superfície o Escudo Protetor ficará imóvel e permanecerá assim até que a magia se encerre ou seja encerrada.",
					nivel: 10,
				},
			],
			descricao: `Esta magia é uma dádiva exclusiva de Selimom a seus Sacerdotes. Ela cria ao seu redor um escudo de proteção que tem a capacidade de absorver danos. Para manter o escudo o Sacerdote deve manter-se concentrado, e é permitido o sacerdote se mover, mas não pode ser mais que metade de sua VB por rodada. Nenhum ataque físico poderá ser infligido atravessando-se as paredes do escudo de fora para dentro, protegendo a todos que estiverem dentro da área de proteção a partir do ponto onde o Sacerdote estiver. Ataques feitos de dentro para fora não possuem restrições. O escudo tem uma capacidade para sofrer uma quantidade limitada de dano. O dano sofrido é cumulativo, ou seja, para quebrar a barreira é preciso que a soma do dano causado seja maior que a absorção do escudo. No momento da quebra do encanto todo dano que exceder não será repassado a quem estiver dentro.

No início da evocação, o Sacerdote poderá reduzir o tamanho do raio de atuação do escudo de acordo com a sua vontade, mas depois de evocada a magia o Sacerdote não poderá mais alterar o tamanho do raio da proteção.

A defesa do Escudo é dada de acordo com o poder do Escudo Protetor criado. Esta magia não impede que alguém atravesse o escudo, mas o escudo oferecerá uma dificuldade a passagem o que forçará aquele que tentar a atravessá-lo a fazê-lo devagar. Caso alguém tente atravessar o escudo em velocidade, ele se comportará como uma parede sólida.

O escudo normalmente não pode ser visto, a não ser que seja usada alguma magia de detecção ou quando ele sofre algum dano, neste caso por 1 segundo será visto brilhando. A partir do efeito 6, caso uma magia de ataque físico que cause dano e não seja em área (como raio elétrico, dardos de gelo, relâmpagos etc.) for lançada contra o escudo, o sacerdote poderá fazer um teste de Resistência a Magia contra a Força do Ataque (FA) da magia agressora. Caso passe no teste de RM, a magia será defletida em direção ao evocador, que deverá fazer o ataque em si mesmo ou em que estiver perto. O Mestre deve sortear para quem a magia foi defletida. Só podem ser defletidas magias de efeito igual ou menor que nível que o evocador possui em Escudo Protetor. Após a segunda tentativa (com sucesso ou não) de defletir magias, o Escudo Protetor se encerra.`,
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
			id: "107",
			nome: "Escudo Térmico",
			niveis: [
				{
					id: "0",
					descricao: "Protege por 10 rodadas",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Protege por 30 minutos",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Protege por 6 horas",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Protege por 24 horas",
					nivel: 7,
				},
			],
			descricao:
				"Esta magia torna o Evocador imune (por 1 uso) das mudanças bruscas de temperatura de origem mágica ou natural, como congelamentos, super aquecimentos, as magias Ataque Térmico, Piromanipulação, etc. Este encanto não protege contra hálitos encantados, nem magias de efeitos eminentemente destrutivos como Bola de Fogo, Dardos de Gelo e etc.",
			alcance: {
				tipo: AlcanceEnum.PESSOAL,
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
			id: "108",
			nome: "Escuridão",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria escuridão parcial com raio máximo de 1 metro. A escuridão perdura por até 10 rodadas.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Cria escuridão parcial com raio máximo de 3 metros. A escuridão perdura por até 30 rodadas.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Cria escuridão total com raio máximo de 1 metro. A escuridão perdura por até 10 rodadas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Cria escuridão parcial com raio máximo de 10 metros. A escuridão perdura por até 10 minutos.",
					nivel: 5,
				},
				{
					id: "4",
					descricao:
						"Cria escuridão total com raio máximo de 3 metros. A escuridão perdura por até 30 rodadas.",
					nivel: 6,
				},
				{
					id: "5",
					descricao:
						"Cria escuridão parcial com raio máximo de 50 metros. A escuridão perdura por até 1 hora.",
					nivel: 7,
				},
				{
					id: "6",
					descricao:
						"Cria escuridão total com raio máximo de 10 metros. A escuridão perdura por até 10 minutos.",
					nivel: 8,
				},
				{
					id: "7",
					descricao:
						"Cria escuridão parcial com raio máximo de 300 metros. A escuridão perdura por até 10 horas.",
					nivel: 9,
				},
				{
					id: "8",
					descricao:
						"Cria escuridão total com raio máximo de 30 metros. A escuridão perdura por até 1 hora.",
					nivel: 10,
				},
			],
			descricao: `Este encantamento concede ao evocador a capacidade de impedir a criação e a propagação da luz em certas áreas, criando escuridão parcial ou mesmo total nestas áreas. A escuridão criada não poderá ser penetrada por nenhum tipo de visão sem o auxilio de magia.

Esta magia pode criar dois tipos de escuridão: a parcial e a total. A escuridão parcial concede a qualquer criatura que esteja em sua área os ajustes recebidos por cegueira parcial. Do mesmo modo a escuridão total faz com que o Ajuste por cegueira total seja recebido. Mesmo as criaturas que têm a capacidade de ver no escuro, como por exemplo os anões e os orcos, são afetados normalmente por esta escuridão mágica.

O feitiço afeta um volume esférico, cujo raio máximo é determinado pela Dificuldade do Efeito usado. O evocador pode determinar qualquer raio para o volume de escuridão, desde poucos centímetros até o raio máximo (indicado na descrição do efeito).

O evocador pode jogar esta magia sobre uma área ou sobre uma criatura. Ao lançar o feitiço sobre uma área, o evocador cria um volume imóvel de escuridão, e todos os que estiverem na área receberão as penalidades apropriadas. Não existe Resistência à Magia, pois o feitiço não foi lançado especificamente contra ninguém.

Lançar este encantamento sobre uma criatura tem vantagens e desvantagens. Caso a criatura falhe na sua Resistência à Magia, o volume de escuridão ficará vinculado a ela, acompanhando seus movimentos. Isto normalmente faz que a vítima receba os ajustes apropriados.`,
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
			id: "109",
			nome: "Esplendor",
			niveis: [
				{
					id: "0",
					descricao:
						"Os alvos terão uma primeira impressão boa em relação ao evocador. A duração é de 5 minutos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Os alvos terão a melhor reação imaginável na primeira impressão em relação ao evocador. Este pode pedir um pequeno favor, desde que seja algo razoável. A duração é de 30 minutos.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Os alvos passarão a considerar o evocador alguém com alguma importância e atenderão à seus desejos, desde que não contrariem sua índole, seus deveres ou o prejudiquem de alguma forma. A duração é de uma hora.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Os alvos passarão a considerar como verdade tudo o evocador disser e procurarão atender à seus desejos, desde que não contrariem sua índole ou o prejudiquem muito. A duração é de 8 horas",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Os alvos passarão a considerar como absoluta verdade o que o evocador disser e atenderão da melhor forma possível seus desejos, mesmo que contrariem sua índole ou o prejudiquem. A duração é de 1 dia.",
					nivel: 9,
				},
			],
			descricao: `Com este encanto, o sacerdote evoca sobre si a benção de Lena fazendo que todo o esplendor da deusa se revele no mundo material. Todos os seres inteligentes que olharem para o sacerdote devem fazer um teste de RM. Os que não passarem no teste são afetados imediatamente e por pelo menos uma rodada ficarão fascinados pela a beleza e perfeição do evocador. Este fascínio fará que eles passem a ter admiração pelo sacerdote e tudo aquilo que ele falar ou fazer parecerá correto. Além deste fascínio uma serie de efeitos extras passam a afetar aqueles que falharam na magia conforme o nível do efeito evocado.

Esta magia deve ser evocada fora de combate. A cada minuto um novo teste de RM deve ser refeito pelos que tiverem resistido, mas para isso o Sacerdote deve ser o mais calmo e cordial possível. Ações de agressão a qualquer um, ou um combate sendo iniciado fará que automaticamente a magia se encerre. Esta magia é similar a magia Amizade, mas no lugar de considerar o Sacerdote um amigo ele será considerado como uma pessoa importante e que deve ser respeitada, além disto esta magia é extremamente discreta e só um teste de Misticismo (Muito difícil) indicará que ela foi feita. Após o termino da magia os que foram afetados pela magia não perceberão o que aconteceu.

Atenção: Para que esta magia funcione é necessário que seja haja interpretação e o jogador deve dizer em voz alta a fala de seu personagem. Isto será decisivo para que o mestre possa avaliar o que é razoável ou não de acordo com o efeito evocado.

OBS: para as regras de primeira impressão consulto o tópico Primeira Impressão no capítulo de Regras Complementares do Livro de Regras.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RODADA,
			},
		},
		{
			id: "110",
			nome: "Esquecimento",
			niveis: [
				{
					id: "0",
					descricao:
						"Permite ao evocador apagar os fatos dos últimos 5 minutos da memória da vítima. A duração é de 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Permite ao evocador apagar os fatos da última hora da memória da vítima. A vítima fica atordoada por uma rodada. A duração é de uma semana.",
					nivel: 2,
				},
				{
					id: "2",
					descricao:
						"Permite ao evocador apagar os fatos das últimas 24 horas da memória da vítima. A vítima fica atordoada por 2 rodadas. A duração é de 1 mês.",
					nivel: 4,
				},
				{
					id: "3",
					descricao:
						"Este nível permite ao evocador apagar os fatos dos últimos 7 dias da memória. A vítima fica atordoada por 5 rodadas. A duração é de 6 meses.",
					nivel: 6,
				},
				{
					id: "4",
					descricao:
						"Este nível permite ao evocador apagar os fatos dos últimos 30 dias da memória da vítima. A vítima fica atordoada por 10 rodadas. A duração é de 1 ano e 1 dia",
					nivel: 8,
				},
				{
					id: "5",
					descricao:
						"Neste nível o mago é capaz de causar amnésia total em um indivíduo. O ser afetado perde a capacidade de lançar magias e usar habilidades que não sejam eminentemente físicas. As vítimas não se lembram nem mesmo do próprio nome, possuindo apenas a capacidade de falar em sua língua nativa. A duração é de 13 anos.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto o mago pode manipular a memória de suas vítimas, apagando fatos recentes de suas vidas caso falhem em um teste de resistência a magia. Em níveis altos Esquecimento pode até mesmo causar amnésia total sendo, por isso, uma magia muito temida.

Note que embora esta magia não seja discreta, a vítima não saberá que foi enfeitiçada caso falhe na sua resistência, pois não se lembrará do período em que o mago evocou a magia Esquecimento.

Caso uma quebra de encanto seja feito sobre a vítima ela recuperará sua memória. Em alguns efeitos após a magia ser evocada e a vítima falhe em sua resistência ela ficará atordoada, sem saber bem o que está acontecendo ao seu redor, impedindo ela de fazer ações durante este período.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 10,
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
			id: "111",
			nome: "Explosão Mística",
			niveis: [
				{
					id: "0",
					descricao: "Causa dano máximo 4 em apenas uma vítima.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Causa dano máximo 8 em apenas uma vítima.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Causa dano máximo 8 em até duas vítimas.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Causa dano máximo 12 em até duas vítimas.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Causa dano máximo 12 em até três vítimas.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Causa dano máximo 16 em até três vítimas.",
					nivel: 10,
				},
			],
			descricao: `Com esta magia, o mago alquímico ataca a vítima, procurando ferí-la magicamente. Na prática este ataque ao invés de acertar a EH ou a EF da vítima, acerta o seu karma. Não é nem necessário dizer que esta magia é o terror de qualquer mago. Explosão mística funciona exatamente como as outras magias de ataques físicos, como “Meteoros” e “Dardos de Gelo”, no entanto se o resultado for crítico, conta-se como um ataque de maior porcentagem possível, e a vítima ficará impedida de realizar qualquer feitiço na rodada seguinte. Depois poderá agir normalmente. Após evocar o encanto, uma grande explosão ocorre ao redor da vítima, como se formasse um anel de fogo ao seu redor, que se desfaz rapidamente. A explosão não afeta nenhuma outra pessoa a não ser a vítima escolhida pelo mago, ainda que esteja próxima da mesma. A falha segue normalmente, só devendo atentar que caso saia à falha em que o próprio desafortunado se fere, no caso desta magia o mago será ferido no seu próprio karma. Observe que com esse encanto não é possível causar dano em itens que possuam focus. Assim embora possa destruir o karma de um mago, não pode fazer o mesmo com seu medalhão que lhe concede focus +5, por exemplo. O karma que este mago perdeu pode ser recuperado normalmente.

Em alguns níveis desta magia é possível acertar mais de uma criatura com apenas uma evocação.`,
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
