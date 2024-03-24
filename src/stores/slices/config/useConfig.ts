import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { VoidCallback } from "../../../util/commonTypes";
import { swapBusca, swapDado } from "./index";

type Out = {
	isBuscaInexata: boolean;
	swapBusca: VoidCallback;
	isDado3d: boolean;
	swapDado: VoidCallback;
};

const useConfig = (): Out => {
	const dispatch = useAppDispatch();
	const { configuracao } = useAppSelector((s) => s.config);

	function onSwapBusca(): void {
		dispatch(swapBusca());
	}

	function onSwapDado(): void {
		dispatch(swapDado());
	}

	return {
		isBuscaInexata: configuracao.isBuscaInexata,
		isDado3d: configuracao.isDado3dAtivo,
		swapBusca: onSwapBusca,
		swapDado: onSwapDado,
	};
};

export default useConfig;
