import { AlcanceEnum } from "../models/AlcanceDTO";
import { DuracaoEnum } from "../models/DuracaoDTO";
import { Magia } from "../models/magia/MagiaDTO";

const MagiasA: Magia[] = [
	{
		id: "1",
		nome: "Abrigo",
		descricao: `Essa magia desenvolve um senso de sobrevivência no místico, possibilitando encontrar a melhor forma de se abrigar contra os rigores da natureza. O evocador será direcionado a um local seguro (abrigo) ou saberá a melhor atitude a ser tomada diante das calamidades naturais, mas todas as opções de refúgio devem estar dentro da área de 5 km (alcance da magia).

Por exemplo, caso o místico precise se proteger da noite com um abrigo físico, a magia indicará a direção onde encontrar (pode ser uma caverna, um espaço nas raízes de uma imensa árvore, etc.). Caso não possua abrigos ao alcance da magia, o evocador será informado e a magia fornecerá redução na dificuldade da habilidade Sobrevivência no tocante à construção de um abrigo, além de indicar o local menos provável de ser atacado pela fauna e flora local para construir (copa da árvore ou em cima do monte, por exemplo). O Mestre julgará o ambiente e indicará o local. Para esse efeito, a evocação é de 1 rodada.

Por outro lado, se o evocador, sem o auxílio da magia, encontrar um abrigo físico, esse encanto poderá ser usado para identificar se é seguro. A resposta virá na forma de um pressentimento e basta usar o nível de acordo com a quantidade de pessoas que o abrigo encontrado suporta. Por exemplo:

- encontrou um abrigo para até 3 pessoas: usa o nível 1.
- encontrou um abrigo até 6 pessoas ou 3 pessoas e suas montarias: usa o nível 5
- encontrou um abrigo que comporta até 10 pessoas ou 5 pessoas e suas montarias, ou mais (limitado a uma área de 20m de raio): usa o nível 9.

Mas se o evocador estiver perdido em uma tempestade de areia, por exemplo, a magia indicará a melhor atitude a ser tomada (ex.: “fique deitado” ou “corra para trás”). A mensagem virá na forma da percepção do evocador por ter analisado a situação, e o nível da magia informará a quantidade de palavras que contém a mensagem (o Mestre deve ter em mente a melhor opção para sobreviver). É preciso deixar claro que a resposta não isenta dano, doença, etc., mas será a melhor escolha que reduzirá ao máximo as consequências. Para esse efeito, a evocação é instantânea.

A partir do quinto nível, a magia tornará o abrigo camuflado, mais difícil de ser detectado. A quantidade de pessoas que pode ser abrigada varia com a dificuldade do feitiço. Este encanto pode ser usado apenas em Ambiente Natural e precisa escolher um efeito na hora de lançar a magia.
`,
		alcance: {
			idAlcance: AlcanceEnum.QUILOMETRO,
			valor: 5,
		},
		duracao: {
			idDuracao: DuracaoEnum.USO,
			valor: 1,
		},
		niveis: [],
		extra: [
			"Os abrigos encontrados serão seguros e sem perigos. Ou seja, protegerá dos perigos ambientais (chuvas, sol, terremotos, etc.) e não a ameaças naturais em seu interior (ursos, orcos, aranhas, etc.). Caso algum inimigo o encontre, não oferecerá proteção extra. Como também não identifica perigo sobrenatural.",
		],
	},
];

export const MAGIAS: Magia[] = [...MagiasA];
