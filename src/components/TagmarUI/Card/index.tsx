import { Card, CardActionArea, CardContent } from "@mui/material";
import { PropsWithChildren } from "react";
import { THEME_OPTIONS } from "../../../theme";
import { changeOpacity } from "../../../util/functions";

const TagCard = ({ children }: PropsWithChildren) => {
	return (
		<Card
			sx={{
				backgroundColor: changeOpacity(
					// biome-ignore lint/style/noNonNullAssertion: <eu criei>
					THEME_OPTIONS.palette!.background!.default!,
					0.8,
				),
			}}
		>
			<CardActionArea>
				<CardContent>{children}</CardContent>
			</CardActionArea>
		</Card>
	);
};
export default TagCard;
