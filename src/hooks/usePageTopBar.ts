import { useEffect } from "react";
import useConfiguration from "../stores/slices/configurations/useConfiguration";

type TopBar =
	| {
			titulo: string;
			showBackButton: boolean;
	  }
	| string;

const usePageTopBar = (props: TopBar): void => {
	const { setTitulo } = useConfiguration();

	useEffect(() => {
		// setTitulo({ titulo, backButton: showBackButton });
		if (typeof props === "string") {
			setTitulo({ titulo: props });
		} else {
			setTitulo({
				titulo: props.titulo,
				backButton: props.showBackButton,
			});
		}
	}, [props, setTitulo]);
};

export default usePageTopBar;
