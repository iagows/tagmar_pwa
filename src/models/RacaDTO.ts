import { z } from "zod";
import DTO from "./DTO";
import { AtributoEnum } from "./AtributoDTO";

export enum RacaEnum {
	ANAO = "anao",
	ELFO_DOURADO = "elfo_dourado",
	ELFO_FLORESTAL = "elfo_florestal",
	HUMANO = "humano",
	MEIO_ELFO = "meio_elfo",
	PEQUENINO = "pequenino",
}

const RacaDTO = DTO.extend({
	racaId: z.nativeEnum(RacaEnum),
	aura: z.number(),
	peso: z.number(),
	modificadores: z.array(
		z.object({
			idAtributo: z.nativeEnum(AtributoEnum),
			valor: z.number(),
		}),
	),
});

type Raca = z.infer<typeof RacaDTO>;

export default RacaDTO;
export type { Raca };
