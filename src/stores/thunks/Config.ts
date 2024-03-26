import { createAsyncThunk } from "@reduxjs/toolkit";
import { Config } from "../../models/ConfigDTO";

export namespace TagThunk {
	export const setBuscaInexata = createAsyncThunk(
		"config/swapBusca",
		async (isInexata: boolean): Promise<boolean> => {
			// salva
			return isInexata;
		},
	);

	export const setDado3D = createAsyncThunk(
		"config/swapDado",
		async (isDado: boolean): Promise<boolean> => {
			// salva
			return isDado;
		},
	);

	export const loadConfig = createAsyncThunk(
		"config/load",
		async (): Promise<Config> => {
			// get from file
			const c: Config = {
				isBuscaInexata: false,
				isDado3dAtivo: false,
			};
			return c;
		},
	);
}
