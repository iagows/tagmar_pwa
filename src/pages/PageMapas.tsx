import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import usePageTopBar from "../hooks/usePageTopBar";
import { Constants } from "../util/constants";

const PageMapas = () => {
	usePageTopBar({ titulo: Constants.PAGES.mapas });
	return (
		<PageContainer>
			<UnderConstruction descricao="Mapa svg, selecionar região, modal com descrição" />
			<p>Mapas</p>
		</PageContainer>
	);
};

export default PageMapas;
