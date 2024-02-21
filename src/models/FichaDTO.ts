import { z } from "zod";
import GenericDTO from "./DTO";
import { RacaEnum } from "./RacaDTO";
import { ProfissaoEnum } from "./ProfissaoDTO";
import { AtributoEnum } from "./AtributoDTO";
import { HabilidadeEnum } from "./HabilidadeDTO";

const FichaDTO = GenericDTO.extend({
	xp: z.number(),
	raca: z.nativeEnum(RacaEnum),
	nivel: z.number(),
	criacao: z.date(),
	narrador: z.string(),
	isFavorito: z.boolean().optional(),
	profissao: z.nativeEnum(ProfissaoEnum),
	atributos: z.map(z.nativeEnum(AtributoEnum), z.number()),
	habilidades: z.map(z.nativeEnum(HabilidadeEnum), z.number()),
});

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
