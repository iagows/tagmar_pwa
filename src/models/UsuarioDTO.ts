import { z } from "zod";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";

const UsuarioDTO = z
	.object({
		image: z.optional(z.string()),
		email: z.optional(z.string().email()),
		credential: z.optional(z.string()),
		googleId: z.optional(z.string()),
	})
	.merge(IdDTO.IdDTO)
	.merge(NameDTO.NameDTO);

type Usuario = z.infer<typeof UsuarioDTO>;

export default UsuarioDTO;
export type { Usuario };
