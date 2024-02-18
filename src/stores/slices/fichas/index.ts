import { createSlice } from "@reduxjs/toolkit";
import { Ficha } from "../../../models/FichaDTO";

const initialList: Ficha[] = [
	{
		_id: "asdf",
		nome: "Nome 1",
		classe: "id_rastreador",
		descricao: "",
		narrador: "narrador fulano",
		nivel: 2,
		xp: 20,
		raca: "id_elfo",
		criacao: new Date(),
	},
	{
		_id: "asdf2",
		nome: "Nome 2",
		classe: "id_mago",
		descricao: "",
		narrador: "narrador cicrano",
		nivel: 3,
		xp: 30,
		raca: "id_humano",
		criacao: new Date(),
	},
	{
		_id: "asdf3",
		nome: "Nome 3",
		classe: "id_guerreiro",
		descricao: "",
		narrador: "narrador beltrano",
		nivel: 4,
		xp: 40,
		raca: "id_anao",
		criacao: new Date(),
	},
];

const appSlice = createSlice({
	name: "fichas",
	initialState: {
		list: initialList,
	},
	// https://redux-toolkit.js.org/api/createslice/
	reducers: (createSlice) => ({
		create: createSlice.reducer<Ficha>((state, action) => {
			state.list.push(action.payload);
		}),
		update: createSlice.reducer<Ficha[]>((state, action) => {
			for (const ficha of action.payload) {
				const index = state.list.findIndex((i) => i._id === ficha._id);
				if (index > -1) {
					state.list[index] = ficha;
				}
			}
		}),
		delete_: createSlice.reducer<string[]>((state, action) => {
			for (const item of action.payload) {
				const index = state.list.findIndex((i) => i._id === item);
				if (index > -1) {
					state.list.splice(index, 1);
				}
			}
		}),
	}),
});

export default appSlice.reducer;
export const { create, update, delete_ } = appSlice.actions;
