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

type Out = CrudType<Ficha>;

const useFicha = (): Out => {
	const dispatch = useAppDispatch();
	const { list } = useAppSelector((s) => s.fichas);

	function create(datum: Ficha): void {
		dispatch(createFicha(datum));
	}

	function read(ids: SingleOrArray<string>): Ficha[] {
		const lista = toArray(ids);
		return list.filter(
			(ficha) => lista.findIndex((l) => ficha._id === l) !== -1,
		);
	}

	function update(obj: SingleOrArray<Ficha>): void {
		dispatch(updateFicha(toArray(obj)));
	}

	function delete_(ids: SingleOrArray<string>): void {
		dispatch(deleteFicha(toArray(ids)));
	}

	return {
		list,
		read,
		update,
		delete_,
		create,
	};
};

export default useFicha;
