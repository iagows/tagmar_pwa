export type SingleOrArray<T> = T | T[];

export const toArray = <T>(obj: SingleOrArray<T>): T[] => {
	return Array.isArray(obj) ? obj : [obj];
};
