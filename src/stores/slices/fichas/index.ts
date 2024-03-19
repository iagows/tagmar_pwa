import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
		criacao: "2024-03-06T15:30:00.000-03:00",
		// atributos: new Map(),
		// habilidades: new Map(),
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
		criacao: "2024-03-06T15:30:00.000-03:00",
		// atributos: new Map(),
		// habilidades: new Map(),
		isFavorito: true,
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
		criacao: "2024-03-06T15:30:00.000-03:00",
		// atributos: new Map(),
		// habilidades: new Map(),
	},
];

const on = (id: string, list: Ficha[], cb: (ficha: Ficha) => void) => {
	const index = list.findIndex((i) => i.id === id);
	if (index > -1) {
		const ficha = list[index];
		cb(ficha);
		list[index] = ficha;
	}
};

const appSlice = createSlice({
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
		},
	},
});

export default appSlice.reducer;
export const { create, update, delete_, invertFavorite } = appSlice.actions;
