import { Avatar, Divider, List, ListItem, ListItemText } from "@mui/material";
import useFicha from "../stores/slices/fichas/useFicha";
import TagLabel from "./TagmarUI/Label";
import useUsuario from "../stores/slices/user/useUsuario";

const UserDisplay = () => {
	const { total } = useFicha();
	const { usuario } = useUsuario();

	return (
		<List>
			<ListItem>
				<ListItemText primary="Tagmar" />
			</ListItem>
			<Divider />
			{usuario && (
				<ListItem sx={{ gap: 1 }}>
					<Avatar src={usuario.image} />
					<ListItemText primary={usuario.nome} />
				</ListItem>
			)}
			<ListItem>
				<TagLabel>{total} fichas</TagLabel>
			</ListItem>
			<ListItem>
				<TagLabel>app v{__APP_VERSION__}</TagLabel>
			</ListItem>
		</List>
	);
};

export default UserDisplay;
