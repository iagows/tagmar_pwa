import { z } from "zod";
import DTO from "./DTO";

export enum AtributoEnum {
	FORCA = "Força",
}

const AtributoDTO = DTO.extend({
	idAtributo: z.nativeEnum(AtributoEnum),
	valor: z.string(),
});

type Atributo = z.infer<typeof AtributoDTO>;

export default AtributoDTO;
export type { Atributo };
