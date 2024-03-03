import { z } from "zod";
import AbstractNamedDTO from "../AbstractNamedDTO";
import AlcanceDTO from "../AlcanceDTO";
import DinheiroDTO from "../DinheiroDTO";
import DuracaoDTO from "../DuracaoDTO";
import NivelDTO from "./NivelDTO";
import EvocacaoDTO from "../EvocacaoDTO";

const MagiaDTO = AbstractNamedDTO.extend({
	extra: z.string().array().optional().default([]),
	alcance: AlcanceDTO,
	duracao: DuracaoDTO,
	custo: DinheiroDTO.optional(),
	evocacao: EvocacaoDTO.optional(),
	niveis: NivelDTO.array(),
});

type Magia = z.infer<typeof MagiaDTO>;

export type { Magia };
export default MagiaDTO;
