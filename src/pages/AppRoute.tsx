import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageConfiguracoes from "./PageConfiguracoes";
import PageDado from "./PageDado";
import PageError from "./PageError";
import PageFicha from "./PageFicha";
import PageFichas from "./PageFichas";
import PageHabilidade from "./PageHabilidade";
import PageHabilidades from "./PageHabilidades";
import PageMagia from "./PageMagia";
import PageMagias from "./PageMagias";
import PageMapa from "./PageMapa";
import PageMapas from "./PageMapas";
import PageSobre from "./PageSobre";
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
