import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";

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

const HabilidadeDTO = z
	.object({
		valor: z.string(),
		id: z.nativeEnum(HabilidadeEnum),
		modificador: z.optional(z.nativeEnum(HabilidadeDef)),
	})
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Habilidade = z.infer<typeof HabilidadeDTO>;

export default HabilidadeDTO;
export type { Habilidade };
