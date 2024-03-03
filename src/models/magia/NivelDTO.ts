import { z } from "zod";
import AlcanceDTO from "../AlcanceDTO";
import GenericDTO from "../DTO";
import DinheiroDTO from "../DinheiroDTO";
import DuracaoDTO from "../DuracaoDTO";

const NivelBase = GenericDTO.extend({
	nivel: z.number().min(1),
	dinheiro: DinheiroDTO.optional(),
	alcance: AlcanceDTO.optional(),
	duracao: DuracaoDTO.optional(),
	descricao: z.string(),
});

type NivelBaseType = z.infer<typeof NivelBase> & {
	secundario?: NivelBaseType;
};

const NivelDTO = NivelBase.extend({
	secundario: z.lazy(() => NivelDTO.optional()),
}) as z.ZodType<NivelBaseType>;

type Nivel = NivelBaseType;

export default NivelDTO;
export type { Nivel };
