import { type EnumLike, z } from "zod";
import { AbstractDTO } from "../Abstract/DescriptionOptionalDTO";

const AbstractMagicInfoDTO = <T extends EnumLike>(enumList: T) =>
	z
		.object({
			tipo: z.nativeEnum(enumList),
			valor: z.number().min(0).optional(),
		})
		.merge(AbstractDTO.DescriptionOptionalDTO);

export default AbstractMagicInfoDTO;
