import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { changeTitle, changeBackButton } from "./index";

type Title = {
	titulo: string;
	backButton?: boolean;
};

type Out = {
	titulo: string;
	showBackButton: boolean;
	setTitulo: (opt: Title) => void;
};

const useConfiguration = (): Out => {
	const dispatch = useAppDispatch();

	const { appTitle, showBackButton } = useAppSelector((s) => s.config);

	function setTitulo({ titulo, backButton = false }: Title): void {
		dispatch(changeTitle(titulo));
		dispatch(changeBackButton(backButton));
	}
	return {
		setTitulo,
		showBackButton,
		titulo: appTitle,
	};
};

export default useConfiguration;
