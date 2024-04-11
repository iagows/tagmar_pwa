import { type UIMatch, useMatches } from "react-router-dom";
import type { RouteHandle } from "../util/commonTypes";

const match = (list: UIMatch<unknown, unknown>[]): RouteHandle[] => {
	return list
		.map((m) => m.handle as RouteHandle | undefined)
		.filter((m): m is RouteHandle => !!m);
};

const useRouteMatch = (): RouteHandle => {
	const matches = useMatches();
	if (matches?.length > 0) {
		return match(matches)[0];
	}

	return {
		title: "Erro",
		isMainRoute: false,
	};
};

export default useRouteMatch;
