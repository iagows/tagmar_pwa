import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { PromiseVoidCallback } from "../../../util/commonTypes";
import { TagThunk } from "../../thunks/Config";

type Out = {
	isBuscaInexata: boolean;
	swapBuscaInexata: PromiseVoidCallback;

	isDado3d: boolean;
	swapDado3d: PromiseVoidCallback;

	load: PromiseVoidCallback;
	loading: boolean;
};

const useConfig = (): Out => {
	const dispatch = useAppDispatch();

	const {
		config: { isBuscaInexata, isDado3dAtivo },
		loading,
	} = useAppSelector((s) => s.config);

	async function swapBuscaInexata(): Promise<void> {
		await dispatch(TagThunk.setBuscaInexata(!isBuscaInexata));
	}

	async function swapDado3d(): Promise<void> {
		await dispatch(TagThunk.setDado3D(!isDado3dAtivo));
	}
	async function load(): Promise<void> {
		await dispatch(TagThunk.loadConfig());
	}

	return {
		load,
		loading,
		swapDado3d,
		swapBuscaInexata,
		isDado3d: isDado3dAtivo,
		isBuscaInexata: isBuscaInexata,
	};
};

export default useConfig;
