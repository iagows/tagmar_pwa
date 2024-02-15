import { z } from "zod";
import GenericDTO from "./DTO";

const FichaDTO = GenericDTO.extend({
	xp: z.number(),
	raca: z.string(),
	nivel: z.number(),
	criacao: z.date(),
	classe: z.string(),
	narrador: z.string(),
});

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
