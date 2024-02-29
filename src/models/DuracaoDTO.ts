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
	RODADAS = "rodada",
	COMBATE = "combate",
	CENA = "cena",
	MINUTOS = "minuto",
	HORAS = "hora",
	DIA = "dia",
	SEMANA = "semana",
	MES = "mês",
	ANO = "ano",
	ANOEDIA = "1 ano e 1 dia",
	PERMANENTE = "Permanente",
}

const DuracaoDTO = z.object({
	valor: z.number().min(0).default(0),
	idDuracao: z.nativeEnum(DuracaoEnum),
	outraDescricao: z.string().optional(),
});

type Duracao = z.infer<typeof DuracaoDTO>;

export default DuracaoDTO;
export type { Duracao };

export const duracaoToString = (duracao: Duracao): string => {
	if (duracao.outraDescricao) {
		return duracao.outraDescricao;
	}
	const plural = getPlural(duracao.valor);
	return `${duracao.valor}${plural} ${duracao.idDuracao}`;
};
