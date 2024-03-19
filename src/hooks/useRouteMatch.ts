import { UIMatch, useMatches } from "react-router-dom";
import { RouteHandle } from "../util/commonTypes";

const match = (list: UIMatch<unknown, unknown>[]): RouteHandle => {
	return list
		.map((m) => m.handle as RouteHandle | undefined)
		.filter((m): m is RouteHandle => !!m)[0];
};

const useRouteMatch = (): RouteHandle => {
	const matches = useMatches();
	if (matches) {
		return match(matches);
	}

	return {
		title: "Erro",
		isMainRoute: false,
	};
};

export default useRouteMatch;
