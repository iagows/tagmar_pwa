import { z } from "zod";
import { StringUtil } from "../util/stringHelp";

const DinheiroDTO = z.object({
	ouro: z.number().min(0).optional(),
	prata: z.number().min(0).optional(),
	cobre: z.number().min(0).optional(),
	descricao: z.string().optional(),
});

type Dinheiro = z.infer<typeof DinheiroDTO>;

export default DinheiroDTO;
export type { Dinheiro };

const generatePhrase = (n: number, tipo: string): string => {
	return n > 0 ? `${n} moeda${StringUtil.getPlural(n)} de ${tipo}` : "";
};

export const dinheiroToString = (dinheiro: Dinheiro): string => {
	if (dinheiro.descricao) {
		return dinheiro.descricao;
	}
	const ouro = generatePhrase(dinheiro.ouro ?? 0, "ouro");
	const prata = generatePhrase(dinheiro.prata ?? 0, "prata");
	const cobre = generatePhrase(dinheiro.cobre ?? 0, "cobre");

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
