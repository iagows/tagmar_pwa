import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import useFicha from "../../stores/slices/fichas/useFicha";
import TagLabel from "../TagmarUI/Label";

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
				<ListItemButton>
					<TagLabel>fulano@gmail.com - {list.length} fichas</TagLabel>
				</ListItemButton>
			</ListItem>
		</List>
	);
};

export default UserDisplay;
