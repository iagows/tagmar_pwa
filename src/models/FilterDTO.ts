import { z } from "zod";
import { ProfissaoEnum } from "./ProfissaoDTO";

const FilterDTO = z.object({
	nome: z.string(),
	letra: z.string(),
	profissao: z.array(z.nativeEnum(ProfissaoEnum)),
});

type Filter = z.infer<typeof FilterDTO>;

export default FilterDTO;
export type { Filter };
