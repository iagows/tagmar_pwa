import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import { AtributoEnum } from "./AtributoDTO";

export enum RacaEnum {
	ANAO = "Anão",
	ELFO_DOURADO = "Elfo Dourado",
	ELFO_FLORESTAL = "Elfo Florestal",
	HUMANO = "Humano",
	MEIO_ELFO = "Meio Elfo",
	PEQUENINO = "Pequenino",
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
