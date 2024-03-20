import { AlcanceEnum } from "../../models/AlcanceDTO";
import { DuracaoEnum } from "../../models/DuracaoDTO";
import { EvocacaoEnum } from "../../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../../models/magia/MagiaDTO";

export namespace Magias {
	export const lista: Magia[] = [
		{
			id: MagiaEnum.necroanimacao,
			nome: "Necroanimação",
			niveis: [
				{
					id: "0",
					descricao: "Anima 3 corpos por 1 dia.",
					nivel: 1,
				},
				{
					id: "1",
					descricao: "Anima 7 corpos por 3 dias.",
					nivel: 2,
				},
				{
					id: "2",
					descricao: "Anima 15 corpos por 10 dias.",
					nivel: 4,
				},
				{
					id: "3",
					descricao: "Anima 30 corpos por 15 dias.",
					nivel: 6,
				},
				{
					id: "4",
					descricao: "Anima 60 corpos por 1 mês.",
					nivel: 8,
				},
				{
					id: "5",
					descricao: "Anima 100 corpos por 2 meses.",
					nivel: 10,
				},
			],
			descricao: `Permite que evocador anime certo número de corpos como esqueletos ou zumbis. O número de corpos animados e o tempo que eles permanecem animados dependem do efeito utilizado. Esta magia só pode ser usada em corpos humanóides de tamanho entre um humano e um pequenino.

O tipo de morto-vivo animado dependerá do estado de decomposição dos corpos usados, a critério do Mestre. Os corpos serão animados como esqueletos e zumbis com estatísticas regulares, a despeito de características excepcionais (Ex: Força, Agilidade, Estágio, etc) possuídas em vida.

Quando a duração deste feitiço se esgotar todos os corpos animados com seu uso caem inertes em uma rodada. Não é possível se prolongar a duração do feitiço nem evocá-lo duas vezes sobre o mesmo corpo (caso isto seja tentado, os materiais são gastos, mas não se obtém nenhum efeito).

Os mortos-vivos criados estão sobre controle total do evocador; eles obedecerão apenas ao místico. Caso o mesmo morra antes da Duração acabar, os corpos se transformam em pó em uma rodada. O evocador controlará os corpos de acordo com sua vontade desde que estes estejam dentro do alcance da magia. Caso o mago se afaste dos corpos a uma distancia superior ao alcance da magia, os corpos pararão de agir (ficarão completamente estáticos) até que a distancia necessária ao controle seja retomada.

Os materiais necessários à evocação deste feitiço custam 1 moeda de prata por cada corpo que se deseja animar.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 100,
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
			id: MagiaEnum.necroconhecimento,
			nome: "Necroconhecimento",
			niveis: [
				{
					id: "0",
					descricao:
						"Faz 1 pergunta. Duração 3 rodadas (45 segundos). O ser pode estar morto a até 1 hora.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"Faz 2 perguntas. Duração 6 rodadas (90 segundos). O ser pode estar morto a até 1 dia. O evocador consegue acessar a audição do morto nos últimos 15 segundos de sua vida.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"Idem ao anterior, porém faz 3 perguntas, dura 12 rodadas (3 minutos) e o ser pode estar morto a até 1 mês. Também acessa o olfato e o tempo aumenta para os últimos 30 segundos de sua vida.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"Idem ao anterior, porém faz 5 perguntas, dura 20 rodadas (5 minutos) e o ser pode estar morto a até 1 ano. Também acessa a visão e o tempo aumenta para os últimos 45 segundos de sua vida.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"Idem ao anterior, porém faz 10 perguntas, dura 40 rodadas (10 minutos) e o ser pode estar morto a até 10 anos. Também acessa o tato e o tempo aumenta para os últimos 60 segundos de sua vida.",
					nivel: 9,
				},
			],
			descricao: `Esse encanto permite que o evocador (e apenas ele) interrogue os mortos através de um ritual. É obrigatório que pelo menos a cabeça ou o crânio de quem se deseja informações esteja presente para evocar a magia.

Assim que o ritual estiver completo, o evocador só poderá fazer perguntas ao morto em uma língua em que o morto possa entender. O efeito usado determinará quantas perguntas podem ser feitas, e o tempo máximo que pode durar o interrogatório (que é a duração da magia).

Ainda durante a preparação do ritual, o evocador ouvirá palavras soltas vindas do morto. Essas palavras são os últimos pensamentos dele, são confusos e, nesse momento, nenhuma informação se aproveita. Porém, isso é um sinal que o ritual está quase pronto e o evocador pode identificar qual a língua do morto. A critério do Mestre, pode-se fazer um teste na habilidade Línguas para identificar (se for um idioma diferente}, e se preparar para o interrogatório. Caso o evocador não domine a língua, todo o material e o karma serão perdidos, pois não haverá como se comunicar com o morto em idiomas diferentes (há uma exceção para o encanto funcionar parcialmente mesmo com idiomas diferentes, no nono nível, que será explicada mais adiante).

Pela força da magia, o morto é obrigado a responder, e as respostas serão sempre que ele acreditava ser a verdade, as mais curtas possíveis e nem sempre serão claras. Além disso, apenas mortos que tenham morrido há menos de um determinado tempo podem ser questionados (este tempo também depende do efeito). Se iniciar o ritual com alguém que tenha morrido acima do tempo determinado pelo nível, a magia não funcionará e todo o material será pedido, bem como o karma. Por exemplo, o nível 1 diz que o ser pode estar morto a até 1 hora. O ritual precisa ser iniciado antes do limite de tempo determinado pela magia.

Caso a duração se esgote antes do evocador fazer todas as perguntas que tem direito, o feitiço acaba e as perguntas que não foram feitas são perdidas. O Mestre deve contar a duração do encanto em tempo real.

A partir do terceiro nível e somente após receber a primeira resposta (ativação total da magia}, além de interrogar, o evocador conseguirá acessar os sentidos do morto momentos antes da sua morte (efeito sensorial). Ele pode se utilizar dessas informações para fazer mais perguntas, desde que não ultrapasse o limite de perguntas que contém o nível e que fique dentro do tempo de duração da magia. Nota-se que caso o evocador não fale o mesmo idioma do morto não conseguirá perguntar, consequentemente, não ativará esse efeito. O nono nível é uma exceção, a magia é tão poderosa que se acessa os sentidos antes mesmo de perguntar, logo, se não falar o mesmo idioma não haverá interrogatório, mas ativará o efeito sensorial.

E por fim, os materiais necessários à evocação deste encantamento custam 5 moedas de prata vezes o nível usado.`,
			alcance: {
				tipo: AlcanceEnum.METRO,
				valor: 2,
			},
			duracao: {
				tipo: DuracaoEnum.VARIAVEL,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
		{
			id: MagiaEnum.necropotencia,
			nome: "Necropotência",
			niveis: [
				{
					id: "0",
					descricao:
						"O ser deve estar morto há até 24 horas. O sacerdote ganha +1 em todas as colunas de ataque e dano, além de +1 nas suas resistências físicas e mágicas, e 5 de EH, podendo ir além do seu máximo.",
					nivel: 1,
				},
				{
					id: "1",
					descricao:
						"O ser deve estar morto há até 1 semana. O sacerdote ganha +2 em todas as suas colunas de ataque e dano, além de +2 nas suas resistências físicas e mágicas, e 10 de EH, podendo ir além do seu máximo.",
					nivel: 3,
				},
				{
					id: "2",
					descricao:
						"O ser deve estar morto há até 1 mês. O sacerdote ganha +3 em todas as suas colunas de ataque e dano, além de +3 nas suas resistências físicas e mágicas, e 15 de EH, podendo ir além do seu máximo.",
					nivel: 5,
				},
				{
					id: "3",
					descricao:
						"O ser deve estar morto há até 1 ano e 1 dia. O sacerdote ganha +4 em todas as suas colunas de ataque e dano, além de +4 nas suas resistências físicas e mágicas, e 20 de EH, podendo ir além do seu máximo.",
					nivel: 7,
				},
				{
					id: "4",
					descricao:
						"O ser deve estar morto há até 13 anos. O sacerdote ganha +5 em todas as suas colunas de ataque e dano, além de +5 nas suas resistências físicas e mágicas, e 25 de EH, podendo ir além do seu máximo. Além disso, o sacerdote fica imune a qualquer magia que controle a mente ou maldição.",
					nivel: 10,
				},
			],
			descricao: `Sendo os sacerdotes de Cruine aqueles que mais lidam com a morte, muitas vezes eles se deparam com mortos advindos das mais diversas situações como um ataque de animais, uma peste que assolou uma vila ou até mesmo de um companheiro de lutas que não teve êxito em suas missões.

Apesar de serem justamente os que veem a morte como algo natural e não terrível, os sacerdotes de Cruine podem se indignar; não pela morte propriamente dita de alguém, mas sim a forma como essa pessoa morreu bem como tudo o que a pessoa estava para completar e não conseguiu.

Nesses casos os sacerdotes de Cruine podem se comover e procurar ou vingar a pessoa morta. Caso ela tenha sido morta injustamente (Ex: Morta por traição ou por algum tipo de ritual) ou então cumprir a missão em que a pessoa morta falhou (Ex: Assumir a missão de outro sacerdote de Cruine). Ao fazer isso, Cruine concede poder para o sacerdote vingar a pessoa ou cumprir a missão não completada.

Todos os bônus que o sacerdote recebe servirão apenas para a realização da vingança ou da missão. Qualquer atitude do sacerdote que fuja a isso fará com que os bônus desapareçam até que ele retorne à missão. Entretanto, percalços no caminho ainda podem ser considerados dentro da missão, desde que não se torne o objetivo do sacerdote. Assim, se no caminho da torre do necromante (sua missão é matar o necromante) ele encontra orcos no caminho que o atacam, os bônus valem. Agora se no meio do caminho ele encontra uma criança que diz que os pais foram raptados por orcos e que eles estão em um bosque e o sacerdote decide ajudar, os bônus não valem porque ele está fora do objetivo principal.

Para que o sacerdote utilize o milagre ele precisará encontrar pelo menos o crânio de algum morto. O tempo que a pessoa pode estar morta para que o milagre funcione varia de acordo com o nível da magia. Depois disso, é necessário que a pessoa morta seja necessariamente de boa índole, ou seja, que tenha tido uma vida íntegra; além disso, o sacerdote deverá saber como a pessoa morreu e se ela tinha alguma missão. Muitas vezes se torna impossível descobrir isso de forma normal, por exemplo, se o sacerdote em meio a suas aventuras encontra um crânio no seu caminho, sem ter qualquer indicação de quem teria passado por ali. Entretanto, o sacerdote poderá utilizar o milagre Necroconhecimento para adquirir essa informação, caso não a consiga por meios normais.

Se todas essas restrições forem atendidas, o sacerdote poderá pedir a Cruine através de um ritual que custa 5 moedas de prata vezes o nível do milagre que lhe dê uma ajuda para honrar a memória do morto.

Apesar das grandes restrições deste milagre, o poder recebido pelo sacerdote é devastador. Observe que em todos os níveis o sacerdote ganhará uma EH extra que poderá ir além do seu máximo. Mais do que isso, caso o sacerdote perca a heróica e depois a recupere, ele poderá recuperar também a EH extra.

Exemplo: Um sacerdote de Cruine com 50 de EH evoca Necropotência 3 que concede +10 de EH, totalizando 60. Caso ele lute e perca toda a sua EH na batalha, o sacerdote poderá recuperar essa EH, seja descansando ou por meio de curas, até os 60 de EH e não os 50 iniciais.

Todos os bônus terminarão em 2 semanas ou então quando a missão ou a vingança for completa, o que acontecer primeiro. Além disso, não é possível estar sob mais de uma necropotência ao mesmo tempo, acumulando os efeitos.

Na verdade, o Vingador Negro, o único morto-vivo tolerado pelos deuses, poderia ser considerado uma necropotência evocada pelo próprio Cruine, dando a própria pessoa morta o direito de se vingar ou de cumprir sua missão.`,
			alcance: {
				tipo: AlcanceEnum.TOQUE,
			},
			duracao: {
				tipo: DuracaoEnum.SEMANA,
				valor: 2,
			},
			evocacao: {
				tipo: EvocacaoEnum.RITUAL,
			},
		},
	];
}
