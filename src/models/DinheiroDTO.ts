import { z } from "zod";
import GenericDTO from "./DTO";
import { getPlural } from "../util/functions";

const DinheiroDTO = GenericDTO.extend({
	ouro: z.number().min(0).optional().default(0),
	prata: z.number().min(0).optional().default(0),
	cobre: z.number().min(0).optional().default(0),
});

type Dinheiro = z.infer<typeof DinheiroDTO>;

export default DinheiroDTO;
export type { Dinheiro };

const generatePhrase = (n: number, tipo: string): string => {
	return n > 0 ? `${n} moeda${getPlural(n)} de ${tipo}` : "";
};

export const dinheiroToString = (dinheiro: Dinheiro): string => {
	const ouro = generatePhrase(dinheiro.ouro, "ouro");
	const prata = generatePhrase(dinheiro.prata, "prata");
	const cobre = generatePhrase(dinheiro.cobre, "cobre");

	const arr: string[] = [ouro, prata, cobre].filter(
		(item) => item.trim().length > 0,
	);

	return arr.reduce((acc, curr, index) => {
		if (index === 0) {
			return curr;
		}
		if (index === arr.length - 1) {
			return `${acc} e ${curr}`;
		}
		return `${acc}, ${curr}`;
	}, "");
};
