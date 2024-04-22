import { useAppDispatch } from "../../../hooks/reduxHooks";
import type { Usuario } from "../../../models/UsuarioDTO";
import { store } from "../../store";
import { selectById, setUser, unsetUser, selectTotal } from "./";

type Out = {
	criaAtualiza: (user: Usuario) => void;
	busca: (id: string) => void;
	apaga: (id: string) => void;
	isLogged: () => boolean;
};

const useUsuario = (): Out => {
	const dispatch = useAppDispatch();

	const apaga = (id: string) => {
		dispatch(unsetUser(id));
	};

	const criaAtualiza = async (user: Usuario) => {
		dispatch(setUser(user));
	};

	const busca = (id: string): Usuario => {
		return selectById(store.getState().usuarioReducer, id);
	};

	const isLogged = (): boolean => {
		return selectTotal(store.getState().usuarioReducer) > 0;
	};

	return {
		busca,
		apaga,
		isLogged,
		criaAtualiza,
	};
};

export default useUsuario;
