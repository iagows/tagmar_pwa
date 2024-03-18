import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Ficha } from "../../../models/FichaDTO";
import { SingleOrArray } from "../../../util/commonTypes";
import { toArray } from "../../../util/functions";
import { CrudType } from "../CrudTypes";
import {
	create as createFicha,
	delete_ as deleteFicha,
	update as updateFicha,
} from "./index";

type Out = CrudType<Ficha> & { changeFav: (id: string) => void };

const sorter = (a: Ficha, b: Ficha): number => {
	if (a.isFavorito && !b.isFavorito) {
		return -1;
	}
	if (b.isFavorito) {
		return 1;
	}
	return 0;
};

const useFicha = (): Out => {
	const dispatch = useAppDispatch();
	const { list } = useAppSelector((s) => s.fichas);

	function create(datum: Ficha): void {
		dispatch(createFicha(datum));
	}

	function read(ids: SingleOrArray<string>): Ficha[] {
		const lista = toArray(ids);
		return list.filter(
			(ficha) => lista.findIndex((l) => ficha.id === l) !== -1,
		);
	}

	function update(obj: SingleOrArray<Ficha>): void {
		dispatch(updateFicha(toArray(obj)));
	}

	function delete_(ids: SingleOrArray<string>): void {
		dispatch(deleteFicha(toArray(ids)));
	}

	function changeFav(id: string): void {
		const ficha = read(id)[0];
		update({ ...ficha, isFavorito: !ficha.isFavorito });
	}

	return {
		list: [...list].sort(sorter),
		read,
		update,
		delete_,
		create,
		changeFav,
	};
};

export default useFicha;
