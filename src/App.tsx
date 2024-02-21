import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TagDrawer from "./components/TagmarUI/Drawer";
import { DRAWER_WIDTH } from "./util/constants";

const Container = styled.div({
	display: "flex",
	flexFlow: "column",
});

const AppContainer = styled.div({
	flex: 1,
	display: "flex",
});

const sx = {
	flexGrow: 1,
	width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
} as const;

function App() {
	return (
		<Container>
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
					<AppContainer>{<Outlet />}</AppContainer>
				</Box>
			</Box>
		</Container>
	);
}

export default App;
