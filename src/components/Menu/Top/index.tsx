import styled from "styled-components";
import { Typography } from "@mui/material";

const Container = styled.div({
	display: "flex",
	padding: "15px 25px",
	// backgroundColor: Colors.fundo.normal,
});

const MenuTop = () => {
	return (
		<Container>
			<Typography>=</Typography>
			<Typography>Tagmar</Typography>
		</Container>
	);
};

export default MenuTop;
