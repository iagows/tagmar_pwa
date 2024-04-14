import { Box, CssBaseline, Drawer, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRouteMatch from "../../../hooks/useRouteMatch";
import type { VoidCallback } from "../../../util/commonTypes";
import { Constants } from "../../../util/constants";
import TagAppBar from "./AppBar";
import DrawerContent from "./DrawerContent";

const DRAWER_BOX_SX = {
	width: { sm: Constants.DRAWER_WIDTH },
	flexShrink: { sm: 0 },
} as const;

const DRAWER_CSS = {
	boxSizing: "border-box",
	width: Constants.DRAWER_WIDTH,
} as const;

const DRAWER_SX_TEMP = {
	display: { xs: "block", sm: "none" },
	"& .MuiDrawer-paper": DRAWER_CSS,
} as const;

const DRAWER_SX_PERM = {
	display: { xs: "none", sm: "block" },
	"& .MuiDrawer-paper": DRAWER_CSS,
} as const;

type DrawerType = {
	goBack: VoidCallback;
	mobileOpen: boolean;
	handleDrawerOpen: VoidCallback;
	handleDrawerClose: VoidCallback;
	handleDrawerToggle: VoidCallback;
	handleDrawerTransitionEnd: VoidCallback;
};

const useDrawer = (): DrawerType => {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);

	const { isMainRoute } = useRouteMatch();

	const navigate = useNavigate();

	const handleDrawerOpen = () => {
		setIsClosing(false);
		setMobileOpen(true);
	};

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (isMainRoute && !isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const goBack = () => {
		if (!isMainRoute) {
			navigate(-1);
		}
	};
	return {
		goBack,
		mobileOpen,
		handleDrawerOpen,
		handleDrawerClose,
		handleDrawerToggle,
		handleDrawerTransitionEnd,
	};
};

const TagDrawer = () => {
	const {
		goBack,
		mobileOpen,
		handleDrawerOpen,
		handleDrawerClose,
		handleDrawerToggle,
		handleDrawerTransitionEnd,
	} = useDrawer();

	return (
		<Box onClick={handleDrawerToggle}>
			<CssBaseline />
			<TagAppBar onMenu={goBack} />
			<Box sx={DRAWER_BOX_SX}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<SwipeableDrawer
					open={mobileOpen}
					variant="temporary"
					onOpen={handleDrawerOpen}
					disableBackdropTransition
					onClose={handleDrawerClose}
					onTransitionEnd={handleDrawerTransitionEnd}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={DRAWER_SX_TEMP}
				>
					<DrawerContent />
				</SwipeableDrawer>
				<Drawer variant="permanent" sx={DRAWER_SX_PERM} open>
					<DrawerContent />
				</Drawer>
			</Box>
		</Box>
	);
};

export default TagDrawer;
