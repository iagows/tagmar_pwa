import { z } from "zod";

const GenericDTO = z.object({
	id: z.string(),
	nome: z.string(),
	descricao: z.optional(z.string()).default(""),
});

type IDTO = z.infer<typeof GenericDTO>;

export default GenericDTO;
export type { IDTO };
