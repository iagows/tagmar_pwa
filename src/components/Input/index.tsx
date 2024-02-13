import styled from "styled-components";
import { Colors } from "../../theme";

const Input = styled.input({
	border: 0,
	height: 40,
	width: "100%",
	borderRadius: 2,
	padding: "9px 16px",
	color: Colors.branco._100,
	background: Colors.secundaria.normal,
	filter: `drop-shadow(0 4px 0.75rem ${Colors.fundo.normal})`,
});

export default Input;
