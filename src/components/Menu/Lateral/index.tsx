import { Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div({
	// backgroundColor: Colors.fundo.modal,
});

const MenuLateral = () => {
	return (
		<Container>
			<Typography>Item</Typography>
			<Typography>Item</Typography>
			<Typography>Item</Typography>
			<Typography>Item</Typography>
			<Typography>Item</Typography>
			<Typography>Item</Typography>
		</Container>
	);
};

export default MenuLateral;
