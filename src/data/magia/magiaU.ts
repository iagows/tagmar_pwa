import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { type Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.unidadeNatural,
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
			descricao:
				"Com esse milagre, o sacerdote de Vet é capaz de se unir a natureza, como se fosse um só com ela. Esse milagre, só funciona em locais aonde exista grande vegetação, como em florestas ou bosques. Observe que uma vez unido a natureza, o sacerdote deverá necessariamente perder 1 rodada para romper essa ligação e voltar ao seu estado normal. O sacerdote poderá escolher romper antes da duração da magia acabar, mas de uma ou de outra forma ele sempre gastará uma rodada para romper a ligação, o que impede de se realizar ataques de surpresas. Essas observações valem para os efeitos 1,3 e 5. Já para os efeitos 7 e 9 não é necessário o rompimento, já que a duração da magia é instantânea nesses casos, ou seja, o rompimento é automático.",
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
