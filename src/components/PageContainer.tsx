import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab } from "@mui/material";
import { PropsWithChildren } from "react";
import { Constants } from "../util/constants";
import ScrollTop from "./ScrollTop";

type In = {
	bg?: string;
};
const PageContainer = ({ children, bg }: PropsWithChildren<In>) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: "flex",
				overflowY: "scroll",
				backgroundImage: bg,
				flexDirection: "column",
				backgroundSize: "cover",
				padding: Constants.CSS.padding.page,
				backgroundRepeat: "no-repeat",
			}}
		>
			<div id="back-to-top-anchor" />
			{children}
			<ScrollTop>
				<Fab size="small" aria-label="scroll back to top" color="primary">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</Box>
	);
};

export default PageContainer;
