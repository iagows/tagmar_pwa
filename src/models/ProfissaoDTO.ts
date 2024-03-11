import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
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

const ProfissaoDTO = z
	.object({
		ehBasica: z.boolean(),
		habilidadeIdAperfeicoada: HabilidadeDTO,
		racasNaoPermitidas: z.array(RacaDTO),
		pontosAquisicaoHabilidade: z.number(),
		cdTipoHabilidadePenalizada: z.optional(z.array(HabilidadeDTO)),
	})
	.merge(IdDTO.IdDTO)
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Profissao = z.infer<typeof ProfissaoDTO>;

export default ProfissaoDTO;
export type { Profissao };
