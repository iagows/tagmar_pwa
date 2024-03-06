import { List, ListItem } from "@mui/material";
import { Magia } from "../../models/magia/MagiaDTO";
import { Nivel } from "../../models/magia/NivelDTO";
import TagLabel from "../TagmarUI/Label";
import Descricao from "./Descricao";

type In = {
	magia: Magia;
};

const Niveis = ({ magia }: In) => {
	const getTítulo = (nivel: Nivel) => `${magia.nome} ${nivel.nivel}:`;
	return (
		<List>
			{magia.niveis.map((n) => (
				<ListItem key={n.id}>
					<TagLabel display={"flex"} flexDirection={"column"} component="div">
						<TagLabel color="primary">{getTítulo(n)}</TagLabel>
						<Descricao item={n} />
					</TagLabel>
				</ListItem>
			))}
		</List>
	);
};

export default Niveis;
