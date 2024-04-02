import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { compareAsc } from "date-fns";
import { Ficha } from "../../../models/FichaDTO";

const sorter = (a: Ficha, b: Ficha): number => {
	if (a.isFavorito && !b.isFavorito) {
		return -1;
	}
	if (b.isFavorito && !a.isFavorito) {
		return 1;
	}

	return compareAsc(a.ultimaVisualizacao, b.ultimaVisualizacao);
};

const initialList: Ficha[] = [].sort(sorter);

const on = (id: string, list: Ficha[], cb: (ficha: Ficha) => void) => {
	const index = list.findIndex((i) => i.id === id);
	if (index > -1) {
		const ficha = list[index];
		cb(ficha);
		list[index] = ficha;
	}
};

const fichasSlice = createSlice({
	name: "fichas",
	initialState: {
		list: initialList,
	},
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
			on(action.payload, state.list, (f) => {
				f.isFavorito = !f.isFavorito;
			});
			state.list.sort(sorter);
		},
	},
});

export default fichasSlice.reducer;
export const { create, update, delete_, invertFavorite } = fichasSlice.actions;
