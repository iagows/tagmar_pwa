import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { EvocacaoEnum } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.quebraDeEncantos,
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
