import { z } from "zod";
import AlcanceDTO from "../AlcanceDTO";
import DinheiroDTO from "../DinheiroDTO";
import DuracaoDTO from "../DuracaoDTO";
import EvocacaoDTO from "../EvocacaoDTO";

const AbstractMagicDTO = z.object({
	custo: DinheiroDTO.optional(),
	alcance: AlcanceDTO.optional(),
	duracao: DuracaoDTO.optional(),
	evocacao: EvocacaoDTO.optional(),
});

type AbstractMagic = z.infer<typeof AbstractMagicDTO>;

export default AbstractMagicDTO;
export type { AbstractMagic };
