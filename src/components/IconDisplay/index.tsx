import styled from "styled-components";
import { Profissao } from "../../models/ProfissaoDTO";
import { Raca } from "../../models/RacaDTO";
import { Colors } from "../../theme";

const DIMENSION = 31;
const Container = styled.div({
	borderRadius: 3,
	width: DIMENSION,
	height: DIMENSION,
	maxWidth: DIMENSION,
	minWidth: DIMENSION,
	maxHeight: DIMENSION,
	minHeight: DIMENSION,
	backgroundColor: Colors.secundaria.light,
});

type In = {
	datum?: Raca | Profissao;
};
const IconDisplay = ({ datum }: In) => {
	return <Container />;
};

export default IconDisplay;
