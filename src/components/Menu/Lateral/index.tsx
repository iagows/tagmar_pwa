import styled from "styled-components";
import Label from "../../Label";
import { Colors } from "../../../theme";

const Container = styled.div({
	backgroundColor: Colors.fundo.modal,
});

const MenuLateral = () => {
	return (
		<Container>
			<Label>Item</Label>
			<Label>Item</Label>
			<Label>Item</Label>
			<Label>Item</Label>
			<Label>Item</Label>
			<Label>Item</Label>
		</Container>
	);
};

export default MenuLateral;
