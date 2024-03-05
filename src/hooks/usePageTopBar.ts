import { useEffect } from "react";
import useConfiguration from "../stores/slices/configurations/useConfiguration";

const usePageTopBar = (titulo: string): void => {
	const { setTitulo } = useConfiguration();
	useEffect(() => {
		setTitulo(titulo);
	}, [titulo, setTitulo]);
};

export default usePageTopBar;
