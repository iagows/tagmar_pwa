import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import usePageTopBar from "../hooks/usePageTopBar";

const PageFicha = () => {
	// mudar menu
	usePageTopBar("Nome do personagem");
	return (
		<PageContainer>
			<UnderConstruction descricao="tudo" />
			<p>Ficha</p>
		</PageContainer>
	);
};

export default PageFicha;
