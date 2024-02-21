import { createSlice } from "@reduxjs/toolkit";
import { Ficha } from "../../../models/FichaDTO";
import { ProfissaoEnum } from "../../../models/ProfissaoDTO";
import { RacaEnum } from "../../../models/RacaDTO";

const initialList: Ficha[] = [
	{
		id: "asdf",
		nome: "Nome 1",
		profissao: ProfissaoEnum.BARDO,
		descricao: "",
		narrador: "narrador fulano",
		nivel: 2,
		xp: 20,
		raca: RacaEnum.ELFO_DOURADO,
		criacao: new Date(),
		atributos: new Map(),
		habilidades: new Map(),
	},
	{
		id: "asdf2",
		nome: "Nome 2",
		profissao: ProfissaoEnum.MAGO,
		descricao: "",
		narrador: "narrador cicrano",
		nivel: 3,
		xp: 30,
		raca: RacaEnum.HUMANO,
		criacao: new Date(),
		atributos: new Map(),
		habilidades: new Map(),
	},
	{
		id: "asdf3",
		nome: "Nome 3",
		profissao: ProfissaoEnum.GUERREIRO,
		descricao: "",
		narrador: "narrador beltrano",
		nivel: 4,
		xp: 40,
		raca: RacaEnum.ANAO,
		criacao: new Date(),
		atributos: new Map(),
		habilidades: new Map(),
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
				const index = state.list.findIndex((i) => i.id === ficha.id);
				if (index > -1) {
					state.list[index] = ficha;
				}
			}
		}),
		delete_: createSlice.reducer<string[]>((state, action) => {
			for (const item of action.payload) {
				const index = state.list.findIndex((i) => i.id === item);
				if (index > -1) {
					state.list.splice(index, 1);
				}
			}
		}),
	}),
});

export default appSlice.reducer;
export const { create, update, delete_ } = appSlice.actions;
