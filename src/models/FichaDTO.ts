import { z } from "zod";
import AbstractNamedDTO from "./AbstractNamedDTO";
// import { AtributoEnum } from "./AtributoDTO";
// import { HabilidadeEnum } from "./HabilidadeDTO";
import { ProfissaoEnum } from "./ProfissaoDTO";
import { RacaEnum } from "./RacaDTO";

const FichaDTO = AbstractNamedDTO.extend({
	xp: z.number(),
	raca: z.nativeEnum(RacaEnum),
	nivel: z.number(),
	criacao: z.string(),
	narrador: z.string(),
	isFavorito: z.boolean().optional(),
	profissao: z.nativeEnum(ProfissaoEnum),
	// atributos: z.map(z.nativeEnum(AtributoEnum), z.number()),
	// habilidades: z.map(z.nativeEnum(HabilidadeEnum), z.number()),
});

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
