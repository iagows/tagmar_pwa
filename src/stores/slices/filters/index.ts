import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Filter } from "../../../models/FilterDTO";
import type { ProfissaoEnum } from "../../../models/ProfissaoDTO";

const INITIAL: Filter = {
	nome: "",
	letra: "",
	profissao: [],
};

const slice = createSlice({
	name: "filters",
	initialState: INITIAL,
	reducers: {
		char: (state, action: PayloadAction<string>) => {
			const next =
				action.payload.length > 0 ? action.payload[0].toLowerCase() : "";
			state.letra = state.letra === next ? "" : next;
		},
		nome: (state, action: PayloadAction<string>) => {
			state.nome = action.payload;
		},
		swap: (state, action: PayloadAction<ProfissaoEnum>) => {
			const index = state.profissao.indexOf(action.payload);
			if (index > -1) {
				state.profissao.splice(index, 1);
			} else {
				state.profissao.push(action.payload);
			}
		},
		clear: (state) => {
			state.nome = "";
			state.letra = "";
			state.profissao.length = 0;
		},
	},
});

export default slice.reducer;
export const { char, nome, clear, swap } = slice.actions;
