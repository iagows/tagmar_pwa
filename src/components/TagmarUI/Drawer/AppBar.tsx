import ArrowBack from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import useRouteMatch from "../../../hooks/useRouteMatch";
import { THEME_OPTIONS } from "../../../theme";
import { VoidCallback } from "../../../util/commonTypes";
import { Constants } from "../../../util/constants";
import HideOnScroll from "../../HideOnScroll";
import TagLabel from "../Label";

type In = {
	onMenu: VoidCallback;
};

const TagAppBar = ({ onMenu }: In) => {
	const { isMainRoute, title, rightAction } = useRouteMatch();

	return (
		<HideOnScroll>
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
						{isMainRoute ? <MenuIcon /> : <ArrowBack />}
					</IconButton>
					<TagLabel variant="h6" noWrap component="div" flexGrow={1}>
						{title}
					</TagLabel>
					{rightAction && (
						<IconButton edge="end" onClick={rightAction.action} disabled>
							<rightAction.Icon />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

export default TagAppBar;
