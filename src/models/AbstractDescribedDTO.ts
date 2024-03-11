import { z } from "zod";
import DTO from "./DTO";

const AbstractDescribedDTO = DTO.extend({
	descricao: z.optional(z.string()).default(""),
});

type AbstractDescribed = z.infer<typeof AbstractDescribedDTO>;

export default AbstractDescribedDTO;
export type { AbstractDescribed };
