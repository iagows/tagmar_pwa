import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Constants } from "../util/constants";

type In = {
	bg?: string;
};
const PageContainer = ({ children, bg }: PropsWithChildren<In>) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: "flex",
				backgroundImage: bg,
				flexDirection: "column",
				backgroundSize: "cover",
				padding: Constants.CSS.padding.page,
				backgroundRepeat: "no-repeat",
			}}
		>
			{children}
		</Box>
	);
};

export default PageContainer;
