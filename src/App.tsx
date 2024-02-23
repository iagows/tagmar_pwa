import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import TagDrawer from "./components/TagmarUI/Drawer";
import { DRAWER_WIDTH } from "./util/constants";

const sx = {
	flexGrow: 1,
	width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
} as const;

function App() {
	return (
		<Box sx={{ display: "flex", flexFlow: "column" }}>
			<Box sx={{ display: "flex" }}>
				<TagDrawer />
				<Box
					sx={sx}
					height={"100vh"}
					display={"flex"}
					component="main"
					flexDirection={"column"}
				>
					<Toolbar />
					<Box sx={{ flex: 1, display: "flex" }}>{<Outlet />}</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
