import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouteTitle } from "../../../pages/RouteNames";
import { THEME_OPTIONS } from "../../../theme";
import { Constants } from "../../../util/constants";

type In = {
	onMenu: () => void;
};
const TagAppBar = ({ onMenu }: In) => {
	const title = useRouteTitle();

	return (
		<AppBar
			position="fixed"
			sx={{
				ml: { sm: `${Constants.DRAWER_WIDTH}px` },
				width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
			}}
		>
			<Toolbar
				sx={{
					backgroundColor: THEME_OPTIONS.palette?.background?.default,
				}}
			>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={onMenu}
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default TagAppBar;
