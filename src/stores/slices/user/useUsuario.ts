import { useAppDispatch } from "../../../hooks/reduxHooks";
import type { Usuario } from "../../../models/UsuarioDTO";
import { store } from "../../store";
import { selectById, setUser, unsetUser, selectTotal, selectAll } from "./";

type Out = {
	criaAtualiza: (user: Usuario) => void;
	busca: (id: string) => void;
	apaga: (id: string) => void;
	isLogged: () => boolean;
	usuario?: Usuario;
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

	const getUsuario = () => {
		if (isLogged()) {
			const all = selectAll(store.getState().usuarioReducer);
			return all[0];
		}
		return undefined;
	};

	return {
		busca,
		apaga,
		isLogged,
		criaAtualiza,
		usuario: getUsuario(),
	};
};

export default useUsuario;
