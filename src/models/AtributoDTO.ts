import { z } from "zod";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";

export enum AtributoEnum {
	AGILIDADE = "Agilidade",
	AURA = "Aura",
	CARISMA = "Carisma",
	FISICO = "Físico",
	FORCA = "Força",
	INTELECTO = "Intelecto",
	PERCEPCAO = "Percepção",
}

const AtributoDTO = z
	.object({
		id: z.nativeEnum(AtributoEnum),
		valor: z.string(),
	})
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Atributo = z.infer<typeof AtributoDTO>;

export default AtributoDTO;
export type { Atributo };
