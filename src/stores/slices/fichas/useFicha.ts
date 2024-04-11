import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Ficha } from "../../../models/FichaDTO";
import type { SingleOrArray } from "../../../util/commonTypes";
import { toArray } from "../../../util/functions";
import type { CrudType } from "../CrudTypes";
import {
	changeAtual,
	create as createFicha,
	delete_ as deleteFicha,
	invertFavorite,
	update as updateFicha,
} from "./index";

type Out = CrudType<Ficha> & {
	atual?: Ficha;
	changeFav: (id: string) => void;
	ativaFichaAtual: (ficha: Ficha) => void;
};

const useFicha = (): Out => {
	const dispatch = useAppDispatch();
	const { list, atual } = useAppSelector((s) => s.fichasReducer);

	function create(datum: Ficha): void {
		dispatch(createFicha(datum));
	}

	function read(ids: SingleOrArray<string>): Ficha[] {
		const lista = toArray(ids);
		return list.filter(
			(ficha) => lista.findIndex((l) => ficha.id === l) !== -1,
		);
	}

	function ativaFichaAtual(ficha: Ficha): void {
		dispatch(changeAtual(ficha));
	}

	function update(obj: SingleOrArray<Ficha>): void {
		dispatch(updateFicha(toArray(obj)));
	}

	function delete_(ids: SingleOrArray<string>): void {
		dispatch(deleteFicha(toArray(ids)));
	}

	function changeFav(id: string): void {
		dispatch(invertFavorite(id));
	}

	return {
		list,
		read,
		atual,
		update,
		delete_,
		create,
		changeFav,
		ativaFichaAtual,
	};
};

export default useFicha;
