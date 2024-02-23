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
import UserDisplay from "../../../UserDisplay";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../../pages/RouteNames";

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
		path: RoutePath.ROOT,
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
const MountList = ({ list }: IList) => (
	<List>
		{list.map(({ text, icon: Icon, path }) => (
			// <Link to={path}>
			<ListItem key={text}>
				<ListItemButton component={Link} to={path}>
					<ListItemIcon>
						<Icon />
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			</ListItem>
			// </Link>
		))}
	</List>
);

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
