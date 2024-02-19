import { Avatar, Typography } from "@mui/material";
import { Ficha } from "../../../models/FichaDTO";
import TagCard from "../../TagmarUI/Card";
import TagLabel from "../../TagmarUI/Label";

type In = {
	ficha: Ficha;
};

const FichaCard = ({ ficha }: In) => {
	return (
		<TagCard>
			<div style={{ display: "flex", flex: 1 }}>
				<Avatar>{ficha.raca}</Avatar>
				<div
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<Typography variant="h5">{ficha.nome}</Typography>
					<TagLabel>
						{ficha.narrador} - {ficha.nivel}
					</TagLabel>
				</div>
				<Avatar>{ficha.profissao}</Avatar>
			</div>
		</TagCard>
	);
};
export default FichaCard;
