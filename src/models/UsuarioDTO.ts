import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import FichaDTO from "./FichaDTO";

const UsuarioDTO = z
	.object({
		image: z.optional(z.string()),
		email: z.optional(z.string().email()),
		fichas: z.array(FichaDTO).default([]),
	})
	.merge(IdDTO.IdDTO)
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Usuario = z.infer<typeof UsuarioDTO>;

export default UsuarioDTO;
export type { Usuario };
