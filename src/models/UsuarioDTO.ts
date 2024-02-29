import { z } from "zod";
import AbstractNamedDTO from "./AbstractNamedDTO";
import FichaDTO from "./FichaDTO";

const UsuarioDTO = AbstractNamedDTO.extend({
	image: z.optional(z.string()),
	email: z.optional(z.string().email()),
	fichas: z.array(FichaDTO).default([]),
});

type Usuario = z.infer<typeof UsuarioDTO>;

export default UsuarioDTO;
export type { Usuario };
