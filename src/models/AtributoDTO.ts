import { z } from "zod";
import AbstractNamedDTO from "./AbstractNamedDTO";

export enum AtributoEnum {
	FORCA = "Força",
}

const AtributoDTO = AbstractNamedDTO.extend({
	idAtributo: z.nativeEnum(AtributoEnum),
	valor: z.string(),
});

type Atributo = z.infer<typeof AtributoDTO>;

export default AtributoDTO;
export type { Atributo };
