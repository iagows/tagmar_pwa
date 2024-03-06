export type SingleOrArray<T> = T | T[];

export type HasName = {
	nome: string;
};

export type HasId = {
	id: string;
};

export type HasDescription = {
	descricao: string;
};

export type HasIdAndName = HasId & HasName;
