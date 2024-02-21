import { Navigate, createBrowserRouter } from "react-router-dom";
import PageDado from "./PageDado";
import PageFicha from "./PageFicha";
import PageFichas from "./PageFichas";
import { RoutePath } from "./RouteNames";
import App from "../App";
import PageError from "./PageError";

const BASENAME = "/tagmar_pwa";

export const route = createBrowserRouter(
	[
		{
			path: RoutePath.ROOT,
			element: <App />,
			errorElement: <PageError />,

			children: [
				{
					path: RoutePath.FICHAS,
					element: <PageFichas />,
				},
				{
					path: RoutePath.FICHA,
					element: <PageFicha />,
				},
				{
					path: RoutePath.DADO,
					element: <PageDado />,
				},
				{
					index: true,
					element: <Navigate to={RoutePath.FICHAS} replace />,
				},
			],
		},
	],
	{
		basename: BASENAME,
	},
);
