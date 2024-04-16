import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import TagDrawer from "./components/TagmarUI/Drawer";
import { Constants } from "./util/constants";

const appContainerCss = {
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
} as const;

function App() {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<Box display={"flex"}>
				<TagDrawer />
				<Box
					flexGrow={1}
					height={"100vh"}
					display={"flex"}
					component="main"
					sx={appContainerCss}
					flexDirection={"column"}
				>
					<Toolbar />
					<Box flex={1} display={"flex"}>
						<Outlet />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
