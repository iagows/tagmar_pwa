import { createSlice } from "@reduxjs/toolkit";
import { Config } from "../../../models/ConfigDTO";
import { TagThunk } from "../../thunks/Config";

const INITIAL_CONFIG: Config = {
	isBuscaInexata: true,
	isDado3dAtivo: true,
};

const configsSlice = createSlice({
	name: "fichas",
	initialState: {
		config: INITIAL_CONFIG,
		loading: false,
	},
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(TagThunk.setBuscaInexata.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(TagThunk.setBuscaInexata.fulfilled, (state, action) => {
			state.loading = false;
			state.config.isBuscaInexata = action.payload;
		});
		builder.addCase(TagThunk.setBuscaInexata.rejected, (state) => {
			state.loading = false;
		});

		builder.addCase(TagThunk.setDado3D.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(TagThunk.setDado3D.fulfilled, (state, action) => {
			state.loading = false;
			state.config.isDado3dAtivo = action.payload;
		});
		builder.addCase(TagThunk.setDado3D.rejected, (state) => {
			state.loading = true;
		});

		builder.addCase(TagThunk.loadConfig.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(TagThunk.loadConfig.fulfilled, (state, action) => {
			state.loading = false;
			state.config = action.payload;
		});
		builder.addCase(TagThunk.loadConfig.rejected, (state) => {
			state.loading = false;
			console.log("load ruim");
		});
	},
});

export default configsSlice.reducer;
