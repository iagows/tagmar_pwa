import { Box } from "@mui/material";
import TagLabel from "../TagmarUI/Label";

type In<T> = {
	title: string;
	valor?: T;
	converter: (v: T) => string;
};
const TagInfo = <T,>({ title, valor, converter }: In<T>) => {
	return valor ? (
		<Box display={"flex"}>
			<TagLabel fontWeight="bold">{title}:&nbsp;</TagLabel>
			{valor && <TagLabel>{converter(valor)}</TagLabel>}
		</Box>
	) : null;
};

export default TagInfo;
