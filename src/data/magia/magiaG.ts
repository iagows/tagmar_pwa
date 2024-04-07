import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.garras,
			nome: "Garras",
			niveis: [
				{
					id: "0",
					descricao:
						"As garras causam dano máximo (100%) igual a 8; podem ser retraídas como a de um felino; caso atinjam a EF ou 100% da EH, desequilibra o inimigo, levando-o a cair e perder uma rodada.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"As garras causam dano máximo (100%) igual a 12; caso atinjam a EF ou 100% da EH, corta o músculo e causa penalidade de -2 por duas rodadas .",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"As garras causam dano máximo (100%) igual a 16; podem ser retraídas como a de um felino; caso atinjam a EF ou 100% da EH, desarma o adversário e sua arma cai a 3m de distância (caso não tenha arma, idem ao anterior, porém -3).",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"As garras causam dano máximo (100%) igual a 20; caso atinjam a EF ou 100% da EH, acerta um órgão vital e a dor paralisa o adversário por 1 rodada, e causa ajuste de -4 na rodada seguinte à paralisação.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"idem ao anterior, mas a garra pode ser disparada da mão para atingir o adversário à distância (máximo de 25m). Para utilizar novamente, seja em combate de perto ou ataque à distância, precisa esperar 1 rodada (regeneração da garra). Além disto as garras podem ser retraídas como a de um felino; o ajuste de -4 fica por 2 rodadas.",
					nivel: 9,
				},
			],
			descricao: `Com este encantamento, o usuário convoca o espírito de um animal para garras previamente preparadas, que é um material necessário para esta magia. A seguir, a magia força o desenvolvimento de garras a partir das unhas do usuário.

A coluna de ataque com as garras é o nível do evocador nesta magia somado com sua Agilidade, acrescido dos modificadores +3/0/-3 contra as categorias de defesa L, M e P, respectivamente. Ao total do dano, deve-se somar o atributo Força. O místico já pode atacar na mesma rodada que evoca a magia. O nível da magia dirá o efeito extra caso o evocador acerte um golpe na EF ou 100% na EH da vítima. Por ser de origem mística, as garras funcionam em seres que só são atingidos por armas mágicas.

Enquanto durar a magia, todas as tarefas que necessitam de destreza manual tornam-se dois níveis mais difíceis, inclusive o manuseio de algumas armas, a critério do mestre. Se o efeito utilizado permitir, o usuário pode retrair as garras e evitar esta penalidade. O evocador não pode ser desarmado de suas garras (exceto se perder a mão). No entanto, ele pode encerrar a magia a qualquer momento.

O material para preparar essa magia, ou seja, a garra de um animal, deve ser obtida dentro do código de conduta dos rastreadores, caso contrário, o espírito do animal não atenderá a convocação e o encantamento falhará. O preparativo é um ritual com tempo médio de 20 minutos de duração, e deve ser feito em ambiente natural. O místico só precisa ter um par de garras preparada para usar qualquer nível da magia, entretanto, as garras devem ser de um animal que cause, no mínimo, 12 de dano (100%) em garra ou patada. Tipicamente, as garras são penduradas em colares ou pulseiras e não possuem a aparência de uma arma.

Obs: com relação ao efeito extra causado ao adversário caso atinja a EF ou 100% da EH, a magia só tem força para afetar uma vez no mesmo inimigo, por combate. Também não funciona com adversários com o dobro de tamanho do evocador ou com peso superior a 10 vezes do místico.`,
			alcance: { tipo: AlcanceEnum.PESSOAL },
			duracao: { tipo: DuracaoEnum.HORA, valor: 1 },
			evocacao: { tipo: EvocacaoEnum.INSTANTANEA },
		},
		{
			id: MagiaEnum.geoanimacao,
			nome: "Geoanimação",
			niveis: [
				{
					id: "0",
					descricao:
						"Cria uma estátua animada. O ritual custa 2 moedas de ouro.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Cria uma Gárgula, o ritual custa 4 moedas de ouro.",
					nivel: 3,
				},
				{
					id: "2",
					descricao: "Cria um Golem de argila. O ritual custa 6 moeas de ouro.",
					nivel: 5,
				},
				{
					id: "3",
					descricao: "Cria um Homúnculo. O ritual custa 3 moedas de ouro..",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Cria um Golem de pedra. O ritual custa 8 moedas de ouro.",
					nivel: 7,
				},
				{
					id: "5",
					descricao:
						"Cria um Golem de ferro. O ritual custa 10 moedas de ouro.",
					nivel: 9,
				},
			],
			descricao: `Esta magia permite a criação de seres animados como Homúnculos, Gárgulas, estátuas Animadas e Variações de Golens. Para tanto, o mago deve dispor do material necessário ou de uma escultura já pronta. Se não tiver a escultura (estátua}, pode fazer uma com um sucesso em trabalhos manuais ou em metal com dificuldade Média para um trabalho sem muitos detalhes, ou difícil para um bom trabalho. Geomanipulação serve para este fim.

No caso de estátuas animadas, a figura não precisa ser humanóide , mas os parâmetros serão os mesmos. Depois de criados, estes seres devem receber uma missão como guardião de algo ou algum lugar, de onde jamais sairão a menos que alguém o viole ou a magia “Libertação” seja evocada. O homúnculo é a exceção, pois seguirá o mestre. O poder da criatura animada e o custo do ritual variam com o efeito.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.PERMANENTE,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.geomanipulacao,
			nome: "Geomanipulação",
			niveis: [
				{
					id: "0",
					descricao: "Molda até 4 metros cúbicos.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Molda até 10 metros cúbicos.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Molda até 25 metros cúbicos.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Molda até 35 metros cúbicos.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Molda até 45 metros cúbicos.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Molda até 60 metros cúbicos.",
					nivel: 10,
				},
			],
			descricao: `Com este encanto é possível manipular a terra e a pedra (metal não pode ser manipulado) até certa quantidade por rodada. Esta quantidade é determinada pelo volume de terra e/ou pedra manipulada.

A forma dada ao material é determinada pelo evocador. O encanto, contudo, não cria matéria. Além disso, o evocador precisa se concentrar para manter o feitiço. Caso esta concentração seja perdida por qualquer motivo, a magia é quebrada.

Após o final do encanto, as forças físicas voltam a atuar normalmente, e caso a forma determinada pelo evocador seja inviável (não se sustente) a mesma irá quebrar, cair, desmanchar e etc, de acordo com a situação. Caso a forma seja segura e bem construída, ela se manterá intacta.

Note que esta magia não faz com que o evocador tenha total controle sobre a densidade dos materiais, isso significa dizer que caso um evocador queira abrir um buraco em uma parede de pedra, o volume de material retirado da parede não desaparecerá, ele apenas será transferido para outro lugar. Pode-se, no entanto, fundir a terra para se criar pedra, reduzindo assim o volume do material. Ao fazer isso, a quantidade de terra fundida sofrerá uma redução de 50% no seu volume.

Um outro fator que limita essa magia é que o evocador deve ter visão sobre o material a ser manipulado. Ou seja, se o evocador quiser abrir um buraco no chão, ele começará a manipular, primeiramente, a matéria que está disposta superficialmente.

A proximidade da Aura de uma criatura atrapalha esta magia de forma decisiva. Caso o material que está sendo manipulado se aproxime da Aura de um indivíduo a magia será desfeita. Dessa forma Geomanipulação não pode ser usada como uma forma de ataque a criaturas. Note que pelas limitações da magia, torna-se impossível fazer um buraco em baixo de uma criatura já que a matéria superficial que compõem o chão está em contato direto com a aura do indivíduo.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 20,
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
			id: MagiaEnum.geoprotecao,
			nome: "Geoproteção",
			niveis: [
				{
					id: "0",
					descricao: "Absorve até 5 de dano.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Absorve até 10 de dano.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Absorve até 15 de dano.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Absorve até 25 de dano,",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Absorve até 35 de dano.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Absorve até 50 de dano.",
					nivel: 10,
				},
			],
			descricao: `Esta magia oferece ao evocador a possibilidade de proteger a si mesmo ou a alguém escolhido contra dano feito por objetos de origem mineral de natureza sólida.

Este feitiço tem a capacidade de absorver uma quantidade de dano (na EH ou na EF) feita por objetos minerais (espadas, machados, pedras, rochas, etc) sólidos. Materiais de origem vegetal (porretes, cajados, etc) ou mineral líquidos (petróleo pegando fogo, ácidos, fogo grego, etc) não são afetados pelo encanto (fazem dano normal).

A quantidade máxima de dano que o encanto pode absorver depende da Dificuldade do Efeito que se está usando. À medida que o encanto vai absorvendo dano ele vai perdendo potência. Quando o total de dano absorvido fica maior ou igual ao dano máximo que o feitiço pode absorver, o mesmo é quebrado. O dano excedente (se houver algum) é sofrido pelo recipiente do feitiço.

Note que vários usos desta magia não são cumulativos. Caso o evocador utilize mais de um dos efeitos deste encantamento na mesma pessoa ao mesmo tempo, apenas o efeito de maior capacidade de absorção entra em operação.

Este feitiço também protege quem estiver sob seu efeito de quedas. O dano causado pela queda é absorvido normalmente. Note apenas que, apesar do feitiço proteger contra o dano causado pelo peso e impacto das pedras e da terra, ele não concede ao evocador a capacidade de respirar no fundo da terra nem de se mexer no seu interior.`,
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
	];
}
