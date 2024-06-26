import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";
import { AbstractDTO as IdDTO } from "./Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "./Abstract/NameDTO";
import { ProfissaoEnum } from "./ProfissaoDTO";
import { RacaEnum } from "./RacaDTO";

export enum ModoDaFicha {
	CRIACAO = "Criação",
	EVOLUCAO = "Evolução",
	VISUALIZACAO = "Visualização",
}

const FichaDTO = z
	.object({
		xp: z.number(),
		modo: z.nativeEnum(ModoDaFicha),
		raca: z.nativeEnum(RacaEnum),
		nivel: z.number(),
		criacao: z.string(),
		narrador: z.string(),
		isFavorito: z.boolean().optional(),
		profissao: z.nativeEnum(ProfissaoEnum),
		// atributos: z.map(z.nativeEnum(AtributoEnum), z.number()),
		// habilidades: z.map(z.nativeEnum(HabilidadeEnum), z.number()),
		ultimaVisualizacao: z.string(),
	})
	.merge(IdDTO.IdDTO)
	.merge(NameDTO.NameDTO)
	.merge(DescDTO.DescriptionDTO);

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
