import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Config } from "../../../models/ConfigDTO";

const INITIAL_CONFIG: Config = {
	isBuscaInexata: true,
	isDado3dAtivo: true,
};

const configsSlice = createSlice({
	name: "fichas",
	initialState: INITIAL_CONFIG,
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		setBuscaInexata: (state, action: PayloadAction<boolean>) => {
			state.isBuscaInexata = action.payload;
		},
		setDado3d: (state, action: PayloadAction<boolean>) => {
			state.isDado3dAtivo = action.payload;
		},
	},
});

export default configsSlice.reducer;
export const { setBuscaInexata, setDado3d } = configsSlice.actions;
