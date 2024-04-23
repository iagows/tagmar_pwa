import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Usuario } from "../../../models/UsuarioDTO";
import { apaga as apagaUsuario, cria as criaUsuario, selectAll } from "./";

type Out = {
	cria: (user: Usuario) => void;
	apaga: () => void;
	usuario?: Usuario;
};

const useUsuario = (): Out => {
	const dispatch = useAppDispatch();
	const usuario = useAppSelector((state) => selectAll(state.usuarioReducer));

	const apaga = () => {
		dispatch(apagaUsuario());
	};

	const cria = async (user: Usuario) => {
		dispatch(criaUsuario(user));
	};

	return {
		cria,
		apaga,
		usuario: usuario.length > 0 ? usuario[0] : undefined,
	};
};

export default useUsuario;
