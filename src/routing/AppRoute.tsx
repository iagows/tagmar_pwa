import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageConfiguracoes from "../pages/PageConfiguracoes";
import PageDado from "../pages/PageDado";
import PageError from "../pages/PageError";
import PageFicha from "../pages/PageFicha";
import PageFichas from "../pages/PageFichas";
import PageHabilidade from "../pages/PageHabilidade";
import PageHabilidades from "../pages/PageHabilidades";
import PageMagia from "../pages/PageMagia";
import PageMagias from "../pages/PageMagias";
import PageMapa from "../pages/PageMapa";
import PageMapas from "../pages/PageMapas";
import PageSobre from "../pages/PageSobre";
import { RoutePath } from "./RouteNames";

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
					path: RoutePath.MAGIAS,
					element: <PageMagias />,
				},
				{
					path: RoutePath.MAGIA,
					element: <PageMagia />,
				},
				{
					path: RoutePath.HABILIDADES,
					element: <PageHabilidades />,
				},
				{
					path: RoutePath.HABILIDADE,
					element: <PageHabilidade />,
				},
				{
					path: RoutePath.MAPAS,
					element: <PageMapas />,
				},
				{
					path: RoutePath.MAPA,
					element: <PageMapa />,
				},
				{
					path: RoutePath.CONFIGURACOES,
					element: <PageConfiguracoes />,
				},
				{
					path: RoutePath.SOBRE,
					element: <PageSobre />,
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
