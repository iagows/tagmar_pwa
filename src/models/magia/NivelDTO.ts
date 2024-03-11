import { z } from "zod";
import { AbstractDTO as DescDTO } from "../Abstract/DescriptionOptionalDTO";
import { AbstractDTO as IdDTO } from "../Abstract/IdDTO";
import AbstractMagicDTO from "./AbstractMagicDTO";

const NivelBase = z
	.object({
		nivel: z.number().min(1),
	})
	.merge(IdDTO.IdDTO)
	.merge(AbstractMagicDTO)
	.merge(DescDTO.DescriptionOptionalDTO);

type NivelBaseType = z.infer<typeof NivelBase> & {
	secundario?: NivelBaseType;
};

const NivelDTO = NivelBase.extend({
	secundario: z.lazy(() => NivelDTO.optional()),
}) as z.ZodType<NivelBaseType>;

type Nivel = NivelBaseType;

export default NivelDTO;
export type { Nivel };
