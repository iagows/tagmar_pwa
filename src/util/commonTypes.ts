import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type VoidCallback = () => void;
export type PromiseVoidCallback = () => Promise<void>;

export type SingleOrArray<T> = T | T[];

export type ActionFunction = {
	action: VoidCallback;
};

export type ActionLink = {
	link: string;
};

export type ActionLinkFunction = ActionFunction | ActionLink;

export type RouteHandle = {
	title: string;
	isMainRoute?: boolean;
	rightAction?: {
		// biome-ignore lint/complexity/noBannedTypes: <explanation>
		Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
			muiName: string;
		};
	} & ActionLinkFunction;
};

export const isActionFunction = (
	action: ActionLinkFunction,
): action is ActionFunction => {
	return (action as ActionFunction).action !== undefined;
};

export const isActionLink = (
	action: ActionLinkFunction,
): action is ActionLink => {
	return (action as ActionLink).link !== undefined;
};
