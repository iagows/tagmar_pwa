import { useLocation } from "react-router-dom";
import { RoutePath } from "../../routing/RouteNames";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import useEditarFicha from "../../hooks/useEditarFicha";

const AddFichaButton = () => {
	const { create } = useEditarFicha();
	return (
		<IconButton edge="end" onClick={create}>
			<Add />
		</IconButton>
	);
};

const TagRightMenu = () => {
	const { pathname } = useLocation();

	switch (pathname) {
		case RoutePath.FICHAS:
			return <AddFichaButton />;
		default:
			break;
	}
	return null;
};

export default TagRightMenu;
