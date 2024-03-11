import { z } from "zod";

const DinheiroDTO = z.object({
	ouro: z.number().min(0).optional(),
	prata: z.number().min(0).optional(),
	cobre: z.number().min(0).optional(),
	descricao: z.string().optional(),
});

type Dinheiro = z.infer<typeof DinheiroDTO>;

export default DinheiroDTO;
export type { Dinheiro };
