import { z } from "zod";
import AbstractDescribedDTO from "../AbstractDescribedDTO";
import AbstractMagicDTO from "./AbstractMagicDTO";

const NivelBase = AbstractDescribedDTO.extend({
	nivel: z.number().min(1),
}).merge(AbstractMagicDTO);

type NivelBaseType = z.infer<typeof NivelBase> & {
	secundario?: NivelBaseType;
};

const NivelDTO = NivelBase.extend({
	secundario: z.lazy(() => NivelDTO.optional()),
}) as z.ZodType<NivelBaseType>;

type Nivel = NivelBaseType;

export default NivelDTO;
export type { Nivel };
