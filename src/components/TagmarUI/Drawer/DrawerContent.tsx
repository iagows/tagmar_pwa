import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import type { RoutePath } from "../../../routing/RouteNames";
import UserDisplay from "../../UserDisplay";
import { Drawer } from "./data";

type IList = {
	list: Drawer.Item[];
};

const MountList = ({ list }: IList) => {
	const { pathname } = useLocation();
	const p = pathname as RoutePath;
	return (
		<List>
			{list.map(({ text, icon: Icon, path }) => (
				<ListItem key={text}>
					<ListItemButton component={Link} to={path} disabled={path === p}>
						<ListItemIcon>
							<Icon />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

const DrawerContent = () => {
	// filtrar ficha atual se estiver vazia
	return (
		<>
			<UserDisplay />
			<Divider />
			<MountList list={Drawer.gameMenu} />
			<Divider />
			<MountList list={Drawer.appMenu} />
		</>
	);
};

export default DrawerContent;
