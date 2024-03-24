import { Box } from "@mui/material";
import { useEffect } from "react";
import {
	Link,
	useLocation,
	useNavigate,
	useRouteError,
} from "react-router-dom";
import TagLabel from "../components/TagmarUI/Label";
import { RoutePath } from "../routing/RouteNames";

type ErrorOut = {
	pathname: string;
	error?: { message: string };
};
const useError = (): ErrorOut => {
	const { pathname } = useLocation();
	const error = useRouteError() as undefined | { message: string };

	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(RoutePath.FICHAS);
		}, 10000);
	}, [navigate]);

	return {
		pathname,
		error,
	};
};

const PageError = () => {
	const { pathname, error } = useError();
	return (
		<Box>
			<TagLabel>Tagmar app. Versão: {__APP_VERSION__}</TagLabel>
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
