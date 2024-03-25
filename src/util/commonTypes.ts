import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type VoidCallback = () => void;
export type PromiseVoidCallback = ()=> Promise<void>

export type SingleOrArray<T> = T | T[];


export type RouteHandle = {
	title: string;
	isMainRoute?: boolean;
	rightAction?: {
		// biome-ignore lint/complexity/noBannedTypes: <explanation>
		Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
			muiName: string;
		};
		action: VoidCallback;
	};
};
