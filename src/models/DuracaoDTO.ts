import { z } from "zod";
import { getPlural } from "../util/functions";

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

const DuracaoDTO = z.object({
	valor: z.number().min(0).optional(),
	tipo: z.nativeEnum(DuracaoEnum),
	outraDescricao: z.string().optional(),
});

type Duracao = z.infer<typeof DuracaoDTO>;

export default DuracaoDTO;
export type { Duracao };

export const duracaoToString = (duracao: Duracao): string => {
	if (duracao.outraDescricao) {
		return duracao.outraDescricao;
	}
	const plural = getPlural(duracao.valor ?? 0);
	return `${duracao.valor}${plural} ${duracao.tipo}`;
};
