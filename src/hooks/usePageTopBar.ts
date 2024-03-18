import { useEffect } from "react";
import useConfiguration from "../stores/slices/configurations/useConfiguration";

type TopBar = {
	titulo: string;
	showBackButton?: boolean;
};

const usePageTopBar = ({ titulo, showBackButton = false }: TopBar): void => {
	const { setTitulo } = useConfiguration();

	useEffect(() => {
		setTitulo({
			titulo: titulo,
			backButton: showBackButton,
		});
	}, [titulo, showBackButton, setTitulo]);
};

export default usePageTopBar;
