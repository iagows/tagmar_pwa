import ArrowBack from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, LinkProps, Toolbar } from "@mui/material";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import useRouteMatch from "../../../hooks/useRouteMatch";
import { THEME_OPTIONS } from "../../../theme";
import {
	ActionLinkFunction,
	VoidCallback,
	isActionFunction,
	isActionLink,
} from "../../../util/commonTypes";
import { Constants } from "../../../util/constants";
import HideOnScroll from "../../HideOnScroll";
import TagLabel from "../Label";

type LocalVoid = VoidCallback;
type LocalLink = {
	component: React.ElementType;
	to: string;
};
type LocalInfo = LocalVoid | LocalLink | undefined;

function localLink(action: ActionLinkFunction): LocalInfo {
	if (isActionFunction(action)) {
		return action.action;
	}
	if (isActionLink(action)) {
		action.link = action.link.replace(":id", nanoid());
		return {
			component: Link,
			to: action.link,
		};
	}
}

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
	const { isMainRoute, title, rightAction } = useRouteMatch();

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
					{rightAction && (
						<IconButton edge="end" {...localLink(rightAction)}>
							<rightAction.Icon />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

export default TagAppBar;
