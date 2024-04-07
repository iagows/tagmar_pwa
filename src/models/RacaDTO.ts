import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import { AtributoEnum } from "./AtributoDTO";

export enum RacaEnum {
	ANAO = "anao",
	ELFO_DOURADO = "elfo_dourado",
	ELFO_FLORESTAL = "elfo_florestal",
	HUMANO = "humano",
	MEIO_ELFO = "meio_elfo",
	PEQUENINO = "pequenino",
}

const RacaDTO = z
	.object({
		racaId: z.nativeEnum(RacaEnum),
		aura: z.number(),
		peso: z.number(),
		modificadores: z.array(
			z.object({
				idAtributo: z.nativeEnum(AtributoEnum),
				valor: z.number(),
			}),
		),
	})
	.merge(IdDTO.IdDTO)
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Raca = z.infer<typeof RacaDTO>;

export default RacaDTO;
export type { Raca };
