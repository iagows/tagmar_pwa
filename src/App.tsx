import { Box, Toolbar } from "@mui/material";
import styled from "styled-components";
import AppContent from "./components/AppContent";
import TagDrawer from "./components/TagmarUI/Drawer";
import { DRAWER_WIDTH } from "./util/constants";

const Container = styled.div({
	display: "flex",
	flexFlow: "column",
});

function App() {
	return (
		<Container>
			<Box sx={{ display: "flex" }}>
				<TagDrawer />
				<Box
					height={"100vh"}
					display={"flex"}
					component="main"
					flexDirection={"column"}
					sx={{
						flexGrow: 1,
						width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
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
