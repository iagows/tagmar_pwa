import { z } from "zod";
import DTO from "./DTO";

const AbstractNamedDTO = DTO.extend({
	nome: z.string(),
	descricao: z.optional(z.string()).default(""),
});

type AbstractNamed = z.infer<typeof AbstractNamedDTO>;

export default AbstractNamedDTO;
export type { AbstractNamed };
