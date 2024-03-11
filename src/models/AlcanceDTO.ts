import { z } from "zod";
import { StringUtil } from "../util/stringHelp";
import AbstractMagicInfoDTO from "./magia/AbstractMagicInfoDTO";

export enum AlcanceEnum {
	VARIAVEL = "Variável",
	PESSOAL = "Pessoal",
	TOQUE = "Toque",
	METRO = "metro",
	QUILOMETRO = "quilômetro",
}

const AlcanceDTO = AbstractMagicInfoDTO(AlcanceEnum).extend({
	isRaio: z.boolean().optional(),
	isQuadrado: z.boolean().optional(),
});

type Alcance = z.infer<typeof AlcanceDTO>;

export default AlcanceDTO;
export type { Alcance };

const basicValue = (tipo: AlcanceEnum, valor = 0, complemento = ""): string => {
	const plural: string = StringUtil.getPlural(valor);
	const sufix: string = complemento !== "" ? ` ${complemento}` : "";

	return `${valor} ${tipo}${plural}${sufix}`;
};

export const alcanceToString = (alcance: Alcance): string => {
	if (alcance.descricao) {
		return alcance.descricao;
	}
	if (
		[AlcanceEnum.TOQUE, AlcanceEnum.PESSOAL, AlcanceEnum.VARIAVEL].includes(
			alcance.tipo,
		)
	) {
		return alcance.tipo;
	}

	const plural: string = StringUtil.getPlural(alcance.valor ?? 0);
	const complemento: string = alcance.isQuadrado
		? `quadrado${plural}`
		: alcance.isRaio
		  ? "de raio"
		  : "";

	return basicValue(alcance.tipo, alcance.valor, complemento);
};
