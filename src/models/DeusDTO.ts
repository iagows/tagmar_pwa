import { z } from "zod";
import { AbstractDTO as DescDTO } from "./Abstract/DescriptionDTO";

export enum DeusEnum {
	BLATOR = "Blator",
	CREZIR = "Crezir",
	CRISAGOM = "Crisagom",
	SEVIDES = "Sevides",
	GANIS = "Ganis",
	MAIRA = "Maira",
	SELIMOM = "Selimom",
	LENA = "Lena",
	PLANDIS = "Plandis",
	CAMBU = "Cambu",
	CRUINE = "Cruine",
	PALIER = "Palier",
	PAROM = "Parom",
}

const DeusDTO = z
	.object({
		id: z.nativeEnum(DeusEnum),
	})
	.merge(DescDTO.DescriptionDTO);

type Deus = z.infer<typeof DeusDTO>;

export default DeusDTO;
export type { Deus };
