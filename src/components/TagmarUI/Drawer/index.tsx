import { Box, CssBaseline, Drawer } from "@mui/material";
import { useState } from "react";
import { Constants } from "../../../util/constants";
import TagAppBar from "./AppBar";
import DrawerContent from "./DrawerContent";

export enum DrawerType {
	mobile = 0,
	desktop = 1,
}

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

const TagDrawer = () => {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};
	return (
		<Box onClick={handleDrawerToggle}>
			<CssBaseline />
			<TagAppBar onMenu={handleDrawerToggle} />
			<Box sx={DRAWER_BOX_SX}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={DRAWER_SX_TEMP}
				>
					<DrawerContent />
				</Drawer>
				<Drawer variant="permanent" sx={DRAWER_SX_PERM} open>
					<DrawerContent />
				</Drawer>
			</Box>
		</Box>
	);
};

export default TagDrawer;
