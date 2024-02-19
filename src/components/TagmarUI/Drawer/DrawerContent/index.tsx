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

type Item = {
	text: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: OverridableComponent<SvgIconTypeMap<any, "svg">> & { muiName: string };
};

const gameMenu: Item[] = [
	{
		text: "Fichas",
		icon: PeopleAltOutlined,
	},
	{
		text: "Ficha atual",
		icon: PersonOutlined,
	},
	{
		text: "Dado",
		icon: Casino,
	},
	{
		text: "Magias",
		icon: AutoFixHighOutlined,
	},
	{
		text: "Habilidades",
		icon: StormOutlined,
	},
	{
		text: "Mapa",
		icon: MapOutlined,
	},
];

const appMenu: Item[] = [
	{
		text: "Configurações",
		icon: Settings,
	},
	{
		text: "Sobre",
		icon: Info,
	},
];

type IList = {
	list: Item[];
};
const MountList = ({ list }: IList) => (
	<List>
		{list.map(({ text, icon: Icon }) => (
			<ListItem key={text}>
				<ListItemButton>
					<ListItemIcon>
						<Icon />
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			</ListItem>
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
