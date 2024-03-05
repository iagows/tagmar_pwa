import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { changeTitle } from "./index";

type Out = {
	titulo: string;
	setTitulo: (t: string) => void;
};

const useConfiguration = (): Out => {
	const dispatch = useAppDispatch();

	const { appTitle } = useAppSelector((s) => s.config);

	function setTitulo(titulo: string): void {
		dispatch(changeTitle(titulo));
	}
	return {
		titulo: appTitle,
		setTitulo,
	};
};

export default useConfiguration;
