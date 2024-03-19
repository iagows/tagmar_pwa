import { Box } from "@mui/material";
import { Link, useLocation, useRouteError } from "react-router-dom";
import TagLabel from "../components/TagmarUI/Label";

const PageError = () => {
	// mudar menu
	// mudar app bar
	// mudar head > title
	const { pathname } = useLocation();
	const error = useRouteError() as undefined | { message: string };
	return (
		<Box>
			<TagLabel>
				{pathname} - Erro: {error?.message}
			</TagLabel>
			<Link to="/">
				<TagLabel>Go back to Home Page</TagLabel>
			</Link>
		</Box>
	);
};

export default PageError;
