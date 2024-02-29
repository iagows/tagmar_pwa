import { z } from "zod";

const GenericDTO = z.object({
	id: z.string(),
});

type IDTO = z.infer<typeof GenericDTO>;

export default GenericDTO;
export type { IDTO };
