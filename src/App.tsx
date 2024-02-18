import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import AppContent from "./components/AppContent";
import TagDrawer from "./components/Drawer";
import { THEME_OPTIONS } from "./theme";
import MenuIcon from "@mui/icons-material/Menu";

const Container = styled.div({
	display: "flex",
	flexFlow: "column",
});

function App() {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);
	const drawerWidth = 300;

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
		<Container>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position="fixed"
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						ml: { sm: `${drawerWidth}px` },
					}}
				>
					<Toolbar
						sx={{
							backgroundColor: THEME_OPTIONS.palette?.background?.default,
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div">
							Tagmar
						</Typography>
					</Toolbar>
				</AppBar>
				<Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
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
								width: drawerWidth,
							},
						}}
					>
						<TagDrawer />
					</Drawer>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
						open
					>
						<TagDrawer />
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					<AppContent />
				</Box>
			</Box>
		</Container>
	);
}

export default App;
