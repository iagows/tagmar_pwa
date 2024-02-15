import { createSlice } from "@reduxjs/toolkit";
import { Ficha } from "../../../models/FichaDTO";

const initialList: Ficha[] = [
	{
		_id: "asdf",
		nome: "Algum Nome Legal por Aqui",
		classe: "rastreador",
		descricao: "",
		narrador: "fulano",
		nivel: 2,
		xp: 20,
		raca: "elfo",
		criacao: new Date(),
	},
	{
		_id: "asdf2",
		nome: "Algum Outro Nome Legal por Aqui",
		classe: "mago",
		descricao: "",
		narrador: "cicrano",
		nivel: 3,
		xp: 30,
		raca: "humano",
		criacao: new Date(),
	},
	{
		_id: "asdf3",
		nome: "Algum Terceiro Nome Legal por Aqui",
		classe: "guerreiro",
		descricao: "",
		narrador: "beltrano",
		nivel: 4,
		xp: 40,
		raca: "anao",
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
