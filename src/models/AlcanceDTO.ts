import { z } from "zod";
import { getPlural } from "../util/functions";

export enum AlcanceEnum {
	VARIAVEL = "Variável",
	PESSOAL = "Pessoal",
	TOQUE = "Toque",
	METRO = "metro",
	QUILOMETRO = "quilômetro",
}

const AlcanceDTO = z.object({
	valor: z.number().min(0).default(0),
	idAlcance: z.nativeEnum(AlcanceEnum),
	isRaio: z.boolean().optional(),
	isQuadrado: z.boolean().optional(),
	outraDescricao: z.string().optional(),
});

type Alcance = z.infer<typeof AlcanceDTO>;

export default AlcanceDTO;
export type { Alcance };

const basicValue = (
	valor: number,
	tipo: AlcanceEnum,
	complemento = "",
): string => {
	const plural: string = getPlural(valor);
	const sufix: string = complemento !== "" ? ` ${complemento}` : "";

	return `${valor} ${tipo}${plural}${sufix}`;
};

export const alcanceToString = (alcance: Alcance): string => {
	if (alcance.outraDescricao) {
		return alcance.outraDescricao;
	}

	const plural: string = getPlural(alcance.valor);
	const complemento: string = alcance.isQuadrado
		? `quadrado${plural}`
		: alcance.isRaio
		  ? "de raio"
		  : "";

	return basicValue(alcance.valor, alcance.idAlcance, complemento);
};
