import { z } from "zod";
import AlcanceDTO from "../AlcanceDTO";
import GenericDTO from "../DTO";
import DinheiroDTO from "../DinheiroDTO";
import DuracaoDTO from "../DuracaoDTO";

const NivelBase = GenericDTO.extend({
	nivel: z.number().min(1),
	dinheiro: DinheiroDTO.nullable(),
	alcance: AlcanceDTO.nullable(),
	duracao: DuracaoDTO.nullable(),
});
type NiveBaseType = z.infer<typeof NivelBase> & {
	secundario?: NiveBaseType;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const NivelDTO: any = NivelBase.extend({
	secundario: z.lazy(() => NivelDTO.optional()),
});

type Nivel = NiveBaseType;

export default NivelDTO;
export type { Nivel };
