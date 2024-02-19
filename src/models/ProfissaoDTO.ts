import { z } from "zod";

import DTO from "./DTO";
import HabilidadeDTO from "./HabilidadeDTO";
import RacaDTO from "./RacaDTO";

export enum ProfissaoEnum {
	BARDO = "bardo",
	GUERREIRO = "guerreiro",
	LADINO = "ladino",
	MAGO = "mago",
	RASTREADOR = "rastreador",
	SACERDOTE = "sacerdote",
}

const ProfissaoDTO = DTO.extend({
	ehBasica: z.boolean(),
	habilidadeIdAperfeicoada: HabilidadeDTO,
	racasNaoPermitidas: z.array(RacaDTO),
	pontosAquisicaoHabilidade: z.number(),
	cdTipoHabilidadePenalizada: z.optional(z.array(HabilidadeDTO)),
});

type Profissao = z.infer<typeof ProfissaoDTO>;

export default ProfissaoDTO;
export type { Profissao };
