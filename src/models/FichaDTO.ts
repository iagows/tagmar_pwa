import { z } from "zod";
import GenericDTO from "./DTO";
import { RacaEnum } from "./RacaDTO";

const FichaDTO = GenericDTO.extend({
	xp: z.number(),
	raca: z.nativeEnum(RacaEnum),
	nivel: z.number(),
	criacao: z.date(),
	narrador: z.string(),
	profissao: z.string(),
});

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
