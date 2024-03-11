export type SingleOrArray<T> = T | T[];

type HasName = {
	nome: string;
};

type HasId = {
	id: string;
};

export type HasIdAndName = HasId & HasName;
