import { z } from "zod";
import { StringUtil } from "../util/stringHelp";
import AbstractMagicInfoDTO from "./magia/AbstractMagicInfoDTO";

export enum DuracaoEnum {
	USO = "uso",
	ATIVACAO = "ativação",
	VARIAVEL = "Variável",
	INSTANTANEA = "Instantânea",
	ESPECIAL = "Especial", // ver "visão de batalhas"
	RITUAL = "Ritual",
	SEGUNDO = "segundo",
	RODADA = "rodada",
	COMBATE = "combate",
	CENA = "cena",
	MINUTO = "minuto",
	HORA = "hora",
	DIA = "dia",
	SEMANA = "semana",
	MES = "mês",
	ANO = "ano",
	ANO_E_DIA = "1 ano e 1 dia",
	PERMANENTE = "Permanente",
}

const DuracaoDTO = AbstractMagicInfoDTO(DuracaoEnum);
type Duracao = z.infer<typeof DuracaoDTO>;

export default DuracaoDTO;
export type { Duracao };

export const duracaoToString = (duracao: Duracao): string => {
	if (duracao.descricao) {
		return duracao.descricao;
	}
	if (
		[
			DuracaoEnum.VARIAVEL,
			DuracaoEnum.INSTANTANEA,
			DuracaoEnum.ESPECIAL,
			DuracaoEnum.RITUAL,
			DuracaoEnum.PERMANENTE,
		].includes(duracao.tipo)
	) {
		return duracao.tipo;
	}
	const plural = StringUtil.getPlural(duracao.valor ?? 0);
	return `${duracao.valor} ${duracao.tipo}${plural}`;
};
