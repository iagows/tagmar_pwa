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
		setUser: adapter.setOne,
		unsetUser: adapter.removeOne,
	},
});

export default slice.reducer;
export const { setUser, unsetUser } = slice.actions;
export const { selectById, selectTotal } = adapter.getSelectors();
