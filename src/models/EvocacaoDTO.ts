import type { z } from "zod";
import { StringUtil } from "../util/stringHelp";
import AbstractMagicInfoDTO from "./magia/AbstractMagicInfoDTO";

export enum EvocacaoEnum {
	VARIAVEL = "Variável",
	INSTANTANEA = "Instantânea",
	RODADA = "rodada",
	MINUTO = "minuto",
	HORA = "hora",
	RITUAL = "Ritual",
}

const EvocacaoDTO = AbstractMagicInfoDTO(EvocacaoEnum);

type Evocacao = z.infer<typeof EvocacaoDTO>;

export default EvocacaoDTO;
export type { Evocacao };

export const evocacaoToString = (evocacao: Evocacao): string => {
	if (evocacao.descricao) {
		return evocacao.descricao;
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
