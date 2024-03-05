import { Avatar, Divider, List, ListItem, ListItemText } from "@mui/material";
import useFicha from "../stores/slices/fichas/useFicha";
import TagLabel from "./TagmarUI/Label";

const UserDisplay = () => {
	const { list } = useFicha();
	return (
		<List>
			<ListItem>
				<ListItemText primary="Tagmar" />
			</ListItem>
			<Divider />
			<ListItem>
				<Avatar>F</Avatar>
				<ListItemText primary="Fulano de tal" />
			</ListItem>
			<ListItem>
				<TagLabel>fulano@gmail.com - {list.length} fichas</TagLabel>
			</ListItem>
			<ListItem>
				<TagLabel>app v{__APP_VERSION__}</TagLabel>
			</ListItem>
		</List>
	);
};

export default UserDisplay;
