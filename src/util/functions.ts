import { RoutePath } from "../routing/RouteNames";
import Color from "./Color";
import { SingleOrArray } from "./commonTypes";

export const toArray = <T>(obj: SingleOrArray<T>): T[] => {
	return Array.isArray(obj) ? obj : [obj];
};

export const changeOpacity = (color: string, alpha: number): string => {
	return Color.createFrom(color).changeAlpha(alpha).toRgba();
};

export const routeTo = (route: RoutePath, id: string): string => {
	return `${route.split(":")[0]}${id}`;
};

export const swapSet = <T>(inputSet: Set<T>, obj: T): Set<T> => {
	if (inputSet.has(obj)) {
		inputSet.delete(obj);
	} else {
		inputSet.add(obj);
	}
	return new Set([...inputSet]);
};
