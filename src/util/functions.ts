import Color from "./Color";
import { SingleOrArray } from "./commonTypes";

export const toArray = <T>(obj: SingleOrArray<T>): T[] => {
	return Array.isArray(obj) ? obj : [obj];
};

export const changeOpacity = (color: string, alpha: number): string => {
	return Color.createFrom(color).changeAlpha(alpha).toRgba();
};

export const getPlural = (n: number): "s" | "" => {
	return n > 0 ? "s" : "";
};

function removeDiacritic(letra: string): string {
	const diacriticsMap: { [key: string]: string } = {
		á: "a",
		à: "a",
		â: "a",
		é: "e",
		ê: "e",
		í: "i",
		ó: "o",
		ô: "o",
		ú: "u",
		ç: "c",
	};
	return diacriticsMap[letra] || letra;
}

export const extractFirstChar = (word: string): string => {
	return removeDiacritic(word.trim().charAt(0).toLowerCase()).toUpperCase();
};
