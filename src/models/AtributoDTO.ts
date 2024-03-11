import { z } from "zod";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";

export enum AtributoEnum {
	FORCA = "Força",
}

const AtributoDTO = z
	.object({
		idAtributo: z.nativeEnum(AtributoEnum),
		valor: z.string(),
	})
	.merge(IdDTO.IdDTO)
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Atributo = z.infer<typeof AtributoDTO>;

export default AtributoDTO;
export type { Atributo };
