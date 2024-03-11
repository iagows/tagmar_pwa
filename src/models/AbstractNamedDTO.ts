import { z } from "zod";
import AbstractDescribedDTO from "./AbstractDescribedDTO";

const AbstractNamedDTO = AbstractDescribedDTO.extend({
	nome: z.string(),
});

type AbstractNamed = z.infer<typeof AbstractNamedDTO>;

export default AbstractNamedDTO;
export type { AbstractNamed };
