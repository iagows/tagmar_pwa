import { z } from "zod";
import AbstractNamedDTO from "./AbstractNamedDTO";

export enum HabilidadeDef {
	ARMADURA = "armadura",
	CAVALO = "cavalo",
	ELMO = "elmo",
	PROFESSOR = "professor",
	PROIBIDO = "proibido",
	NORMAL = "normal",
}

export enum HabilidadeEnum {
	CARPINTARIA = "Carpintaria",
}

const HabilidadeDTO = AbstractNamedDTO.extend({
	valor: z.string(),
	idAtributo: z.nativeEnum(HabilidadeEnum),
	modificador: z.optional(z.nativeEnum(HabilidadeDef)),
});

type Habilidade = z.infer<typeof HabilidadeDTO>;

export default HabilidadeDTO;
export type { Habilidade };
