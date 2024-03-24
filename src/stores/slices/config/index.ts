import { createSlice } from "@reduxjs/toolkit";
import { Config } from "../../../models/ConfigDTO";

const INITIAL: Config = {
	isBuscaInexata: true,
	isDado3dAtivo: true,
};

const configsSlice = createSlice({
	name: "fichas",
	initialState: {
		configuracao: INITIAL,
	},
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		swapBusca: (state) => {
			state.configuracao.isBuscaInexata = !state.configuracao.isBuscaInexata;
		},
		swapDado: (state) => {
			state.configuracao.isDado3dAtivo = !state.configuracao.isDado3dAtivo;
		},
	},
});

export default configsSlice.reducer;
export const { swapBusca, swapDado } = configsSlice.actions;
