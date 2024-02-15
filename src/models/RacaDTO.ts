import { z } from "zod";
import DTO from "./DTO";

const RacaDTO = DTO.extend(
	{
		aura: z.number(),
		peso: z.number(),
		forca: z.number(),
		fisico: z.number(),
		altura: z.number(),
		carisma: z.number(),
		efBasica: z.number(),
		percepcao: z.number(),
		agilidade: z.number(),
		velocidade: z.number(),
		inteligencia: z.number(),
	},
);

type Raca = z.infer<typeof RacaDTO>;

export default RacaDTO;
export type { Raca };
