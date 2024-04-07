import { AbstractDTO } from "../../models/Abstract/IdDTO";
import { SingleOrArray } from "../../util/commonTypes";

export type CrudType<T extends AbstractDTO.IdType> = {
	list: T[];
	create: (datum: T) => void;
	read: (id: SingleOrArray<string>) => T[];
	update: (datum: SingleOrArray<T>) => void;
	delete_: (id: SingleOrArray<string>) => void;
};
