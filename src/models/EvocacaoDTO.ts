import { z } from "zod";
import { StringUtil } from "../util/stringHelp";

export enum EvocacaoEnum {
	VARIAVEL = "Variável",
	INSTANTANEA = "Instantânea",
	RODADA = "rodada",
	MINUTO = "minuto",
	HORA = "hora",
	RITUAL = "Ritual",
}

const EvocacaoDTO = z.object({
	valor: z.number().min(0).optional(),
	tipo: z.nativeEnum(EvocacaoEnum),
	outraDescricao: z.string().optional(),
});

type Evocacao = z.infer<typeof EvocacaoDTO>;

export default EvocacaoDTO;
export type { Evocacao };

export const evocacaoToString = (evocacao: Evocacao): string => {
	if (evocacao.outraDescricao) {
		return evocacao.outraDescricao;
	}

	if (
		[
			EvocacaoEnum.INSTANTANEA,
			EvocacaoEnum.RITUAL,
			EvocacaoEnum.VARIAVEL,
		].includes(evocacao.tipo)
	) {
		return evocacao.tipo;
	}

	if (evocacao.valor) {
		const plural = StringUtil.getPlural(evocacao.valor);
		return `${evocacao.valor} ${evocacao.tipo}${plural}`;
	}
	return evocacao.tipo;
};
