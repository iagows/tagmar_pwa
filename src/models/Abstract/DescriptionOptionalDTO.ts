import { z } from "zod";

export namespace AbstractDTO {
	export const DescriptionOptionalDTO = z.object({
		descricao: z.string().optional(),
	});

	export type DescriptionOptionalType = z.infer<typeof DescriptionOptionalDTO>;
}
