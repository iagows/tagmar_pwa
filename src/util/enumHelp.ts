type EnumType = Record<string, string>;

export const enumToList = <T extends EnumType>(
	enumObject: T,
): Array<keyof T> => {
	return Object.values(enumObject);
};
