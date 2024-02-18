import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Drawer = () => {
	return (
		<>
			<Toolbar />
			<Divider />
			<List>
				{["Fichas", "Ficha Atual", "Magias", "Habilidades", "Mapa"].map(
					(text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					),
				)}
			</List>
			<Divider />
			<List>
				{["Configurações", "Sobre"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default Drawer;
