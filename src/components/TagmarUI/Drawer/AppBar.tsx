import ArrowBack from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import useRouteMatch from "../../../hooks/useRouteMatch";
import { THEME_OPTIONS } from "../../../theme";
import type { VoidCallback } from "../../../util/commonTypes";
import { Constants } from "../../../util/constants";
import HideOnScroll from "../../HideOnScroll";
import TagLabel from "../Label";
import TagRightMenu from "../RightMenu";

const BAR_STYLE = {
	ml: { sm: `${Constants.DRAWER_WIDTH}px` },
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
} as const;

const TOOLBAR_STYLE = {
	backgroundColor: THEME_OPTIONS.palette?.background?.default,
} as const;

const ICON_STYLE = { mr: 2, display: { sm: "none" } } as const;

type In = {
	onMenu: VoidCallback;
};

const TagAppBar = ({ onMenu }: In) => {
	const { isMainRoute, title } = useRouteMatch();

	return (
		<HideOnScroll>
			<AppBar position="fixed" sx={BAR_STYLE}>
				<Toolbar sx={TOOLBAR_STYLE}>
					<IconButton
						edge="start"
						sx={ICON_STYLE}
						color="inherit"
						onClick={onMenu}
						aria-label="open drawer"
					>
						{isMainRoute ? <MenuIcon /> : <ArrowBack />}
					</IconButton>
					<TagLabel variant="h6" noWrap component="div" flexGrow={1}>
						{title}
					</TagLabel>
					<TagRightMenu />
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

export default TagAppBar;
