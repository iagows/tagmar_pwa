import { Typography } from "@mui/material";
import { Ficha } from "../../../models/FichaDTO";
import TagCard from "../../TagmarUI/Card";
import TagLabel from "../../TagmarUI/Label";

type In = {
	ficha: Ficha;
};

const FichaCard = ({ ficha }: In) => {
	return (
		<TagCard>
			<Typography variant="h5">{ficha.nome}</Typography>
			<TagLabel>
				{ficha.narrador} - {ficha.nivel}
			</TagLabel>
		</TagCard>
	);
};
export default FichaCard;
