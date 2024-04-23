import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Usuario } from "../../../models/UsuarioDTO";

const adapter = createEntityAdapter<Usuario>({
	sortComparer: (a, b) =>
		a.nome.toLowerCase().localeCompare(b.nome.toLowerCase()),
});

const slice = createSlice({
	name: "user",
	initialState: adapter.getInitialState(),
	reducers: {
		cria: adapter.setOne,
		apaga: adapter.removeAll,
	},
});

export default slice.reducer;
export const { cria, apaga } = slice.actions;
export const { selectAll } = adapter.getSelectors();
