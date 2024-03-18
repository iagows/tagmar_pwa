import {
	AutoFixHighOutlined,
	Casino,
	Info,
	MapOutlined,
	PeopleAltOutlined,
	PersonOutlined,
	Settings,
	StormOutlined,
} from "@mui/icons-material";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { RoutePath } from "../../../routing/RouteNames";

export namespace Drawer {
	export type Item = {
		text: string;
		path: RoutePath;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		icon: OverridableComponent<SvgIconTypeMap<any, "svg">> & {
			muiName: string;
		};
	};

	export const gameMenu: Item[] = [
		{
			text: "Fichas",
			icon: PeopleAltOutlined,
			path: RoutePath.FICHAS,
		},
		{
			text: "Ficha atual",
			icon: PersonOutlined,
			path: RoutePath.FICHA,
		},
		{
			text: "Dado",
			icon: Casino,
			path: RoutePath.DADO,
		},
		{
			text: "Magias",
			icon: AutoFixHighOutlined,
			path: RoutePath.MAGIAS,
		},
		{
			text: "Habilidades",
			icon: StormOutlined,
			path: RoutePath.HABILIDADES,
		},
		{
			text: "Mapas",
			icon: MapOutlined,
			path: RoutePath.MAPAS,
		},
	];

	export const appMenu: Item[] = [
		{
			text: "Configurações",
			icon: Settings,
			path: RoutePath.CONFIGURACOES,
		},
		{
			text: "Sobre",
			icon: Info,
			path: RoutePath.SOBRE,
		},
	];
}
