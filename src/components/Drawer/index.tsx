import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	SvgIconTypeMap,
	Toolbar,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Item = {
	text: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: OverridableComponent<SvgIconTypeMap<any, "svg">> & { muiName: string };
};

const gameMenu: Item[] = [
	{
		text: "Fichas",
		icon: InboxIcon,
	},
	{
		text: "Ficha atual",
		icon: InboxIcon,
	},
	{
		text: "Magias",
		icon: InboxIcon,
	},
	{
		text: "Habilidades",
		icon: InboxIcon,
	},
	{
		text: "Mapa",
		icon: InboxIcon,
	},
];

const appMenu: Item[] = [
	{
		text: "Configurações",
		icon: InboxIcon,
	},
	{
		text: "Sobre",
		icon: InboxIcon,
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

const Drawer = () => {
	return (
		<>
			<Toolbar />
			<Divider />
			<MountList list={gameMenu} />
			<Divider />
			<MountList list={appMenu} />
		</>
	);
};

export default Drawer;
