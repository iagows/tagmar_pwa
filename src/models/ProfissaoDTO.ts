import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import HabilidadeDTO from "./HabilidadeDTO";
import RacaDTO from "./RacaDTO";

export enum ProfissaoEnum {
	BARDO = "Bardo",
	GUERREIRO = "Guerreiro",
	LADINO = "Ladino",
	MAGO = "Mago",
	RASTREADOR = "Rastreador",
	SACERDOTE = "Sacerdote",
}

const ProfissaoDTO = z
	.object({
		id: z.nativeEnum(ProfissaoEnum),
		ehBasica: z.boolean(),
		habilidadeIdAperfeicoada: HabilidadeDTO,
		racasNaoPermitidas: z.array(RacaDTO),
		pontosAquisicaoHabilidade: z.number(),
		cdTipoHabilidadePenalizada: z.optional(z.array(HabilidadeDTO)),
	})
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Profissao = z.infer<typeof ProfissaoDTO>;

export default ProfissaoDTO;
export type { Profissao };
