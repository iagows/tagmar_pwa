import styled from "styled-components";
import { Ficha } from "../../../models/FichaDTO";
import Label from "../../Label";
import { Colors } from "../../../theme";
import { changeOpacity } from "../../../util/functions";
import { CSS } from "../../../util/constants";
import IconDisplay from "../../IconDisplay";

const Container = styled.div({
	gap: 5,
	width: 268,
	height: 91,
	maxWidth: 268,
	maxHeight: 91,
	display: "flex",
	padding: CSS.padding.page,
	backgroundColor: changeOpacity(Colors.fundo.modal, 0.4),

	"&:hover": {
		backgroundColor: changeOpacity(Colors.fundo.modal, 0.6),
	},
	"&:active": {
		backgroundColor: changeOpacity(Colors.fundo.modal, 0.8),
	},
});

type In = {
	ficha: Ficha;
};

const FichaCard = ({ ficha }: In) => {
	return (
		<Container>
			<IconDisplay />
			<div>
				<Label>{ficha.nome}</Label>
				<Label>
					{ficha.narrador} - {ficha.nivel}
				</Label>
			</div>
			<IconDisplay />
		</Container>
	);
};
export default FichaCard;
