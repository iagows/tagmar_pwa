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
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Link, useLocation } from "react-router-dom";
import { RoutePath } from "../../../pages/RouteNames";
import UserDisplay from "../../UserDisplay";

type Item = {
	text: string;
	path: RoutePath;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: OverridableComponent<SvgIconTypeMap<any, "svg">> & { muiName: string };
};

const gameMenu: Item[] = [
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

const appMenu: Item[] = [
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

type IList = {
	list: Item[];
};
const MountList = ({ list }: IList) => {
	const { pathname } = useLocation();
	const p = pathname as RoutePath;

	return (
		<List>
			{list.map(({ text, icon: Icon, path }) => {
				console.log(path, p);
				return (
					<ListItem key={text}>
						<ListItemButton component={Link} to={path} disabled={path === p}>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};

const DrawerContent = () => {
	return (
		<>
			<UserDisplay />
			<Divider />
			<MountList list={gameMenu} />
			<Divider />
			<MountList list={appMenu} />
		</>
	);
};

export default DrawerContent;
