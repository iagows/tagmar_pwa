import { Box } from "@mui/material";
import { alcanceToString } from "../../models/AlcanceDTO";
import { duracaoToString } from "../../models/DuracaoDTO";
import { evocacaoToString } from "../../models/EvocacaoDTO";
import { AbstractMagic } from "../../models/magia/AbstractMagicDTO";
import TagLabel from "../TagmarUI/Label";
import TagCusto from "./TagCusto";

type In<T> = {
	title: string;
	valor?: T;
	converter: (v: T) => string;
};
const GenericTagInfo = <T,>({ title, valor, converter }: In<T>) => {
	return valor ? (
		<Box display={"flex"}>
			<TagLabel fontWeight="bold">{title}:&nbsp;</TagLabel>
			{valor && <TagLabel>{converter(valor)}</TagLabel>}
		</Box>
	) : null;
};

type IMagicInfo = {
	item: AbstractMagic;
};

const TagMagic = ({ item }: IMagicInfo) => {
	return (
		<>
			{item.evocacao && (
				<GenericTagInfo
					title="Evocação"
					valor={item.evocacao}
					converter={evocacaoToString}
				/>
			)}
			{item.alcance && (
				<GenericTagInfo
					title="Alcance"
					valor={item.alcance}
					converter={alcanceToString}
				/>
			)}
			{item.duracao && (
				<GenericTagInfo
					title="Duração"
					valor={item.duracao}
					converter={duracaoToString}
				/>
			)}
			{item.custo && <TagCusto custo={item.custo} />}
		</>
	);
};

export default TagMagic;
