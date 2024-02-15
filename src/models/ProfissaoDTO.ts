import { z } from "zod";

import DTO from "./DTO";

const ProfissaoDTO = DTO.extend({
	ehBasica: z.number(),
	habilidadeIdAperfeicoada: DTO,
	racasNaoPermitidas: z.array(z.string()), // IDs
	pontosAquisicaoHabilidade: z.number(),
	cdTipoHabilidadePenalizada: z.optional(z.array(z.string())),
});

type Profissao = z.infer<typeof ProfissaoDTO>;

export default ProfissaoDTO;
export type { Profissao };
