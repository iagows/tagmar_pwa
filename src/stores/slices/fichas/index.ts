import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { compareAsc } from "date-fns";
import type { Ficha } from "../../../models/FichaDTO";

const sorter = (a: Ficha, b: Ficha): number => {
	if (a.isFavorito && !b.isFavorito) {
		return -1;
	}
	if (b.isFavorito && !a.isFavorito) {
		return 1;
	}

	return compareAsc(a.ultimaVisualizacao, b.ultimaVisualizacao);
};

const onFav = (id: string, list: Ficha[], cb: (ficha: Ficha) => void) => {
	const index = list.findIndex((i) => i.id === id);
	if (index > -1) {
		const ficha = list[index];
		cb(ficha);
		list[index] = ficha;
	}
};

type State = {
	list: Ficha[];
	atual?: Ficha;
};
const INITIAL_STATE: State = {
	list: [],
};

const fichasSlice = createSlice({
	name: "fichas",
	initialState: INITIAL_STATE,
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		create: (state, action: PayloadAction<Ficha>) => {
			state.list.push(action.payload);
		},
		update: (state, action: PayloadAction<Ficha[]>) => {
			for (const ficha of action.payload) {
				const index = state.list.findIndex((i) => i.id === ficha.id);
				if (index > -1) {
					state.list[index] = ficha;
				}
			}
		},
		delete_: (state, action: PayloadAction<string[]>) => {
			for (const item of action.payload) {
				const index = state.list.findIndex((i) => i.id === item);
				if (index > -1) {
					state.list.splice(index, 1);
				}
			}
		},
		invertFavorite: (state, action: PayloadAction<string>) => {
			onFav(action.payload, state.list, (f) => {
				f.isFavorito = !f.isFavorito;
			});
			state.list.sort(sorter);
		},
		changeAtual: (state, action: PayloadAction<Ficha>) => {
			state.atual = action.payload;
		},
	},
});

export default fichasSlice.reducer;
export const { create, update, delete_, invertFavorite, changeAtual } =
	fichasSlice.actions;
