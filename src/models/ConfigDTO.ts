import { z } from "zod";

const ConfigDTO = z.object({
	isBuscaInexata: z.boolean(),
	isDado3dAtivo: z.boolean(),
});

type Config = z.infer<typeof ConfigDTO>;

export default ConfigDTO;
export type { Config };
