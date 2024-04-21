import { z } from "zod";

const PrivacidadeDTO = z.object({
	termos: z.array(
		z.object({
			vigor: z.string(),
			linhas: z.array(z.string()),
		}),
	),
});

type Privacidade = z.infer<typeof PrivacidadeDTO>;

export default PrivacidadeDTO;
export type { Privacidade };
