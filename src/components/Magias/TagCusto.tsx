import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Box } from "@mui/material";
import type { Dinheiro } from "../../models/DinheiroDTO";
import TagLabel from "../TagmarUI/Label";

type MoedaIn = {
	valor?: number;
	color: string;
};
const Moeda = ({ valor, color }: MoedaIn) => {
	return (
		valor && (
			<Box display={"flex"} gap={1}>
				<MonetizationOnIcon sx={{ color }} />
				<TagLabel>{valor}</TagLabel>
			</Box>
		)
	);
};

type In = {
	custo: Dinheiro;
};

const TagCusto = ({ custo }: In) => {
	return (
		<Box display="flex" gap={3}>
			<TagLabel>Custo:</TagLabel>
			<Moeda valor={custo.ouro} color="#FFD700" />
			<Moeda valor={custo.prata} color="#C0C0C0" />
			<Moeda valor={custo.cobre} color="#B87333" />
		</Box>
	);
};

export default TagCusto;
