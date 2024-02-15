import { IDTO } from "../../models/DTO";
import { SingleOrArray } from "../../util/commonTypes";

export type CrudType<T extends IDTO> = {
	list: T[];
	create: (datum: T) => void;
	read: (id: SingleOrArray<string>) => T[];
	update: (datum: SingleOrArray<T>) => void;
	delete_: (id: SingleOrArray<string>) => void;
};
