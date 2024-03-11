import { z } from "zod";

export namespace AbstractDTO {
	export const NameDTO = z.object({
		nome: z.string(),
	});

	export type NameType = z.infer<typeof NameDTO>;
}
