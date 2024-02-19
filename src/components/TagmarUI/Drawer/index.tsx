import { Box, CssBaseline, Drawer } from "@mui/material";
import { useState } from "react";
import { DRAWER_WIDTH } from "../../../util/constants";
import TagAppBar from "./AppBar";
import DrawerContent from "./DrawerContent";

export enum DrawerType {
	mobile = 0,
	desktop = 1,
}

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
		<>
			<CssBaseline />
			<TagAppBar title="Fichas" onMenu={handleDrawerToggle} />
			<Box sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: DRAWER_WIDTH,
						},
					}}
				>
					<DrawerContent />
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: DRAWER_WIDTH,
						},
					}}
					open
				>
					<DrawerContent />
				</Drawer>
			</Box>
		</>
	);
};

export default TagDrawer;
