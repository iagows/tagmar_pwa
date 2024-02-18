import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

const TagLabel = ({ children }: PropsWithChildren) => {
	return <Typography variant="body2">{children}</Typography>;
};

export default TagLabel;
