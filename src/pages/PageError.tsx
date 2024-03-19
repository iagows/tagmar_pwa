import { Link, useLocation, useRouteError } from "react-router-dom";

const PageError = () => {
	// mudar menu
	// mudar app bar
	// mudar head > title
	const { pathname } = useLocation();
	const error = useRouteError() as undefined | { message: string };
	return (
		<div>
			<p>
				{pathname} - Erro: {error?.message}
			</p>
			<Link to="/">Go back to Home Page</Link>
		</div>
	);
};

export default PageError;
