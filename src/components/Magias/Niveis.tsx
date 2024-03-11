import { Box, List, ListItem } from "@mui/material";
import { Magia } from "../../models/magia/MagiaDTO";
import { Nivel } from "../../models/magia/NivelDTO";
import TagLabel from "../TagmarUI/Label";
import TagDescricao from "./TagDescricao";
import TagMagic from "./Info";

type In = {
	magia: Magia;
};

const Niveis = ({ magia }: In) => {
	const getTítulo = (nivel: Nivel) => `${magia.nome} ${nivel.nivel}:`;
	return (
		<List>
			{magia.niveis.map((n) => (
				<ListItem key={n.id}>
					<Box display={"flex"} flexDirection={"column"} gap={1}>
						<TagLabel color="primary">{getTítulo(n)}</TagLabel>
						<TagMagic item={n} />
						<TagDescricao item={n} />
					</Box>
				</ListItem>
			))}
		</List>
	);
};

export default Niveis;
