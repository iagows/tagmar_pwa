import FichasContainer from "../components/FichasContainer";
import usePageTopBar from "../hooks/usePageTopBar";
import { Constants } from "../util/constants";

const PageFichas = () => {
	// mudar menu
	usePageTopBar(Constants.PAGES.fichas);
	return <FichasContainer />;
};

export default PageFichas;
