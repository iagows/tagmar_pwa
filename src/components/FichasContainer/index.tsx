import Input from "../Input";

import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import styled from "styled-components";

type IContainer = {
	hasItem: boolean;
};

const Container = styled.div<IContainer>(({ hasItem }) => ({
	padding: "15px 25px",
	height: "100%",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundImage: `url(${hasItem ? bgFilled : bgEmpty})`,
}));

const FichasContainer = () => {
	return (
		<Container hasItem={false}>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<p>conteúdo</p>
			<Input type="button" value="Adicionar fichar" />
		</Container>
	);
};

export default FichasContainer;
