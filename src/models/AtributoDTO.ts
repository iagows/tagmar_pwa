import { z } from "zod";
import DTO from "./DTO";

const AtributoDTO = DTO.extend({
	valor: z.string(),
});

type Atributo = z.infer<typeof AtributoDTO>;

export default AtributoDTO;
export type { Atributo };
