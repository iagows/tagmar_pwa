import { z } from "zod";
import DTO from "./DTO";

const UsuarioDTO = DTO.extend({
	image: z.string(),
	email: z.string(),
	fichas: z.number(),
});

type Usuario = z.infer<typeof UsuarioDTO>;

export default UsuarioDTO;
export type { Usuario };
