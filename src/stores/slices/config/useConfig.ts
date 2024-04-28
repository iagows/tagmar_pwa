import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { VoidCallback } from "../../../util/commonTypes";
import { setBuscaInexata, setDado3d } from "./";

type Out = {
	isBuscaInexata: boolean;
	swapBuscaInexata: VoidCallback;

	isDado3d: boolean;
	swapDado3d: VoidCallback;
};

const useConfig = (): Out => {
	const dispatch = useAppDispatch();

	const { isBuscaInexata, isDado3dAtivo } = useAppSelector((s) => s.config);

	function swapBuscaInexata(): void {
		dispatch(setBuscaInexata(!isBuscaInexata));
	}

	function swapDado3d(): void {
		dispatch(setDado3d(!isDado3dAtivo));
	}

	return {
		swapDado3d,
		swapBuscaInexata,
		isDado3d: isDado3dAtivo,
		isBuscaInexata: isBuscaInexata,
	};
};

export default useConfig;
