import Color from "./Color";
import { SingleOrArray } from "./commonTypes";

export const toArray = <T>(obj: SingleOrArray<T>): T[] => {
	return Array.isArray(obj) ? obj : [obj];
};

export const changeOpacity = (color: string, alpha: number): string => {
	return Color.createFrom(color).changeAlpha(alpha).toRgba();
};
