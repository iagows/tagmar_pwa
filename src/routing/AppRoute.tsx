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
import { RouteHandle } from "../util/commonTypes";
import { Constants } from "../util/constants";

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
					handle: {
						title: Constants.PAGES.fichas,
						isMainRoute: true,
					} as RouteHandle,
				},
				{
					path: RoutePath.FICHA,
					element: <PageFicha />,
					handle: {
						title: "Personagem",
					} as RouteHandle,
				},
				{
					path: RoutePath.DADO,
					element: <PageDado />,
					handle: {
						title: Constants.PAGES.dado,
						isMainRoute: true,
					} as RouteHandle,
				},
				{
					path: RoutePath.MAGIAS,
					element: <PageMagias />,
					handle: {
						title: Constants.PAGES.magias,
						isMainRoute: true,
					} as RouteHandle,
				},
				{
					path: RoutePath.MAGIA,
					element: <PageMagia />,
					handle: {
						title: "Magia",
					} as RouteHandle,
				},
				{
					path: RoutePath.HABILIDADES,
					element: <PageHabilidades />,
					handle: {
						title: Constants.PAGES.habilidades,
						isMainRoute: true,
					} as RouteHandle,
				},
				{
					path: RoutePath.HABILIDADE,
					element: <PageHabilidade />,
					handle: {
						title: "Habilidade",
					} as RouteHandle,
				},
				{
					path: RoutePath.MAPAS,
					element: <PageMapas />,
					handle: {
						title: Constants.PAGES.mapas,
						isMainRoute: true,
					} as RouteHandle,
				},
				{
					path: RoutePath.MAPA,
					element: <PageMapa />,
					handle: {
						title: "Mapa",
					} as RouteHandle,
				},
				{
					path: RoutePath.CONFIGURACOES,
					element: <PageConfiguracoes />,
					handle: {
						title: Constants.PAGES.configuracoes,
						isMainRoute: true,
					} as RouteHandle,
				},
				{
					path: RoutePath.SOBRE,
					element: <PageSobre />,
					handle: {
						title: Constants.PAGES.sobre,
						isMainRoute: true,
					} as RouteHandle,
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