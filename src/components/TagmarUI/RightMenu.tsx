import { useLocation } from "react-router-dom";
import { RoutePath } from "../../routing/RouteNames";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

const AddFichaButton = () => {
	return (
		<IconButton edge="end" onClick={() => console.log("vai")}>
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
