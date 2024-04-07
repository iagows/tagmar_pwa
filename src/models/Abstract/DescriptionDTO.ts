import { z } from "zod";

export namespace AbstractDTO {
	export const DescriptionDTO = z.object({
		descricao: z.string(),
	});

	export type DescriptionType = z.infer<typeof DescriptionDTO>;
}
