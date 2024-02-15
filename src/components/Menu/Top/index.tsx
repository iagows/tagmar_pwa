import styled from "styled-components";
import { Colors } from "../../../theme";
import Label from "../../Label";

const Container = styled.div({
	display: "flex",
	padding: "15px 25px",
	backgroundColor: Colors.fundo.normal,
});

const MenuTop = () => {
	return (
		<Container>
			<Label>=</Label>
			<Label>Tagmar</Label>
		</Container>
	);
};

export default MenuTop;
